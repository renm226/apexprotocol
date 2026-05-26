export const devsecData = {
  name: "DEVSECOPS",
  area: "devsec",
  eyebrow: "Security as Code Â· Shift Left Â· SAST Â· DAST Â· Container Security Â· Compliance",
  sub: "Security that lives only in the security team's backlog is security that doesn't ship. DevSecOps embeds security into every stage of the development lifecycle â€” in the developer's IDE, in the CI/CD pipeline, in the container registry, and in the production environment. This guide teaches you to build systems that are secure by default, not secure by afterthought.",
  phases: [
    {
      name: "Security Fundamentals for Developers",
      level: "foundation",
      tagline: "Think like an attacker, build like a defender",
      desc: "Every developer must understand security basics. Common vulnerabilities, threat modeling, secure coding practices, and the shared responsibility model in cloud environments.",
      topics: [
        {
          name: "OWASP Top 10 & Secure Coding",
          tag: "core",
          desc: "OWASP Top 10: Injection (SQL, NoSQL, OS command), Broken Authentication, Sensitive Data Exposure, XXE, Broken Access Control, Security Misconfiguration, XSS, Insecure Deserialization, Using Components with Known Vulnerabilities, Insufficient Logging and Monitoring. Secure coding guidelines for each vulnerability with language-specific examples.",
          master: [
            "Identify and fix SQL injection using parameterized queries",
            "Implement proper password hashing (bcrypt, Argon2, PBKDF2)",
            "Set secure HTTP headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options)",
            "Implement proper session management (secure, HttpOnly cookies, session timeout)",
            "Validate all inputs (whitelist approach, type checking, length limits)",
            "Escape outputs based on context (HTML, JavaScript, SQL, CSS)",
            "Implement proper logging without exposing sensitive data"
          ],
          res: [
            "OWASP Top 10 (owasp.org)",
            "OWASP Cheat Sheet Series (cheatsheetseries.owasp.org)",
            "Secure Coding Guidelines (SEI CERT, Microsoft, Google)",
            "The Web Application Hacker's Handbook (Stuttard, Pinto)"
          ]
        },
        {
          name: "Threat Modeling",
          tag: "core",
          desc: "Systematic approach to identifying security threats. STRIDE: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege. DREAD for risk ranking. Attack trees and kill chains. Data flow diagrams (DFDs). Tools: Microsoft Threat Modeling Tool, OWASP Threat Dragon, IriusRisk.",
          master: [
            "Create data flow diagrams for an application architecture",
            "Apply STRIDE to each component and data flow",
            "Rank threats using DREAD or CVSS scores",
            "Build attack trees to visualize exploitation paths",
            "Document mitigation strategies for high-risk threats",
            "Integrate threat modeling into sprint planning",
            "Maintain threat model as architecture evolves"
          ],
          res: [
            "Threat Modeling: Designing for Security (Adam Shostack)",
            "OWASP Threat Modeling (owasp.org)",
            "Microsoft Threat Modeling Tool documentation",
            "Attack Trees (Bruce Schneier â€” original paper)"
          ]
        },
        {
          name: "Cryptography for Developers",
          tag: "core",
          desc: "Hashing (SHA-256, SHA-3, bcrypt, Argon2). Symmetric encryption (AES-GCM, ChaCha20-Poly1305). Asymmetric encryption (RSA, ECC). Key derivation (PBKDF2, scrypt). Digital signatures (ECDSA, Ed25519). TLS/SSL for transport security. Secure random number generation. Key management (KMS, HSM). Avoid deprecated algorithms (MD5, SHA-1, DES, ECB mode).",
          master: [
            "Implement password hashing with bcrypt or Argon2 (salt, iterations)",
            "Encrypt data at rest using AES-GCM with authenticated encryption",
            "Implement TLS 1.3 with proper certificate validation",
            "Generate cryptographically secure random tokens for password resets",
            "Store API keys in environment variables or secret management systems",
            "Implement proper key rotation and versioning",
            "Avoid common mistakes: hardcoded keys, ECB mode, same IV reuse"
          ],
          res: [
            "Cryptography Engineering (Ferguson, Schneier, Kohno)",
            "Practical Cryptography for Developers (Nakov)",
            "NIST Cryptographic Standards (CSRC.nist.gov)",
            "libsodium documentation (doc.libsodium.org)"
          ]
        }
      ]
    },
    {
      name: "CI/CD Security",
      level: "intermediate",
      tagline: "Secure the pipeline",
      desc: "Attackers target CI/CD systems as a high-value entry point. Secure your pipelines, protect secrets, verify dependencies, and implement gates that prevent vulnerable code from reaching production.",
      topics: [
        {
          name: "Pipeline Hardening",
          tag: "core",
          desc: "CI/CD platforms: GitHub Actions, GitLab CI, Jenkins, CircleCI, Azure Pipelines. Principle of least privilege for runners/agents. Immutable build agents (ephemeral containers). Network isolation for build environments. Audit logging of pipeline executions. Branch protection rules. Signed commits. Pipeline execution tracing.",
          master: [
            "Configure branch protection requiring status checks and reviews",
            "Use ephemeral self-hosted runners with auto-scaling",
            "Implement pipeline execution audit trail",
            "Restrict pipeline triggers to trusted branches/tags",
            "Isolate build environments in separate VPC/network",
            "Implement signed commits and verify signatures in CI",
            "Set up pipeline permissions using OIDC (no long-lived credentials)"
          ],
          res: [
            "GitHub Actions security hardening (docs.github.com)",
            "GitLab CI/CD security (docs.gitlab.com)",
            "Jenkins Security documentation (jenkins.io/doc/book/security)",
            "CircleCI security best practices"
          ]
        },
        {
          name: "Secrets Management",
          tag: "core",
          desc: "Never hardcode secrets in code. Environment variables (injected at runtime). Secret managers: HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, GCP Secret Manager, Doppler. CI/CD secrets (encrypted, masked in logs). Dynamic secrets (per-build, per-deploy). Secret rotation policies. Detect leaked secrets (git-secrets, truffleHog, gitleaks).",
          master: [
            "Implement HashiCorp Vault for dynamic database credentials",
            "Use GitHub Actions secrets or GitLab CI variables with environment scoping",
            "Set up git hooks to prevent committing secrets (git-secrets)",
            "Implement secret rotation without application downtime",
            "Use OIDC authentication from CI to cloud provider (no static credentials)",
            "Scan repositories for historical secrets with truffleHog",
            "Implement emergency secret revocation procedures"
          ],
          res: [
            "HashiCorp Vault documentation (vaultproject.io)",
            "AWS Secrets Manager documentation",
            "GitHub Actions secrets (docs.github.com/actions/security-guides)",
            "TruffleHog (GitHub repository)"
          ]
        },
        {
          name: "Dependency & Supply Chain Security",
          tag: "advanced",
          desc: "Software Composition Analysis (SCA): detecting vulnerable open-source dependencies (npm audit, OWASP Dependency-Check, Snyk, Dependabot). SBOM (Software Bill of Materials) generation (SPDX, CycloneDX). Dependency confusion attacks. Typosquatting in package registries. Vendoring vs package managers. Private package registries (Artifactory, Nexus, GitHub Packages).",
          master: [
            "Set up Dependabot or Renovate for automatic dependency updates",
            "Generate SBOM for each release (CycloneDX or SPDX)",
            "Implement private package registry to prevent dependency confusion",
            "Scan dependencies for known vulnerabilities in CI pipeline",
            "Pin dependencies to exact versions with integrity hashes",
            "Implement vulnerability response policy for critical CVEs",
            "Review package.json or requirements.txt for typosquatting risks"
          ],
          res: [
            "OWASP Dependency-Check (owasp.org)",
            "Snyk documentation (snyk.io)",
            "CycloneDX SBOM standard (cyclonedx.org)",
            "Google's SLSA (Supply Chain Levels for Software Artifacts)"
          ]
        }
      ]
    },
    {
      name: "Infrastructure Security as Code",
      level: "advanced",
      tagline: "Prevent misconfigurations before deployment",
      desc: "Security scanning for Terraform, CloudFormation, Kubernetes manifests. Policy as Code (OPA, Sentinel). Compliance automation. Detect and prevent cloud misconfigurations that lead to breaches.",
      topics: [
        {
          name: "IaC Security Scanning",
          tag: "core",
          desc: "Static analysis for infrastructure code: checkov, tfsec, Terrascan, kics. Detect security misconfigurations: open S3 buckets, overly permissive security groups, unencrypted volumes, missing audit logs. Prevent secrets in Terraform state. Validate IAM policies (least privilege).",
          master: [
            "Integrate checkov or tfsec into CI pipeline to block insecure IaC",
            "Scan Terraform state files for sensitive data",
            "Validate IAM policies with policy_sentry or parlay",
            "Prevent public S3 buckets in Terraform using policy-as-code",
            "Enforce encryption on RDS and EBS volumes by policy",
            "Detect hardcoded access keys in Terraform variables",
            "Implement pre-commit hooks for IaC security scanning"
          ],
          res: [
            "checkov documentation (bridgecrew.io/checkov)",
            "tfsec documentation (tfsec.dev)",
            "Open Policy Agent (openpolicyagent.org)",
            "AWS Config Conformance Packs"
          ]
        },
        {
          name: "Policy as Code (OPA, Sentinel)",
          tag: "advanced",
          desc: "Open Policy Agent (OPA) and Rego language for policy definition. HashiCorp Sentinel for Terraform Cloud/Enterprise. Kyverno for Kubernetes policies. Policy decision points vs policy enforcement points. Admission controllers in Kubernetes. Automate compliance (PCI-DSS, SOC2, HIPAA, GDPR).",
          master: [
            "Write OPA policies in Rego to enforce tagging standards",
            "Implement Kubernetes admission controller with OPA Gatekeeper",
            "Use Sentinel to prevent non-compliant Terraform applies",
            "Enforce resource limits and security contexts with Kyverno",
            "Implement custom policy decision service for microservices",
            "Automate compliance evidence collection with policy results",
            "Test policies using unit tests and policy simulation"
          ],
          res: [
            "Open Policy Agent documentation (openpolicyagent.org)",
            "OPA Gatekeeper for Kubernetes (github.com/open-policy-agent/gatekeeper)",
            "HashiCorp Sentinel documentation",
            "Kyverno documentation (kyverno.io)"
          ]
        },
        {
          name: "Cloud Security Posture Management (CSPM)",
          tag: "advanced",
          desc: "Continuous monitoring for cloud misconfigurations. AWS Config, Security Hub, GuardDuty. Azure Security Center, Policy. GCP Security Command Center. CloudTrail for audit logging. Compliance packs (CIS benchmarks). Automated remediation (AWS Config auto-remediation, EventBridge + Lambda). Cloud security graph analysis.",
          master: [
            "Implement AWS Config rules for CIS benchmark compliance",
            "Set up Security Hub to aggregate findings from GuardDuty, Inspector, Macie",
            "Configure CloudTrail to log all API calls with data events",
            "Implement automated remediation for S3 public block violations",
            "Enable VPC Flow Logs and analyze for anomalies",
            "Set up real-time alerts for security group changes",
            "Implement cross-account audit and logging strategy"
          ],
          res: [
            "AWS Security Hub documentation",
            "Azure Security Center documentation",
            "CIS Benchmarks (Center for Internet Security)",
            "Cloud Security Alliance (CSA) guidance"
          ]
        }
      ]
    },
    {
      name: "Container & Kubernetes Security",
      level: "advanced",
      tagline: "Secure your orchestration",
      desc: "Containers share the host kernel â€” misconfigurations can lead to escapes. Secure container images, runtime protection, Kubernetes RBAC, network policies, pod security standards, and admission controllers.",
      topics: [
        {
          name: "Container Image Security",
          tag: "core",
          desc: "Minimal base images (Alpine, distroless, scratch). Image scanning (Trivy, Clair, Grype, Snyk). Signing and verification (Cosign, Notary). Image vulnerability management (CVE database, base image updates). Multi-stage builds to reduce attack surface. Remove package managers and shells from production images.",
          master: [
            "Scan container images for vulnerabilities in CI pipeline (fail on critical CVEs)",
            "Implement image signing with Cosign and verify before deployment",
            "Build minimal images using distroless or scratch",
            "Set up automated base image rebuilds for security patches",
            "Implement image promotion policy (dev â†’ staging â†’ prod with scanning at each stage)",
            "Use .dockerignore to prevent secrets in images",
            "Run container as non-root user (USER directive)"
          ],
          res: [
            "Trivy documentation (aquasecurity.github.io/trivy)",
            "Docker Security documentation (docs.docker.com/engine/security)",
            "Sigstore Cosign (sigstore.dev)",
            "CVE databases (NVD, Alpine SecDB, Debian Security Tracker)"
          ]
        },
        {
          name: "Kubernetes Security Hardening",
          tag: "advanced",
          desc: "RBAC (least privilege, avoid cluster-admin). Pod Security Standards (privileged, baseline, restricted). Network Policies (micro-segmentation). Pod Security Policies (deprecated) vs Pod Security Admission (PSA). Secrets management (encrypted etcd, external secrets operator). Service mesh security (mTLS, authorization policies). Runtime security (Falco).",
          master: [
            "Implement RBAC with least privilege (namespaced roles, avoid wildcards)",
            "Enforce Pod Security Standards at namespace level",
            "Write Network Policies to restrict pod-to-pod communication",
            "Implement secrets encryption in etcd",
            "Use External Secrets Operator to sync secrets from cloud KMS",
            "Set up Falco for runtime threat detection (privilege escalation, shell in container)",
            "Implement Pod Identity (IAM roles for pods, Workload Identity)"
          ],
          res: [
            "Kubernetes Security documentation (kubernetes.io/docs/concepts/security)",
            "Kubernetes Hardening Guide (CISA, NSA)",
            "Falco documentation (falco.org)",
            "External Secrets Operator (external-secrets.io)"
          ]
        },
        {
          name: "Admission Controllers & Policy Enforcement",
          tag: "expert",
          desc: "Mutating and validating admission webhooks. OPA Gatekeeper for policy enforcement. Kyverno (Kubernetes-native policy engine). Admission controller for image signature verification. Blocking privileged containers, hostPath mounts, hostNetwork. Enforcing labels and annotations. Default deny admission controller.",
          master: [
            "Deploy OPA Gatekeeper with constraint templates for common policies",
            "Write Kyverno policies to mutate pods (add security context, labels)",
            "Implement image verification admission controller (check signatures)",
            "Block pods with hostPID, hostIPC, or privileged: true",
            "Enforce resource limits and requests via admission policy",
            "Implement sidecar injection using mutating webhook",
            "Test admission policies using kuttl or bats"
          ],
          res: [
            "Kubernetes Admission Controllers (kubernetes.io/docs/reference/access-authn-authz/admission-controllers)",
            "OPA Gatekeeper documentation (open-policy-agent.github.io/gatekeeper)",
            "Kyverno documentation (kyverno.io)",
            "Kubewarden (policy engine for Kubernetes)"
          ]
        }
      ]
    },
    {
      name: "Security Automation & Response",
      level: "expert",
      tagline: "Respond at machine speed",
      desc: "Automated incident response, security orchestration (SOAR), vulnerability management, and continuous compliance. Shift from reactive to proactive security at scale.",
      topics: [
        {
          name: "Security Orchestration & Automation",
          tag: "advanced",
          desc: "SOAR platforms: Tines, Demisto (Palo Alto), Splunk SOAR, Shuffle. Automated playbooks for common incidents (phishing, compromised credentials, malware detection). Integrate with SIEM, ticketing systems, chatops. Auto-remediation actions (revoke sessions, isolate endpoints, rotate keys). Alert enrichment with threat intelligence.",
          master: [
            "Design automated playbook for compromised AWS access key",
            "Integrate SIEM alerts with Jira/Slack for notification",
            "Implement auto-isolation of compromised EC2 instances",
            "Set up automated vulnerability remediation (patch, update, restart)",
            "Enrich alerts with threat intelligence feeds (IP reputation, domain IOC)",
            "Implement automated ticket creation and closure workflows",
            "Measure MTTR (Mean Time to Respond) improvement with automation"
          ],
          res: [
            "Tines documentation (tines.com/docs)",
            "Splunk SOAR documentation",
            "The Phoenix Project (Gene Kim â€” DevOps and automation culture)",
            "Incident Response Automation (Shuffle project)"
          ]
        },
        {
          name: "Vulnerability Management Program",
          tag: "advanced",
          desc: "Vulnerability scanners (Nessus, Qualys, Rapid7). Prioritization with EPSS (Exploit Prediction Scoring System) and threat intelligence. Patch management automation (AWS Systems Manager Patch Manager, Ansible, Puppet). Vulnerability exception process. Remediation SLAs based on severity. Continuous monitoring for new CVEs.",
          master: [
            "Deploy vulnerability scanner to infrastructure and applications",
            "Implement vulnerability prioritization using EPSS and CVSS",
            "Set up automated patch deployment windows with rollback",
            "Create vulnerability exception process with business owner approval",
            "Track remediation progress in ticketing system",
            "Scan containers in registry for vulnerabilities daily",
            "Implement bug bounty program and vulnerability disclosure policy"
          ],
          res: [
            "Nessus documentation (tenable.com)",
            "Qualys VM documentation",
            "AWS Patch Manager (Systems Manager)",
            "EPSS (First.org â€” Exploit Prediction Scoring System)"
          ]
        },
        {
          name: "Compliance as Code",
          tag: "expert",
          desc: "Automated compliance evidence collection. Tools: Chef InSpec, OpenSCAP, AWS Config, Azure Policy, GCP Policy Intelligence. Continuous compliance monitoring (not just point-in-time audits). Controls for PCI-DSS, SOC2, ISO 27001, HIPAA, FedRAMP. Audit-ready dashboards. Compliance automation pipelines.",
          master: [
            "Write InSpec profiles for CIS benchmark controls",
            "Implement AWS Config conformance packs for PCI-DSS",
            "Set up continuous compliance dashboards for auditors",
            "Automate evidence collection for SOC2 (change management, access reviews)",
            "Implement drift detection for compliance controls",
            "Create compliance pipeline that blocks non-compliant infrastructure",
            "Perform automated control testing and remediation"
          ],
          res: [
            "Chef InSpec documentation (inspec.io)",
            "OpenSCAP (open-scap.org)",
            "AWS Config Conformance Packs",
            "Compliance as Code (Andrew Pruski, MITRE)"
          ]
        }
      ]
    }
  ]
};
