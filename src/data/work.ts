export interface WorkItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  role: string;
  featured?: boolean;
  visual: {
    /** small chart / metric preview content */
    metric: string;
    metricLabel: string;
    rows: { label: string; value: string }[];
  };
}

export const work: WorkItem[] = [
  {
    id: "marketplace-engine",
    title: "E-Commerce Marketplace Engine",
    description:
      "Modular marketplace backend on .NET 8 microservices with Repository Pattern and Unit of Work — a scalable foundation suitable for financial marketplaces.",
    tags: [".NET 8", "Microservices", "Clean Architecture"],
    year: "2025",
    role: "Senior Full Stack Engineer",
    featured: true,
    visual: {
      metric: "12+",
      metricLabel: "Independent services",
      rows: [
        { label: "Architecture", value: "Clean / DDD" },
        { label: "Data access", value: "Repo + UoW" },
        { label: "Delivery", value: "Dockerized" },
      ],
    },
  },
  {
    id: "realtime-iot",
    title: "Real-Time Logistics & IoT Dashboard",
    description:
      "Angular + .NET dashboard visualizing high-frequency telemetry over SignalR — the same architecture used for real-time payment monitoring.",
    tags: ["SignalR", "Angular", "Real-time"],
    year: "2025",
    role: "Full Stack Engineer",
    visual: {
      metric: "1,000+",
      metricLabel: "Live endpoints",
      rows: [
        { label: "Transport", value: "SignalR" },
        { label: "Latency", value: "Sub-second" },
      ],
    },
  },
  {
    id: "multi-tenant-sync",
    title: "Multi-Tenant CRM/ERP Sync Platform",
    description:
      "Synchronization layer for large-scale data transfer with strong consistency and secure tenant isolation — a core banking platform pattern.",
    tags: ["Multi-tenancy", "RBAC", "SQL Server"],
    year: "2024",
    role: "Lead Backend Engineer",
    featured: true,
    visual: {
      metric: "+300%",
      metricLabel: "Query performance",
      rows: [
        { label: "Isolation", value: "Per-tenant" },
        { label: "Access", value: "Hierarchical RBAC" },
        { label: "Caching", value: "Redis" },
      ],
    },
  },
  {
    id: "nextjs-pwa",
    title: "Next.js Portfolio & PWA",
    description:
      "High-performance personal platform with optimized Core Web Vitals, offline-ready PWA behaviour and a strict design-token system.",
    tags: ["Next.js", "TypeScript", "Performance"],
    year: "2024",
    role: "End-to-end Build",
    visual: {
      metric: "98+",
      metricLabel: "Lighthouse score",
      rows: [
        { label: "Rendering", value: "SSR / ISR" },
        { label: "Bundle", value: "Optimized" },
      ],
    },
  },
];
