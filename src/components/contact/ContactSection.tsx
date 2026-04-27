import { Button, Card, CardContent, CardHeader, CardTitle, Link } from "@heroui/react";
import { profile } from "../../data/profile";

type ContactSectionProps = {
  profileData: typeof profile;
};

export function ContactSection({ profileData }: ContactSectionProps) {
  return (
    <section id="contact" className="reveal-section px-4 pb-20 pt-10 md:px-8 md:pb-24 md:pt-14">
      <div className="mx-auto w-full max-w-6xl">
        <Card className="border border-[var(--line)] bg-[var(--surface)]">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-white md:text-3xl">Contacto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="max-w-2xl text-[var(--text-muted)]">
              Estoy disponible para colaborar en productos web, backend o proyectos con foco en ciberseguridad aplicada.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={`mailto:${profileData.email}`} target="_blank">
                {profileData.email}
              </Link>
              <Link href={profileData.linkedin} rel="noreferrer" target="_blank">
                LinkedIn
              </Link>
              <Link href={profileData.github} rel="noreferrer" target="_blank">
                GitHub
              </Link>
            </div>

            <a className="inline-flex" href={profileData.cvUrl}>
              <Button className="rounded-full border border-[var(--primary)] bg-[var(--primary)] px-6 py-3 font-semibold text-white">
                Descargar CV
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
