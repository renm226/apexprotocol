export const cryptoData = {
  name: "BLOCKCHAIN & WEB3 DEVELOPMENT",
  area: "crypto",
  eyebrow: "Cryptographic Foundations Â· Smart Contracts Â· DeFi Â· ZK Proofs Â· Layer 2 Scaling",
  sub: "From the number theory that makes digital signatures possible to the DeFi protocols moving billions of dollars daily. This guide doesn't stop at 'how to write an ERC-20 token' â€” it goes deep into consensus mechanisms, ZK proofs, rollup architectures, and cross-chain interoperability. Build on blockchains with the understanding of someone who could also audit them.",
  phases: [
    {
      name: "Cryptographic Foundations",
      level: "foundation",
      tagline: "The math behind blockchain",
      desc: "Blockchain is applied cryptography. Master hash functions, public-key cryptography, digital signatures, and Merkle trees before touching any blockchain code.",
      topics: [
        {
          name: "Hash Functions & Cryptographic Hashing",
          tag: "core",
          desc: "Properties: deterministic, fixed output size, pre-image resistance, second pre-image resistance, collision resistance. SHA-256 (used in Bitcoin), Keccak/SHA-3 (used in Ethereum). Merkle-DamgÃ¥rd construction, sponge construction. Hash applications: commitment schemes, password storage, data integrity, Merkle trees.",
          master: [
            "Implement SHA-256 padding and compression function conceptually",
            "Explain the difference between pre-image and collision resistance",
            "Build a Merkle tree from a list of transactions and verify inclusion",
            "Understand length extension attacks on SHA-1 and SHA-2",
            "Use cryptographic hashing for data integrity verification",
            "Explain why SHA-256 is not suitable for passwords (use bcrypt/Argon2)",
            "Implement a simple proof-of-work using hash iteration"
          ],
          code: "// Merkle tree implementation in Python\nimport hashlib\n\nclass MerkleTree:\n    def __init__(self, data):\n        self.data = data\n        self.leaves = [self._hash(str(item)) for item in data]\n        self.root = self._build_tree(self.leaves)\n    \n    def _hash(self, value):\n        return hashlib.sha256(value.encode()).hexdigest()\n    \n    def _build_tree(self, nodes):\n        if len(nodes) == 1:\n            return nodes[0]\n        \n        new_level = []\n        for i in range(0, len(nodes), 2):\n            left = nodes[i]\n            right = nodes[i + 1] if i + 1 < len(nodes) else left\n            combined = left + right\n            new_level.append(self._hash(combined))\n        \n        return self._build_tree(new_level)\n    \n    def get_proof(self, index):\n        proof = []\n        nodes = self.leaves\n        idx = index\n        \n        while len(nodes) > 1:\n            if idx % 2 == 0:\n                # Node is left child, right sibling needed\n                if idx + 1 < len(nodes):\n                    proof.append(('right', nodes[idx + 1]))\n                else:\n                    proof.append(('right', nodes[idx]))\n            else:\n                # Node is right child, left sibling needed\n                proof.append(('left', nodes[idx - 1]))\n            \n            # Move to next level\n            idx = idx // 2\n            new_nodes = []\n            for i in range(0, len(nodes), 2):\n                left = nodes[i]\n                right = nodes[i + 1] if i + 1 < len(nodes) else left\n                new_nodes.append(self._hash(left + right))\n            nodes = new_nodes\n        \n        return proof\n\n# Proof of work implementation\ndef proof_of_work(block_data, difficulty=4):\n    prefix = '0' * difficulty\n    nonce = 0\n    \n    while True:\n        text = f\"{block_data}{nonce}\"\n        hash_result = hashlib.sha256(text.encode()).hexdigest()\n        if hash_result.startswith(prefix):\n            return nonce, hash_result\n        nonce += 1",
          res: [
            "Cryptography Engineering (Ferguson, Schneier)",
            "SHA-256 (FIPS 180-4) specification",
            "Merkle Tree (original patent by Ralph Merkle)",
            "Handbook of Applied Cryptography (free online)"
          ]
        },
        {
          name: "Public-Key Cryptography & ECDSA",
          tag: "core",
          desc: "Asymmetric encryption: RSA (historical, not used in modern blockchains), Elliptic Curve Cryptography (ECC) â€” used in Bitcoin and Ethereum. secp256k1 curve parameters. ECDSA (Elliptic Curve Digital Signature Algorithm): private key to public key derivation, signing (k, R, S), verification. Ed25519 (used in Solana, Cardano).",
          master: [
            "Understand elliptic curve equation: yÂ² = xÂ³ + ax + b (secp256k1: a=0, b=7)",
            "Derive a public key from a private key using scalar multiplication on the curve",
            "Explain why ECDSA uses a random nonce (k) and what happens if it's reused",
            "Implement signature verification for a given message and signature",
            "Understand the difference between secp256k1 and Ed25519",
            "Generate a Bitcoin/ Ethereum private key and derive the public key and address",
            "Explain ECDSA recovery: recovering public key from signature"
          ],
          code: "# ECDSA implementation using Python's cryptography library\nfrom cryptography.hazmat.primitives.asymmetric import ec\nfrom cryptography.hazmat.primitives import hashes\nfrom cryptography.hazmat.primitives.asymmetric.utils import (\n    decode_dss_signature, encode_dss_signature\n)\nimport secrets\n\n# Generate private key (secp256k1)\nprivate_key = ec.generate_private_key(ec.SECP256K1())\npublic_key = private_key.public_key()\n\n# Sign a message\nmessage = b\"Send 1 BTC to address 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa\"\nsignature = private_key.sign(message, ec.ECDSA(hashes.SHA256()))\n\n# Verify signature\ntry:\n    public_key.verify(signature, message, ec.ECDSA(hashes.SHA256()))\n    print(\"Signature valid!\")\nexcept:\n    print(\"Invalid signature\")\n\n# Derive Ethereum address from public key (simplified)\nimport hashlib\nfrom eth_keys import keys\n\nprivate_key_hex = secrets.token_hex(32)\nprivate_key_bytes = bytes.fromhex(private_key_hex)\neth_private_key = keys.PrivateKey(private_key_bytes)\neth_public_key = eth_private_key.public_key\n\n# Ethereum address = keccak256(public_key)[-20:]\naddress = hashlib.sha3_256(eth_public_key.to_bytes()).hexdigest()[-40:]\nprint(f\"Ethereum address: 0x{address}\")",
          res: [
            "Elliptic Curve Cryptography (Andrea Corbellini's blog series)",
            "SEC 2: Recommended Elliptic Curve Domain Parameters (secp256k1)",
            "ECDSA: The Digital Signature Algorithm of Bitcoin (Andreas Antonopoulos)",
            "Mastering Bitcoin (Chapter 4: Keys, Addresses)"
          ]
        },
        {
          name: "Consensus Mechanisms",
          tag: "core",
          desc: "Proof of Work (PoW): mining, difficulty adjustment, longest chain rule, 51% attacks. Proof of Stake (PoS): validators, staking, slashing conditions, finality (Casper FFG, LMD GHOST). Delegated Proof of Stake (DPoS), Proof of Authority (PoA), Practical Byzantine Fault Tolerance (PBFT). Nakamoto consensus vs BFT-based consensus.",
          master: [
            "Explain Bitcoin's difficulty adjustment algorithm (every 2016 blocks)",
            "Calculate the probability of a 51% attack succeeding given network hash rate",
            "Understand Ethereum's transition from PoW to PoS (The Merge)",
            "Explain the nothing-at-stake problem and how PoS solves it with slashing",
            "Implement a simplified PoW consensus simulator",
            "Understand finality: what it means and why PoW has probabilistic finality",
            "Compare PBFT vs Nakamoto consensus trade-offs"
          ],
          code: "# Simple PoW consensus simulator\nimport hashlib\nimport time\nimport json\n\nclass Block:\n    def __init__(self, index, transactions, previous_hash, difficulty):\n        self.index = index\n        self.timestamp = time.time()\n        self.transactions = transactions\n        self.previous_hash = previous_hash\n        self.difficulty = difficulty\n        self.nonce = 0\n        self.hash = self.mine()\n    \n    def calculate_hash(self):\n        block_string = json.dumps({\n            'index': self.index,\n            'timestamp': self.timestamp,\n            'transactions': self.transactions,\n            'previous_hash': self.previous_hash,\n            'nonce': self.nonce\n        }, sort_keys=True)\n        return hashlib.sha256(block_string.encode()).hexdigest()\n    \n    def mine(self):\n        target = '0' * self.difficulty\n        while True:\n            self.hash = self.calculate_hash()\n            if self.hash.startswith(target):\n                return self.hash\n            self.nonce += 1\n\nclass Blockchain:\n    def __init__(self, difficulty=4):\n        self.chain = [self.create_genesis_block()]\n        self.difficulty = difficulty\n    \n    def create_genesis_block(self):\n        return Block(0, [\"Genesis block\"], \"0\", self.difficulty)\n    \n    def add_block(self, transactions):\n        previous_block = self.chain[-1]\n        new_block = Block(len(self.chain), transactions, previous_block.hash, self.difficulty)\n        self.chain.append(new_block)\n    \n    def is_chain_valid(self):\n        for i in range(1, len(self.chain)):\n            current = self.chain[i]\n            previous = self.chain[i-1]\n            \n            if current.hash != current.calculate_hash():\n                return False\n            if current.previous_hash != previous.hash:\n                return False\n            if not current.hash.startswith('0' * self.difficulty):\n                return False\n        return True\n\n# PoS validator simulator (simplified)\nclass Validator:\n    def __init__(self, address, stake):\n        self.address = address\n        self.stake = stake\n        self.slashed = False\n    \n    def propose_block(self, block):\n        if not self.slashed:\n            print(f\"Validator {self.address} proposing block {block.index}\")\n            return block\n        return None\n\ndef select_validator(validators, total_stake):\n    # Weighted random selection based on stake\n    import random\n    r = random.random() * total_stake\n    cumulative = 0\n    for validator in validators:\n        cumulative += validator.stake\n        if r <= cumulative:\n            return validator\n    return validators[0]",
          res: [
            "Bitcoin: A Peer-to-Peer Electronic Cash System (Satoshi Nakamoto)",
            "Ethereum: A Next-Generation Smart Contract Platform (Vitalik Buterin)",
            "Proof of Stake FAQ (Ethereum.org)",
            "Byzantine Generals Problem (Lamport, Shostak, Pease)"
          ]
        }
      ]
    },
    {
      name: "Bitcoin & UTXO Model",
      level: "intermediate",
      tagline: "Digital gold and its architecture",
      desc: "Bitcoin's UTXO model, transaction structure, Script language, and network. Understand how the first cryptocurrency works at the protocol level.",
      topics: [
        {
          name: "Bitcoin Transactions & Script",
          tag: "core",
          desc: "UTXO (Unspent Transaction Output) model: inputs reference previous outputs, outputs create new UTXOs. Transaction structure: version, inputs (txid, vout, scriptSig, sequence), outputs (value, scriptPubKey), locktime. Bitcoin Script: stack-based language, OP codes (OP_DUP, OP_HASH160, OP_EQUALVERIFY, OP_CHECKSIG). P2PKH (Pay-to-PubKey-Hash), P2SH (Pay-to-Script-Hash), P2WPKH (SegWit).",
          master: [
            "Explain the difference between UTXO model and account model (Ethereum)",
            "Trace a Bitcoin transaction from input to output using a block explorer",
            "Understand how multisignature (multisig) works in Bitcoin Script (OP_CHECKMULTISIG)",
            "Explain SegWit (Segregated Witness) and its benefits (transaction malleability, block size)",
            "Create a raw Bitcoin transaction using Bitcoin Core or a library",
            "Understand transaction fees: how they're calculated and prioritization",
            "Explain the difference between P2PKH and P2SH addresses"
          ],
          code: "# Bitcoin transaction structure (simplified)\nimport hashlib\nimport struct\n\nclass BitcoinTransaction:\n    def __init__(self, version=1, locktime=0):\n        self.version = version\n        self.inputs = []\n        self.outputs = []\n        self.locktime = locktime\n    \n    def add_input(self, txid, vout, script_sig=\"\", sequence=0xFFFFFFFF):\n        self.inputs.append({\n            'txid': txid,\n            'vout': vout,\n            'script_sig': script_sig,\n            'sequence': sequence\n        })\n    \n    def add_output(self, value, script_pubkey):\n        self.outputs.append({\n            'value': value,\n            'script_pubkey': script_pubkey\n        })\n    \n    def serialize(self):\n        # Simplified serialization (not complete)\n        result = struct.pack('<I', self.version)\n        result += struct.pack('<B', len(self.inputs))\n        for txin in self.inputs:\n            result += bytes.fromhex(txin['txid'])[::-1]  # txid in reverse\n            result += struct.pack('<I', txin['vout'])\n            result += struct.pack('<B', len(txin['script_sig']) // 2)\n            result += bytes.fromhex(txin['script_sig'])\n            result += struct.pack('<I', txin['sequence'])\n        \n        result += struct.pack('<B', len(self.outputs))\n        for txout in self.outputs:\n            result += struct.pack('<Q', txout['value'])\n            result += struct.pack('<B', len(txout['script_pubkey']) // 2)\n            result += bytes.fromhex(txout['script_pubkey'])\n        \n        result += struct.pack('<I', self.locktime)\n        return result.hex()\n\n# P2PKH script example\n# scriptPubKey: OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG\n# scriptSig: <sig> <pubKey>\n\n# Creating a P2PKH address\nimport hashlib\nimport base58\n\ndef p2pkh_address(public_key_hash):\n    # Add version byte (0x00 for mainnet)\n    versioned = b'\\x00' + public_key_hash\n    # Double SHA-256 checksum\n    checksum = hashlib.sha256(hashlib.sha256(versioned).digest()).digest()[:4]\n    # Base58 encode\n    return base58.b58encode(versioned + checksum).decode()\n\n# Example: generate address from public key\n# public_key = '04...' (uncompressed) or '02/03...' (compressed)\n# public_key_hash = hashlib.new('ripemd160', hashlib.sha256(public_key_bytes).digest()).digest()\n# address = p2pkh_address(public_key_hash)",
          res: [
            "Mastering Bitcoin (Andreas Antonopoulos â€” free online)",
            "Bitcoin Developer Documentation (bitcoin.org)",
            "Bitcoin Wiki: Script",
            "Learn Me a Bitcoin (learnmeabitcoin.com)"
          ]
        },
        {
          name: "Lightning Network & Layer 2",
          tag: "advanced",
          desc: "Scaling Bitcoin with payment channels. Hashed Timelock Contracts (HTLC), bidirectional payment channels, channel factories. Lightning Network: routing (source-based onion routing), gossip protocol, channel announcements. Watchtowers, multi-path payments, Wumbo channels. Taproot and Schnorr signatures (improved privacy and efficiency).",
          master: [
            "Explain how a bidirectional payment channel works (funding, commitment, closing)",
            "Understand HTLC: how it enables trustless routing across multiple hops",
            "Calculate channel capacity and understand how balances are tracked",
            "Explain the difference between on-chain and off-chain transactions",
            "Understand the concept of 'invoice' in Lightning Network",
            "Set up a Lightning Network node (LND or c-lightning) on testnet",
            "Explain the advantages of Taproot (Schnorr signatures, MAST, privacy)"
          ],
          code: "# HTLC (Hashed Timelock Contract) conceptual implementation\nimport hashlib\nimport time\n\nclass HTLC:\n    def __init__(self, secret_hash, sender, receiver, amount, timelock):\n        self.secret_hash = secret_hash\n        self.sender = sender\n        self.receiver = receiver\n        self.amount = amount\n        self.timelock = timelock\n        self.secret = None\n        self.state = 'pending'  # pending, claimed, refunded\n    \n    def claim(self, secret, block_height):\n        # Verify secret matches hash\n        if hashlib.sha256(secret.encode()).hexdigest() != self.secret_hash:\n            return False, \"Invalid secret\"\n        \n        # Check timelock\n        if block_height >= self.timelock:\n            return False, \"Timelock expired\"\n        \n        self.secret = secret\n        self.state = 'claimed'\n        return True, f\"Payment of {self.amount} claimed by {self.receiver}\"\n    \n    def refund(self, block_height):\n        if block_height >= self.timelock and self.state == 'pending':\n            self.state = 'refunded'\n            return True, f\"Payment of {self.amount} refunded to {self.sender}\"\n        return False, \"Cannot refund yet\"\n\n# Payment channel (simplified)\nclass PaymentChannel:\n    def __init__(self, alice, bob, initial_balance_alice, initial_balance_bob):\n        self.alice = alice\n        self.bob = bob\n        self.balances = {alice: initial_balance_alice, bob: initial_balance_bob}\n        self.nonce = 0\n        self.last_signed_state = None\n    \n    def create_transaction(self, from_party, to_party, amount):\n        if self.balances[from_party] < amount:\n            return None\n        \n        new_balances = self.balances.copy()\n        new_balances[from_party] -= amount\n        new_balances[to_party] += amount\n        \n        # Increment nonce for new state\n        self.nonce += 1\n        \n        return {\n            'nonce': self.nonce,\n            'balances': new_balances,\n            'signatures': {}\n        }\n    \n    def sign_state(self, state, party):\n        # Sign the state (simplified - just mark as signed)\n        state['signatures'][party] = True\n        if len(state['signatures']) == 2:\n            self.last_signed_state = state\n            self.balances = state['balances']\n        return state",
          res: [
            "Lightning Network Paper (Poon, Dryja)",
            "Lightning Network Documentation (lightning.network)",
            "Taproot: BIP 340-342",
            "Mastering the Lightning Network (Antonopoulos, Osuntokun, Pickhardt)"
          ]
        }
      ]
    },
    {
      name: "Ethereum & Smart Contracts",
      level: "intermediate",
      tagline: "Programmable blockchain",
      desc: "Ethereum Virtual Machine (EVM), smart contracts, gas, and Solidity. Build decentralized applications that run exactly as programmed without downtime or interference.",
      topics: [
        {
          name: "EVM & Gas Model",
          tag: "core",
          desc: "Ethereum Virtual Machine: stack-based (256-bit words), memory, storage, calldata. Opcodes (ADD, SSTORE, SLOAD, CALL, CREATE). Gas: gas limit, gas price, refunds. Transaction lifecycle: pending, mined, reverted. Block structure: difficulty, gas limit, beneficiary (miner), state root. EIP-1559: base fee, priority fee, fee burning.",
          master: [
            "Explain the difference between memory, storage, and calldata in EVM",
            "Calculate gas cost for a simple transaction (transfer, contract call)",
            "Understand EIP-1559 fee market: base fee, priority fee, maxFeePerGas",
            "Explain what happens when a transaction runs out of gas",
            "Trace an Ethereum transaction using a block explorer or tool",
            "Understand the difference between CALL, DELEGATECALL, and STATICCALL",
            "Explain how Ethereum state is stored as a Merkle Patricia Trie"
          ],
          code: "// EVM opcode examples (conceptual)\n// Storage vs Memory\n\n// Storage (persistent, expensive)\ncontract StorageExample {\n    uint256 public storedData;  // Stored in contract storage\n    \n    function set(uint256 x) public {\n        storedData = x;  // SSTORE (20,000 gas)\n    }\n}\n\n// Memory (temporary, cheaper)\ncontract MemoryExample {\n    function calculate() public pure returns (uint256) {\n        uint256[] memory arr = new uint256[](10);  // MLOAD/MSTORE\n        for (uint i = 0; i < 10; i++) {\n            arr[i] = i * 2;\n        }\n        return arr[5];\n    }\n}\n\n// EIP-1559 transaction structure (Python)\ntransaction = {\n    'type': 2,  # EIP-1559 transaction\n    'chainId': 1,  # Mainnet\n    'nonce': 0,\n    'maxPriorityFeePerGas': 2_000_000_000,  # 2 Gwei tip\n    'maxFeePerGas': 30_000_000_000,  # 30 Gwei max\n    'gasLimit': 21_000,  # Standard ETH transfer\n    'to': '0x742d35Cc6634C0532925a3b844Bc9e7595f3b363',\n    'value': 10**17,  # 0.1 ETH\n    'data': '',\n    'accessList': []\n}\n\n# Gas calculation\n# Base fee is burned, priority fee goes to miner\n# MaxFeePerGas = BaseFee + PriorityFee\n# Actual fee = min(MaxFeePerGas, BaseFee + PriorityFee)\n# Refund = MaxFeePerGas - Actual Fee (if MaxFeePerGas higher)",
          res: [
            "Ethereum Yellow Paper (Dr. Gavin Wood)",
            "Mastering Ethereum (Andreas Antonopoulos, Gavin Wood)",
            "EVM Deep Dives (Noah Zinsmeister, teddav)",
            "EIP-1559: Fee Market Change (Buterin, et al.)"
          ]
        },
        {
          name: "Solidity & Smart Contract Development",
          tag: "core",
          desc: "Solidity syntax: data types (uint, address, bool, bytes, string), visibility (public, private, internal, external), modifiers, events, error handling (require, revert, assert). Inheritance, libraries, interfaces. ERC standards: ERC-20 (fungible tokens), ERC-721 (NFTs), ERC-1155 (multi-token). Factory pattern, proxy patterns (UUPS, transparent proxy).",
          master: [
            "Write an ERC-20 token contract with mint, burn, and transfer functions",
            "Implement an ERC-721 NFT contract with metadata URI",
            "Write a contract that uses OpenZeppelin libraries (SafeMath, Ownable)",
            "Understand reentrancy attacks and implement reentrancy guard",
            "Explain the difference between delegatecall and call (proxy patterns)",
            "Implement a timelock contract for governance",
            "Write a simple DEX (decentralized exchange) with a constant product AMM"
          ],
          code: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\n// Simple ERC-20 token implementation\ncontract SimpleERC20 {\n    string public name;\n    string public symbol;\n    uint8 public decimals;\n    uint256 public totalSupply;\n    \n    mapping(address => uint256) public balanceOf;\n    mapping(address => mapping(address => uint256)) public allowance;\n    \n    event Transfer(address indexed from, address indexed to, uint256 value);\n    event Approval(address indexed owner, address indexed spender, uint256 value);\n    \n    constructor(string memory _name, string memory _symbol, uint8 _decimals, uint256 _totalSupply) {\n        name = _name;\n        symbol = _symbol;\n        decimals = _decimals;\n        totalSupply = _totalSupply;\n        balanceOf[msg.sender] = _totalSupply;\n        emit Transfer(address(0), msg.sender, _totalSupply);\n    }\n    \n    function transfer(address to, uint256 value) external returns (bool) {\n        require(to != address(0), \"Invalid address\");\n        require(balanceOf[msg.sender] >= value, \"Insufficient balance\");\n        \n        balanceOf[msg.sender] -= value;\n        balanceOf[to] += value;\n        emit Transfer(msg.sender, to, value);\n        return true;\n    }\n    \n    function approve(address spender, uint256 value) external returns (bool) {\n        allowance[msg.sender][spender] = value;\n        emit Approval(msg.sender, spender, value);\n        return true;\n    }\n    \n    function transferFrom(address from, address to, uint256 value) external returns (bool) {\n        require(from != address(0), \"Invalid from address\");\n        require(to != address(0), \"Invalid to address\");\n        require(balanceOf[from] >= value, \"Insufficient balance\");\n        require(allowance[from][msg.sender] >= value, \"Insufficient allowance\");\n        \n        balanceOf[from] -= value;\n        balanceOf[to] += value;\n        allowance[from][msg.sender] -= value;\n        emit Transfer(from, to, value);\n        return true;\n    }\n}\n\n// Reentrancy guard example\ncontract ReentrancyGuard {\n    bool private _locked;\n    \n    modifier nonReentrant() {\n        require(!_locked, \"Reentrant call\");\n        _locked = true;\n        _;\n        _locked = false;\n    }\n}\n\n// Simple DEX (Constant Product AMM)\ncontract SimpleDEX is ReentrancyGuard {\n    IERC20 public tokenA;\n    IERC20 public tokenB;\n    uint256 public reserveA;\n    uint256 public reserveB;\n    \n    constructor(address _tokenA, address _tokenB) {\n        tokenA = IERC20(_tokenA);\n        tokenB = IERC20(_tokenB);\n    }\n    \n    function addLiquidity(uint256 amountA, uint256 amountB) external nonReentrant {\n        tokenA.transferFrom(msg.sender, address(this), amountA);\n        tokenB.transferFrom(msg.sender, address(this), amountB);\n        reserveA += amountA;\n        reserveB += amountB;\n    }\n    \n    function swapAForB(uint256 amountIn) external nonReentrant {\n        require(amountIn > 0, \"Amount must be > 0\");\n        uint256 amountOut = (amountIn * reserveB) / (reserveA + amountIn);\n        require(amountOut > 0, \"Output too low\");\n        \n        tokenA.transferFrom(msg.sender, address(this), amountIn);\n        tokenB.transfer(msg.sender, amountOut);\n        \n        reserveA += amountIn;\n        reserveB -= amountOut;\n    }\n}",
          res: [
            "Solidity Documentation (docs.soliditylang.org)",
            "OpenZeppelin Contracts (openzeppelin.com/contracts)",
            "Ethereum Smart Contract Best Practices (Consensys)",
            "CryptoZombies â€” Learn Solidity by building games"
          ]
        },
        {
          name: "DeFi & Web3 Development",
          tag: "advanced",
          desc: "Building decentralized applications. Web3.js, Ethers.js for frontend integration. Hardhat, Foundry for development and testing. DeFi primitives: lending/borrowing (Aave, Compound), decentralized exchanges (Uniswap), stablecoins (DAI, USDC), yield farming, flash loans. Oracles (Chainlink). MEV (Miner Extractable Value).",
          master: [
            "Set up a Hardhat project with Solidity compilation and testing",
            "Write tests for smart contracts using Hardhat or Foundry",
            "Integrate a frontend with Ethers.js to interact with a smart contract",
            "Explain how Uniswap's constant product AMM works (x*y=k)",
            "Understand flash loans and how they enable arbitrage",
            "Explain the oracle problem and how Chainlink solves it",
            "Build a simple dApp that allows users to stake tokens for rewards"
          ],
          code: "// Hardhat test example\nconst { expect } = require(\"chai\");\n\ndescribe(\"SimpleERC20\", function () {\n    let SimpleERC20;\n    let token;\n    let owner;\n    let addr1;\n    let addr2;\n\n    beforeEach(async function () {\n        [owner, addr1, addr2] = await ethers.getSigners();\n        SimpleERC20 = await ethers.getContractFactory(\"SimpleERC20\");\n        token = await SimpleERC20.deploy(\"Test Token\", \"TEST\", 18, 1000000);\n        await token.deployed();\n    });\n\n    describe(\"Deployment\", function () {\n        it(\"Should set the right owner balance\", async function () {\n            expect(await token.balanceOf(owner.address)).to.equal(1000000);\n        });\n\n        it(\"Should set the right name and symbol\", async function () {\n            expect(await token.name()).to.equal(\"Test Token\");\n            expect(await token.symbol()).to.equal(\"TEST\");\n        });\n    });\n\n    describe(\"Transactions\", function () {\n        it(\"Should transfer tokens between accounts\", async function () {\n            await token.transfer(addr1.address, 100);\n            expect(await token.balanceOf(addr1.address)).to.equal(100);\n\n            await token.connect(addr1).transfer(addr2.address, 50);\n            expect(await token.balanceOf(addr2.address)).to.equal(50);\n        });\n\n        it(\"Should fail if sender doesn't have enough balance\", async function () {\n            await expect(token.connect(addr1).transfer(addr2.address, 1))\n                .to.be.revertedWith(\"Insufficient balance\");\n        });\n    });\n});\n\n// Web3.js frontend integration\nconst Web3 = require('web3');\nconst web3 = new Web3(window.ethereum);\n\n// Connect wallet\nasync function connectWallet() {\n    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });\n    const account = accounts[0];\n    console.log(\"Connected:\", account);\n    return account;\n}\n\n// Interact with contract\nconst contractABI = [...] // ABI from compilation\nconst contractAddress = \"0x...\"\nconst contract = new web3.eth.Contract(contractABI, contractAddress);\n\nasync function transferTokens(to, amount) {\n    const accounts = await web3.eth.getAccounts();\n    const amountWei = web3.utils.toWei(amount.toString(), 'ether');\n    \n    const tx = await contract.methods.transfer(to, amountWei).send({\n        from: accounts[0],\n        gas: 100000\n    });\n    console.log(\"Transaction hash:\", tx.transactionHash);\n    return tx;\n}\n\n// Listen to events\ncontract.events.Transfer({ fromBlock: 'latest' }, (error, event) => {\n    console.log(\"Transfer:\", event.returnValues);\n});",
          res: [
            "Uniswap Whitepaper (Hayden Adams)",
            "Aave Protocol Documentation",
            "Chainlink Documentation (docs.chain.link)",
            "Flash Boys 2.0 (MEV research paper)"
          ]
        }
      ]
    },
    {
      name: "Advanced Blockchain Topics",
      level: "advanced",
      tagline: "Beyond mainstream protocols",
      desc: "Zero-knowledge proofs, rollups, alternative L1s, and the future of blockchain scalability and privacy.",
      topics: [
        {
          name: "Zero-Knowledge Proofs (ZK)",
          tag: "advanced",
          desc: "ZK-SNARKs (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge): proving knowledge without revealing information. zk-SNARKs components: polynomial commitments, pairing-based cryptography, trusted setup. ZK-STARKs (scalable, transparent, no trusted setup). zk-rollups: zkSync, StarkNet, Polygon zkEVM. ZK for privacy (Zcash) and scaling.",
          master: [
            "Explain the difference between SNARKs and STARKs",
            "Understand the concept of 'trusted setup' and its implications",
            "Build a simple zk-SNARK using Circom and SnarkJS",
            "Explain how zk-rollups achieve scalability (off-chain computation, on-chain verification)",
            "Understand the difference between validity proofs and fraud proofs (optimistic rollups)",
            "Explain how Zcash uses zk-SNARKs for shielded transactions",
            "Implement a simple ZK circuit for proving age > 18 without revealing birthdate"
          ],
          code: "// Circom circuit example (simple zk-SNARK)\n// circuit.circom - Proving you know a number that is less than 100\npragma circom 2.0.0;\n\ntemplate LessThan100() {\n    signal input in;\n    signal output out;\n    \n    component lt = LessThan(8);  // 8 bits\n    lt.in[0] <== in;\n    lt.in[1] <== 100;\n    out <== lt.out;\n}\n\ncomponent main = LessThan100();\n\n// JavaScript to generate proof using SnarkJS\n/*\nconst snarkjs = require('snarkjs');\nconst fs = require('fs');\n\nasync function run() {\n    // Compile circuit\n    await snarkjs.pl(\"compile\", \"circuit.circom\");\n    \n    // Generate witness\n    const input = { \"in\": 42 };\n    await snarkjs.pl(\"witness\", \"circuit.json\", input, \"witness.wtns\");\n    \n    // Generate proof\n    const { proof, publicSignals } = await snarkjs.pl(\"prove\", \"circuit_final.zkey\", \"witness.wtns\");\n    \n    // Verify proof\n    const isValid = await snarkjs.pl(\"verify\", \"verification_key.json\", publicSignals, proof);\n    console.log(\"Proof valid:\", isValid);\n}\n*/\n\n// zk-rollup transaction (conceptual)\nclass ZKRollupTransaction {\n    constructor(from, to, amount, nonce) {\n        this.from = from;\n        this.to = to;\n        this.amount = amount;\n        this.nonce = nonce;\n    }\n    \n    generateProof(secretKey) {\n        // Generate ZK proof that:\n        // 1. Sender has sufficient balance\n        // 2. Transaction is signed by sender\n        // 3. Amount is positive\n        // 4. Nonce is correct\n        // This is done off-chain using ZK circuit\n        return proof;\n    }\n}\n\n// On-chain verification\n// Contract verifies the proof and updates state root\n// This consumes ~500k gas vs millions for individual transactions",
          res: [
            "Zcash Protocol Specification (zk-SNARKs)",
            "StarkWare: STARKs vs SNARKs",
            "Vitalik Buterin's ZK-SNARKs blog series",
            "Circom & SnarkJS documentation"
          ]
        },
        {
          name: "Optimistic Rollups & Fraud Proofs",
          tag: "advanced",
          desc: "Scaling Ethereum by moving computation off-chain while keeping data on-chain. Optimism, Arbitrum, Base. Fraud proofs: validity challenges, one-round vs multi-round. EVM equivalence vs compatibility. Sequencers, forced inclusion, withdrawal delays. Celestia and data availability sampling.",
          master: [
            "Explain how optimistic rollups assume transactions are valid by default",
            "Understand the fraud proof mechanism: challenge period, dispute resolution",
            "Compare optimistic rollups vs zk-rollups (security, speed, cost)",
            "Explain the role of sequencers and centralization concerns",
            "Understand forced inclusion: how users can bypass sequencers",
            "Explain data availability problem and how rollups solve it",
            "Deploy a contract on Arbitrum or Optimism testnet"
          ],
          code: "// Optimistic rollup fraud proof (simplified)\ncontract OptimisticRollup {\n    mapping(uint256 => bytes32) public stateRoots;\n    uint256 public challengePeriod = 7 days;\n    \n    struct Transaction {\n        address from;\n        address to;\n        uint256 amount;\n        bytes signature;\n    }\n    \n    // Submit a batch of transactions\n    function submitBatch(Transaction[] calldata txs, bytes32 newStateRoot) external {\n        uint256 batchNumber = block.number;\n        stateRoots[batchNumber] = newStateRoot;\n        // Store batch for potential challenge\n        emit BatchSubmitted(batchNumber, newStateRoot);\n    }\n    \n    // Challenge a batch (fraud proof)\n    function challengeBatch(uint256 batchNumber, Transaction[] calldata txs, \n                           bytes32 expectedStateRoot) external {\n        require(block.number - batchNumber < challengePeriod, \"Challenge period expired\");\n        \n        // Execute transactions off-chain to verify state root\n        bytes32 computedRoot = executeTransactions(txs);\n        require(computedRoot != expectedStateRoot, \"No fraud detected\");\n        \n        // Fraud confirmed - revert batch\n        delete stateRoots[batchNumber];\n        emit BatchReverted(batchNumber);\n    }\n    \n    function executeTransactions(Transaction[] calldata txs) \n        internal returns (bytes32) {\n        // Simulate state changes\n        // Return final state root\n        return bytes32(0);\n    }\n}\n\n// Deploy to Arbitrum (using Hardhat)\n// npx hardhat run scripts/deploy.js --network arbitrumGoerli\n\n// Cross-chain messaging\ncontract L1ToL2Messenger {\n    function sendMessage(address l2Contract, bytes calldata message) external {\n        // Send message through rollup bridge\n        emit MessageSent(l2Contract, message);\n    }\n}",
          res: [
            "Optimism Documentation (optimism.io)",
            "Arbitrum Whitepaper (Offchain Labs)",
            "Fraud Proofs in Optimistic Rollups (Ethereum Research)",
            "Celestia: A Modular Consensus Layer"
          ]
        },
        {
          name: "Alternative L1 & Interoperability",
          tag: "advanced",
          desc: "Solana (PoH, Tower BFT, Sealevel runtime). Avalanche (subnets, Snow consensus). Cosmos (IBC, Tendermint, SDK). Polkadot (relay chain, parachains, XCM). Bridges (Wormhole, IBC, LayerZero). Cross-chain interoperability challenges (trust assumptions, double signing).",
          master: [
            "Explain Solana's Proof of History (PoH) and how it enables high throughput",
            "Understand Avalanche's Snow consensus family (Slush, Snowflake, Snowball, Avalanche)",
            "Explain IBC (Inter-Blockchain Communication) protocol between Cosmos chains",
            "Understand the difference between Polkadot's relay chain and parachains",
            "Analyze bridge security: validator sets, multi-sig, light client verification",
            "Explain the trade-offs between monolithic vs modular blockchains",
            "Build a cross-chain DEX using IBC or LayerZero"
          ],
          code: "// Solana Program (Rust - simplified)\nuse solana_program::{\n    account_info::AccountInfo,\n    entrypoint,\n    entrypoint::ProgramResult,\n    pubkey::Pubkey,\n    msg,\n};\n\nentrypoint!(process_instruction);\n\nfn process_instruction(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    instruction_data: &[u8],\n) -> ProgramResult {\n    msg!(\"Hello from Solana program!\");\n    Ok(())\n}\n\n// Cosmos SDK module (Go - simplified)\ntype Keeper struct {\n    storeKey sdk.StoreKey\n}\n\nfunc (k Keeper) Transfer(ctx sdk.Context, from sdk.AccAddress, to sdk.AccAddress, amount sdk.Coin) error {\n    // Transfer tokens between accounts\n    err := k.bankKeeper.SendCoins(ctx, from, to, sdk.NewCoins(amount))\n    if err != nil {\n        return err\n    }\n    \n    ctx.EventManager().EmitEvent(\n        sdk.NewEvent(\n            \"transfer\",\n            sdk.NewAttribute(\"from\", from.String()),\n            sdk.NewAttribute(\"to\", to.String()),\n            sdk.NewAttribute(\"amount\", amount.String()),\n        ),\n    )\n    return nil\n}\n\n// IBC packet structure\nmessage FungibleTokenPacketData {\n    string denom = 1;\n    string amount = 2;\n    string sender = 3;\n    string receiver = 4;\n}\n\n// IBC transfer (CLI)\n// ibc-transfer transfer transfer channel-0 \\\n//   cosmos1... 1000uatom \\\n//   --from wallet --chain-id cosmos-hub --packet-timeout-height 0-1000",
          res: [
            "Solana Whitepaper (Anatoly Yakovenko)",
            "Avalanche Consensus Protocol (Team Rocket)",
            "Cosmos Whitepaper (Jae Kwon)",
            "Polkadot Whitepaper (Gavin Wood)"
          ]
        }
      ]
    }
  ]
};
