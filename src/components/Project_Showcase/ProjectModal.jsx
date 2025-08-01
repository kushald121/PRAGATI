import React from "react";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-7 rounded-2xl shadow-lg w-[90%] max-w-md relative">

        {/* Close Button */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="absolute top-1 right-3 bg-[#7ca8d4] text-black px-3 py-1 hover:bg-gray-400 rounded-md text-sm"
        >
          Close
        </a>

        {/* Modal Content */}
        <div className="flex flex-col text-center items-center">
          <h2 className="text-2xl text-orange-500 font-bold mb-4">{project.title}</h2>
          <h3 className="text-lg font-medium mb-2">{project.projectType}</h3>
          <p className="text-sm text-gray-700 mb-4">{project.description}</p>

          {/* GitHub Button */}
          <a
            href={project.github || "https://github.com/dummy-project-link"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#00b2a9] px-4 py-2 rounded text-sm hover:bg-orange-500 transition"
          >
            View on GitHub
          </a>

          {/* Date and Duration in one line */}
          {(project.date || project.duration) && (
            <div className="flex justify-center gap-4 text-sm text-gray-700 mt-4">
              {project.date && (
                <p>
                  <span className="font-semibold">Date:</span> {project.date}
                </p>
              )}
              {project.duration && (
                <p>
                  <span className="font-semibold">Duration:</span> {project.duration}
                </p>
              )}
            </div>
          )}

          {/* Contributors - Centered Heading & Inline */}
          {project.contributors && project.contributors.length > 0 && (
            <div className="w-full mt-4 text-center">
              <h3 className="font-semibold text-sm mb-2">Contributors</h3>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
                {project.contributors.map((name, idx) => (
                  <span key={idx} className="bg-gray-200 px-3 py-1 rounded-full">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;




