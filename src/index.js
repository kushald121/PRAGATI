import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//Dashboard Components
export { default as Sidebar } from './dashboard/Sidebar';
export { default as Header } from './dashboard/Header';
export { default as WelcomeSection } from './dashboard/WelcomeSection';
export { default as StatsGrid } from './dashboard/StatsGrid';
export { default as NoticeBoard } from './dashboard/NoticeBoard';
export { default as ChartSection } from './dashboard/ChartSection';
export { default as AssignmentsSection } from './dashboard/AssignmentsSection';
export { default as RightSidebar } from './dashboard/RightSidebar';
export { default as BottomProfileMessages } from './dashboard/BottomProfileMessages';

// Other Pages
export { default as EditProfilePage } from './EditProfile/EditProfilePage';
export { default as MyProjects } from './myProjects/MyProjects';
export { default as SkillBages } from './SkillBadges/SkillBadgeForm';
export { default as NotificationsPage } from './NotificationsPage/NotificationsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
