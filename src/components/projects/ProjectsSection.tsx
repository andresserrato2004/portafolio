import { useMemo, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Chip,
} from "@heroui/react";
import { ArrowRight, ExternalLink, GitBranch, Layers } from "lucide-react";
import type { Project, ProjectCategory } from "../../data/projects";

type ProjectsSectionProps = {
  projects: Project[];
};

const filters: Array<{ label: string; value: ProjectCategory | "all" }> = [
  { label: "Todos", value: "all" },
  { label: "Web", value: "web" },
  { label: "APIs", value: "api" },
  { label: "Security", value: "security" },
  { label: "Tooling", value: "tooling" },
];

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory | "all">("all");

  const visibleProjects = useMemo(() => {
    if (selectedFilter === "all") return projects;
    return projects.filter((project) => project.category === selectedFilter);
  }, [projects, selectedFilter]);

  return (
    <section id="projects" className="reveal-section px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
            <Layers size={24} className="text-[var(--accent)]" />
            Proyectos destacados
          </h2>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                className={
                  selectedFilter === filter.value
                    ? "rounded-full border border-[var(--primary)] bg-[var(--primary)] px-4 py-2 text-xs text-white"
                    : "rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-xs text-[var(--text-muted)]"
                }
                onClick={() => setSelectedFilter(filter.value)}
                size="sm"
                variant="ghost"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <Card
              key={project.title}
              className="group border border-[var(--line)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]"
            >
              <CardHeader className="space-y-3">
                <CardTitle className="text-center text-xl text-white">{project.title}</CardTitle>
                <CardDescription className="text-[var(--text-muted)]">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-[var(--text-muted)]">
                  <span className="text-white">Impacto:</span> {project.impact}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Chip
                      key={item}
                      className="border border-[var(--line)] bg-[var(--surface-2)] text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted)]"
                    >
                      {item}
                    </Chip>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.securityNotes.map((note) => (
                    <Chip
                      key={note}
                      className="border border-[var(--line)] bg-transparent text-[10px] uppercase tracking-[0.1em] text-[var(--primary)]"
                    >
                      {note}
                    </Chip>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex flex-wrap gap-2">
                <a className="inline-flex" href={`/proyectos/${project.slug}`}>
                  <Button className="rounded-full border border-[var(--accent)] bg-transparent px-4 py-2 text-xs text-[var(--accent)]">
                    <span className="inline-flex items-center gap-1.5">
                      <ArrowRight size={14} />
                      Ver detalle
                    </span>
                  </Button>
                </a>
                <a className="inline-flex" href={project.githubUrl} rel="noreferrer" target="_blank">
                  <Button className="rounded-full border border-[var(--line)] bg-[var(--surface-2)] px-4 py-2 text-xs text-white">
                    <span className="inline-flex items-center gap-1.5">
                      <GitBranch size={14} />
                      GitHub
                    </span>
                  </Button>
                </a>
                {project.demoUrl ? (
                  <a className="inline-flex" href={project.demoUrl} rel="noreferrer" target="_blank">
                    <Button className="rounded-full border border-[var(--primary)] bg-[var(--primary)] px-4 py-2 text-xs text-white">
                      <span className="inline-flex items-center gap-1.5">
                        <ExternalLink size={14} />
                        Demo
                      </span>
                    </Button>
                  </a>
                ) : null}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
