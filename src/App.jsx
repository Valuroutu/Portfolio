import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import ProjectsSection from "./components/Projects/ProjectsSection";
import GitHubSection from "./components/GitHub/GitHubSection";
import Education from "./components/Education/Education";
import Achievements from "./components/Achievements/Achievements";
import ActivitiesSection from "./components/Activities/ActivitiesSection";
import ResumeSection from "./components/Resume/ResumeSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ResumeModal from "./components/Resume/ResumeModal";
import CustomCursor from "./components/UI/CustomCursor";
import "./App.css";

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [resumeCategory, setResumeCategory] = useState("web");

  const handleOpenResume = (cat = "web") => {
    setResumeCategory(typeof cat === "string" ? cat : "web");
    setIsResumeModalOpen(true);
  };
  const handleCloseResume = () => setIsResumeModalOpen(false);

  return (
    <div className="min-h-screen bg-[#080b12] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 relative overflow-x-hidden font-sans">
      {/* Subtle Custom Cursor for desktop mouse users */}
      <CustomCursor />

      {/* Persistent Navigation */}
      <Navbar onOpenResumeModal={handleOpenResume} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResumeModal={handleOpenResume} />
        <About />
        <Skills />
        <Experience />
        <ProjectsSection />
        <GitHubSection />
        <Education />
        <Achievements />
        <ActivitiesSection />
        <ResumeSection onOpenResumeModal={handleOpenResume} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={handleOpenResume} />

      {/* Full Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
        initialResume={resumeCategory}
      />
    </div>
  );
}
