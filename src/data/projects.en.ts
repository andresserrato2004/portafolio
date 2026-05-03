import type { Project } from "./projects";

export const projectsEn: Project[] = [
  {
    slug: "sistemas-sophia-microservicios",
    title: "SOPHIA Systems (Microservices)",
    description:
      "Development of a distributed ecosystem based on microservices deployed in AWS ECS containers.",
    longDescription:
      "SOPHIA is an EdTech platform that combines artificial intelligence, pedagogy, and analytics to build personalized learning experiences. It addresses three key gaps: low online course completion rates, inefficient AI usage by students, and lack of personalized tracking for institutions and instructors.",
    stack: ["Node.js", "TS", "Docker", "AWS ECS Fargate"],
    category: "web",
    impact:
      "Provides a scalable foundation for AI-powered personalized education, improving retention and progress tracking through a secure distributed architecture.",
    githubUrl: "https://github.com/andresserrato2004",
    architecture: [
      "Web/mobile frontend authenticated with Amazon Cognito (JWT) and a single API Gateway entry point.",
      "Decoupled microservices (Course, User, AI Tutor, Coordinator) deployed on ECS over AWS Fargate.",
      "Segmented VPC network with public, private app, and private data subnets for stronger security.",
      "Structured persistence in Amazon RDS, caching in ElastiCache (Redis), and multimedia files in S3.",
      "Secure traffic balancing and outbound access with Network Load Balancer and NAT Gateway.",
      "Operational observability through CloudWatch, Parameter Store, and IAM role-based permissions.",
      "CI/CD flow from repository to ECR and deployment to ECS Fargate.",
    ],
    executionAssets: [
      { label: "MVP architecture", pathHint: "public/projects/sophia/SOPHIA - Architecture MVP.png" },
      { label: "Entity diagram", pathHint: "public/projects/sophia/SOPHIA - Entities diagram.png" },
      { label: "Application running", pathHint: "public/projects/sophia/video_optimizado.mp4" },
    ],
    extraContext: [
      "The approach prioritizes real learning personalization, data ethics, and analytics-driven decisions.",
      "The AI Tutor service was designed as a decoupled component to evolve recommendations without breaking the rest of the system.",
    ],
    ideaApproach: [
      "Identified problem: low course completion rates, lack of guidance, and inefficient AI usage in learning.",
      "Hypothesis: a platform with an intelligent tutor, analytics, and personalization can improve retention and outcomes.",
      "MVP solution: AI-assisted course creation, marketplace, progress tracking, and review system.",
      "Target users: educational institutions, students, and instructors/content creators.",
      "Scaling model: cloud-native microservices architecture to grow on demand.",
    ],
    diagramAssets: [
      {
        label: "SOPHIA - Architecture MVP",
        imageUrl: "/projects/sophia/SOPHIA - Architecture MVP.png",
        detailsUrl:
          "https://lucid.app/lucidchart/9a086d67-50a6-4542-98e7-92e5fa2267b2/edit?viewport_loc=-6341%2C-4235%2C20444%2C10317%2CnHeUWmh8~BBi&invitationId=inv_d7624dc8-6570-4963-b2e9-0a5f15e9e623",
      },
      {
        label: "SOPHIA - Entities diagram",
        imageUrl: "/projects/sophia/SOPHIA - Entities diagram.png",
        detailsUrl:
          "https://lucid.app/lucidchart/9a086d67-50a6-4542-98e7-92e5fa2267b2/edit?viewport_loc=-6341%2C-4235%2C20444%2C10317%2CnHeUWmh8~BBi&invitationId=inv_d7624dc8-6570-4963-b2e9-0a5f15e9e623",
      },
    ],
    demoVideoUrl: "/projects/sophia/video_optimizado.mp4",
    detailLinks: [
      {
        label: "View full diagrams in Lucidchart",
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
        role: "Developer / PM",
        linkedin: "https://www.linkedin.com/in/sebastian-cardona-parra/",
      },
      {
        name: "Zayra Gutiérrez",
        role: "DevOps",
        linkedin: "https://www.linkedin.com/in/zayra-linett-guti%C3%A9rrez-solano/",
      },
      {
        name: "Miguel Motta",
        role: "Technical lead",
        linkedin: "https://www.linkedin.com/in/miguelangelmotta-backendengineer/?locale=es",
      },
      {
        name: "Andrea Torres",
        role: "UI/UX",
        linkedin: "https://www.linkedin.com/in/andrea-valentina-torres-tobar-77137228b/",
      },
      {
        name: "Andrés Serrato",
        role: "QA / Developer",
        linkedin: "https://www.linkedin.com/in/andres-serrato-camero-95433316a",
      },
    ],
  },
    {
    slug: "plataforma-reservas-monitoreo-eci",
    title: "Reservations and monitoring platform (Escuela Colombiana de Ingeniería)",
    description:
      "Design and deployment of a containerized platform for room reservations and academic monitoring.",
    longDescription:
      "Institutional solution to centralize space reservations and academic activity monitoring. The main goal was to digitize internal processes and enable operational traceability.",
    stack: ["Node.js", "Docker", "Monitoring", "Full Stack"],
category: "security",
    impact: "Digitized internal processes and centralized academic monitoring metrics.",
    demoUrl: "http://reservaslab.is.escuelaing.edu.co/schedule",
    architecture: [
      "Monolithic application.",
      "Monitoring module for centralized systems engineering department room monitoring.",
      "Event persistence for traceability and auditing.",
      "Deployment on local servers with docker.",
    ],
    executionAssets: [
      { label: "Day Interface", pathHint: "/projects/reservas/Day.png" },
      { label: "Schedule Interface", pathHint: "/projects/reservas/schedule.png" },
    ],
    extraContext: [
      "Includes evidence of the complete reservation flow.",
      "You can attach adoption results and operational improvements.",
    ],
  },
{
    slug: "Gobirthday",
    title: "GoBirthDay ",
    description:
      "Go backend implementation with feature-oriented architecture and PostgreSQL connectivity for concurrent operations. The frontend runs with Astro.",
    longDescription:
      "Full Stack project oriented to high-performance concurrent messaging. The solution was designed with clean architecture principles and layered separation to optimize operational reliability and maintainability.",
    stack: ["Astro", "Go", "PostgreSQL", "Docker", "Clean Architecture"],
    category: "api",
    impact: "This application can support sending dozens of messages in under 5 seconds with high resilience using Go routines.",
    githubUrl: "https://github.com/andresserrato2004/GoBirthDay.git",
    architecture: [
      "Go API layer for request intake and validation.",
      "Services layer with business rules and concurrency control.",
      "PostgreSQL repository for robust and efficient persistence.",
      "Containerization for stable and reproducible deployment.",
    ],
    diagramAssets: [
      {
        label: "Database diagram",
        imageUrl: "/projects/Gobirthday/diagramadb.png",
        detailsUrl:
          "https://lucid.app/lucidchart/e5ab360a-a0c2-4887-b9fe-caa9637d93ca/edit?viewport_loc=365%2C529%2C3140%2C1554%2C0_0&invitationId=inv_78c1836b-ebdf-4008-9820-ccbd73e71785",
      },
    ],
    executionAssets: [
    ],
    extraContext: [
      "Includes evidence of concurrent performance.",
      "You can document design decisions (trade-offs and lessons learned).",
    ],
  },
  {
    slug: "automatizacion-evaluacion-datos",
    title: "Institutional data evaluation automation",
    description:
      "Automated evaluation system from analysis to deployment for the Mathematics Department.",
    longDescription:
      "Project focused on drastically reducing data analysis and evaluation times. Work covered design, integration, and deployment of an automated processing flow. This project, though no longer deployed, was delivered to the university's Technology Department and holds special value as the first major project I worked on with approximately 2000 people on the platform. In 2023, two of us developers proposed the idea of automating professor-to-student evaluations instead of doing them manually, and digitizing the process to automatically deliver grades and generate corresponding analyses. It's worth noting that these evaluations were conducted in groups of 3-4 students, so each student ended up with 4-5 grades that the professor had to review and analyze. For each grade delivery (roughly every third of the term), the professor had to review around 100 evaluations for an average calculus class of 25 students to assign a grade worth only 10% of the total grade. When we presented the initiative and implemented it, we managed to reduce evaluation times from approximately 2 hours and 30 minutes to just 10 minutes, considering the entire process from students answering the evaluation to the professor reviewing and assigning the grade.",
    stack: ["Backend", "Automation", "Data Processing", "Deployment"],
    category: "tooling",
    impact: "95% reduction in institutional data evaluation times.",
    demoUrl: "https://progresoestudio.escuelaing.edu.co/login",
    architecture: [
      "SvelteKit",
      "SupaBase",
      "Vercel",
    ],
    executionAssets: [
      { label: "Pipeline running", pathHint: "public/projects/evaluacion/pipeline-running.png" },
      { label: "Comparative results", pathHint: "public/projects/evaluacion/results-comparison.png" },
      { label: "Processing architecture", pathHint: "public/projects/evaluacion/architecture.png" },
    ],
    extraContext: [
      "Includes before/after evaluation timing evidence.",
      "Add dashboard screenshots or output reports.",
    ],
  },
];

export const getProjectBySlugEn = (slug: string) => projectsEn.find((project) => project.slug === slug);
