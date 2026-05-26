export const cloudData = {
  name: "CLOUD & DEVOPS ENGINEERING",
  area: "cloud",
  eyebrow: "Linux · CI/CD · Docker · Kubernetes · Terraform · SRE · Platform Engineering",
  sub: "Most people learn DevOps by following tutorials that show them how to run commands without explaining why those commands work. That produces engineers who can copy-paste a Dockerfile but cannot diagnose why a container is OOMKilled, why a Kubernetes pod is in CrashLoopBackOff, or why their Terraform plan is destroying infrastructure they intended to keep. This roadmap builds from first principles — the operating system, the network, and the container runtime — up to production reliability engineering.",
  phases: [
    {
      name: "Linux and the Command Line",
      level: "foundation",
      tagline: "Everything runs on Linux and Linux runs on everything",
      desc: "Cloud infrastructure runs on Linux. Kubernetes runs on Linux. CI/CD pipelines run on Linux. If you are not comfortable at the Linux command line, you are not ready for any of the work above it. This is not about memorizing commands — it is about building a mental model of how the operating system works: processes, files, networking, and permissions.",
      topics: [
        {
          name: "Linux Fundamentals",
          tag: "core",
          desc: "Everything in Linux is a file: regular files, directories, devices (/dev/sda), sockets (/tmp/mysql.sock), and processes (/proc/[pid]/). The filesystem hierarchy: /etc for configuration, /var for variable data and logs, /usr for user-space programs, /tmp for temporary files, /proc for kernel and process information (virtual filesystem, not on disk). Permissions are three sets of read/write/execute for owner, group, and other — represented as octal (755 = rwxr-xr-x). SUID (setuid bit) causes a binary to run as its owner, not the executing user — dangerous if the owner is root. Process management: every process has a PID and a parent PID forming a tree rooted at init (PID 1). Signals: SIGTERM (15) asks a process to terminate gracefully, SIGKILL (9) terminates it immediately with no cleanup. Pipes chain commands: the stdout of one command becomes the stdin of the next. Redirections: > overwrites, >> appends, 2>&1 merges stderr into stdout. systemd is the init system and service manager on most modern Linux distributions — unit files define services, timers, and sockets.",
          master: [
            "Explain the /proc filesystem: what information it contains about running processes and the kernel",
            "Explain Linux permissions: octal notation, SUID/SGID, and sticky bit — give a real security implication of each",
            "Diagnose a process that is consuming unexpected CPU or memory using /proc and standard tools",
            "Write a shell pipeline that processes log output: filter by pattern, extract fields, count occurrences",
            "Configure a systemd service unit file and explain each directive: ExecStart, Restart, User, Environment",
            "Explain inode exhaustion: what it is, how to diagnose it, and how it differs from disk space exhaustion"
          ],
          res: [
            "The Linux Command Line (William Shotts) — free online at linuxcommand.org, the systematic reference",
            "How Linux Works (Brian Ward) — explains the operating system internals, not just the commands",
            "Bash Guide (mywiki.wooledge.org/BashGuide) — correct shell scripting practices",
            "Linux Performance (Brendan Gregg blog) — tools and methodology for Linux performance analysis"
          ]
        },
        {
          name: "Networking on Linux",
          tag: "core",
          desc: "The Linux networking stack is the foundation that containers and Kubernetes build on. Network namespaces isolate network interfaces, routing tables, and firewall rules — each container gets its own network namespace. Virtual Ethernet pairs (veth) connect two network namespaces: data sent into one end comes out the other. Linux bridges act as software Layer 2 switches connecting multiple network interfaces. iptables (and its modern replacement nftables) implements packet filtering and NAT at the kernel level — it is what Docker uses to implement port publishing and container isolation. The routing table (ip route) determines which interface and gateway a packet should use. Tools that matter: ss (socket statistics, replacement for netstat), ip (ip address, ip route, ip link — replacement for ifconfig and route), tcpdump, nmap. Understanding that Docker's port publishing is iptables DNAT rules and that Kubernetes networking is implemented with iptables or eBPF rules explains why diagnosing network problems in containers requires the same tools as diagnosing network problems on bare metal.",
          master: [
            "Explain network namespaces: create two namespaces, connect them with a veth pair, and verify connectivity",
            "Explain how Docker implements port publishing at the iptables level — show the actual rules",
            "Use ss to identify which process is listening on a specific port",
            "Diagnose a container networking problem using only tools available inside the container",
            "Explain iptables chains and tables: what PREROUTING, INPUT, FORWARD, OUTPUT, and POSTROUTING each do",
            "Describe how a Linux bridge connects containers on the same host — draw the packet path for two containers communicating"
          ],
          res: [
            "Linux Networking Cookbook (Carla Schroder) — practical and comprehensive",
            "Julia Evans networking zines — accurate visual explanations of Linux networking",
            "iptables tutorial (netfilter.org) — the complete iptables reference",
            "Container Networking From Scratch (Ivan Velichko) — builds Docker networking concepts from first principles"
          ]
        }
      ]
    },
    {
      name: "Version Control and CI/CD",
      level: "foundation",
      tagline: "Every change tracked, every deployment automated",
      desc: "Source control is the foundation of reproducible software delivery. CI/CD is the practice of automating the build, test, and deployment pipeline so that every change goes through the same verification before it reaches users. The goal is not just automation — it is confidence: the confidence that comes from knowing exactly what is in production, how it got there, and how to reverse it.",
      topics: [
        {
          name: "Git: Beyond the Basics",
          tag: "core",
          desc: "Git stores snapshots, not diffs. A commit is a snapshot of the entire repository at a point in time — a SHA-1 hash of the tree, parent commit, author, and message. The working tree is what you see, the index (staging area) is what will be committed, and the repository is the history of commits. Branching is cheap because a branch is just a pointer to a commit. Merging has two modes: fast-forward (if the target branch has not diverged, just move the pointer forward — no merge commit) and three-way merge (creates a merge commit combining both histories). Rebasing moves a branch's commits on top of another branch by re-applying each commit — it rewrites history and should never be done on shared branches. Interactive rebase allows squashing, reordering, and editing commits before pushing. The reflog records every HEAD movement — it is the recovery tool when you think you have lost work. Gitflow defines a branching model; trunk-based development is the current best practice for teams practicing CI/CD — it avoids long-lived feature branches that cause merge conflicts and delay integration.",
          master: [
            "Explain what a Git commit stores: the tree, parent, metadata, and how the SHA is computed",
            "Describe the difference between merge and rebase: what each produces in the graph and when each is appropriate",
            "Use git bisect to find the commit that introduced a bug",
            "Use the reflog to recover commits that were reset or dropped in an interactive rebase",
            "Explain trunk-based development: why it works better than Gitflow for CI/CD and what it requires of the team",
            "Describe a monorepo strategy: what it enables and what tooling (Nx, Turborepo, Bazel) it requires at scale"
          ],
          res: [
            "Pro Git (Scott Chacon) — free at git-scm.com/book, the definitive reference",
            "Oh Shit, Git! (ohshitgit.com) — practical recovery from common mistakes",
            "Trunk Based Development (trunkbaseddevelopment.com) — the case for and practice of TBD",
            "Git internals chapter (Pro Git Chapter 10) — how Git actually stores data"
          ]
        },
        {
          name: "CI/CD Pipelines",
          tag: "intermediate",
          desc: "A CI/CD pipeline automates the steps from code commit to production deployment. The pipeline stages: lint and format check, unit tests, build, integration tests, security scan, deploy to staging, smoke tests, deploy to production. Fast feedback loops require parallelizing slow stages and separating fast tests from slow ones. Pipeline as code: the pipeline definition lives in the same repository as the code — it is versioned, reviewed, and changes with the code. GitHub Actions defines workflows in YAML; jobs run in parallel by default, steps within a job run sequentially. Artifact management: build outputs (Docker images, compiled binaries, NPM packages) are stored in artifact registries and referenced by digest, not by tag — tags are mutable, digests are immutable. Deployment strategies: blue/green (maintain two identical environments, switch traffic), canary (route a small percentage of traffic to the new version), rolling (replace instances one at a time). Each requires a different rollback strategy.",
          master: [
            "Design a CI/CD pipeline for a containerized application: stages, parallelization, and artifact management",
            "Implement a GitHub Actions workflow that runs tests, builds a Docker image, and pushes to a registry",
            "Explain the difference between blue/green, canary, and rolling deployments — describe the rollback procedure for each",
            "Describe semantic versioning and why it matters for dependency management",
            "Explain how to prevent secrets from being logged in a CI pipeline",
            "Describe GitOps: how it differs from push-based deployment and what Argo CD or Flux provides"
          ],
          res: [
            "Continuous Delivery (Jez Humble, David Farley) — the foundational book on deployment pipelines",
            "GitHub Actions documentation — the most widely used CI platform",
            "Accelerate (Nicole Forsgren et al.) — the research backing for CI/CD practices",
            "GitOps and Kubernetes (Weaveworks) — the GitOps pattern explained"
          ]
        }
      ]
    },
    {
      name: "Containers and Docker",
      level: "intermediate",
      tagline: "Containers are not virtual machines — they are isolated processes",
      desc: "A container is a process with restricted visibility into the host system. It is not a virtual machine — there is no separate kernel, no hardware emulation, no significant overhead. The isolation is provided by Linux kernel features: namespaces (isolate the view of PID, network, filesystem, users) and cgroups (limit and account for resource usage). Understanding this model explains why containers start in milliseconds, why a container is not a security boundary against a privileged user, and why the container's filesystem is just a layer of overlayfs on top of the host.",
      topics: [
        {
          name: "Docker: Images, Containers, and Networking",
          tag: "core",
          desc: "A Docker image is a layered filesystem. Each instruction in a Dockerfile adds a layer. Layers are immutable and cached — if the layer's inputs have not changed, Docker reuses the cached layer. Layer ordering matters: put frequently changing instructions (COPY application code) after infrequently changing ones (RUN apt-get install dependencies) to maximize cache utilization. A container is a writable layer on top of an image — when the container exits, that layer is discarded. Multi-stage builds use multiple FROM instructions in one Dockerfile — the first stage builds the application (large, with build tools), the second copies only the compiled binary into a minimal runtime image. This drastically reduces image size and attack surface. Docker networking modes: bridge (default, each container gets a private IP on a virtual network), host (container shares the host's network stack — no isolation, better performance), none (no networking). Docker Compose defines multi-container applications in a YAML file — it manages the lifecycle of all services, networks, and volumes together.",
          master: [
            "Explain the layer model: how layers are cached, why instruction order matters, and how to optimize a Dockerfile for cache hit rate",
            "Write a multi-stage Dockerfile for a compiled application and explain what each stage does",
            "Explain Docker networking: what the bridge network is, how container DNS resolution works, and when to use host networking",
            "Explain Linux namespaces and cgroups: what each isolates and why a container is not a security boundary for privileged users",
            "Diagnose a container that is OOMKilled: what caused it, how to confirm the diagnosis, and how to fix it",
            "Use Docker Compose to run a multi-service application with correct service dependencies and health checks"
          ],
          res: [
            "Docker documentation (docs.docker.com) — the official reference, read the Get Started section completely",
            "Container Security (Liz Rice, O'Reilly) — how containers work and how to secure them",
            "Dockerfile best practices (docs.docker.com/develop/dev-best-practices) — the official guidelines",
            "Dive (github.com/wagoodman/dive) — tool for inspecting Docker image layers"
          ]
        }
      ]
    },
    {
      name: "Kubernetes",
      level: "advanced",
      tagline: "The operating system for distributed systems",
      desc: "Kubernetes is a container orchestration platform: it schedules containers on a cluster of nodes, manages their lifecycle, provides service discovery and load balancing, and handles failures automatically. Understanding Kubernetes requires understanding its API model first — everything is a declarative specification of desired state, and the control plane works continuously to reconcile actual state with desired state. The gap between running Kubernetes in a tutorial and operating it in production is enormous.",
      topics: [
        {
          name: "Core Kubernetes Concepts",
          tag: "intermediate",
          desc: "The Kubernetes API is the single source of truth. Everything is an object with a spec (desired state) and a status (current state). The control plane consists of: etcd (the distributed key-value store that holds all cluster state), the API server (the only way to read and write cluster state), the scheduler (assigns Pods to nodes based on resource requests and constraints), and the controller manager (runs controllers that reconcile objects toward desired state). A Pod is the smallest deployable unit — one or more containers that share network and storage. A Deployment manages a ReplicaSet which manages Pod replicas. A Service provides stable network identity for a set of Pods selected by label — ClusterIP (internal), NodePort (exposes on every node's port), LoadBalancer (provisions a cloud load balancer). Resource requests and limits: a container's request is used by the scheduler for placement decisions; the limit is enforced by cgroups. A container that exceeds its memory limit is OOMKilled; a container that exceeds its CPU limit is throttled. PodDisruptionBudgets ensure that a minimum number of replicas remain available during voluntary disruptions.",
          master: [
            "Explain the Kubernetes control plane: what each component does and how they interact to schedule a Pod",
            "Explain the difference between a Deployment and a StatefulSet: what StatefulSet provides that Deployment does not",
            "Describe the difference between requests and limits: what each is used for and what happens when a container exceeds each",
            "Explain Kubernetes service discovery: how a Service's ClusterIP is resolved and how kube-proxy implements it",
            "Configure a Deployment with proper resource requests, liveness probe, readiness probe, and pod disruption budget",
            "Diagnose a Pod in CrashLoopBackOff: describe the debugging steps in order"
          ],
          res: [
            "Kubernetes documentation (kubernetes.io/docs) — the official reference, the concepts section is required reading",
            "Kubernetes in Action (Marko Luksa) — the best book on Kubernetes, thorough",
            "The Kubernetes Book (Nigel Poulton) — more concise, good for getting productive quickly",
            "killer.sh Kubernetes simulator — the best hands-on Kubernetes practice environment"
          ]
        },
        {
          name: "Kubernetes Networking and Storage",
          tag: "advanced",
          desc: "Kubernetes networking requirements: every Pod must be able to communicate with every other Pod without NAT, every node must be able to communicate with every Pod. The CNI (Container Network Interface) specification defines how plugins implement this. Calico uses BGP to propagate Pod routes. Flannel uses VXLAN. Cilium uses eBPF for high-performance networking with rich observability. Ingress: an Ingress resource defines L7 routing rules (hostname and path based). The Ingress controller (nginx, Traefik, AWS ALB Controller) implements those rules. Kubernetes storage: PersistentVolumes are cluster-level storage resources. PersistentVolumeClaims are requests for storage by Pods. StorageClasses allow dynamic provisioning — when a PVC is created, the storage class automatically provisions a PV. Access modes: ReadWriteOnce (one node at a time), ReadOnlyMany (many nodes can read), ReadWriteMany (many nodes can write — requires a network filesystem like NFS or EFS). StatefulSets provide stable storage by attaching a specific PVC to each Pod identity.",
          master: [
            "Explain how Pod networking works: the CNI plugin's responsibility, how two Pods on different nodes communicate",
            "Describe how kube-proxy implements Service IP routing using iptables or IPVS",
            "Configure an Ingress resource with TLS termination and explain how the Ingress controller processes it",
            "Explain the PersistentVolume lifecycle: provision, bind, use, release, and reclaim",
            "Describe the differences between the three storage access modes and give a use case for each",
            "Configure a StatefulSet with a volume claim template and explain how each Pod gets its own persistent volume"
          ],
          res: [
            "Kubernetes Networking (James Strong, Vallery Lancey) — the networking deep dive",
            "CNI specification (github.com/containernetworking/cni) — read the spec before using a CNI plugin",
            "Cilium documentation — modern eBPF-based networking and observability",
            "AWS EKS storage documentation — practical storage patterns for managed Kubernetes"
          ]
        }
      ]
    },
    {
      name: "Infrastructure as Code",
      level: "advanced",
      tagline: "Infrastructure that cannot be reproduced from code is infrastructure that will eventually fail permanently",
      desc: "Infrastructure as Code means the infrastructure configuration is stored in version control, reviewed in pull requests, and applied through automation — not through clicks in a console. The console-based approach fails at scale because it is not reproducible, not auditable, and not recoverable. IaC makes infrastructure state explicit and history trackable.",
      topics: [
        {
          name: "Terraform",
          tag: "advanced",
          desc: "Terraform uses HCL (HashiCorp Configuration Language) to describe infrastructure declaratively. A terraform plan shows what will be created, modified, or destroyed without making any changes. A terraform apply executes the plan. The state file tracks what Terraform knows about the real infrastructure — it is the mapping between configuration and actual resources. Remote state backends (S3, Terraform Cloud) enable team usage. State locking prevents concurrent applies from corrupting state. Modules encapsulate reusable infrastructure patterns — a module for an ECS service, a module for an RDS instance. The most dangerous Terraform operations: terraform destroy (self-explanatory), modifying a resource that requires replacement (marked as -/+ in the plan — the old resource is destroyed and a new one is created), and importing existing resources into state without proper planning. Drift: when the real infrastructure diverges from the Terraform state — usually caused by out-of-band console changes. Terraform refresh reconciles the state with reality.",
          master: [
            "Explain the Terraform state file: what it contains, why it is sensitive, and why remote state with locking is required for teams",
            "Describe the plan-apply workflow: what happens during plan, what happens during apply, and why you should always review the plan",
            "Write a reusable Terraform module for a common infrastructure pattern and explain how input variables and outputs work",
            "Explain what a resource replacement means in a plan and describe how to avoid accidental destruction",
            "Describe Terraform drift: how it happens, how to detect it, and how to reconcile it",
            "Explain how to manage multiple environments (dev, staging, prod) in Terraform — workspaces versus directory structure"
          ],
          res: [
            "Terraform documentation (developer.hashicorp.com/terraform) — the complete reference",
            "Terraform: Up and Running (Yevgeniy Brikman) — the practical guide",
            "Google Cloud's Terraform best practices — opinionated module structure",
            "Terratest (github.com/gruntwork-io/terratest) — testing infrastructure code"
          ]
        }
      ]
    },
    {
      name: "Site Reliability Engineering",
      level: "expert",
      tagline: "The practice of running services reliably at scale",
      desc: "SRE is the discipline of applying software engineering principles to operations. Google defined the practice; the SRE Book is the canonical reference. The core insight is that reliability is a feature with a cost, and that cost must be traded off explicitly against velocity. Service Level Objectives, error budgets, and toil reduction are the practices that operationalize this trade-off.",
      topics: [
        {
          name: "SLOs, SLIs, and Error Budgets",
          tag: "advanced",
          desc: "A Service Level Indicator (SLI) is a quantitative measure of some aspect of service behavior — availability, latency, throughput. A Service Level Objective (SLO) is a target value for an SLI: 99.9% of requests complete in under 200ms. An SLA is a contractual SLO with financial consequences for violation. An error budget is the amount of unreliability the SLO allows: a 99.9% availability SLO allows 43.8 minutes of downtime per month. The error budget governs the trade-off between reliability and velocity: if the budget is not consumed, teams can move fast; if it is consumed, reliability work takes priority. Alert on SLO burn rate rather than on raw metrics — a 5% error rate for 10 minutes is a different situation than a 0.1% error rate for 10 days, even though both might trigger a naive threshold alert. The Four Golden Signals: latency, traffic, errors, saturation — these four metrics are the minimum required to understand the health of a service.",
          master: [
            "Define SLI, SLO, and SLA for a web service — make them specific and measurable",
            "Calculate the error budget for a 99.9% monthly availability SLO and describe how to spend it",
            "Explain multi-window, multi-burn-rate alerting and why it is better than threshold alerting",
            "Implement the Four Golden Signals for a service using Prometheus metrics",
            "Describe how an error budget changes the conversation between development and operations teams",
            "Write a postmortem for a hypothetical incident: timeline, root cause, contributing factors, action items"
          ],
          res: [
            "Site Reliability Engineering (Google, free at sre.google/books) — the canonical SRE text",
            "The SRE Workbook (Google, free at sre.google/books) — practical implementation of SRE practices",
            "Alerting on SLOs (Google SRE Book Chapter 5) — burn-rate alerting methodology",
            "SLO calculator tools (slodocs.io) — calculate availability minutes from percentages"
          ]
        },
        {
          name: "Observability: Metrics, Logs, and Traces",
          tag: "advanced",
          desc: "Observability is the ability to understand the internal state of a system from its external outputs. The three pillars: metrics (aggregated numerical time-series — request rate, error rate, latency percentiles), logs (timestamped records of discrete events — structured JSON logs are machine-parseable and far more useful than unstructured text), and traces (a record of a single request's path through multiple services, with timing for each span). Prometheus is the standard metrics collection system: services expose metrics on a /metrics HTTP endpoint, Prometheus scrapes them on a configurable interval, and Grafana visualizes them. The Prometheus data model is a time-series identified by metric name and labels. Cardinality is the primary operational problem: high-cardinality labels (user IDs, request IDs) create millions of unique time-series and crash Prometheus. Distributed tracing (Jaeger, Zipkin, Tempo) requires each service to propagate trace context (trace ID, span ID) to downstream services via HTTP headers. OpenTelemetry is the standard instrumentation SDK that works across metrics, logs, and traces.",
          master: [
            "Design a metrics strategy for a web service: what metrics to expose, what labels to use, and what dashboards to build",
            "Explain Prometheus cardinality: what it is, why high-cardinality labels are dangerous, and how to design around it",
            "Implement structured logging for a service: what fields every log line should contain and why",
            "Set up distributed tracing for a two-service application and use it to diagnose a latency issue",
            "Explain the difference between pull-based (Prometheus) and push-based (StatsD, CloudWatch) metrics collection",
            "Build a Grafana dashboard with RED method metrics: Rate, Errors, Duration — explain what each tells you"
          ],
          res: [
            "Prometheus documentation (prometheus.io/docs) — the primary metrics system",
            "Distributed Systems Observability (Cindy Sridharan) — free ebook, the best observability overview",
            "OpenTelemetry documentation (opentelemetry.io) — the standard instrumentation SDK",
            "Grafana documentation — dashboarding and alerting"
          ]
        }
      ]
    }
  ]
}
