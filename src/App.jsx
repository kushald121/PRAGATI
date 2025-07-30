import React from 'react'
import Navbar from "./components/navbar";
import Profileicon from "./components/profileicon";
import ContactPage from './pages/ContactPage';
//import { useState } from 'react';

//Dashboard Components imported
import {
  Sidebar,
  Header,
  WelcomeSection,
  StatsGrid,
  NoticeBoard,
  ChartSection,
  AssignmentsSection,
  RightSidebar,
  BottomProfileMessages,
  EditProfilePage,
  MyProjects,
  SkillBages,
  NotificationsPage
} from './index.js'; 

const App = () => {
  return (
    <div>
      <Navbar/>
      <Profileicon/>
      <ContactPage />
    </div>
  )
}

export default App
