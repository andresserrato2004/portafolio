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
};

export function SecurityFocusSection({ focus, certifications }: SecurityFocusSectionProps) {
  return (
    <section id="security-focus" className="reveal-section px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="border border-[var(--line)] bg-[var(--surface)]">
          <CardHeader>
            <CardTitle className="text-center text-xl text-white md:text-2xl">Security Focus</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {focus.map((item, index) => (
              <div key={item.title} className="space-y-2">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{item.description}</p>
                {index < focus.length - 1 ? <Separator className="mt-3 bg-[var(--line)]" /> : null}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border border-[var(--line)] bg-[var(--surface)]">
          <CardHeader>
            <CardTitle className="text-center text-xl text-white md:text-2xl">Cursos / Certificaciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {certifications.map((item) => (
              <div key={item.certId} className="rounded-lg border border-[var(--line)] bg-[var(--surface-2)] p-3 text-sm text-[var(--text-muted)]">
                <p className="font-semibold text-white">{item.name}</p>
                <p>{item.issuer}</p>
                <p>{item.date}</p>
                <p className="text-xs">Cert ID: {item.certId}</p>
                <a className="text-xs text-[var(--accent)]" href={item.fileUrl} target="_blank" rel="noreferrer">
                  Ver certificado
                </a>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
