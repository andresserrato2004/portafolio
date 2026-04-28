import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { NavbarSection } from "../navbar/NavbarSection";
import { HeroSection } from "../hero/HeroSection";
import { AboutSection } from "../about/AboutSection";
import { SkillsSection } from "../skills/SkillsSection";
import { ProjectsSection } from "../projects/ProjectsSection";
import { PapersSection } from "../papers/PapersSection";
import { SecurityFocusSection } from "../security-focus/SecurityFocusSection";
import { ContactSection } from "../contact/ContactSection";
import { profile } from "../../data/profile";
import { profileEn } from "../../data/profile.en.ts";
import { featuredSkills } from "../../data/skills";
import { featuredSkillsEn } from "../../data/skills.en.ts";
import { projects } from "../../data/projects";
import { projectsEn } from "../../data/projects.en.ts";
import { papers } from "../../data/papers";
import { papersEn } from "../../data/papers.en.ts";
import { competitiveProgramming } from "../../data/competitive-programming";
import { competitiveProgrammingEn } from "../../data/competitive-programming.en.ts";
import { certifications, securityFocus } from "../../data/security";
import { certificationsEn, securityFocusEn } from "../../data/security.en.ts";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MotionWrap = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial="hidden"
    transition={{ duration: 0.55, ease: "easeOut" }}
    variants={sectionVariants}
    viewport={{ amount: 0.3, once: true }}
    whileInView="visible"
  >
    {children}
  </motion.div>
);

type PortfolioAppProps = {
  locale?: "es" | "en";
};

export default function PortfolioApp({ locale = "es" }: PortfolioAppProps) {
  const isEn = locale === "en";
  const profileData = isEn ? profileEn : profile;
  const skillsData = isEn ? featuredSkillsEn : featuredSkills;
  const projectsData = isEn ? projectsEn : projects;
  const papersData = isEn ? papersEn : papers;
  const competitiveData = isEn ? competitiveProgrammingEn : competitiveProgramming;
  const certificationsData = isEn ? certificationsEn : certifications;
  const securityFocusData = isEn ? securityFocusEn : securityFocus;

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="bg-tech-grid min-h-screen">
        <NavbarSection locale={locale} />
        <HeroSection locale={locale} profileData={profileData} />
        <AboutSection locale={locale} profileData={profileData} competitiveData={competitiveData} />
        <MotionWrap>
          <SkillsSection locale={locale} skills={skillsData} />
        </MotionWrap>
        <MotionWrap>
          <ProjectsSection locale={locale} projects={projectsData} />
        </MotionWrap>
        <MotionWrap>
          <PapersSection locale={locale} papers={papersData} />
        </MotionWrap>
        <MotionWrap>
          <SecurityFocusSection locale={locale} certifications={certificationsData} focus={securityFocusData} />
        </MotionWrap>
        <MotionWrap>
          <ContactSection locale={locale} profileData={profileData} />
        </MotionWrap>
      </div>
    </main>
  );
}
