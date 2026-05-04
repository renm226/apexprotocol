const hackingData = {
  name: "OFFENSIVE SECURITY & PENETRATION TESTING",
  area: "hack",
  eyebrow: "Ethical Hacking · Red Teaming · Exploit Development · Active Directory · Cloud Attacks",
  sub: "Think like an attacker to defend like a professional. This is the complete offensive security roadmap — from building your first lab and understanding the legal framework to advanced binary exploitation, Active Directory attack chains, and cloud infrastructure attacks. Every technique is grounded in real-world methodology used in professional engagements, not shallow tool tutorials.",
  phases: [
    {
      name: "The Hacker Mindset and Legal Framework",
      level: "foundation",
      tagline: "Think offensively before touching a keyboard",
      desc: "Offensive security is fundamentally about creative problem-solving. Before learning any technique, internalize the attacker's mindset: you are looking for the gap between how systems are intended to work and how they actually behave. Every misassumption is a potential vulnerability. This phase also establishes the legal and ethical framework — without it, you are just a criminal.",
      topics: [
        {
          name: "Ethics, Law, and the Rules of Engagement",
          tag: "core",
          desc: "Penetration testing is legal hacking performed with explicit written permission. Without authorization, every technique in this guide constitutes a criminal offense in virtually every jurisdiction. The Computer Fraud and Abuse Act (CFAA) in the US, the Computer Misuse Act in the UK, and equivalent laws globally carry serious criminal penalties. A proper engagement always begins with a signed Statement of Work and Rules of Engagement (ROE) that define: scope (which systems can be tested), exclusions (off-limits systems), timing (business hours vs anytime), notification contacts, and allowed techniques. Bug bounty programs are a legitimate alternative — they define a scope and reward structure for responsible disclosure. Always get permission in writing, always stay in scope, always report findings professionally.",
          master: [
            "Understand the legal distinction between authorized penetration testing and unauthorized access",
            "Explain the four types of penetration tests: black box, grey box, white box, red team",
            "Draft a basic Rules of Engagement document for a penetration test",
            "Understand responsible disclosure vs full disclosure vs coordinated disclosure",
            "Know the major bug bounty programs (HackerOne, Bugcrowd) and how to read a scope",
            "Understand the difference between a vulnerability assessment and a penetration test",
            "Explain the penetration testing lifecycle: reconnaissance, scanning, exploitation, post-exploitation, reporting"
          ],
          res: [
            "Penetration Testing (Georgia Weidman — excellent structured introduction)",
            "The Web Application Hacker's Handbook (Stuttard & Pinto)",
            "PTES (Penetration Testing Execution Standard) — ptes.org",
            "OWASP Testing Guide (free, comprehensive methodology)"
          ]
        },
        {
          name: "Setting Up Your Lab",
          tag: "core",
          desc: "Never practice on systems you don't own. A proper home lab is essential. Virtualization: VMware Workstation or VirtualBox to run multiple VMs simultaneously. Kali Linux is the industry-standard offensive security distribution with 600+ pre-installed tools. Parrot OS is a lighter alternative. Network isolation: create a host-only or NAT network so your lab VMs cannot reach the real internet. Vulnerable-by-design targets: Metasploitable 2 and 3 (intentionally vulnerable Linux/Windows), DVWA (Damn Vulnerable Web Application), VulnHub VMs, HackTheBox and TryHackMe platforms (legal, structured practice). Proxmox as a Type-1 hypervisor for more serious labs. Document everything: screenshots, tool output, methodology.",
          master: [
            "Build a home lab with Kali Linux attacker VM and at least two vulnerable target VMs",
            "Configure network isolation so lab VMs cannot reach production systems",
            "Complete at least 10 TryHackMe or HackTheBox challenges to validate methodology",
            "Understand the difference between VM network modes: NAT, bridged, host-only",
            "Set up a documentation system: Obsidian, CherryTree, or Joplin for engagement notes",
            "Configure Burp Suite Community Edition for web application testing",
            "Understand the MITRE ATT&CK framework and how to map techniques to tactics"
          ],
          res: [
            "TryHackMe (tryhackme.com — best platform for beginners, structured learning paths)",
            "HackTheBox (hackthebox.com — harder, more realistic machines)",
            "VulnHub (vulnhub.com — downloadable vulnerable VMs)",
            "MITRE ATT&CK Framework (attack.mitre.org)"
          ]
        },
        {
          name: "Linux Mastery for Hackers",
          tag: "core",
          desc: "Linux is the primary operating system for both attackers and servers. Offensive security requires deep Linux fluency: filesystem navigation and permissions (read/write/execute, SUID/SGID/sticky bit — SUID is a common privilege escalation vector), process management (ps, top, kill, jobs), network tools (ss, netstat, ip, nc, socat), text processing (grep with regex, awk, sed, cut, sort, uniq, xargs — essential for parsing tool output), bash scripting for automation, package management, systemd. Understanding how Linux controls access — users, groups, capabilities, and namespaces — is foundational for both exploitation and hardening. The /proc, /sys, and /dev virtual filesystems expose kernel internals.",
          master: [
            "Navigate the filesystem, manage permissions, and understand SUID/SGID implications",
            "Write bash scripts to automate reconnaissance tasks",
            "Use grep with extended regex to extract IPs, emails, and credentials from log files",
            "Understand how Linux file permissions affect privilege escalation opportunities",
            "Use netcat to create reverse shells, bind shells, and file transfer tunnels",
            "Parse command output using awk, sed, and cut pipelines",
            "Understand Linux capabilities and how they can replace or expand on SUID"
          ],
          res: [
            "The Linux Command Line (William Shotts — free online)",
            "Linux Basics for Hackers (OccupyTheWeb — specifically for offensive security)",
            "OverTheWire Bandit wargame (command line skills through challenges)",
            "Kali Linux Revealed (free from Offensive Security)"
          ]
        }
      ]
    },
    {
      name: "Reconnaissance",
      level: "foundation",
      tagline: "Know your target better than they know themselves",
      desc: "The more you know before you attack, the higher your chance of success. Reconnaissance is the most time-intensive phase of any real engagement. Split into passive (no direct contact with the target) and active (direct interaction). The information gathered here guides every subsequent decision. A thorough recon often reveals the winning attack vector before a single exploit is run.",
      topics: [
        {
          name: "Passive Reconnaissance and OSINT",
          tag: "core",
          desc: "Open Source Intelligence (OSINT) gathers information from public sources without alerting the target. DNS reconnaissance: dig for A, AAAA, MX, TXT, NS records; zone transfer (AXFR) if misconfigured; subdomain enumeration via Amass, Subfinder, Assetfinder. WHOIS lookups reveal registrant info, registration dates, and often email addresses. Shodan (shodan.io) indexes internet-facing devices by their banners — search for open ports, services, and vulnerable versions without touching the target. Censys and FOFA for similar intel. Google Dorking: site:, intitle:, inurl:, filetype:, cache: operators to find sensitive files, admin panels, and login pages. GitHub and GitLab dorks: finding credentials, API keys, and internal documentation in public repositories. theHarvester for email enumeration. LinkedIn for organizational structure. Wayback Machine for historical content.",
          master: [
            "Enumerate all subdomains of a target domain using at least three tools and cross-verify",
            "Find exposed credentials or API keys in a company's GitHub repositories",
            "Use Shodan to identify all internet-facing assets of a target organization",
            "Construct Google dorks to find admin panels, login pages, and indexed files for a target",
            "Build an organizational chart of a target company using LinkedIn OSINT",
            "Find email format and verify addresses using hunter.io and email verification tools",
            "Use the Wayback Machine to find old subdomains or exposed files no longer in DNS"
          ],
          res: [
            "OSINT Techniques (Michael Bazzell — comprehensive OSINT guide)",
            "Google Hacking Database (ghdb.exploit-db.com)",
            "Shodan Manual (shodan.io/manual)",
            "Maltego documentation (powerful OSINT visualization tool)"
          ]
        },
        {
          name: "Active Scanning with Nmap",
          tag: "core",
          desc: "Nmap is the most important scanning tool in offensive security. Host discovery (-sn ping sweep) identifies live hosts before port scanning. Port scanning techniques: SYN scan (-sS, stealth — sends SYN, records SYN-ACK vs RST, never completes handshake), TCP connect scan (-sT, noisy — full three-way handshake), UDP scan (-sU, slow but important — DNS, SNMP, NTP run on UDP). Version detection (-sV) fingerprints services by their banners and behavior. OS detection (-O) uses TCP/IP stack fingerprinting. NSE (Nmap Scripting Engine): scripts in Lua for automatic vulnerability checks, service enumeration, and exploitation. Common scripts: http-enum (directory enumeration), vuln (vulnerability checks), ssl-heartbleed, smb-vuln-ms17-010. Timing templates (-T0 to -T5) control speed vs stealth.",
          master: [
            "Perform a comprehensive scan: SYN scan of all ports, version detection, NSE default scripts",
            "Use UDP scanning to find DNS, SNMP, NTP, and TFTP services",
            "Run NSE vulnerability scripts against a Metasploitable target",
            "Understand what a SYN scan packet looks like at the network layer",
            "Evade basic IDS using decoy scans (-D), fragmented packets, and slow timing (-T1)",
            "Write a basic NSE script to check for a specific HTTP response",
            "Use masscan for high-speed internet-scale scanning when speed matters over stealth"
          ],
          res: [
            "Nmap Network Scanning (Fyodor — free official guide, nmap.org/book)",
            "Nmap NSE documentation (nmap.org/nsedoc)",
            "Masscan documentation (github.com/robertdavidgraham/masscan)",
            "Network Scanning Cookbook (Solis)"
          ]
        },
        {
          name: "Web Application Reconnaissance",
          tag: "core",
          desc: "Web applications have a distinct reconnaissance methodology. Technology fingerprinting: Wappalyzer (browser extension) and WhatWeb identify CMS, frameworks, web servers, and libraries. Directory and file brute forcing: gobuster, ffuf, and dirsearch find hidden directories, backup files (.bak, .old, .zip), admin panels, and unlinked content. Parameter discovery: arjun finds hidden GET and POST parameters. API endpoint discovery: kiterunner uses real-world API wordlists. CMS-specific scanners: WPScan for WordPress (enumerates users, plugins, themes, known vulnerabilities), droopescan for Drupal, JoomScan for Joomla. JavaScript analysis: manually reviewing JS files and using linkfinder or relative-url-extractor to find endpoints and credentials. Burp Suite's spider and crawl functionality. Certificate transparency logs (crt.sh) for subdomain discovery.",
          master: [
            "Use ffuf to brute-force directories, files, and virtual hosts (vhost enumeration)",
            "Analyze all JavaScript files from a target application for hardcoded secrets and endpoints",
            "Use WPScan to enumerate WordPress users, vulnerable plugins, and CVEs",
            "Find hidden GET/POST parameters using arjun",
            "Use crt.sh certificate transparency search to find subdomains not in DNS",
            "Identify the technology stack with three methods and cross-validate",
            "Manually browse an application and map every input point, authentication mechanism, and function"
          ],
          res: [
            "Web Application Hacker's Handbook (Stuttard & Pinto)",
            "OWASP Web Security Testing Guide (free, comprehensive)",
            "ffuf documentation (github.com/ffuf/ffuf)",
            "HackTricks Web Application Pentesting (book.hacktricks.xyz — free)"
          ]
        }
      ]
    },
    {
      name: "Web Application Exploitation",
      level: "intermediate",
      tagline: "Breaking web applications systematically",
      desc: "Web applications are the most common attack surface in modern engagements. This phase covers the OWASP Top 10 vulnerabilities and beyond — not just what they are, but how to find them, exploit them, and chain them together for maximum impact. Master Burp Suite as your primary weapon.",
      topics: [
        {
          name: "Injection Vulnerabilities",
          tag: "core",
          desc: "Injection attacks occur when user-controlled data is interpreted as code or commands. SQL Injection is the most consequential: user input is embedded in SQL queries, allowing attackers to modify the query's logic. Types: in-band (error-based — the database error leaks information; union-based — extra SELECT appended to extract data), blind (boolean-based — true/false responses reveal data bit by bit; time-based — sleep functions confirm conditions via response delay). Tools: sqlmap automates detection and exploitation. Command injection: user input passed to shell execution functions (system(), exec(), popen()) — allows OS command execution. LDAP injection, XML injection (XXE — XML External Entity attacks that read local files or conduct SSRF). NoSQL injection for MongoDB (JSON operator injection). Template injection (SSTI — Server-Side Template Injection): input rendered by template engines like Jinja2, Twig, or Pebble enables RCE.",
          master: [
            "Manually identify and exploit union-based SQL injection to extract the full database schema",
            "Perform blind time-based SQL injection to extract usernames without any output",
            "Use sqlmap effectively: know the parameters for level, risk, technique, and tamper scripts",
            "Identify and exploit command injection — understand which characters break command context",
            "Exploit XXE to read /etc/passwd and then escalate to SSRF for internal requests",
            "Identify and exploit SSTI in Jinja2 — understand how to achieve RCE via template context",
            "Bypass WAF filters for SQL injection using comment obfuscation, case variation, and encoding"
          ],
          deepdive: "SSTI is one of the most dangerous vulnerabilities in modern web applications. When user input is rendered by a server-side template engine, the input has access to the template's execution context. In Jinja2 (Python), the class hierarchy provides access to every loaded Python module. Via __class__.__mro__.__subclasses__(), an attacker can reach subprocess.Popen and execute OS commands. The path from template input to arbitrary command execution is often fewer than three steps.",
          res: [
            "PortSwigger Web Security Academy — SQL injection labs (free, best practice environment)",
            "sqlmap documentation (sqlmap.org)",
            "Server-Side Template Injection (PortSwigger research blog)",
            "PayloadsAllTheThings (GitHub — comprehensive payload lists for all injection types)"
          ]
        },
        {
          name: "Authentication and Session Attacks",
          tag: "core",
          desc: "Authentication is the most frequently broken security control. Common flaws: default credentials (admin:admin, admin:password — always check), username enumeration (different error messages for valid vs invalid users), brute force with no rate limiting or lockout, insecure password reset flows (predictable tokens, weak security questions, host header injection in reset links). Session management attacks: session token with low entropy (predictable), session fixation (attacker sets a known session ID before authentication), session not invalidated on logout. JWT attacks: algorithm confusion (changing HS256 to none or RS256 to HS256 using the public key as the HMAC secret), weak secret brute-forcing, kid injection. OAuth misconfigurations: open redirectors in redirect_uri, state parameter CSRF, token leakage via Referer. Multi-factor authentication bypass: SIM swapping (social), MFA fatigue (push notification spam).",
          master: [
            "Identify username enumeration from timing differences or different error messages",
            "Exploit a JWT with the 'none' algorithm or algorithm confusion vulnerability",
            "Find and exploit an insecure password reset flow using host header injection",
            "Bypass rate limiting on a login form using IP rotation and user-agent variation",
            "Exploit OAuth redirect_uri validation flaws to steal authorization codes",
            "Understand and exploit session fixation attacks",
            "Crack a weak JWT secret using hashcat and a wordlist"
          ],
          res: [
            "PortSwigger Web Security Academy — authentication labs",
            "JWT Attacks (PortSwigger research)",
            "OAuth Security Workshop materials",
            "The Web Application Hacker's Handbook — authentication chapters"
          ]
        },
        {
          name: "XSS, CSRF, SSRF, and Access Control",
          tag: "advanced",
          desc: "Cross-Site Scripting (XSS): injecting malicious scripts into pages viewed by other users. Reflected (non-persistent, in URL), stored (persistent, saved in database), DOM-based (JavaScript reads from attacker-controlled source and writes to dangerous sink). XSS impact: session hijacking, keylogging, phishing overlays, BeEF framework for browser exploitation. CSP (Content Security Policy) bypass techniques. CSRF (Cross-Site Request Forgery): forcing an authenticated user's browser to make requests to a target site without their knowledge. Modern mitigations: SameSite cookie attribute, CSRF tokens. SSRF (Server-Side Request Forgery): making the server send requests on your behalf — reach internal services, cloud metadata endpoints (169.254.169.254), and internal APIs. IDOR (Insecure Direct Object Reference): changing an ID in a request accesses another user's data. Broken access control is the #1 OWASP category.",
          master: [
            "Exploit stored XSS to steal session cookies and demonstrate account takeover",
            "Bypass CSP using JSONP callbacks, open redirectors, or dangling markup",
            "Craft a CSRF proof-of-concept that changes a victim's email or password",
            "Use SSRF to access the AWS EC2 metadata service and extract IAM credentials",
            "Bypass SSRF filters using localhost alternatives: 0.0.0.0, 127.0.0.1, 0177.0.0.1 (octal)",
            "Find IDOR vulnerabilities by analyzing every ID, GUID, or reference in requests",
            "Exploit horizontal and vertical privilege escalation via broken access control"
          ],
          res: [
            "PortSwigger Web Security Academy — XSS, CSRF, SSRF, and access control labs",
            "OWASP Top 10 (owasp.org/Top10 — read the full explanations)",
            "XSS Hunter (xsshunter.com — blind XSS platform)",
            "HackTricks SSRF section (book.hacktricks.xyz)"
          ]
        }
      ]
    },
    {
      name: "Network Penetration Testing",
      level: "intermediate",
      tagline: "Attacking network infrastructure and services",
      desc: "Beyond web applications, most engagements involve attacking network services, internal infrastructure, and Windows/Linux systems. This phase covers the methodology for network pentesting: from service enumeration to exploitation of specific services and protocols.",
      topics: [
        {
          name: "Service Enumeration and Exploitation",
          tag: "core",
          desc: "Every open port is a potential entry point. Methodical enumeration of each service before attempting exploitation. SSH: check version for known CVEs, attempt username enumeration if vulnerable version, try default credentials and common passwords. FTP: anonymous login, version vulnerabilities, writable directories. SMB (port 445): EternalBlue (MS17-010, used by WannaCry — still unpatched on many internal networks), NullSessions, share enumeration with smbclient and smbmap, credential capture with responder. RDP (port 3389): BlueKeep (CVE-2019-0708), Bluekeep, credential brute force. SMTP: open relay check, username enumeration (VRFY, EXPN). SNMP: community string brute force (public/private are defaults), OID extraction for device configuration. VoIP: SIP scanners (svmap), extension enumeration (svwar), eavesdropping. Database services: MySQL, PostgreSQL, MSSQL with default credentials.",
          master: [
            "Enumerate SMB shares with smbclient and smbmap without credentials",
            "Check for MS17-010 vulnerability and understand the EternalBlue exploit mechanism",
            "Capture NTLMv2 hashes using Responder during an internal network engagement",
            "Enumerate SNMP v1/v2c community strings and extract device configuration",
            "Enumerate SMTP usernames using the VRFY command",
            "Connect to an exposed database service and extract credentials",
            "Use Metasploit intelligently: understand modules, payloads, and encoders"
          ],
          res: [
            "Metasploitable documentation (rapid7.com)",
            "Hack The Box Writeups (post-retire, many on GitHub)",
            "SANS Penetration Testing Cheat Sheet",
            "HackTricks (book.hacktricks.xyz — every service has an enumeration section)"
          ]
        },
        {
          name: "Man-in-the-Middle Attacks",
          tag: "advanced",
          desc: "MITM attacks position the attacker between two communicating parties to intercept and potentially modify traffic. ARP spoofing: broadcast forged ARP replies telling all hosts that the attacker's MAC corresponds to the gateway IP — all traffic flows through the attacker. Tools: arpspoof, ettercap, bettercap. Once MITM is established: HTTP traffic can be read and modified, HTTPS traffic can be decrypted via SSL stripping (Bettercap's SSLStrip) if the victim doesn't enforce HSTS, credentials in HTTP can be captured. Responder attacks on Windows networks: LLMNR and NBT-NS poisoning — when Windows cannot resolve a hostname via DNS, it broadcasts LLMNR/NBT-NS queries that Responder answers, triggering an automatic authentication attempt that sends NTLMv2 challenge-response hashes. These hashes can be cracked offline with hashcat.",
          master: [
            "Perform ARP spoofing in a lab and capture HTTP credentials using Bettercap",
            "Set up Responder on an internal network segment and capture NTLMv2 hashes",
            "Crack captured NTLMv2 hashes with hashcat using rockyou.txt wordlist",
            "Understand HSTS and why SSL stripping fails against properly configured sites",
            "Set up a rogue WiFi access point and capture credentials",
            "Understand mDNS and WPAD abuse in internal network MITM scenarios",
            "Perform relay attacks: NTLMv2 relay with ntlmrelayx instead of just capturing"
          ],
          res: [
            "Bettercap documentation (bettercap.org)",
            "Responder (lgandx.github.io/Responder-Wiki)",
            "impacket documentation (github.com/fortra/impacket)",
            "Practical Network Penetration Testing (practical series)"
          ]
        },
        {
          name: "Active Directory Attacks",
          tag: "advanced",
          desc: "Active Directory (AD) is the authentication and authorization backbone of almost every Windows enterprise network. Compromise AD and you compromise the entire organization. Key concepts: Domain, Forest, Trusts, Domain Controller (DC), Kerberos authentication, NTLM authentication. Kerberos attacks: Kerberoasting (request TGS tickets for service accounts and crack their RC4-encrypted tickets offline — service accounts often have weak passwords), AS-REP Roasting (accounts with Kerberos pre-auth disabled send an AS-REP that can be cracked), Pass-the-Hash (reuse NTLM hash without knowing the plaintext), Pass-the-Ticket (reuse stolen Kerberos tickets), Golden Ticket (forge TGTs using the KRBTGT hash — persistence for 10+ years), Silver Ticket (forge TGS for specific services). BloodHound (graph-based AD attack path analysis), PowerView, and SharpAD for enumeration. DCSync attack: replicate DC credentials remotely.",
          master: [
            "Enumerate AD users, groups, SPNs, and ACLs using BloodHound and SharpHound",
            "Perform Kerberoasting: request, extract, and crack service account tickets",
            "Execute AS-REP Roasting against accounts with pre-auth disabled",
            "Perform Pass-the-Hash to authenticate as a user using only their NTLM hash",
            "Identify attack paths to Domain Admin in BloodHound and explain each hop",
            "Execute DCSync with secretsdump.py to dump all domain credentials",
            "Understand the Golden Ticket attack and why it requires KRBTGT hash"
          ],
          deepdive: "BloodHound is the most transformative tool in Active Directory penetration testing. It ingests data from SharpHound (a C# collector) and builds a graph database of AD relationships. Attack path analysis answers the question: given this compromised account, what is the shortest path to Domain Admin? Paths often involve unexpected relationships: GenericWrite on a group → add yourself to it → group has WriteDACL on a user → reset their password → that user is local admin on a computer → LSASS dump gives another user's hash → repeat.",
          res: [
            "Attacking and Defending Active Directory (course by Nikhil Mittal — excellent)",
            "The Hacker Recipes (thehacker.recipes — free, comprehensive AD attack guide)",
            "BloodHound documentation (bloodhound.readthedocs.io)",
            "impacket examples (github.com/fortra/impacket/tree/master/examples)"
          ]
        }
      ]
    },
    {
      name: "Post-Exploitation",
      level: "advanced",
      tagline: "What happens after you get in",
      desc: "Initial access is only the beginning. Post-exploitation covers what attackers do after compromising a system: establishing persistence, escalating privileges, moving laterally, exfiltrating data, and evading detection. Understanding post-exploitation is critical for building realistic detections and understanding the full attack chain.",
      topics: [
        {
          name: "Privilege Escalation",
          tag: "core",
          desc: "Privilege escalation converts limited access (low-privileged user, service account) into administrator or root access. Linux privilege escalation vectors: SUID/SGID binaries (GTFOBins documents every binary that can be abused), world-writable scripts run by cron as root, sudo misconfigurations (sudo -l reveals what you can run), weak file permissions on sensitive files (/etc/passwd writable), kernel exploits (Dirty COW, Dirty Pipe), PATH manipulation, LD_PRELOAD abuse, NFS with root_squash disabled. Windows privilege escalation: unquoted service paths, weak service binary permissions, AlwaysInstallElevated registry key, token impersonation (PrintSpoofer, RoguePotato for service accounts with SeImpersonatePrivilege), DLL hijacking, scheduled task abuses, stored credentials.",
          master: [
            "Enumerate Linux privilege escalation vectors using LinPEAS and manually verify findings",
            "Exploit a SUID binary using GTFOBins methodology",
            "Identify and exploit a sudo misconfiguration (ALL, NOPASSWD, env_keep LD_PRELOAD)",
            "Enumerate Windows privilege escalation vectors using WinPEAS",
            "Exploit SeImpersonatePrivilege with PrintSpoofer or RoguePotato",
            "Find and exploit an unquoted service path on Windows",
            "Understand token impersonation and when it applies"
          ],
          res: [
            "GTFOBins (gtfobins.github.io — every SUID binary abuse technique)",
            "LOLBAS (lolbas-project.github.io — Windows living off the land binaries)",
            "LinPEAS and WinPEAS (github.com/carlospolop/PEASS-ng)",
            "Hacktricks — Linux and Windows privilege escalation"
          ]
        },
        {
          name: "Persistence and Lateral Movement",
          tag: "advanced",
          desc: "Persistence ensures access survives system reboots and credential changes. Linux: cron jobs, systemd services, SSH authorized_keys, .bashrc/.profile modification, PAM backdoors, kernel modules. Windows: registry run keys (HKCU/HKLM Run), scheduled tasks, service installation, DLL side-loading, COM hijacking, WMI event subscriptions (difficult to detect, survives reboots). Lateral movement expands the foothold across the network. Windows: PsExec-style execution over SMB, WMI remote execution, PowerShell remoting, RDP with Pass-the-Hash (restricted admin mode), SMBExec, DCOM lateral movement. Linux: SSH key forwarding, credential reuse, NFS mounts. Credentials are the primary vehicle for lateral movement — every compromised system should be mined for credentials (LSASS, credential vaults, config files, browser saved passwords).",
          master: [
            "Establish persistence on a Linux system using a systemd service backdoor",
            "Create a Windows persistence mechanism via scheduled task and WMI event subscription",
            "Move laterally using impacket's wmiexec and psexec over captured credentials",
            "Extract credentials from LSASS using Mimikatz (or Mimikatz-compatible tools)",
            "Perform token impersonation for lateral movement using incognito",
            "Map lateral movement paths across a network using BloodHound",
            "Understand and apply the ATT&CK framework persistence techniques (TA0003)"
          ],
          res: [
            "Mimikatz (gentilkiwi.com — understand the theory behind each module)",
            "MITRE ATT&CK TA0003 Persistence (attack.mitre.org)",
            "Offensive Security's Metasploit Unleashed (free, comprehensive)",
            "Red Team Development and Operations (Joe Vest)"
          ]
        },
        {
          name: "Credential Attacks and Password Cracking",
          tag: "advanced",
          desc: "Credentials are the keys to the kingdom. Password cracking converts captured hashes back to plaintext. Hash types: LM (trivially broken, legacy Windows), NTLM/NTHash (Windows, fast to crack), NTLMv1/v2 (challenge-response, capture via Responder), Kerberos hashes (AS-REP, TGS from Kerberoasting), bcrypt/scrypt/Argon2 (slow by design — designed to resist cracking), MD5/SHA1 (fast, common in web apps), SHA-256 crypt (Linux /etc/shadow). Hashcat: GPU-accelerated password cracking. Attack modes: straight (wordlist), combination (two wordlists combined), brute force (mask attack — specify character sets), rule-based (apply mangling rules to wordlist — most effective for real passwords). John the Ripper: CPU-based alternative. Password spraying vs brute force: spraying tries one password against many accounts to avoid lockout.",
          master: [
            "Crack MD5, NTLM, and SHA-512crypt hashes using hashcat with rockyou.txt",
            "Use hashcat rule-based attacks to crack complex passwords efficiently",
            "Perform password spraying against an organization's Office 365 with SPRAY tool",
            "Understand rainbow table attacks and why salted hashes defeat them",
            "Use crackstation.net to identify common hashes without GPU resources",
            "Analyze a company's leaked breach data to understand their password policy",
            "Understand Kerberoasting hash format and crack it with hashcat mode 13100"
          ],
          res: [
            "Hashcat documentation (hashcat.net/wiki)",
            "Hob0Rules (hashcat rules by NotSoSecure — excellent real-world rules)",
            "Have I Been Pwned (haveibeenpwned.com — understand breach data)",
            "Password Cracking 101 (Hashcat example hashes page)"
          ]
        }
      ]
    },
    {
      name: "Red Teaming and Adversary Simulation",
      level: "advanced",
      tagline: "Simulate real threat actors end-to-end",
      desc: "Red teaming goes beyond penetration testing: instead of finding all vulnerabilities, you simulate a specific adversary's tactics, techniques, and procedures (TTPs) to test the organization's detection and response capabilities. The goal is not to enumerate findings — it is to test whether the blue team can detect and stop a real attack chain.",
      topics: [
        {
          name: "Command and Control (C2) Frameworks",
          tag: "advanced",
          desc: "C2 frameworks manage compromised hosts and provide operators with a consistent interface. Cobalt Strike (commercial, industry standard, heavily used by real APTs — making detection harder), Metasploit Framework (open source, excellent for learning), Sliver (open source C2 from BishopFox, actively developed), Havoc (modern open source), Brute Ratel C4 (commercial alternative to Cobalt Strike). C2 concepts: listeners (wait for callbacks), stagers (small first-stage payload), beacons (callback-based agents), sleeping (anti-sandbox, blend into normal traffic), malleable C2 profiles (make traffic look like legitimate services). Infrastructure: redirectors (nginx/Apache on VPS that forward C2 traffic to team server — hide team server IP), domain fronting (deprecated), CDN-based C2.",
          master: [
            "Set up a Sliver C2 server and generate implants for multiple protocols (HTTP, HTTPS, DNS)",
            "Configure an nginx redirector to proxy C2 traffic and hide your team server",
            "Understand Cobalt Strike's malleable C2 profile concept and why it matters for detection evasion",
            "Build a domain name with aged registration and WHOIS privacy for C2 infrastructure",
            "Understand the difference between staged and stageless payloads and their operational tradeoffs",
            "Implement a basic sleep mask and understand why anti-sandbox techniques are needed",
            "Map your C2 TTPs to MITRE ATT&CK and understand what your detection gaps are"
          ],
          res: [
            "Cobalt Strike documentation (cobaltstrike.com — even without a license, read it)",
            "Sliver C2 documentation (github.com/BishopFox/sliver)",
            "Red Team Development and Operations (Joe Vest — free ebook)",
            "C2 Matrix (thec2matrix.com — compares every C2 framework)"
          ]
        },
        {
          name: "Phishing and Social Engineering",
          tag: "advanced",
          desc: "Humans are the most reliably exploitable attack surface. Phishing remains the #1 initial access vector in real breaches. Spear phishing: highly targeted emails using OSINT to personalize the message — reference real projects, colleagues, vendors, and current events. Pretexting: building a believable cover story (IT support, vendor, auditor). Vishing (voice phishing): calling targets using pretexts to extract credentials or two-factor codes. Smishing: SMS phishing (increasingly common). Infrastructure: lookalike domains (typosquatting, homograph attacks), email spoofing (check DMARC, DKIM, SPF configuration), GoPhish for phishing campaigns. Lure types: credential harvesting (fake login pages), malicious attachments (weaponized Office documents, LNK files, ISO files). Browser-in-the-Middle (BitM) phishing via Evilginx2: proxies a legitimate site to bypass MFA.",
          master: [
            "Set up a GoPhish campaign with a cloned login page and analyze results",
            "Configure Evilginx2 to proxy Office 365 login and capture session cookies bypassing MFA",
            "Build a spear phishing email using OSINT: reference real projects, real colleagues",
            "Create a malicious LNK file or Office macro that triggers a C2 callback",
            "Understand DMARC/DKIM/SPF and how misconfiguration enables email spoofing",
            "Perform a pretexting vishing call to extract information from a target (with permission)",
            "Understand the psychological principles behind social engineering: authority, urgency, familiarity"
          ],
          res: [
            "Social Engineering: The Science of Human Hacking (Hadnagy)",
            "Evilginx2 documentation (github.com/kgretzky/evilginx2)",
            "GoPhish documentation (getgophish.com)",
            "SANS SEC504: Hacker Techniques, Exploits & Incident Handling"
          ]
        },
        {
          name: "Evasion and Antivirus Bypass",
          tag: "expert",
          desc: "Modern endpoint security (EDR/AV) detects many standard attack tools via signature matching, behavioral analysis, and memory scanning. Evasion techniques: signature-based evasion (obfuscation, encoding, encryption of shellcode, custom loader that decrypts at runtime), behavioral evasion (API unhooking — EDRs hook NTDLL API calls; unhooking restores original bytes), direct syscalls (bypass EDR hooks by calling the kernel directly via syscall instructions), AMSI (Antimalware Scan Interface) bypass (patch AMSI in-memory to return success), ETW (Event Tracing for Windows) patching, process injection techniques (classic DLL injection, process hollowing, process doppelgänging, thread hijacking, APC injection, heaven's gate). LOLBins (Living off the Land Binaries): use built-in Windows tools for malicious purposes — detected less often.",
          master: [
            "Bypass AMSI using in-memory patching and verify with an AMSI test string",
            "Generate an XOR-encrypted shellcode loader that evades static AV signatures",
            "Understand the difference between NTAPI and direct syscalls for EDR evasion",
            "Inject shellcode into a remote process using process hollowing",
            "Use LOLBins (certutil, mshta, rundll32, regsvr32) for payload execution",
            "Understand why process injection works at a Windows internals level",
            "Evade behavioral detection by adding delays and blending beacon traffic with normal activity"
          ],
          res: [
            "Malware Development for Ethical Hackers (Packt — practical shellcode and loaders)",
            "AMSI Bypass techniques (s3cur3th1ssh1t.github.io)",
            "Sektor7 Malware Development courses",
            "Windows API Hacking (repnz.github.io)"
          ]
        }
      ]
    },
    {
      name: "Exploit Development",
      level: "expert",
      tagline: "Converting vulnerabilities into controlled code execution",
      desc: "Binary exploitation is the deepest and most technically demanding area of offensive security. You are reverse-engineering how programs manage memory and finding ways to redirect execution. This requires understanding computer architecture, operating system internals, and assembly language.",
      topics: [
        {
          name: "Assembly Language and Debugging",
          tag: "advanced",
          desc: "You cannot exploit binaries without reading assembly. x86-64 architecture: general-purpose registers (RAX, RBX, RCX, RDX, RSI, RDI, RSP, RBP, R8-R15), instruction pointer (RIP), flags register (CF, ZF, SF, OF). Stack: grows downward; RSP points to top of stack; PUSH decrements RSP and writes; POP reads and increments. Calling conventions: System V AMD64 ABI (Linux) — first 6 integer arguments in RDI, RSI, RDX, RCX, R8, R9; return value in RAX. x64 Windows — RCX, RDX, R8, R9. Stack frame: saved RBP, local variables, saved registers, return address. Debugging: GDB with pwndbg or GEF plugins provides a powerful disassembly and memory inspection interface. radare2 and Ghidra for static analysis. pwntools for scripting exploits in Python.",
          master: [
            "Read and understand x86-64 assembly for common patterns: function prologues, loops, conditionals",
            "Set up GDB with pwndbg and use it to inspect registers, stack, and heap during execution",
            "Use Ghidra to decompile a binary and understand what the C equivalent logic is",
            "Understand the complete x64 System V calling convention with register assignments",
            "Trace a function call and return at the assembly level in GDB",
            "Identify buffer overflows by reading disassembly without source code",
            "Use pwntools to write structured exploit scripts with process interaction"
          ],
          res: [
            "Computer Systems: A Programmer's Perspective (Bryant & O'Hallaron — CSAPP, free online)",
            "x86-64 Assembly Language Programming with Ubuntu (free PDF)",
            "pwndbg documentation (github.com/pwndbg/pwndbg)",
            "Ghidra documentation (NSA reverse engineering tool, free)"
          ]
        },
        {
          name: "Stack-Based Buffer Overflows",
          tag: "advanced",
          desc: "The classic exploitation technique. A local buffer on the stack has no bounds checking. By writing more data than the buffer can hold, you overwrite adjacent stack memory including: saved registers, saved frame pointer (RBP), and critically the saved return address (RIP). By overwriting RIP with the address of shellcode or a gadget, you redirect execution. Classic (no mitigations): NOP sled (series of 0x90 NOP instructions) before shellcode for reliability, find buffer offset using cyclic patterns, overwrite RIP with buffer address. Modern stack protections: stack canary (random value placed before return address — program checks it before returning; bypass requires information leak), ASLR (randomizes stack/heap/library addresses — bypass requires leak), NX/DEP (stack is not executable — bypass with ROP). Windows exploits: structured exception handler (SEH) overwrites.",
          master: [
            "Exploit a stack buffer overflow with all protections disabled to understand the mechanics",
            "Use pwntools cyclic patterns to find the exact offset to the return address",
            "Understand stack canaries: what value, where placed, how the check works",
            "Understand ASLR: which regions are randomized, which are typically not (PIE vs no-PIE)",
            "Exploit a buffer overflow on a binary without PIE using ret2plt/ret2libc techniques",
            "Use an information leak vulnerability to defeat ASLR",
            "Understand the difference between 32-bit and 64-bit stack exploitation"
          ],
          res: [
            "Smashing The Stack For Fun And Profit (Aleph One 1996 — the original classic)",
            "Modern Binary Exploitation (RPI course, free — rpi.edu/mbe)",
            "LiveOverflow YouTube — Binary Exploitation series (free, visual explanations)",
            "pwntools documentation (docs.pwntools.com)"
          ]
        },
        {
          name: "Return-Oriented Programming (ROP)",
          tag: "expert",
          desc: "When the stack is non-executable (NX/DEP), you cannot place shellcode there. Return-Oriented Programming chains small existing code snippets — each ending in a RET instruction — to perform arbitrary computation using the program's own code. A ROP gadget is typically 1-5 instructions followed by RET. By controlling the stack (via overflow), you control which gadgets execute in sequence, with each RET loading the next gadget address from the stack. Building a ROP chain: find gadgets with ROPgadget or Ropper, identify pop register + ret gadgets for loading values, call libc functions (ret2libc: chain pop rdi; ret → '/bin/sh' address → system() address). ASLR defeats static addresses — requires libc leak. One-gadget in libc provides a single-gadget execve('/bin/sh') under certain constraints.",
          master: [
            "Find ROP gadgets in a binary using ROPgadget and ropper tools",
            "Build a ROP chain to call execve('/bin/sh', NULL, NULL) on a 64-bit binary",
            "Leak a libc address using a format string or return-to-PLT to defeat ASLR",
            "Calculate libc base address from a leaked function address",
            "Use one_gadget to find single-gadget RCE and verify the register constraints",
            "Understand ret2plt: using PLT entries as a stepping stone to leak addresses",
            "Build a ROP chain using pwntools ROP module"
          ],
          res: [
            "Return-Oriented Programming: Systems, Languages, and Applications (Shacham)",
            "ROPemporium (ropemporium.com — dedicated ROP training challenges)",
            "ROPgadget documentation (github.com/JonathanSalwan/ROPgadget)",
            "ir0nstone binary exploitation notes (github.com/ir0nstone/pwn-notes — free)"
          ]
        }
      ]
    },
    {
      name: "Cloud and Modern Infrastructure Attacks",
      level: "expert",
      tagline: "Attacking cloud, containers, and CI/CD",
      desc: "Organizations have migrated to cloud infrastructure, containers, and automated CI/CD pipelines. These environments introduce new attack surfaces that traditional pentesting doesn't cover. Cloud misconfigurations are the most common cause of breaches today — SSRF to metadata API, overpermissioned IAM roles, and public S3 buckets have caused enormous data breaches.",
      topics: [
        {
          name: "AWS and Cloud Security Attacks",
          tag: "advanced",
          desc: "AWS is the dominant cloud platform and full of misconfiguration opportunities. The Instance Metadata Service (IMDS) at 169.254.169.254 provides EC2 instances with their IAM role credentials — accessible via SSRF if the application is vulnerable. IMDSv2 adds a session token requirement. S3 buckets: public read exposes data, public write allows defacement and malware hosting. IAM privilege escalation: overpermissioned roles, PassRole and iam:CreateAccessKey abuses, privilege escalation via Lambda (create function, attach role with higher privileges, invoke). Pacu is the AWS exploitation framework. CloudSploit and Prowler for misconfiguration scanning. Cross-account attacks via role trust policies. CloudTrail logging: what is and isn't logged.",
          master: [
            "Use SSRF to reach the EC2 metadata service and extract IAM credentials",
            "Enumerate AWS resources using stolen credentials with Pacu framework",
            "Find and enumerate misconfigured public S3 buckets",
            "Identify IAM privilege escalation paths using Pacu's iam_privesc_scan module",
            "Understand the PassRole privilege and how it enables privilege escalation",
            "Scan an AWS account for misconfigurations using Prowler",
            "Understand what actions are and are not logged in CloudTrail"
          ],
          res: [
            "Hacking the Cloud (hackingthe.cloud — free, AWS attack techniques)",
            "Pacu documentation (github.com/RhinoSecurityLabs/pacu)",
            "AWS Security Best Practices Whitepaper",
            "Cloud Hacktricks (book.hacktricks.xyz/cloud-security)"
          ]
        },
        {
          name: "Container and Kubernetes Attacks",
          tag: "expert",
          desc: "Docker and Kubernetes are ubiquitous but frequently misconfigured. Docker escape techniques: privileged container (has access to host devices and can mount host filesystem), Docker socket mounted inside container (access to Docker daemon = root on host), kernel exploit escalation. Kubernetes attacks: service account tokens (automounted, often overpermissioned, can access K8s API), misconfigured RBAC (list/get secrets globally, create pods to steal node credentials), etcd exposure (stores all cluster secrets unencrypted), kubelet API exposure (exec into pods without kubectl), node compromise for cluster-admin via credential theft. Tools: kubeletmage, kubescape, kube-hunter for scanning. Cloud-native: EKS/GKE/AKS have additional IAM attack surfaces.",
          master: [
            "Escape a privileged Docker container by mounting the host filesystem",
            "Exploit a mounted Docker socket to run a privileged container and escape to host",
            "Enumerate Kubernetes RBAC permissions using the service account token",
            "Use a misconfigured service account to list and read Kubernetes secrets",
            "Identify kubelet API exposure and use it to exec into pods",
            "Use kube-hunter to scan a Kubernetes cluster for vulnerabilities",
            "Understand how compromising a worker node enables stealing other pods' secrets"
          ],
          res: [
            "Kubernetes Security (Liz Rice — O'Reilly, free preview)",
            "Container Security (Liz Rice — O'Reilly)",
            "KubeCon security talks (youtube.com/KubeCon)",
            "CNCF Security Whitepaper (free)"
          ]
        },
        {
          name: "CI/CD Pipeline Attacks",
          tag: "expert",
          desc: "CI/CD pipelines have become a premier attack target because they have access to production secrets, deployment credentials, and source code. Attack vectors: injecting malicious code via pull requests that execute in the pipeline, stealing secrets from pipeline environment variables, compromising a dependency (supply chain attack — SolarWinds, XZ Utils), pipeline as code files (Jenkinsfile, .github/workflows) often run with elevated permissions. GitHub Actions: workflow injection via untrusted input in issue titles, PR bodies; OIDC token theft; artifact poisoning. Jenkins: Groovy sandbox bypass, unauthenticated script console, SSRF via build triggers. Supply chain: typosquatting packages on npm/PyPI, compromising a widely-used package (SolarWinds-style). SLSA framework for supply chain integrity.",
          master: [
            "Exploit a GitHub Actions workflow injection via untrusted pull request input",
            "Extract secrets from a CI pipeline by injecting commands into a build script",
            "Understand how GitHub OIDC tokens work and how they can be abused",
            "Scan a repository's CI configuration for security misconfigurations",
            "Understand the SolarWinds and XZ Utils attacks as supply chain archetypes",
            "Exploit a Jenkins unauthenticated build trigger to run arbitrary commands",
            "Implement SLSA Level 2 supply chain security controls and explain what they prevent"
          ],
          res: [
            "GitHub Actions Security Hardening (docs.github.com/actions/security)",
            "Poisoned Pipeline Execution (ppexe.io — research on CI/CD attacks)",
            "SLSA Supply Chain Framework (slsa.dev)",
            "Securing DevOps (Julien Vehent — free online)"
          ]
        }
      ]
    },
    {
      name: "Defensive Skills and Professional Practice",
      level: "expert",
      tagline: "From attacker to complete security professional",
      desc: "The best offensive security professionals deeply understand defense. This phase covers reporting (which determines how much your work actually matters), threat modeling, building detections from your attack knowledge, and the soft skills that separate respected professionals from script kiddies.",
      topics: [
        {
          name: "Penetration Test Reporting",
          tag: "core",
          desc: "A perfect technical hack means nothing if the report is unreadable. Reports are the product that clients pay for — they must be clear, accurate, actionable, and risk-contextualized. Executive summary: 1-2 pages for non-technical leadership — overall risk rating, critical findings summary, business impact language (not technical jargon). Technical findings: vulnerability name, CVSS score, affected systems, detailed description, proof-of-concept evidence (screenshots with sensitive data redacted), business impact, remediation recommendation. Methodology section. Scope and limitations. Remediation priorities: critical (immediate), high (within 30 days), medium (within 90 days), low (best effort). Common mistakes: listing vulnerabilities without exploitation evidence, vague remediations, no business context, incorrect severity ratings.",
          master: [
            "Write a complete executive summary for a penetration test without using technical jargon",
            "Assign CVSS scores accurately and explain the scoring vector for each finding",
            "Write a finding with: description, evidence, business impact, and specific remediation steps",
            "Correctly prioritize findings based on likelihood and business impact, not CVSS alone",
            "Review a sample report and identify its weaknesses",
            "Understand the difference between a vulnerability assessment report and a pentest report",
            "Present findings to a non-technical executive audience effectively"
          ],
          res: [
            "The Art of Writing Penetration Test Reports (TCM Security guide)",
            "CVSS v3.1 Specification (first.org/cvss)",
            "Sample pentest reports (github.com/juliocesarfort/public-pentesting-reports)",
            "Penetration Testing (Weidman — reporting chapter)"
          ]
        },
        {
          name: "Threat Modeling",
          tag: "advanced",
          desc: "Threat modeling identifies security risks before systems are built or compromised. STRIDE methodology: Spoofing (impersonating identity), Tampering (modifying data), Repudiation (denying actions), Information Disclosure (leaking data), Denial of Service (disrupting availability), Elevation of Privilege (gaining unauthorized access). PASTA (Process for Attack Simulation and Threat Analysis): risk-centric, seven-stage process. MITRE ATT&CK as a threat model framework for enterprise systems. Drawing data flow diagrams (DFDs): identify trust boundaries and evaluate threats at each crossing. Threat modeling tools: OWASP Threat Dragon, Microsoft Threat Modeling Tool. Prioritize threats using DREAD or CVSS. Output: documented threats, mitigations, and residual risks.",
          master: [
            "Create a threat model for a web application using STRIDE on a data flow diagram",
            "Map a real-world breach (e.g., SolarWinds, Equifax) to ATT&CK techniques",
            "Identify trust boundaries in an architecture diagram and enumerate threats at each",
            "Score threats using DREAD and create a prioritized remediation roadmap",
            "Explain how threat modeling changes the security conversation from reactive to proactive",
            "Build a threat model for an AWS multi-tier application",
            "Use ATT&CK Navigator to document a threat actor profile's TTPs"
          ],
          res: [
            "Threat Modeling: Designing for Security (Adam Shostack — the definitive guide)",
            "OWASP Threat Dragon (free threat modeling tool)",
            "MITRE ATT&CK Navigator (attack.mitre.org/navigator)",
            "Threat Modeling Manifesto (threatmodelingmanifesto.org)"
          ]
        },
        {
          name: "Certifications and Career Development",
          tag: "core",
          desc: "The offensive security certification landscape: OSCP (Offensive Security Certified Professional) is the gold standard for penetration testers — 24-hour practical exam, requires hacking multiple machines without hints. OSEP (advanced post-exploitation and AD), OSED (exploit development), OSWE (web application expert) for specializations. CRTO (Certified Red Team Operator) focuses on Cobalt Strike and red teaming. PNPT (Practical Network Penetration Testing by TCM Security) is excellent for beginners. CEH is theoretical and not respected by practitioners. Bug bounty as a career path: start with HackerOne, build a track record, specialize in a platform or vulnerability class. Building a public profile: CVEs, blog posts, conference talks, GitHub tools, CTF writeups. Networking: DEF CON, Black Hat, local BSides conferences.",
          master: [
            "Complete the OSCP PWK labs and pass the exam (or a comparable practical cert)",
            "Find and responsibly disclose at least one bug bounty vulnerability",
            "Write a detailed technical blog post about a vulnerability you discovered or researched",
            "Build a public GitHub repository with a security tool or automation you created",
            "Participate in CTF competitions and publish writeups after the competition ends",
            "Attend at least one security conference (DEF CON, Black Hat, BSides local)",
            "Build a network with other security professionals — referrals matter more than certs"
          ],
          res: [
            "Offensive Security PEN-200 (OSCP course — the best structured pentesting training)",
            "TCM Security PNPT course (affordable, excellent beginner path)",
            "HackerOne Hacker101 (free training for bug bounty)",
            "DEF CON talks archive (youtube.com/defjcon — free research content)"
          ]
        }
      ]
    }
  ]
};