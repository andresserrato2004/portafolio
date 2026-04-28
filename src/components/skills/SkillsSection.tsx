import { Card, CardContent } from "@heroui/react";
import { Cloud, Code2, Cpu, Database, Network, Server, ShieldCheck, SquareStack } from "lucide-react";

type SkillsSectionProps = {
  skills: Array<{ name: string; icon: string }>;
};

const iconMap = {
  cpu: Cpu,
  server: Server,
  code: Code2,
  database: Database,
  container: SquareStack,
  cloud: Cloud,
  network: Network,
  shield: ShieldCheck,
} as const;

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="reveal-section px-4 py-1 md:px-8 md:py-8">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-white md:text-3xl">Skills</h2>
        <p className="mb-6 text-sm text-[var(--text-muted)]">Tecnologías clave de mi stack principal.</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon as keyof typeof iconMap] ?? Code2;

            return (
              <Card
                key={skill.name}
                className="border border-[var(--line)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                  <span className="rounded-xl border border-[var(--line)] bg-[var(--surface-2)] p-3 text-[var(--accent)]">
                    <Icon size={22} />
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white">{skill.name}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
