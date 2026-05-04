const networkingData = {
  name: "NETWORKING & INFRASTRUCTURE",
  area: "net",
  eyebrow: "Internet Protocols · Network Security · Infrastructure Engineering · BGP · SDN",
  sub: "From the physics of electrical signals to the BGP routes that stitch the global internet together. This is a complete, rigorous path through every layer of the network stack — not just enough to pass a certification, but enough to design, troubleshoot, and secure real infrastructure. Every engineer who touches production systems needs this.",
  phases: [
    {
      name: "How Networks Actually Work",
      level: "foundation",
      tagline: "From electrical signals to the packet",
      desc: "Before you configure a router or debug a packet, you need to understand what a network actually is at the physical level. This phase starts from first principles: how electrical signals encode data, how multiple devices share a medium, and how the OSI model provides a framework for every network interaction you will ever analyze. Do not rush this — the mental model you build here shapes everything that follows.",
      topics: [
        {
          name: "Physical Layer and Signal Transmission",
          tag: "core",
          desc: "Data is ultimately electrical, optical, or electromagnetic signal. The physical layer encodes binary data into physical signals: NRZ, Manchester encoding, 4B/5B. Bandwidth (Hz) vs data rate (bps): Shannon's capacity theorem establishes the theoretical maximum data rate for a channel with a given bandwidth and signal-to-noise ratio: C = B × log₂(1 + S/N). Attenuation, interference, and noise degrade signals over distance. Copper cables (Cat5e, Cat6, Cat6A): twisting reduces crosstalk via electromagnetic cancellation. Fiber optic: single-mode (long distance, single light path) vs multi-mode (shorter, cheaper). Wireless: ISM bands, channel width, MIMO, OFDM. Connectors, patch panels, structured cabling standards.",
          master: [
            "Explain Shannon's capacity theorem and calculate the theoretical max throughput of a channel",
            "Explain why twisted-pair cables cancel electromagnetic interference",
            "Understand the difference between single-mode and multi-mode fiber and when to use each",
            "Explain how wireless OFDM works and why it handles multipath interference",
            "Identify the physical layer symptoms: collisions, CRC errors, high error rates",
            "Understand the difference between baseband and broadband transmission",
            "Explain why fiber is immune to electromagnetic interference"
          ],
          res: [
            "Computer Networks (Tanenbaum & Wetherall — chapters on physical layer)",
            "CompTIA Network+ Study Guide (physical layer foundations)",
            "Fundamentals of Wireless Communication (Tse & Viswanath — free PDF)",
            "ANSI/TIA-568 Structured Cabling Standard overview"
          ]
        },
        {
          name: "Data Link Layer and Ethernet",
          tag: "core",
          desc: "The data link layer handles communication between directly connected nodes on the same network segment. Ethernet is the dominant technology: frames have a preamble, destination MAC (6 bytes), source MAC (6 bytes), EtherType (identifies Layer 3 protocol), payload, and FCS (CRC-32 error check). MAC addresses are burned into NICs but are administratively changeable. CSMA/CD (legacy): devices listen before transmitting, detect collisions, and back off exponentially. Modern switches are full-duplex — collisions don't happen. Switches learn MAC addresses by observing source MACs and build a MAC address table (CAM table). VLANs (802.1Q): logical network segmentation with 12-bit VLAN ID tags inserted into Ethernet frames. Spanning Tree Protocol (STP, 802.1D) and RSTP (802.1w) prevent broadcast loops.",
          master: [
            "Explain how a switch populates its MAC address table — entry by entry",
            "Understand why we need STP and what a broadcast storm looks like",
            "Configure VLANs on a managed switch: access ports vs trunk ports",
            "Explain the difference between a hub, switch, and router at a fundamental level",
            "Understand 802.1Q VLAN tagging: where the tag is inserted in the Ethernet frame",
            "Explain how Rapid STP (RSTP) achieves sub-second convergence vs original STP",
            "Understand CAM table overflow attacks and port security as a mitigation"
          ],
          res: [
            "TCP/IP Illustrated Vol. 1 (Stevens — Ethernet and ARP chapters)",
            "Computer Networks (Tanenbaum — data link layer)",
            "Cisco Catalyst Switching documentation",
            "802.1Q and 802.1D IEEE standards overview"
          ]
        },
        {
          name: "The OSI and TCP/IP Models",
          tag: "core",
          desc: "The OSI 7-layer model is a conceptual framework: Physical, Data Link, Network, Transport, Session, Presentation, Application. The TCP/IP model is what actually runs the internet: Link, Internet, Transport, Application. Each layer provides services to the layer above and uses services from the layer below via encapsulation. When you send data, each layer adds its header (and sometimes trailer): application data → TCP segment → IP packet → Ethernet frame → bits. De-encapsulation happens in reverse at the receiver. Understanding which layer is responsible for what is critical for troubleshooting: if pings work but HTTP doesn't, the problem is above Layer 3. Protocol data units at each layer have names: frame (Layer 2), packet (Layer 3), segment (Layer 4), data/message (Layer 7).",
          master: [
            "Trace a web request at every layer from browser to server and back",
            "Explain encapsulation and de-encapsulation with concrete header examples",
            "Identify which layer a given protocol operates at for any common protocol",
            "Use the OSI model to methodically troubleshoot a connectivity problem",
            "Explain the difference between OSI and TCP/IP models",
            "Understand what a socket is and how it bridges Layer 4 and Layer 7",
            "Explain why the OSI model is theoretical but TCP/IP is what we actually use"
          ],
          res: [
            "Computer Networking: A Top-Down Approach (Kurose & Ross — standard textbook)",
            "TCP/IP Illustrated Vol. 1 (Stevens)",
            "Network Warrior (Gary Donahue — practical focus)",
            "Cloudflare Learning Center (free, excellent explanations of networking concepts)"
          ]
        }
      ]
    },
    {
      name: "IP Addressing and Subnetting",
      level: "foundation",
      tagline: "The addressing system of the internet",
      desc: "Every device on the internet has an address. IPv4 addressing is one of the most fundamental skills in networking — and the one most engineers get wrong under pressure. Master subnetting to the point where you can do it in your head. Then learn IPv6, which is no longer optional as IPv4 exhaustion is a real operational problem.",
      topics: [
        {
          name: "IPv4 Addressing and Subnetting",
          tag: "core",
          desc: "IPv4 addresses are 32 bits written as four octets in dotted decimal (192.168.1.1). The subnet mask divides the address into network portion and host portion. CIDR (Classless Inter-Domain Routing) notation /x indicates how many bits are the network prefix. Private address ranges (RFC 1918): 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. VLSM (Variable Length Subnet Masking): allocating subnets of different sizes from a block efficiently. Reserved addresses: network address (all host bits 0), broadcast (all host bits 1), loopback (127.0.0.0/8). Supernetting (route summarization): aggregating multiple subnets into one advertisement. CIDR and route aggregation are how the internet routing table stays manageable.",
          master: [
            "Given a /24 network, subnet it into subnets supporting exactly 60, 30, and 12 hosts using VLSM",
            "Calculate the network address, broadcast address, first/last usable hosts for any CIDR block",
            "Convert between dotted decimal and binary for any IP address without a calculator",
            "Identify which subnet an IP address belongs to given a mask",
            "Explain why 192.168.0.0/16 is wrong — it should be 192.168.0.0/24 or 192.168.0.0/17",
            "Summarize a list of routes into the smallest possible supernet",
            "Explain the difference between /30 (point-to-point links) and /31 (RFC 3021)"
          ],
          deepdive: "Subnetting anxiety is common but unnecessary. The trick is binary thinking: a /25 gives you 128 addresses (2⁷), a /26 gives 64 (2⁶), a /27 gives 32, /28 gives 16, /29 gives 8, /30 gives 4. Every bit you borrow from the host portion halves your hosts and doubles your subnets. Memorize powers of 2 from 2⁰ to 2¹⁰ and subnetting becomes arithmetic.",
          res: [
            "Subnetting Practice (subnettingpractice.com — drill this until automatic)",
            "CCNA 200-301 Official Cert Guide (subnetting chapters)",
            "Professor Messer's CompTIA N+ (free video series on subnetting)",
            "IP Subnetting from CIDR to VLSM (Cisco Press)"
          ]
        },
        {
          name: "IPv6 Addressing",
          tag: "core",
          desc: "IPv6 uses 128-bit addresses written as eight groups of four hexadecimal digits separated by colons (2001:0db8:85a3:0000:0000:8a2e:0370:7334). Compression rules: leading zeros in each group can be omitted, and one contiguous run of all-zero groups can be replaced with ::. Address types: unicast (one-to-one), anycast (one-to-nearest), multicast (one-to-many) — IPv6 has no broadcast. Global unicast (2000::/3), link-local (fe80::/10, auto-configured on every interface), unique local (fc00::/7, like RFC 1918). SLAAC (Stateless Address AutoConfiguration): devices generate their own global address from the router's prefix advertisement. DHCPv6 for stateful configuration. Neighbor Discovery Protocol (NDP) replaces ARP. ICMPv6 is mandatory and serves many functions.",
          master: [
            "Compress and expand any IPv6 address following the RFC rules",
            "Explain why IPv6 eliminates broadcast and uses multicast instead",
            "Understand how SLAAC generates a unique interface identifier from the MAC (EUI-64)",
            "Explain NDP and its message types: Neighbor Solicitation, Neighbor Advertisement, Router Advertisement",
            "Configure IPv6 dual-stack on a Linux system manually",
            "Understand why link-local addresses are non-routable but required on every interface",
            "Explain how DHCPv6 differs from DHCPv4 in terms of prefix delegation"
          ],
          res: [
            "IPv6 Fundamentals (Rick Graziani — comprehensive and clear)",
            "RFC 8200 (IPv6 specification)",
            "Hurricane Electric IPv6 Certification (free, practical challenge)",
            "IPv6 Address Planning (O'Reilly)"
          ]
        },
        {
          name: "ARP, DNS, and DHCP",
          tag: "core",
          desc: "These three protocols make IP networks usable. ARP (Address Resolution Protocol): given a known IP address, find the corresponding MAC address via broadcast request. ARP tables cache IP-to-MAC mappings with a timeout. Gratuitous ARP: a device announces its own MAC for another IP (used in failover and HSRP, also used in ARP spoofing attacks). DNS (Domain Name System): hierarchical, distributed database mapping names to addresses. Recursive resolver, root servers, TLD servers, authoritative servers. DNS record types: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), NS (nameserver), PTR (reverse lookup), TXT (SPF, DKIM, verification), SRV (service location). TTL controls caching. DHCP: server assigns IP, subnet mask, default gateway, DNS servers to clients via DORA (Discover, Offer, Request, Acknowledge) process.",
          master: [
            "Explain the full ARP request/reply process with specific bytes exchanged",
            "Trace a DNS query from browser through recursive resolver to authoritative server",
            "Explain DNS caching and why a high TTL can cause problems during IP changes",
            "Configure a BIND or Unbound DNS server for a small network",
            "Understand DHCP lease process and what happens when a lease expires",
            "Explain DHCP snooping and dynamic ARP inspection as security features",
            "Understand split-horizon DNS and when it's needed"
          ],
          res: [
            "DNS and BIND (Cricket Liu — the reference book)",
            "The TCP/IP Guide (free online, excellent protocol-level detail)",
            "RFC 826 (ARP), RFC 1034/1035 (DNS), RFC 2131 (DHCP)",
            "Practical Networking YouTube channel"
          ]
        }
      ]
    },
    {
      name: "Transport Layer and Protocols",
      level: "intermediate",
      tagline: "How data flows reliably across the network",
      desc: "The transport layer is where reliability, ordering, and flow control live. TCP and UDP are the two workhorses. Understanding TCP deeply — its state machine, congestion control, and performance characteristics — is essential for debugging performance problems and building network applications.",
      topics: [
        {
          name: "TCP: Reliability and Congestion Control",
          tag: "core",
          desc: "TCP (Transmission Control Protocol) provides reliable, ordered, connection-oriented byte-stream delivery. Three-way handshake: SYN → SYN-ACK → ACK. Sequence numbers and acknowledgments ensure all bytes are received and ordered. Flow control: the receiver advertises a window size limiting how much data the sender can transmit without an ACK. Congestion control prevents senders from overwhelming the network: slow start (exponential growth until ssthresh), congestion avoidance (linear growth, AIMD), fast retransmit (retransmit on 3 duplicate ACKs), fast recovery. TCP variants: Reno, Cubic (Linux default), BBR (bandwidth-delay product-based, Google). TCP state machine: LISTEN, SYN-SENT, ESTABLISHED, FIN-WAIT-1, TIME-WAIT, CLOSE-WAIT, etc. TIME-WAIT exists to handle delayed duplicate segments.",
          master: [
            "Explain the three-way handshake including sequence number initialization",
            "Trace the TCP state machine for a complete connection lifecycle",
            "Explain why TCP has TIME-WAIT and the problems caused by running it too short",
            "Understand slow start, congestion avoidance, and fast recovery in detail",
            "Explain the difference between TCP Cubic and TCP BBR at a conceptual level",
            "Calculate the Bandwidth-Delay Product and explain why it matters for throughput",
            "Use Wireshark to identify retransmissions, duplicate ACKs, and zero window conditions"
          ],
          res: [
            "TCP/IP Illustrated Vol. 1 (Stevens — TCP chapters are the best explanation)",
            "BBR: Congestion-Based Congestion Control (Google 2016 — IEEE Queue)",
            "RFC 5681: TCP Congestion Control",
            "High Performance Browser Networking (Grigorik — free online)"
          ]
        },
        {
          name: "UDP and Application Layer Protocols",
          tag: "core",
          desc: "UDP (User Datagram Protocol) is connectionless, stateless, and provides no reliability or ordering guarantees. It adds only port numbers and a checksum to IP. Applications that need speed over reliability use UDP: DNS (single query-response), streaming video (QUIC is UDP-based), online gaming, VoIP (jitter more harmful than loss). QUIC (RFC 9000): built on UDP, provides TLS 1.3 security, multiplexing without head-of-line blocking, connection migration. HTTP/3 runs on QUIC. Key application protocols: HTTP/HTTPS (port 80/443), SMTP/IMAP/POP3 (email), FTP/SFTP, SSH (port 22), Telnet (legacy, never use), NTP (time synchronization, UDP port 123), SNMP (network management, UDP 161/162), TFTP (trivial FTP, UDP).",
          master: [
            "Explain when UDP is preferable to TCP — give real examples",
            "Understand why QUIC was built on UDP instead of extending TCP",
            "Explain how QUIC solves head-of-line blocking in HTTP/2",
            "Trace an HTTPS connection: DNS → TCP → TLS 1.3 handshake → HTTP",
            "Understand NTP's role and what happens when clocks drift on distributed systems",
            "Explain the security implications of SNMP v1/v2c (community strings in plaintext)",
            "Know the port numbers for all common protocols without looking them up"
          ],
          res: [
            "RFC 9000 (QUIC transport protocol)",
            "HTTP/3 Explained (Daniel Stenberg — free ebook)",
            "High Performance Browser Networking (Grigorik — free online, protocols in depth)",
            "The TCP/IP Guide (free online)"
          ]
        },
        {
          name: "Network Troubleshooting Methodology",
          tag: "core",
          desc: "Systematic troubleshooting saves hours. The OSI model is your framework: start at Layer 1 (is the cable plugged in?), move up layer by layer. Essential tools: ping (ICMP echo — tests Layer 3 reachability), traceroute (TTL expiration trick — maps the path), nslookup/dig (DNS queries), netstat/ss (socket state), tcpdump/Wireshark (packet capture), iperf3 (bandwidth testing), mtr (real-time traceroute with statistics). Common failure modes and their symptoms: wrong subnet mask (cannot reach hosts in same network), wrong default gateway (cannot reach remote networks), DNS failure (can ping IPs but not names), firewall drops (asymmetric behavior, ICMP replies without TCP SYN-ACK).",
          master: [
            "Follow a strict top-down or bottom-up OSI troubleshooting methodology",
            "Use tcpdump to capture traffic for a specific host, port, and protocol",
            "Identify packet loss and latency spikes using mtr over a 60-second window",
            "Use dig to perform all DNS query types (A, AAAA, MX, TXT, NS, PTR)",
            "Explain how traceroute uses TTL to map network path hop by hop",
            "Identify an MTU mismatch using the ping -M do and -s flags",
            "Analyze a Wireshark capture to diagnose TCP retransmissions and high latency"
          ],
          res: [
            "Network Troubleshooting Tools (O'Reilly — comprehensive reference)",
            "Wireshark Documentation and sample captures (Wireshark wiki)",
            "Brendan Gregg's networking performance tools (brendangregg.com)",
            "tcpdump cheat sheet (Daniel Miessler)"
          ]
        }
      ]
    },
    {
      name: "Routing and Switching",
      level: "intermediate",
      tagline: "Moving packets intelligently across networks",
      desc: "Routing is the process of selecting paths through a network of networks. Static routing is fine for simple topologies but doesn't scale. Dynamic routing protocols automatically discover topology changes and recalculate optimal paths. This phase covers the protocols that actually run the internet.",
      topics: [
        {
          name: "Static Routing and Router Architecture",
          tag: "core",
          desc: "A router forwards packets based on a routing table: each entry maps a destination prefix to a next-hop IP or exit interface. The longest prefix match rule determines which route wins when multiple entries match. Administrative distance (AD) breaks ties between routes from different sources (lower is preferred: connected = 0, static = 1, OSPF = 110, BGP = 200). Floating static routes: set high AD so they only activate when the primary route disappears. Router architecture: route processor (builds routing table from RIB), switching fabric, line cards with FIB for hardware forwarding (CEF on Cisco). Management plane, control plane, and data plane separation.",
          master: [
            "Explain the longest prefix match with multiple overlapping routes",
            "Configure static routes with backup floating statics on a router",
            "Explain the difference between the RIB (routing information base) and FIB (forwarding table)",
            "Understand why the data plane must forward at line rate while the control plane can be slow",
            "Configure a default route and explain when it is used",
            "Explain administrative distance and how to use it for route preference",
            "Trace a packet through a router from ingress to egress"
          ],
          res: [
            "Routing TCP/IP Vol. 1 (Doyle — comprehensive routing reference)",
            "CCNA 200-301 Official Cert Guide",
            "Cisco IOS Configuration Guide: IP Routing",
            "Juniper Technical Library (free, excellent for JunOS routing)"
          ]
        },
        {
          name: "OSPF — Open Shortest Path First",
          tag: "advanced",
          desc: "OSPF is a link-state routing protocol: each router knows the complete topology of its area. Routers exchange Link State Advertisements (LSAs) using reliable flooding. Each router independently runs Dijkstra's SPF algorithm to build a shortest path tree. OSPF areas reduce flooding overhead: all areas connect to Area 0 (backbone). Router types: Internal (one area), ABR (Area Border Router — connects multiple areas), ASBR (Autonomous System Boundary Router — imports external routes). Hello packets establish and maintain adjacencies. On broadcast networks, a Designated Router (DR) and Backup DR (BDR) are elected to reduce LSA flooding. Metric is cost (interface bandwidth by default). Authentication (MD5/SHA). OSPFv3 carries IPv6.",
          master: [
            "Explain how OSPF uses flooding to ensure every router has identical LSDBs",
            "Understand the DR/BDR election process and why it exists",
            "Configure multi-area OSPF with route summarization at ABRs",
            "Troubleshoot an OSPF adjacency stuck in EXSTART or LOADING state",
            "Explain all major LSA types (1, 2, 3, 4, 5, 7) and where each is seen",
            "Understand stub, totally stubby, and NSSA area types and when to use each",
            "Explain OSPF authentication and why it prevents route injection attacks"
          ],
          res: [
            "OSPF: Anatomy of an Internet Routing Protocol (Moy — written by the RFC author)",
            "RFC 2328 (OSPFv2) and RFC 5340 (OSPFv3)",
            "Cisco OSPF Design Guide",
            "Routing TCP/IP Vol. 1 (Doyle — best OSPF deep dive)"
          ]
        },
        {
          name: "BGP — The Internet's Routing Protocol",
          tag: "advanced",
          desc: "BGP (Border Gateway Protocol) is the routing protocol of the internet. It connects autonomous systems (AS): organizations with their own IP address space and routing policies. eBGP runs between different ASes; iBGP runs between routers in the same AS. BGP is a path-vector protocol: each route advertisement carries the full AS_PATH, preventing loops. Key path attributes: AS_PATH (loop prevention, path length), NEXT_HOP, LOCAL_PREF (influence outbound — higher preferred within AS), MED (influence inbound from a neighbor AS — lower preferred), communities (arbitrary tags for policy). BGP best-path selection has 13 decision steps. Route reflectors solve iBGP full-mesh scaling. BGP security: RPKI (Route Origin Authorization prevents hijacks), prefix filtering, max-prefix limits.",
          master: [
            "Explain the difference between eBGP and iBGP in terms of next-hop and TTL",
            "Use AS_PATH prepending and LOCAL_PREF together to implement a preferred-primary/backup-secondary design",
            "Explain the BGP best-path selection algorithm (at least the first 8 steps in order)",
            "Configure a route reflector and explain why it replaces full-mesh iBGP",
            "Understand BGP communities: what well-known communities (NO_EXPORT, NO_ADVERTISE) do",
            "Explain RPKI and how Route Origin Authorizations prevent BGP hijacks",
            "Read a BGP routing table from a looking glass server and identify the best path"
          ],
          res: [
            "BGP: Building Reliable Networks with the Border Gateway Protocol (O'Reilly)",
            "RFC 4271 (BGP-4 specification)",
            "BGP Best Path Selection (Cisco documentation — memorize the algorithm)",
            "BGP.tools and RIPE Stat — live internet BGP data"
          ]
        }
      ]
    },
    {
      name: "Network Security",
      level: "intermediate",
      tagline: "Defend every layer",
      desc: "Networks are the primary attack surface. Every protocol you learned in previous phases has associated vulnerabilities. This phase covers security at every layer: securing the physical access, controlling Layer 2, firewalling at Layer 3-7, encrypting with VPNs, and monitoring everything. Security is not a feature to add at the end — it must be designed in.",
      topics: [
        {
          name: "Layer 2 Security",
          tag: "core",
          desc: "ARP spoofing: an attacker sends gratuitous ARP replies associating their MAC with another host's IP, enabling man-in-the-middle attacks. Dynamic ARP Inspection (DAI): switches validate ARP packets against a DHCP snooping table before forwarding. DHCP snooping: the switch only forwards DHCP server replies from trusted ports — prevents rogue DHCP servers. Port security: limit the number of MAC addresses on a port and shut it down on violation. MAC flooding (CAM table overflow): flooding a switch with fake MAC addresses fills the CAM table, forcing it to flood frames like a hub. VLAN hopping: double tagging or switch spoofing to access a different VLAN. 802.1X: port-based access control using EAP and RADIUS — authenticate devices before they get network access.",
          master: [
            "Explain the ARP spoofing attack and how DAI prevents it",
            "Configure DHCP snooping and DAI on a Cisco switch",
            "Understand MAC flooding and why it causes the switch to fail open",
            "Configure 802.1X with a RADIUS server for wired network authentication",
            "Explain double-tagging VLAN hopping and how to prevent it",
            "Configure port security with sticky MAC learning and violation shutdown",
            "Understand Private VLANs (PVLANs) for isolation within a VLAN"
          ],
          res: [
            "CCNP ENARSI Official Cert Guide (Layer 2 security chapters)",
            "Cisco Layer 2 Security Best Practices",
            "Network Security Bible (Cole et al.)",
            "SANS Institute: Securing Layer 2 (white paper)"
          ]
        },
        {
          name: "Firewalls and Access Control",
          tag: "core",
          desc: "Stateless packet filtering: ACLs match on source/destination IP, port, protocol. Rules are processed top-down with implicit deny at the end. Stateful firewalls track connection state (TCP established, related ICMP) and allow return traffic automatically. This eliminates the need for inbound rules for established connections. Next-Generation Firewalls (NGFW): application identification at Layer 7, SSL/TLS inspection (decrypt-inspect-re-encrypt), user identity integration, threat intelligence. Zones: internal (trusted), DMZ (semi-trusted, public-facing servers), external (untrusted). Linux iptables: PREROUTING, INPUT, FORWARD, OUTPUT, POSTROUTING chains. nftables: modern replacement. pfSense/OPNsense as open-source firewall platforms.",
          master: [
            "Explain the difference between stateless and stateful firewalls with concrete examples",
            "Design a DMZ with correct ACLs for web server, mail server, and internal network",
            "Configure iptables rules for a Linux router with NAT (MASQUERADE) and firewall",
            "Understand SSL inspection: what the man-in-the-middle it performs and the trust implications",
            "Explain zone-based firewall architecture and how it simplifies rule management",
            "Identify firewall evasion techniques: fragmentation, tunneling over allowed ports",
            "Audit a firewall ruleset for shadowed, duplicate, or overly permissive rules"
          ],
          res: [
            "Linux Firewalls (Michael Rash — iptables in depth)",
            "Palo Alto PCNSE Study Guide (NGFW concepts)",
            "pfSense: The Definitive Guide",
            "NIST SP 800-41: Guidelines on Firewalls and Firewall Policy"
          ]
        },
        {
          name: "VPN Technologies",
          tag: "advanced",
          desc: "VPNs create encrypted tunnels over untrusted networks. IPsec: the most widely deployed VPN framework. IKEv2 (Phase 1) negotiates the security association (SA) — authentication (certificates or PSK), encryption algorithm, key exchange (Diffie-Hellman). IPsec (Phase 2) protects data via ESP (Encapsulating Security Payload — encryption + integrity). Tunnel mode wraps the entire IP packet; transport mode only protects the payload. WireGuard: modern, simpler VPN protocol with Curve25519 keys, ChaCha20 encryption, and the cleanest codebase of any VPN — ~4,000 lines vs OpenVPN's 100,000+. OpenVPN: SSL/TLS-based, configurable, works over TCP or UDP, widely compatible. Remote access vs site-to-site. Split tunneling vs full tunneling tradeoffs.",
          master: [
            "Explain IKEv2 Phase 1 and Phase 2 negotiations and what each establishes",
            "Understand Diffie-Hellman key exchange and why it achieves forward secrecy",
            "Compare WireGuard vs OpenVPN vs IPsec: tradeoffs in security, speed, and complexity",
            "Configure a WireGuard site-to-site VPN between two Linux routers",
            "Understand the difference between AH (deprecated) and ESP in IPsec",
            "Explain split tunneling and the security implications of enabling it",
            "Configure DMVPN Phase 2 for spoke-to-spoke VPN without hairpinning through the hub"
          ],
          res: [
            "WireGuard paper: Fast, Modern, Secure VPN Tunnel (Donenfeld 2017)",
            "IPsec RFCs: 4301 (architecture), 4303 (ESP), 7296 (IKEv2)",
            "OpenVPN documentation and cookbook",
            "DMVPN Technology and Design Guide (Cisco)"
          ]
        }
      ]
    },
    {
      name: "Cloud Networking and SDN",
      level: "advanced",
      tagline: "Networking in the cloud era",
      desc: "The cloud has fundamentally changed networking. Physical topology is abstracted into software. Virtual Private Clouds (VPCs), software-defined networking (SDN), VXLAN overlays, and network automation are now core skills for network engineers. Physical routers and switches still exist, but they are increasingly programmed rather than manually configured.",
      topics: [
        {
          name: "Cloud Networking Fundamentals",
          tag: "advanced",
          desc: "Virtual Private Cloud (VPC): a logically isolated network within a cloud provider's infrastructure. Subnets (public vs private), route tables, Internet Gateways, NAT Gateways, security groups (stateful, instance-level firewall), and Network ACLs (stateless, subnet-level). AWS-specific: VPC peering (non-transitive), Transit Gateway (hub for multiple VPCs), PrivateLink (private access to services), Direct Connect (dedicated WAN link). GCP: VPC is global (spans all regions), shared VPC, Cloud Interconnect. Azure: VNets, VNet Peering, ExpressRoute, NSGs. Multi-cloud connectivity: SD-WAN. Load balancing: Layer 4 (NLB, pass-through) vs Layer 7 (ALB, content-aware). Service meshes (Istio, Linkerd) for microservice networking.",
          master: [
            "Design a three-tier VPC with public, private, and data subnets across multiple AZs",
            "Explain the difference between security groups (stateful) and NACLs (stateless)",
            "Understand VPC peering limitations — why it is not transitive",
            "Configure AWS Transit Gateway to connect multiple VPCs in a hub-spoke topology",
            "Explain the difference between Layer 4 and Layer 7 load balancers",
            "Design a multi-region active-active architecture with global load balancing",
            "Understand PrivateLink and why it avoids exposing traffic to the public internet"
          ],
          res: [
            "AWS Networking Fundamentals (AWS skill builder — free)",
            "Google Cloud Networking documentation",
            "Cloud Networking Concepts for Traditional Network Engineers (AWS whitepaper)",
            "The Cloud Networking Architecture (Microsoft Azure well-architected framework)"
          ]
        },
        {
          name: "VXLAN and Overlay Networks",
          tag: "advanced",
          desc: "VXLAN (Virtual Extensible LAN) extends Layer 2 networks over Layer 3 infrastructure by encapsulating Ethernet frames in UDP packets. The VXLAN Network Identifier (VNI) is 24 bits, supporting ~16 million virtual networks (vs 4,094 VLANs). VTEP (VXLAN Tunnel Endpoint): the device that encapsulates/de-encapsulates VXLAN traffic. BGP EVPN (Ethernet VPN): uses BGP to distribute MAC/IP information between VTEPs, replacing flood-and-learn. Route types: Type 2 (MAC/IP advertisement), Type 3 (multicast group), Type 5 (IP prefix). Anycast gateway: all leaf switches share the same virtual gateway MAC/IP so hosts can default-route to any leaf. This is the standard architecture for modern data center fabrics.",
          master: [
            "Explain why VXLAN was created — what problem does it solve over VLANs?",
            "Understand VXLAN encapsulation: VXLAN header + UDP header added to the Ethernet frame",
            "Explain how BGP EVPN replaces VXLAN flood-and-learn for MAC/IP distribution",
            "Understand EVPN Type 2 and Type 5 routes and what each advertises",
            "Configure a simple VXLAN network between two Linux hosts using ip-link commands",
            "Explain the anycast gateway concept and how it enables optimal forwarding",
            "Troubleshoot VXLAN: check VTEP reachability, VNI consistency, and ARP suppression"
          ],
          res: [
            "RFC 7348 (VXLAN specification)",
            "RFC 7432 (BGP MPLS-Based Ethernet VPN — BGP EVPN base)",
            "FRRouting EVPN Documentation",
            "Cumulus Networks EVPN-VXLAN Design Guide (free)"
          ]
        },
        {
          name: "Network Automation",
          tag: "advanced",
          desc: "Manual configuration of hundreds of devices is error-prone and slow. Network automation uses code to configure, validate, and monitor networks. Python is the primary language: Netmiko (SSH connections to network devices), NAPALM (multi-vendor network automation), Nornir (parallel task execution). Ansible for network: playbooks with ios_config, junos_config, eos_config modules. NETCONF (RFC 6241) and RESTCONF (RFC 8040) are model-driven protocols. YANG data models define the schema for configuration and operational data. Infrastructure as Code (IaC): version control all configurations in Git. CI/CD for networks: automated testing (Batfish for configuration validation, pytest-network) before deploying changes. NetBox as the source of truth for network inventory.",
          master: [
            "Write an Ansible playbook to push OSPF configuration to 10 routers simultaneously",
            "Use Netmiko to SSH into a device, collect show commands, and parse structured output",
            "Implement automated config backups to Git with timestamps on a schedule",
            "Use Batfish to validate that an ACL change does not block critical services",
            "Understand YANG models: browse a device's YANG schema with pyang",
            "Design a GitOps workflow: changes to Git trigger pipeline that validates and deploys",
            "Build a network inventory system in NetBox and use it as an Ansible dynamic inventory"
          ],
          res: [
            "Network Programmability and Automation (O'Reilly — Kirk Byers et al.)",
            "Ansible Network Automation documentation",
            "Batfish: Network Configuration Analysis (batfish.org)",
            "NetBox Documentation (netbox.dev)"
          ]
        }
      ]
    },
    {
      name: "Advanced Routing and Data Center",
      level: "expert",
      tagline: "High-performance, large-scale network architectures",
      desc: "Enterprise and data center networking at scale. MPLS for traffic engineering and VPN services, modern data center Clos fabrics, and QoS for guaranteeing performance. This is where networking becomes a systems engineering discipline.",
      topics: [
        {
          name: "MPLS and Traffic Engineering",
          tag: "advanced",
          desc: "MPLS (Multiprotocol Label Switching) forwards packets based on short fixed-length labels rather than IP addresses, enabling much faster forwarding and powerful traffic engineering. Label Distribution Protocol (LDP) distributes labels for destinations. RSVP-TE reserves bandwidth along explicit paths for traffic engineering. MPLS L3 VPN: each customer gets a VRF (Virtual Routing and Forwarding instance) on the PE router, isolating their routing table. Route Distinguisher (RD) makes routes unique in the BGP table; Route Target (RT) controls route import/export between VRFs. MPLS L2 VPN (VPWS, VPLS): carry Layer 2 frames over MPLS. Segment Routing (SR-MPLS, SRv6): source-routing where the path is encoded in the packet header — no per-flow state in the network.",
          master: [
            "Explain the difference between IP routing (per-hop lookup) and MPLS (label swapping)",
            "Configure MPLS L3 VPN: PE-CE routing, VRF definition, RD and RT assignment",
            "Understand how the MPLS label stack enables both VPNs and TE simultaneously",
            "Explain Segment Routing and why it eliminates the need for LDP and RSVP-TE",
            "Understand TI-LFA (Topology Independent Loop-Free Alternate) for fast reroute",
            "Compare MPLS with SD-WAN for enterprise WAN connectivity",
            "Explain how traffic engineering avoids congested links that SPF would route through"
          ],
          res: [
            "MPLS Fundamentals (Luc De Ghein — clear and practical)",
            "Segment Routing (Clarence Filsfils et al. — Cisco Press)",
            "RFC 8402 (Segment Routing Architecture)",
            "MPLS: Technology and Applications (Davie & Farrel)"
          ]
        },
        {
          name: "Data Center Fabric Design",
          tag: "expert",
          desc: "Modern data centers use spine-leaf (Clos) topology instead of traditional three-tier (core-distribution-access). Every leaf connects to every spine — creating a non-blocking, predictable latency fabric. ECMP (Equal-Cost Multi-Path) load balances across all spine uplinks simultaneously. BGP is used as the underlay routing protocol because it scales to thousands of devices. MLAG (Multi-chassis LAG) provides redundancy at the server level. The overlay (VXLAN BGP EVPN) provides tenant isolation and Layer 2 extension. Platforms: Arista EOS, Cisco ACI (policy-based), Juniper QFX, open-source Cumulus Linux. Disaggregation: separating hardware from software (white-box switching). SONiC (Software for Open Networking in the Cloud): Microsoft's open-source NOS now used by major hyperscalers.",
          master: [
            "Design a two-tier Clos fabric for 400 servers with full redundancy and calculate oversubscription",
            "Explain why spine-leaf provides predictable latency that three-tier cannot",
            "Configure eBGP underlay with unique ASNs on every leaf for ECMP routing",
            "Understand MLAG: how two switches appear as one to the downstream device",
            "Deploy VXLAN BGP EVPN on top of the BGP underlay",
            "Explain Cisco ACI's policy model: EPGs, contracts, and the policy-centric approach",
            "Understand SONiC's containerized architecture and why hyperscalers chose it"
          ],
          res: [
            "Data Center Spine and Leaf Architecture (Cisco White Paper)",
            "BGP in the Data Center (Dinesh Dutt — free O'Reilly ebook)",
            "Arista Campus Fabric Design Guide",
            "SONiC documentation (github.com/Azure/SONiC)"
          ]
        },
        {
          name: "QoS and Network Performance",
          tag: "expert",
          desc: "Quality of Service ensures critical traffic gets preferential treatment. Classification: mark packets with DSCP (DiffServ Code Point, 6 bits) or 802.1p (3 bits in 802.1Q VLAN tag). Queuing: FIFO (no QoS), PQ (Priority Queue — strict priority can starve), WFQ (Weighted Fair Queuing), CBWFQ (Class-Based WFQ with guaranteed bandwidth per class), LLQ (Low Latency Queuing — priority queue for voice + CBWFQ for data). Shaping vs policing: shaping buffers excess traffic to enforce a rate limit smoothly; policing drops excess traffic immediately. WRED (Weighted Random Early Detection) drops packets before queues fill to prevent TCP synchronization. VoIP QoS: voice needs < 150ms latency, < 1% packet loss, < 30ms jitter.",
          master: [
            "Explain the DSCP marking for Expedited Forwarding (EF) and Assured Forwarding (AF)",
            "Configure a 3-class QoS policy: voice (LLQ), business data (CBWFQ 30%), default (CBWFQ remaining)",
            "Understand the difference between traffic shaping (buffers) and policing (drops)",
            "Explain WRED and why it prevents global TCP synchronization",
            "Design a QoS policy for a network carrying voice, video conferencing, and data",
            "Explain why QoS matters more on WAN links than LAN links (bottleneck bandwidth)",
            "Understand MOS (Mean Opinion Score) for voice quality measurement"
          ],
          res: [
            "End-to-End QoS Network Design (Tim Szigeti et al. — Cisco Press)",
            "RFC 2474 (DiffServ field definition)",
            "RFC 2598 (Expedited Forwarding PHB for voice)",
            "Cisco QoS Design Guide"
          ]
        }
      ]
    },
    {
      name: "Network Monitoring and Operations",
      level: "expert",
      tagline: "Observability, performance, and reliability at scale",
      desc: "A network you cannot observe is a network you cannot operate. This final phase covers the tooling, methodologies, and practices for running networks reliably at scale — from monitoring and telemetry to incident response and capacity planning.",
      topics: [
        {
          name: "Network Monitoring and Observability",
          tag: "advanced",
          desc: "SNMP (Simple Network Management Protocol): MIBs (Management Information Base) define what can be queried (interface counters, CPU utilization, memory). SNMP v3 adds authentication and encryption (v1/v2c use community strings in cleartext). Streaming telemetry (YANG push / gRPC): replaces SNMP polling with push-based models for sub-second visibility. NetFlow/IPFIX: routers export sampled flow records (source/destination IP, port, bytes, packets) to a collector. Useful for traffic analysis, capacity planning, and detecting anomalies. sFlow: alternative, samples packets at the data plane. Prometheus + Grafana: modern monitoring stack. SNMP exporter for Prometheus. Alertmanager for notifications. Full-stack observability: metrics, logs, traces.",
          master: [
            "Deploy Prometheus and Grafana to monitor network device SNMP metrics",
            "Configure NetFlow export from a router and analyze top talkers with ntopng",
            "Use streaming telemetry to get interface counters at 10-second intervals",
            "Write a Prometheus alert rule for interface utilization exceeding 80%",
            "Understand the difference between polling (SNMP) and streaming telemetry",
            "Use Grafana dashboards to visualize BGP peer state changes over time",
            "Implement distributed tracing across a network path using OpenTelemetry"
          ],
          res: [
            "The Practice of Network Security Monitoring (Bejtlich)",
            "Prometheus and Grafana documentation",
            "RFC 7011 (IPFIX specification)",
            "Network Telemetry with OpenConfig (Cisco DevNet free learning lab)"
          ]
        },
        {
          name: "IDS/IPS and Network Threat Detection",
          tag: "advanced",
          desc: "Intrusion Detection Systems (IDS) passively monitor traffic and alert on suspicious patterns. Intrusion Prevention Systems (IPS) are inline and can drop malicious traffic. Signature-based: Snort and Suricata match packets against known attack signatures — fast but miss zero-days. Anomaly-based: baseline normal behavior and alert on deviations — more false positives. Zeek (formerly Bro): a network analysis framework that extracts metadata about connections, HTTP, DNS, SSL — enables complex behavioral queries. SIEM (Security Information and Event Management): centralizes logs and alerts from all devices. Elk Stack (Elasticsearch, Logstash, Kibana) or Splunk. Network Detection and Response (NDR): modern ML-based threat detection (Darktrace, Vectra, ExtraHop).",
          master: [
            "Install Suricata and write a custom rule to detect a specific scan pattern",
            "Configure Zeek to log all DNS queries and HTTP requests to a central server",
            "Build an ELK stack pipeline ingesting firewall and IDS logs",
            "Detect C2 beaconing by analyzing Zeek connection logs for periodic connection attempts",
            "Understand the difference between inline IPS and out-of-band IDS placement",
            "Perform a PCAP analysis to identify lateral movement indicators",
            "Explain the diamond model of intrusion analysis for structuring threat investigations"
          ],
          res: [
            "The Practice of Network Security Monitoring (Bejtlich — required reading)",
            "Zeek (zeek.org) documentation and scripting guide",
            "Suricata User Guide",
            "Applied Network Security Monitoring (Sanders & Smith)"
          ]
        },
        {
          name: "Capacity Planning and Network Design",
          tag: "expert",
          desc: "Networks fail when capacity planning is wrong. Measure: collect interface utilization, packet rates, error counters, and latency over long periods. Model: understand growth trends, seasonal patterns, and the impact of new applications. Plan: upgrade links before they hit 70-80% utilization (queuing at 80% causes significant latency). Network design principles: build for failure (redundancy at every layer), design for manageability (consistent addressing and naming), document everything. Disaster recovery: RPO (Recovery Point Objective) and RTO (Recovery Time Objective). Failover technologies: HSRP/VRRP for gateway redundancy, BFD (Bidirectional Forwarding Detection) for fast failure detection (sub-second vs OSPF/BGP keepalive timers). Change management: validated rollback procedures, maintenance windows, peer review.",
          master: [
            "Perform a capacity analysis for a WAN link using 95th percentile utilization data",
            "Design a high availability architecture for a data center with RPO=0 and RTO < 30 seconds",
            "Configure BFD with OSPF to achieve sub-second failure detection",
            "Understand HSRP vs VRRP vs GLBP for first-hop redundancy",
            "Design an addressing and VLAN scheme that scales to 50 office locations",
            "Write a network design document with topology, addressing plan, and security design",
            "Conduct a post-incident analysis after a network outage using structured methodology"
          ],
          res: [
            "Network Design Cookbook (Cisco Press)",
            "The Practice of Cloud System Administration (Limoncelli et al.)",
            "ITIL Foundation: IT Service Management concepts",
            "Visible Ops Handbook (Kim, Behr, Spafford — change management for infrastructure)"
          ]
        }
      ]
    }
  ]
};