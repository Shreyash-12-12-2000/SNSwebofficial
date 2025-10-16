import { Monitor, Megaphone, Users, Headphones, BarChart3,Globe,Code,Video,Layout,Settings,MessageCircle, } from 'lucide-react'

import { LucideIcon } from 'lucide-react'

export interface ServiceData {
  id: string
  slug: string
  title: string
  description: string
  features: string[]
  icon: LucideIcon
  extendedDescription: string
  benefits: string[]
  process: {
    title: string
    description: string
  }[]
  caseStudy?: {
    title: string
    description: string
    results: string[]
  }
  pricing?: {
    starter: string
    professional: string
    enterprise: string
  }
}

export const servicesData: ServiceData[] = [
  {
    id: '1',
    slug: 'it-services',
    title: 'IT Services',
    description: 'Comprehensive technology solutions designed to modernize your infrastructure and enhance operational efficiency.',
    features: [
      'Cloud Infrastructure Management',
      'Cybersecurity & Data Protection',
      'Custom Software Development',
      'System Integration & Migration',
      '24/7 Technical Support',
      'Disaster Recovery Planning'
    ],
    icon: Monitor,
    extendedDescription: 'Our IT Services division provides comprehensive technology solutions that modernize your infrastructure and enhance operational efficiency. We specialize in cloud migration, cybersecurity implementation, and custom software development to help businesses stay competitive in the digital age.',
    benefits: [
      'Reduced operational costs by up to 40%',
      'Enhanced security and data protection',
      'Improved system reliability and uptime',
      'Scalable solutions that grow with your business',
      'Expert 24/7 technical support',
      'Compliance with industry standards'
    ],
    process: [
      {
        title: 'Infrastructure Assessment',
        description: 'Comprehensive evaluation of your current IT infrastructure and identification of optimization opportunities.'
      },
      {
        title: 'Solution Design',
        description: 'Custom technology roadmap development aligned with your business objectives and growth plans.'
      },
      {
        title: 'Implementation & Migration',
        description: 'Seamless deployment of new systems with minimal disruption to your daily operations.'
      },
      {
        title: 'Ongoing Support',
        description: 'Continuous monitoring, maintenance, and support to ensure optimal performance.'
      }
    ],
    caseStudy: {
      title: 'Manufacturing Company Digital Transformation',
      description: 'Helped a mid-size manufacturing company migrate to cloud infrastructure and implement IoT solutions.',
      results: [
        '45% reduction in IT operational costs',
        '99.9% system uptime achievement',
        '60% faster data processing and reporting',
        'Improved compliance with industry regulations'
      ]
    }
  },
  
  {
  id: '2',
  slug: 'website-design-development',
  title: 'Website Design & Development',
  description: 'Creative, responsive, and high-performance websites built to deliver engaging digital experiences and drive conversions.',
  features: [
    'Custom Website Design',
    'Responsive & Mobile-First Development',
    'E-commerce Solutions',
    'UI/UX Optimization',
    'SEO-Friendly Architecture',
    'Website Maintenance & Support'
  ],
  icon: Globe,
  extendedDescription: 'Our Website Design & Development services help businesses establish a strong online presence with modern, user-focused designs and cutting-edge technologies. From initial wireframes to full-scale deployment, we build websites that are fast, secure, scalable, and optimized for performance across all devices.',
  benefits: [
    'Increased brand visibility and engagement',
    'Improved user experience and conversion rates',
    'Optimized for SEO and faster page loading',
    'Fully responsive and mobile-friendly designs',
    'Seamless integration with CMS and third-party tools',
    'Ongoing updates and maintenance support'
  ],
  process: [
    {
      title: 'Discovery & Strategy',
      description: 'Understand business goals, target audience, and competitors to create a tailored design strategy.'
    },
    {
      title: 'Design & Prototyping',
      description: 'Develop wireframes and visual mockups that capture your brand identity and user experience vision.'
    },
    {
      title: 'Development & Testing',
      description: 'Build responsive, SEO-optimized, and high-performing websites using modern frameworks and CMS platforms.'
    },
    {
      title: 'Launch & Maintenance',
      description: 'Deploy the website with continuous performance monitoring, updates, and technical support.'
    }
  ],
  caseStudy: {
    title: 'E-commerce Platform Revamp for Retail Brand',
    description: 'Redesigned and developed a scalable, high-performance e-commerce website for a growing retail brand.',
    results: [
      '70% increase in online sales within 3 months',
      '50% faster page load time',
      'Improved user retention by 35%',
      'Enhanced SEO ranking and organic traffic growth'
    ]
  }
}, 

{
  id: '3',
  slug: 'web-application-development',
  title: 'Web Application Development',
  description: 'Powerful, secure, and scalable web applications tailored to streamline operations and enhance user engagement.',
  features: [
    'Custom Web App Development',
    'Progressive Web Apps (PWA)',
    'API Integration & Development',
    'Database Design & Management',
    'Cloud-Based Application Deployment',
    'Maintenance & Performance Optimization'
  ],
  icon: Code,
  extendedDescription: 'Our Web Application Development services deliver scalable, secure, and high-performing applications designed for modern businesses. We specialize in building tailored web solutions — from enterprise dashboards to complex SaaS platforms — using cutting-edge technologies that ensure seamless performance and growth readiness.',
  benefits: [
    'Enhanced business productivity and automation',
    'Highly secure and scalable architecture',
    'Seamless integration with existing systems',
    'Faster deployment and reduced time-to-market',
    'Cross-platform accessibility with responsive design',
    'Continuous support and version upgrades'
  ],
  process: [
    {
      title: 'Requirement Analysis',
      description: 'Collaborate with stakeholders to define goals, technical requirements, and user expectations.'
    },
    {
      title: 'Architecture & Design',
      description: 'Design robust system architecture and intuitive UI/UX for optimal functionality and performance.'
    },
    {
      title: 'Development & Integration',
      description: 'Develop scalable and secure applications with seamless integration of APIs and databases.'
    },
    {
      title: 'Testing & Deployment',
      description: 'Conduct extensive testing for performance, security, and usability before smooth deployment.'
    },
    {
      title: 'Support & Maintenance',
      description: 'Provide continuous updates, monitoring, and improvements to keep the application running flawlessly.'
    }
  ],
  caseStudy: {
    title: 'Custom ERP Web Application for Logistics Company',
    description: 'Developed a scalable enterprise web application to streamline operations and improve real-time data access.',
    results: [
      '55% increase in process efficiency',
      'Real-time tracking and analytics implementation',
      'Reduced manual work by 65%',
      'Enhanced data accuracy and operational transparency'
    ]
  }
},
{
  id: '7',
  slug: 'website-maintenance-support',
  title: 'Website Maintenance & Support',
  description: 'Reliable website maintenance and support services to ensure your site stays secure, up-to-date, and performing at its best.',
  features: [
    'Regular Website Updates',
    'Performance Monitoring & Optimization',
    'Security Monitoring & Malware Removal',
    'Backup & Disaster Recovery',
    'Bug Fixes & Troubleshooting',
    'Technical Support & Consultation'
  ],
  icon: Settings, // ✅ Valid icon
  extendedDescription: 'Our Website Maintenance & Support services help businesses keep their websites secure, fast, and fully functional. We handle everything from updates and backups to performance optimization and troubleshooting, allowing you to focus on your core business.',
  benefits: [
    'Minimized downtime and technical issues',
    'Enhanced website security and protection',
    'Improved website speed and performance',
    'Peace of mind with regular backups and monitoring',
    'Quick resolution of bugs and technical problems',
    'Expert guidance for website improvements'
  ],
  process: [
    {
      title: 'Monitoring & Assessment',
      description: 'Regularly monitor your website’s performance, security, and functionality to identify issues proactively.'
    },
    {
      title: 'Updates & Optimization',
      description: 'Perform software, plugin, and content updates while optimizing performance and loading speed.'
    },
    {
      title: 'Security & Backup',
      description: 'Implement security measures, remove vulnerabilities, and perform regular backups for disaster recovery.'
    },
    {
      title: 'Bug Fixes & Troubleshooting',
      description: 'Quickly address errors, broken links, and technical issues to ensure smooth operation.'
    },
    {
      title: 'Reporting & Consultation',
      description: 'Provide regular reports and expert recommendations for ongoing improvements and upgrades.'
    }
  ],
  caseStudy: {
    title: 'Maintenance & Support for E-commerce Website',
    description: 'Provided ongoing maintenance and technical support for a busy e-commerce website to ensure uptime, security, and optimal performance.',
    results: [
      '99.9% website uptime maintained',
      'Eliminated security threats and malware',
      'Reduced page load time by 40%',
      'Resolved technical issues within 24 hours on average'
    ]
  }
},
{
  id: '8',
  slug: 'chatbot-development',
  title: 'Chatbot Development',
  description: 'Intelligent chatbot solutions designed to automate customer interactions, improve engagement, and streamline support.',
  features: [
    'Custom AI & Rule-Based Chatbots',
    'Integration with Websites & Apps',
    'Natural Language Processing (NLP)',
    'Multi-Platform Support (Facebook, WhatsApp, etc.)',
    '24/7 Customer Interaction',
    'Analytics & Performance Tracking'
  ],
  icon: MessageCircle, // ✅ Valid icon for chatbot
  extendedDescription: 'Our Chatbot Development services help businesses automate interactions, reduce response times, and enhance customer satisfaction. We build smart chatbots with advanced NLP capabilities that understand user intent, provide accurate responses, and seamlessly integrate with your digital platforms.',
  benefits: [
    'Improved customer engagement and satisfaction',
    'Reduced operational costs by automating support',
    'Faster response times for customer queries',
    'Consistent and accurate information delivery',
    'Scalable solutions for growing customer base',
    'Insights through chatbot analytics and reporting'
  ],
  process: [
    {
      title: 'Requirement Analysis',
      description: 'Understand business goals, customer needs, and expected chatbot functionalities.'
    },
    {
      title: 'Design & Conversation Flow',
      description: 'Create conversation scripts, flowcharts, and interaction logic tailored to user needs.'
    },
    {
      title: 'Development & Integration',
      description: 'Build the chatbot using AI/NLP technologies and integrate it with your website, app, or messaging platforms.'
    },
    {
      title: 'Testing & Optimization',
      description: 'Test for performance, accuracy, and usability, then optimize responses and interactions.'
    },
    {
      title: 'Deployment & Monitoring',
      description: 'Launch the chatbot and continuously monitor, update, and improve its performance.'
    }
  ],
  caseStudy: {
    title: 'Customer Support Chatbot for E-commerce Platform',
    description: 'Developed a chatbot that handled common customer queries and order tracking, integrated with the e-commerce platform.',
    results: [
      'Reduced customer support response time by 70%',
      'Handled 60% of queries automatically',
      'Increased customer satisfaction rating by 25%',
      'Enabled 24/7 support without additional staffing'
    ]
  }
},

  {
    id: '2',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns that drive engagement, increase brand visibility, and generate qualified leads.',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) Advertising',
      'Social Media Management',
      'Content Marketing Strategy',
      'Email Marketing Campaigns',
      'Analytics & Performance Tracking'
    ],
    icon: Megaphone,
    extendedDescription: 'Our Digital Marketing team crafts data-driven strategies that amplify your brand presence across all digital channels. From SEO optimization to social media management, we help businesses connect with their target audience and drive measurable growth.',
    benefits: [
      'Increased online visibility and brand awareness',
      'Higher quality lead generation',
      'Improved conversion rates and ROI',
      'Enhanced customer engagement',
      'Comprehensive analytics and reporting',
      'Multi-channel marketing coordination'
    ],
    process: [
      {
        title: 'Market Research & Analysis',
        description: 'In-depth analysis of your market, competitors, and target audience to identify opportunities.'
      },
      {
        title: 'Strategy Development',
        description: 'Creation of comprehensive digital marketing strategy tailored to your business goals.'
      },
      {
        title: 'Campaign Execution',
        description: 'Implementation of multi-channel campaigns with continuous optimization for best results.'
      },
      {
        title: 'Performance Monitoring',
        description: 'Regular tracking, analysis, and reporting of campaign performance with actionable insights.'
      }
    ],
    caseStudy: {
      title: 'E-commerce Brand Growth Campaign',
      description: 'Executed comprehensive digital marketing strategy for an emerging e-commerce brand.',
      results: [
        '300% increase in organic traffic',
        '250% improvement in conversion rate',
        '400% growth in social media engagement',
        '$2M+ in additional revenue generated'
      ]
    }
  },

{
  id: '4',
  slug: 'social-media-marketing',
  title: 'Social Media Marketing',
  description: 'Strategic social media campaigns designed to boost brand awareness, engagement, and conversions across all platforms.',
  features: [
    'Social Media Strategy & Planning',
    'Content Creation & Curation',
    'Paid Advertising Campaigns',
    'Influencer Marketing',
    'Analytics & Performance Tracking',
    'Community Management'
  ],
  icon: Megaphone,
  extendedDescription: 'Our Social Media Marketing services help brands connect with their audience, increase engagement, and drive measurable results. We create tailored campaigns across platforms like Facebook, Instagram, LinkedIn, and Twitter, combining creative content with data-driven strategies to maximize ROI.',
  benefits: [
    'Increased brand visibility and awareness',
    'Higher engagement with target audience',
    'Effective lead generation and conversions',
    'Insightful analytics to optimize campaigns',
    'Improved brand loyalty and community building',
    'Cost-effective marketing with measurable results'
  ],
  process: [
    {
      title: 'Research & Strategy',
      description: 'Analyze target audience, competitors, and market trends to develop a tailored social media strategy.'
    },
    {
      title: 'Content Creation',
      description: 'Design engaging posts, graphics, videos, and other content that resonates with the audience.'
    },
    {
      title: 'Campaign Execution',
      description: 'Launch organic and paid campaigns across multiple social platforms with precise targeting.'
    },
    {
      title: 'Monitoring & Optimization',
      description: 'Track performance metrics, analyze results, and optimize campaigns for better outcomes.'
    },
    {
      title: 'Reporting & Insights',
      description: 'Provide detailed reports on campaign performance with actionable recommendations.'
    }
  ],
  caseStudy: {
    title: 'Brand Awareness Campaign for E-commerce Startup',
    description: 'Executed a multi-platform social media campaign to increase brand visibility and drive sales for a new e-commerce business.',
    results: [
      '200% increase in social media followers in 3 months',
      '150% growth in engagement rate',
      '35% increase in website traffic from social channels',
      '25% boost in sales from social campaigns'
    ]
  }
},

{
  id: '5',
  slug: 'video-marketing-youtube-growth',
  title: 'Video Marketing & YouTube Growth',
  description: 'Engaging video content and growth strategies designed to boost your brand presence, audience engagement, and YouTube channel performance.',
  features: [
    'YouTube Channel Strategy & Optimization',
    'Video Content Creation & Editing',
    'SEO for Videos & Thumbnails',
    'Paid Video Advertising Campaigns',
    'Audience Engagement & Community Building',
    'Analytics & Performance Tracking'
  ],
  icon: Video, // Updated icon
  extendedDescription: 'Our Video Marketing & YouTube Growth services help brands leverage the power of video to connect with audiences and grow their online presence. We create high-quality videos, optimize channels for discoverability, and implement growth strategies to increase subscribers, views, and engagement across platforms.',
  benefits: [
    'Increased brand visibility and reach',
    'Higher engagement through compelling video content',
    'Growth in subscribers and loyal audience base',
    'Improved SEO ranking for video content',
    'Better ROI through targeted video campaigns',
    'Actionable insights from analytics and performance metrics'
  ],
  process: [
    {
      title: 'Channel & Audience Analysis',
      description: 'Assess current channel performance, audience demographics, and competitors to define a growth strategy.'
    },
    {
      title: 'Content Planning & Production',
      description: 'Plan video topics, create scripts, shoot and edit engaging videos tailored to your audience.'
    },
    {
      title: 'Optimization & Publishing',
      description: 'Optimize titles, descriptions, tags, and thumbnails for search and engagement before publishing.'
    },
    {
      title: 'Promotion & Campaigns',
      description: 'Run paid and organic campaigns to increase views, engagement, and channel growth.'
    },
    {
      title: 'Monitoring & Analytics',
      description: 'Track performance metrics, audience behavior, and optimize future content for maximum growth.'
    }
  ],
  caseStudy: {
    title: 'YouTube Growth Campaign for Tech Startup',
    description: 'Developed a full YouTube strategy for a tech startup, creating videos and optimizing the channel to drive subscribers and engagement.',
    results: [
      '300% increase in subscribers in 6 months',
      '400% growth in average monthly views',
      'Increased engagement rate by 150%',
      'Boosted website traffic through video content'
    ]
  }
},

{
  id: '6',
  slug: 'ui-ux-design',
  title: 'UI/UX Design',
  description: 'Intuitive and visually compelling UI/UX designs that enhance user experience and drive engagement across digital platforms.',
  features: [
    'User Research & Analysis',
    'Wireframing & Prototyping',
    'Interaction & Visual Design',
    'Responsive & Mobile-First Design',
    'Usability Testing & Iteration',
    'Design System & Brand Integration'
  ],
  icon: Layout, // Updated icon for UI/UX Design
  extendedDescription: 'Our UI/UX Design services focus on creating seamless and enjoyable user experiences. We combine user research, wireframing, and interactive design to craft interfaces that are visually appealing, easy to use, and aligned with your brand identity.',
  benefits: [
    'Improved user satisfaction and engagement',
    'Increased conversion rates through optimized design',
    'Consistent and visually appealing brand presence',
    'Faster onboarding and easier navigation for users',
    'Reduced bounce rates and improved retention',
    'Designs that are scalable and adaptable across platforms'
  ],
  process: [
    {
      title: 'User Research & Discovery',
      description: 'Conduct research to understand user needs, behaviors, and pain points for informed design decisions.'
    },
    {
      title: 'Wireframing & Prototyping',
      description: 'Create low- and high-fidelity wireframes and interactive prototypes to visualize the user journey.'
    },
    {
      title: 'Visual & Interaction Design',
      description: 'Design visually engaging interfaces with smooth interactions that align with user expectations and brand identity.'
    },
    {
      title: 'Usability Testing & Iteration',
      description: 'Test designs with real users, gather feedback, and iterate to improve usability and experience.'
    },
    {
      title: 'Final Design & Handoff',
      description: 'Deliver design assets, style guides, and documentation to development teams for implementation.'
    }
  ],
  caseStudy: {
    title: 'Redesign of SaaS Dashboard for Productivity App',
    description: 'Revamped the UI/UX of a productivity app dashboard to improve usability and user engagement.',
    results: [
      '40% increase in daily active users',
      '30% faster task completion within the app',
      'Improved user satisfaction scores by 25%',
      'Reduced user support requests by 20%'
    ]
  }
},
{
    id: '3',
    slug: 'hr-recruitment',
    title: 'HR & Recruitment',
    description: 'Professional human resource solutions to help you attract, retain, and develop top talent for your organization.',
    features: [
      'Executive Search & Recruitment',
      'Talent Acquisition Strategy',
      'HR Policy Development',
      'Employee Training Programs',
      'Performance Management Systems',
      'Compensation & Benefits Consulting'
    ],
    icon: Users,
    extendedDescription: 'Our HR & Recruitment services provide comprehensive human capital solutions that help organizations build high-performing teams. We specialize in executive search, talent development, and HR strategy consulting to drive organizational success.',
    benefits: [
      'Access to top-tier talent pool',
      'Reduced time-to-hire by 50%',
      'Improved employee retention rates',
      'Enhanced organizational culture',
      'Compliance with employment regulations',
      'Strategic HR planning and development'
    ],
    process: [
      {
        title: 'Needs Assessment',
        description: 'Understanding your organizational structure, culture, and specific talent requirements.'
      },
      {
        title: 'Talent Sourcing',
        description: 'Leveraging our extensive network and advanced sourcing techniques to identify candidates.'
      },
      {
        title: 'Screening & Selection',
        description: 'Comprehensive evaluation process including interviews, assessments, and background checks.'
      },
      {
        title: 'Onboarding Support',
        description: 'Assistance with integration and ongoing talent development programs.'
      }
    ],
    caseStudy: {
      title: 'Tech Startup Team Building',
      description: 'Helped a fast-growing tech startup build their leadership team and scale their workforce.',
      results: [
        'Filled 15 key positions in 3 months',
        '95% candidate satisfaction rate',
        '85% retention rate after 12 months',
        'Reduced recruitment costs by 30%'
      ]
    }
  },
  {
    id: '4',
    slug: 'customer-support',
    title: 'Customer Support',
    description: 'World-class customer service solutions that enhance customer satisfaction and build lasting relationships.',
    features: [
      '24/7 Multi-channel Support',
      'Live Chat & Phone Support',
      'Help Desk Management',
      'Customer Success Programs',
      'Quality Assurance & Training',
      'CRM Integration & Management'
    ],
    icon: Headphones,
    extendedDescription: 'Our Customer Support solutions deliver exceptional service experiences that build lasting customer relationships. We provide comprehensive support infrastructure, from 24/7 helpdesk operations to customer success programs that drive retention and growth.',
    benefits: [
      'Improved customer satisfaction scores',
      'Reduced response and resolution times',
      'Increased customer retention rates',
      'Enhanced brand reputation',
      'Scalable support operations',
      'Comprehensive analytics and insights'
    ],
    process: [
      {
        title: 'Support Strategy Design',
        description: 'Development of customer support strategy aligned with your business objectives and customer needs.'
      },
      {
        title: 'Team Training & Setup',
        description: 'Comprehensive training of support teams and implementation of support infrastructure.'
      },
      {
        title: 'Multi-channel Deployment',
        description: 'Launch of integrated support channels including phone, chat, email, and social media.'
      },
      {
        title: 'Continuous Optimization',
        description: 'Regular performance monitoring and optimization to ensure exceptional service delivery.'
      }
    ],
    caseStudy: {
      title: 'SaaS Platform Support Transformation',
      description: 'Transformed customer support operations for a growing SaaS platform.',
      results: [
        '40% improvement in customer satisfaction',
        '60% reduction in average response time',
        '25% increase in customer retention',
        '50% reduction in support ticket escalations'
      ]
    }
  },
  {
    id: '5',
    slug: 'sales-and-marketing-solution',
    title: 'Sales And Marketing Solution ',
    description: 'A Sales and Marketing Solution is a strategy or toolset designed to attract, engage, and convert customers for business growth..',
    features: [
      'Lead Generation & Management',
      'Customer Relationship Management (CRM)',
      'Analytics & Reporting',
      'Multi-Channel Campaign Management',
      'Content Management ',
      'Mobile Access '
    ],
    icon: BarChart3,
    
    extendedDescription: 'A Sales and Marketing Solution is an integrated system designed to streamline, automate, and optimize the processes involved in attracting potential customers, converting leads, and nurturing long-term customer relationships..',
    benefits: [
      'Increased Lead Conversion - Helps capture, qualify, and nurture leads more effectively.',
      'Higher sales - Convert leads faster and more efficiently.',
      'Time-saving - Automate tasks and reduce manual work.',
      'Stronger relationships – Keep customers engaged and loyal.',
      'Smart decisions – Use data to improve strategies.',
      'Business growth – Scale your efforts as you grow.'
    ],
    process: [
      {
        title: 'Lead Generation',
        description: 'Attract potential customers through ads, content, social media, SEO, or email campaigns.'
      },
      {
        title: 'Lead Capture',
        description: 'Collect lead information using forms, landing pages, or chatbots.'
      },
      {
        title: 'Lead Qualification',
        description: 'Score and segment leads based on interest, behavior, or fit (using CRM tools).'
      },
      {
        title: 'Customer Onboarding',
        description: 'Welcome new customers with guides, support, or demos to ensure a smooth start.'
      }
    ],
    caseStudy: {
      title: 'Sales and Marketing Automation',
  description: 'Deployed an end-to-end sales and marketing automation solution for a mid-sized B2B SaaS company.',
  results: [
    '60% increase in qualified lead conversions',
    '40% reduction in customer acquisition cost',
    '3x improvement in email campaign engagement',
    '50% faster sales cycle from lead to close'
  ]
    }
  },
 
]

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find(service => service.slug === slug)
}

export const getAllServiceSlugs = (): string[] => {
  return servicesData.map(service => service.slug)
}