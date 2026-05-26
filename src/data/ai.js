export const aiData = {
  name: "ARTIFICIAL INTELLIGENCE & MACHINE LEARNING",
  area: "ai",
  eyebrow: "Machine Learning · Deep Learning · NLP · Transformers · LLMs · MLOps",
  sub: "Most people approach ML by running tutorials and copy-pasting model architectures without understanding what is happening mathematically. That produces engineers who can run notebooks but cannot diagnose why a model is not converging, why it is overfitting, or why it works in development and falls apart in production. This roadmap builds from first principles. The math is not optional — it is the only way to reason about what your model is actually doing.",
  phases: [
    {
      name: "Mathematical Foundations",
      level: "foundation",
      tagline: "You cannot reason about ML without the underlying math",
      desc: "The mathematics under machine learning is not academic formality — it is the actual mechanism. Linear algebra describes how data transforms through a model. Calculus explains how models learn. Probability theory is the language of uncertainty, and ML is fundamentally about making probabilistic statements about data you have not seen. Do not rush past this phase. Engineers who skip the math spend years guessing at hyperparameters and cargo-culting solutions they do not understand.",
      topics: [
        {
          name: "Linear Algebra for Machine Learning",
          tag: "core",
          desc: "Vectors are lists of numbers and also directions in space — the same object, two intuitions, both necessary. A matrix is a linear transformation: it takes a vector and produces another vector by rotating, scaling, and shearing the space. Matrix multiplication is function composition — applying one transformation after another. The dot product measures similarity: high dot product means two vectors point in similar directions. This is why cosine similarity works for embeddings. Eigenvectors and eigenvalues describe the directions in which a matrix acts by pure scaling — PCA finds the directions of maximum variance by computing eigenvectors of the covariance matrix. Singular Value Decomposition decomposes any matrix into rotation, scale, rotation — the mathematical foundation of dimensionality reduction and recommendation systems. Tensors generalize matrices to arbitrary dimensions — a batch of RGB images is a rank-4 tensor: batch, height, width, channels.",
          master: [
            "Explain what matrix multiplication means geometrically — not the algorithm, the transformation it represents",
            "Derive PCA from scratch: covariance matrix, eigenvectors, and what the principal components represent",
            "Explain why the dot product measures similarity and derive cosine similarity from it",
            "Compute the SVD of a small matrix by hand and explain what each component represents",
            "Explain what it means when a neural network layer is rank-deficient and why it matters for expressiveness",
            "Describe the relationship between matrix rank and the dimensionality of the output space of a transformation"
          ],
          res: [
            "3Blue1Brown Essence of Linear Algebra (YouTube) — the visual intuition foundation, watch before everything else",
            "Mathematics for Machine Learning (Deisenroth, Faisal, Ong) — free at mml-book.github.io, the definitive text",
            "Gilbert Strang MIT OpenCourseWare — structured academic treatment with extraordinary clarity",
            "Fast.ai linear algebra notebooks — applied exercises that connect math to ML directly"
          ]
        },
        {
          name: "Calculus and Optimization",
          tag: "core",
          desc: "Derivatives measure how a function changes with respect to its inputs. In ML, the function is the loss; the inputs are the model parameters. Gradient descent is simple: move the parameters opposite to the gradient — the direction of steepest descent. The chain rule is how backpropagation works. A neural network is a composition of functions; the chain rule propagates gradients backward through every layer. Partial derivatives of the loss with respect to each weight tell you exactly how much each weight contributed to the error. Second-order methods use the Hessian (matrix of second derivatives) to account for curvature — computationally prohibitive for large networks but theoretically superior. The saddle point problem: most flat regions in high-dimensional loss landscapes are saddle points, not local minima. This is counterintuitive but good news — modern networks rarely get stuck in bad local minima for the reason most people assume.",
          master: [
            "Derive the gradient of a simple loss function by hand and explain what each partial derivative means",
            "Explain backpropagation using the chain rule — trace gradients through a two-layer network on paper",
            "Explain why learning rate matters and what happens geometrically when it is too large versus too small",
            "Describe the geometry of a loss landscape: minima, maxima, saddle points, and why saddle points dominate in high dimensions",
            "Explain the difference between gradient descent, stochastic gradient descent, and mini-batch gradient descent",
            "Describe what Adam optimizer is doing differently from vanilla SGD and what problem its adaptive rates solve"
          ],
          res: [
            "3Blue1Brown Calculus series — builds correct intuition before formalism",
            "Deep Learning (Goodfellow, Bengio, Courville) Chapters 4 and 6 — free at deeplearningbook.org",
            "Andrej Karpathy micrograd — implement backpropagation from scratch in 100 lines, the most valuable single exercise",
            "CS231n backpropagation notes (cs231n.github.io) — dense but precise"
          ]
        },
        {
          name: "Probability and Statistics",
          tag: "core",
          desc: "Machine learning is applied probability. A classifier outputs a probability distribution over classes — the hard label comes from thresholding that distribution. Probability distributions you must understand: Gaussian (continuous real-valued data), Bernoulli (binary outcomes), Categorical (multiclass). Bayes' theorem is the mechanism of learning from evidence — posterior is proportional to likelihood times prior. Maximum likelihood estimation: find the parameters that make the observed data most probable under your assumed distribution. Cross-entropy loss is MLE for classification problems in disguise — minimizing cross-entropy is equivalent to maximizing the log-likelihood of the correct class. KL divergence measures how different one probability distribution is from another — it appears in variational methods, RLHF, and everywhere you compare distributions. Entropy measures uncertainty: high entropy means the distribution is spread out. The connection between entropy and compression explains why language models work.",
          master: [
            "Derive cross-entropy loss from maximum likelihood estimation for a classification problem",
            "Explain Bayes' theorem and apply it to a concrete belief-updating example",
            "Describe what KL divergence measures, why it is not symmetric, and where it appears in VAEs and RLHF",
            "Explain overfitting in terms of probability — what distribution the model learns versus what it should learn",
            "Derive the maximum likelihood estimate for the mean and variance of a Gaussian distribution",
            "Explain why entropy is a natural measure of uncertainty using its definition and an example"
          ],
          res: [
            "Pattern Recognition and Machine Learning (Bishop) — rigorous, Bayesian perspective, the definitive reference",
            "Think Bayes (Allen Downey) — free at greenteapress.com, excellent for probabilistic intuition",
            "Information Theory, Inference, and Learning Algorithms (David MacKay) — free at inference.org.uk",
            "StatQuest with Josh Starmer (YouTube) — visual, accurate explanations of statistical concepts"
          ]
        }
      ]
    },
    {
      name: "Classical Machine Learning",
      level: "foundation",
      tagline: "Most production ML is not deep learning — and classical methods teach you to think correctly",
      desc: "The industry obsession with deep learning produces engineers who reach for a neural network when a gradient boosted tree would be faster, more interpretable, and better-performing on structured data. Classical ML methods are not outdated — they are the right tool for a large proportion of real problems, and they force you to think about features, distributions, and model capacity in ways that transfer directly to understanding deep learning.",
      topics: [
        {
          name: "Linear and Logistic Regression",
          tag: "core",
          desc: "Linear regression is not a trivial model to understand deeply. Ordinary least squares has a closed-form solution: the normal equation. It works because minimizing squared residuals is equivalent to maximum likelihood estimation under Gaussian noise assumptions. Regularization: L2 (Ridge) shrinks all coefficients toward zero — it handles multicollinearity but does not produce sparsity. L1 (Lasso) produces exact zeros — it does feature selection because the L1 penalty creates corners in the constraint space at zero. Elastic Net combines both. Logistic regression is linear regression with a sigmoid applied to the output — you are fitting a linear boundary in log-odds space. Softmax generalizes to multiclass. The assumptions of linear regression (linearity, homoscedasticity, independence, normality of residuals) matter because their violation tells you exactly when and how the model is wrong.",
          master: [
            "Derive the ordinary least squares solution and explain what the normal equation is computing geometrically",
            "Explain L1 vs L2 regularization: what each penalizes, why L1 produces sparsity, and when to use each",
            "Derive logistic regression loss from maximum likelihood and explain its equivalence to cross-entropy",
            "Diagnose the four assumptions of linear regression using residual plots and explain what each violation implies",
            "Explain the bias-variance tradeoff using model complexity and training set size as axes",
            "Interpret regression coefficients for both continuous and categorical predictors correctly"
          ],
          res: [
            "An Introduction to Statistical Learning (James, Witten, Hastie, Tibshirani) — free PDF, most accessible rigorous text",
            "The Elements of Statistical Learning (Hastie, Tibshirani, Friedman) — free PDF, more mathematically demanding",
            "StatQuest regression videos — builds intuition correctly before any implementation",
            "Hands-On Machine Learning (Aurélien Géron) — the best practical complement to the theory texts"
          ]
        },
        {
          name: "Gradient Boosting and Ensembles",
          tag: "core",
          desc: "Decision trees are inherently high-variance — small changes in data produce very different trees. Bagging (Bootstrap Aggregating) trains many trees on bootstrap samples and averages predictions: variance averages down, bias stays roughly constant. Random forests add feature randomization, decorrelating the trees further. Gradient boosting takes a different approach: fit a weak learner, compute the residuals (gradient of the loss), fit the next learner to those residuals, repeat. Each tree corrects the mistakes of the ensemble so far. XGBoost, LightGBM, and CatBoost are gradient boosted tree implementations that dominate structured data tasks. These consistently outperform neural networks on tabular data. Feature importance, SHAP values, and partial dependence plots are the interpretability tools that make these models deployable in regulated industries.",
          master: [
            "Explain how a decision tree chooses splits: information gain for classification, variance reduction for regression",
            "Explain why bagging reduces variance but not bias, using the variance decomposition",
            "Describe gradient boosting at an algorithmic level — what fitting to residuals means in terms of the gradient",
            "Tune an XGBoost or LightGBM model with proper cross-validation and explain what each major hyperparameter controls",
            "Use SHAP values to explain a single prediction and a global feature importance ranking",
            "Describe the conditions under which gradient boosting consistently outperforms neural networks"
          ],
          res: [
            "XGBoost documentation (xgboost.readthedocs.io) — the original algorithm paper is also required reading",
            "Interpretable Machine Learning (Christoph Molnar) — free at christophm.github.io, covers SHAP thoroughly",
            "LightGBM paper (Microsoft Research) — explains technical improvements over vanilla gradient boosting",
            "Kaggle Intermediate ML course — practical exercises with structured data"
          ]
        },
        {
          name: "Model Evaluation and Selection",
          tag: "core",
          desc: "Accuracy is the wrong metric in most real problems. When classes are imbalanced, a model that predicts the majority class on every input achieves high accuracy while being useless. Precision and recall trade off against each other depending on the application: a fraud detection system needs high recall (catch all fraud, accept some false alarms) while a spam filter might prioritize precision (never flag legitimate mail, accept missing some spam). F1 combines both. ROC-AUC measures how well a classifier separates classes regardless of threshold — it is appropriate when you need a threshold-independent evaluation. Cross-validation is mandatory when your dataset is small: k-fold splits the data into k parts and cycles through training on k-1 parts and validating on the remaining one. Data leakage is the most dangerous evaluation mistake: any transformation that uses information from the validation set (StandardScaler fit on the full dataset, target encoding without proper fold isolation) produces optimistic estimates that evaporate in production.",
          master: [
            "Explain the precision-recall trade-off and give a real use case where high recall matters more than high precision",
            "Implement k-fold cross-validation manually and explain what each fold is testing",
            "Identify a data leakage scenario in a feature pipeline and explain how to fix it",
            "Explain what ROC-AUC measures and describe a situation where it is a misleading metric",
            "Design an evaluation protocol for a time-series prediction problem that prevents future leakage",
            "Compare models using statistical tests rather than point estimates — explain why single-number comparisons are unreliable"
          ],
          res: [
            "Scikit-learn model evaluation guide — comprehensive and accurate",
            "Kaggle competition discussions on leakage — real examples of common mistakes",
            "ROC Curves and Area Under the Curve Explained (machinelearningmastery.com) — practical treatment",
            "Applied Predictive Modeling (Kuhn and Johnson) — evaluation methodology in depth"
          ]
        }
      ]
    },
    {
      name: "Neural Networks and Deep Learning",
      level: "intermediate",
      tagline: "Understanding the architecture before scaling it",
      desc: "Neural networks are universal function approximators — with enough capacity and data, they can approximate any continuous function. That theorem tells you almost nothing useful in practice. What matters is understanding why certain architectures learn certain things, why depth matters differently from width, what activation functions do to the geometry of the decision boundary, and why training deep networks without careful initialization and normalization is an exercise in frustration.",
      topics: [
        {
          name: "Feedforward Networks and Backpropagation",
          tag: "core",
          desc: "A feedforward network is a directed acyclic graph of linear transformations interleaved with nonlinear activations. The linear transformation alone — regardless of depth — gives you a linear classifier. The activation function is the only source of nonlinearity. ReLU is the default: does not saturate for positive inputs, computationally trivial. Dying ReLU: a neuron whose input is always negative never activates and receives zero gradient — it becomes dead. Leaky ReLU and ELU prevent this. Sigmoid and tanh saturate at extremes — their gradients approach zero, causing vanishing gradients in deep networks. Weight initialization: Xavier for tanh networks, He for ReLU — both designed to maintain variance through layers. Batch normalization normalizes activations within a mini-batch and applies a learned affine transformation — it stabilizes training by keeping activations in a useful range throughout the network and was a key enabler of very deep networks.",
          master: [
            "Implement a feedforward network and backpropagation by hand without a deep learning framework",
            "Explain why depth with nonlinearities increases expressive power while depth without nonlinearities does not",
            "Explain dying ReLU: what causes it, how to detect it, and which activation functions prevent it",
            "Explain batch normalization: what it normalizes, why that helps, and what the learned parameters do",
            "Explain Xavier and He initialization: derive why each is appropriate for its activation function",
            "Describe the vanishing gradient problem and the architectural choices that address it"
          ],
          res: [
            "Deep Learning (Goodfellow et al.) Chapters 6–8 — the theoretical foundation",
            "Andrej Karpathy makemore series — builds a language model from a bigram up, exceptional for intuition",
            "CS231n Stanford notes — the backpropagation notes are among the clearest available",
            "Dive into Deep Learning (d2l.ai) — free, practical, interactive notebooks"
          ]
        },
        {
          name: "Convolutional Neural Networks",
          tag: "core",
          desc: "Convolutions exploit spatial structure: nearby pixels are more related than distant ones, and the same feature detector is useful everywhere in the image. A convolutional layer applies a learned filter by sliding it across the input — instead of a dense weight matrix, you have a small filter reused at every position. This gives local connectivity and weight sharing. VGG used stacked 3×3 filters. ResNet introduced skip connections: the identity shortcut allows gradients to flow without passing through multiple nonlinear layers, enabling 100+ layer networks. Transfer learning works because early layers learn general features (edges, textures) and late layers learn task-specific features — fine-tuning replaces and retrains the task-specific layers on your data while keeping the general features intact. Depthwise separable convolutions (MobileNet) separate channel-wise and spatial filtering, dramatically reducing parameters.",
          master: [
            "Explain what a convolution computes: receptive field, stride, padding, and output dimension calculation",
            "Explain why two stacked 3×3 convolutions are equivalent in receptive field to one 5×5 but have fewer parameters",
            "Explain ResNet skip connections: what problem they solve at the gradient level",
            "Describe how transfer learning works: what early layers learn versus late layers, and when to freeze versus fine-tune",
            "Apply a pretrained CNN to a new classification task with limited data and justify every decision",
            "Explain depthwise separable convolutions and why they reduce computation with minimal accuracy loss"
          ],
          res: [
            "CS231n Convolutional Neural Networks for Visual Recognition — the standard reference",
            "ResNet paper (He et al., 2015) — short, read the original",
            "Papers with Code image classification benchmark — what architectures are actually current",
            "Visualizing and Understanding Convolutional Networks (Zeiler and Fergus) — what CNNs actually learn"
          ]
        },
        {
          name: "Optimization, Regularization, and Debugging",
          tag: "intermediate",
          desc: "Training a neural network is optimization in a space with billions of dimensions. Gradient descent with momentum accumulates a velocity vector — builds up speed in consistent directions, dampens oscillations. Adam combines momentum with per-parameter adaptive learning rates — default optimizer for most tasks but generalizes slightly worse than tuned SGD on image classification. Learning rate scheduling: cosine annealing is the current standard. Regularization: weight decay (L2) is equivalent to a Gaussian prior on weights. Dropout randomly zeroes activations during training — interpretable as training an ensemble of exponentially many networks. Label smoothing prevents overconfidence. Data augmentation is often the most effective regularization for vision tasks. Training diagnostics: a loss that does not decrease means the learning rate is wrong or the network is not connected correctly; a validation loss that diverges from training loss means overfitting; NaN loss usually means a learning rate that is too large or uninitialized weights.",
          master: [
            "Explain what momentum does to the optimization trajectory and why it helps in loss landscape ravines",
            "Implement cosine annealing learning rate schedule and explain why it outperforms step decay",
            "Explain dropout as an ensemble method — what networks are implicitly being averaged at inference time",
            "Diagnose underfitting and overfitting from training curves and prescribe the correct intervention for each",
            "Tune a model with Optuna — explain why random search outperforms grid search for most cases",
            "Debug a neural network that is not training: walk through a systematic checklist"
          ],
          res: [
            "A Recipe for Training Neural Networks (Andrej Karpathy blog) — the most practical advice available, read it twice",
            "Deep Learning (Goodfellow et al.) Chapters 7 and 8 — regularization and optimization",
            "Optuna documentation — practical hyperparameter optimization",
            "Troubleshooting Deep Neural Networks (Josh Tobin) — systematic debugging guide"
          ]
        }
      ]
    },
    {
      name: "Natural Language Processing and Transformers",
      level: "intermediate",
      tagline: "The attention mechanism changed every subfield simultaneously",
      desc: "Before transformers, NLP was a graveyard of specialized architectures — one model for translation, another for summarization, another for question answering. The attention mechanism unified these into a single architecture that scales with data and compute in a way recurrent networks never could. Understanding attention is the single most important architectural concept in modern AI.",
      topics: [
        {
          name: "Text Representation and Embeddings",
          tag: "core",
          desc: "How you represent text determines everything about what a model can learn. Bag of words loses all word order. TF-IDF weights by how often a word appears in a document divided by how often it appears across documents — suppresses common words, surfaces distinctive ones. Word2Vec learned distributed representations by training a shallow network to predict context words from a center word (skip-gram) or vice versa (CBOW). The learned embeddings captured semantic relationships — similar words appeared in similar contexts. The famous 'king - man + woman ≈ queen' property was not programmed; it emerged. GloVe learned from co-occurrence statistics. The key insight: word meaning can be encoded as a dense vector where geometric relationships encode semantic relationships. Contextualized embeddings (BERT) learned that the same word has different representations in different contexts — 'bank' in 'river bank' and 'savings bank' are different vectors.",
          master: [
            "Explain TF-IDF and describe the failure modes where it breaks down",
            "Explain the skip-gram model: what it predicts, what the loss function is, and why the embeddings capture semantics",
            "Describe negative sampling: why it is used and what it approximates",
            "Explain why contextualized embeddings are categorically different from static embeddings",
            "Use pretrained embeddings to solve an analogy task and describe where they systematically fail",
            "Explain byte-pair encoding (BPE) tokenization and why it handles out-of-vocabulary words"
          ],
          res: [
            "Word2Vec paper (Mikolov et al., 2013) — short, read the original",
            "The Illustrated Word2vec (Jay Alammar) — the best visual explanation",
            "Speech and Language Processing (Jurafsky and Martin) — free online, the definitive NLP textbook",
            "Hugging Face tokenizers documentation — practical subword tokenization"
          ]
        },
        {
          name: "The Transformer Architecture",
          tag: "core",
          desc: "Attention as a mechanism: given a query and a set of key-value pairs, compute a weighted sum of values where each weight is the similarity between the query and its key. Scaled dot-product attention divides by the square root of the key dimension — this prevents dot products from pushing softmax into regions of near-zero gradient. Multi-head attention runs multiple attention operations in parallel with different projections — each head attends to different aspects. The feed-forward sublayer applies a two-layer MLP to each position independently — most of the model's parameters live here, and factual knowledge appears to be stored here. Layer normalization before each sublayer (pre-norm) stabilizes training in modern transformers. Positional encodings inject sequence order — attention is permutation-invariant without them. Encoder: processes the full input bidirectionally. Decoder: generates tokens one at a time using causal self-attention plus cross-attention to the encoder.",
          master: [
            "Derive scaled dot-product attention from the query-key-value formulation — explain the scaling factor",
            "Explain multi-head attention: what each head can learn that single-head cannot",
            "Explain residual connections in a transformer block and why they are necessary for deep transformers",
            "Describe encoder-only (BERT), decoder-only (GPT), and encoder-decoder (T5) architectures and when each is appropriate",
            "Explain causal masking in autoregressive generation and why it is necessary during training",
            "Describe the quadratic complexity problem of attention and what Flash Attention does about it"
          ],
          deepdive: "Attention has quadratic complexity in sequence length — N tokens requires N² computations. For most tasks this is fine. For very long contexts (full documents, genomic sequences, long codebases), it becomes the primary bottleneck. Flash Attention does not reduce computational complexity but dramatically improves memory access patterns using tiling. By never materializing the full N×N attention matrix in HBM (high-bandwidth memory), it reduces memory reads and writes enough to provide 2–4× speedup on real hardware. This is not an approximation — the output is mathematically identical to standard attention. Understanding why attention is O(N²) and why Flash Attention is faster without being an approximation is essential for working with long-context models.",
          res: [
            "Attention Is All You Need (Vaswani et al., 2017) — read the original paper",
            "The Illustrated Transformer (Jay Alammar) — the best visual walkthrough",
            "Annotated Transformer (Harvard NLP) — the paper with inline code annotations",
            "Andrej Karpathy nanoGPT — implement a small GPT from scratch, the most valuable single exercise"
          ]
        }
      ]
    },
    {
      name: "Large Language Models and Foundation Models",
      level: "advanced",
      tagline: "The architecture is the same — the scale changed everything",
      desc: "LLMs are transformer decoders trained on internet-scale text. The capabilities that emerge at scale — reasoning, code generation, instruction following — were not explicitly designed. They emerged from the combination of scale, architecture, and data quality. Understanding how to use, adapt, and evaluate these models is a fundamental engineering skill. Understanding how they actually work is what separates engineers from practitioners.",
      topics: [
        {
          name: "Pretraining, Fine-tuning, and RLHF",
          tag: "advanced",
          desc: "Pretraining produces a model that predicts text. Turning that into a useful assistant requires alignment. RLHF (Reinforcement Learning from Human Feedback) is the standard approach. Step one: supervised fine-tuning on human demonstrations of desired behavior. Step two: train a reward model on human comparisons of outputs. Step three: use PPO to optimize the language model according to the reward model, with a KL penalty preventing the model from deviating too far from the base distribution. DPO (Direct Preference Optimization) replaces the reward model with a closed-form objective derived from the same preference data — simpler, cheaper, competitive results. LoRA (Low-Rank Adaptation) inserts trainable low-rank matrices into the attention layers and trains only those, leaving the base model frozen. This enables fine-tuning on consumer hardware and produces adapters that are a fraction of the full model size.",
          master: [
            "Describe the three stages of RLHF and explain why each step is necessary",
            "Explain DPO: what objective it optimizes and why it is equivalent to RLHF under certain assumptions",
            "Describe LoRA: what a low-rank decomposition means and why it works for adaptation",
            "Explain reward hacking: how a flawed reward model produces unintended behavior",
            "Fine-tune a small language model with LoRA on a domain-specific task and evaluate it properly",
            "Describe the Chinchilla scaling laws: optimal allocation of parameters versus training tokens"
          ],
          res: [
            "InstructGPT paper (Ouyang et al., 2022) — the RLHF paper, required reading",
            "DPO paper (Rafailov et al., 2023) — concise, read the math section",
            "LoRA paper (Hu et al., 2021) — the most important parameter-efficient fine-tuning method",
            "Hugging Face TRL library — practical RLHF and DPO implementations"
          ]
        },
        {
          name: "RAG, Prompting, and Production LLM Systems",
          tag: "advanced",
          desc: "LLMs have a knowledge cutoff and a finite context window. RAG (Retrieval-Augmented Generation) addresses both: retrieve relevant documents at inference time and include them in the prompt. Retrieval uses dense vector search — embed the query and all documents, find nearest neighbors. The embedding model must produce semantically meaningful representations. Vector databases (Pinecone, Qdrant, pgvector) handle approximate nearest-neighbor search at scale. Chunking strategy matters significantly — chunk too small and you lose context, too large and you include irrelevant content. Prompting is engineering: few-shot examples improve performance on structured tasks, chain-of-thought (asking the model to reason before answering) reliably improves accuracy on multi-step reasoning. Prompt injection is a real attack surface — user input that modifies the model's instructions. Production reliability: LLMs have probabilistic outputs, rate limits, latency variability, and per-token cost. Caching, output validation, retry logic, and cost monitoring are all engineering requirements.",
          master: [
            "Build a RAG pipeline from scratch: chunking, embedding, vector storage, retrieval, and generation",
            "Evaluate RAG quality: retrieval recall, generation faithfulness, and answer relevance",
            "Demonstrate that chain-of-thought prompting improves accuracy on a multi-step task",
            "Describe prompt injection: construct an example and explain how it bypasses intended behavior",
            "Implement output validation and retry logic for a structured data extraction use case",
            "Design cost monitoring for an LLM API application with high request volume"
          ],
          res: [
            "RAG paper (Lewis et al., 2020) — original paper, short",
            "LangChain documentation — most widely used RAG framework",
            "RAGAS (ragas.io) — framework for evaluating RAG quality",
            "OpenAI Cookbook — practical LLM application patterns"
          ]
        }
      ]
    },
    {
      name: "MLOps and Production Machine Learning",
      level: "advanced",
      tagline: "A model that is not in production is a research project",
      desc: "The gap between a working notebook and a production ML system is where most ML projects die. Model training is 10% of the work. Data pipelines, feature stores, model versioning, deployment, monitoring, and retraining infrastructure are the other 90%. ML systems decay in ways that software systems do not: the data distribution shifts, model performance degrades silently, and without systematic monitoring nobody notices until the business impact is obvious.",
      topics: [
        {
          name: "Feature Engineering and Data Pipelines",
          tag: "core",
          desc: "Features are the primary determinant of model performance. A well-engineered feature on a simple model beats a poorly-featured deep model on most real-world problems. Training-serving skew is one of the most common production ML bugs: the feature transformation applied during training is not identical to the one applied during serving. This happens constantly and silently — a StandardScaler fit on training data applies different scaling to slightly different production data distributions. The solution is a feature store or serving pipeline where both training and serving use the same code path. Data quality issues: missing values (their pattern of missingness is often information), outliers (winsorize before training, not after), and label noise (especially in human-labeled datasets). Feature validation: always compare the distribution of incoming production features against training feature distributions before every inference.",
          master: [
            "Identify and fix training-serving skew in a production feature pipeline",
            "Apply target encoding correctly — explain why naive application causes data leakage",
            "Design a feature store for a real-time recommendation system with sub-100ms serving latency",
            "Build a feature validation pipeline that catches distribution shifts between training and production data",
            "Explain why log-transforming a skewed feature helps linear models but not tree models",
            "Diagnose data quality issues in a dataset: missing values, outliers, duplicates, and label noise"
          ],
          res: [
            "Feast (feast.dev) — open-source feature store, practical starting point",
            "Designing Machine Learning Systems (Chip Huyen) — the best book on production ML engineering",
            "Great Expectations (greatexpectations.io) — data quality testing framework",
            "Feature Engineering and Selection (Kuhn and Johnson) — free online, thorough"
          ]
        },
        {
          name: "Model Deployment and Monitoring",
          tag: "advanced",
          desc: "Serving a model requires different infrastructure than training it. REST API serving: the model loads once per process, predictions serve per request. Batch inference: run predictions offline on large datasets, write results to a database. Real-time feature computation: features depending on recent events must be computed at serving time. Model quantization (INT8, FP16) reduces memory and computation at the cost of some precision — often the most impactful single change for production latency. Distribution shift: when production data differs from training data, performance degrades. Types: covariate shift (input distribution changes), label shift (output distribution changes), concept drift (the relationship between input and output changes). Monitoring: track input feature distributions, prediction distributions, and outcome metrics separately. Population Stability Index or KL divergence between current and baseline distributions catches drift before it causes noticeable failures. Automated retraining pipelines triggered by detected drift are the goal.",
          master: [
            "Deploy a model as a REST API with input validation, error handling, and request batching",
            "Implement data drift detection using statistical tests and set up actionable alerts",
            "Describe a canary deployment strategy for a model and explain what to monitor during rollout",
            "Quantize a neural network to INT8 and measure the accuracy-latency trade-off",
            "Design an automated retraining pipeline that triggers on detected performance degradation",
            "Explain shadow mode deployment and when it is appropriate for model evaluation"
          ],
          res: [
            "Designing Machine Learning Systems (Chip Huyen) — Chapters 7–9 on deployment and monitoring",
            "MLflow documentation — experiment tracking, model registry, and serving",
            "Evidently AI (evidentlyai.com) — open-source ML monitoring",
            "Google's Rules of Machine Learning (Martin Zinkevich) — hard-won production lessons"
          ]
        }
      ]
    }
  ]
}
