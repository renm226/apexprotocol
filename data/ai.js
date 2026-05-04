const aiData = {
  name: "ARTIFICIAL INTELLIGENCE & MACHINE LEARNING",
  area: "ai",
  eyebrow: "Mathematical Foundations · Deep Learning · Transformers · LLM Training · Production AI",
  sub: "From first-principles mathematics to frontier research. A complete journey from knowing nothing about AI to building and understanding state-of-the-art systems. This is not a guide about calling the OpenAI API — it is a guide to genuinely understanding what your models are doing, why they work, and how to build new ones. Every concept grounded, every technique understood deeply — not just used.",
  phases: [
    {
      name: "Mathematical Foundations",
      level: "foundation",
      tagline: "The language all of AI is written in",
      desc: "There are no shortcuts here. Every machine learning algorithm is applied mathematics. You need genuine fluency — not just familiarity — in linear algebra, calculus, probability, and statistics. Spend real time here. Skipping this phase means you will always be guessing at what your models are doing.",
      topics: [
        {
          name: "Linear Algebra for ML",
          tag: "core",
          desc: "Vectors and matrices are the native data structures of machine learning. You need to understand them geometrically, not just computationally. A matrix is a linear transformation — it rotates, scales, and shears space. Matrix multiplication is function composition. The determinant measures how a transformation scales area or volume. Eigenvalues are the stretching factors along special directions (eigenvectors). Singular Value Decomposition (SVD) is the fundamental decomposition of any linear map and underlies PCA, recommender systems, and many optimization algorithms. Understand the column space, null space, rank, and rank-nullity theorem. Get comfortable with inner products, norms, orthogonality, and projections.",
          master: [
            "Explain matrix multiplication as a composition of linear transformations geometrically",
            "Derive PCA from the covariance matrix eigenvector interpretation — not just the formula",
            "Understand SVD intuitively: left singular vectors, singular values, and right singular vectors",
            "Know when a system of linear equations has 0, 1, or infinite solutions and why",
            "Understand the Gram-Schmidt process and why orthonormal bases matter",
            "Explain the geometric meaning of a matrix determinant",
            "Understand least-squares regression as a projection onto the column space"
          ],
          deepdive: "The connection between SVD and PCA is the most important relationship in unsupervised ML. When you compute the SVD of a mean-centered data matrix, the right singular vectors are exactly the principal components. This single insight lets you derive PCA, Latent Semantic Analysis in NLP, collaborative filtering in recommender systems, and image compression — all from one decomposition. Master SVD and you understand the geometry of data.",
          res: [
            "Linear Algebra (Gilbert Strang — MIT OCW, free)",
            "Essence of Linear Algebra (3Blue1Brown YouTube series)",
            "Matrix Cookbook (Petersen & Pedersen — free PDF reference)",
            "Mathematics for Machine Learning (Deisenroth et al. — free PDF)"
          ]
        },
        {
          name: "Calculus and Optimization",
          tag: "core",
          desc: "The chain rule is the soul of backpropagation. You need deep comfort with partial derivatives, Jacobians (matrices of partial derivatives), and Hessians (matrices of second derivatives). Understand gradient descent intuitively: you are always walking downhill on a loss surface. Learn the distinction between convex optimization (guaranteed global minimum, KKT conditions, duality) and non-convex optimization (the reality of deep learning). Understand why saddle points dominate in high-dimensional spaces and why local minima are less of a problem than people assume. Learn momentum, adaptive learning rates, and why second-order methods (Newton, quasi-Newton) are powerful but expensive.",
          master: [
            "Derive the gradient of cross-entropy loss with respect to logits manually",
            "Explain why saddle points outnumber local minima exponentially as dimensions grow",
            "Understand KKT conditions for constrained optimization and how they apply to SVMs",
            "Know the difference between a Jacobian-vector product (JVP) and vector-Jacobian product (VJP)",
            "Derive the update rule for gradient descent with momentum from first principles",
            "Understand why the learning rate is the single most impactful hyperparameter",
            "Explain the concept of the loss landscape and why flat minima generalize better"
          ],
          deepdive: "The natural gradient (Amari, 1998) is the most underrated optimization concept in deep learning. Standard gradient descent treats parameter space as Euclidean, but it isn't — the same parameter change can have drastically different effects depending on the current values. The natural gradient corrects for the geometry of the parameter space using the Fisher Information Matrix, making the update invariant to reparameterization. This is why K-FAC and similar second-order methods can train faster with fewer steps.",
          res: [
            "Calculus (MIT OCW 18.01 and 18.02 — free)",
            "Convex Optimization (Boyd & Vandenberghe — free PDF, canonical reference)",
            "Numerical Optimization (Nocedal & Wright — graduate level)",
            "The Matrix Calculus You Need For Deep Learning (Parr & Howard — free)"
          ]
        },
        {
          name: "Probability and Statistics",
          tag: "core",
          desc: "Machine learning is fundamentally about uncertainty — modeling it, reducing it, and reasoning under it. You need probability theory as a language for uncertainty, not just a bag of formulas. Understand random variables, expectation, variance, covariance, and the central limit theorem. Master the major distributions: Gaussian, Bernoulli, Categorical, Poisson, Exponential, Dirichlet, and the exponential family they all belong to. Learn the distinction between frequentist and Bayesian inference. Maximum Likelihood Estimation (MLE) and Maximum A Posteriori (MAP) are the workhorses — understand both from first principles. Bayes' theorem is the fundamental theorem of learning from evidence.",
          master: [
            "Derive MLE for a Gaussian, Bernoulli, and Categorical distribution from scratch",
            "Explain the difference between MLE and MAP with a concrete example",
            "Understand the bias-variance tradeoff as a decomposition of expected test error",
            "Know what a conjugate prior is and why the Beta-Bernoulli pair is useful",
            "Explain the central limit theorem and why it matters for ML in practice",
            "Understand what a p-value actually means and common misinterpretations",
            "Derive the law of total expectation and law of total variance"
          ],
          deepdive: "KL divergence is not just a loss function — it is the measure of information gain when you update your beliefs. The Evidence Lower Bound (ELBO) in variational inference is a direct consequence of KL divergence: log p(x) ≥ E_q[log p(x|z)] - KL(q(z|x)||p(z)). The first term rewards reconstruction accuracy; the second penalizes deviation from the prior. Every generative model from VAEs to diffusion models optimizes some form of this bound.",
          res: [
            "All of Statistics (Larry Wasserman — rigorous and accessible)",
            "Probability Theory: The Logic of Science (Jaynes — Bayesian perspective)",
            "Pattern Recognition and Machine Learning (Bishop — free PDF, canonical)",
            "Think Stats (Allen Downey — free, practical introduction)"
          ]
        },
        {
          name: "Information Theory",
          tag: "advanced",
          desc: "Information theory is the bridge between probability and learning. Shannon entropy H(X) = -Σ p(x) log p(x) measures the average surprise in a distribution — equivalently, the minimum bits needed to encode it. Cross-entropy loss in classification is exactly the negative log-likelihood under the model's predicted distribution. KL divergence D_KL(P||Q) measures how much information is lost when you approximate P with Q. Mutual information I(X;Y) measures how much knowing X reduces uncertainty about Y. These concepts unify compression, communication, and learning in one framework.",
          master: [
            "Prove that cross-entropy loss equals negative log-likelihood for a categorical model",
            "Explain why KL divergence is asymmetric and when that asymmetry matters",
            "Derive mutual information from KL divergence: I(X;Y) = KL(p(x,y) || p(x)p(y))",
            "Understand the data processing inequality and why it matters for representation learning",
            "Connect entropy to the concept of model capacity and overfitting",
            "Explain why minimizing cross-entropy is equivalent to maximizing likelihood",
            "Understand the information bottleneck principle and its connection to deep learning"
          ],
          res: [
            "Information Theory, Inference, and Learning Algorithms (MacKay — free PDF, excellent)",
            "Elements of Information Theory (Cover & Thomas — the textbook)",
            "Shannon's original 1948 paper — A Mathematical Theory of Communication",
            "Visual Information Theory (colah.github.io — beautiful intuitive intro)"
          ]
        }
      ]
    },
    {
      name: "Classical Machine Learning",
      level: "foundation",
      tagline: "The algorithms that still dominate production",
      desc: "Before neural networks, and alongside them in industry. Classical ML algorithms are interpretable, fast, and often outperform deep learning on tabular data. Master every algorithm at the derivation level — not just the API call. scikit-learn is for prototyping; you should understand every algorithm deeply enough to implement it.",
      topics: [
        {
          name: "Supervised Learning Algorithms",
          tag: "core",
          desc: "Linear regression (normal equations and gradient descent formulations, regularization via Ridge and Lasso). Logistic regression (derive from the maximum entropy principle — logistic regression is the maximum entropy binary classifier). Decision trees (CART algorithm, information gain, Gini impurity, cost-complexity pruning). Support Vector Machines (SVM) from primal to dual formulation via Lagrangian duality, the kernel trick via Mercer's theorem, soft-margin SVM. Understand bias-variance tradeoff, overfitting, underfitting, and cross-validation. Learn regularization intuitively: L1 produces sparsity (corners of the L1 ball), L2 shrinks weights smoothly.",
          master: [
            "Derive the normal equation for linear regression and explain when it fails numerically",
            "Explain why L1 regularization produces sparse solutions using a geometric argument",
            "Understand the SVM dual problem and why it only depends on inner products (enabling kernels)",
            "Implement k-fold cross-validation correctly — understand why you must not touch the test set",
            "Explain the kernel trick: you never compute φ(x) explicitly, only K(x,x') = φ(x)·φ(x')",
            "Derive the information gain splitting criterion for decision trees",
            "Explain cost-complexity pruning and why a fully-grown tree overfits"
          ],
          deepdive: "Mercer's theorem states that any positive semi-definite function K(x,x') defines an implicit feature map φ such that K(x,x') = φ(x)·φ(x'). The Gaussian RBF kernel corresponds to an infinite-dimensional feature space — yet you can operate in it in O(n²) time without ever materializing the features. The Neural Tangent Kernel (NTK) is a kernel that describes infinitely-wide neural networks at initialization — connecting classical kernel methods to deep learning theory.",
          res: [
            "The Elements of Statistical Learning (Hastie et al. — free PDF, the bible of classical ML)",
            "Pattern Recognition and Machine Learning (Bishop)",
            "Understanding Machine Learning: From Theory to Algorithms (Shalev-Shwartz & Ben-David)",
            "An Introduction to Statistical Learning (James et al. — free PDF, more accessible)"
          ]
        },
        {
          name: "Ensemble Methods and Gradient Boosting",
          tag: "advanced",
          desc: "Ensembles are the most reliable way to win Kaggle competitions on tabular data. Bagging (bootstrap aggregating) reduces variance by training multiple models on bootstrapped samples — Random Forests are the prime example. Boosting reduces bias by sequentially fitting models to residuals. Gradient Boosting is boosting in function space: each new tree fits the negative gradient of the loss. XGBoost adds second-order Taylor expansion of the loss plus explicit regularization. LightGBM uses histogram-based splits and leaf-wise growth for 10-100× speedups. CatBoost uses ordered boosting to prevent target leakage. SHAP (SHapley Additive exPlanations) provides model-agnostic feature importance grounded in game theory.",
          master: [
            "Explain how gradient boosting performs functional gradient descent",
            "Understand why bagging reduces variance and boosting reduces bias",
            "Know the XGBoost split-gain formula and what each term (lambda, gamma) controls",
            "Understand GOSS (gradient-based one-side sampling) in LightGBM and why it works",
            "Use SHAP values to explain individual predictions — not just feature importance",
            "Design a proper stacking ensemble with out-of-fold predictions to prevent leakage",
            "Know when to use Random Forest vs XGBoost vs LightGBM vs CatBoost"
          ],
          res: [
            "XGBoost: A Scalable Tree Boosting System (Chen & Guestrin 2016 paper)",
            "LightGBM: A Highly Efficient Gradient Boosting Decision Tree (Ke et al. 2017)",
            "A Unified Approach to Interpreting Model Predictions (Lundberg & Lee — SHAP paper)",
            "Hands-On Machine Learning (Géron — excellent practical chapters on ensembles)"
          ]
        },
        {
          name: "Unsupervised Learning",
          tag: "core",
          desc: "Most data in the world is unlabeled. Clustering groups similar points: K-means (EM algorithm with hard assignments), DBSCAN (density-based, handles arbitrary shapes), Gaussian Mixture Models (soft assignments, full EM). Dimensionality reduction: PCA (linear, maximizes variance), t-SNE (nonlinear, preserves local structure, crowding problem), UMAP (faster, preserves more global structure, Riemannian geometry foundations). Anomaly detection: isolation forest, one-class SVM, autoencoders. Association rules: Apriori algorithm, market basket analysis.",
          master: [
            "Derive K-means as a special case of EM with isotropic Gaussian components",
            "Explain the crowding problem in t-SNE and how UMAP addresses it",
            "Know when to use UMAP vs t-SNE vs PCA for visualization and downstream tasks",
            "Understand the EM algorithm at a theoretical level: E-step and M-step",
            "Explain how isolation forest detects anomalies without defining 'normal'",
            "Know the silhouette score and elbow method for choosing k in K-means",
            "Implement DBSCAN conceptually: core points, border points, noise points, ε, minPts"
          ],
          res: [
            "Pattern Recognition and Machine Learning (Bishop — chapters on mixture models and EM)",
            "UMAP: Uniform Manifold Approximation and Projection (McInnes 2018 paper)",
            "t-SNE paper (van der Maaten & Hinton 2008)",
            "Hands-On Unsupervised Learning (Ankur Patel)"
          ]
        }
      ]
    },
    {
      name: "Deep Learning Foundations",
      level: "intermediate",
      tagline: "Neural networks from the ground up",
      desc: "The goal of this phase is to understand neural networks deeply enough to implement them without a framework. Backpropagation is just the chain rule applied to a computational graph — once you see it clearly, it demystifies everything. Only after building from scratch should you use PyTorch or JAX, and then with full understanding of what they are doing.",
      topics: [
        {
          name: "Backpropagation and Autograd",
          tag: "core",
          desc: "A neural network is a function composition. The forward pass computes the output; the backward pass computes gradients via the chain rule applied in reverse on the computational graph. Every operation (add, multiply, exp, log) has a local gradient rule. Autograd engines (PyTorch autograd, JAX, TensorFlow) implement this automatically by recording operations and replaying them in reverse. The key concepts are: computational graphs, gradient accumulation, gradient flow, and the define-by-run paradigm. Understanding this layer is what separates practitioners from engineers.",
          master: [
            "Implement a working autograd engine supporting basic operations and train a small MLP on it",
            "Verify your gradients numerically using finite differences",
            "Understand the difference between JVPs (forward mode AD) and VJPs (reverse mode AD)",
            "Explain why reverse-mode AD is preferred for ML (one backward pass for all parameters)",
            "Understand gradient checkpointing: trading computation for memory",
            "Know the vanishing and exploding gradient problems and their causes",
            "Explain how batch normalization and residual connections address gradient flow"
          ],
          res: [
            "Micrograd (Andrej Karpathy — 100-line autograd engine, must study)",
            "The spelled-out intro to backpropagation (Karpathy YouTube)",
            "JAX documentation: What is JAX? (explains JVP vs VJP clearly)",
            "Deep Learning (Goodfellow et al. — free PDF, chapter on backpropagation)"
          ]
        },
        {
          name: "Core Architectures: CNNs, RNNs, and Attention",
          tag: "core",
          desc: "Convolutional Neural Networks (CNNs): convolution as a shift-equivariant operation, filters, feature maps, pooling, receptive field, depth-width tradeoffs. Key architectures: AlexNet, VGG, ResNet (residual connections — solved the deep training problem), EfficientNet (compound scaling). Recurrent Neural Networks (RNNs): hidden state, vanishing gradient problem in long sequences, LSTM (cell state, forget gate, input gate, output gate — all derived from the problem they solve), GRU as a simplified LSTM. Attention mechanism: soft attention, hard attention, self-attention, multi-head attention as the foundation of Transformers.",
          master: [
            "Explain why convolutional layers have far fewer parameters than dense layers",
            "Understand the residual connection: why adding x back enables training of 100+ layer networks",
            "Derive the LSTM update equations and explain what problem each gate solves",
            "Understand the attention mechanism: query, key, value — why these names?",
            "Know how batch normalization works and its effect on the loss landscape",
            "Explain the receptive field and how it grows with depth",
            "Understand dropout as ensemble learning and as stochastic regularization"
          ],
          res: [
            "CS231n: Convolutional Neural Networks for Visual Recognition (Stanford — free)",
            "Deep Learning (Goodfellow et al. — free PDF)",
            "d2l.ai: Dive into Deep Learning (interactive, free, excellent)",
            "Neural Networks and Deep Learning (Nielsen — free online, very clear)"
          ]
        },
        {
          name: "Training Deep Networks in Practice",
          tag: "core",
          desc: "A theoretically perfect architecture can fail to train due to practical details. Learning rate scheduling (warmup, cosine decay, cyclic LR). Optimizers in depth: SGD + momentum, Adam (adaptive per-parameter learning rates via first and second moment estimates), AdamW (decoupled weight decay — why Adam's weight decay is wrong). Weight initialization (Xavier/Glorot for tanh, Kaiming/He for ReLU — derived from variance preservation). Data augmentation. Transfer learning (fine-tuning vs feature extraction). Mixed precision training (FP16/BF16). Gradient clipping. Early stopping and learning rate scheduling.",
          master: [
            "Explain why Kaiming initialization uses √(2/fan_in) for ReLU specifically",
            "Understand why AdamW's weight decay is correct while Adam's is not",
            "Design a learning rate schedule with warmup + cosine decay and explain why",
            "Know the practical differences between batch, mini-batch, and stochastic gradient descent",
            "Understand when to fine-tune all layers vs freeze early layers in transfer learning",
            "Explain what happens when you use too large vs too small a batch size",
            "Know how mixed precision training works and what BF16 vs FP16 tradeoffs are"
          ],
          res: [
            "A Recipe for Training Neural Networks (Andrej Karpathy blog post — required reading)",
            "Practical Deep Learning for Coders (fast.ai — free course, excellent practicals)",
            "Adam: A Method for Stochastic Optimization (Kingma & Ba 2014 paper)",
            "Bag of Tricks for Image Classification (He et al. 2018 — training best practices)"
          ]
        }
      ]
    },
    {
      name: "The Transformer Era",
      level: "intermediate",
      tagline: "The architecture that changed everything",
      desc: "The Transformer (Vaswani et al., 2017) is the most impactful architecture in the history of deep learning. It replaced sequential processing with parallelizable attention, enabling models to scale to billions of parameters. Understanding the Transformer at every level — from matrix operations to training dynamics — is now a baseline requirement for serious ML work.",
      topics: [
        {
          name: "Transformers from Scratch",
          tag: "core",
          desc: "The self-attention mechanism: each position attends to all other positions simultaneously. Queries (Q), Keys (K), and Values (V) are learned linear projections of the input. The attention score between two positions is the dot product of their Q and K vectors, scaled by 1/√d_k to prevent softmax saturation in high dimensions. Multi-head attention learns multiple attention patterns in parallel. Position encodings (sinusoidal original, learned alternatives, RoPE — Rotary Position Embeddings). Layer normalization (pre-norm vs post-norm). Feed-forward layers (position-wise, two linear layers with GELU activation). Encoder-only (BERT), decoder-only (GPT), encoder-decoder (T5) architectures.",
          master: [
            "Implement the full Transformer architecture from scratch in PyTorch without nn.Transformer",
            "Explain why attention scales by 1/√d_k: the dot product variance grows with dimension",
            "Understand causal masking in decoder-only models: no attending to future positions",
            "Explain the difference between encoder and decoder attention patterns",
            "Understand Rotary Position Embeddings (RoPE) and why they extrapolate better",
            "Train a character-level language model from scratch on real text data",
            "Profile the memory usage of a Transformer: where does the O(n²) come from?"
          ],
          deepdive: "FlashAttention (Dao et al., 2022) is the most important systems paper for LLMs. Standard attention materializes the full n×n attention matrix in GPU high-bandwidth memory (HBM), which is slow. FlashAttention computes attention in tiles that fit in SRAM (fast on-chip memory), never materializing the full matrix. This achieves the same mathematical result while using O(n) memory instead of O(n²) and running 2-4× faster. The key insight is IO-awareness: the bottleneck is memory bandwidth, not FLOPs.",
          res: [
            "Attention Is All You Need (Vaswani et al. 2017 — the original paper)",
            "The Illustrated Transformer (Jay Alammar blog — best visual explanation)",
            "nanoGPT (Andrej Karpathy — minimal GPT-2 implementation to study)",
            "FlashAttention-2 paper (Dao 2023)"
          ]
        },
        {
          name: "BERT and Bidirectional Language Models",
          tag: "core",
          desc: "BERT (Bidirectional Encoder Representations from Transformers) pre-trained using Masked Language Modeling (MLM) and Next Sentence Prediction (NSP). Fine-tuning BERT: classification, token classification (NER), question answering. The pre-train/fine-tune paradigm. Variants: RoBERTa (better MLM training), DistilBERT (knowledge distillation), ALBERT (parameter sharing), DeBERTa (disentangled attention). Sentence transformers (SBERT) for semantic similarity. Tokenization: WordPiece, BPE, SentencePiece — why subword tokenization?",
          master: [
            "Explain why MLM enables bidirectional context and why this is different from GPT",
            "Understand the [CLS] token and how its embedding is used for classification",
            "Fine-tune a BERT model for text classification on a custom dataset",
            "Know the tradeoffs between large vs small BERT variants for production",
            "Understand knowledge distillation: how DistilBERT retains 97% performance at 40% size",
            "Explain subword tokenization: why not character-level or word-level?",
            "Implement semantic search using SBERT embeddings"
          ],
          res: [
            "BERT: Pre-training of Deep Bidirectional Transformers (Devlin et al. 2018)",
            "RoBERTa: A Robustly Optimized BERT Pretraining Approach (Liu et al. 2019)",
            "The Illustrated BERT (Jay Alammar blog)",
            "Sentence-BERT paper (Reimers & Gurevych 2019)"
          ]
        },
        {
          name: "GPT and Autoregressive Language Models",
          tag: "advanced",
          desc: "GPT's decoder-only architecture generates text autoregressively: each token is predicted given all previous tokens. The scaling law story: GPT, GPT-2 (1.5B, released with caution), GPT-3 (175B, few-shot in-context learning, the first 'emergent' capabilities). In-context learning (ICL): learning from examples in the prompt without gradient updates — why does it work? Chain-of-thought prompting. Instruction following. Sampling strategies: greedy, beam search, top-k, top-p (nucleus), temperature. GPT-4 and the move to multimodality.",
          master: [
            "Explain why autoregressive generation is O(n²) in attention and how KV-caching helps",
            "Understand KV-cache: store computed K and V for previous tokens to avoid recomputation",
            "Know the difference between greedy, top-k, top-p, and temperature sampling",
            "Explain in-context learning: how a frozen model appears to 'learn' from prompt examples",
            "Understand emergent capabilities: why do certain abilities appear suddenly at scale?",
            "Know what perplexity measures and how to interpret it",
            "Explain why BPE tokenization creates suboptimal token splits for some languages"
          ],
          res: [
            "Language Models are Unsupervised Multitask Learners (GPT-2 paper)",
            "Language Models are Few-Shot Learners (GPT-3 paper)",
            "Scaling Laws for Neural Language Models (Kaplan et al. 2020)",
            "nanoGPT source code (study and implement from scratch)"
          ]
        }
      ]
    },
    {
      name: "LLM Training and Alignment",
      level: "advanced",
      tagline: "From pre-training to helpful assistants",
      desc: "Training modern LLMs requires understanding the full pipeline: data curation, tokenization, distributed pre-training, supervised fine-tuning, and alignment via RLHF or DPO. This is where raw language models become helpful, harmless, and honest assistants. The Chinchilla scaling laws changed how the field thinks about compute-optimal training.",
      topics: [
        {
          name: "Pre-training at Scale",
          tag: "advanced",
          desc: "Data pipeline for pre-training: Common Crawl (raw internet text), deduplication (exact via hashing, fuzzy via MinHash LSH), quality filtering (classifier-based, heuristic-based), data mixing across domains. BPE tokenizer training from scratch. Chinchilla scaling laws (Hoffmann et al., 2022): for a given compute budget C, optimal model size N* ∝ C^0.5 and optimal tokens T* ∝ C^0.5 — you should train a smaller model on more tokens than previously believed. Distributed training: data parallelism (DDP), tensor parallelism (Megatron-LM), pipeline parallelism, fully sharded data parallel (FSDP). Learning rate scheduling for long runs.",
          master: [
            "Explain the Chinchilla result and why GPT-3 was undertrained by this standard",
            "Understand data deduplication: why duplicates hurt language modeling",
            "Know the difference between data parallelism, tensor parallelism, and pipeline parallelism",
            "Understand gradient checkpointing vs activation recomputation tradeoffs",
            "Explain ZeRO optimization stages (1, 2, 3) for memory-efficient training",
            "Know how to implement BPE tokenizer training from a corpus",
            "Understand the importance of data mixture and domain proportions"
          ],
          res: [
            "Training Compute-Optimal Large Language Models (Chinchilla paper, Hoffmann 2022)",
            "Megatron-LM: Training Multi-Billion Parameter Language Models",
            "The Pile: An 800GB Dataset for Language Modeling",
            "LLaMA: Open and Efficient Foundation Language Models (Meta AI 2023)"
          ]
        },
        {
          name: "Instruction Tuning and RLHF",
          tag: "advanced",
          desc: "Supervised Fine-Tuning (SFT) on instruction-response pairs teaches the model to follow instructions. But SFT alone produces mediocre assistants. RLHF (Reinforcement Learning from Human Feedback): train a reward model on human preference comparisons, then optimize the language model using PPO to maximize reward while staying close to the SFT policy (KL divergence penalty). InstructGPT (OpenAI 2022) first demonstrated this pipeline publicly. Constitutional AI (Anthropic): self-critique and revision. DPO (Direct Preference Optimization, 2023) bypasses the reward model entirely — shown to be equivalent to RLHF with a specific implicit reward model. GRPO (Group Relative Policy Optimization, DeepSeek-R1) achieves reasoning at lower compute cost.",
          master: [
            "Explain the three stages of RLHF: SFT, reward modeling, PPO fine-tuning",
            "Understand why the KL penalty in PPO prevents the model from drifting too far from the SFT policy",
            "Derive why DPO is equivalent to RLHF with a specific implicit reward parameterization",
            "Know what Constitutional AI (RLAIF) is and why it reduces human annotation cost",
            "Understand the reward hacking problem: models finding shortcuts to maximize reward",
            "Know what GRPO is and why it's more compute-efficient than PPO for reasoning",
            "Explain why models trained only on SFT tend to have poor calibration"
          ],
          res: [
            "Training Language Models to Follow Instructions with Human Feedback (InstructGPT 2022)",
            "Direct Preference Optimization (Rafailov et al. 2023)",
            "Constitutional AI: Harmlessness from AI Feedback (Anthropic 2022)",
            "DeepSeek-R1 Technical Report (2025)"
          ]
        },
        {
          name: "Efficient Fine-Tuning",
          tag: "advanced",
          desc: "Full fine-tuning of a 7B+ parameter model requires massive GPU memory. Parameter-efficient fine-tuning (PEFT) methods train only a small subset of parameters. LoRA (Low-Rank Adaptation): freeze the pre-trained weights and inject trainable low-rank matrices A and B into attention layers — the update is W = W₀ + BA where B∈R^(d×r), A∈R^(r×k), r << d. QLoRA: quantize the frozen weights to 4-bit NF4, use double quantization, and fine-tune LoRA adapters in 16-bit. This enables fine-tuning a 65B model on a single 48GB GPU. Prompt tuning, prefix tuning, IA³ as lighter alternatives. GaLore for pre-training in reduced memory.",
          master: [
            "Explain the mathematical insight behind LoRA: weight updates are low-rank in fine-tuning",
            "Understand NF4 quantization in QLoRA: why Normal Float 4 is optimal for normal distributions",
            "Know how to set LoRA rank and alpha hyperparameters — what do they control?",
            "Compare LoRA vs prefix tuning vs prompt tuning for different task types",
            "Understand what happens when you merge LoRA weights back into the base model",
            "Fine-tune a 7B model with QLoRA on a single 24GB GPU end to end",
            "Know the intrinsic dimensionality hypothesis: why low rank is sufficient for fine-tuning"
          ],
          res: [
            "LoRA: Low-Rank Adaptation of Large Language Models (Hu et al. 2021)",
            "QLoRA: Efficient Finetuning of Quantized LLMs (Dettmers et al. 2023)",
            "Hugging Face PEFT documentation",
            "The Practical Guides for Large Language Models"
          ]
        }
      ]
    },
    {
      name: "Computer Vision and Multimodal AI",
      level: "advanced",
      tagline: "Teaching machines to see and understand",
      desc: "Vision has been transformed by the same architectures as language. Vision Transformers (ViT) now dominate large-scale image recognition. CLIP connected vision and language in a shared embedding space. Diffusion models generate photorealistic images. Multimodal models (GPT-4V, LLaVA, Gemini) process images and text together. This phase covers modern vision deep learning from CNNs to diffusion.",
      topics: [
        {
          name: "Vision Transformers and Modern CNN Architectures",
          tag: "advanced",
          desc: "Vision Transformer (ViT): split image into fixed-size patches, project each to an embedding, add positional embeddings, apply standard Transformer encoder. At scale, ViT outperforms CNNs trained with fewer resources. Swin Transformer: hierarchical ViT with shifted windows for locality, downsampling for multi-scale processing. DeiT: data-efficient image Transformers via distillation. EfficientNet compound scaling. ConvNeXt: pure CNN modernized with Transformer design principles — layer norm, inverted bottleneck, large kernels. DINO and DINOv2: self-supervised ViT training that learns strong features without labels.",
          master: [
            "Explain why ViT needs large training data while CNNs work with less",
            "Understand the patch embedding projection: why 16×16 patches?",
            "Explain Swin's shifted window attention and why it reduces memory from O(n²) to O(n)",
            "Know the difference between supervised ViT and self-supervised DINO features",
            "Understand the compound scaling principle in EfficientNet: width, depth, resolution",
            "Explain why ConvNeXt outperforms standard CNNs despite using only convolutions",
            "Compare ViT vs CNN for different dataset sizes and tasks"
          ],
          res: [
            "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale (ViT paper)",
            "Swin Transformer: Hierarchical Vision Transformer using Shifted Windows",
            "Training data-efficient image transformers (DeiT paper)",
            "Emerging Properties in Self-Supervised Vision Transformers (DINO paper)"
          ]
        },
        {
          name: "Generative Models: VAEs and GANs",
          tag: "advanced",
          desc: "Variational Autoencoders (VAE): encoder maps input to a distribution (mean and variance) in latent space, decoder reconstructs from samples of that distribution. The ELBO objective: reconstruction loss + KL divergence regularizer. The reparameterization trick enables backpropagation through sampling. Generative Adversarial Networks (GAN): generator and discriminator play a minimax game. Wasserstein GAN: use earth mover distance for more stable training. Progressive GAN, StyleGAN2 (AdaIN, mapping network). Conditional generation, image-to-image translation (pix2pix, CycleGAN).",
          master: [
            "Derive the VAE ELBO from first principles as a lower bound on log p(x)",
            "Explain the reparameterization trick: why you cannot backprop through a sample without it",
            "Understand mode collapse in GANs and the techniques used to prevent it",
            "Explain why Wasserstein distance is superior to Jensen-Shannon divergence for GANs",
            "Know how StyleGAN2's AdaIN layers control style at different scales",
            "Understand the disentanglement problem in latent spaces",
            "Explain why VAEs produce blurry images compared to GANs"
          ],
          res: [
            "Auto-Encoding Variational Bayes (Kingma & Welling 2013)",
            "Generative Adversarial Networks (Goodfellow et al. 2014)",
            "Progressive Growing of GANs (Karras et al. 2018)",
            "Analyzing and Improving the Image Quality of StyleGAN (StyleGAN2 2020)"
          ]
        },
        {
          name: "Diffusion Models",
          tag: "advanced",
          desc: "Diffusion models are the current state of the art for image generation. The forward process gradually adds Gaussian noise to an image over T steps until it becomes pure noise. The reverse process learns to denoise step by step. The key insight: you can parameterize the reverse process as predicting the noise added at each step. DDPM training: simply train a UNet to predict ε given the noisy image and timestep. DDIM: deterministic sampling, 10-50× fewer steps. Classifier-free guidance (CFG): combine conditional and unconditional predictions to improve quality. Latent diffusion (Stable Diffusion): work in a compressed VAE latent space for efficiency. Flow matching: simpler formulation with straight paths.",
          master: [
            "Derive the DDPM forward process closed form: x_t = √ᾱ_t x_0 + √(1-ᾱ_t) ε",
            "Explain why the loss simplifies to just predicting the noise ε",
            "Understand classifier-free guidance: the tradeoff between quality and diversity",
            "Explain why latent diffusion is 4-8× more compute efficient than pixel-space diffusion",
            "Understand DDIM: how to make sampling deterministic and 10× faster",
            "Know the difference between v-prediction and ε-prediction parameterizations",
            "Explain flow matching and why straight trajectories are more efficient"
          ],
          res: [
            "Denoising Diffusion Probabilistic Models (Ho et al. 2020)",
            "Denoising Diffusion Implicit Models (Song et al. 2020 — DDIM)",
            "High-Resolution Image Synthesis with Latent Diffusion Models (Rombach 2022)",
            "Flow Matching for Generative Modeling (Lipman et al. 2022)"
          ]
        }
      ]
    },
    {
      name: "Advanced Research Topics",
      level: "expert",
      tagline: "The active research frontier",
      desc: "These are the areas where PhD theses are written today. Mechanistic interpretability (understanding what computations transformers perform), graph neural networks (learning on structured data), reinforcement learning for decision making, and world models. Mastery here means you can read, understand, critique, and extend papers in these areas.",
      topics: [
        {
          name: "Mechanistic Interpretability",
          tag: "research",
          desc: "Reverse-engineering what neural networks actually compute. Circuit analysis: identifying minimal subgraphs of the network that implement specific behaviors. The superposition hypothesis: models represent more features than they have neurons because features are nearly orthogonal and co-activate rarely. Sparse Autoencoders (SAEs) as a tool for extracting monosemantic features from polysemantic neurons. Activation patching and causal tracing: surgically intervening in activations to identify which components are responsible for specific behaviors. Induction heads: the mechanism behind in-context learning in transformers. ROME and MEMIT: locating and editing factual memories.",
          master: [
            "Run activation patching on GPT-2 to identify the indirect object identification circuit",
            "Train a sparse autoencoder on MLP activations and analyze the discovered features",
            "Reproduce induction head formation from scratch in a 2-layer attention-only model",
            "Implement causal tracing to localize factual associations in a small LM",
            "Understand the superposition hypothesis and its implications for interpretability",
            "Use TransformerLens to analyze attention patterns in a real transformer",
            "Read and summarize a recent mechanistic interpretability paper from Anthropic"
          ],
          deepdive: "The superposition hypothesis explains why neurons are polysemantic. A model with d neurons can represent up to O(d²) features if those features are sparse enough — they interfere but rarely activate together. SAEs recover these features by learning a sparse overcomplete basis. The consequence for safety is significant: it means that 'feature directions' in activation space are more fundamental than neurons, and that current neural networks are fundamentally harder to interpret than we thought.",
          res: [
            "A Mathematical Framework for Transformer Circuits (Elhage et al., Anthropic 2021)",
            "Toy Models of Superposition (Elhage et al., Anthropic 2022)",
            "Towards Monosemanticity (Bricken et al., Anthropic 2023)",
            "ARENA: Alignment Research Engineer Accelerator (practical mechanistic interp course)"
          ]
        },
        {
          name: "Reinforcement Learning",
          tag: "advanced",
          desc: "An agent interacts with an environment, observes states, takes actions, and receives rewards. The goal: learn a policy π(a|s) that maximizes expected cumulative reward. Markov Decision Processes (MDP) formalism. Value functions: V(s) (expected return from state s), Q(s,a) (expected return from state s, taking action a). Bellman equations. Model-free methods: Q-learning (off-policy, convergence guarantee), SARSA (on-policy). Deep Q-Network (DQN): approximate Q with a neural network, experience replay, target network. Policy gradient theorem: directly optimize policy via gradient ascent on expected reward. REINFORCE algorithm. Actor-critic (A3C, A2C, PPO). AlphaGo/AlphaZero: Monte Carlo Tree Search + deep RL.",
          master: [
            "Derive the Bellman optimality equation for Q*(s,a)",
            "Explain the exploration-exploitation tradeoff and ε-greedy strategies",
            "Understand why experience replay stabilizes DQN training",
            "Derive the policy gradient theorem and the REINFORCE algorithm",
            "Understand PPO's clipped surrogate objective and why it prevents large policy updates",
            "Explain value-based vs policy-based vs actor-critic methods and their tradeoffs",
            "Implement a DQN agent that solves CartPole or a simple Atari game"
          ],
          res: [
            "Reinforcement Learning: An Introduction (Sutton & Barto — free PDF, canonical)",
            "Spinning Up in Deep RL (OpenAI — free, practical RL introduction)",
            "Proximal Policy Optimization Algorithms (Schulman et al. 2017 — PPO paper)",
            "Human-level control through deep reinforcement learning (DQN/Atari paper 2015)"
          ]
        },
        {
          name: "Graph Neural Networks",
          tag: "advanced",
          desc: "Graphs are the natural representation for molecules, social networks, knowledge graphs, and citation networks. Graph Neural Networks (GNNs) generalize deep learning to graph-structured data via the message passing framework: each node aggregates information from its neighbors, updates its representation, and repeats for k layers. GCN (Kipf & Welling): spectral convolution simplified to a neighborhood aggregation. GraphSAGE: inductive learning via neighborhood sampling. GAT: attention-weighted neighbor aggregation. GIN (Graph Isomorphism Network): provably most expressive MPNN, matches Weisfeiler-Lehman graph isomorphism test. Applications: molecular property prediction (drug discovery), knowledge graph completion, recommendation systems.",
          master: [
            "Derive the GCN update rule from spectral graph convolution",
            "Understand the Weisfeiler-Lehman test and why standard GNNs cannot exceed its expressiveness",
            "Explain how GIN achieves WL-level expressiveness via injective aggregation",
            "Understand over-smoothing: why stacking many GNN layers hurts performance",
            "Apply a GNN to molecular property prediction — the canonical graph learning task",
            "Understand graph attention (GAT) and how attention weights are computed",
            "Know the difference between transductive (fixed graph) and inductive (new nodes) learning"
          ],
          res: [
            "Semi-Supervised Classification with Graph Convolutional Networks (Kipf & Welling 2016)",
            "How Powerful are Graph Neural Networks? (Xu et al. 2018 — GIN paper)",
            "Graph Attention Networks (Veličković et al. 2017)",
            "Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges (Bronstein et al.)"
          ]
        }
      ]
    },
    {
      name: "Production AI Systems",
      level: "expert",
      tagline: "From research to real-world impact",
      desc: "A model that only works in a notebook is not useful. Production AI requires MLOps, serving infrastructure, monitoring, evaluation, and responsible deployment practices. This phase bridges the gap between research and engineering.",
      topics: [
        {
          name: "MLOps and Model Serving",
          tag: "advanced",
          desc: "ML pipelines in production: data versioning (DVC), experiment tracking (MLflow, Weights & Biases), model registry, automated retraining. Feature stores (Feast, Tecton). Model serving: REST API serving (FastAPI + model), batching strategies, latency vs throughput tradeoffs. Inference optimization: ONNX export, TorchScript, quantization (int8, int4 post-training, QAT), knowledge distillation, pruning. For LLMs specifically: vLLM (PagedAttention for efficient KV-cache management), TensorRT-LLM, continuous batching. A/B testing, canary deployments, shadow mode.",
          master: [
            "Set up an experiment tracking pipeline with Weights & Biases for model training",
            "Quantize a model to int8 and compare accuracy vs latency tradeoffs",
            "Deploy a model as a REST API with FastAPI and benchmark its throughput",
            "Implement continuous batching for LLM serving and understand why it's critical",
            "Understand PagedAttention (vLLM): why fragmented KV cache wastes GPU memory",
            "Set up model monitoring: data drift detection, performance degradation alerts",
            "Design a feature store for a recommendation system"
          ],
          res: [
            "Designing Machine Learning Systems (Chip Huyen — practical MLOps guide)",
            "vLLM: Easy, Fast, and Cheap LLM Serving (paper and documentation)",
            "ML Engineering (Andriy Burkov)",
            "Made With ML (madewithml.com — free MLOps course)"
          ]
        },
        {
          name: "AI Evaluation and Benchmarking",
          tag: "advanced",
          desc: "You cannot improve what you cannot measure. Evaluation for language models: perplexity, BLEU, ROUGE, BERTScore (all flawed in different ways). Benchmark suites: MMLU (massive multitask language understanding), HellaSwag (commonsense reasoning), HumanEval (code generation), TruthfulQA (hallucination), GSM8K (grade school math reasoning). LLM-as-a-judge: using GPT-4 or Claude to score outputs. Evals for safety: toxicity (Perspective API), bias benchmarks. Red-teaming: adversarial prompting to find failure modes. The problem of benchmark contamination: models trained on data that includes benchmark answers.",
          master: [
            "Understand the limitations of BLEU and when BERTScore is more appropriate",
            "Know the major LLM benchmarks and what each actually measures",
            "Design a custom evaluation suite for a specific domain application",
            "Understand benchmark contamination and how to detect it",
            "Implement LLM-as-judge evaluation with a scoring rubric",
            "Conduct structured red-teaming of an LLM application",
            "Understand the Elo rating system used by LMSYS Chatbot Arena"
          ],
          res: [
            "MMLU: Measuring Massive Multitask Language Understanding (Hendrycks 2020)",
            "Holistic Evaluation of Language Models (HELM, Stanford CRFM)",
            "TruthfulQA paper (Lin et al. 2021)",
            "Language Model Evaluation Harness (EleutherAI — framework)"
          ]
        },
        {
          name: "AI Safety and Responsible AI",
          tag: "research",
          desc: "As AI systems become more capable, their alignment with human values becomes critical. Alignment problem: ensuring powerful AI systems do what we want. Inner alignment: the model optimizes for the intended objective. Outer alignment: the specified objective matches the true objective. Reward hacking. Scalable oversight: how to supervise systems more capable than humans (debate, recursive reward modeling). Constitutional AI and RLAIF. Interpretability as a safety tool. Emergent capabilities and unpredictability at scale. AI governance and policy. This is one of the most important open research problems.",
          master: [
            "Explain the distinction between inner and outer alignment problems",
            "Understand reward hacking with concrete examples from RL and RLHF",
            "Know what scalable oversight means and why it's necessary",
            "Understand the debate over whether capability and safety research are complementary or in tension",
            "Read and summarize at least 3 AI safety research papers",
            "Explain why interpretability matters for safety — not just explainability",
            "Understand the arguments for and against different timelines for transformative AI"
          ],
          res: [
            "Concrete Problems in AI Safety (Amodei et al. 2016 — foundational paper)",
            "Superintelligence (Nick Bostrom — philosophical case for safety)",
            "The Alignment Forum (alignmentforum.org — research community)",
            "Anthropic's Core Views and research agenda (anthropic.com)"
          ]
        }
      ]
    }
  ]
};