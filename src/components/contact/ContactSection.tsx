import { Button, Card, CardContent, CardHeader, CardTitle, Link } from "@heroui/react";
import { ExternalLink, GitBranch, Mail } from "lucide-react";
import { profile } from "../../data/profile";

type ContactSectionProps = {
  profileData: typeof profile;
  locale?: "es" | "en";
};

export function ContactSection({ profileData, locale = "es" }: ContactSectionProps) {
  const isEn = locale === "en";
  return (
    <section id="contact" className="reveal-section px-4 pb-20 pt-10 md:px-8 md:pb-24 md:pt-14">
      <div className="mx-auto w-full max-w-6xl">
        <Card className="border border-[var(--line)] bg-[var(--surface)]">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-white md:text-3xl">{isEn ? "Contact" : "Contacto"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="w-full text-[var(--text-muted)]">
              {isEn
                ? "I'm available to collaborate on web products, backend systems, and projects with an applied cybersecurity focus."
                : "Estoy disponible para colaborar en productos web, backend o proyectos con foco en ciberseguridad aplicada."}
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                className="rounded-full border border-[var(--line)] bg-[var(--surface-2)] px-4 py-2 text-sm text-[var(--text-muted)] transition hover:border-[var(--primary)] hover:text-white"
                href={`mailto:${profileData.email}`}
                target="_blank"
              >
                <span className="inline-flex items-center gap-2">
                  <Mail size={16} className="text-[var(--accent)]" />
                  {profileData.email}
                </span>
              </Link>
              <Link
                className="rounded-full border border-[var(--line)] bg-[var(--surface-2)] px-4 py-2 text-sm text-[var(--text-muted)] transition hover:border-[var(--primary)] hover:text-white"
                href={profileData.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                <span className="inline-flex items-center gap-2">
                  <ExternalLink size={16} className="text-[var(--accent)]" />
                  LinkedIn
                </span>
              </Link>
              <Link
                className="rounded-full border border-[var(--line)] bg-[var(--surface-2)] px-4 py-2 text-sm text-[var(--text-muted)] transition hover:border-[var(--primary)] hover:text-white"
                href={profileData.github}
                rel="noreferrer"
                target="_blank"
              >
                <span className="inline-flex items-center gap-2">
                  <GitBranch size={16} className="text-[var(--accent)]" />
                  GitHub
                </span>
              </Link>
            </div>

            <a className="inline-flex" href={profileData.cvUrl}>
              <Button className="rounded-full border border-[var(--primary)] bg-[var(--primary)] px-6 py-3 font-semibold text-white">
                {isEn ? "Download CV" : "Descargar CV"}
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
