import React from 'react';

const Skills = () => {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-6 section-header">
        <h2 className="text-xl font-semibold mb-0">Skills</h2>
        <button
          className="bg-gray-200 rounded-md w-8 h-8 flex items-center justify-center text-gray-500 text-xl hover:bg-gray-300 focus:outline-none"
          aria-label="Add skill"
        >
          +
        </button>
      </div>
      <div className="form-row mb-5">
        <input
          type="text"
          placeholder="skill name"
          className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </section>
  );
};

export default Skills;
