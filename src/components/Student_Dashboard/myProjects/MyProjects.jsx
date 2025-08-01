import React, { useState } from 'react';
import "../styles.css";
import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import ProjectSubmissionForm from './ProjectSubmissionForm';

function MyProjects({ isDarkMode, toggleDarkMode }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div className={`dashboard-container${isDarkMode ? ' dark' : ''}`}>
      {isSidebarVisible && <Sidebar isSidebarVisible={isSidebarVisible} isDarkMode={isDarkMode} />}
      <div className={`main-content${isSidebarVisible ? '' : ' full-width'}`}>
        <Header toggleSidebar={toggleSidebar} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <ProjectSubmissionForm />
      </div>
    </div>
  );
}

export default MyProjects;
