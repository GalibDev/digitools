import writingIcon from "../assets/digitools/writing_23274001.png";
import designToolIcon from "../assets/digitools/design-tool.png";
import packageIcon from "../assets/digitools/package.png";
import operationIcon from "../assets/digitools/operation.png";
import portfolioIcon from "../assets/digitools/portfolio.png";
import socialMediaIcon from "../assets/digitools/social-media.png";

const products = [
  {
    id: 1,
    name: "AI Writing Pro",
    description:
      "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
    price: 29,
    period: "monthly",
    tag: "Best Seller",
    tagType: "best-seller",
    features: [
      "Unlimited AI generations",
      "50+ writing templates",
      "Grammar checker",
    ],
    icon: writingIcon,
  },
  {
    id: 2,
    name: "Design Templates Pack",
    description:
      "2000+ premium templates for social media, presentations, and marketing materials.",
    price: 49,
    period: "one-time",
    tag: "Popular",
    tagType: "popular",
    features: [
      "2000+ templates",
      "Monthly updates",
      "Commercial license",
    ],
    icon: designToolIcon,
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    description:
      "Access millions of royalty-free photos, videos, and graphics for your projects.",
    price: 19,
    period: "monthly",
    tag: "New",
    tagType: "new",
    features: ["10M+ assets", "Commercial use", "No attribution"],
    icon: packageIcon,
  },
  {
    id: 4,
    name: "Automation Toolkit",
    description:
      "Automate repetitive tasks and streamline your workflow with powerful integrations.",
    price: 79,
    period: "yearly",
    tag: "Popular",
    tagType: "popular",
    features: ["100+ automations", "API access", "Custom workflows"],
    icon: operationIcon,
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    description:
      "Create professional resumes and cover letters using modern, recruiter-friendly templates.",
    price: 15,
    period: "one-time",
    tag: "New",
    tagType: "new",
    features: ["100+ templates", "ATS optimization", "Export to PDF"],
    icon: portfolioIcon,
  },
  {
    id: 6,
    name: "Social Media Content Kit",
    description:
      "Complete toolkit for creating engaging social media content across all platforms.",
    price: 39,
    period: "monthly",
    tag: "Best Seller",
    tagType: "best-seller",
    features: ["5000+ assets", "Scheduler included", "Analytics dashboard"],
    icon: socialMediaIcon,
  },
];

export default products;