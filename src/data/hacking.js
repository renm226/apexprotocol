export const hackingData = {
  name: "OFFENSIVE SECURITY & PENETRATION TESTING",
  area: "hack",
  eyebrow: "Ethical Hacking · Red Teaming · Active Directory · Web Exploitation · Binary Exploitation",
  sub: "Most people learn offensive security backwards — they memorize tool flags before they understand why those flags exist. This roadmap fixes that. Every technique here is grounded in how real engagements actually run, not how CTF writeups make them look. The goal is to think like an attacker, not to collect certifications.",
  phases: [
    {
      name: "Foundations: Mindset, Law, and Your Lab",
      level: "foundation",
      tagline: "You need a working environment before you need any skills",
      desc: "The attacker mindset is not about being clever — it is about being systematic. You are looking for the gap between how a system was designed to work and how it actually behaves under conditions the designer did not anticipate. Every assumption a developer made is a potential vulnerability. Before anything else: offensive security without written authorization is a crime in every jurisdiction that matters. Get that in your head permanently.",
      topics: [
        {
          name: "Authorization, Scope, and the Legal Reality",
          tag: "core",
          desc: "The Computer Fraud and Abuse Act (US), Computer Misuse Act (UK), and their equivalents globally do not care about your intentions. Unauthorized access to a computer system is a criminal offense regardless of whether you found something or not. A signed Statement of Work and Rules of Engagement define exactly what you are allowed to touch, when, and how. Scope defines the boundary — systems not in scope are off-limits even if you can reach them. Bug bounty programs are the legitimate entry point if you do not have a client yet: HackerOne and Bugcrowd publish explicit scopes and reward structures. Read the scope more carefully than you read any technical documentation — breaking it ends careers. The four engagement types: black box (attacker has no prior knowledge), grey box (limited context, like a regular employee), white box (full documentation access), red team (objective-based, tests detection and response, not just technical flaws).",
          master: [
            "Explain the legal distinction between a penetration test, a red team engagement, and unauthorized access",
            "Draft a basic Rules of Engagement document covering scope, exclusions, timing, contacts, and allowed techniques",
            "Explain the penetration testing lifecycle: reconnaissance, scanning, exploitation, post-exploitation, reporting",
            "Understand responsible disclosure: the difference between coordinated disclosure, full disclosure, and sitting on a bug",
            "Read and interpret a real bug bounty program scope — identify what is in scope, what is out, and what requires explicit permission",
            "Understand what makes a penetration test report actually useful to a client (not a list of CVSS scores)"
          ],
          res: [
            "Penetration Testing (Georgia Weidman) — structured introduction, not a tool tutorial",
            "PTES Technical Guidelines (ptes.org) — the closest thing to an industry standard methodology",
            "OWASP Testing Guide — comprehensive web-specific methodology, free",
            "HackerOne Hacktivity — real disclosed reports, read these to understand what actual findings look like"
          ]
        },
        {
          name: "Building a Lab That Does Not Embarrass You",
          tag: "core",
          desc: "Never practice on systems you do not own. A proper home lab is not optional — it is the difference between theoretical knowledge and actual skill. VMware Workstation Pro or VirtualBox as your hypervisor. Kali Linux is the standard offensive distribution (600+ tools pre-installed); Parrot OS is lighter if memory is constrained. Network isolation is critical: host-only or internal network modes prevent your lab from touching anything real. Vulnerable-by-design targets: Metasploitable 2 and 3 for basic service exploitation, DVWA for web attacks, VulnHub for variety. Platforms for structured learning: TryHackMe for guided paths (excellent for beginners), HackTheBox for realistic machines with no hand-holding. Document everything obsessively — Obsidian or CherryTree for notes, screenshots of every step. If you cannot reproduce your own attack from your notes, the notes are not good enough.",
          master: [
            "Build a lab with Kali as attacker and at least two different target VMs — Windows and Linux",
            "Configure network isolation correctly so lab VMs cannot reach the internet or your home network",
            "Complete 20 TryHackMe rooms or 10 HackTheBox machines and document each one",
            "Understand VM network modes: NAT, bridged, host-only, and internal — when each is appropriate",
            "Set up Burp Suite Community Edition and intercept your first HTTP request",
            "Understand the MITRE ATT&CK framework well enough to map a technique to a tactic"
          ],
          res: [
            "TryHackMe (tryhackme.com) — best structured starting point, free tier is substantial",
            "HackTheBox (hackthebox.com) — harder, more realistic, use after TryHackMe",
            "VulnHub (vulnhub.com) — downloadable VMs, great for offline lab work",
            "MITRE ATT&CK (attack.mitre.org) — learn the taxonomy, you will use it constantly"
          ]
        },
        {
          name: "Linux: The Operating System Offensive Security Runs On",
          tag: "core",
          desc: "If you are not comfortable at the Linux command line, you are not ready for offensive security. This is not negotiable. The filesystem hierarchy, permissions (read/write/execute, SUID/SGID — SUID on a binary means it runs as its owner, not you; this is one of the most common privilege escalation vectors on Linux), process management, network tools (ss, netstat, ip route), and text processing pipelines are the daily tools of the trade. Bash scripting is not optional — you will automate reconnaissance, credential parsing, and repetitive tasks constantly. The /proc filesystem exposes kernel internals and running process memory. Netcat is not just a networking tool — it is a Swiss Army knife for reverse shells, bind shells, and file transfers. Learn grep with extended regex well enough to parse tool output into useful data.",
          master: [
            "Navigate the filesystem, manage permissions, and explain what SUID means for privilege escalation",
            "Write a bash script that runs nmap, extracts open ports, and feeds them to service-specific tools automatically",
            "Use grep with extended regex to extract IPs, emails, hashes, and credentials from raw log output",
            "Use netcat to establish a reverse shell, a bind shell, and transfer a file between two machines",
            "Explain what /proc/[pid]/maps and /proc/[pid]/mem contain and why they matter",
            "Understand Linux capabilities as an alternative to SUID — find binaries with dangerous capabilities using getcap"
          ],
          res: [
            "Linux Basics for Hackers (OccupyTheWeb) — targeted specifically at offensive use cases",
            "The Linux Command Line (William Shotts) — free online, thorough",
            "OverTheWire Bandit — wargame that teaches command line skills through challenges",
            "explainshell.com — paste any command and get a breakdown of every flag"
          ]
        }
      ]
    },
    {
      name: "Reconnaissance: Know Your Target",
      level: "foundation",
      tagline: "The more you know before you touch anything, the better your chances",
      desc: "Reconnaissance is the most underestimated phase of any engagement. Junior testers rush to exploitation. Senior testers spend days on reconnaissance and find the winning vector before running a single exploit. Split it into passive (no contact with the target, no alerts) and active (direct interaction, potentially logged). The goal is to map the entire attack surface — subdomains, technologies, employees, leaked credentials — before you decide what to attack.",
      topics: [
        {
          name: "OSINT and Passive Reconnaissance",
          tag: "core",
          desc: "OSINT (Open Source Intelligence) is everything you can learn from public sources. DNS: dig for A, AAAA, MX, TXT, NS records. Zone transfer (AXFR) still works on misconfigured nameservers — always try it. Subdomain enumeration: Amass, Subfinder, and Assetfinder against a target domain, then cross-verify with crt.sh (certificate transparency logs expose subdomains that never appeared in DNS). Shodan indexes internet-facing services by their banners — search for open ports, service versions, and exposed admin panels without touching the target. Google Dorking: site:, filetype:, inurl:, intitle: to find indexed admin panels, backup files, and sensitive documents. GitHub reconnaissance: organizations routinely leak API keys, credentials, and internal documentation in public repositories — use GitHub dorks and trufflehog. theHarvester for email enumeration. LinkedIn for organizational structure and employee names. The Wayback Machine for historical content that has been removed but not forgotten.",
          master: [
            "Enumerate all subdomains of a target using Amass, Subfinder, and crt.sh — cross-verify the results",
            "Find leaked API keys or credentials in a company's GitHub repositories using GitHub dorks",
            "Use Shodan to map all internet-facing assets of a target organization without contacting their servers",
            "Build a working Google dork to find admin panels, login pages, and indexed sensitive files for a target",
            "Build an organizational chart from LinkedIn and identify likely high-value targets for spear phishing",
            "Use the Wayback Machine to find subdomains or exposed content removed from current DNS"
          ],
          res: [
            "OSINT Techniques (Michael Bazzell) — the most comprehensive OSINT methodology guide",
            "Google Hacking Database (ghdb.exploit-db.com) — real working dorks, searchable",
            "Shodan Manual (shodan.io/manual) — read it, most people use a fraction of what Shodan can do",
            "trufflehog (github.com/trufflesecurity/trufflehog) — finds secrets in git history"
          ]
        },
        {
          name: "Active Scanning with Nmap",
          tag: "core",
          desc: "Nmap is not just a port scanner — it is the foundation of every network engagement. Know it deeply. Host discovery (-sn) before scanning to avoid wasting time on dead hosts. Port scanning: SYN scan (-sS) is the default and sends a SYN, records whether you get SYN-ACK (open) or RST (closed), and never completes the handshake — fast and less noisy than a full connect. TCP connect (-sT) completes the handshake — use it when you need full connections or lack raw socket privileges. UDP (-sU) is slow but critical: DNS, SNMP, NTP, and TFTP all run over UDP and are frequently forgotten. Version detection (-sV) fingerprints services by their banners. NSE scripts: the vuln category runs basic vulnerability checks, smb-vuln-ms17-010 checks for EternalBlue, http-enum brute-forces directories. Timing: -T4 for speed in lab, -T2 or -T1 for stealth in real engagements where IDS matters.",
          master: [
            "Run a comprehensive scan: all ports SYN scan, version detection, default NSE scripts, output to all formats",
            "UDP scan a target and find DNS, SNMP, and NTP — explain what you can do with each",
            "Run NSE vulnerability scripts against a Metasploitable target and interpret the output",
            "Explain what a SYN scan packet looks like at the wire level — what is sent, what each response means",
            "Use decoy scans (-D), fragmented packets, and slow timing to reduce IDS detection of a scan",
            "Use masscan for high-speed scanning of large ranges — understand why it complements rather than replaces Nmap"
          ],
          res: [
            "Nmap Network Scanning (Fyodor) — free at nmap.org/book, the authoritative reference",
            "Nmap NSE documentation (nmap.org/nsedoc) — read the scripts you use, not just the flags",
            "masscan (github.com/robertdavidgraham/masscan) — for large-scale reconnaissance",
            "Wireshark — capture your own scans and watch what they look like on the wire"
          ]
        },
        {
          name: "Web Application Reconnaissance",
          tag: "core",
          desc: "Web apps have their own reconnaissance layer. Technology fingerprinting: Wappalyzer identifies CMS, frameworks, and libraries from response headers and JavaScript patterns. Directory and file brute forcing: ffuf is the current standard — it is fast, flexible, and supports vhost enumeration. gobuster and dirsearch also work. The goal is not just finding /admin — it is finding backup files (.bak, .old, .zip), unlinked API endpoints, and forgotten development paths. WPScan for WordPress (enumerates users, vulnerable plugins, known CVEs with a built-in database). JavaScript analysis is underrated: every JavaScript file is potential source code. linkfinder extracts endpoints from JS. arjun discovers hidden GET and POST parameters that are not visible in the UI. Burp Suite's passive crawler captures everything you browse. Always check robots.txt, sitemap.xml, and /.well-known/ — developers leave things there.",
          master: [
            "Use ffuf to brute-force directories, files, virtual hosts, and parameter names against a target",
            "Extract all endpoints from every JavaScript file in a target application",
            "Use WPScan to enumerate WordPress users, installed plugins, and known CVEs",
            "Find undiscovered GET and POST parameters using arjun",
            "Map every input point, authentication mechanism, and user-controlled value in a web application manually",
            "Use crt.sh to find subdomains not in DNS and check whether they are still live"
          ],
          res: [
            "Web Application Hacker's Handbook (Stuttard and Pinto) — still the definitive methodology reference",
            "OWASP Web Security Testing Guide — free, exhaustive, download it",
            "PortSwigger Web Security Academy — free labs, better than most paid courses for web exploitation",
            "HackTricks (book.hacktricks.xyz) — every service has an enumeration section, practical and current"
          ]
        }
      ]
    },
    {
      name: "Web Application Exploitation",
      level: "intermediate",
      tagline: "Web apps are the most consistent attack surface you will ever encounter",
      desc: "Web application penetration testing is where most professional engagements happen. The OWASP Top 10 is a starting point, not a checklist. Real web testing is about finding the combination of small issues that chain into significant impact — a reflected parameter here, an IDOR there, an SSRF to internal metadata. Burp Suite Pro is your primary weapon. Learn it the way a surgeon learns their instruments.",
      topics: [
        {
          name: "Injection: SQL, Command, Template, and XXE",
          tag: "core",
          desc: "Injection vulnerabilities happen when user-controlled data is interpreted as code or commands instead of data. SQL injection is the oldest and most impactful: user input embedded in a SQL query modifies the query's logic. In-band extraction: error-based (database errors leak data) and union-based (append a SELECT to extract from any table). Blind: boolean-based (true/false page differences reveal data bit by bit) and time-based (SLEEP() or WAITFOR confirm conditions via response delay). sqlmap automates this — know what it is doing under the hood, not just the flags. Command injection: user input passed to shell execution (system(), exec(), shell_exec()) — test with ; whoami, && id, | uname -a. XXE (XML External Entity): XML parsers that process external entity declarations can read local files or make server-side requests. SSTI (Server-Side Template Injection): input rendered by Jinja2, Twig, or Freemarker can reach the template engine's execution context and achieve RCE — in Jinja2, the path from user input to subprocess.Popen is three class traversal steps.",
          master: [
            "Manually identify and exploit union-based SQL injection to extract the full database schema without sqlmap",
            "Perform blind time-based SQL injection to extract a password hash with no visible output",
            "Use sqlmap appropriately — know when to use --level, --risk, --technique, and --tamper",
            "Identify command injection manually and explain which characters break different shell contexts",
            "Exploit XXE to read /etc/passwd, then pivot to SSRF to reach internal services",
            "Exploit SSTI in Jinja2 to achieve OS command execution — understand the class traversal path",
            "Bypass a WAF protecting a SQL injection endpoint using comment obfuscation and encoding"
          ],
          deepdive: "SSTI is one of the most underappreciated vulnerabilities in modern web apps. Developers use templating engines to render dynamic content, and when user input gets passed directly into the template rather than as data, you have access to the template's execution context. In Jinja2, that context includes Python's entire class hierarchy. The traversal: ''.__class__.__mro__[1].__subclasses__() gives you every class loaded in the Python process. Find subprocess.Popen in that list and you have arbitrary command execution. The distance from a reflected {{7*7}} to a root shell is often three lines of Python.",
          res: [
            "PortSwigger Web Security Academy — SQL injection and SSTI labs are the best free practice environment",
            "PayloadsAllTheThings (github.com/swisskyrepo/PayloadsAllTheThings) — comprehensive payload lists for every injection type",
            "sqlmap documentation (sqlmap.org) — read it before you use it",
            "HackTricks SSTI section — covers every major template engine with working payloads"
          ]
        },
        {
          name: "Authentication and Session Attacks",
          tag: "core",
          desc: "Authentication is consistently the most broken security control. Default credentials (admin:admin, admin:password, admin:admin123) still work more often than they should — always check. Username enumeration: applications frequently return different error messages or response times for valid vs invalid usernames — this turns a credential stuffing attack from guessing into confirmation. JWT attacks: the algorithm confusion attack changes RS256 to HS256 and signs with the public key as the HMAC secret — this works because some libraries trust the algorithm field in the header rather than enforcing server-side. The 'none' algorithm bypass is rarer now but still appears. Weak JWT secrets crack in seconds on a GPU with hashcat mode 16500. Password reset flows: host header injection inserts an attacker-controlled domain into reset emails, token prediction exploits low-entropy generators, and lack of expiry lets tokens work indefinitely. OAuth: redirect_uri validation flaws and state parameter CSRF are the most common issues.",
          master: [
            "Identify username enumeration from timing differences alone (not just different error messages)",
            "Exploit JWT algorithm confusion by switching RS256 to HS256 and signing with the public key",
            "Find and exploit host header injection in a password reset flow",
            "Crack a weak JWT HMAC secret using hashcat mode 16500 with rockyou.txt",
            "Exploit an OAuth redirect_uri bypass to steal an authorization code",
            "Bypass rate limiting on a login form using IP rotation headers (X-Forwarded-For manipulation)",
            "Identify and exploit session fixation — set a known session ID before the victim authenticates"
          ],
          res: [
            "PortSwigger Web Security Academy — authentication and OAuth labs, do all of them",
            "JWT Attacks (PortSwigger research blog) — the algorithm confusion research paper is required reading",
            "jwt.io — for debugging and understanding JWT structure",
            "OAuth 2.0 Security Best Current Practice (RFC) — understanding what the spec says helps you find where implementations deviate"
          ]
        },
        {
          name: "XSS, SSRF, CSRF, and Broken Access Control",
          tag: "advanced",
          desc: "Cross-Site Scripting (XSS) is categorically underestimated. It is not just popping alert boxes — stored XSS in an admin panel is account takeover for every admin that views the page. Reflected, stored, and DOM-based (the source-sink model: user input flows from a dangerous source to a dangerous sink in JavaScript without sanitization). BeEF (Browser Exploitation Framework) for post-XSS browser control. Content Security Policy bypasses: JSONP callbacks on whitelisted domains, dangling markup, script gadgets in legitimate libraries. SSRF forces the server to make requests on your behalf — the primary target is the cloud metadata service at 169.254.169.254 (IMDSv1 gives IAM credentials with a single request). SSRF filter bypasses: 0177.0.0.1 (octal), 0x7f000001 (hex), @attacker.com (URL parsing confusion). IDOR is simple and wildly common — replace a numeric ID or GUID in any request and see if you get someone else's data. Broken access control is the OWASP #1 category for a reason: it rarely generates an error, just shows you data you should not have.",
          master: [
            "Exploit stored XSS in an admin context to steal a session cookie and demonstrate full account takeover",
            "Bypass a Content Security Policy using a whitelisted JSONP endpoint or a script gadget",
            "Use SSRF to reach the AWS EC2 IMDSv1 metadata service and extract IAM role credentials",
            "Bypass SSRF protections using octal (0177.0.0.1), hex (0x7f000001), and URL parser confusion",
            "Craft a CSRF proof-of-concept that changes a victim's email address with one click",
            "Find IDOR vulnerabilities by systematically replacing every ID, GUID, and reference in intercepted requests",
            "Demonstrate horizontal and vertical privilege escalation via broken access control — same endpoint, different role"
          ],
          res: [
            "PortSwigger Web Security Academy — XSS, SSRF, CSRF, and access control labs are among the best available",
            "OWASP Top 10 (owasp.org/Top10) — read the full descriptions, not just the names",
            "XSS Hunter (xsshunter.trufflesecurity.com) — for blind XSS in contexts you cannot directly observe",
            "HackTricks SSRF section — practical bypass techniques with explanations"
          ]
        }
      ]
    },
    {
      name: "Network Penetration Testing",
      level: "intermediate",
      tagline: "Internal networks are not secured the way people assume",
      desc: "Most internal networks were built to work, not to be secure. After you get initial access — whether through a phishing email, a vulnerable web app, or a VPN credential — you are looking at a flat network full of services with default credentials, unpatched CVEs, and broadcast protocols that were never designed to be used in adversarial environments. LLMNR/NBT-NS poisoning still works in most corporate environments in 2025. That should tell you everything about the state of internal network security.",
      topics: [
        {
          name: "Service Enumeration and Exploitation",
          tag: "core",
          desc: "Every open port is a potential entry point. Methodical enumeration of each service before attempting exploitation is not optional — guessing wastes time and makes noise. SMB (port 445) is the most consistently productive service on internal Windows networks: check for EternalBlue (MS17-010) with Nmap's smb-vuln-ms17-010 script — it is still unpatched on a shocking number of internal hosts. Enumerate shares with smbclient and smbmap without credentials first. FTP: anonymous login, look for writable directories. SSH: check version against known CVEs, try default credentials. RDP (3389): BlueKeep (CVE-2019-0708) on unpatched Windows 7/2008. SNMP with the default community string 'public' still returns full device configurations in many environments. MySQL, PostgreSQL, and MSSQL with default or blank credentials. For each service: look up the version, check CVEs, try defaults, then look for configuration vulnerabilities before trying exploits.",
          master: [
            "Enumerate SMB shares with smbclient and smbmap without credentials and explain what each permission level gives you",
            "Check for MS17-010 with Nmap and explain the EternalBlue exploit mechanism without just running it",
            "Enumerate SNMP v1/v2c with default community strings and extract useful configuration data",
            "Connect to an exposed database service with default credentials and extract the user table",
            "Use Metasploit intelligently — understand what a module, payload, stager, and encoder each do",
            "Enumerate SMTP users with VRFY and EXPN commands",
            "Explain why NFS with no_root_squash is a critical misconfiguration"
          ],
          res: [
            "HackTricks (book.hacktricks.xyz) — every service has its own page with enumeration and exploitation steps",
            "HackTheBox retired machine writeups — read 20 of them, the patterns repeat",
            "Metasploit Unleashed (offensive-security.com/metasploit-unleashed) — free, the original Metasploit reference",
            "SANS penetration testing cheat sheets — concise references for common services"
          ]
        },
        {
          name: "Internal Network Attacks: Responder and NTLM Relay",
          tag: "advanced",
          desc: "LLMNR (Link-Local Multicast Name Resolution) and NBT-NS (NetBIOS Name Service) are Windows broadcast protocols used when DNS fails to resolve a hostname. They broadcast the query to the entire local subnet. Responder (by Laurent Gaffie) answers these broadcasts, claiming to be whatever hostname is requested, and Windows automatically attempts NTLM authentication to the attacker — sending an NTLMv2 challenge-response hash. These hashes crack offline with hashcat. Even better: ntlmrelayx (from impacket) relays the authentication to another host in real time without cracking — if the user whose credentials you captured is an admin on another machine, you get code execution immediately. This entire attack chain runs passively. You just run Responder, wait, and collect credentials. It works in the majority of unaudited internal networks.",
          master: [
            "Run Responder on an internal network segment and capture NTLMv2 hashes",
            "Crack captured NTLMv2 hashes with hashcat mode 5600 using rockyou.txt",
            "Set up ntlmrelayx to relay captured credentials to another host in real time",
            "Perform ARP spoofing with Bettercap and capture plaintext HTTP credentials",
            "Understand HSTS and why SSL stripping fails against properly configured sites",
            "Understand mDNS and WPAD abuse in internal network MITM scenarios",
            "Explain the difference between capturing and relaying NTLM credentials — when each is more useful"
          ],
          res: [
            "Responder wiki (github.com/lgandx/Responder) — read the source if you want to understand what it does",
            "impacket (github.com/fortra/impacket) — ntlmrelayx is in the examples directory",
            "Bettercap documentation (bettercap.org) — the modern replacement for ettercap",
            "Practical Ethical Hacking (TCM Security) — excellent coverage of internal network attacks"
          ]
        },
        {
          name: "Active Directory: Where Engagements Are Won or Lost",
          tag: "advanced",
          desc: "Active Directory is the authentication and authorization backbone of virtually every Windows enterprise. Compromise the domain and you have compromised the organization. Understanding the Kerberos authentication flow is mandatory — not the RFC, but what a TGT and TGS actually are, what the KRBTGT account is, and why its hash is the most valuable credential in any domain. Kerberoasting: any authenticated user can request a TGS ticket for any service account SPN. The ticket is encrypted with the service account's password hash (RC4 by default). You take the ticket offline and crack it — service accounts routinely have weak passwords and the organization has no idea. AS-REP Roasting: accounts with Kerberos pre-authentication disabled (not uncommon in large organizations) send an AS-REP that is encrypted with the user's password hash — crackable offline without any credentials at all. BloodHound (graphing AD relationships using SharpHound data) changes how you think about AD attacks — it shows you paths to Domain Admin that you would never find manually.",
          master: [
            "Enumerate AD users, groups, SPNs, computers, and ACLs using BloodHound and SharpHound",
            "Perform Kerberoasting: request service tickets, extract them, and crack them with hashcat mode 13100",
            "Execute AS-REP Roasting against accounts with pre-auth disabled using impacket's GetNPUsers.py",
            "Perform Pass-the-Hash to authenticate as a user using only their NTLM hash",
            "Identify attack paths to Domain Admin in BloodHound and explain each relationship in the chain",
            "Execute DCSync with secretsdump.py to replicate all domain credentials remotely",
            "Explain the Golden Ticket attack — what the KRBTGT hash enables and why it is the ultimate persistence mechanism"
          ],
          deepdive: "BloodHound changed Active Directory penetration testing permanently. Before it, finding attack paths required manually tracing ACLs and group memberships across thousands of objects. BloodHound ingests SharpHound collector data and builds a graph database where the question 'how do I get from this compromised account to Domain Admin?' becomes a shortest-path query. The paths it reveals are genuinely non-obvious: GenericWrite on a group lets you add yourself; the group has WriteDACL on a user; you grant yourself GenericAll on that user; reset their password; they are local admin on a workstation; dump LSASS; get another user's hash; repeat. No single step is impressive. The chain is devastating.",
          res: [
            "The Hacker Recipes (thehacker.recipes) — free, the most comprehensive AD attack reference currently available",
            "BloodHound documentation (bloodhound.readthedocs.io) — understand what the edges mean before you follow them",
            "impacket examples (github.com/fortra/impacket/tree/master/examples) — every AD attack has an impacket script",
            "Attacking and Defending Active Directory (Nikhil Mittal) — the best structured course on the topic"
          ]
        }
      ]
    },
    {
      name: "Post-Exploitation",
      level: "advanced",
      tagline: "Getting in is the easy part — staying in and moving is the skill",
      desc: "Initial access is a milestone, not a victory. What you do after changes everything. Post-exploitation is where the real work happens: escalating privileges to administrator or root, establishing persistence that survives reboots, moving laterally to higher-value targets, and exfiltrating what the engagement was actually about. Most defenders build their detection around initial access. The attacker who moves quietly through an already-compromised network evades most of it.",
      topics: [
        {
          name: "Privilege Escalation: Linux and Windows",
          tag: "core",
          desc: "Privilege escalation converts a foothold (low-privileged shell, service account) into something useful. Linux: SUID binaries where the binary is owned by root and runs as root — GTFOBins documents every binary that can be abused. Sudo misconfigurations: sudo -l shows what you can run; (ALL) NOPASSWD means you can run it as root without a password; env_keep LD_PRELOAD lets you inject a shared library that runs before the target binary. Cron jobs running scripts in world-writable directories. Kernel exploits (Dirty Pipe, Dirty COW) when nothing else works. Windows: unquoted service paths (a service binary path with spaces and no quotes lets you place a binary at any ambiguous path location), weak service binary ACLs, AlwaysInstallElevated registry key (MSI files always install as SYSTEM), token impersonation via SeImpersonatePrivilege (PrintSpoofer, RoguePotato, GodPotato depending on Windows version). Run LinPEAS/WinPEAS first but understand why it flags what it flags — tools that enumerate faster than you understand them get you nowhere.",
          master: [
            "Enumerate Linux privilege escalation vectors with LinPEAS and manually verify each finding before trying to exploit it",
            "Exploit a SUID binary using the GTFOBins methodology — know three different binaries by heart",
            "Exploit a sudo misconfiguration: NOPASSWD, env_keep LD_PRELOAD, and wildcard injection",
            "Enumerate Windows privilege escalation vectors with WinPEAS and explain each finding",
            "Exploit SeImpersonatePrivilege with the appropriate Potato exploit for the target Windows version",
            "Find and exploit an unquoted service path manually — without relying on WinPEAS to tell you it exists",
            "Explain token impersonation — what a token is, what impersonation means at the Windows internals level"
          ],
          res: [
            "GTFOBins (gtfobins.github.io) — the authoritative reference for Unix binary abuse",
            "LOLBAS (lolbas-project.github.io) — the Windows equivalent for living-off-the-land techniques",
            "LinPEAS and WinPEAS (github.com/carlospolop/PEASS-ng) — run them, then read the source to understand what they check",
            "PayloadsAllTheThings privesc sections — covers both Linux and Windows with working examples"
          ]
        },
        {
          name: "Persistence and Lateral Movement",
          tag: "advanced",
          desc: "Persistence is establishing a mechanism that survives reboots and credential rotations. Linux persistence: cron jobs, systemd services, SSH authorized_keys injection, PAM backdoors, .bashrc modification. Windows persistence: registry Run keys (HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run), scheduled tasks, WMI event subscriptions (persistent, fires on specific events, extremely difficult to detect, survives indefinitely). Lateral movement is expanding your foothold. Windows: PsExec-style execution over SMB pipe, WMI remote execution, PowerShell remoting (WinRM on port 5985/5986), Pass-the-Hash via impacket's wmiexec or psexec, DCOM lateral movement. Credentials are the primary enabler of lateral movement — every compromised system should be mined immediately. Windows: LSASS (Mimikatz or Mimikatz-compatible dumpers), DPAPI credential vaults, browser saved passwords. Linux: bash history, SSH private keys, configuration files, credential reuse.",
          master: [
            "Establish persistence on a Linux system using a systemd service that survives reboots",
            "Create a WMI event subscription for Windows persistence and explain why it evades most endpoint tools",
            "Move laterally using impacket wmiexec and psexec over captured credentials",
            "Extract credentials from LSASS and explain why the sekurlsa::logonpasswords output contains what it does",
            "Establish a persistence mechanism that a blue team analyst would not find with a simple autoruns scan",
            "Map lateral movement paths across a compromised network using BloodHound",
            "Explain why credential reuse is so effective in most enterprise environments"
          ],
          res: [
            "Mimikatz (github.com/gentilkiwi/mimikatz) — read the wiki to understand what each command does at the Windows internals level",
            "MITRE ATT&CK Persistence (TA0003) and Lateral Movement (TA0008) — map what you do to the framework",
            "impacket (github.com/fortra/impacket) — the most complete collection of AD/Windows attack tools",
            "Offensive Security's Metasploit Unleashed — free, post-exploitation modules covered in detail"
          ]
        },
        {
          name: "Credential Attacks and Password Cracking",
          tag: "advanced",
          desc: "Passwords are still the primary authentication mechanism in most environments and they are routinely terrible. Hash types matter for cracking speed: LM hashes (legacy Windows, split at 7 characters, trivially broken), NTHash/NTLM (Windows, extremely fast on GPU — billions per second), NTLMv2 (challenge-response captured with Responder, hashcat mode 5600), Kerberos TGS (Kerberoasting, mode 13100), bcrypt/scrypt/Argon2 (designed to be slow, counts in thousands per second even on GPU — focus elsewhere). Hashcat attack modes: wordlist (straight, mode 0), rule-based (mode 0 with -r, most effective for real-world passwords — the best-64.rule or OneRuleToRuleThemAll), combinator (two wordlists), mask (brute force with specified character sets, good when you know the password policy). Password spraying: try one common password against all users to avoid lockout — usernamepassword, Season+Year, CompanyName+123 patterns hit more often than they should.",
          master: [
            "Crack MD5, NTHash, NTLMv2, and Kerberos TGS hashes with the correct hashcat mode for each",
            "Use rule-based attacks to crack complex passwords — understand what the best-64.rule is doing to each candidate",
            "Perform password spraying against an organization's authentication endpoint without triggering lockout",
            "Explain rainbow table attacks and why salted hashes defeat them",
            "Extract the full password from a given NTLMv2 capture file using hashcat",
            "Identify the password policy from a set of cracked passwords and use it to optimize future cracking"
          ],
          res: [
            "Hashcat documentation (hashcat.net/wiki) — especially the example hashes page for identifying hash types",
            "OneRuleToRuleThemAll (github.com/NotSoSecure/password_cracking_rules) — real-world rule set",
            "Weakpass wordlists (weakpass.com) — larger, curated wordlists beyond rockyou",
            "Have I Been Pwned (haveibeenpwned.com) — understand what breach data looks like and where it comes from"
          ]
        }
      ]
    },
    {
      name: "Red Teaming and Adversary Simulation",
      level: "advanced",
      tagline: "Not finding vulnerabilities — testing whether defenders can stop you",
      desc: "A penetration test finds vulnerabilities. A red team engagement tests whether the organization's detection, response, and containment capabilities can stop a real attack chain. The deliverable is not a list of CVEs — it is an honest assessment of how far a real adversary would get. The rules are different: you are not trying to find every issue, you are trying to achieve a specific objective (domain admin, data exfiltration, financial fraud) while measuring how the blue team responds.",
      topics: [
        {
          name: "Command and Control (C2) Frameworks",
          tag: "advanced",
          desc: "C2 frameworks manage compromised hosts and give operators a consistent interface to issue tasks. Cobalt Strike is the commercial industry standard — most real APT groups have used it, which is both a testament to its capabilities and a reason why EDR vendors have extensive Cobalt Strike detection logic. Sliver (BishopFox, open source) is the current best free alternative. Havoc is another modern option. C2 concepts you must understand: listeners (wait for callbacks on specific protocols — HTTP, HTTPS, DNS, SMB), beacons (the agent running on the victim — callback-based, sleeps between tasks), sleep jitter (randomizing sleep intervals to avoid beacon fingerprinting), malleable C2 profiles (customize traffic to look like legitimate services — Teams, SharePoint, whatever the target organization uses). Infrastructure: redirectors (nginx or Apache on a cheap VPS that forwards traffic to your actual team server, hiding its IP) are mandatory for any real engagement. The moment you expose your team server directly, it gets burned.",
          master: [
            "Set up a Sliver C2 server and generate implants over HTTP, HTTPS, and DNS protocols",
            "Configure an nginx redirector to forward C2 traffic and hide your team server IP",
            "Understand Cobalt Strike's malleable C2 profile concept — what it controls and why it matters for evasion",
            "Explain the operational security differences between staged and stageless payloads",
            "Build a C2 domain with aged registration, WHOIS privacy, and a clean reputation score",
            "Map your C2 activity to MITRE ATT&CK and identify which techniques you lack detection for",
            "Understand beacon sleep masks and why anti-sandbox delays are operationally necessary"
          ],
          res: [
            "Sliver documentation (github.com/BishopFox/sliver/wiki) — actively maintained, good starting point",
            "C2 Matrix (thec2matrix.com) — compares every C2 framework across multiple dimensions",
            "Red Team Development and Operations (Joe Vest) — free ebook, operational methodology not just technical",
            "Cobalt Strike documentation — read it even without a license, the concepts transfer to every C2"
          ]
        },
        {
          name: "Phishing and Social Engineering",
          tag: "advanced",
          desc: "Phishing is the #1 initial access vector in real breaches. Not because defenders are incompetent — because a well-crafted phishing email defeats technical controls entirely. Spear phishing: OSINT-informed targeting where you reference real projects, real colleagues, actual vendors, and current events. Generic phishing is detected by trained employees. Personalized phishing from an 'email address' they recognize, about a real project they are on, with no spelling errors, passes human review more often than it should. GoPhish for campaign infrastructure. Lookalike domains: typosquatting, homograph attacks (Unicode characters that look identical to ASCII). Evilginx2 for adversary-in-the-middle phishing: it proxies the legitimate site in real time, captures the session cookie after MFA, and gives you authenticated access without needing the password or second factor. Browser-in-the-Middle bypasses MFA entirely. Weaponized payloads: LNK files, ISO containers, Office macros (increasingly flagged), HTA files. The goal is initial access — everything else follows.",
          master: [
            "Run a GoPhish campaign with a cloned login page, analyze the click and credential submission rates",
            "Configure Evilginx2 to proxy a real login page and capture session cookies post-MFA",
            "Build a spear phishing email using OSINT — reference real context the target would recognize",
            "Create a malicious LNK file that triggers a C2 callback when double-clicked",
            "Evaluate a target's email security posture by checking DMARC, DKIM, and SPF records",
            "Explain the psychological mechanisms behind effective social engineering: authority, urgency, and social proof",
            "Conduct a pretexting vishing call with authorization and document the information extracted"
          ],
          res: [
            "Social Engineering: The Science of Human Hacking (Christopher Hadnagy) — the foundational text",
            "Evilginx2 (github.com/kgretzky/evilginx2) — read the phishlet format to understand what it is doing",
            "GoPhish documentation (getgophish.com) — straightforward, well-documented campaign platform",
            "SANS SEC504 — covers phishing in the context of full engagement methodology"
          ]
        },
        {
          name: "Evasion: AV, EDR, and AMSI Bypass",
          tag: "expert",
          desc: "Modern endpoint detection (EDR) is not signature-based AV from 2005 — it hooks Windows API calls, monitors process behavior, scans memory, and runs ML models against telemetry. Standard offensive tools are detected immediately. Evasion operates on multiple levels: signature evasion (encoding, encrypting, or obfuscating shellcode so static scanners miss it), behavioral evasion (avoiding patterns that trigger behavioral rules — don't inject into lsass.exe, don't spawn powershell.exe as a child of Word), and memory evasion (unhooking NTDLL API calls that EDR instruments, using direct syscalls to bypass hooks entirely). AMSI (Antimalware Scan Interface): PowerShell submits script content to AMSI before execution — patching amsi.dll in memory (overwriting AmsiScanBuffer to always return AMSI_RESULT_CLEAN) bypasses this. ETW (Event Tracing for Windows) patching removes visibility from the logging layer. Process injection: classic DLL injection, process hollowing (overwrite a suspended legitimate process with shellcode), APC injection, thread hijacking. LOLBins: mshta, rundll32, regsvr32, certutil, msiexec execute attacker code without dropping a suspicious binary.",
          master: [
            "Bypass AMSI by patching AmsiScanBuffer in memory — verify with an AMSI test string",
            "Generate an XOR-encrypted shellcode loader that evades static AV signature detection",
            "Explain the difference between NTAPI calls and direct syscalls at the Windows internals level",
            "Inject shellcode into a remote process using process hollowing",
            "Use LOLBins (mshta, rundll32, regsvr32) to execute payloads without dropping a suspicious file",
            "Unhook NTDLL by restoring the original syscall stubs from a fresh copy of the DLL",
            "Explain what an EDR vendor sees when you run Mimikatz without any evasion"
          ],
          res: [
            "Sektor7 Malware Development courses — the best practical evasion training available",
            "S3cur3th1ssh1t blog (github.com/S3cur3Th1sSh1t) — AMSI bypass and evasion techniques",
            "Windows Internals (Russinovich) — evasion requires understanding what you are evading",
            "VX-Underground (vx-underground.org) — malware samples and papers for research"
          ]
        }
      ]
    },
    {
      name: "Binary Exploitation",
      level: "expert",
      tagline: "The deepest technical layer — converting memory corruption into controlled execution",
      desc: "Binary exploitation requires understanding how programs manage memory at the assembly level and finding ways to redirect execution when those assumptions break down. This is the most technically demanding area in offensive security. You are working directly with CPU registers, stack frames, and memory layouts. The payoff is understanding attacks at a level where almost nobody else operates.",
      topics: [
        {
          name: "Assembly, Debugging, and Reverse Engineering",
          tag: "advanced",
          desc: "You cannot exploit binaries without reading assembly. x86-64: general-purpose registers (RAX, RBX, RCX, RDX, RSI, RDI, RSP, RBP, R8-R15), instruction pointer (RIP), flags (CF, ZF, SF, OF). Stack grows downward — RSP points to the top, PUSH decrements and writes, POP reads and increments. Linux calling convention (System V AMD64 ABI): first six integer arguments in RDI, RSI, RDX, RCX, R8, R9; return value in RAX; caller saves RSP alignment to 16 bytes. Understanding function prologues (push rbp; mov rbp, rsp; sub rsp, N) and epilogues (leave; ret) is the foundation of every stack exploit. GDB with pwndbg or GEF for dynamic analysis. Ghidra (NSA, free) and IDA Free for static analysis and decompilation. pwntools for scripting exploits in Python — the sendline/recv model makes interaction with remote binaries clean.",
          master: [
            "Read x86-64 assembly and identify function prologues, loops, conditionals, and system calls without help",
            "Set up GDB with pwndbg and use it to inspect registers, stack frames, and heap allocations during execution",
            "Use Ghidra to decompile a stripped binary and reconstruct the C-equivalent logic",
            "Trace a function call and return at the assembly level — follow the stack pointer through push, call, and ret",
            "Identify a buffer overflow by reading disassembly — no source code",
            "Write a pwntools script that interacts with a remote service, sends a payload, and receives a shell"
          ],
          res: [
            "Computer Systems: A Programmer's Perspective (Bryant and O'Hallaron) — CSAPP, the foundational text",
            "pwndbg (github.com/pwndbg/pwndbg) — better than stock GDB for exploitation work",
            "Ghidra (ghidra-sre.org) — free NSA reverse engineering tool, comparable to commercial alternatives",
            "LiveOverflow YouTube — Binary Exploitation series, visual explanations that make the mental model clear"
          ]
        },
        {
          name: "Stack Overflows and Memory Corruption",
          tag: "advanced",
          desc: "The classic attack: a local buffer on the stack has no bounds checking. Writing more data than the buffer holds overwrites adjacent stack memory. The critical target is the saved return address (stored above the local variables and saved frame pointer). By overwriting RIP with an attacker-controlled value, execution redirects to whatever you choose. Without protections: find the offset using cyclic patterns (pwntools cyclic), place shellcode in the buffer, NOP-sled for reliability, overwrite return address with buffer address. Modern protections change the approach: stack canary (random value between local variables and saved return address — checked before function returns; requires an information leak to bypass), ASLR (randomizes stack, heap, and library base addresses — requires a leak of a valid address to defeat), NX/DEP (stack marked non-executable — shellcode on the stack does not execute; pivot to ROP). Each protection requires a specific bypass technique — understanding why each protection works is mandatory for understanding how to defeat it.",
          master: [
            "Exploit a stack buffer overflow with all protections disabled — explain every step at the assembly level",
            "Use pwntools cyclic pattern to find the exact offset to the return address",
            "Explain stack canaries: the exact value, where it is placed, how the check works, and what you need to bypass it",
            "Explain ASLR: which memory regions are randomized, which are typically not, and what entropy level means in practice",
            "Exploit a buffer overflow on a non-PIE binary using ret2plt to leak libc and ret2libc for the shell",
            "Demonstrate that exploiting with ASLR enabled requires a runtime leak of a valid address",
            "Explain the difference between 32-bit and 64-bit exploitation — calling convention changes everything"
          ],
          res: [
            "Smashing The Stack For Fun And Profit (Aleph One, Phrack 1996) — read it for historical context and because it is excellent",
            "Modern Binary Exploitation (CSCI 4968, RPI) — free course material at github.com/RPISEC/MBE",
            "pwntools documentation (docs.pwntools.com) — the standard toolkit for CTF and real exploit development",
            "ROPemporium (ropemporium.com) — after understanding overflows, this teaches ROP systematically"
          ]
        },
        {
          name: "Return-Oriented Programming (ROP)",
          tag: "expert",
          desc: "NX/DEP makes the stack non-executable — shellcode on the stack does not run. Return-Oriented Programming chains small existing code sequences — each ending in a RET instruction — to perform arbitrary computation using the program's own code. A gadget is typically 1-5 instructions followed by RET. Because you control the stack (via overflow), you control which gadget executes next — each RET loads the next gadget address from the stack. Building a chain: find gadgets with ROPgadget or ropper, identify pop register; ret gadgets for loading values into registers, construct a call to system('/bin/sh') by controlling the argument registers. ASLR defeats hardcoded libc addresses — you need a memory leak first to calculate the current libc base. One-gadget provides a single gadget in libc that calls execve('/bin/sh') under specific register constraints — often the most elegant solution when conditions are right.",
          master: [
            "Find ROP gadgets in a binary using ROPgadget — identify pop rdi; ret, pop rsi; ret, and ret gadgets",
            "Build a ROP chain that calls system('/bin/sh') on a 64-bit binary with NX enabled",
            "Leak a libc function address using a ret2plt technique to defeat ASLR",
            "Calculate the libc base from a leaked address and build a second-stage chain to system()",
            "Use one_gadget to find single-gadget execve() calls and verify the register state constraints",
            "Build the entire chain in pwntools using the ROP module and automated gadget finding"
          ],
          res: [
            "ROPemporium (ropemporium.com) — dedicated ROP training, 8 challenges of increasing difficulty",
            "ROPgadget (github.com/JonathanSalwan/ROPgadget) — the standard gadget finder",
            "ir0nstone pwn notes (github.com/ir0nstone/pwn-notes) — free, systematic, excellent",
            "one_gadget (github.com/david942j/one_gadget) — finds single-gadget RCE in libc"
          ]
        }
      ]
    },
    {
      name: "Cloud and Infrastructure Attacks",
      level: "expert",
      tagline: "Cloud misconfigurations are causing the biggest breaches happening right now",
      desc: "Organizations migrated to cloud infrastructure faster than they understood the security model. The result: misconfigured IAM roles with excessive permissions, S3 buckets open to the public, SSRF vulnerabilities that reach the metadata service and return production credentials. Container and Kubernetes deployments inherit the same pattern — deployed for functionality, secured as an afterthought. These are not theoretical attacks. They are the cause of the largest data breaches of the last five years.",
      topics: [
        {
          name: "AWS Attack Techniques",
          tag: "advanced",
          desc: "AWS is the dominant cloud platform and full of misconfiguration opportunities. The Instance Metadata Service (IMDS) at 169.254.169.254 is the most important target for initial credential access — any SSRF vulnerability that can reach this internal address returns the IAM role credentials attached to the EC2 instance. IMDSv1 returns credentials with a single GET request. IMDSv2 requires a PUT to get a session token first (some SSRF bypasses still work). S3: public read exposes data, public write enables overwriting content and hosting malware. IAM privilege escalation: the iam:PassRole permission lets you attach an overpermissioned role to a Lambda function you control, then invoke it as that role. iam:CreateAccessKey on another user creates persistent credentials. Pacu (RhinoSecurityLabs) is the AWS exploitation framework. Prowler and CloudSploit for misconfiguration assessment. CloudTrail does not log everything — data plane operations (S3 GetObject) require separate data event logging that most organizations do not enable.",
          master: [
            "Use SSRF to reach the EC2 IMDS and extract IAM role credentials — demonstrate IMDSv1 vs IMDSv2",
            "Enumerate AWS resources using stolen credentials with Pacu",
            "Find public S3 buckets and determine what data is exposed",
            "Identify IAM privilege escalation paths using Pacu's iam_privesc_scan module",
            "Explain the PassRole permission and how it enables privilege escalation via Lambda",
            "Assess an AWS account for misconfigurations with Prowler and interpret the output",
            "Explain what CloudTrail logs by default and what requires additional configuration"
          ],
          res: [
            "Hacking the Cloud (hackingthe.cloud) — free, current AWS attack techniques with practical examples",
            "Pacu (github.com/RhinoSecurityLabs/pacu) — AWS exploitation framework, actively maintained",
            "Cloud Security Alliance guidance — understand the shared responsibility model first",
            "CloudGoat (github.com/RhinoSecurityLabs/cloudgoat) — vulnerable AWS environment for practice"
          ]
        },
        {
          name: "Container and Kubernetes Exploitation",
          tag: "expert",
          desc: "Docker and Kubernetes are everywhere and routinely misconfigured. Docker escapes: privileged containers have access to host devices — mount the host filesystem and write authorized_keys to /root/.ssh or add a cron job. Docker socket mounted inside a container gives you full daemon access, which is root on the host. Kernel exploits from within a container when namespace isolation is the only barrier. Kubernetes: the service account token is automounted at /var/run/secrets/kubernetes.io/serviceaccount/token in every pod by default. If the RBAC permissions are excessive (which they often are), that token can list secrets across namespaces, create privileged pods, or exec into other pods. etcd exposure (often on port 2379 without TLS) stores all cluster secrets in plaintext. Kubelet API on port 10250 often allows exec into pods without kubectl. The pattern in Kubernetes is the same as Active Directory: a chain of small permission issues that individually look benign but together reach cluster-admin.",
          master: [
            "Escape a privileged container by mounting the host filesystem and establishing persistence",
            "Exploit a mounted Docker socket to run a privileged container and escape to the host",
            "Examine the default service account token in a Kubernetes pod and determine what permissions it has",
            "Use a misconfigured service account to list secrets across namespaces",
            "Identify kubelet API exposure and exec into a pod without kubectl",
            "Use kube-hunter to scan a Kubernetes cluster and interpret the findings",
            "Explain how compromising a worker node enables stealing other pods' service account tokens"
          ],
          res: [
            "Container Security (Liz Rice, O'Reilly) — practical and current",
            "KubeCon security talks (youtube.com) — the most current research on Kubernetes attack and defense",
            "kube-hunter (github.com/aquasecurity/kube-hunter) — Kubernetes cluster penetration testing",
            "CNCF Security Whitepaper — free, explains the security model before you try to break it"
          ]
        },
        {
          name: "CI/CD Pipeline Attacks",
          tag: "expert",
          desc: "CI/CD pipelines have become one of the most valuable attack targets in modern infrastructure. They have access to production deployment credentials, signing keys, cloud provider credentials, and the source code itself. GitHub Actions: workflow injection via untrusted input (pull request titles, issue body, commit messages that end up in ${{ github.event.* }} contexts) can execute arbitrary code in the pipeline. OIDC token theft from pipeline logs. Artifact poisoning: replace a build artifact in the pipeline with a backdoored version. Jenkins: Groovy script console without authentication is RCE. Unauthenticated build triggers. Jenkinsfile with excessive credential scope. Supply chain: dependency confusion (registering a private package name on a public registry), typosquatting (requests vs request), and compromising a widely-used library (XZ Utils, event-stream) are the highest-impact attacks. If you compromise the build system, you compromise every binary it produces.",
          master: [
            "Identify GitHub Actions workflow injection via an untrusted input context",
            "Explain how OIDC tokens in GitHub Actions can be stolen and used outside the intended context",
            "Enumerate secrets available to a Jenkins pipeline via the Groovy script console",
            "Demonstrate a dependency confusion attack against a private package in a test environment",
            "Explain the XZ Utils backdoor at a technical level — what was inserted and how it activated",
            "Assess a GitHub Actions workflow for excessive permissions and untrusted inputs",
            "Explain the SLSA framework and what each level actually prevents"
          ],
          res: [
            "Pwnhub CI/CD security research — practical GitHub Actions attack techniques",
            "CISA Defending CI/CD Environments — understand what defenders are looking for",
            "Supply Chain Security research (Snyk, Checkmarx blogs) — current supply chain attack techniques",
            "GitHub Actions security hardening guide — reading the official security guidance tells you exactly what to target"
          ]
        }
      ]
    }
  ]
}
