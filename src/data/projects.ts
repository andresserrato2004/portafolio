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
  architecture: string[];
  executionAssets: Array<{ label: string; pathHint: string }>;
  extraContext: string[];
  ideaApproach?: string[];
  diagramAssets?: Array<{ label: string; imageUrl: string; detailsUrl?: string }>;
  demoVideoUrl?: string;
  detailLinks?: Array<{ label: string; url: string }>;
  teamMembers?: Array<{ name: string; role: string; linkedin: string }>;
  repoLinks?: Array<{ label: string; url: string }>;
};

export const projects: Project[] = [
  {
    slug: "sistemas-sophia-microservicios",
    title: "Sistemas SOPHIA (Microservicios)",
    description:
      "Desarrollo de ecosistema distribuido basado en microservicios desplegados en contenedores ECS de AWS.",
    longDescription:
      "SOPHIA es una plataforma EdTech que combina inteligencia artificial, pedagogía y analítica para crear experiencias de aprendizaje personalizadas. Nace para responder a tres brechas: baja finalización de cursos online, uso ineficiente de IA por parte de estudiantes y falta de seguimiento personalizado para instituciones e instructores.",
    stack: ["Node.js", "TS" , "Docker", "AWS ECS Fargate"],
    category: "web",
    impact:
      "Propone una base escalable para personalización educativa con IA, mejorando retención y seguimiento de progreso con arquitectura distribuida segura.",
    githubUrl: "https://github.com/andresserrato2004",
    architecture: [
      "Frontend web/móvil autenticado con Amazon Cognito (JWT) y entrada única por API Gateway.",
      "Microservicios desacoplados (Course, User, AI Tutor, Coordinator) desplegados en ECS sobre AWS Fargate.",
      "Red segmentada en VPC con subred pública, privada de app y privada de datos para mejorar seguridad.",
      "Persistencia estructurada en Amazon RDS, cache en ElastiCache (Redis) y archivos multimedia en S3.",
      "Balanceo y salida segura con Network Load Balancer y NAT Gateway.",
      "Observabilidad y operación con CloudWatch, Parameter Store e IAM con permisos por rol.",
      "Flujo CI/CD desde repositorio hacia ECR y despliegue en ECS Fargate.",
    ],
    executionAssets: [
      { label: "Arquitectura MVP", pathHint: "public/proyects/sophia/SOPHIA - Architecture MVP.png" },
      { label: "Diagrama de entidades", pathHint: "public/proyects/sophia/SOPHIA - Entities diagram.png" },
      { label: "Aplicación funcionando", pathHint: "public/proyects/sophia/aplicacion_funcionando.mp4" },
    ],
    extraContext: [
      "El enfoque prioriza personalización real del aprendizaje, ética de datos y decisiones basadas en analítica.",
      "El servicio AI Tutor se diseñó como componente desacoplado para evolucionar recomendaciones sin romper el resto del sistema.",
    ],
    ideaApproach: [
      "Problema detectado: baja finalización de cursos, poco acompañamiento y uso ineficiente de IA en aprendizaje.",
      "Hipótesis: una plataforma con tutor inteligente, analítica y personalización puede mejorar retención y resultados.",
      "Solución MVP: creación de cursos con IA, marketplace, seguimiento de progreso y sistema de reseñas.",
      "Público objetivo: instituciones educativas, estudiantes e instructores/creadores de contenido.",
      "Modelo de escalado: arquitectura cloud nativa por microservicios para crecer por demanda.",
    ],
    diagramAssets: [
      {
        label: "SOPHIA - Architecture MVP",
        imageUrl: "/proyects/sophia/SOPHIA - Architecture MVP.png",
        detailsUrl:
          "https://lucid.app/lucidchart/9a086d67-50a6-4542-98e7-92e5fa2267b2/edit?viewport_loc=-6341%2C-4235%2C20444%2C10317%2CnHeUWmh8~BBi&invitationId=inv_d7624dc8-6570-4963-b2e9-0a5f15e9e623",
      },
      {
        label: "SOPHIA - Entities diagram",
        imageUrl: "/proyects/sophia/SOPHIA - Entities diagram.png",
        detailsUrl:
          "https://lucid.app/lucidchart/9a086d67-50a6-4542-98e7-92e5fa2267b2/edit?viewport_loc=-6341%2C-4235%2C20444%2C10317%2CnHeUWmh8~BBi&invitationId=inv_d7624dc8-6570-4963-b2e9-0a5f15e9e623",
      },
    ],
    demoVideoUrl: "/proyects/sophia/aplicacion_funcionando.mp4",
    detailLinks: [
      {
        label: "Ver diagramas completos en Lucidchart",
        url: "https://lucid.app/lucidchart/9a086d67-50a6-4542-98e7-92e5fa2267b2/edit?viewport_loc=-6341%2C-4235%2C20444%2C10317%2CnHeUWmh8~BBi&invitationId=inv_d7624dc8-6570-4963-b2e9-0a5f15e9e623",
      },
    ],
    repoLinks: [
      { label: "Coordinator Service", url: "https://github.com/IETI-Group/AI-Platform-Coordinator" },
      { label: "Course Service", url: "https://github.com/IETI-Group/AI-Platform-CourseService" },
      { label: "Tutor Chat Service", url: "https://github.com/IETI-Group/AI-Platform-TutorChatService" },
      { label: "User Service", url: "https://github.com/IETI-Group/AI-Platform-UserService" },
      { label: "Frontend", url: "https://github.com/IETI-Group/AI-Platform-Front" },
    ],
    teamMembers: [
      {
        name: "Sebastián Cardona",
        role: "Desarrollador / PM",
        linkedin: "https://www.linkedin.com/in/sebastian-cardona-parra/",
      },
      {
        name: "Zayra Gutiérrez",
        role: "DevOps",
        linkedin: "https://www.linkedin.com/in/zayra-linett-guti%C3%A9rrez-solano/",
      },
      {
        name: "Miguel Motta",
        role: "Líder técnico",
        linkedin: "https://www.linkedin.com/in/miguelangelmotta-backendengineer/?locale=es",
      },
      {
        name: "Andrea Torres",
        role: "UI/UX",
        linkedin: "https://www.linkedin.com/in/andrea-valentina-torres-tobar-77137228b/",
      },
      {
        name: "Andrés Serrato",
        role: "QA / Desarrollador",
        linkedin: "https://www.linkedin.com/in/andres-serrato-camero-95433316a",
      },
    ],
  },
  {
    slug: "Gobirthday",
    title: "GoBirthDay ",
    description:
      "Implementación backend en Go con arquitectura orientada a features y conexión a PostgreSQL para operaciones concurrentes.",
    longDescription:
      "Proyecto Full Stack orientado a alto rendimiento para mensajería concurrente. La solución fue diseñada con principios de clean Architecture y separación por capas, optimizando confiabilidad operativa y mantenibilidad.",
    stack: ["Astro","Go", "PostgreSQL", "Docker", "Clean Architecture"],
    category: "api",
    impact: "Esta aplicacion puede soportar el envío de decenas de mensajes en menos de 1 segundo con alta resiliencia para esto uso Go routines.",
    githubUrl: "https://github.com/andresserrato2004/GoBirthDay.git",
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
