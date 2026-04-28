import { Button } from "@heroui/react";
import { BookOpenText, Code2, FolderKanban, Home, Mail, Rocket, ShieldCheck } from "lucide-react";

type NavbarSectionProps = {
  locale?: "es" | "en";
};

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export function NavbarSection({ locale = "es" }: NavbarSectionProps) {
  const isEn = locale === "en";
  const navItems = [
    { label: isEn ? "Home" : "Inicio", target: "hero", icon: Home },
    { label: isEn ? "About" : "Sobre mí", target: "about", icon: Rocket },
    { label: "Skills", target: "skills", icon: Code2 },
    { label: isEn ? "Projects" : "Proyectos", target: "projects", icon: FolderKanban },
    { label: "Papers", target: "papers", icon: BookOpenText },
    { label: isEn ? "Programming Team" : "Semillero", target: "about", icon: ShieldCheck },
    { label: isEn ? "Contact" : "Contacto", target: "contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_84%,black)]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold tracking-[0.18em] text-white">DEV//SEC</span>
          <a
            className="inline-flex rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--accent)]"
            href={isEn ? "/" : "/en"}
          >
            {isEn ? "ES" : "EN"}
          </a>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Button
              key={item.target}
              className="rounded-full border border-transparent bg-transparent px-4 py-2 text-xs text-[var(--text-muted)] hover:border-[var(--line)] hover:text-white"
              onClick={() => scrollToId(item.target)}
              size="sm"
              variant="ghost"
            >
              <span className="inline-flex items-center gap-1.5">
                <item.icon size={14} />
                {item.label}
              </span>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
