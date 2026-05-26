export const networkingData = {
  name: "COMPUTER NETWORKING",
  area: "net",
  eyebrow: "TCP/IP · Routing · Switching · Security Protocols · BGP · Cloud Networking",
  sub: "Networking is the kind of subject where you can spend years configuring equipment without understanding what you are configuring or why it behaves the way it does. This roadmap is built around first principles: what problems each protocol solves, why it was designed the way it was, and what happens when it breaks. A network engineer who understands TCP at the byte level is worth more than one who has memorized 50 show commands.",
  phases: [
    {
      name: "Foundations: OSI Model and TCP/IP",
      level: "foundation",
      tagline: "Every protocol conversation you will ever have starts here",
      desc: "The OSI model is a conceptual framework, not a description of how networking actually works. TCP/IP is a description of how networking actually works. You need both: the OSI model gives you a vocabulary and a mental model for isolating problems, and TCP/IP tells you what the real protocols are doing. The critical skill at this level is being able to trace a packet's journey from application data through every encapsulation layer to bits on a wire — and explain what each layer is doing and why.",
      topics: [
        {
          name: "OSI Model and Protocol Encapsulation",
          tag: "core",
          desc: "The OSI model divides networking into seven layers: Physical (bits on a medium), Data Link (frames between directly connected nodes), Network (packets routed between networks), Transport (end-to-end reliability), Session, Presentation, Application. TCP/IP collapses this to four: Network Access (OSI 1+2), Internet (OSI 3), Transport (OSI 4), Application (OSI 5–7). The practical skill is encapsulation: application data is wrapped in a TCP segment header, wrapped in an IP packet header, wrapped in an Ethernet frame header and trailer, serialized to bits. Each layer adds its own header and treats the layer above's packet as opaque payload. Understanding encapsulation is why you can read a Wireshark capture — you are peeling layers off in the correct order.",
          master: [
            "Trace an HTTP request from browser to server at every OSI layer: what headers are added or modified at each step",
            "Describe the PDU name at each layer: bit, frame, packet, segment, data",
            "Draw the complete encapsulation structure for a TCP HTTP GET: Ethernet/IP/TCP/HTTP headers",
            "Explain the difference between L2 MAC addressing and L3 IP addressing and when each is used",
            "Describe what a broadcast domain and a collision domain are and how switches and routers affect each",
            "Use Wireshark to capture a DNS query and HTTP request and identify the full protocol stack in each frame"
          ],
          res: [
            "Computer Networking: A Top-Down Approach (Kurose and Ross) — the most accessible rigorous text",
            "Computer Networks (Tanenbaum and Wetherall) — denser, more technically precise",
            "Wireshark (wireshark.org) — install it before anything else, use it constantly",
            "GNS3 or Packet Tracer — for building lab topologies without physical hardware"
          ]
        },
        {
          name: "IP Addressing and Subnetting",
          tag: "core",
          desc: "An IP address is a 32-bit number. The subnet mask defines which bits are the network portion and which are the host portion. CIDR notation: 192.168.1.0/24 means the first 24 bits are the network, leaving 8 bits (256 addresses, 254 usable) for hosts. Subnetting is arithmetic: given 192.168.10.0/24, create 4 equal subnets — borrow 2 bits, giving /26, each subnet with 64 addresses. The network increment is 256 minus the decimal value of the subnet mask octet: for /26 the mask octet is 192, increment is 64. Private ranges (RFC 1918): 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 — not routable on the public internet, used behind NAT. VLSM allows different subnet sizes within the same network. IPv6 uses 128-bit addresses in eight 16-bit hex groups — compressed notation omits leading zeros and replaces consecutive zero groups with ::",
          master: [
            "Subnet 192.168.0.0/16 into subnets supporting at least 500 hosts each — calculate network, broadcast, and usable ranges for the first four",
            "Given an IP address and mask, determine whether two addresses are in the same subnet without a calculator",
            "Explain CIDR and supernetting: how route aggregation reduces the size of routing tables",
            "Describe the three private IPv4 ranges and explain why NAT makes them work on the internet",
            "Explain IPv6 full and compressed notation and describe the EUI-64 interface identifier generation",
            "Configure IPv4 and IPv6 addresses on interfaces in a lab and verify connectivity with ping and traceroute"
          ],
          res: [
            "Subnetting practice sites (subnettingpractice.com) — drill until it is instant",
            "Professor Messer CompTIA Network+ course (free on YouTube) — concise, accurate fundamentals",
            "RFC 1918 — read the original, it is short",
            "IPv6 Fundamentals (Rick Graziani) — systematic IPv6 treatment"
          ]
        },
        {
          name: "TCP and UDP in Depth",
          tag: "core",
          desc: "TCP provides reliable, ordered, connection-oriented delivery. The three-way handshake: SYN (client sends ISN), SYN-ACK (server acknowledges and sends its ISN), ACK (client acknowledges). ISNs are randomized to prevent injection attacks. Flow control: the receiver advertises a window size — how many bytes it can buffer — the sender must stay within it. Zero-window means the receiver buffer is full; the sender stops until the window opens. Congestion control: TCP infers congestion from packet loss and adjusts its rate. Slow start grows the congestion window exponentially until it hits the threshold, then congestion avoidance grows linearly. Four-way teardown: FIN/ACK, ACK, FIN/ACK, ACK. TIME-WAIT lasts 2×MSL to ensure all in-flight packets have cleared. UDP: no connection, no guarantee, no order, no flow control — one write equals one datagram. DNS, DHCP, SNMP, video streaming, gaming all use UDP because the overhead of TCP reliability is worse than occasional packet loss.",
          master: [
            "Explain the three-way handshake at byte level: ISN purpose, why each message is necessary",
            "Explain TCP flow control: sliding window, window advertisement, and zero-window condition",
            "Describe TCP congestion control: slow start, congestion avoidance, fast retransmit, and fast recovery",
            "Capture a complete TCP connection with Wireshark and identify handshake, data transfer, and teardown",
            "Explain TIME-WAIT: why it exists and what happens to connections during a server restart",
            "Describe the trade-offs that lead a protocol designer to choose UDP over TCP for a specific application"
          ],
          res: [
            "TCP/IP Illustrated Vol. 1 (W. Richard Stevens) — the definitive reference, Chapters 17–24",
            "RFC 793 (TCP) and RFC 768 (UDP) — short, read the originals",
            "Wireshark — capture real connections, analyze the sequence number arithmetic",
            "tcp.guru — interactive TCP state machine visualizer"
          ]
        }
      ]
    },
    {
      name: "Switching and Layer 2",
      level: "foundation",
      tagline: "Layer 2 is where most misconfigurations cause the most mysterious failures",
      desc: "Ethernet switches operate at Layer 2, making forwarding decisions based on MAC addresses. Understanding how MAC address tables are built, how spanning tree prevents loops, and how VLANs create logical segmentation is foundational to any enterprise network. Most network problems blamed on routing are switching problems when you dig into them.",
      topics: [
        {
          name: "Ethernet, MAC Learning, and STP",
          tag: "core",
          desc: "A switch builds its MAC address table by learning: when a frame arrives, the source MAC is recorded against the ingress port. Forwarding decision: if the destination MAC is in the table, forward to that port; if not, flood to all ports except the incoming one. ARP resolves IP addresses to MAC addresses — a device broadcasts 'who has this IP?' and the owner responds with its MAC. ARP is unauthenticated, making it trivially spoofable. Spanning Tree Protocol prevents switching loops by electing a root bridge and blocking redundant paths. Loop detection: without STP, a broadcast frame would circulate forever, consuming all bandwidth and crashing every device. RSTP (802.1w) converges in seconds instead of the 30–50 seconds of original STP. PortFast on access ports bypasses the listening and learning states — always enable it on ports connected to endpoints, never on switch-to-switch uplinks.",
          master: [
            "Explain MAC learning and flooding: walk through the table state for a 5-device network after 10 frames",
            "Describe ARP: the request/reply process, cache lifetime, and how ARP poisoning exploits the lack of authentication",
            "Explain STP root bridge election and port role assignment: root port, designated port, blocked port",
            "Describe why a switching loop causes a broadcast storm at the physics level",
            "Configure RSTP in a multi-switch lab topology and observe convergence after a link failure",
            "Explain PortFast, BPDU Guard, and Root Guard — when each is appropriate and what attack each prevents"
          ],
          res: [
            "Cisco IOS documentation on STP — accurate and practical",
            "Network Warrior (Gary Donahue) — real-world perspective from a practitioner",
            "Wireshark — capture ARP and observe the full request/reply cycle",
            "Packet Tracer lab — build a multi-switch topology and observe STP port states"
          ]
        },
        {
          name: "VLANs, Trunking, and Inter-VLAN Routing",
          tag: "core",
          desc: "A VLAN is a logical segmentation of a switch — ports in different VLANs cannot communicate at Layer 2 even on the same physical switch. Each VLAN is its own broadcast domain. Trunk ports carry multiple VLANs using 802.1Q tagging: a 4-byte tag inserted into the Ethernet frame carries the VLAN ID. Access ports carry one VLAN, untagged — end devices are unaware of VLANs. The native VLAN on a trunk is sent untagged — mismatched native VLANs between trunk ends causes frames to arrive in the wrong VLAN (VLAN hopping). Inter-VLAN routing requires Layer 3: router-on-a-stick uses physical router subinterfaces (one per VLAN, creates a physical link bottleneck) or a Layer 3 switch with SVIs (Switched Virtual Interfaces). SVIs are the standard — faster, simpler, no bottleneck.",
          master: [
            "Explain why hosts in different VLANs cannot communicate at Layer 2 even on the same switch",
            "Configure VLANs, access ports, and a trunk in a lab — verify with show commands and a ping test",
            "Explain 802.1Q tagging: what is in the tag, where it is inserted in the frame, what the native VLAN is",
            "Describe VLAN hopping: the native VLAN mismatch attack and the double-tagging attack",
            "Configure inter-VLAN routing with SVIs on a Layer 3 switch and verify routing between VLANs",
            "Design a VLAN scheme for a small office: user, server, management, and voice VLANs"
          ],
          res: [
            "Cisco VLAN configuration guide — the reference implementation",
            "VLAN Security Best Practices (NSA/CISA guidance) — covers VLAN hopping mitigations",
            "Packet Tracer VLAN labs — build, verify, break, and fix the topology"
          ]
        }
      ]
    },
    {
      name: "IP Routing",
      level: "intermediate",
      tagline: "How packets find their way across networks they have never seen",
      desc: "Routing forwards packets between networks based on destination IP address. Routers maintain a routing table mapping network prefixes to next-hop addresses and egress interfaces. The protocols that build and maintain routing tables across dynamic networks — OSPF, BGP — are complex not because routing is theoretically hard but because they must be correct, scalable, and convergent in the presence of failures. Understanding when to use static routes, OSPF, or BGP is the core skill of a network engineer.",
      topics: [
        {
          name: "Static Routing and the Routing Table",
          tag: "core",
          desc: "Every router makes a forwarding decision using longest prefix match: the routing table entry with the most specific matching prefix wins. Default route (0.0.0.0/0) matches everything and is always the least specific — the gateway of last resort. Administrative distance determines which routing source is preferred when multiple sources know a route to the same prefix: connected interfaces (AD 0) beat static routes (AD 1) beat OSPF (AD 110) beat RIP (AD 120). Static routes do not adapt to failures — a static route to a failed next-hop remains in the table until manually removed. Floating static routes use a higher-than-protocol AD so they only take effect when the dynamic route disappears. Null0 routes are used for summarization blackholing — advertise the summary, drop packets to destinations within the summary that do not match a more specific route.",
          master: [
            "Explain longest prefix match with examples: given a routing table and destination IP, determine which route wins and why",
            "Explain administrative distance and give the correct value for static, OSPF, EIGRP, RIP, EBGP, and IBGP",
            "Configure static routes in a multi-router topology and verify end-to-end connectivity",
            "Explain the floating static route use case and how the AD value is set relative to the dynamic protocol",
            "Debug a routing problem using show ip route, show ip arp, and traceroute — describe your methodology",
            "Explain what happens when a packet arrives with no matching route and no default route"
          ],
          res: [
            "TCP/IP Illustrated Vol. 1 Chapter 9 — IP routing, the precise reference",
            "GNS3 lab — build a 4-router topology and verify routing with debug ip packet",
            "Cisco IP routing documentation — comprehensive configuration reference"
          ]
        },
        {
          name: "OSPF: Link-State Routing",
          tag: "intermediate",
          desc: "OSPF is a link-state protocol: every router floods information about its directly connected links to the entire area, and every router independently runs Dijkstra's algorithm on the resulting topology database. Neighbor adjacency: routers discover neighbors with Hello packets, exchange LSDBs, and synchronize. The DR/BDR election on multi-access networks reduces adjacencies — all routers form adjacency only with the DR/BDR. Areas reduce flooding overhead: all routers must connect to Area 0 (backbone). Inter-area routes pass through ABRs which summarize routes between areas. LSA types matter: Type 1 (Router LSA, within area), Type 2 (Network LSA, from DR), Type 3 (Summary LSA, inter-area from ABR), Type 5 (External LSA, redistributed routes from ASBR). OSPF cost defaults to 100Mbps / interface bandwidth — anything above 100Mbps has cost 1 unless you raise the reference bandwidth.",
          master: [
            "Describe the OSPF neighbor state machine: Down through Full, explaining what happens at each transition",
            "Explain the DR/BDR election: what factors determine the winner and what happens on a point-to-point link",
            "Describe LSA types 1, 2, 3, and 5 and explain what topology information each carries",
            "Configure multi-area OSPF and verify with show ip ospf database, show ip ospf neighbor, show ip route ospf",
            "Troubleshoot an OSPF adjacency stuck at ExStart or Loading — identify the cause",
            "Explain OSPF route summarization at ABRs and why it is important for large networks"
          ],
          res: [
            "OSPF and IS-IS (Jeff Doyle) — technically precise OSPF reference",
            "RFC 2328 (OSPF Version 2) — read Section 4 for the protocol overview",
            "GNS3 OSPF multi-area lab — build the topology and observe LSA flooding behavior"
          ]
        },
        {
          name: "BGP: The Protocol That Runs the Internet",
          tag: "advanced",
          desc: "BGP is the routing protocol of the internet. Unlike OSPF which optimizes for shortest path, BGP optimizes for policy. BGP is a path vector protocol — it carries the full AS path to the destination, not just the next hop. Loop prevention: if your own AS number appears in the path, discard the route. EBGP runs between different autonomous systems; IBGP runs within one. IBGP does not re-advertise routes between peers — all IBGP routers need a full mesh or route reflectors. BGP attribute path selection: Weight (Cisco only, highest), LOCAL_PREF (prefer exit point, highest), AS_PATH length (shorter), MED (prefer entry point, lower). Route maps implement policy. BGP hijacking injects false routes — a malicious AS advertises a more specific prefix for someone else's address space, attracting their traffic. RPKI (Resource Public Key Infrastructure) addresses this by cryptographically binding IP prefixes to AS numbers.",
          master: [
            "Describe the BGP session establishment and the four message types: OPEN, UPDATE, KEEPALIVE, NOTIFICATION",
            "Explain EBGP vs IBGP: purpose, where each runs, and why IBGP requires full mesh or route reflectors",
            "Explain BGP path selection in order: from Weight through MED — give a scenario where each attribute is the decision point",
            "Configure EBGP peering between two ASes and verify route exchange",
            "Explain BGP hijacking: how it works, why it is possible, and what RPKI does about it",
            "Describe the role of COMMUNITIES attribute in BGP policy — practical use cases"
          ],
          res: [
            "Internet Routing Architectures (Sam Halabi) — the classic BGP book",
            "BGP4 RFC 4271 — read the path attributes section",
            "Hurricane Electric BGP Toolkit (bgp.he.net) — see the real internet routing table",
            "BGP in the Data Center (Dinesh Dutt) — modern BGP usage in infrastructure"
          ]
        }
      ]
    },
    {
      name: "Network Services",
      level: "intermediate",
      tagline: "The protocols that make the network actually usable",
      desc: "IP routing moves packets between networks. DNS, DHCP, NAT, and NTP are what make those packets arrive at the right application at the right time. These are treated as background infrastructure until they break — at which point they are the hardest things to troubleshoot because their failures are subtle and non-obvious.",
      topics: [
        {
          name: "DNS: More Complex Than It Looks",
          tag: "core",
          desc: "DNS translates domain names to IPs. Resolution: the stub resolver queries a recursive resolver (your ISP's or 8.8.8.8). The recursive resolver checks its cache. If not cached, it queries a root name server → TLD name server → authoritative name server → answer. The response is cached for the TTL duration. Record types: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail, with priority), NS (name server), TXT (SPF/DKIM/DMARC), PTR (reverse lookup), SRV (service location). DNS uses UDP port 53 for queries under 512 bytes, TCP for larger or zone transfers. DNS is a critical attack surface: cache poisoning injects false records into a recursive resolver (Kaminsky attack), DNS hijacking redirects queries to attacker-controlled resolvers, DNS exfiltration tunnels data through TXT or CNAME queries to an attacker-controlled domain.",
          master: [
            "Trace a DNS resolution end-to-end from stub resolver to authoritative server — explain caching at each step",
            "Describe all seven DNS record types: A, AAAA, CNAME, MX, NS, TXT, PTR — use case for each",
            "Explain the Kaminsky attack: what vulnerability it exploits and how DNSSEC prevents it",
            "Use dig to troubleshoot a resolution problem: follow the delegation chain manually to the authoritative server",
            "Explain negative caching: NXDOMAIN and NOERROR with empty answer, and the TTL implications",
            "Configure split-horizon DNS and explain the security and operational motivation"
          ],
          res: [
            "DNS and BIND (Cricket Liu and Paul Albitz) — the authoritative reference",
            "Cloudflare DNS learning center — clear explanations of DNS concepts",
            "dig manual page — learn every option before using any other DNS tool"
          ]
        },
        {
          name: "DHCP, NAT, and Address Management",
          tag: "core",
          desc: "DHCP automates IP assignment. The DORA process: Discover (client broadcasts, no IP yet), Offer (server responds with available IP), Request (client broadcasts its choice), Acknowledge (server confirms the lease). The client broadcasts because it has no valid IP yet — broadcasts reach the server on the local segment. DHCP relay agents forward broadcasts as unicast to the server, enabling one server to serve multiple subnets. NAT maps private IPs to public IPs. PAT (NAT overload) maps many private addresses to one public address using unique source ports — the NAT table tracks (private IP, private port) → (public IP, public port). Inbound connections require static NAT or port forwarding. NAT breaks end-to-end connectivity, complicates protocols that embed IP addresses in their payload (FTP, SIP), and creates per-connection state that must be maintained indefinitely.",
          master: [
            "Describe the DORA process — explain why each step uses broadcast versus unicast",
            "Configure DHCP options: gateway, DNS server, lease time — verify assignment on a client",
            "Configure a DHCP relay agent and explain what it does to the DHCP packet",
            "Explain PAT: how multiple hosts share a single public IP and how the NAT table tracks each session",
            "Describe why NAT breaks FTP in passive mode and what NAT-ALG does to fix it",
            "Design an IPv4 addressing plan for a small organization with multiple subnets and a single NAT boundary"
          ],
          res: [
            "RFC 2131 (DHCP) — read it, it is not long",
            "RFC 3022 (NAT) — the original NAT specification",
            "Cisco NAT configuration guide — practical and well-organized"
          ]
        }
      ]
    },
    {
      name: "Network Security Protocols",
      level: "intermediate",
      tagline: "Protocols designed for connectivity have no built-in security",
      desc: "TCP/IP was designed assuming every node is cooperative — no authentication of packet sources, no confidentiality of data in transit, no legitimacy verification of routing advertisements. TLS, IPSec, and 802.1X each address specific vulnerabilities in the original design. Understanding why each protocol exists — what attack it prevents — is the only way to configure it correctly.",
      topics: [
        {
          name: "TLS: How Almost All Secure Communication Works",
          tag: "core",
          desc: "TLS provides confidentiality, integrity, and authentication for TCP connections. The TLS 1.3 handshake: ClientHello (supported cipher suites, key share), ServerHello (chosen suite, key share), the server and client derive shared keys from the Diffie-Hellman exchange, the server sends its certificate and Finished encrypted with derived keys, the client verifies and sends Finished. Forward secrecy: ephemeral DH key exchange means compromise of the server's long-term private key does not compromise past sessions — each session uses fresh keys. Certificate validation: signed by a trusted CA in the browser trust store, CN/SAN matches hostname, not expired, not revoked. HSTS forces HTTPS for a domain for a specified duration, preventing SSL stripping. Certificate Transparency logs allow public auditing of every certificate a CA issues.",
          master: [
            "Describe the TLS 1.3 handshake: what is exchanged, in what order, and how session keys are derived",
            "Explain Diffie-Hellman key exchange: why two parties can arrive at the same key without transmitting it",
            "Explain certificate chain validation: root CA, intermediate CA, leaf certificate, and browser trust store",
            "Describe SSL stripping and explain why HSTS prevents it",
            "Use Wireshark to capture a TLS 1.3 handshake and identify the ClientHello and ServerHello messages",
            "Explain what a self-signed certificate is, why browsers reject it, and when it is acceptable to use one"
          ],
          res: [
            "The Illustrated TLS 1.3 Connection (tls13.ulfheim.net) — byte-by-byte annotation of a real handshake",
            "Bulletproof TLS and PKI (Ivan Ristic) — the definitive practical TLS reference",
            "SSL Labs (ssllabs.com/ssltest) — test any site, read the explanations of each finding",
            "RFC 8446 (TLS 1.3) — read the overview sections"
          ]
        },
        {
          name: "Firewalls and Network Security Architecture",
          tag: "intermediate",
          desc: "A stateless ACL filters packets based on source IP, destination IP, protocol, and port — each packet evaluated independently. A stateful firewall tracks connection state — it allows reply traffic for established connections without an explicit inbound rule. A stateless ACL requires both an outbound rule and an inbound reply rule; a stateful firewall requires only the outbound rule. Next-generation firewalls add application awareness: they identify applications regardless of port, integrate IPS signatures, and enforce user-identity-based policies. DMZ isolation: internet-facing servers sit in a DMZ so that compromise of a web server does not give direct access to the internal network. Defense in depth means the firewall is one control layer, not the only one. Microsegmentation limits the blast radius when a host is compromised — east-west traffic between servers must pass through policy enforcement, not just north-south traffic at the perimeter.",
          master: [
            "Explain stateful versus stateless filtering: why stateful is the default and when stateless is appropriate",
            "Design a three-zone firewall architecture: internet, DMZ, and internal — specify permitted traffic between each zone",
            "Write ACL rules to permit outbound HTTP/HTTPS and DNS while denying everything else",
            "Describe what an NGFW adds over a stateful firewall and when the capabilities justify the cost",
            "Explain east-west data center traffic and why perimeter firewalls do not address it",
            "Describe microsegmentation and how it differs from traditional VLAN-based segmentation"
          ],
          res: [
            "Network Security Architectures (Sean Convery) — systematic network security design",
            "NIST SP 800-41 Guidelines on Firewalls and Firewall Policy",
            "NSA Network Infrastructure Security Guide — practical hardening guidance"
          ]
        }
      ]
    },
    {
      name: "Network Monitoring and Troubleshooting",
      level: "advanced",
      tagline: "Systematic diagnosis beats experience-based guessing every time",
      desc: "Network troubleshooting is methodical, not intuitive. Isolate the layer, eliminate the candidates, verify assumptions. Most experienced engineers have refined their guessing into a method without realizing it — learn the method explicitly and you will outperform engineers with three times your experience. The single most valuable diagnostic tool is packet capture, because it tells you exactly what happened on the wire rather than what the device thinks happened.",
      topics: [
        {
          name: "Packet Capture and Protocol Analysis",
          tag: "core",
          desc: "Wireshark is the primary diagnostic tool. Capture filters use BPF syntax and are applied at capture time — they reduce capture size but you cannot recover filtered packets. Display filters are applied to an existing capture — the syntax is completely different from BPF and non-destructive. Key display filters: ip.addr, tcp.port, tcp.flags.syn, http, dns, icmp. Follow TCP Stream reconstructs the full conversation for a selected connection. Expert Information flags anomalies: TCP retransmissions (packet loss), duplicate ACKs, zero windows (receiver buffer full), RSTs (unexpected terminations). Statistics > Protocol Hierarchy shows traffic composition. tshark is the command-line version — use it for long-running captures and scripting. tcpdump is the standard for remote captures — save to a file with -w and open in Wireshark locally.",
          master: [
            "Capture a complete HTTP session and reconstruct the full request and response",
            "Identify TCP retransmissions, out-of-order packets, and zero-window conditions — explain each",
            "Use tshark to capture on a remote server and transfer the capture file for analysis",
            "Write a BPF capture filter and a Wireshark display filter for the same traffic — explain the difference",
            "Use the IO Graph to identify a bandwidth saturation event and correlate it with specific flows",
            "Analyze a TLS handshake in a capture and identify the ClientHello, ServerHello, and cipher suite negotiation"
          ],
          res: [
            "Wireshark documentation (wireshark.org/docs) — the official filter reference",
            "Wireshark Network Analysis (Laura Chappell) — the most comprehensive Wireshark text",
            "Wireshark sample captures (wiki.wireshark.org/SampleCaptures) — real traffic to analyze",
            "Chris Greer Wireshark channel (YouTube) — practical troubleshooting demonstrations"
          ]
        },
        {
          name: "Network Performance and SNMP Monitoring",
          tag: "advanced",
          desc: "Bandwidth utilization, latency, packet loss, and jitter are the four metrics that determine network health. Bandwidth: percentage of interface capacity in use — SNMP interface counters or NetFlow for per-flow breakdown. Latency: round-trip time — distinguish propagation delay (speed-of-light, distance-limited), queuing delay (packets waiting in a buffer), and serialization delay (time to put bits on the wire). Packet loss: TCP retransmissions in captures, or SNMP error counters. Jitter: variation in latency — critical for VoIP which needs consistent latency more than low average latency. SNMP: the manager polls agents on devices for MIB OID values. SNMPv1/v2c use community strings in plaintext — use SNMPv3 with authentication and encryption. NetFlow/IPFIX exports sampled flow records: source/destination IPs, ports, protocols, byte counts — traffic analysis at scale without full packet capture.",
          master: [
            "Poll interface utilization counters via SNMP and graph them over time",
            "Explain SNMP polling versus SNMP traps — when each is appropriate",
            "Configure NetFlow export on a router and analyze the flow records",
            "Diagnose a VoIP quality problem using jitter and packet loss measurements",
            "Explain queuing mechanisms: FIFO, WFQ, CBWFQ, LLQ — what problem each solves for each traffic type",
            "Design a network monitoring architecture for a medium organization: tools, data, alert thresholds, retention"
          ],
          res: [
            "Grafana + InfluxDB + Telegraf SNMP plugin — the modern open-source monitoring stack",
            "Cisco QoS documentation — comprehensive treatment of queuing and policing",
            "MRTG or Cacti — simpler SNMP-based monitoring, good starting point"
          ]
        }
      ]
    },
    {
      name: "Cloud Networking",
      level: "advanced",
      tagline: "The same problems, different abstractions, different failure modes",
      desc: "Cloud networking is not fundamentally different from physical networking — IP addresses, routing, and VLANs still exist — but the implementation is software-defined, the failure modes are different, and the operational model is completely different. The engineers who struggle in cloud environments are the ones who try to apply physical network mental models directly rather than understanding how cloud abstractions map to underlying networking concepts.",
      topics: [
        {
          name: "AWS VPC and Network Architecture",
          tag: "advanced",
          desc: "A VPC is a logically isolated network in a single AWS region. Subnets are created within the VPC and tied to an availability zone. Internet Gateway enables inbound and outbound internet for instances with public IPs. NAT Gateway enables outbound internet for private subnet instances without exposing them to inbound. Security Groups are stateful L4 firewalls applied to instances — they track state and allow reply traffic automatically. Network ACLs are stateless and applied to subnets — both inbound and outbound rules are required. VPC Peering connects two VPCs for private routing — transitive peering does not work (A peers with B, B peers with C: A cannot reach C through B). Transit Gateway connects many VPCs and on-premises networks through a central hub. Direct Connect is a dedicated private circuit to AWS — consistent bandwidth and latency versus internet-based VPN. AWS networking pricing: data transfer out to the internet is charged per GB, as is transfer between AZs.",
          master: [
            "Design a VPC for a three-tier application: web, app, and database — specify subnet types, security groups, and routing tables",
            "Explain the difference between Security Groups and Network ACLs: statefulness, scope, and when each is appropriate",
            "Configure VPC peering between two VPCs and explain why transitive routing does not work",
            "Describe Transit Gateway and the problem it solves versus mesh peering in a hub-and-spoke model",
            "Explain the trade-offs between VPN Gateway and Direct Connect for on-premises connectivity",
            "Calculate the monthly cost of a specific data transfer pattern in AWS and identify the most expensive component"
          ],
          res: [
            "AWS VPC documentation (docs.aws.amazon.com/vpc) — read the entire User Guide",
            "AWS Networking Fundamentals re:Invent sessions (YouTube) — structured deep dives",
            "Azure Virtual Network documentation — same concepts, different terminology and implementation",
            "The Last Week in AWS (Corey Quinn) — honest operational and cost analysis"
          ]
        }
      ]
    }
  ]
}
