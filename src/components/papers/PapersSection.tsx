import { Card, CardContent, CardHeader, CardTitle, Chip } from "@heroui/react";

type PapersSectionProps = {
  papers: Array<{
    title: string;
    venue: string;
    role: string;
    status: string;
    summary: string;
    link: string;
    authors?: Array<{ name: string; linkedin: string }>;
    keywords?: string[];
    citation?: string;
  }>;
  locale?: "es" | "en";
};

export function PapersSection({ papers, locale = "es" }: PapersSectionProps) {
  const isEn = locale === "en";
  return (
    <section id="papers" className="reveal-section px-4 py-1 md:px-8 md:py-8">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-white md:text-3xl">
          {isEn ? "Published papers" : "Papers publicados"}
        </h2>
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
                <CardTitle className=" text-xl text-white">{paper.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-[var(--text-muted)]">
                {paper.role && (
                  <p>
                  <span className="text-white">{isEn ? "Role:" : "Rol:"}</span> {paper.role}
                </p>
                )}
                <p>{paper.summary}</p>
                {paper.authors?.length ? (
                  <div className="space-y-2 pt-1">
                    <p className="text-sm font-semibold text-white">{isEn ? "Authors" : "Autores"}</p>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                      {paper.authors.map((author, index) => (
                        <span key={author.name} className="inline-flex items-center gap-2">
                          <a className="font-semibold text-white hover:text-[var(--accent)]" href={author.linkedin} rel="noreferrer" target="_blank">
                            {author.name}
                          </a>
                          {index < (paper.authors?.length ?? 0) - 1 ? <span className="text-[var(--line)]">·</span> : null}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
                {paper.keywords?.length ? (
                  <p className="text-sm">
                    <span className="text-white">Keywords:</span> {paper.keywords.join(", ")}
                  </p>
                ) : null}
                {paper.citation ? (
                  <p className="rounded-lg border border-[var(--line)] bg-[var(--surface-2)] p-3 text-sm">
                    <span className="text-white">{isEn ? "Citation:" : "Citación:"}</span> {paper.citation}
                  </p>
                ) : null}
                {paper.link !== "#" ? (
                  
                  <a className="rounded-lg border border-[var(--line)] bg-[var(--surface-2)] p-3 text-sm transition-colors hover:border-[var(--primary)]" href={paper.link} target="_blank" rel="noreferrer">
                    {isEn ? "View publication" : "Ver publicación"}
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
