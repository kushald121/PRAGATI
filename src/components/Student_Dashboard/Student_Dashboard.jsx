import React from 'react';
import Sidebar from './dashboard/Sidebar';
import Header from './dashboard/Header';
import WelcomeSection from './dashboard/WelcomeSection';
import StatsGrid from './dashboard/StatsGrid';
import NoticeBoard from './dashboard/NoticeBoard';
import ChartSection from './dashboard/ChartSection';
import AssignmentsSection from './dashboard/AssignmentsSection';
import RightSidebar from './dashboard/RightSidebar';
import BottomProfileMessages from './dashboard/BottomProfileMessages';
import EditProfilePage from './EditProfile/EditProfilePage';
import MyProjects from './MyProjects/MyProjects';
import SkillBages from './SkillBadges/SkillBadgeForm';
import NotificationsPage from './NotificationsPage/NotificationsPage';

const StudentDashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <Header />
      <WelcomeSection />
      <StatsGrid />
      <NoticeBoard />
      <ChartSection />
      <AssignmentsSection />
      <RightSidebar />
      <BottomProfileMessages />
      <EditProfilePage />
      <MyProjects />
      <SkillBages />
      <NotificationsPage />
    </div>
  );
};

export default StudentDashboard;
