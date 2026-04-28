SOPHIA – Aprendizaje Inteligente
Descripción General

SOPHIA es una plataforma EdTech que combina inteligencia artificial, pedagogía avanzada y ética de datos para crear experiencias de aprendizaje personalizadas, medibles y humanas.

 Problema
82% de estudiantes tiene dificultades para aprender sin acompañamiento.
80% usa IA de forma incorrecta.
Baja finalización de cursos online (5–12%).
Falta de personalización y seguimiento.
Crear contenido educativo es costoso (40–184 horas por curso).
72% de docentes resiste el uso de IA.
 Oportunidad
El e-learning superó los $245B USD en 2022.
Crecimiento acelerado en LATAM (14–17%).
IA educativa creciendo al 30% anual.
93% de creadores monetizan contenido, pero falta:
Personalización real
Ética
Analítica inteligente
 Público Objetivo
 Instituciones
Universidades y colegios
Necesitan analítica y personalización
 Estudiantes
Personas que quieren aprender eficientemente
 Instructores
Creadores de contenido educativo
 Solución
Creación de cursos con IA
Tutor inteligente (AI Tutor)
Marketplace de cursos
Dashboard de progreso
Sistema de reseñas
Analítica avanzada
 Propuesta de Valor
 -50% tiempo de aprendizaje
 +40% retención
 Decisiones basadas en datos
 Contenido dinámico y adaptativo
 Arquitectura del Sistema (MVP)
 Infraestructura General (AWS)
VPC (Virtual Private Cloud)
Subredes:
Pública
Privada (App)
Privada (Datos)
 Seguridad y Acceso
Amazon Cognito
Autenticación (JWT)
Gestión de usuarios
IAM (Identity and Access Management)
Control de permisos
Usuarios del equipo Dev
 API Gateway
Punto de entrada único
Maneja:
Routing
Autenticación
Rate limiting
 Backend (Microservicios)

Desplegados en:

Amazon ECS (Elastic Container Service)
AWS Fargate (serverless containers)
Servicios principales:
 Course Service
CRUD de cursos
Gestión de contenido
 User Service
Usuarios
Roles (estudiante / instructor)
 AI Tutor Service
Tutor inteligente
Recomendaciones personalizadas
Generación de contenido
 Coordinator Service
Orquestación entre servicios
Lógica de negocio
 Contenedores
Dockerizados
Almacenados en:
Amazon ECR (Elastic Container Registry)
 Base de Datos
Amazon RDS
PostgreSQL (recomendado)
Datos estructurados
 Cache
Amazon ElastiCache (Redis)
Sesiones
Respuestas frecuentes
Mejora de performance
 Almacenamiento
Amazon S3
Archivos
Imágenes
Contenido multimedia
 Red y Escalabilidad
Network Load Balancer
Balanceo de tráfico
NAT Gateway
Acceso seguro desde subred privada
 Monitoreo
Amazon CloudWatch
Logs
Métricas
Alertas
 Configuración
AWS Parameter Store
Variables de entorno
Secrets
 CI/CD
Código almacenado en:
Git Repository
Flujo:
Push a repo
Build de contenedor
Deploy en ECS Fargate
 Flujo del Sistema
Usuario entra desde frontend
Se autentica con Cognito
API Gateway recibe la request
Redirige al microservicio correspondiente
Servicios consultan:
RDS (datos)
Redis (cache)
S3 (archivos)
AI Tutor procesa personalización
Respuesta vuelve al cliente
 Decisiones Arquitectónicas Clave
Arquitectura basada en microservicios
Infraestructura serverless (Fargate)
Separación de red (seguridad)
Uso de cache para performance
IA como servicio desacoplado
 Modelo de Negocio
Estudiantes
Free
Premium (mensual)
Instructores
Free
Premium
Plataforma
Comisión: 15–20%
Instituciones
Planes Enterprise
 Proyección
 Equipo
Sebastián Cardona – Desarrollador / PM
Zayra Gutiérrez – DevOps
Miguel Motta – Líder técnico
Andrea Torres – UI/UX
Andrés Serrato – QA / Desarrollador
 Conclusión

SOPHIA no es solo una plataforma de cursos, es un sistema de aprendizaje inteligente que:

Personaliza la educación
Mejora resultados reales
Integra IA de forma ética
Escala globalmente


si quieren ver la informacion completa sobre la arquitectura pueden revisar el siguiente link https://lucid.app/lucidchart/9a086d67-50a6-4542-98e7-92e5fa2267b2/edit?viewport_loc=-6341%2C-4235%2C20444%2C10317%2CnHeUWmh8~BBi&invitationId=inv_d7624dc8-6570-4963-b2e9-0a5f15e9e623