export const projects = [
  {
    title: "Reconciliation Platform",
    type: "Flagship SaaS Project",
    role: "Full-Stack Developer",
    description:
      "A private financial reconciliation platform for comparing datasets, identifying matched and mismatched records, tracking jobs, and supporting operational review workflows.",
    challenge:
      "Manual reconciliation is slow, error-prone, difficult to audit, and inefficient when teams work with large transaction files.",
    solution:
      "Built a structured reconciliation workflow with file uploads, automated job processing, matched and unmatched record tracking, role-based access, notifications, and audit logging.",
    outcome:
      "Designed to reduce manual review effort, improve data accuracy, and give teams better visibility into reconciliation jobs and exceptions.",
    features: [
      "CSV and Excel file uploads",
      "Automated reconciliation jobs",
      "Matched and unmatched record tracking",
      "Role-based access control",
      "Notifications and audit logging",
      "Dataset and job status management",
    ],
    technologies: ["FastAPI", "Python", "PostgreSQL", "React", "SQLAlchemy"],
    repositoryStatus: "Private" as const,
    demoStatus: "Coming Soon" as const,
  },
  {
    title: "Shop Management SaaS",
    type: "Business Management Platform",
    role: "Full-Stack Developer",
    description:
      "A multi-tenant shop management system for handling inventory, sales, warehouse operations, products, and point-of-sale workflows.",
    challenge:
      "Small and medium-sized shops need affordable software to manage stock, sales, pricing, users, and daily operations from one system.",
    solution:
      "Designed a SaaS-oriented platform covering products, inventory, sales, POS workflows, warehouse planning, user roles, and future barcode support.",
    outcome:
      "Created a foundation for a commercial business management platform that can support multiple shops through a centralized system.",
    features: [
      "Product and inventory management",
      "Sales and POS workflow",
      "Warehouse management planning",
      "Barcode support planning",
      "Role-based user access",
      "Centralized database design",
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    repositoryStatus: "Private" as const,
    demoStatus: "Coming Soon" as const,
  },
  {
    title: "Developer Portfolio",
    type: "Personal Branding Project",
    role: "Frontend Developer",
    description:
      "A modern portfolio website built to present my engineering background, technical skills, and software projects professionally.",
    challenge:
      "A strong personal portfolio needs to communicate technical ability, professional experience, and project quality quickly and clearly.",
    solution:
      "Built a responsive, data-driven React portfolio with reusable components, dark mode, animations, and a structured project showcase.",
    outcome:
      "Created a professional platform for recruiters and collaborators to understand my experience, projects, and engineering mindset.",
    features: [
      "Responsive layout",
      "Reusable component architecture",
      "Data-driven sections",
      "Professional project showcase",
      "Dark mode and animations",
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    repositoryStatus: "Public" as const,
    demoStatus: "Coming Soon" as const,
  },
];
