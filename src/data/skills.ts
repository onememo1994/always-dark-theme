import { Server, Code2, Database, Shield, Activity } from "lucide-react";

export const skillGroups = [
  {
    title: "Backend",
    icon: Server,
    items: [
      ".NET 8 / Core",
      "C#",
      "ASP.NET Web API",
      "Microservices",
      "Clean Architecture",
      "DDD",
      "gRPC",
      "Entity Framework",
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    items: ["Angular", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    title: "Real-time & Performance",
    icon: Activity,
    items: [
      "SignalR",
      "High-throughput APIs",
      "Query tuning (+300%)",
      "Caching strategy",
      "Load optimization",
    ],
  },
  {
    title: "Data & Caching",
    icon: Database,
    items: ["SQL Server (advanced tuning)", "PostgreSQL", "Redis", "MongoDB"],
  },
  {
    title: "DevOps & Security",
    icon: Shield,
    items: [
      "Azure DevOps",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "OAuth 2.0",
      "JWT",
      "RBAC",
      "Multi-tenant isolation",
    ],
  },
];
