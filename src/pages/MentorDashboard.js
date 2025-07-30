import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DashboardCard from "../components/DashboardCard";
import { useNavigate } from "react-router-dom";

export const MentorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <Navbar />

      <main className="py-12 px-8 text-center">
        <h1 className="text-4xl font-bold mb-8">Mentor Dashboard</h1>

        <div className="flex flex-wrap justify-center gap-6">

          <DashboardCard
            icon="📈"
            title="Projects Progress"
            description="Monitor the ongoing and completed projects of your students in real-time."
            onClick={() => navigate("/projects-progress")}
          />
          <DashboardCard
            icon="🌐"
            title="Open Source Contributions"
            description="Review your student’s pull requests, commits, and activity on open source platforms."
            onClick={() => navigate("/open-source-contributions")}
          />
          <DashboardCard
            icon="📝"
            title="Feedback & Approvals"
            description="Give personalized feedback and approve submitted milestones with ease."
            onClick={() => navigate("/feedback")}
          />
          <DashboardCard
            icon="👥"
            title="Multi-Student View"
            description="Easily toggle between multiple students to evaluate and mentor efficiently."
            onClick={() => navigate("/multi-student")}
          />
        </div>
      </main>

      <Footer />

    </div>
  );
};

export default MentorDashboard;
