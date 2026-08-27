export type ProjectCategory =
  | "Microservices"
  | "Real-time Systems"
  | "Multi-Tenant Platforms"
  | "Frontend Performance";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  metrics: { label: string; value: string }[];
  accent: string; // CSS gradient string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Marketplace Engine",
    description:
      "Modular marketplace backend built on .NET 8 microservices with Repository Pattern and Unit of Work — a maintainable, scalable foundation suitable for financial marketplaces.",
    category: "Microservices",
    tech: [".NET 8", "Microservices", "Clean Architecture", "EF Core", "SQL Server", "Docker"],
    metrics: [
      { label: "Services", value: "12+" },
      { label: "Architecture", value: "Clean / DDD" },
      { label: "Coverage", value: "Repo + UoW" },
    ],
    accent: "linear-gradient(135deg, #1E293B, #0F172A)",
  },
  {
    id: "2",
    title: "Real-Time Logistics & IoT Dashboard",
    description:
      "Full-stack Angular + .NET dashboard streaming high-frequency telemetry over SignalR — the same architecture used for real-time payment monitoring and banking operations.",
    category: "Real-time Systems",
    tech: ["Angular", ".NET 8", "SignalR", "Redis", "PostgreSQL"],
    metrics: [
      { label: "Live endpoints", value: "1,000+" },
      { label: "Transport", value: "SignalR" },
      { label: "Latency", value: "Sub-second" },
    ],
    accent: "linear-gradient(135deg, #16304d, #0b1a2c)",
  },
  {
    id: "3",
    title: "Multi-Tenant CRM/ERP Sync Platform",
    description:
      "Synchronization layer for large-scale data transfer with strong consistency guarantees and secure tenant data isolation — the core pattern behind multi-tenant banking platforms.",
    category: "Multi-Tenant Platforms",
    tech: [".NET Core", "Multi-Tenancy", "RBAC", "SQL Server", "Azure DevOps"],
    metrics: [
      { label: "Isolation", value: "Per-tenant" },
      { label: "Access model", value: "Hierarchical RBAC" },
      { label: "DB performance", value: "+300%" },
    ],
    accent: "linear-gradient(135deg, #12324a, #08202f)",
  },
  {
    id: "4",
    title: "Next.js Portfolio & PWA",
    description:
      "High-performance personal platform with optimized Core Web Vitals, offline-ready PWA behaviour and a strict design-token system.",
    category: "Frontend Performance",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PWA"],
    metrics: [
      { label: "Lighthouse", value: "98+" },
      { label: "Rendering", value: "SSR / ISR" },
      { label: "Bundle", value: "Optimized" },
    ],
    accent: "linear-gradient(135deg, #1b3a52, #0a1c2b)",
  },
];

export const categories = [
  "All",
  "Microservices",
  "Real-time Systems",
  "Multi-Tenant Platforms",
  "Frontend Performance",
] as const;
