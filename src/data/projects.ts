export const projects = [
  {
    title: "Reconciliation Platform",
    type: "Flagship SaaS Project",
    description:
      "A financial reconciliation platform for comparing datasets, identifying matched and mismatched records, tracking jobs, and supporting operational review workflows.",
    problem:
      "Manual reconciliation is slow, error-prone, and difficult to audit when teams work with large transaction files.",
    features: [
      "CSV and Excel file uploads",
      "Automated reconciliation jobs",
      "Matched and unmatched record tracking",
      "Role-based access control",
      "Notifications and audit logging",
      "Dataset and job status management",
    ],
    technologies: ["FastAPI", "Python", "PostgreSQL", "React", "SQLAlchemy"],
  },
  {
    title: "Shop Management SaaS",
    type: "Business Management Platform",
    description:
      "A multi-tenant shop management system for handling inventory, sales, warehouse operations, products, and point-of-sale workflows.",
    problem:
      "Small and medium-sized shops need affordable software to manage stock, sales, pricing, and daily operations from one system.",
    features: [
      "Product and inventory management",
      "Sales and POS workflow",
      "Warehouse management planning",
      "Barcode support planning",
      "Role-based user access",
      "Centralized database design",
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "Developer Portfolio",
    type: "Personal Branding Project",
    description:
      "A modern portfolio website built to present my engineering background, technical skills, and software projects professionally.",
    problem:
      "A strong personal portfolio helps recruiters and clients quickly understand technical ability, project experience, and career direction.",
    features: [
      "Responsive layout",
      "Reusable component architecture",
      "Data-driven sections",
      "Professional project showcase",
      "Modern frontend workflow",
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
];