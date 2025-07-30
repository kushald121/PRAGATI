import React, { useState } from 'react';
import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import StudentProfileForm from './StudentProfileForm';
import DomainsOfInterest from './DomainsOfInterest';

const EditProfilePage = ({ isDarkMode, toggleDarkMode }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [domainsOfInterest, setDomainsOfInterest] = useState([]);
  const [othersDomain, setOthersDomain] = useState('');

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  const handleDomainChange = (domain, value) => {
    if(domain === 'others') {
      setOthersDomain(value);
    } else {
      setDomainsOfInterest((prev) => {
        if (value) {
          if (!prev.includes(domain)) {
            return [...prev, domain];
          }
        } else {
          return prev.filter((d) => d !== domain);
        }
        return prev;
      });
    }
  };

  const handleFormSubmit = (formData) => {
    // Combine formData and domainsOfInterest for submission
    const fullData = {
      ...formData,
      domainsOfInterest,
      othersDomain,
    };
    console.log('Submitting full profile data:', fullData);
    // TODO: Add API call or other submission logic here
  };

  return (
    <div className={`flex h-screen dashboard-container${isDarkMode ? ' dark' : ''}`}>
      {isSidebarVisible && <Sidebar isSidebarVisible={isSidebarVisible} isDarkMode={isDarkMode} />}
      <div className={`flex-1 flex flex-col overflow-hidden main-content${isSidebarVisible ? '' : ' full-width'}`}>
        <Header toggleSidebar={toggleSidebar} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="flex-1 overflow-y-auto p-6 edit-profile-content flex gap-10">
          <StudentProfileForm onSubmit={handleFormSubmit} />
          <DomainsOfInterest selectedDomains={domainsOfInterest} onChange={handleDomainChange} othersValue={othersDomain} />
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
