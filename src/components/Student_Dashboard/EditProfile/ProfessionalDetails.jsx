import React from 'react';

const ProfessionalDetails = () => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">
        Professional Details
      </h2>
      <div className="flex gap-4 mb-5">
        <div className="flex-1">
          <label className="block mb-2 font-medium text-gray-700">LinkedIn link</label>
          <input
            type="text"
            placeholder="LinkedIn link"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-2 font-medium text-gray-700">Github link</label>
          <input
            type="text"
            placeholder="Github link"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex gap-4 mb-5">
        <div className="flex-1">
          <label className="block mb-2 font-medium text-gray-700">Internship</label>
          <input
            type="text"
            placeholder="Yes or No"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-2 font-medium text-gray-700">Company name</label>
          <input
            type="text"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block mb-2 font-medium text-gray-700">Duration</label>
          <input
            type="text"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-2 font-medium text-gray-700">Skills You Used</label>
          <input
            type="text"
            placeholder="HTML, CSS, etc"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDetails;
