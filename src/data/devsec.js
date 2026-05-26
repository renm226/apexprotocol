export const devsecData = {
  name: "DEVSECOPS",
  area: "devsec",
  eyebrow: "Secure SDLC · SAST · DAST · Container Security · Threat Modeling · Compliance",
  sub: "Security teams that operate as a gate at the end of the development process create bottlenecks, miss vulnerabilities, and are ignored. DevSecOps embeds security into every stage of the development lifecycle — in the developer's tools, in the CI/CD pipeline, in the container registry, and in the production environment. This roadmap teaches you to build systems that are secure by default, not systems that become security's problem after deployment.",
  phases: [
    {
      name: "Security Fundamentals for Engineers",
      level: "foundation",
      tagline: "Security thinking before security tooling",
      desc: "Most security tooling produces noise without security thinking. A SAST scanner that finds 500 issues tells you nothing useful until you can reason about which findings are exploitable, in what context, with what impact. Security engineering starts with a mental model of how attackers think and what properties make systems defensible.",
      topics: [
        {
          name: "Threat Modeling",
          tag: "core",
          desc: "Threat modeling is the practice of systematically identifying what can go wrong in a system before it is built. The STRIDE framework categorizes threats: Spoofing (claiming a false identity), Tampering (modifying data or code), Repudiation (denying an action), Information Disclosure (leaking data to unauthorized parties), Denial of Service (making a service unavailable), Elevation of Privilege (gaining capabilities you should not have). The threat modeling process: draw a data flow diagram (DFD) of the system showing processes, data stores, external entities, and the data flows between them. Identify the trust boundaries — places where data crosses from one trust level to another. Enumerate threats at each boundary using STRIDE. Prioritize threats using DREAD (Damage, Reproducibility, Exploitability, Affected users, Discoverability) or CVSS. The value of threat modeling is not a complete list of every possible threat — it is the security conversation it forces between engineers, architects, and security reviewers early in the design process, when changes are cheap.",
          master: [
            "Create a data flow diagram for a web application: identify all processes, data stores, external entities, and trust boundaries",
            "Apply STRIDE to each trust boundary in a DFD and enumerate at least three threats for each",
            "Prioritize a list of threats using a risk matrix — explain your reasoning for the top three",
            "Describe the difference between a threat, a vulnerability, and a risk",
            "Conduct a threat model review for a feature under development and identify issues that would not appear in a code review",
            "Explain attack trees: how they differ from STRIDE and when they are more useful"
          ],
          res: [
            "Threat Modeling: Designing for Security (Adam Shostack) — the definitive reference",
            "Microsoft SDL Threat Modeling Tool — free, based on STRIDE with automatic threat generation",
            "OWASP Threat Modeling Cheat Sheet — practical guidance for common scenarios",
            "STRIDE per Element methodology (Shostack blog) — applying STRIDE systematically to DFDs"
          ]
        },
        {
          name: "Common Vulnerability Classes",
          tag: "core",
          desc: "OWASP Top 10 is a framework for thinking about web application vulnerability classes, not a checklist. Injection: user input interpreted as code by the application or its dependencies — SQL, command, LDAP, NoSQL, template, and expression language injection all share the same root cause: insufficient separation of data and instructions. Broken authentication: weak password policies, missing rate limiting on auth endpoints, insecure session management, predictable tokens. Insecure direct object references (now part of Broken Access Control): using user-supplied IDs to access resources without verifying the user is authorized. IDOR is the most commonly found vulnerability in bug bounty programs. Security misconfiguration: default credentials, verbose error messages that leak stack traces, unnecessary services enabled, debug endpoints accessible in production. Cryptographic failures: using MD5 or SHA-1 for password hashing, using ECB mode for symmetric encryption, not validating TLS certificates, using short key lengths. Vulnerable dependencies: components with known CVEs — the Log4Shell vulnerability affected every Java application using Log4j, including enterprise infrastructure that had not been touched in years.",
          master: [
            "Classify five different injection vulnerability types and explain the common root cause they share",
            "Describe IDOR: find an example in a real bug bounty disclosure and explain why access control must be server-side",
            "Explain why MD5 and SHA-1 are not appropriate for password hashing and describe what bcrypt/scrypt/Argon2 do differently",
            "Describe a security misconfiguration that has caused a real breach and what the correct configuration should have been",
            "Explain the Log4Shell vulnerability at a conceptual level: what JNDI lookup does and why it was dangerous",
            "Perform a dependency audit on a project and triage the findings by exploitability"
          ],
          res: [
            "OWASP Top 10 (owasp.org/Top10) — read the full descriptions with attack scenarios",
            "CWE Top 25 (cwe.mitre.org) — the weakness enumeration that underlies CVEs",
            "National Vulnerability Database (nvd.nist.gov) — CVE details and CVSS scores",
            "HackerOne Hacktivity — real bug bounty disclosures showing vulnerability patterns"
          ]
        }
      ]
    },
    {
      name: "Secure Development Lifecycle",
      level: "foundation",
      tagline: "Security in the design phase costs 100× less than security after deployment",
      desc: "IBM Systems Sciences Institute found that fixing a bug in production costs 100× more than fixing it during design. The same ratio applies to security issues. A security review at design time catches architectural decisions that are fundamentally insecure. A security review at deployment catches individual bugs while the insecure architecture remains. Both are necessary, but design-time security is the higher-leverage activity.",
      topics: [
        {
          name: "Secure Coding Practices",
          tag: "core",
          desc: "Secure coding is not primarily about memorizing rules — it is about writing code that makes the dangerous things hard and the safe things easy. Input validation: validate all input at the system boundary (user input, API responses, file contents) — validate type, length, format, and range. Validate against an allowlist of permitted values, not a blocklist of forbidden ones. Parameterized queries for all database interactions — no string concatenation for SQL. Output encoding: encode output for the context in which it will be rendered — HTML entity encoding for HTML, JavaScript encoding for JS contexts, CSS encoding for CSS. Cryptography: use high-level abstractions (libsodium, Tink) rather than implementing cryptographic primitives — misuse of low-level crypto APIs is extremely common and extremely dangerous. Never roll your own crypto. Key management: keys must be rotated, must not be stored in source code, must be accessible only to the processes that need them. Secrets scanning: tools (git-secrets, trufflehog, GitGuardian) detect credentials committed to source control. The secret must be rotated immediately when found — deletion from git history does not invalidate credentials that may have been logged or accessed.",
          master: [
            "Explain the difference between input validation and output encoding — why both are necessary and where each belongs",
            "Describe parameterized queries: why they prevent SQL injection when string concatenation does not",
            "Explain why libsodium or Tink should be used instead of raw cryptographic APIs",
            "Set up secrets scanning in a CI pipeline — describe how to handle a finding where a secret was committed",
            "Describe secure random number generation: what makes a PRNG cryptographically secure and when regular random fails",
            "Implement a security review checklist for a code review: what items would you always check"
          ],
          res: [
            "OWASP Cheat Sheet Series (cheatsheetseries.owasp.org) — practical guidance for specific scenarios",
            "Cryptography Engineering (Ferguson, Schneier, Kohno) — correct cryptography for practitioners",
            "Google's Tink documentation — high-level crypto API designed to prevent misuse",
            "NIST Secure Software Development Framework (SSDF) — the government reference for SDLC security"
          ]
        },
        {
          name: "Security Requirements and Design Review",
          tag: "intermediate",
          desc: "Security requirements must be explicit before implementation begins. Authentication requirements: what authentication factors are required, what session lifetime is appropriate, how session invalidation works. Authorization requirements: what resources exist, what actions can be taken on each, and which users or roles are permitted to take each action. Data classification: what data is sensitive (PII, financial, health), where it is stored, where it flows, who can access it, how it is encrypted at rest and in transit, and how it is retained and deleted. The principle of least privilege: every component, service account, and user should have only the permissions required to perform their function — nothing more. Reviewing a design for security: walk through every user action and trace the data flow through the system, asking at each step who can reach this point, what they can do here, and what they can learn from the response.",
          master: [
            "Write security requirements for a user authentication system: include authentication factors, session management, and account recovery",
            "Create a data classification schema for an application and specify storage, transit, access, and retention requirements for each class",
            "Perform a design review for a proposed API: identify authorization gaps, data exposure issues, and rate limiting requirements",
            "Explain the principle of least privilege and apply it to a service account in a cloud environment",
            "Describe a threat-based security review: for a given user story, what security questions must be answered before implementation",
            "Design a permission model for a multi-tenant SaaS application: how to ensure tenant data isolation"
          ],
          res: [
            "OWASP Application Security Verification Standard (ASVS) — the comprehensive security requirements framework",
            "SAFECode Fundamental Practices for Secure Software Development — vendor-neutral SDLC guidance",
            "Privacy by Design framework — data minimization and purpose limitation principles",
            "Google Design Doc templates with security section — integrating security into normal design processes"
          ]
        }
      ]
    },
    {
      name: "Application Security Testing",
      level: "intermediate",
      tagline: "Finding vulnerabilities before attackers do",
      desc: "Application security testing is the practice of systematically finding vulnerabilities in running applications. The distinction between SAST (static analysis, no running code) and DAST (dynamic analysis, running code) is significant — they find different classes of vulnerabilities and are complementary, not substitutes. Adding security testing to CI/CD provides continuous assurance that new code does not introduce known vulnerability classes.",
      topics: [
        {
          name: "SAST and Dependency Scanning",
          tag: "core",
          desc: "Static Application Security Testing analyzes source code for vulnerability patterns without running the code. Tools: Semgrep (flexible rule-based scanning, custom rules per organization), SonarQube (broader code quality and security), Bandit (Python), SpotBugs+FindSecBugs (Java), ESLint security plugins (JavaScript). SAST produces false positives — a finding indicates a potential vulnerability, not a confirmed exploitable one. Triaging SAST findings requires reading the flagged code and reasoning about whether the pattern is actually vulnerable in context. Dependency scanning identifies known CVEs in your third-party dependencies. Snyk, OWASP Dependency Check, Dependabot, and Trivy are the standard tools. SBOM (Software Bill of Materials) is a machine-readable inventory of all components in a software system — required for supply chain security and incident response (when Log4Shell was announced, organizations with SBOMs could determine exposure in hours; organizations without SBOMs spent days). Reachability analysis addresses the problem that most CVEs in dependencies are not actually exploitable — the vulnerable code path is never executed in your application.",
          master: [
            "Set up Semgrep with custom rules for a specific vulnerability class relevant to your codebase",
            "Triage a SAST finding: read the flagged code, determine whether it is a true or false positive, and explain your reasoning",
            "Run a dependency scan and triage the findings by: CVE severity, whether the vulnerable version is in your dependency tree, and whether the vulnerable code path is reachable",
            "Generate an SBOM for a project and explain what it contains and how it would be used during a supply chain incident",
            "Explain the difference between direct and transitive dependencies and why transitive vulnerabilities are harder to fix",
            "Configure Dependabot or Renovate for automated dependency updates — describe the PR workflow"
          ],
          res: [
            "Semgrep documentation and rule registry (semgrep.dev) — the most flexible SAST tool",
            "OWASP Dependency Check (owasp.org/www-project-dependency-check) — the standard open-source dependency scanner",
            "OWASP SBOM Guideline — what an SBOM should contain",
            "Snyk documentation — commercial dependency and container scanning"
          ]
        },
        {
          name: "DAST and Penetration Testing",
          tag: "intermediate",
          desc: "Dynamic Application Security Testing tests a running application by sending requests and analyzing responses. OWASP ZAP (Zed Attack Proxy) is the primary open-source DAST tool — it can run in passive mode (proxy traffic and flag issues) or active mode (actively probe endpoints). Burp Suite Pro is the professional standard for manual web application testing. Automated DAST in CI: run ZAP in baseline scan mode against a staging environment on every deployment — it finds the most common web vulnerabilities without deep active scanning. API security testing requires providing an OpenAPI/Swagger specification so the scanner knows the attack surface. Penetration testing is structured adversarial testing: defined scope, defined time period, deliverable is a report with findings, severity ratings, and remediation guidance. Internal pentest teams provide continuous assessment; external consultants provide fresh perspective and validation. Bug bounty programs (HackerOne, Bugcrowd) provide ongoing testing by external researchers with financial incentives.",
          master: [
            "Set up OWASP ZAP in baseline scan mode and integrate it into a CI/CD pipeline",
            "Use Burp Suite to intercept a web application request, modify it, and identify an authorization vulnerability",
            "Describe what an API security test should check: authentication, authorization, input validation, rate limiting",
            "Write a pentest finding in a standard format: vulnerability description, proof of concept steps, impact, severity, and remediation",
            "Explain the difference between authenticated and unauthenticated scanning and why authenticated scanning is more thorough",
            "Describe a responsible disclosure process: how to report a vulnerability you found, what to include, and what to expect"
          ],
          res: [
            "OWASP ZAP documentation (zaproxy.org) — the primary DAST tool",
            "Burp Suite documentation (portswigger.net) — the professional web security testing platform",
            "PortSwigger Web Security Academy — free lab environment for web application security testing practice",
            "PTES Technical Guidelines — structured penetration testing methodology"
          ]
        }
      ]
    },
    {
      name: "Container and Infrastructure Security",
      level: "intermediate",
      tagline: "Containers reduce attack surface by default — unless you misconfigure them",
      desc: "Containers are not a security boundary on their own. A container running as root with a mounted Docker socket, excessive capabilities, or a privilege escalation vulnerability has the same effective access as the host. Container security requires correct defaults at every layer: image building, registry policies, runtime configuration, and orchestration security.",
      topics: [
        {
          name: "Container Image Security",
          tag: "intermediate",
          desc: "Every layer in a Docker image is an attack surface. Base images: use minimal base images (distroless, Alpine) to reduce the number of installed packages and therefore the number of potential vulnerabilities. Official images are maintained by the vendor and receive security patches. Never use :latest tags in production — they are mutable and you cannot guarantee what version you are running. Run containers as non-root: add a USER instruction in the Dockerfile, use runAsNonRoot and runAsUser in Kubernetes pod specs. Don't store secrets in images — they are visible in docker history and image layers. Use build arguments only for non-sensitive build-time values; pass secrets at runtime via environment variables or mounted secret files. Container image scanning: Trivy, Grype, and Snyk scan image layers for known CVEs before pushing to a registry. Sign images with Cosign (Sigstore) — image signing allows a registry policy to reject unsigned or improperly signed images, preventing supply chain attacks where a malicious image replaces a legitimate one.",
          master: [
            "Explain why using a minimal base image reduces attack surface — give specific examples of what is removed",
            "Configure a Dockerfile to run as non-root — explain what each directive does and what threat it mitigates",
            "Explain why :latest tags are dangerous in production and what an immutable tagging strategy looks like",
            "Run Trivy on a container image and triage the findings by exploitability",
            "Explain image signing with Cosign: what is signed, how verification works, and what policy enforcement looks like",
            "Describe the difference between COPY and ADD in a Dockerfile and why ADD creates more attack surface"
          ],
          res: [
            "Trivy documentation (github.com/aquasecurity/trivy) — container and filesystem vulnerability scanner",
            "Cosign documentation (github.com/sigstore/cosign) — container image signing",
            "Docker security documentation — official security best practices",
            "NIST Application Container Security Guide (NIST SP 800-190) — the government reference"
          ]
        },
        {
          name: "Kubernetes Security",
          tag: "advanced",
          desc: "Kubernetes security has multiple layers: cluster hardening, workload isolation, network policy, and secret management. RBAC (Role-Based Access Control): define roles with minimum required permissions (verbs on resources), bind roles to service accounts. Default service accounts have no permissions in well-configured clusters. Audit the permissions of every service account — overpermissioned service accounts are the primary attack vector for Kubernetes privilege escalation. Pod Security Standards (replacement for PodSecurityPolicy): Restricted profile prohibits running as root, privilege escalation, and host path mounts. Network Policies are firewall rules for pods — by default all pods can reach all pods. A deny-all ingress policy followed by explicit allow rules is the correct baseline. Secret management: Kubernetes Secrets are base64 encoded, not encrypted, by default. Enable etcd encryption at rest. Use external secret management (Vault, AWS Secrets Manager, External Secrets Operator) for secrets that must be rotated or audited. Admission controllers enforce policies at API admission time — OPA Gatekeeper and Kyverno can reject pods that violate security policies.",
          master: [
            "Audit a Kubernetes service account for excessive permissions and remediate following least privilege",
            "Configure a Pod Security Standard (Restricted profile) for a namespace and verify it blocks privileged pods",
            "Write Network Policies for a three-tier application: deny-all baseline plus allow rules for required flows",
            "Explain why Kubernetes Secrets are not actually secret by default and describe the correct approach",
            "Configure External Secrets Operator to sync secrets from AWS Secrets Manager into Kubernetes",
            "Write an OPA or Kyverno policy that rejects pods running as root or without resource limits"
          ],
          res: [
            "Kubernetes security documentation (kubernetes.io/docs/concepts/security) — the authoritative reference",
            "CIS Kubernetes Benchmark — the industry standard hardening guide",
            "NSA/CISA Kubernetes Hardening Guide — practical security recommendations",
            "Falco documentation (falco.org) — runtime security and threat detection for Kubernetes"
          ]
        }
      ]
    },
    {
      name: "Security Automation in CI/CD",
      level: "advanced",
      tagline: "Security that does not run automatically does not run consistently",
      desc: "Manual security gates are inconsistent — they are skipped under deadline pressure, bypassed with approvals, and impossible to scale as engineering teams grow. Automated security controls in the CI/CD pipeline enforce policy consistently at every build and every deployment. The goal is not zero false positives — it is a signal-to-noise ratio high enough that developers take the findings seriously rather than suppressing them.",
      topics: [
        {
          name: "Security Pipeline Integration",
          tag: "advanced",
          desc: "A security pipeline is a sequence of automated checks that runs on every change. The stages: pre-commit hooks (secrets detection, basic linting), commit stage (SAST, dependency scanning, license compliance), build stage (image scanning, SBOM generation, image signing), deploy stage (DAST against staging, infrastructure scan, compliance checks). Breaking the build on security findings requires careful tuning — a policy that blocks on any finding causes developers to suppress or ignore findings rather than fix them. Policy: block on critical CVSS 9.0+ with a fix available, warn on 7.0–8.9, report on 4.0–6.9, ignore 0–3.9. Exception management: a documented process for suppressing a finding with a justification, expiry date, and approver. Without an exception process, developers work around tooling in undocumented ways. Supply chain security: SLSA (Supply chain Levels for Software Artifacts) provides a framework of trust levels for build provenance — at SLSA Level 3, the build process itself is verified and the provenance is signed.",
          master: [
            "Design a security pipeline for a containerized application: tools at each stage, what each checks, and blocking versus warning policy",
            "Implement pre-commit hooks for secrets detection and explain how to handle a false positive",
            "Configure a CI pipeline to scan a container image with Trivy and block deployment on critical CVEs",
            "Describe the SLSA framework: what each level provides and what investments are required to reach Level 2",
            "Implement a documented exception process for a security finding that cannot be immediately remediated",
            "Explain how to handle a zero-day CVE in a critical dependency: the immediate response and the longer-term remediation"
          ],
          res: [
            "OWASP DevSecOps Guideline — pipeline security integration",
            "SLSA framework (slsa.dev) — supply chain security levels",
            "GitHub Security Features documentation — built-in SAST, dependency scanning, and secrets detection",
            "Shift Left Security practices (various SANS papers) — the theory behind pipeline integration"
          ]
        }
      ]
    },
    {
      name: "Incident Response and Security Operations",
      level: "advanced",
      tagline: "Detection and response are as important as prevention",
      desc: "Prevention fails. Systems are breached despite correct security controls because attackers are persistent, techniques evolve, and complexity creates blind spots. Detection and response capability determines the difference between a contained incident and a catastrophic breach. The organizations that recover quickly from incidents are the ones that prepared for them.",
      topics: [
        {
          name: "Logging, SIEM, and Detection",
          tag: "advanced",
          desc: "Security logging captures the events necessary to detect attacks and reconstruct what happened during an incident. Loggable events: authentication (success and failure), authorization failures, privilege escalation, configuration changes, process creation, network connections, and data access. Structured logs (JSON) enable automated parsing and correlation. Log shipping: logs must be collected centrally and quickly — an attacker who can modify logs on a compromised system can erase evidence. SIEM (Security Information and Event Management) correlates events across multiple sources and applies detection rules. Detection rules: a failed login from a new country followed by a successful login (credential stuffing), many 404 responses from a single IP (scanning), access to a sensitive database outside business hours. Alert fatigue is a serious operational problem — a SIEM generating hundreds of alerts per day that are never actionable will be ignored. Tune detection rules to minimize false positives while catching true positives. Elastic SIEM, Splunk, and Microsoft Sentinel are the primary enterprise platforms.",
          master: [
            "Design a logging strategy for a web application: what events to log, what fields each event requires, and what must not be logged",
            "Explain why logs must be shipped centrally and immutably — describe a log tampering scenario",
            "Write a detection rule for a specific attack pattern: failed login brute force, SQL injection attempt, or SSRF",
            "Describe alert fatigue: how it arises and the practices that reduce false positives without increasing false negatives",
            "Explain the difference between SIEM correlation and individual log analysis — what SIEM enables that grep cannot",
            "Design retention and access controls for security logs: who can access, for how long, under what conditions"
          ],
          res: [
            "Elastic SIEM documentation — open-source SIEM implementation",
            "MITRE ATT&CK (attack.mitre.org) — the threat detection framework, map your detection coverage",
            "Detection Engineering methodology (various blog posts) — how to write high-quality detection rules",
            "Sigma rules (github.com/SigmaHQ/sigma) — portable detection rules for multiple SIEM platforms"
          ]
        }
      ]
    }
  ]
}
