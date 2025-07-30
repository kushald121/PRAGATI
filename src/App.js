import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MentorDashboard } from "./pages/MentorDashboard";
import ProjectsProgress from "./pages/ProjectsProgress";
import OpenSourceContributions from "./pages/OpenSourceContributions";
import Feedback from "./pages/Feedback";
import MultiStudent from "./pages/MultiStudent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MentorDashboard />} />
        <Route path="/projects-progress" element={<ProjectsProgress />} />
        <Route path="/open-source-contributions" element={<OpenSourceContributions />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/multi-student" element={<MultiStudent />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
