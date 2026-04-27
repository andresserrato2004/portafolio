import { Card, CardContent, CardHeader, CardTitle } from "@heroui/react";

type CompetitiveProgrammingSectionProps = {
  data: {
    intro: string;
    highlights: string[];
    semillero: string;
    premio: string;
  };
};

export function CompetitiveProgrammingSection({ data }: CompetitiveProgrammingSectionProps) {
  return (
    <section id="competitive-programming" className="reveal-section px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="border border-[var(--line)] bg-[var(--surface)]">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-white">Programación competitiva</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--text-muted)]">
            <p>{data.intro}</p>
            <ul className="space-y-2">
              {data.highlights.map((item) => (
                <li key={item} className="rounded-lg border border-[var(--line)] bg-[var(--surface-2)] p-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <div className="grid gap-6">
          <Card className="border border-[var(--line)] bg-[var(--surface)]">
            <CardHeader>
              <CardTitle className="text-center text-xl text-white">Semillero</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="rounded-lg border border-[var(--line)] bg-[var(--surface-2)] p-3 text-sm text-[var(--text-muted)]">
                {data.semillero}
              </p>
            </CardContent>
          </Card>
          <Card className="border border-[var(--line)] bg-[var(--surface)]">
            <CardHeader>
              <CardTitle className="text-center text-xl text-white">Premio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="rounded-lg border border-[var(--line)] bg-[var(--surface-2)] p-3 text-sm text-[var(--text-muted)]">
                {data.premio}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
