export type ProjectCategory = "web" | "api" | "security" | "tooling";

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  category: ProjectCategory;
  impact: string;
  githubUrl: string;
  demoUrl?: string;
  securityNotes: string[];
  architecture: string[];
  executionAssets: Array<{ label: string; pathHint: string }>;
  extraContext: string[];
};

export const projects: Project[] = [
  {
    slug: "gobirthday-backend-institucional",
    title: "GoBirthDay (Backend Institucional)",
    description:
      "Implementación backend en Go con arquitectura limpia y conexión a PostgreSQL para operaciones concurrentes.",
    longDescription:
      "Proyecto backend orientado a alto rendimiento para mensajería concurrente. La solución fue diseñada con principios de arquitectura limpia y separación por capas, optimizando confiabilidad operativa y mantenibilidad.",
    stack: ["Go", "PostgreSQL", "Docker", "Clean Architecture"],
    category: "api",
    impact: "Soportó envío de mensajes a decenas de usuarios en menos de 10 segundos con alta resiliencia.",
    githubUrl: "https://github.com/andresserrato2004",
    securityNotes: ["Concurrency-safe design", "Structured logging", "DB reliability"],
    architecture: [
      "API layer en Go para recepción y validación de solicitudes.",
      "Capa de servicios con reglas de negocio y control de concurrencia.",
      "Repositorio PostgreSQL para persistencia robusta y eficiente.",
      "Contenerización para despliegue estable y reproducible.",
    ],
    executionAssets: [
      { label: "Flujo principal en ejecución", pathHint: "public/projects/gobirthday/flow-main.png" },
      { label: "Métricas de concurrencia", pathHint: "public/projects/gobirthday/concurrency-metrics.png" },
      { label: "Arquitectura del servicio", pathHint: "public/projects/gobirthday/architecture-diagram.png" },
    ],
    extraContext: [
      "Incluye evidencias de desempeño concurrente.",
      "Puedes documentar decisiones de diseño (trade-offs y lecciones aprendidas).",
    ],
  },
  {
    slug: "sistemas-sophia-microservicios",
    title: "Sistemas SOPHIA (Microservicios distribuidos)",
    description:
      "Desarrollo de ecosistema distribuido basado en microservicios desplegados en contenedores.",
    longDescription:
      "Implementación de una plataforma distribuida para desacoplar servicios críticos y mejorar escalabilidad operativa. El enfoque se orientó a despliegue en contenedores y gobierno de servicios.",
    stack: ["Node.js", "Java", "Docker", "AWS ECS Fargate"],
    category: "web",
    impact: "Mejoró la escalabilidad operativa y el aislamiento de servicios críticos.",
    githubUrl: "https://github.com/andresserrato2004",
    securityNotes: ["Service isolation", "Container security", "Resilient deployment"],
    architecture: [
      "Separación por microservicios según dominio funcional.",
      "Contenedores orquestados en AWS ECS Fargate.",
      "Comunicación segura entre servicios y manejo de fallos.",
      "Pipeline de despliegue para versiones controladas.",
    ],
    executionAssets: [
      { label: "Topología de microservicios", pathHint: "public/projects/sophia/services-topology.png" },
      { label: "Vista de despliegue en AWS", pathHint: "public/projects/sophia/aws-deployment.png" },
      { label: "Flujo end-to-end", pathHint: "public/projects/sophia/e2e-flow.png" },
    ],
    extraContext: [
      "Añade screenshots de observabilidad (logs, métricas, trazas).",
      "Documenta cómo se manejó resiliencia y aislamiento.",
    ],
  },
  {
    slug: "plataforma-reservas-monitoreo-eci",
    title: "Plataforma de reservas y monitoreo (Escuela Colombiana de Ingeniería)",
    description:
      "Diseño y despliegue de plataforma contenerizada para reservas de salones y monitoreo académico.",
    longDescription:
      "Solución institucional para centralizar reservas de espacios y monitoreo de actividad académica. El objetivo principal fue digitalizar procesos internos y habilitar trazabilidad operacional.",
    stack: ["Node.js", "Docker", "Monitoring", "Full Stack"],
    category: "security",
    impact: "Digitalizó procesos internos y centralizó métricas de seguimiento académico.",
    githubUrl: "https://github.com/andresserrato2004",
    securityNotes: ["Access control", "Auditability", "Operational observability"],
    architecture: [
      "Frontend y backend desacoplados con API de reservas.",
      "Módulo de monitoreo para seguimiento académico centralizado.",
      "Persistencia de eventos para trazabilidad y auditoría.",
      "Despliegue en contenedores para consistencia de entorno.",
    ],
    executionAssets: [
      { label: "Panel de reservas", pathHint: "public/projects/reservas/dashboard-reservas.png" },
      { label: "Módulo de monitoreo", pathHint: "public/projects/reservas/monitoring-panel.png" },
      { label: "Diagrama de arquitectura", pathHint: "public/projects/reservas/architecture.png" },
    ],
    extraContext: [
      "Incluye evidencia del flujo de reserva completo.",
      "Puedes anexar resultados de adopción y mejora operativa.",
    ],
  },
  {
    slug: "automatizacion-evaluacion-datos",
    title: "Automatización de evaluación de datos institucionales",
    description:
      "Sistema de evaluación automatizado desde análisis hasta despliegue para el Depto. de Matemáticas.",
    longDescription:
      "Proyecto orientado a reducir drásticamente tiempos de análisis y evaluación de datos. Se trabajó en diseño, integración y despliegue de un flujo automatizado de procesamiento.",
    stack: ["Backend", "Automation", "Data Processing", "Deployment"],
    category: "tooling",
    impact: "Reducción del 95% en tiempos de evaluación de datos institucionales.",
    githubUrl: "https://github.com/andresserrato2004",
    securityNotes: ["Reliable pipelines", "Data integrity", "Structured process controls"],
    architecture: [
      "Pipeline automatizado desde ingesta hasta resultado final.",
      "Validación de calidad de datos en cada etapa.",
      "Módulos de procesamiento desacoplados por responsabilidad.",
      "Entrega de resultados con tiempos de respuesta optimizados.",
    ],
    executionAssets: [
      { label: "Pipeline ejecutándose", pathHint: "public/projects/evaluacion/pipeline-running.png" },
      { label: "Resultados comparativos", pathHint: "public/projects/evaluacion/results-comparison.png" },
      { label: "Arquitectura de procesamiento", pathHint: "public/projects/evaluacion/architecture.png" },
    ],
    extraContext: [
      "Incluye antes/después del tiempo de evaluación.",
      "Agrega capturas de dashboards o reportes de salida.",
    ],
  },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
