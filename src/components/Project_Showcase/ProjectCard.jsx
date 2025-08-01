import React from "react";
import { FiEye } from "react-icons/fi";

import {
  FaCode,
  FaLock,
  FaUsers,
  FaUser,
  FaSmile,
  FaChartLine,
  FaSkullCrossbones,
} from "react-icons/fa";
import { MdSensors } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";

const ProjectCard = ({ project, onClick }) => {
  // Icon Mappings
  const getDomainIcon = (domain) => {
    switch (domain.toLowerCase()) {
      case "web dev":
        return <FaCode className="text-cyan-500" />;
      case "cyber":
        return <FaLock className="text-cyan-500" />;
      case "iot":
        return <MdSensors className="text-cyan-500" />;
      case "ai/ml":
        return <GiArtificialIntelligence className="text-cyan-500" />;
      default:
        return <FaCode className="text-cyan-500" />;
    }
  };

  const getTypeIcon = (type) => {
    return type.toLowerCase() === "individual" ? (
      <FaUser className="text-rose-500" />
    ) : (
      <FaUsers className="text-rose-500" />
    );
  };

  const getDifficultyIcon = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return <FaSmile className="text-orange-400" />;
      case "medium":
        return <FaChartLine className="text-orange-400" />;
      case "hard":
        return <FaSkullCrossbones className="text-orange-400" />;
      default:
        return <FaChartLine className="text-orange-400" />;
    }
  };

  return (
    <div className="backdrop-blur-lg bg-white/70 shadow-xl rounded-3xl p-6 cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-2xl border border-white/30">
      
      {/* Project Icon */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-20 h-20 object-cover mb-4 mx-auto rounded-full border-4 border-white shadow-md"
        />
      )}

      {/* Title and Description */}
      <h2 className="text-2xl font-bold text-center text-gray-800">
        {project.title}
      </h2>
      <p className="text-sm text-gray-600 mb-4 text-center">
        {project.description}
      </p>

      {/* Embedded Feature Row with Conditional Icons */}
      <div className="flex justify-center gap-5 mt-3 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          {getDomainIcon(project.domain)}
          <span>{project.domain}</span>
        </div>
        <div className="flex items-center gap-2">
          {getTypeIcon(project.type)}
          <span>{project.type}</span>
        </div>
        <div className="flex items-center gap-2">
          {getDifficultyIcon(project.difficulty)}
          <span>{project.difficulty}</span>
        </div>
      </div>

      {/* View Details Button */}
    <div className="flex justify-center mt-5">
  <button
    onClick={onClick}
    className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-orange-500 hover:to-red-400 text-white font-medium text-sm transition duration-300"
  >
    <FiEye className="text-base" />
    View Details
    <span className="transform group-hover:translate-x-1 transition-transform duration-200">
      →
    </span>
  </button>
</div>

    </div>
  );
};

export default ProjectCard;
