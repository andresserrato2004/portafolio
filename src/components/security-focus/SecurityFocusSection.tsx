import { Card, CardContent, CardHeader, CardTitle, Separator } from "@heroui/react";

type SecurityFocusSectionProps = {
  focus: Array<{ title: string; description: string }>;
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
    certId: string;
    fileUrl: string;
  }>;
  locale?: "es" | "en";
};

export function SecurityFocusSection({ focus, certifications, locale = "es" }: SecurityFocusSectionProps) {
  const isEn = locale === "en";
  const prioritizedFocus = [...focus].sort((a, b) => {
    const aPriority =
      /xss|sql|owasp|inyection|injection/i.test(a.title) || /xss|sql|owasp|inyection|injection/i.test(a.description)
        ? 0
        : 1;
    const bPriority =
      /xss|sql|owasp|inyection|injection/i.test(b.title) || /xss|sql|owasp|inyection|injection/i.test(b.description)
        ? 0
        : 1;
    return aPriority - bPriority;
  });

  return (
    <section id="security-focus" className="reveal-section px-4 py-1 md:px-8 md:py-8">
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="border border-[var(--line)] bg-[var(--surface)]">
          <CardHeader>
            <CardTitle className="text-center text-xl text-white md:text-2xl">
              {isEn ? "Courses / Certifications" : "Cursos / Certificaciones"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {certifications.map((item) => (
              <div key={item.certId} className="rounded-xl border border-[var(--line)] bg-[var(--surface-2)] p-3">
                <div className="mb-3">
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-[var(--text-muted)]">{item.issuer}</p>
                  <p className="text-xs text-[var(--text-muted)]">{item.date}</p>
                  <p className="text-xs text-[var(--text-muted)]">{isEn ? "Cert ID:" : "ID del certificado:"} {item.certId}</p>
                </div>
                <a className="block" href={item.fileUrl} rel="noreferrer" target="_blank">
                  <img
                    alt={`${item.name} - certificado`}
                    className="h-80 w-full rounded-lg border border-[var(--line)] bg-[var(--surface)] object-contain"
                    loading="lazy"
                    src={item.fileUrl}
                  />
                </a>
                <a className="mt-3 inline-flex text-xs text-[var(--accent)]" href={item.fileUrl} rel="noreferrer" target="_blank">
                  {isEn ? "Open full-size certificate" : "Abrir certificado en tamaño completo"}
                </a>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border border-[var(--line)] bg-[var(--surface)]">
          <CardHeader>
            <CardTitle className="text-center text-xl text-white md:text-2xl">Security Focus</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {prioritizedFocus.map((item, index) => (
              <div key={item.title} className="space-y-2">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{item.description}</p>
                {index < prioritizedFocus.length - 1 ? <Separator className="mt-3 bg-[var(--line)]" /> : null}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
