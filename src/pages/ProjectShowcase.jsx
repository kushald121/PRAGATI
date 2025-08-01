// ProjectShowcasePage.jsx

import React, { useState } from 'react';
import Sidebar from '../Project_Showcase/Sidebar';
import ProjectShowcase from '../Project_Showcase/ProjectShowcase';
import Footer from '../Project_Showcase/Footer';

function ProjectShowcasePage() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="md:hidden flex justify-between items-center p-4 bg-[#2E4053] text-white">
        <button onClick={toggleSidebar}>
          <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <span className="text-lg font-bold">Menu</span>
      </div>

      <div className="flex min-h-screen bg-slate-50">
        <Sidebar isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible} />
        <div className="flex-1 p-6">
          <header className="sticky top-0 z-30 bg-slate-50 text-3xl sm:text-4xl md:text-5xl font-extrabold text-center py-6 sm:py-8 tracking-wide shadow-md border-b-4 border-[#00b2a9]">
            <span className="text-[#f26c3d]">Project</span>
            &nbsp;
            <span className="text-[#00b2a9]">ShowCase</span>
          </header>
          <ProjectShowcase />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectShowcasePage;
