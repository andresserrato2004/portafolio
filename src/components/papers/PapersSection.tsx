import { Card, CardContent, CardHeader, CardTitle, Chip } from "@heroui/react";

type PapersSectionProps = {
  papers: Array<{
    title: string;
    venue: string;
    role: string;
    status: string;
    summary: string;
    link: string;
  }>;
};

export function PapersSection({ papers }: PapersSectionProps) {
  return (
    <section id="papers" className="reveal-section px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-white md:text-3xl">Papers publicados</h2>
        <div className="grid gap-5">
          {papers.map((paper) => (
            <Card key={paper.title} className="border border-[var(--line)] bg-[var(--surface)]">
              <CardHeader className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Chip className="border border-[var(--line)] bg-[var(--surface-2)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent)]">
                    {paper.venue}
                  </Chip>
                  <Chip className="border border-[var(--line)] bg-[var(--surface-2)] text-[10px] uppercase tracking-[0.1em] text-[var(--primary)]">
                    {paper.status}
                  </Chip>
                </div>
                <CardTitle className="text-center text-xl text-white">{paper.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-[var(--text-muted)]">
                <p>
                  <span className="text-white">Rol:</span> {paper.role}
                </p>
                <p>{paper.summary}</p>
                {paper.link !== "#" ? (
                  <a className="text-sm text-[var(--accent)]" href={paper.link} target="_blank" rel="noreferrer">
                    Ver publicación
                  </a>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
