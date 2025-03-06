// Types for our SEO content
export type UseCase = {
  id: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  features: string[];
  benefits: string[];
  faqs: Array<{ question: string; answer: string }>;
  ctaText: string;
};

export type Industry = {
  id: string;
  name: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  challenges: string[];
  solutions: string[];
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
  ctaText: string;
};

// Sample data for use cases
export const useCases: UseCase[] = [
  {
    id: 'social-media-for-ecommerce',
    title: 'AI-Powered Social Media for E-commerce',
    description: 'Boost your e-commerce sales with AI-generated product promotions, seasonal campaigns, and customer engagement posts.',
    metaTitle: 'AI Social Media Management for E-commerce | Kleo',
    metaDescription: 'Increase e-commerce sales with Kleo\'s AI-powered social media management. Create product promotions, seasonal campaigns, and engagement posts.',
    features: [
      'Product showcase templates',
      'Sale announcement automation',
      'Customer review highlights',
      'Shopping season campaign generator'
    ],
    benefits: [
      'Increase product visibility',
      'Drive more traffic to your store',
      'Boost conversion rates',
      'Save time on content creation'
    ],
    faqs: [
      {
        question: 'How can Kleo help my e-commerce business?',
        answer: 'Kleo automates your social media content creation with AI that understands e-commerce. It generates product promotions, sale announcements, and seasonal campaigns tailored to your brand voice.'
      },
      {
        question: 'Can I schedule posts for shopping events like Black Friday?',
        answer: 'Yes! Kleo\'s bulk content creation lets you plan and schedule all your promotional posts for major shopping events in advance.'
      }
    ],
    ctaText: 'Boost Your E-commerce Sales'
  },
  {
    id: 'social-media-for-agencies',
    title: 'Scale Your Agency with AI Social Media Management',
    description: 'Manage multiple client accounts efficiently with Kleo\'s AI-powered content creation and team collaboration tools.',
    metaTitle: 'AI Social Media Management for Agencies | Kleo',
    metaDescription: 'Scale your agency operations with Kleo\'s AI social media platform. Manage multiple clients, create content at scale, and improve team collaboration.',
    features: [
      'Multi-client management',
      'Brand voice profiles per client',
      'Bulk content generation',
      'Client approval workflows'
    ],
    benefits: [
      'Handle more clients with the same team',
      'Maintain consistent quality across accounts',
      'Reduce content creation time by 80%',
      'Improve client satisfaction with faster turnarounds'
    ],
    faqs: [
      {
        question: 'How many client accounts can I manage with Kleo?',
        answer: 'Kleo\'s agency plans allow you to manage unlimited client accounts with separate workspaces for each client.'
      },
      {
        question: 'Can I create different brand voices for each client?',
        answer: 'Absolutely! Kleo lets you create and save unique brand voice profiles for each client, ensuring consistent and on-brand content.'
      }
    ],
    ctaText: 'Scale Your Agency Today'
  },
  {
    id: 'social-media-for-small-business',
    title: 'AI Social Media for Small Businesses',
    description: 'Level the playing field with enterprise-grade social media tools designed for small business budgets and needs.',
    metaTitle: 'AI Social Media Management for Small Businesses | Kleo',
    metaDescription: 'Kleo helps small businesses compete on social media with AI-powered content creation, scheduling, and analytics at an affordable price.',
    features: [
      'Budget-friendly plans',
      'Easy-to-use interface',
      'Time-saving automation',
      'Professional content templates'
    ],
    benefits: [
      'Compete with larger brands',
      'Maintain consistent posting schedule',
      'Create professional content without a design team',
      'Grow your audience organically'
    ],
    faqs: [
      {
        question: 'Is Kleo affordable for small businesses?',
        answer: 'Yes! Kleo offers plans specifically designed for small businesses with all the essential features at a budget-friendly price point.'
      },
      {
        question: 'Do I need technical skills to use Kleo?',
        answer: 'Not at all. Kleo is designed to be intuitive and user-friendly, even for those with minimal technical experience.'
      }
    ],
    ctaText: 'Grow Your Small Business'
  }
];

// Sample data for industries
export const industries: Industry[] = [
  {
    id: 'for-marketing-agencies',
    name: 'Marketing Agencies',
    title: 'AI Social Media Management for Marketing Agencies',
    description: 'Streamline client management and content creation with Kleo\'s AI-powered platform built for marketing agencies.',
    metaTitle: 'AI Social Media Platform for Marketing Agencies | Kleo',
    metaDescription: 'Kleo helps marketing agencies manage multiple clients, create content at scale, and improve team collaboration with AI-powered tools.',
    challenges: [
      'Managing multiple client accounts',
      'Creating unique content for each client',
      'Maintaining consistent quality',
      'Meeting tight deadlines'
    ],
    solutions: [
      'Team workspaces for each client',
      'AI-powered content generation with client-specific brand voices',
      'Bulk scheduling and content calendar',
      'Performance analytics for client reporting'
    ],
    testimonial: {
      quote: 'Kleo has transformed how we manage social media for our clients. We\'ve doubled our client roster without adding headcount.',
      author: 'Sarah Johnson',
      company: 'Elevate Marketing'
    },
    ctaText: 'Transform Your Agency Workflow'
  },
  {
    id: 'for-e-commerce',
    name: 'E-commerce',
    title: 'AI Social Media Management for E-commerce Businesses',
    description: 'Drive more sales and engagement with AI-powered social media tools designed for e-commerce businesses.',
    metaTitle: 'AI Social Media Platform for E-commerce | Kleo',
    metaDescription: 'Kleo helps e-commerce businesses increase sales through AI-powered social media content, product showcases, and promotional campaigns.',
    challenges: [
      'Creating engaging product content',
      'Managing seasonal promotions',
      'Maintaining consistent brand voice',
      'Converting followers into customers'
    ],
    solutions: [
      'Product showcase templates',
      'Seasonal campaign generator',
      'Brand voice AI customization',
      'Conversion-focused content strategies'
    ],
    testimonial: {
      quote: 'Since using Kleo, our social media conversion rate has increased by 35%. The AI-generated product showcases save us hours every week.',
      author: 'Michael Chen',
      company: 'Urban Outfitters'
    },
    ctaText: 'Boost Your E-commerce Sales'
  },
  {
    id: 'for-creators',
    name: 'Content Creators',
    title: 'AI Social Media Management for Content Creators',
    description: 'Amplify your personal brand and reach with AI-powered social media tools designed for content creators and influencers.',
    metaTitle: 'AI Social Media Platform for Content Creators | Kleo',
    metaDescription: 'Kleo helps content creators and influencers grow their audience with AI-powered content creation, scheduling, and analytics.',
    challenges: [
      'Maintaining consistent posting schedule',
      'Creating engaging content across platforms',
      'Growing audience and engagement',
      'Balancing content creation with engagement'
    ],
    solutions: [
      'Cross-platform content adaptation',
      'AI-powered content ideas generator',
      'Optimal posting time recommendations',
      'Audience growth analytics'
    ],
    testimonial: {
      quote: 'Kleo has been a game-changer for my content creation workflow. I\'ve grown my following by 50% since I started using it six months ago.',
      author: 'Jamie Rodriguez',
      company: 'Lifestyle Creator'
    },
    ctaText: 'Grow Your Creator Brand'
  }
];

// Feature pages data
export const featurePages = [
  {
    id: 'ai-content-creation',
    title: 'AI-Powered Content Creation',
    description: 'Generate engaging social media content with AI that learns your brand voice.',
    metaTitle: 'AI Content Creation for Social Media | Kleo',
    metaDescription: 'Create engaging social media content in seconds with Kleo\'s AI that learns and adapts to your unique brand voice.',
    keyPoints: [
      'Brand voice customization',
      'Multi-platform content generation',
      'Content idea suggestions',
      'Bulk content creation'
    ],
    benefits: [
      'Save hours on content creation',
      'Maintain consistent brand voice',
      'Never run out of content ideas',
      'Scale your content production'
    ]
  },
  {
    id: 'team-collaboration',
    title: 'Team Collaboration Tools',
    description: 'Streamline your social media workflow with powerful team collaboration features.',
    metaTitle: 'Social Media Team Collaboration Tools | Kleo',
    metaDescription: 'Kleo\'s team collaboration tools help marketing teams work together efficiently with shared calendars, approval workflows, and asset libraries.',
    keyPoints: [
      'Shared content calendar',
      'Approval workflows',
      'Team workspaces',
      'Asset library'
    ],
    benefits: [
      'Improve team coordination',
      'Streamline content approval process',
      'Organize assets efficiently',
      'Maintain brand consistency across team members'
    ]
  },
  {
    id: 'analytics-insights',
    title: 'Analytics & Performance Insights',
    description: 'Make data-driven decisions with comprehensive social media analytics and insights.',
    metaTitle: 'Social Media Analytics & Performance Insights | Kleo',
    metaDescription: 'Kleo provides comprehensive social media analytics and performance insights to help you optimize your strategy and improve results.',
    keyPoints: [
      'Cross-platform performance metrics',
      'Audience growth tracking',
      'Content performance analysis',
      'Custom reporting'
    ],
    benefits: [
      'Understand what content performs best',
      'Track ROI of social media efforts',
      'Identify growth opportunities',
      'Optimize posting strategy'
    ]
  }
];
