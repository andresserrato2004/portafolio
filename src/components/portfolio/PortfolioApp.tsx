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
import { featuredSkills } from "../../data/skills";
import { projects } from "../../data/projects";
import { papers } from "../../data/papers";
import { competitiveProgramming } from "../../data/competitive-programming";
import { certifications, securityFocus } from "../../data/security";

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

export default function PortfolioApp() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="bg-tech-grid min-h-screen">
        <NavbarSection />
        <HeroSection profileData={profile} />
        <MotionWrap>
          <AboutSection profileData={profile} competitiveData={competitiveProgramming} />
        </MotionWrap>
        <MotionWrap>
          <SkillsSection skills={featuredSkills} />
        </MotionWrap>
        <MotionWrap>
          <ProjectsSection projects={projects} />
        </MotionWrap>
        <MotionWrap>
          <PapersSection papers={papers} />
        </MotionWrap>
        <MotionWrap>
          <SecurityFocusSection certifications={certifications} focus={securityFocus} />
        </MotionWrap>
        <MotionWrap>
          <ContactSection profileData={profile} />
        </MotionWrap>
      </div>
    </main>
  );
}
