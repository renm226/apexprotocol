/**
 * ApexProtocol — responsive.js
 * Drop into  js/responsive.js  and load AFTER main.js
 */
(function () {
  'use strict';

  const AREAS = [
    { id: 'ai',      name: '◈ AI / ML' },
    { id: 'net',     name: '⬡ Networking' },
    { id: 'hack',    name: '⚡ Hacking' },
    { id: 'soft',    name: '⎄ Software' },
    { id: 'crypto',  name: '⛓ Blockchain' },
    { id: 'cloud',   name: '☁ Cloud & DevOps' },
    { id: 'mobile',  name: '📱 Mobile' },
    { id: 'devsec',  name: '🛡 DevSecOps' },
    { id: 'selfdev', name: '🌟 Self Development' },
  ];

  let currentArea = 'ai';
  let dropdownOpen = false;

  /* ── BUILD DROPDOWN ───────────────────────────────────── */
  function buildDropdown() {
    // Create wrapper elements
    const wrapper = document.createElement('div');
    wrapper.className = 'mob-area-dropdown';
    wrapper.id = 'mobAreaDropdown';

    const trigger = document.createElement('button');
    trigger.className = 'mob-area-trigger';
    trigger.id = 'mobAreaTrigger';
    trigger.innerHTML = `
      <span class="mob-trigger-label" id="mobTriggerLabel">◈ AI / ML</span>
      <span class="mob-trigger-arrow">▼</span>
    `;
    trigger.addEventListener('click', toggleDropdown);

    const menu = document.createElement('div');
    menu.className = 'mob-area-menu';
    menu.id = 'mobAreaMenu';
    menu.innerHTML = AREAS.map(area => `
      <div class="mob-area-item${area.id === currentArea ? ' active' : ''}"
           data-area="${area.id}"
           role="option"
           aria-selected="${area.id === currentArea}">
        <span class="area-dot"></span>
        ${area.name}
      </div>
    `).join('');

    // Click each item
    menu.querySelectorAll('.mob-area-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-area');
        selectArea(id);
      });
    });

    wrapper.appendChild(trigger);
    wrapper.appendChild(menu);

    // Insert into header after logo, before header-actions
    const header = document.querySelector('.site-header');
    const actions = header.querySelector('.header-actions');
    header.insertBefore(wrapper, actions);
  }

  function toggleDropdown() {
    dropdownOpen ? closeDropdown() : openDropdown();
  }

  function openDropdown() {
    dropdownOpen = true;
    document.getElementById('mobAreaMenu').classList.add('open');
    document.getElementById('mobAreaTrigger').classList.add('open');
  }

  function closeDropdown() {
    dropdownOpen = false;
    const menu    = document.getElementById('mobAreaMenu');
    const trigger = document.getElementById('mobAreaTrigger');
    if (menu)    menu.classList.remove('open');
    if (trigger) trigger.classList.remove('open');
  }

  function selectArea(id) {
    currentArea = id;
    closeDropdown();

    // Update trigger label
    const area = AREAS.find(a => a.id === id);
    const label = document.getElementById('mobTriggerLabel');
    if (label && area) label.textContent = area.name;

    // Highlight active item
    document.querySelectorAll('.mob-area-item').forEach(item => {
      const isActive = item.getAttribute('data-area') === id;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-selected', isActive);
    });

    // Call the main.js switchArea
    if (typeof window.switchArea === 'function') window.switchArea(id);
  }

  /* ── SIDEBAR DRAWER ───────────────────────────────────── */
  function buildHamburger() {
    const btn = document.createElement('button');
    btn.className = 'mob-menu-btn';
    btn.id = 'mobMenuBtn';
    btn.setAttribute('aria-label', 'Toggle phases menu');
    btn.textContent = '☰';
    btn.addEventListener('click', toggleSidebar);

    const actions = document.querySelector('.header-actions');
    if (actions) actions.appendChild(btn);
  }

  function buildOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.id = 'sidebarOverlay';
    overlay.addEventListener('click', closeSidebar);

    const layout = document.getElementById('layout');
    if (layout) layout.insertBefore(overlay, layout.firstChild);
  }

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    sidebar.classList.contains('mob-open') ? closeSidebar() : openSidebar();
  }

  function openSidebar() {
    const sidebar  = document.getElementById('sidebar');
    const overlay  = document.getElementById('sidebarOverlay');
    const btn      = document.getElementById('mobMenuBtn');
    if (sidebar) sidebar.classList.add('mob-open');
    if (overlay) overlay.classList.add('show');
    if (btn)     btn.textContent = '✕';
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    const sidebar  = document.getElementById('sidebar');
    const overlay  = document.getElementById('sidebarOverlay');
    const btn      = document.getElementById('mobMenuBtn');
    if (sidebar) sidebar.classList.remove('mob-open');
    if (overlay) overlay.classList.remove('show');
    if (btn)     btn.textContent = '☰';
    document.body.style.overflow = '';
  }

  /* Close sidebar when a phase is clicked (auto-navigate) */
  function patchScrollToPhase() {
    const orig = window.scrollToPhase;
    if (!orig) return;
    window.scrollToPhase = function (phaseIdx) {
      orig(phaseIdx);
      if (window.innerWidth <= 640) setTimeout(closeSidebar, 120);
    };
  }

  /* Swipe-left on sidebar → close */
  function attachSwipe() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    let sx = 0, sy = 0;
    sidebar.addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    sidebar.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = Math.abs(e.changedTouches[0].clientY - sy);
      if (dx < -50 && dy < 40) closeSidebar();
    }, { passive: true });
  }

  /* Close dropdown when tapping outside */
  function attachOutsideClick() {
    document.addEventListener('click', e => {
      if (!dropdownOpen) return;
      const wrapper = document.getElementById('mobAreaDropdown');
      if (wrapper && !wrapper.contains(e.target)) closeDropdown();
    });
  }

  /* ESC key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeDropdown(); closeSidebar(); }
  });

  /* Re-close sidebar on resize to desktop */
  window.addEventListener('resize', () => {
    if (window.innerWidth > 640) { closeSidebar(); closeDropdown(); }
  });

  /* Expose globally */
  window.closeMobileSidebar = closeSidebar;

  /* ── INIT ─────────────────────────────────────────────── */
  function init() {
    buildDropdown();
    buildHamburger();
    buildOverlay();
    attachOutsideClick();
    // Patch after main.js has set window.scrollToPhase
    setTimeout(patchScrollToPhase, 150);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();