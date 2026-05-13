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
    title: 'Introduction to Claude for DevOps',
    topics: [
      {
        title: 'Understanding Claude for Infrastructure Engineering',
        points: [
          'What Claude brings to DevOps workflows',
          'AI-native vs traditional infrastructure operations',
        ],
      },
      {
        title: 'AI-Native DevOps Workflows',
        points: [
          'Rethinking pipelines with AI assistance',
          'Setting up AI DevOps workspace',
        ],
      },
      {
        title: 'Prompt Engineering for DevOps Teams',
        points: [
          'Context-aware infrastructure operations',
          'Crafting effective prompts for infra tasks',
        ],
      },
    ],
  },
  {
    id: 2,
    module: '02',
    title: 'Claude for Linux Operations',
    topics: [
      {
        title: 'AI-Generated Linux Commands',
        points: [
          'Generating shell commands with Claude',
          'Intelligent server administration workflows',
        ],
      },
      {
        title: 'AI-Based Troubleshooting',
        points: [
          'Log analysis using Claude',
          'Diagnosing system issues with AI assistance',
        ],
      },
      {
        title: 'Shell Automation using AI',
        points: [
          'Automating repetitive admin tasks',
          'Building AI-assisted shell scripts',
        ],
      },
    ],
  },
  {
    id: 3,
    module: '03',
    title: 'Claude for Git & Repository Engineering',
    topics: [
      {
        title: 'AI-Assisted Git Operations',
        points: [
          'Intelligent commit & branch strategies',
          'Repository workflow automation',
        ],
      },
      {
        title: 'AI-Based Code Review Assistance',
        points: [
          'Automated review suggestions with Claude',
          'Operational collaboration workflows',
        ],
      },
    ],
  },
  {
    id: 4,
    module: '04',
    title: 'Claude for Docker Engineering',
    topics: [
      {
        title: 'AI-Generated Dockerfiles',
        points: [
          'Container optimization using Claude',
          'AI-assisted multi-container workflows',
        ],
      },
      {
        title: 'Intelligent Container Debugging',
        points: [
          'Docker troubleshooting with AI',
          'Diagnosing container failures using Claude',
        ],
      },
    ],
  },
  {
    id: 5,
    module: '05',
    title: 'Claude for Advanced Container Operations',
    topics: [
      {
        title: 'AI-Based Container Diagnostics',
        points: [
          'Container networking assistance',
          'AI-driven image optimization',
        ],
      },
      {
        title: 'Autonomous Container Workflow Engineering',
        points: [
          'Intelligent deployment suggestions',
          'End-to-end container lifecycle automation',
        ],
      },
    ],
  },
  {
    id: 6,
    module: '06',
    title: 'Claude for Kubernetes Engineering',
    topics: [
      {
        title: 'AI-Generated Kubernetes YAML',
        points: [
          'Intelligent deployment automation',
          'AI-assisted cluster diagnostics',
        ],
      },
      {
        title: 'Kubernetes Troubleshooting Workflows',
        points: [
          'AI-based resource optimization',
          'Diagnosing pod and node failures with Claude',
        ],
      },
    ],
  },
  {
    id: 7,
    module: '07',
    title: 'Claude for Advanced Kubernetes Operations',
    topics: [
      {
        title: 'AI-Based Pod Failure Analysis',
        points: [
          'Intelligent Kubernetes recovery planning',
          'Helm template generation using Claude',
        ],
      },
      {
        title: 'AI-Assisted Scaling Strategies',
        points: [
          'Kubernetes stability optimization',
          'Autonomous cluster health management',
        ],
      },
    ],
  },
  {
    id: 8,
    module: '08',
    title: 'Claude for Terraform Engineering',
    topics: [
      {
        title: 'AI-Generated Terraform Architectures',
        points: [
          'Infrastructure as Code using AI',
          'Terraform module generation with Claude',
        ],
      },
      {
        title: 'AI-Assisted Infrastructure Provisioning',
        points: [
          'Infrastructure refactoring using Claude',
          'Validating IaC with AI assistance',
        ],
      },
    ],
  },
  {
    id: 9,
    module: '09',
    title: 'Claude for Advanced Infrastructure Automation',
    topics: [
      {
        title: 'AI-Based Infrastructure Drift Detection',
        points: [
          'Multi-environment infrastructure generation',
          'Infrastructure lifecycle automation',
        ],
      },
      {
        title: 'AI-Assisted Cloud Architecture Design',
        points: [
          'Intelligent infrastructure governance',
          'Designing resilient cloud systems with Claude',
        ],
      },
    ],
  },
  {
    id: 10,
    module: '10',
    title: 'Claude for AWS Operations',
    topics: [
      {
        title: 'AI-Assisted AWS Architecture Engineering',
        points: [
          'Intelligent cloud resource planning',
          'AI-based infrastructure validation',
        ],
      },
      {
        title: 'Cloud Deployment Optimization',
        points: [
          'AWS operational intelligence workflows',
          'Cost-aware deployment strategies with Claude',
        ],
      },
    ],
  },
  {
    id: 11,
    module: '11',
    title: 'Claude for CI/CD Automation',
    topics: [
      {
        title: 'AI-Generated CI/CD Pipelines',
        points: [
          'Intelligent build workflow automation',
          'Deployment workflow engineering',
        ],
      },
      {
        title: 'AI-Assisted Rollback Strategies',
        points: [
          'Continuous delivery optimization',
          'Failure detection and automated recovery',
        ],
      },
    ],
  },
  {
    id: 12,
    module: '12',
    title: 'Claude for GitHub Actions Engineering',
    topics: [
      {
        title: 'AI-Generated GitHub Actions Workflows',
        points: [
          'Intelligent deployment automation',
          'AI-based CI/CD troubleshooting',
        ],
      },
      {
        title: 'Multi-Environment Pipeline Generation',
        points: [
          'Workflow optimization using Claude',
          'Reusable action templates with AI',
        ],
      },
    ],
  },
  {
    id: 13,
    module: '13',
    title: 'Claude for Jenkins Automation',
    topics: [
      {
        title: 'AI-Generated Jenkins Pipelines',
        points: [
          'Intelligent build automation',
          'Deployment workflow optimization',
        ],
      },
      {
        title: 'Pipeline Troubleshooting using AI',
        points: [
          'Operational workflow intelligence',
          'Diagnosing Jenkins failures with Claude',
        ],
      },
    ],
  },
  {
    id: 14,
    module: '14',
    title: 'Claude for Production Monitoring',
    topics: [
      {
        title: 'AI-Based Log Correlation',
        points: [
          'Intelligent operational diagnostics',
          'Infrastructure monitoring intelligence',
        ],
      },
      {
        title: 'AI-Assisted Alert Analysis',
        points: [
          'Operational stability engineering',
          'Reducing alert fatigue with Claude',
        ],
      },
    ],
  },
  {
    id: 15,
    module: '15',
    title: 'Claude for Incident Engineering',
    topics: [
      {
        title: 'AI-Powered Root Cause Analysis',
        points: [
          'Intelligent incident reconstruction',
          'Production failure investigation',
        ],
      },
      {
        title: 'Autonomous Troubleshooting Workflows',
        points: [
          'Reliability intelligence systems',
          'Post-incident reporting with Claude',
        ],
      },
    ],
  },
  {
    id: 16,
    module: '16',
    title: 'Claude for Self-Healing Infrastructure',
    topics: [
      {
        title: 'AI-Based Auto Remediation Workflows',
        points: [
          'Intelligent rollback systems',
          'Autonomous recovery automation',
        ],
      },
      {
        title: 'Infrastructure Stability Optimization',
        points: [
          'Predictive operational intelligence',
          'Designing self-healing pipelines with Claude',
        ],
      },
    ],
  },
  {
    id: 17,
    module: '17',
    title: 'Claude for Cloud Cost Optimization',
    topics: [
      {
        title: 'AI-Assisted Infrastructure Cost Analysis',
        points: [
          'Resource optimization workflows',
          'Intelligent scaling recommendations',
        ],
      },
      {
        title: 'Operational Efficiency Engineering',
        points: [
          'AI-based cloud optimization strategies',
          'FinOps workflows powered by Claude',
        ],
      },
    ],
  },
  {
    id: 18,
    module: '18',
    title: 'Claude for Platform Engineering',
    topics: [
      {
        title: 'AI-Native Platform Engineering Concepts',
        points: [
          'Intelligent environment standardization',
          'Infrastructure governance using AI',
        ],
      },
      {
        title: 'Autonomous Operational Engineering',
        points: [
          'Platform workflow automation',
          'Building internal developer platforms with Claude',
        ],
      },
    ],
  },
  {
    id: 19,
    module: '19',
    title: 'Claude Code for DevOps Engineering',
    topics: [
      {
        title: 'Repository-Aware Infrastructure Automation',
        points: [
          'AI-assisted operational engineering',
          'AI-driven codebase intelligence',
        ],
      },
      {
        title: 'Autonomous Workflow Engineering using Claude Code',
        points: [
          'Intelligent infrastructure refactoring',
          'End-to-end repo-to-deployment automation',
        ],
      },
    ],
  },
  {
    id: 20,
    module: '20',
    title: 'Enterprise AI-Native DevOps Systems',
    topics: [
      {
        title: 'Designing AI-Native Operational Architectures',
        points: [
          'Autonomous infrastructure engineering',
          'Intelligent deployment governance',
        ],
      },
      {
        title: 'AI-Driven Production Operations',
        points: [
          'Future of AI-powered DevOps engineering',
          'Building enterprise-grade AI-native DevOps systems',
        ],
      },
    ],
  },
]
