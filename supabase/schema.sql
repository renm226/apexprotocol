-- Enable UUID generation
create extension if not exists "pgcrypto";

-- ───────────────────────────────────────────────────────────────
-- BOOKS
-- ───────────────────────────────────────────────────────────────
create table public.books (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  author       text,
  description  text,
  cover_url    text,
  file_path    text not null,        -- path inside Supabase Storage bucket "books"
  category     text,                 -- 'ai' | 'networking' | 'hacking' | 'software' | etc.
  size_mb      numeric(6,2),
  page_count   int,
  published_at date,
  created_at   timestamptz default now()
);

alter table public.books enable row level security;

create policy "Books visible to authenticated users" on public.books
  for select using (auth.role() = 'authenticated');

create policy "Books managed by service role" on public.books
  for all using (auth.role() = 'service_role');


-- ───────────────────────────────────────────────────────────────
-- LIBRARY ACCESS (one-time payment — lifetime access)
-- ───────────────────────────────────────────────────────────────
create table public.library_access (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid references auth.users not null unique,  -- one record per user
  paypal_order_id  text unique not null,                        -- prevents replay attacks
  amount_paid      numeric(8,2) not null,
  currency         text not null default 'USD',
  status           text not null default 'active',              -- 'active' | 'refunded'
  granted_at       timestamptz default now()
);

alter table public.library_access enable row level security;

create policy "Users can read own access" on public.library_access
  for select using (auth.uid() = user_id);

-- No INSERT policy for users — only service role can write (via API route with service key)
create policy "Service role manages access" on public.library_access
  for all using (auth.role() = 'service_role');


-- ───────────────────────────────────────────────────────────────
-- BOOK REQUESTS
-- ───────────────────────────────────────────────────────────────
create table public.book_requests (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid references auth.users,
  title      text not null,
  author     text,
  reason     text,
  status     text not null default 'pending',   -- 'pending' | 'approved' | 'rejected'
  created_at timestamptz default now()
);

alter table public.book_requests enable row level security;

create policy "Users can view own requests" on public.book_requests
  for select using (auth.uid() = user_id);

create policy "Authenticated users can submit requests" on public.book_requests
  for insert with check (auth.uid() = user_id);

create policy "Service role manages requests" on public.book_requests
  for all using (auth.role() = 'service_role');


-- ───────────────────────────────────────────────────────────────
-- DOWNLOAD LOGS
-- ───────────────────────────────────────────────────────────────
create table public.download_logs (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid references auth.users not null,
  book_id       uuid references public.books not null,
  downloaded_at timestamptz default now()
);

alter table public.download_logs enable row level security;

create policy "Users can view own download history" on public.download_logs
  for select using (auth.uid() = user_id);

create policy "Service role manages logs" on public.download_logs
  for all using (auth.role() = 'service_role');


-- ───────────────────────────────────────────────────────────────
-- HELPER: check if a user has paid for library access
-- ───────────────────────────────────────────────────────────────
create or replace function public.user_has_library_access(uid uuid)
returns boolean
language sql
security definer
as $$
  select exists (
    select 1 from public.library_access
    where user_id = uid
      and status = 'active'
  );
$$;
