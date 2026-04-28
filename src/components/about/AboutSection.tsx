import { Card, CardContent, CardHeader, CardTitle } from "@heroui/react";
import { profile } from "../../data/profile";
import { competitiveProgramming } from "../../data/competitive-programming";

type AboutSectionProps = {
  profileData: typeof profile;
  competitiveData: typeof competitiveProgramming;
};

export function AboutSection({ profileData, competitiveData }: AboutSectionProps) {
  const semilleroStory = profileData.storyHighlights.find((item) => item.title.toLowerCase().includes("semillero"));
  const semilleroGallery =
    semilleroStory && "galleryImages" in semilleroStory && Array.isArray(semilleroStory.galleryImages)
      ? semilleroStory.galleryImages
      : [];

  return (
    <section id="about" className="reveal-section px-4 py-1 md:px-8 md:py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <Card className="border border-[var(--line)] bg-[var(--surface)]">
          <CardHeader>
            <CardTitle className="text-center text-xl text-white md:text-2xl">Sobre mí</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--text-muted)]">
            <p>{profileData.summary}</p>
            {profileData.about.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </CardContent>
        </Card>

        {semilleroStory ? (
          <Card className="border border-[var(--line)] bg-[var(--surface)]">
            <CardHeader className="pb-0">
              <div className="relative min-h-[4.25rem]">
                <CardTitle className="w-full pt-1 text-center text-xl text-white md:text-2xl">
                  {semilleroStory.title}
                </CardTitle>
                <div
                  className="absolute -right-px top-0 aspect-square w-20 rounded-lg border border-[var(--line)] bg-[var(--surface-2)] bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${semilleroStory.imageUrl})` }}
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-[10px]">
              
                <div className="grid items-stretch gap-0 md:grid-cols-2 md:gap-0">
                  <div
                    className="h-56 w-full rounded-xl bg-[var(--surface-2)] bg-cover bg-center md:h-72"
                    style={{ backgroundImage: `url(${semilleroGallery[0] ?? semilleroStory.imageUrl})` }}
                  />
                  <p className="text-sm text-[var(--text-muted)] flex items-center rounded-r-xl bg-[var(--surface-2)] p-3">
                    {semilleroStory.description}
                  </p>
                </div>

                <div className="mt-0 grid items-stretch gap-0 md:grid-cols-2 md:gap-0">
                  <p className="mt-px flex items-center rounded-l-xl bg-[var(--surface-2)] p-3 text-sm text-[var(--text-muted)]">
                     
                    Participe en 3 Maratones Nacionales en donde con mi equipo quedamos dentro de los 40 mejores equipos
                    a nivel nacional en cada una de las participaciones con esto asegurando un puesto en 3 Maratones Regionales Latinoamericanas en 2023, 2024 y 2025.
                  </p>
                  <div
                    className="h-56 w-full rounded-r-xl bg-[var(--surface-2)] bg-cover bg-center md:h-72"
                    style={{ backgroundImage: `url(${semilleroGallery[1] ?? semilleroStory.imageUrl})` }}
                  />
                </div>
              
              <div className="grid gap-4 rounded-xl border border-[var(--line)] bg-[var(--surface-2)] p-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-3 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3">
                  <h3 className="text-center text-base font-semibold text-white">Programación competitiva</h3>
                  <p className="text-sm text-[var(--text-muted)]">{competitiveData.intro}</p>
                  <ul className="space-y-2">
                    {competitiveData.highlights.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-[var(--line)] bg-[var(--surface-2)] p-2 text-sm text-[var(--text-muted)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid gap-3">
                  <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3">
                    <h3 className=" items-center text-center text-sm font-semibold text-white">Semillero</h3>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">{competitiveData.semillero}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : null}
      </div>
    </section>
  );
}
