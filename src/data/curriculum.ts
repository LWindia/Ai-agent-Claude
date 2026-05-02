export interface CurriculumTopic {
  title: string
  points: string[]
}

export interface CurriculumModule {
  id: number
  module: string
  title: string
  topics: CurriculumTopic[]
}

export const curriculum: CurriculumModule[] = [
  {
    id: 1,
    module: '01',
    title: 'Foundations of Generative AI & LLM Ecosystem',
    topics: [
      {
        title: 'Evolution of Artificial Intelligence',
        points: [
          'Rule-based systems → Machine Learning → Deep Learning → Generative AI → Agentic AI',
        ],
      },
      {
        title: 'Fundamentals of Large Language Models',
        points: [
          'Transformer architecture (conceptual overview)',
          'Training paradigms: pre-training, fine-tuning, alignment',
          'Capabilities and limitations of modern LLMs',
          'Understanding hallucinations, bias, and reliability challenges',
        ],
      },
      {
        title: 'Overview of AI Ecosystem',
        points: [
          'APIs, SDKs, and model providers',
          'Introduction to key platforms: OpenAI, Anthropic',
        ],
      },
    ],
  },
  {
    id: 2,
    module: '02',
    title: 'Core Principles of Agentic AI',
    topics: [
      {
        title: 'Definition and Evolution of Agentic AI',
        points: [
          'Generative AI vs Agentic AI vs Autonomous Systems',
        ],
      },
      {
        title: 'Core Characteristics of AI Agents',
        points: [
          'Goal-oriented behavior',
          'Decision-making loops',
          'Context awareness',
        ],
      },
      {
        title: 'Agent Lifecycle & Types',
        points: [
          'Input → Reasoning → Action → Feedback → Iteration',
          'Reactive, deliberative, and hybrid agents',
          'Use case mapping across industries',
        ],
      },
    ],
  },
  {
    id: 3,
    module: '03',
    title: 'LLM System Design & Architecture',
    topics: [
      {
        title: 'From Prompts to Systems',
        points: [
          'Architectural thinking beyond single prompts',
          'Input processing, reasoning, execution, and output validation layers',
        ],
      },
      {
        title: 'Workflow & Context Design',
        points: [
          'Prompt engineering vs system orchestration',
          'Designing structured workflows using LLMs',
          'Tokenization and context window management',
        ],
      },
      {
        title: 'Performance Considerations',
        points: [
          'Latency, throughput, and cost trade-offs',
          'Model selection strategies for different applications',
        ],
      },
    ],
  },
  {
    id: 4,
    module: '04',
    title: 'Memory, Context & Knowledge Integration',
    topics: [
      {
        title: 'Memory in AI Systems',
        points: [
          'Ephemeral (session-based) memory',
          'Persistent (long-term knowledge) memory',
          'Context management strategies',
        ],
      },
      {
        title: 'Retrieval-Augmented Generation (RAG)',
        points: [
          'Conceptual architecture and retrieval mechanisms',
          'Structured vs unstructured knowledge sources',
          'Embeddings and semantic search (conceptual)',
        ],
      },
      {
        title: 'Limitations & Challenges',
        points: [
          'Limitations of current memory systems',
        ],
      },
    ],
  },
  {
    id: 5,
    module: '05',
    title: 'Tool Usage & AI Workflow Orchestration',
    topics: [
      {
        title: 'Extending AI with Tools',
        points: [
          'Role of tools in extending AI capabilities',
          'API interaction patterns',
          'Function calling and structured outputs',
        ],
      },
      {
        title: 'Workflow Orchestration',
        points: [
          'Sequential, conditional, and iterative workflows',
          'Designing reliable AI workflows',
          'Error handling and fallback strategies',
        ],
      },
      {
        title: 'Enterprise Integration',
        points: [
          'Integration patterns in enterprise systems',
        ],
      },
    ],
  },
  {
    id: 6,
    module: '06',
    title: 'Claude & Advanced Model Capabilities',
    topics: [
      {
        title: 'Claude Model Family',
        points: [
          'Claude model family overview',
          'Long-context reasoning and document comprehension',
          'Structured reasoning and step-by-step outputs',
        ],
      },
      {
        title: 'Capabilities & Safety',
        points: [
          'Code understanding and generation capabilities',
          'Safety alignment and controllability',
        ],
      },
      {
        title: 'Comparative Analysis',
        points: [
          'Performance considerations vs OpenAI models',
          'Use-case suitability and model selection frameworks',
        ],
      },
    ],
  },
  {
    id: 7,
    module: '07',
    title: 'Multi-Agent Systems & Coordination',
    topics: [
      {
        title: 'Agent Collaboration Models',
        points: [
          'Hierarchical, peer-to-peer, and hybrid coordination',
          'Task decomposition strategies',
          'Communication protocols between agents',
        ],
      },
      {
        title: 'Coordination Challenges',
        points: [
          'Conflicts, redundancy, and synchronization',
        ],
      },
      {
        title: 'Real-World Applications',
        points: [
          'Multi-agent system use cases across industries',
        ],
      },
    ],
  },
  {
    id: 8,
    module: '08',
    title: 'AI Systems in Production',
    topics: [
      {
        title: 'System Lifecycle',
        points: [
          'Design → Development → Deployment → Monitoring → Iteration',
          'Cloud vs on-premise deployment environments',
          'Infrastructure considerations (high-level)',
        ],
      },
      {
        title: 'Observability & Reliability',
        points: [
          'Logging, monitoring, and alerting concepts',
          'Reliability and fault tolerance',
        ],
      },
      {
        title: 'Security & Scale',
        points: [
          'Scalability and performance optimization',
          'Security and data privacy considerations',
        ],
      },
    ],
  },
  {
    id: 9,
    module: '09',
    title: 'Evaluation, Testing & Optimization',
    topics: [
      {
        title: 'Evaluation Frameworks',
        points: [
          'Qualitative vs quantitative evaluation',
          'Benchmarking AI performance',
        ],
      },
      {
        title: 'Failure Modes & Validation',
        points: [
          'Hallucination, irrelevant outputs, inconsistent reasoning',
          'Output validation strategies',
        ],
      },
      {
        title: 'Optimization',
        points: [
          'Iterative system improvement approaches',
          'Cost-performance optimization frameworks',
        ],
      },
    ],
  },
  {
    id: 10,
    module: '10',
    title: 'Industry Applications of Agentic AI',
    topics: [
      {
        title: 'Sector Applications',
        points: [
          'Software & SaaS: automation and copilots',
          'DevOps: intelligent monitoring and workflows',
          'Customer Support: conversational agents and ticket automation',
        ],
      },
      {
        title: 'Enterprise & Finance',
        points: [
          'Finance: risk analysis and reporting',
          'Enterprise Operations: workflow automation and decision systems',
        ],
      },
      {
        title: 'Case Studies',
        points: [
          'Cross-industry case study analysis',
        ],
      },
    ],
  },
  {
    id: 11,
    module: '11',
    title: 'Future of Agentic AI & Emerging Trends',
    topics: [
      {
        title: 'Evolution of AI Systems',
        points: [
          'Rise of AI copilots and digital workers',
          'Multi-agent ecosystems at scale',
          'Human-AI collaboration models',
        ],
      },
      {
        title: 'Outlook & Ethics',
        points: [
          'Regulatory and ethical considerations',
          'Future skill requirements in AI engineering',
          'Industry outlook 2026–2030',
        ],
      },
    ],
  },
  {
    id: 12,
    module: '12',
    title: 'Strategic Thinking for AI Systems',
    topics: [
      {
        title: 'Product & Strategy',
        points: [
          'Designing AI-driven products',
          'Identifying automation opportunities',
          'Evaluating feasibility of AI solutions',
        ],
      },
      {
        title: 'Business Decisions',
        points: [
          'Build vs buy decisions in AI adoption',
          'Cost-benefit analysis of AI systems',
          'Product thinking in AI engineering',
        ],
      },
    ],
  },
]
