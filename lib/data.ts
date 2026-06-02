/* Sukhrob Tokhirov — portfolio content */

export const PROFILE = {
  name: "Sukhrob Tokhirov",
  role: "Senior Software Engineer",
  location: "Tashkent, Uzbekistan",
  timezone: "UTC+5",
  email: "sukhrobtokhirov006@gmail.com",
  github: "github.com/stohirov",
  linkedin: "linkedin.com/in/sukhrobtokhirov",
  resume: "Sukhrob_Tokhirov_CV.pdf",
  available: "Open to Software Engineer roles",
} as const;

export type Job = {
  co: string;
  role: string;
  when: string;
  now: boolean;
  bullets: string[];
};

export const EXPERIENCE: Job[] = [
  {
    co: "StreetPark Systems",
    role: "Software Engineer",
    when: "Apr 2026 — Present",
    now: true,
    bullets: [
      "Building and scaling the core parking-management platform.",
      "Architecting the microservices infrastructure and driving decisions on system design, stack and DevOps.",
    ],
  },
  {
    co: "ELEC Romania",
    role: "Senior Software Engineer",
    when: "Jun 2025 — Present",
    now: false,
    bullets: [
      "Senior engineer on a ride-hailing platform (Uber / Yandex Go style) — geospatial matching, pricing and payments.",
      "Designed an H3-based driver-matching engine, improving nearby-driver accuracy and latency at scale.",
      "Built a real-time Redis-backed surge-pricing system and Stripe Connect driver payouts.",
      "Deployed 10+ microservices to AWS EKS with 90%+ test coverage.",
    ],
  },
  {
    co: "Kommo",
    role: "Software Engineer",
    when: "Sep 2024 — Jun 2025",
    now: false,
    bullets: [
      "Led the WhatsApp Cloud API team delivering new platform features.",
      "Cut API response times by 30% through query optimization and caching.",
      "Built a Prometheus & Grafana monitoring system and integrated Stripe billing.",
    ],
  },
  {
    co: "ECMA",
    role: "Software Engineer",
    when: "Dec 2022 — Sep 2024",
    now: false,
    bullets: [
      "Built LMS platforms and CRM integrations (AmoCRM, Bitrix24).",
      "Engineered a distributed payment-records system on Oracle and ClickHouse.",
    ],
  },
];

export type SkillGroup = { cat: string; items: [string, boolean][] };

export const SKILLS: SkillGroup[] = [
  { cat: "Languages", items: [["Java", true], ["JavaScript", false], ["SQL", false]] },
  {
    cat: "Backend",
    items: [
      ["Spring Boot", true],
      ["Spring Cloud", true],
      ["Spring Security", false],
      ["Hibernate / JPA", false],
      ["Microservices", true],
      ["REST", false],
    ],
  },
  { cat: "Messaging", items: [["Kafka", true], ["RabbitMQ", false]] },
  {
    cat: "Data",
    items: [
      ["PostgreSQL", true],
      ["Oracle", false],
      ["Cassandra", false],
      ["ClickHouse", false],
      ["MongoDB", false],
      ["Redis", false],
    ],
  },
  {
    cat: "Cloud / DevOps",
    items: [
      ["AWS", true],
      ["Docker", false],
      ["Kubernetes", true],
      ["Terraform", true],
      ["CI/CD", false],
    ],
  },
];

export type OpenSourceItem = { name: string; kind: string; desc: string };

export const OPENSOURCE: OpenSourceItem[] = [
  {
    name: "spring-ai",
    kind: "contributor",
    desc: "Contributed fixes and improvements, and provided design suggestions for upcoming milestones.",
  },
  {
    name: "spring-ai-session",
    kind: "building",
    desc: "Building a semantic memory tier, drawing on memory architectures like MemGPT, Mem0 and CrewAI.",
  },
  {
    name: "catboost",
    kind: "contributor",
    desc: "Contributed to the Python API of the gradient-boosting library.",
  },
];

export type EduItem = { inst: string; deg: string; when: string };

export const EDUCATION: EduItem[] = [
  { inst: "PDP University", deg: "B.Sc. Computer Science", when: "2023 — 2026" },
  { inst: "PDP Academy", deg: "Java Backend Development", when: "2021 — 2022" },
];
