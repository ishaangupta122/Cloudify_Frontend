export const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/services", label: "Deployment and Services" },
  { href: "#", label: "Contact Us" },
];

export const HomePageData = {
  homeBanner: {
    badge: "Next-Level GPUaaS for Effortless Cloud Scaling and Deployement",
    title: "Revolutionize GPU Cloud Scaling with a Modern GPUaaS Platform",
    description:
      "Accelerate your cloud business with our single-agent GPU orchestration solution that simplifies operations, lowers costs, and delivers flexible, on-demand GPU capabilities.",
    buttonText: "Request a Demo",
    buttonLink: "#",
    dashboardImage: "/card_img_7.png",
    backgroundImage: "/home_banner_bg.png",
    backgroundOverlayImage: "/home_banner_overlay.png",
  },

  featuresSection: {
    title: "A Modern Way To Build And Scale Your GPU Cloud",
    description:
      "Accelerate your cloud business with our single-agent GPU orchestration solution that simplifies operations, lowers costs, and delivers flexible, on-demand GPU and CPU capabilities—without the steep learning curve of legacy platforms.",
    features: {
      topRow: [
        {
          image: "/card_img_2.png",
          title: "Zero-Capex Regional Deployments",
          description:
            "Eliminate the upfront hardware and deployment costs. Our platform lets you roll out a complete cloud product by simply integrating an agent on your server—and if data compliance, we can provide that too.",
        },
        {
          image: "/card_img_3.png",
          title: "Unified Workload Scheduling",
          description:
            "Host both virtual machines and containers on the same node, harnessing GPU or CPU resources as needed. Our integrated SDN infra allows seamless networking between VMs/VDIs, across regions.",
        },
        {
          image: "/card_img_4.png",
          title: "Flexible, Transparent Pricing",
          description:
            "With this usage, pay per VM, or subscription, you only pay for what you actually use. There's no minimum, no maximums, and no lock-in contracts.",
        },
      ],
      bottomRow: [
        {
          image: "/card_img_6.png",
          title: "Enterprise-Grade Consulting & Support",
          description:
            "Our highly experienced team offers technical support, deployment support, and ongoing consulting. Whether you're expanding a data center or spinning up a brand-new infra, we're here to help.",
        },
        {
          image: "/card_img_5.png",
          title: "Secure Data Handling",
          description:
            "Choose cloud, hosted or self-hosted options based on your compliance needs. It both cases, all traffic is end-to-end encrypted, ensuring your data is protected at every stage. For data-sensitive workloads, our self-hosted option ensures no information ever leaves your premises.",
        },
      ],
    },
  },

  faqSection: [
    {
      question: "How Can I Access The Mondai Team Management Dashboard?",
      answer:
        "You can access the Mondai Team Management Dashboard by logging into your account at dashboard.mondai.com. Once logged in, navigate to the Team Management section from the main menu.",
    },
    {
      question:
        "Where Can I Find Help Using The Mondai Team Management Dashboard?",
      answer:
        "Help resources are available in multiple places: within the dashboard itself (Help icon in the top right), our comprehensive documentation at docs.mondai.com, and our support team via email or live chat.",
    },
    {
      question:
        "How Do I Add Team Members To The Mondai Team Management Dashboard?",
      answer:
        "To add team members, go to the Team section in your dashboard, click 'Add Member', enter their email address and select their role. They'll receive an invitation email to join your team.",
    },
    {
      question: "How Can I Upgrade To A Higher Plan?",
      answer:
        "Navigate to Settings > Billing in your dashboard, select 'Upgrade Plan', choose your desired plan tier, and complete the payment process. Changes take effect immediately.",
    },
    {
      question: "How Can I Contact The Mondai Support Team?",
      answer:
        "You can reach our support team via email at support@mondai.com, through the live chat widget in your dashboard, or by submitting a support ticket. We typically respond within 24 hours.",
    },
  ],

  bottomCard: {
    title: "Ready To Explore A More Modern Approach?",
    description:
      "Contact Us to discuss how our platform can transform your GPU cloud strategy.",
    buttonText: "Request a Demo",
    buttonLink: "#",
    image: "/card_img_11.png",
  },
};

export const FeaturesPageData = {
  homeBanner: {
    title: "Key Features & Benefits",
    backgroundImage: "/home_banner_bg.png",
    backgroundOverlayImage: "/home_banner_overlay.png",
  },
  singleAgent: {
    title: "Single-Agent, Multi-Cloud Simplicity",
    description:
      "Most legacy orchestration platforms require multiple interdependent services deployed per region. Our solution consolidates all essential control services into a single agent you deploy on your hardware. For additional security and control, you can also host the entire control plane in your datacenter.",
    image: "/img_1.png",
    features: [
      {
        title: "Easy Installation",
        description:
          "Deploy our single binary on your host—laptop, server, or a massive GPU cluster.",
      },
      {
        title: "Instant Enrollment",
        description:
          "As clouds are added online, the agent auto-registers with your management cloud. For self-hosted deployments, it connects securely to your on-prem control plane.",
      },
      {
        title: "Reduced Operational Overhead",
        description:
          "Minimal infrastructure means lower potential failure points and less time spent on maintenance.",
      },
    ],
  },
  sdnIntegration: {
    title: "Full SDN Integration For Containers & VMs",
    description:
      "Whether you're deploying AI inferencing containers or launching high-performance VMs for big data processing, our Software-Defined Network seamlessly connects workloads within and across regions.",
    cards: [
      {
        icon: "/icon_1.png",
        title: "Consistent Network Fabric",
        description:
          "Uniformly managed policies from development laptops to multi-thousand-node clusters.",
      },
      {
        icon: "/icon_2.png",
        title: "Flexible Workload Placement",
        description:
          "Easily move workloads without reconfiguring complex networking rules.",
      },
      {
        icon: "/icon_3.png",
        title: "Multi-Tenancy By Design",
        description:
          "Built in isolation and audit-ready environment, enabling you to securely host multiple clients and projects.",
      },
    ],
  },
  advancedScheduling: {
    title: "Advanced Scheduling & Resilicence",
    description:
      "Our platform orchestrates both GPU and CPU resources simultaneously. You can pin specific workloads to particular hosts, enable failover, and configure affinity/anti-affinity rules.",
    image: "/img_2.png",
    features: [
      {
        title: "High Availability",
        description: "Automatic workload redistribution if a node fails.",
      },
      {
        title: "Optimal Resource Utilization",
        description:
          "Intelligent scheduling to fully leverage your existing hardware.",
      },
      {
        title: "Scalability",
        description: "Add or remove servers or entire regions on the fly.",
      },
    ],
  },
  monetizationTemplates: {
    title: "Monetization Templates",
    description:
      "We make it simple to turn your GPU infrastructure into revenue:",
    templates: [
      {
        icon: "/card_img_1.png",
        title: "Marketplace Deployment",
        description:
          "Prebuilt templates let you offer 1 GPU or entire GPU clusters on popular platforms such as RunPod, Shadeform, and Vast.ai.",
      },
      {
        icon: "/card_img_2.png",
        title: "LLM Inference Endpoints",
        description:
          "Launch ready-to-use endpoints for models like DeepSeek, Qwen, LLaMA, and more. These can be consumed directly or integrated into LLM aggregators (e.g., OpenRouter.ai).",
      },
      {
        icon: "/card_img_3.png",
        title: "Easy Configuration",
        description:
          " Simple wizards and step-by-step guidance ensure monetizing your GPU power is straightforward—even if you’re new to these marketplaces.",
      },
    ],
  },
  simplePricing: {
    title: "Simple, Predictable Pricing",
    description: "Straightforward, transparent billing.",
    image: "/img_3.png",
    features: [
      {
        title: "Per-System/Server, Per-Month",
        description: "No hidden fees, no giant annual commitments.",
      },
      {
        title: "Scale at Your Pace",
        description:
          "Launch a single server or thousands of GPU hosts—pay only for what’s deployed.",
      },
      {
        title: "No Contract Lock-Ins",
        description: "Cancel anytime; upgrade or downgrade as needed.",
      },
    ],
  },
  security: {
    title: "Security & Encryption",
    description:
      "Choose cloud-hosted or self-hosted control planes, both with full end-to-end encryption. Only configuration data flows over the network; your actual datasets and VM contents remain private.",
    features: [
      {
        icon: "/icon_5.png",
        title: "AI & Machine Learning",
        description:
          "Schedule GPU training jobs and CPU-based preprocessing with ease.",
      },
      {
        icon: "/icon_6.png",
        title: "Cloud Gaming",
        description:
          "Low-latency VMs and containers for gaming workloads with cross-region networking.",
      },
      {
        icon: "/icon_7.png",
        title: "Visual Effects & Rendering",
        description:
          "Burst to additional on-demand GPU capacity for complex render farms.",
      },
      {
        icon: "/icon_8.png",
        title: "Edge Computing",
        description:
          "Lightweight agents in remote devices, managed from a single console.",
      },
    ],
  },
  bottomCard: {
    title: "Ready To Modernize Your Cloud Infrastructure?",
    description:
      "Schedule a Demo and see how easily you can integrate, expand, and scale with our solution.",
    buttonText: "Request a Demo",
    buttonLink: "#",
    image: "/card_img_8.png",
  },
};

export const ServicesPageData = {
  homeBanner: {
    title: "Deployment, Services & Success Stories",
    backgroundImage: "/home_banner_bg.png",
    backgroundOverlayImage: "/home_banner_overlay.png",
  },
  deploymentModel: {
    title: "Deployment Model",
    description:
      "We redefine how you roll out new regions or data centers. By centralizing most control services either in our cloud or on your premises, you avoid the capital expense and complexity typical of older solutions.",
    image: "/img_4.png",
    features: [
      {
        title: "Install the Agent",
        description: "Run our single binary on your chosen hardware.",
      },
      {
        title: "Auto-Enrollment",
        description:
          "In a cloud-hosted setup, the agent connects securely to our management cloud. For fully on-prem deployments, it registers with your local control plane.",
      },
      {
        title: "Launch Workloads",
        description:
          "Use our intuitive web console or API to spin up containers, VMs, and more in minutes.",
      },
      {
        title: "",
        description:
          "No separate message queuing services. No large database clusters. No frustration—just a streamlined platform that adapts to your compliance and operational requirements.",
      },
    ],
  },
  professionalServices: {
    title: "Professional Services & Expert Support",
    description:
      "Whether you’re deploying AI inferencing in containers or launching high-performance VMs for big data processing, our Software-Defined Network seamlessly connects workloads within and across regions.",
    image: "/img_5.png",
    features: [
      {
        title: "Architecture Consulting",
        description:
          "Expert advice on designing your GPU cloud for optimal performance.",
      },
      {
        title: "On-Site or Remote Deployment Assistance",
        description:
          "Help installing and configuring the agent, integrating with existing systems, or assisting in migration from older platforms.",
      },
      {
        title: "Training & Knowledge Transfer",
        description:
          "Best practices for deploying, managing, and troubleshooting.",
      },
      {
        title: "24/7 Technical Support",
        description:
          "Ongoing maintenance and support to keep your GPU cloud running smoothly.",
      },
    ],
  },
  seamlessIntegration: {
    title: "Seamless Integration & Migration",
    description: "",
    image: "/img_6.png",
    features: [
      {
        title: "Coexists with Legacy Systems",
        description:
          "Migrate at your own pace without disrupting active workloads.",
      },
      {
        title: "Supports Hybrid Deployments",
        description:
          "Combine your hardware with public cloud resources, all managed through a single console.",
      },
      {
        title: "Facilitates Gradual Adoption",
        description: "Start with a pilot project, then scale with confidence.",
      },
    ],
  },
  dataSovereignty: {
    title: "Meeting Data Sovereignty & Compliance Needs",
    description:
      "For regulated industries and government agencies, maintaining full control over data locality is non-negotiable.",
    image: "/img_7.png",
    features: [
      {
        title: "Your Data Never Leaves the Datacenter",
        description:
          "For self-hosted deployments, the entire control plane resides on-prem.",
      },
      {
        title: "Compliance Simplified",
        description:
          "Aligns with strict regulatory standards around data privacy.",
      },
      {
        title: "Ongoing Updates & Support",
        description:
          "We provide dedicated guidance to keep your on-prem control plane up to date.",
      },
    ],
  },
  technicalRequirements: {
    title: "Technical Data & Requirements",
    description:
      "Our orchestrator is designed for Linux-based environments and leverages cutting-edge technologies to ensure performance, flexibility, and security:",
    image: "/img_8.png",
    requirements: [
      {
        title: "Base OS",
        description:
          "Tested on major Linux distributions (Ubuntu, Debian, CentOS, etc.)",
      },
      {
        title: "Supported Workloads",
        description:
          "Orchestrates Docker containers and QEMU/Cloud-Hypervisor-based VMs",
      },
      {
        title: "Networking",
        description:
          "Uses VXLAN encapsulation with hardware offloading via Open vSwitch Network ACLs enforced via OpenFlow rules, capable of wire-speed performance on supported NICs (e.g., Mellanox, Intel)",
      },
      {
        title: "Storage Backend",
        description:
          "Typically provisioned via Ceph, though other distributed or local storage solutions may be supported",
      },
      {
        title: "Bare Meta",
        description:
          "We do not currently orchestrate bare-metal operations (future plans). Pair with a hardware orchestrator like: Ubuntu MAAS, Tinkerbell",
      },
    ],
  },
  successStories: {
    title: "Real-World Success Stories",
    description: "Repurposing Old Ethereum Mining Hardware.",
    image: "/img_9.png",
    caseStudy: [
      {
        title: "Client",
        description: "A small regional data center operator",
      },
      {
        title: "Challenge",
        description:
          "Idle GPU mining rigs post-Ethereum merge; needed a cost-effective way to transform them into revenue-generating resources.",
      },
      {
        title: "Solution",
        description:
          "Installed our single-agent platform on each rig; avoided large controller clusters. Launched a GPUaaS offering to local businesses and developers.",
      },
      {
        title: "Result",
        description:
          "• Turned depreciated mining rigs into profitable compute resources\n• Lower capital and operational expenses\n• Attracted AI-focused customers needing on-demand GPU compute",
      },
    ],
  },
  bottomCard: {
    title: "Ready To Modernize Your Cloud Infrastructure?",
    description:
      "Schedule a Demo and see how easily you can integrate, expand, and scale with our solution.",
    buttonText: "Request a Demo",
    buttonLink: "#",
    image: "/card_img_8.png",
  },
};
