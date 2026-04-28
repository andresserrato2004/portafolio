import { Button, Chip } from "@heroui/react";
import { profile } from "../../data/profile";

type HeroSectionProps = {
  profileData: typeof profile;
  locale?: "es" | "en";
};

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export function HeroSection({ profileData, locale = "es" }: HeroSectionProps) {
  const isEn = locale === "en";
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-12 pt-16 md:px-8 md:pb-16 md:pt-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
        <div className="space-y-6">
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            {profileData.name}
          </h1>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 text-[var(--text-muted)]">
            <p className="text-sm">
              <span className="text-white">{isEn ? "Professional profile:" : "Perfil profesional:"}</span> {profileData.role}
            </p>
            <p className="mt-1 text-sm">
              <span className="text-white">{isEn ? "Location:" : "Ubicación:"}</span> {profileData.location}
            </p>
            <p className="mt-1 text-sm">
              <span className="text-white">{isEn ? "Experience:" : "Experiencia:"}</span> {profileData.yearsExperience}{" "}
              {isEn ? "years" : "años"}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {profileData.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4">
                <p className="text-2xl font-bold text-white">{metric.value}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Chip className="border border-[var(--line)] bg-[var(--surface)] text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
              Software Developer
            </Chip>
            <Chip className="border border-[var(--line)] bg-[var(--surface)] text-[11px] uppercase tracking-[0.14em] text-[var(--primary)]">
              Security Mindset
            </Chip>
          </div>

          <p className="max-w-3xl text-pretty text-lg leading-relaxed text-[var(--text-muted)] md:text-xl">
            {profileData.tagline}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              className="rounded-full border border-[var(--primary)] bg-[var(--primary)] px-6 py-3 font-semibold text-white shadow-[0_0_40px_rgba(100,41,205,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
              onClick={() => scrollToId("projects")}
            >
              {isEn ? "View projects" : "Ver proyectos"}
            </Button>
            <Button
              className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              onClick={() => scrollToId("contact")}
              variant="ghost"
            >
              {isEn ? "Contact" : "Contactar"}
            </Button>
          </div>
        </div>

         <div className="grid grid-cols-1 gap-3">
           <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4">
             <div
               className="aspect-[3/4] w-full rounded-xl border border-[var(--line)] bg-[var(--surface-2)] bg-cover bg-center"
               style={{ backgroundImage: `url(${profileData.imageUrl})` }}
             />
           </div>
         </div>
      </div>
    </section>
  );
}
