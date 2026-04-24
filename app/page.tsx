"use client";

import HomeSection from "@/components/Hero";
import ProjectsSection from "@/components/Projects";
import AcademicSection from "@/components/Academic";
import SkillsSection from "@/components/Skills";
import ContactSection from "@/components/Contact";

export default function Page() {
  return (
    <>
      <section id="home">
        <HomeSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="academic">
        <AcademicSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}