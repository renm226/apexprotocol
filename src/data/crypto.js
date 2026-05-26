export const cryptoData = {
  name: "BLOCKCHAIN & WEB3",
  area: "crypto",
  eyebrow: "Cryptography · Bitcoin · Ethereum · Smart Contracts · DeFi · Smart Contract Security",
  sub: "Most people learn blockchain by writing token contracts and calling it done. That produces developers who can deploy an ERC-20 but cannot explain why a 51% attack works, why the EVM has gas, or why a flash loan is possible. This roadmap starts with the cryptographic primitives that make blockchains possible and builds to the level where you can read a DeFi protocol's code and understand its attack surface.",
  phases: [
    {
      name: "Cryptographic Foundations",
      level: "foundation",
      tagline: "Digital signatures and hash functions are the entire foundation",
      desc: "A blockchain is a data structure secured by cryptography. Before you can understand why it is secure — or why it is not — you need to understand the cryptographic primitives it uses. This is not optional background reading. Without understanding hash functions and digital signatures, every blockchain concept you encounter will be a magic box that you use without comprehending.",
      topics: [
        {
          name: "Cryptographic Hash Functions",
          tag: "core",
          desc: "A cryptographic hash function takes arbitrary input and produces a fixed-size output (digest). The properties that make it useful: deterministic (same input always produces same output), preimage resistant (given the hash, you cannot find the input), second-preimage resistant (given an input and its hash, you cannot find a different input with the same hash), collision resistant (you cannot find any two inputs with the same hash), and avalanche effect (a single bit change in the input completely changes the output). SHA-256 (used in Bitcoin) produces a 256-bit output. Keccak-256 (used in Ethereum) is a variant of SHA-3. These properties together make hash functions useful for: proving you know a value without revealing it (commit-reveal), detecting tampering (hash the file, publish the hash — any change in the file changes the hash), and proof of work (find an input whose hash starts with N zeros — computationally expensive to produce, trivially cheap to verify). Merkle trees use hashing to efficiently verify that a specific transaction is in a block without downloading the full block: hash pairs of transactions, hash pairs of hashes, repeat until you have one root hash.",
          master: [
            "Explain the five properties of a cryptographic hash function with a concrete example of what each property prevents",
            "Explain how proof of work uses hash functions: what the miner is searching for and why it is hard",
            "Describe a Merkle tree: how it is constructed and how it enables efficient inclusion proofs",
            "Explain the commit-reveal pattern: what problem it solves and where it is used in blockchain protocols",
            "Describe the birthday attack on hash functions: why collision resistance requires a larger output than preimage resistance",
            "Explain why SHA-256 is appropriate for Bitcoin's proof of work and what would happen if SHA-256 were broken"
          ],
          res: [
            "Practical Cryptography for Developers (cryptobook.nakov.com) — free, practical, blockchain-oriented",
            "Introduction to Modern Cryptography (Katz and Lindell) — rigorous academic treatment",
            "SHA-256 explained (sha256algorithm.com) — step-by-step algorithm walkthrough",
            "Bitcoin Developer Guide (developer.bitcoin.org) — how cryptographic primitives are used in Bitcoin"
          ]
        },
        {
          name: "Public Key Cryptography and Digital Signatures",
          tag: "core",
          desc: "Public key cryptography uses a mathematically linked key pair: the private key is kept secret, the public key is shared freely. ECDSA (Elliptic Curve Digital Signature Algorithm) is the signature algorithm used in both Bitcoin and Ethereum, over the secp256k1 curve. To sign: produce a hash of the message, use the private key and a random nonce to compute the signature (r, s values). To verify: use the public key, the message hash, and the signature to verify that the signature was produced by the holder of the private key. Critical failure mode: if the same nonce is used twice with the same private key, the private key can be derived mathematically. This is how the PlayStation 3 private key was extracted. Bitcoin and Ethereum addresses are derived from public keys: take the public key, hash it with SHA-256 then RIPEMD-160 (Bitcoin) or Keccak-256 (Ethereum), apply a checksum. The private key is the only thing that proves ownership — there is no account recovery, no password reset. Lose the private key and the funds are gone.",
          master: [
            "Explain ECDSA signature generation and verification at a conceptual level — what the signing and verification operations are doing",
            "Explain why nonce reuse in ECDSA leaks the private key — describe the attack",
            "Describe how an Ethereum address is derived from a private key, step by step",
            "Explain hierarchical deterministic wallets (BIP32): how a seed phrase generates a tree of key pairs",
            "Explain what a brain wallet is and why it is cryptographically dangerous",
            "Describe the difference between hot wallets and cold storage and the attack surface each is exposed to"
          ],
          res: [
            "Mastering Bitcoin (Andreas Antonopoulos) — free online, Chapters 4–6 on keys and addresses",
            "Practical Cryptography for Developers — elliptic curve cryptography section",
            "BIP32 specification — HD wallet derivation",
            "evm.codes — useful for understanding Ethereum at the opcode level"
          ]
        }
      ]
    },
    {
      name: "Bitcoin and Blockchain Fundamentals",
      level: "foundation",
      tagline: "Bitcoin solved a problem that nobody believed could be solved",
      desc: "The Byzantine Generals Problem asks how distributed actors who cannot trust each other can reach consensus on a common state in the presence of adversaries. Bitcoin solved it for the first time in a practical system. Understanding how it works — at the protocol level, not the narrative level — is the foundation for understanding every other blockchain.",
      topics: [
        {
          name: "The Bitcoin Protocol",
          tag: "core",
          desc: "Bitcoin is a chain of blocks, where each block contains a list of transactions and a hash of the previous block. Changing any past transaction requires recalculating the proof of work for every subsequent block — computationally infeasible given the current network hash rate. Proof of work consensus: miners compete to find a nonce such that the block header hash is below the target (starts with N zeros). The difficulty adjusts every 2016 blocks to maintain a 10-minute block time. Longest chain rule: the chain with the most accumulated proof of work is the valid chain — this resolves forks where multiple miners find a valid block simultaneously. UTXO model: unspent transaction outputs are the unit of value. A transaction consumes UTXOs as inputs and produces new UTXOs as outputs. There is no account balance — your balance is the sum of all UTXOs assigned to your addresses. The transaction fee is the difference between inputs and outputs — miners collect fees as incentive. A 51% attack: controlling more than half the network hash rate allows double-spending but does not allow stealing from other wallets (private keys remain secure).",
          master: [
            "Explain the chain of block headers: what links each block to the previous and why changing past data is expensive",
            "Describe the proof of work mining process: what miners are computing and why difficulty adjustment maintains the 10-minute target",
            "Explain the UTXO model: how a transaction consumes inputs and creates outputs, and how change works",
            "Explain a 51% attack: what it enables, what it does not enable, and what it costs at current network hash rate",
            "Describe the mempool: what it contains, how fees affect priority, and what happens during congestion",
            "Explain the halving: what it is, what it does to miner economics, and what it means for Bitcoin's long-term security model"
          ],
          res: [
            "Bitcoin Whitepaper (Satoshi Nakamoto) — read it, it is nine pages",
            "Mastering Bitcoin (Andreas Antonopoulos) — free online, the essential technical reference",
            "Bitcoin Developer Documentation (developer.bitcoin.org) — precise protocol descriptions",
            "learn-me-a-bitcoin (learnmeabitcoin.com) — visual explanations of Bitcoin internals"
          ]
        },
        {
          name: "Consensus Mechanisms",
          tag: "intermediate",
          desc: "Proof of Work provides security through energy expenditure — attacking the chain requires more computation than defending it. The security is proportional to the hash rate, which is proportional to the electricity cost. This is a feature, not a bug: the attack must destroy real-world resources. Proof of Stake replaces energy expenditure with economic stake. Validators lock up tokens as collateral; if they validate fraudulent blocks, their stake is slashed. Ethereum's Casper uses a finality gadget on top of its LMD-GHOST fork choice rule. The security assumption changes: instead of needing 51% of hash rate, you need 33% of staked ETH to compromise liveness or 66% to compromise safety. Delegated Proof of Stake (DPOS) elects a fixed set of block producers via token-weighted voting — faster finality but more centralized. Nakamoto consensus (Bitcoin's longest-chain rule) has probabilistic finality: a transaction with 6 confirmations is considered final because the probability of a reorg deep enough to reverse it is negligible, not zero. Tendermint-style consensus (used in Cosmos) has instant finality: a block is final as soon as 2/3 of validators have signed it — no reorgs, but the network halts under network partitions.",
          master: [
            "Explain Proof of Work security: why an attacker needs 51% hash rate and what they can do with it",
            "Describe Proof of Stake slashing: what behavior it penalizes and how it replaces the energy cost of PoW",
            "Explain the difference between probabilistic finality (Nakamoto consensus) and deterministic finality (Tendermint)",
            "Describe the nothing-at-stake problem in naive Proof of Stake and how slashing addresses it",
            "Explain the long-range attack in Proof of Stake and the mitigations used",
            "Compare the centralization risks in PoW (mining pools), PoS (large validators), and DPoS (elected producers)"
          ],
          res: [
            "Mastering Ethereum (Antonopoulos, Wood) — Chapters on consensus, free online",
            "Ethereum's Proof of Stake documentation (ethereum.org/pos) — current consensus mechanism",
            "Tendermint consensus documentation — Byzantine fault tolerant consensus",
            "On the Economics of Proof of Work and Proof of Stake (research papers) — economic security analysis"
          ]
        }
      ]
    },
    {
      name: "Ethereum and Smart Contracts",
      level: "intermediate",
      tagline: "Programmable money on a shared computer that nobody controls",
      desc: "Ethereum extended Bitcoin by adding a Turing-complete virtual machine. Any computation can be encoded as a smart contract — a program that lives on the blockchain, executes deterministically on every node, and can hold and transfer value. The gas mechanism exists to prevent infinite loops from halting the network. Every instruction costs gas; every block has a gas limit; transactions that exceed the limit are reverted but still cost gas.",
      topics: [
        {
          name: "The EVM and Solidity",
          tag: "core",
          desc: "The Ethereum Virtual Machine is a stack-based virtual machine. Instructions operate on a stack of 256-bit words. Storage is a key-value map of 256-bit slots that persists between transactions — it is the most expensive resource in the EVM. Memory is a byte array that is erased after each transaction. Calldata is read-only input data from the transaction. Gas: every opcode has a fixed gas cost. SSTORE (write to storage) is among the most expensive operations. Computationally intensive operations cost more gas. The gas limit per transaction is set by the sender; if the transaction runs out of gas, it reverts but the gas is consumed. Solidity is a statically-typed, compiled language that generates EVM bytecode. Important Solidity concepts: visibility (public, internal, private, external), state mutability (view, pure), payable functions that can receive ETH, events that emit data to transaction logs (not stored on-chain, used by frontends and indexers), custom errors (cheaper than revert strings), and the fallback/receive functions for handling plain ETH transfers.",
          master: [
            "Explain the EVM execution model: stack, memory, storage, and calldata — how each is used and what each costs",
            "Explain gas: why it exists, how the gas limit and gas price interact, and what happens when a transaction runs out of gas",
            "Describe the difference between storage and memory in Solidity: lifetime, cost, and when to use each",
            "Write a Solidity contract with proper visibility modifiers, events, and custom errors",
            "Explain the ABI (Application Binary Interface): how function calls are encoded and how return values are decoded",
            "Explain the difference between call, delegatecall, and staticcall — what each does and when each is used"
          ],
          res: [
            "Mastering Ethereum (Antonopoulos, Wood) — free online, comprehensive EVM and Solidity coverage",
            "Solidity documentation (docs.soliditylang.org) — the authoritative reference",
            "CryptoZombies (cryptozombies.io) — interactive Solidity tutorial, good starting point",
            "evm.codes — every opcode with description, gas cost, and stack behavior"
          ]
        },
        {
          name: "Token Standards and Contract Patterns",
          tag: "intermediate",
          desc: "Token standards are interfaces that allow contracts to interact without knowing each other's implementations. ERC-20 defines fungible tokens: balanceOf, transfer, transferFrom, approve, allowance. The approve/transferFrom pattern requires two transactions to authorize a DEX to spend your tokens — a UX problem that has led to many bugs where users approve unlimited allowances. ERC-721 defines non-fungible tokens: each token has a unique tokenId, ownerOf returns the current owner, transferFrom moves ownership. ERC-1155 is a multi-token standard supporting both fungible and non-fungible tokens in a single contract. Proxy patterns allow upgradeable contracts: the proxy holds state and delegates all calls to an implementation contract. The transparent proxy pattern and the UUPS pattern differ in where the upgrade logic lives. OpenZeppelin is the standard library for Solidity development — use their audited implementations for tokens, access control, and common patterns. Writing your own token from scratch is an interview exercise, not production practice.",
          master: [
            "Explain the ERC-20 approve/transferFrom pattern: what it enables and why it creates allowance risks",
            "Describe the ERC-721 standard: what ownerOf and tokenId mean and how NFT marketplaces use these",
            "Explain the delegatecall proxy pattern: how it enables upgradeable contracts and what storage collision means",
            "Describe the difference between transparent proxy and UUPS proxy patterns",
            "Explain why using OpenZeppelin's audited contracts is the correct production practice",
            "Describe the access control patterns in Solidity: Ownable, RBAC, and when each is appropriate"
          ],
          res: [
            "OpenZeppelin documentation (docs.openzeppelin.com) — the standard library, read the security notes",
            "EIPs repository (eips.ethereum.org) — read ERC-20, ERC-721, and ERC-1155 original proposals",
            "ERC-20 EIP-20 technical details — the original interface specification",
            "OpenZeppelin Upgrades Plugins documentation — proxy upgrade patterns"
          ]
        }
      ]
    },
    {
      name: "DeFi Protocols",
      level: "advanced",
      tagline: "Financial primitives with no intermediaries and no off switch",
      desc: "DeFi (Decentralized Finance) replaces financial intermediaries with smart contracts. Decentralized exchanges, lending protocols, stablecoins, and yield aggregators collectively manage hundreds of billions of dollars. Understanding how they work is inseparable from understanding how they fail — the most significant protocol exploits in blockchain history came from attackers who understood the mechanics more carefully than the developers who built them.",
      topics: [
        {
          name: "AMMs, DEXes, and Liquidity",
          tag: "advanced",
          desc: "Automated Market Makers replaced the order book model with a pricing formula. Uniswap V2 uses the constant product formula: x × y = k, where x and y are the reserves of two tokens. Price is derived from the ratio of reserves — buying one token decreases its supply, increasing its price. Liquidity providers deposit both tokens and receive LP tokens representing their share. Impermanent loss: if the price ratio of the two tokens changes after deposit, the LP would have been better off just holding the tokens — the loss is 'impermanent' because it disappears if prices return to the original ratio. Uniswap V3 introduced concentrated liquidity: LPs specify a price range for their liquidity rather than providing it uniformly across all prices. This allows much higher capital efficiency but requires active management. Slippage: the difference between expected price and execution price, caused by the impact of the trade on the reserves. MEV (Maximal Extractable Value): miners and validators can reorder transactions within a block. Sandwich attacks extract MEV by front-running a large trade, executing it, and back-running to sell the purchased tokens at a profit.",
          master: [
            "Explain the constant product formula: how x × y = k determines price and what happens to price as a trade is executed",
            "Calculate impermanent loss for a specific price ratio change and explain why LPs still provide liquidity despite IL",
            "Explain Uniswap V3 concentrated liquidity: what it enables and what the management requirement is",
            "Describe a sandwich attack: the three transactions involved and how MEV bots automate it",
            "Explain price oracle manipulation: how a flash loan can briefly manipulate an AMM price and why this is an attack vector",
            "Describe slippage tolerance: why it exists and the trade-off between setting it too low and too high"
          ],
          res: [
            "Uniswap V2 whitepaper (uniswap.org) — read the original",
            "Uniswap V3 whitepaper — concentrated liquidity mechanics",
            "Ethereum Beige Paper — EVM and protocol mechanics",
            "Finematics (finematics.com) — video explanations of DeFi mechanics, consistently accurate"
          ]
        },
        {
          name: "Lending Protocols and Stablecoins",
          tag: "advanced",
          desc: "Lending protocols (Aave, Compound) allow over-collateralized borrowing: deposit one asset as collateral, borrow a smaller value of another. The health factor tracks the ratio of collateral to debt — when it falls below 1, the position is liquidatable. Liquidators pay back part of the debt and receive the collateral at a discount. Interest rates are algorithmic: utilization rate (borrowed / available) drives rates up when the pool is heavily used, incentivizing deposits and discouraging borrowing until equilibrium. Flash loans: borrow any amount from a lending protocol, execute arbitrary logic, repay in the same transaction — if repayment fails, the entire transaction reverts. Flash loans have zero credit risk for the protocol but have been used as attack vectors to amplify capital in exploits. Stablecoins: fiat-backed (USDC, USDT — redeemable for dollars held in bank accounts, centralized), over-collateralized (DAI — backed by crypto collateral at 150%+, maintained by the MakerDAO governance), and algorithmic (Terra LUNA — maintained by seigniorage mechanics, collapsed in 2022 demonstrating the fragility of reflexive designs).",
          master: [
            "Explain over-collateralization in lending: why it is required, what the health factor is, and how liquidation works",
            "Describe how algorithmic interest rates work in Aave/Compound: utilization curve, supply/borrow rate relationship",
            "Explain flash loans: what they enable, how they work atomically, and why they are legitimate as well as dangerous",
            "Describe the DAI stablecoin mechanism: how collateral is managed, how the peg is maintained, and what happens in undercollateralization",
            "Explain the Terra LUNA collapse mechanically: the death spiral that made the algorithmic peg unstable",
            "Describe a price oracle attack on a lending protocol: how an AMM-based oracle can be manipulated and what the consequences are"
          ],
          res: [
            "Aave Protocol Whitepaper (aave.com) — how lending pools work",
            "MakerDAO documentation (makerdao.com) — DAI and the collateralized debt position system",
            "Rekt.news — every major DeFi exploit explained technically",
            "DeFi Mooc (Berkeley, free online) — academic treatment of DeFi mechanics"
          ]
        }
      ]
    },
    {
      name: "Smart Contract Security",
      level: "advanced",
      tagline: "Code that cannot be changed must be correct before deployment",
      desc: "Smart contracts are immutable once deployed. There is no patch, no hotfix, no rollback — only a migration to a new contract, which requires user trust and is often not possible for DeFi protocols where users' funds are locked. This constraint demands a different level of rigor than normal software development. The history of DeFi exploits is a catalog of assumptions that seemed safe but were not.",
      topics: [
        {
          name: "Common Vulnerabilities and Attack Patterns",
          tag: "advanced",
          desc: "Reentrancy: a function sends ETH to an external address before updating its state. The receiving address is a contract whose fallback function calls back into the original contract before the state update completes. The DAO hack (2016, $60M) was a reentrancy attack. The fix: use the checks-effects-interactions pattern (update state first, then interact with external contracts) and/or a reentrancy guard mutex. Integer overflow/underflow: before Solidity 0.8.0, arithmetic did not revert on overflow — adding 1 to the maximum uint256 would wrap around to 0. Use SafeMath (pre-0.8) or rely on Solidity 0.8.0+ built-in overflow checking. Access control: missing onlyOwner or role checks on privileged functions. Front-running: an attacker sees your pending transaction in the mempool and submits one with a higher gas price to execute first. This affects DEX trades (sandwich attacks) and commit-reveal schemes. Signature replay: a signature valid for one contract or chain ID is reused on another. EIP-712 and nonces prevent this. Delegate call to untrusted code: delegatecall runs code in the calling contract's storage context — if the called code is malicious or manipulated, it can overwrite arbitrary storage.",
          master: [
            "Explain reentrancy at the EVM level: what happens during the ETH transfer call and why state update order matters",
            "Implement a reentrancy guard and explain why it is a sufficient fix even without the checks-effects-interactions pattern",
            "Describe integer overflow: how it worked in Solidity <0.8.0 and what changed in 0.8.0",
            "Explain signature replay attacks: what EIP-712 standardizes and how a nonce prevents replay",
            "Describe the delegatecall vulnerability: how storage layout mismatches between proxy and implementation cause corruption",
            "Explain front-running: how MEV searchers monitor the mempool and what commit-reveal does to prevent it"
          ],
          res: [
            "SWC Registry (swcregistry.io) — Smart Contract Weakness Classification, every known vulnerability type",
            "Ethernaut (ethernaut.openzeppelin.com) — 20 progressively harder Solidity security challenges",
            "Damn Vulnerable DeFi (damnvulnerabledefi.xyz) — DeFi-specific security challenges",
            "Rekt.news — real exploit post-mortems, most technically detailed available"
          ]
        },
        {
          name: "Auditing and Formal Verification",
          tag: "expert",
          desc: "A smart contract audit is a systematic review of contract code for security vulnerabilities before deployment. The audit process: automated analysis (Slither, MythX), manual code review by security researchers, fuzz testing to find unexpected inputs, and economic analysis of incentive design. Slither is the primary static analyzer — it detects common vulnerability patterns, incorrect access control, and dangerous code patterns with low false positive rates. Echidna is a property-based fuzzer: you define invariants (properties that must always be true) and Echidna tries to find inputs that violate them. Formal verification is the highest level of assurance: mathematically prove that the contract satisfies its specification under all possible inputs. Certora Prover and K framework are the primary formal verification tools in Ethereum. An audit does not guarantee security — it reduces the probability of known vulnerability classes. Novel attack vectors and economic design flaws are often missed. Bug bounty programs provide ongoing economic incentives for researchers to find and report vulnerabilities.",
          master: [
            "Run Slither on a contract and interpret the findings — distinguish true positives from false positives",
            "Write an Echidna property test that verifies an invariant in a simple token contract",
            "Describe the audit process from initial code review to final report — what an auditor looks at in each phase",
            "Explain what formal verification proves and what it does not prove",
            "Describe the role of a bug bounty program and explain why it complements rather than replaces an audit",
            "Read a post-mortem of a real DeFi exploit and identify at what stage in the audit process it should have been caught"
          ],
          res: [
            "Trail of Bits audit reports (github.com/trailofbits/publications) — real audit findings",
            "Slither documentation (github.com/crytic/slither) — the standard static analysis tool",
            "Echidna documentation (github.com/crytic/echidna) — property-based fuzzing",
            "Security considerations in the Solidity documentation — the canonical checklist"
          ]
        }
      ]
    },
    {
      name: "Layer 2 and Scaling",
      level: "expert",
      tagline: "Ethereum base layer is expensive by design — scaling happens above it",
      desc: "Ethereum's base layer deliberately constrains throughput to preserve decentralization — every full node validates every transaction, limiting throughput to roughly 15–30 transactions per second. Layer 2 solutions execute transactions off-chain and post proofs or data to L1, inheriting its security while achieving orders of magnitude more throughput. Understanding the security assumptions of each approach is the difference between knowing what they claim and knowing whether to trust those claims.",
      topics: [
        {
          name: "Rollups: Optimistic and ZK",
          tag: "expert",
          desc: "Rollups execute transactions off-chain and post transaction data to Ethereum L1, inheriting its data availability guarantees. Optimistic rollups assume transactions are valid and rely on fraud proofs: if someone posts an invalid state transition, anyone can submit a fraud proof during the challenge window (7 days in Arbitrum and Optimism) to revert it. The 7-day withdrawal delay exists precisely because of this challenge window. ZK rollups generate a zero-knowledge validity proof for every batch of transactions — the proof mathematically guarantees that the state transition is correct without revealing the transaction details. Withdrawal from ZK rollups can be near-instant once the proof is verified on L1. Zero-knowledge proofs (ZK-SNARKs, ZK-STARKs) allow proving knowledge of a value satisfying some constraint without revealing the value. ZK-SNARKs require a trusted setup ceremony. ZK-STARKs do not require a trusted setup but produce larger proofs. The proof generation is computationally expensive — currently taking seconds to minutes per batch, which limits throughput.",
          master: [
            "Explain optimistic rollup security: what the fraud proof is, why the challenge window must be long, and the 7-day withdrawal implication",
            "Explain ZK rollup security: what validity proofs guarantee and why they enable instant finality",
            "Describe the trusted setup ceremony in ZK-SNARKs: what it produces, why it is necessary, and what happens if it is compromised",
            "Explain the difference between ZK-SNARKs and ZK-STARKs: proof size, verification cost, and trusted setup requirement",
            "Describe the data availability problem: what happens if rollup operators withhold transaction data",
            "Compare Optimism, Arbitrum, zkSync, and StarkNet on: EVM compatibility, proof type, and current throughput"
          ],
          res: [
            "An Incomplete Guide to Rollups (Vitalik Buterin blog) — the most concise technical explanation",
            "L2Beat (l2beat.com) — real-time TVL and security analysis of every L2",
            "ZK-SNARK explanation (ZKProof.org) — the academic foundation",
            "Ethereum scaling documentation (ethereum.org/scaling) — the official overview"
          ]
        }
      ]
    }
  ]
}
