export const softwareData = {
  name: "SOFTWARE ENGINEERING",
  area: "soft",
  eyebrow: "Data Structures · Algorithms · System Design · Architecture · Databases · Performance",
  sub: "The engineers who get stuck at mid-level for years are not the ones who cannot code. They are the ones who never developed a mental model for how systems behave under load, why certain designs collapse when scale increases, or how to reason about the correctness of their own solutions. This roadmap builds the foundations that separate engineers who can implement from engineers who can design.",
  phases: [
    {
      name: "Data Structures and Algorithms",
      level: "foundation",
      tagline: "The vocabulary for reasoning about computational efficiency",
      desc: "Data structures and algorithms are not interview trivia — they are the vocabulary you need to have informed conversations about tradeoffs in system design. Not every production problem requires a custom AVL tree. But an engineer who does not understand why hash tables have O(1) average lookup, or why B-trees are the default for database indexes, or why naive sorting of 100M items on a single machine is a bad idea, will make systematically poor decisions about the components they build and use.",
      topics: [
        {
          name: "Complexity Analysis and Core Data Structures",
          tag: "core",
          desc: "Big-O notation describes how an algorithm's resource usage grows as input size grows — it characterizes the limiting behavior, not the constant factor. O(1) is constant, O(log n) grows slowly (binary search, balanced tree operations), O(n) is linear, O(n log n) is typical of good sorting, O(n²) is the mark of nested iteration that becomes unusable at scale. Arrays have O(1) random access because elements are contiguous in memory — you multiply the index by the element size to compute the address directly. Linked lists have O(1) insertion and deletion at a known position but O(n) access — you must walk from the head. Hash tables achieve average O(1) insert, lookup, and delete by mapping keys to array indices using a hash function. Collision resolution: chaining (each bucket is a linked list) or open addressing (probe for the next available bucket). Hash table degradation: a bad hash function or high load factor causes many collisions and degrades performance toward O(n). Stacks (LIFO) and queues (FIFO) are constraints on access, not separate data structures — they are implemented with arrays or linked lists.",
          master: [
            "Explain O(1), O(log n), O(n), O(n log n), O(n²) with a concrete algorithm example for each",
            "Explain why array random access is O(1) at the memory level",
            "Explain hash table collision resolution: chaining versus open addressing, and how load factor affects performance",
            "Implement a hash table from scratch: hash function, bucket array, collision handling, resize logic",
            "Explain when a linked list is the right choice over an array and when it is not",
            "Describe the time and space complexity of the fundamental operations for arrays, linked lists, stacks, queues, and hash tables"
          ],
          res: [
            "The Algorithm Design Manual (Steven Skiena) — the most practical algorithms text",
            "Introduction to Algorithms (Cormen et al., CLRS) — the rigorous reference",
            "LeetCode Explore (leetcode.com) — structured exercises on each data structure",
            "Visualgo (visualgo.net) — animated algorithm and data structure visualizations"
          ]
        },
        {
          name: "Trees, Graphs, and Sorting",
          tag: "core",
          desc: "Binary search trees maintain sorted order: left subtree has smaller keys, right subtree has larger keys. In-order traversal produces sorted output. BST operations are O(h) where h is the height — in a balanced tree that is O(log n), in the worst case (sorted input) the tree degenerates into a linked list and h = n. Balanced BSTs (AVL, Red-Black) guarantee O(log n) by maintaining height balance through rotations. Heaps are complete binary trees with the heap property: the parent is larger (max-heap) or smaller (min-heap) than its children. Array representation of a heap: the children of index i are at 2i+1 and 2i+2. HeapSort and priority queues use the heap data structure. Graphs have vertices and edges — directed or undirected, weighted or unweighted. BFS uses a queue, explores level by level, finds shortest path in unweighted graphs. DFS uses a stack (or recursion), explores depth-first, useful for topological sort, cycle detection, connected components. Sorting: merge sort is O(n log n) always, stable, uses O(n) extra space. Quicksort is O(n log n) average, O(n²) worst case, O(log n) stack space, faster in practice due to cache behavior.",
          master: [
            "Explain why a naive BST degenerates to O(n) with sorted input and how AVL trees prevent this",
            "Implement BFS and DFS on a graph from scratch and explain the difference in what each explores first",
            "Use BFS to find the shortest path between two nodes in an unweighted graph",
            "Explain Dijkstra's algorithm: what it finds, why it needs a priority queue, and where it fails",
            "Explain merge sort and quicksort: why quicksort is faster in practice despite the same average complexity",
            "Implement a topological sort and describe a real-world problem it solves"
          ],
          res: [
            "The Algorithm Design Manual (Skiena) Chapters 5–7 — graph algorithms",
            "NeetCode roadmap (neetcode.io) — curated problem set organized by pattern",
            "Grokking Algorithms (Aditya Bhargava) — visual explanations, good for solidifying intuition",
            "LeetCode Patterns — identify the 20 algorithm patterns that solve 80% of problems"
          ]
        }
      ]
    },
    {
      name: "Systems Design Foundations",
      level: "intermediate",
      tagline: "Building systems that work under conditions you did not anticipate",
      desc: "A system that works for one user rarely works for one million. The challenges of scale are not primarily about writing faster code — they are about eliminating bottlenecks, distributing load, handling partial failures gracefully, and making explicit trade-offs between consistency, availability, and partition tolerance. Systems design is the practice of making those trade-offs deliberately.",
      topics: [
        {
          name: "Distributed Systems Fundamentals",
          tag: "core",
          desc: "The CAP theorem states that a distributed system can provide at most two of: Consistency (every read receives the most recent write), Availability (every request receives a response), Partition Tolerance (the system continues operating when some nodes cannot communicate). In practice, network partitions happen — you choose between consistency and availability when they do. PACELC extends CAP: even without partitions, there is a trade-off between latency and consistency. Strong consistency means all nodes see the same value at the same time — requires coordination. Eventual consistency means all nodes will converge to the same value eventually — enables better performance and availability. The distributed systems fallacies: the network is reliable; latency is zero; bandwidth is infinite; the network is secure; topology does not change; there is one administrator; transport cost is zero; the network is homogeneous. Every senior engineer has been burned by assuming one of these. Idempotency is a property of operations that can be applied multiple times without different outcomes — at-least-once delivery combined with idempotent operations gives you effectively-once semantics without distributed transactions.",
          master: [
            "Explain the CAP theorem with a concrete example of each trade-off decision in a real system",
            "Describe eventual consistency and give a real-world example of a system where it is the correct choice",
            "Explain idempotency: what it means, why it matters for retries, and how to design an idempotent API",
            "Describe the two-phase commit protocol: what it guarantees and why distributed transactions are avoided",
            "Explain the difference between synchronous and asynchronous replication and the durability trade-off",
            "Describe the consensus problem and explain why Raft is easier to understand than Paxos"
          ],
          res: [
            "Designing Data-Intensive Applications (Martin Kleppmann) — the essential distributed systems book for practitioners",
            "The Raft Consensus Algorithm (Diego Ongaro, John Ousterhout) — the readable consensus protocol",
            "AWS re:Invent talks on distributed systems — practical, experience-based",
            "Notes on Distributed Systems for Young Bloods (Jeff Hodges) — read this early and often"
          ]
        },
        {
          name: "Caching, Load Balancing, and Horizontal Scaling",
          tag: "core",
          desc: "Caching trades memory for speed by storing the result of expensive computations or queries. Cache hit rate is the metric that matters — a cache with 50% hit rate provides little benefit. The hardest problems in caching are not implementation — they are invalidation (when should a cached value be considered stale), eviction (what to remove when the cache is full, with LRU being the most common policy), and thundering herd (many requests hitting the database simultaneously after a popular cached item expires). Load balancers distribute traffic across multiple instances. Round-robin assigns requests sequentially; least-connections sends to the instance with fewest active connections; consistent hashing maps requests to instances in a way that minimizes redistribution when instances are added or removed. Horizontal scaling adds more instances; vertical scaling adds more resources to one instance. Stateless services scale horizontally easily — any instance can serve any request. Stateful services require sticky sessions or externalized state (Redis, database) to scale horizontally.",
          master: [
            "Describe three cache invalidation strategies and explain the trade-offs between cache freshness and database load",
            "Explain the thundering herd problem and describe two ways to prevent it",
            "Explain consistent hashing: how it works and why it is preferred over modulo hashing for distributed caches",
            "Describe the difference between L1/L2/L3 caches (application, distributed, CDN) and give a use case for each",
            "Design a system to cache database query results for an endpoint that receives 10,000 requests per second",
            "Explain why stateless architecture is a prerequisite for horizontal scaling"
          ],
          res: [
            "Designing Data-Intensive Applications (Kleppmann) Chapter 5 — replication and caching",
            "Redis documentation — the standard distributed cache, read the data type documentation",
            "System Design Interview (Alex Xu) — practical walk-throughs of common design problems",
            "AWS ElastiCache documentation — real caching infrastructure patterns"
          ]
        },
        {
          name: "Databases: Relational and Non-Relational",
          tag: "core",
          desc: "Relational databases store data in tables with enforced schemas and support ACID transactions. ACID: Atomicity (the transaction completes fully or not at all), Consistency (constraints are enforced), Isolation (concurrent transactions do not see each other's intermediate state), Durability (committed transactions survive crashes). Isolation levels trade correctness for performance: Read Uncommitted allows dirty reads, Read Committed prevents dirty reads but allows non-repeatable reads, Repeatable Read prevents non-repeatable reads but allows phantom reads, Serializable prevents all anomalies. B-tree indexes keep data sorted — efficient for range queries and equality lookups. Covering indexes include all columns needed by a query, eliminating the table lookup entirely. Query optimization: explain/analyze shows the query plan and whether indexes are being used. Non-relational databases sacrifice some SQL features for specific performance or scalability properties: document stores (MongoDB) for flexible schema, key-value stores (Redis) for simple lookup, column families (Cassandra) for high write throughput and time-series data, graph databases (Neo4j) for relationship-heavy queries.",
          master: [
            "Explain ACID properties with a concrete example of what each property prevents",
            "Describe the four isolation levels and give an anomaly that each higher level prevents",
            "Explain how a B-tree index works and why it makes queries faster — include what a clustered versus non-clustered index means",
            "Use EXPLAIN/ANALYZE on a slow query, identify the bottleneck, and fix it",
            "Describe N+1 query problem: how it arises and two ways to fix it",
            "Choose between a relational and a document database for a specific use case and justify the decision"
          ],
          res: [
            "Designing Data-Intensive Applications (Kleppmann) Chapters 2–4 — the best database fundamentals coverage",
            "Use the Index, Luke (use-the-index-luke.com) — SQL indexing for developers, free",
            "PostgreSQL documentation — read the sections on query planning and index types",
            "Database Internals (Alex Petrov) — storage engines and distributed database internals"
          ]
        }
      ]
    },
    {
      name: "Software Architecture Patterns",
      level: "intermediate",
      tagline: "Architecture decisions outlast every other decision you make",
      desc: "Architecture patterns are not solutions to specific problems — they are reusable structures that solve categories of problems while introducing specific trade-offs. The right pattern depends on the team size, deployment model, performance requirements, and how the system is expected to change. An engineer who applies microservices to a two-person startup creates a distributed monolith with all the downsides of both approaches. An engineer who keeps a monolith at 50 engineers with divergent deployment requirements creates a bottleneck for the entire organization.",
      topics: [
        {
          name: "Monoliths, Microservices, and Service Design",
          tag: "intermediate",
          desc: "A monolith is a single deployable unit containing all application functionality. Well-structured monoliths are fast to develop, easy to test, and simple to deploy — they are the right choice for most systems at their initial stage. They become problematic when different parts of the system need to scale independently, when teams need to deploy independently, or when technological diversity is required. Microservices decompose the system into independently deployable services with well-defined interfaces. The trade-offs are real and non-trivial: distributed tracing becomes essential because a single request spans many services, service-to-service communication failures must be handled explicitly, data consistency across services requires saga patterns or eventual consistency rather than database transactions, and operational complexity increases substantially. The strangler fig pattern incrementally migrates a monolith to microservices: new functionality is built as a separate service, old functionality is gradually replaced. Doing this correctly requires a well-defined API contract before the first service boundary is introduced.",
          master: [
            "Describe the failure modes of a poorly executed monolith-to-microservices migration",
            "Explain the Strangler Fig pattern and describe the sequence of steps for a safe migration",
            "Describe what a saga pattern is and explain why it is necessary when a transaction spans multiple services",
            "Explain when a monolith is the correct architecture and give the specific signs that indicate it is time to decompose",
            "Design the service boundaries for a specific application — justify each boundary and identify the cross-service calls",
            "Describe how distributed tracing works and why it is required in a microservices architecture"
          ],
          res: [
            "Building Microservices (Sam Newman) — the definitive microservices reference",
            "Monolith to Microservices (Sam Newman) — the migration patterns",
            "Martin Fowler's microservices articles (martinfowler.com) — required reading on the trade-offs",
            "Microservices Patterns (Chris Richardson) — saga, CQRS, and other patterns"
          ]
        },
        {
          name: "API Design: REST, GraphQL, and gRPC",
          tag: "intermediate",
          desc: "REST is an architectural style, not a protocol — most APIs called 'REST' are actually HTTP APIs that vary widely in how closely they follow REST constraints. The Richardson Maturity Model describes levels from Level 0 (HTTP as a transport) to Level 3 (hypermedia controls). HTTP verbs have semantics: GET is safe and idempotent, POST creates, PUT replaces (idempotent), PATCH modifies partially, DELETE removes (idempotent). Status codes must be accurate — returning 200 OK with an error message in the body is a widely practiced antipattern. Versioning: URL versioning (/v1/) is explicit; Accept header versioning is theoretically correct; both work. GraphQL allows clients to specify exactly what data they need — it solves over-fetching (too much data) and under-fetching (too many round trips) at the cost of complexity in caching, authorization, and server-side performance (deeply nested queries can become N+1 nightmares). gRPC uses Protocol Buffers for serialization — typed, compact, fast, and excellent for internal service-to-service communication. The generated client code eliminates a class of integration errors.",
          master: [
            "Design a REST API for a resource: correct HTTP verbs, status codes, URL structure, and pagination",
            "Explain idempotency in the context of HTTP: which methods are idempotent and why it matters for retries",
            "Describe the N+1 problem in GraphQL and the DataLoader pattern that solves it",
            "Compare REST, GraphQL, and gRPC: when each is the right choice",
            "Design a versioning strategy for a public API and explain the trade-offs",
            "Explain HTTP caching: Cache-Control, ETags, and conditional requests — when they work and when they do not"
          ],
          res: [
            "REST API Design Rulebook (Mark Masse) — systematic REST design conventions",
            "GraphQL documentation (graphql.org) — read the specification overview",
            "gRPC documentation (grpc.io) — Protocol Buffers and service definition",
            "API Design Patterns (JJ Geewax) — comprehensive API design reference from a Google engineer"
          ]
        }
      ]
    },
    {
      name: "Code Quality and Testing",
      level: "intermediate",
      tagline: "The engineers who write tests are not slower — they are faster on a three-month horizon",
      desc: "Code that is not tested is not complete. Not because tests are required by process, but because without tests you cannot refactor with confidence, cannot verify your understanding of edge cases, and cannot hand the code to someone else without an in-person knowledge transfer. The most important insight about testing is not coverage percentage — it is the distinction between tests that are coupled to implementation (brittle, break on refactoring) and tests that are coupled to behavior (stable, specify what the code must do).",
      topics: [
        {
          name: "Unit Testing and Test Design",
          tag: "core",
          desc: "A unit test tests a single unit of behavior in isolation. The definition of 'unit' is a behavior, not a class — a test that describes what a function does, not how it does it, is coupled to the interface and survives refactoring. Tests that test implementation details (internals, private methods, specific call counts on mocks) are brittle and create maintenance overhead without providing confidence. Arrange-Act-Assert: set up the preconditions, execute the code under test, verify the outcome. Test naming should describe the scenario and expected outcome: 'whenUserEmailIsInvalid_shouldReturnValidationError' rather than 'testEmail'. Mocking: replace a dependency with a test double that returns controlled outputs. The risk is that mocks can diverge from the real dependency — a test that passes because the mock returns the 'correct' response does not prove the integration works. Use real objects for fast, in-process dependencies; mock only slow or nondeterministic external services.",
          master: [
            "Explain the difference between a unit test that tests behavior versus one that tests implementation — give an example of each",
            "Describe what makes a test brittle and rewrite a brittle test to be stable",
            "Explain the difference between mocks, stubs, spies, and fakes — when each is appropriate",
            "Describe test pyramid structure and explain why inverted pyramids (many E2E, few unit tests) cause slow CI",
            "Write tests for a function before writing the function — describe what you learn from doing this",
            "Explain parameterized tests and when they reduce duplication without sacrificing clarity"
          ],
          res: [
            "Working Effectively with Legacy Code (Michael Feathers) — how to add tests to untested code",
            "Unit Testing Principles, Practices, and Patterns (Vladimir Khorikov) — the best modern testing book",
            "Test-Driven Development (Kent Beck) — the original TDD book",
            "Google Testing Blog (testing.googleblog.com) — practical testing guidance from Google's test engineering team"
          ]
        },
        {
          name: "Integration Testing and CI/CD",
          tag: "intermediate",
          desc: "Integration tests verify that components work together correctly. They are slower than unit tests, harder to parallelize, and more likely to be flaky — but they catch a category of bugs that unit tests cannot: the contract between components. Database tests: test against a real database (in-memory or containerized) rather than mocking the ORM — schema migrations, query behavior, and transaction isolation are not captured by mocks. API integration tests: run the full HTTP stack including middleware, serialization, and authentication. Consumer-driven contract testing (Pact) allows the consumer of an API to define the contract and the provider to verify it independently, without requiring both services to be running simultaneously. Continuous Integration: every push runs the full test suite. A CI pipeline that takes 45 minutes creates 45-minute feedback loops and encourages batching changes, which defeats the purpose. Fast feedback requires separating fast tests (unit, sub-minute) from slow tests (integration, E2E) and running them at different stages.",
          master: [
            "Describe the trade-off between test isolation (mocks) and test fidelity (real dependencies) — where each belongs in the test pyramid",
            "Explain consumer-driven contract testing and the problem it solves versus end-to-end testing",
            "Design a CI/CD pipeline with test stages appropriate to their execution time and confidence level",
            "Describe database testing: why integration tests should use a real database and how to manage test data isolation",
            "Explain what makes a flaky test flaky and describe systematic approaches to fix flakiness",
            "Design a deployment pipeline with rollback capability and explain what metrics trigger a rollback"
          ],
          res: [
            "Continuous Delivery (Jez Humble, David Farley) — the foundational CD book",
            "Pact contract testing documentation (docs.pact.io) — practical consumer-driven contracts",
            "Accelerate (Nicole Forsgren, Jez Humble, Gene Kim) — the data-driven argument for CD practices",
            "GitHub Actions or CircleCI documentation — the practical CI implementation"
          ]
        }
      ]
    },
    {
      name: "Performance Engineering",
      level: "advanced",
      tagline: "Premature optimization is evil; ignoring performance in production is worse",
      desc: "Most performance problems are not in the places you expect them. The first step is always measurement — profiling the actual running system to find where time is actually spent, not where you assume it is spent. The second step is understanding the hardware: CPU caches, memory bandwidth, disk I/O characteristics, and network latency. Optimizations that ignore the hardware model often make things worse.",
      topics: [
        {
          name: "Profiling, Benchmarking, and Finding Bottlenecks",
          tag: "advanced",
          desc: "You cannot optimize what you have not measured. A profiler samples the call stack at regular intervals and builds a picture of where the program spends its time. Flame graphs visualize profiler output as nested rectangles — the width of each rectangle is proportional to the fraction of time spent in that function. CPU-bound: the bottleneck is in computation. I/O-bound: the bottleneck is in waiting for disk, network, or database. Benchmarking is measuring the performance of a specific code path in isolation. Common mistakes: not warming up the JIT compiler, measuring wall time instead of CPU time, not running enough iterations to average out noise, not controlling for GC pauses. The Linux perf toolkit, async-profiler (JVM), py-spy (Python), and pprof (Go) are the standard profiling tools. Database queries are usually the first place to look in web application performance: N+1 queries, missing indexes, and queries that return far more data than needed are responsible for the majority of application slowness.",
          master: [
            "Profile a web application end-to-end and identify the top three contributors to request latency",
            "Read a flame graph: identify the hottest path and describe what it means for optimization priority",
            "Write a benchmark and explain the common mistakes that produce misleading results",
            "Use EXPLAIN ANALYZE to diagnose a slow SQL query and fix it",
            "Explain the CPU cache hierarchy: L1/L2/L3 sizes and latencies — describe a code pattern that is cache-unfriendly and how to fix it",
            "Describe the difference between throughput and latency and explain why optimizing for one can hurt the other"
          ],
          res: [
            "Systems Performance (Brendan Gregg) — the definitive performance analysis reference",
            "Flame Graphs (Brendan Gregg blog) — the inventor explains the tool",
            "The Art of Capacity Planning (John Allspaw) — production performance and capacity management",
            "High Performance Browser Networking (Ilya Grigorik) — free, network performance for web applications"
          ]
        }
      ]
    },
    {
      name: "Engineering at Scale",
      level: "advanced",
      tagline: "Technical leadership is about multiplying the output of your team, not your own",
      desc: "Senior engineering is not principally about writing better code than junior engineers. It is about reducing the uncertainty that slows teams down, creating leverage that amplifies everyone's output, and making architectural decisions that do not become liabilities at scale. The technical skills are table stakes; the leverage skills are what differentiate senior from mid-level.",
      topics: [
        {
          name: "Technical Debt and Refactoring",
          tag: "advanced",
          desc: "Technical debt is the accumulated cost of past decisions that trade short-term speed for long-term complexity. Unlike financial debt, it accrues compound interest — a module that nobody understands accumulates work-arounds, each making it less understandable. Ward Cunningham's original metaphor was about going back and explaining what you did — the debt is the explanation you did not write, not the hack you wrote. The most dangerous form of technical debt is strategic debt: architectural decisions that were correct for the original scale but become bottlenecks at ten times the scale. Refactoring is restructuring existing code without changing its behavior — it is only safe when there are tests, and it is only productive when there is a clear direction. The strangler fig pattern, seam extraction, and characterization tests (tests that describe current behavior even if that behavior is wrong) are the primary tools for refactoring systems without tests.",
          master: [
            "Identify technical debt in a codebase: classify it as strategic, tactical, or inadvertent — explain the different remediation approaches",
            "Refactor a complex function into smaller pieces without changing its behavior — describe your safety net",
            "Write characterization tests for an untested function before refactoring it",
            "Describe how to build a business case for paying down technical debt to non-technical stakeholders",
            "Explain the open/closed principle and describe a design that violates it and one that satisfies it",
            "Describe the strangler fig pattern at the code level — not just the service level"
          ],
          res: [
            "Working Effectively with Legacy Code (Michael Feathers) — the definitive reference for untested systems",
            "Refactoring (Martin Fowler) — the catalog of refactoring patterns",
            "A Philosophy of Software Design (John Ousterhout) — the best recent thinking on software complexity",
            "Clean Code (Robert Martin) — read critically; many prescriptions are context-dependent"
          ]
        },
        {
          name: "System Design for Scale",
          tag: "expert",
          desc: "Large-scale system design requires explicit reasoning about: where the single points of failure are and how to eliminate them; what the read-to-write ratio is and how to exploit it (read replicas, caching, CDNs); what the consistency requirements are and where eventual consistency is acceptable; what the latency requirements are at each tier and how to budget latency across service calls; what the data model should be and whether it will still make sense at 100× the current data volume. The most common architectural mistakes at scale: a database that handles both OLTP and analytics queries (these have conflicting access patterns and should be separated); a monolith where one module is being called at 100× the rate of others (the bottleneck constrains the entire system); synchronous service-to-service calls where asynchronous message passing would be more resilient. Event-driven architecture uses message queues (Kafka, SQS) to decouple producers and consumers — producers write events, consumers process them independently, and the queue buffers the difference in throughput.",
          master: [
            "Design a URL shortener from scratch: data model, read/write path, scale to 100M URLs, 10B redirects/day",
            "Design a notification system that sends 10M notifications per day across email, SMS, and push — walk through the architecture",
            "Explain the read replica pattern: what it solves, what it does not solve, and what replication lag means",
            "Describe CQRS (Command Query Responsibility Segregation): what problem it solves and the operational complexity it introduces",
            "Design a rate limiter: algorithm choices (token bucket, sliding window), storage (Redis), and edge cases",
            "Explain the trade-offs between event-driven architecture and synchronous request-response for a specific integration"
          ],
          res: [
            "System Design Interview Vols. 1 and 2 (Alex Xu) — structured walk-throughs of common problems",
            "Designing Data-Intensive Applications (Kleppmann) — read the full book",
            "High Scalability blog (highscalability.com) — real architecture write-ups from production systems",
            "AWS and Google Cloud architecture documentation — the cloud provider guidance reflects real scale experience"
          ]
        }
      ]
    }
  ]
}
