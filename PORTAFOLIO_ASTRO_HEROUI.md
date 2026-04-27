# Portafolio Profesional con Astro + HeroUI

## Objetivo
Crear una web de portafolio moderna y memorable para mostrar:
- Tu perfil como **Software Developer**
- Tu interés y enfoque en **Ciberseguridad**
- Tus proyectos destacados de GitHub

## Dirección de diseño (UI/UX)
Estilo recomendado: **dark corporate-tech** (mezcla 30x + Pragma: sobrio, contundente, ejecutivo).

1. **Visual**: fondos muy oscuros, bloques limpios, alto contraste y acentos controlados.
2. **Narrativa**: “Software Developer con Security Mindset” como mensaje principal.
3. **Diferenciador**: proyectos con foco en impacto + prácticas de seguridad aplicadas.

## Sistema visual de referencia (inspirado en 30x.com y pragma.co)
No copiar literalmente, sino adaptar el lenguaje visual.

### 1) Paleta base recomendada
- `--bg`: `#050505`
- `--surface`: `#171717`
- `--surface-2`: `#0D0D0D`
- `--text`: `#FFFFFF`
- `--text-muted`: `#B3B3B3`
- `--primary`: `#6429CD` (violeta tipo Pragma)
- `--accent`: `#00E6C5` (acento tech tipo 30x)
- `--line`: `#2A2A2A`

### 2) Tipografía recomendada
- **Fuente principal (todo el sitio)**: `JetBrains Mono` (400/500/600/700)
- **Uso**: headings, body, labels técnicos y badges para mantener identidad “developer”.
- **Fallback recomendado**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`

#### Implementación rápida de fuente
1. Instalar:
```bash
npm install @fontsource/jetbrains-mono
```
2. Importar en tu layout global (ej. `MainLayout.astro` o `global.css`):
```ts
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "@fontsource/jetbrains-mono/700.css";
```
3. Definir variable y aplicar global:
```css
:root {
  --font-main: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}
body {
  font-family: var(--font-main);
}
```

### 3) Composición y layout
- Hero con titular fuerte, subtítulo corto y 2 CTAs.
- Secciones en bloques amplios con mucho aire, evitando saturación.
- Cards con bordes suaves (`12px-16px`), fondo oscuro y borde sutil.
- Métricas rápidas tipo “+X proyectos / +X años / +X repos” como banda de confianza.

### 4) Motion y microinteracciones
- Entrada por secciones con `fade + translateY` suave.
- Hover en botones con glow leve en `--primary`.
- Hover en cards con elevación mínima + borde más visible.
- Evitar animaciones agresivas; priorizar sensación premium.

## Stack técnico
- **Framework**: Astro
- **UI Library**: HeroUI
- **Estilos**: Tailwind CSS
- **Contenido dinámico**: GitHub API para traer repositorios destacados
- **Deploy**: Vercel 

## Estructura sugerida del proyecto
```bash
src/
  components/
    navbar/
    hero/
    about/
    skills/
    projects/
    security-focus/
    contact/
  layouts/
    MainLayout.astro
  pages/
    index.astro
  data/
    profile.ts
    projects.ts
```

## Secciones de la página
1. **Hero**
   - Nombre + rol: Software Developer
   - Claim corto: enfoque en calidad, rendimiento y seguridad
   - CTA: “Ver proyectos” y “Contactar”

2. **Sobre mí**
   - Resumen profesional
   - Enfoque: desarrollo seguro, buenas prácticas, aprendizaje continuo

3. **Skills**
   - Frontend, Backend, DevOps, Security
   - Mostrar nivel por categorías (sin porcentajes exagerados)

4. **Proyectos destacados**
   - Tarjetas con: título, descripción, stack, impacto, links a GitHub/demo
   - Filtro por categorías (web, APIs, seguridad, tooling)

5. **Security Focus**
   - Buenas prácticas que aplicas: validación, auth, gestión de secretos, logging, OWASP
   - Certificaciones/cursos (si tienes)

6. **Contacto**
   - Email, LinkedIn, GitHub
   - Botón de descarga de CV (PDF)

## Pasos de implementación
1. Crear proyecto Astro:
```bash
npm create astro@latest
```

2. Instalar dependencias base:
```bash
npm install @heroui/react framer-motion
npm install -D tailwindcss
```

3. Configurar Tailwind y conectar HeroUI según la documentación oficial.

4. Construir layout principal (`MainLayout.astro`) con:
   - navegación fija
   - contenedor responsive
   - tema oscuro por defecto
   - variables CSS para la paleta (`:root`)

5. Crear componentes por sección y reutilizar componentes HeroUI:
   - `Card`, `Button`, `Chip`, `Navbar`, `Tooltip`, `Divider`

6. Cargar proyectos:
   - Inicialmente desde `src/data/projects.ts`
   - Opcional: script para consumir GitHub API y marcar “featured”

7. Añadir animaciones sutiles:
   - entrada por bloques al hacer scroll
   - hover states en cards y botones
   - transición de color para CTAs (`--primary`/`--accent`)

8. Optimizar y desplegar:
   - imágenes comprimidas
   - Lighthouse básico
   - deploy en Vercel/Netlify

## Contenido recomendado para tus proyectos
Para cada proyecto incluye:
- Problema que resolviste
- Tu aporte técnico exacto
- Tecnologías usadas
- Resultado/impacto
- Medidas de seguridad aplicadas (si corresponde)

## Checklist final
- [ ] Mensaje profesional claro en menos de 5 segundos de lectura
- [ ] Proyectos con evidencia real (repos, demo, capturas)
- [ ] Consistencia visual (tipografía, colores, spacing)
- [ ] Mobile-first y accesible
- [ ] Contacto visible y funcional
