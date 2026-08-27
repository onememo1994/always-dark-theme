import { Server, Activity, ShieldCheck, LayoutPanelTop } from "lucide-react";

export const expertise = [
  {
    title: "Microservices & Clean Architecture",
    icon: Server,
    description:
      ".NET 8 service boundaries designed with Clean Architecture and DDD — maintainable systems that survive years of change.",
    keywords: [".NET 8", "DDD", "Repository + UoW"],
  },
  {
    title: "Real-time Platforms",
    icon: Activity,
    description:
      "High-throughput SignalR backends streaming live data across 1,000+ endpoints — transferable to payment and risk monitoring.",
    keywords: ["SignalR", "High throughput", "Live telemetry"],
  },
  {
    title: "Multi-Tenant Security",
    icon: ShieldCheck,
    description:
      "Secure tenant data isolation with hierarchical RBAC, OAuth 2.0 and JWT — the baseline for banking-grade platforms.",
    keywords: ["Multi-tenancy", "RBAC", "OAuth 2.0 / JWT"],
  },
  {
    title: "Performance Engineering",
    icon: LayoutPanelTop,
    description:
      "Database tuning, indexing and Redis caching that delivered a 300% improvement in query performance under production load.",
    keywords: ["SQL tuning", "Redis", "+300%"],
  },
];

export const process = [
  {
    step: "01",
    title: "Understand the domain",
    description:
      "Before code: data model, tenancy boundaries, compliance and security requirements are mapped precisely.",
  },
  {
    step: "02",
    title: "Architect for scale",
    description:
      "Service boundaries, contracts and consistency guarantees defined with Clean Architecture and DDD.",
  },
  {
    step: "03",
    title: "Build & harden",
    description:
      "Implementation with RBAC, OAuth 2.0 / JWT, structured logging, and performance budgets from day one.",
  },
  {
    step: "04",
    title: "Ship & optimize",
    description:
      "Automated CI/CD on Azure DevOps, containerized delivery, then measured tuning against real production load.",
  },
];

export const principles = ["Precision", "Security", "Scalability", "Clean Architecture"];
