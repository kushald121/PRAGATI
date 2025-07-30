import React from 'react';

function AssignmentsSection() {
  return (
    <div className="p-4 bg-white rounded shadow assignments-section">
      <div className="flex justify-between items-center mb-4 section-header">
        <h3 className="text-lg font-semibold">Assignments</h3>
        <div className="flex items-center search-assignments">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2 text-gray-500">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <input type="text" placeholder="Search by Subject" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      <div className="overflow-x-auto table-container">
        <table className="min-w-full border-collapse assignments-table">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">No</th>
              <th className="border px-4 py-2 text-left">Task</th>
              <th className="border px-4 py-2 text-left">Subject</th>
              <th className="border px-4 py-2 text-left">Due Date</th>
              <th className="border px-4 py-2 text-left">Status</th>
              <th className="border px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">01</td>
              <td className="border px-4 py-2">Read Chapter1-3</td>
              <td className="border px-4 py-2">English</td>
              <td className="border px-4 py-2">12 May 2024</td>
              <td className="border px-4 py-2">
                <span className="text-yellow-600 font-semibold">In Progress</span>
              </td>
              <td className="border px-4 py-2">
                <button className="mr-2 text-blue-600 hover:text-blue-800">✏️</button>
                <button className="text-red-600 hover:text-red-800">🗑️</button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">02</td>
              <td className="border px-4 py-2">Complete Problem Set #5</td>
              <td className="border px-4 py-2">Maths</td>
              <td className="border px-4 py-2">12 May 2024</td>
              <td className="border px-4 py-2">
                <span className="text-gray-500 font-semibold">Not Started</span>
              </td>
              <td className="border px-4 py-2">
                <button className="mr-2 text-blue-600 hover:text-blue-800">✏️</button>
                <button className="text-red-600 hover:text-red-800">🗑️</button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">03</td>
              <td className="border px-4 py-2">Write Lab Report on Acid-Base Titration</td>
              <td className="border px-4 py-2">Physics</td>
              <td className="border px-4 py-2">12 May 2024</td>
              <td className="border px-4 py-2">
                <span className="text-yellow-600 font-semibold">In Progress</span>
              </td>
              <td className="border px-4 py-2">
                <button className="mr-2 text-blue-600 hover:text-blue-800">✏️</button>
                <button className="text-red-600 hover:text-red-800">🗑️</button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">04</td>
              <td className="border px-4 py-2">Prepare for Oral Presentation</td>
              <td className="border px-4 py-2">Chemistry</td>
              <td className="border px-4 py-2">12 May 2024</td>
              <td className="border px-4 py-2">
                <span className="text-yellow-600 font-semibold">In Progress</span>
              </td>
              <td className="border px-4 py-2">
                <button className="mr-2 text-blue-600 hover:text-blue-800">✏️</button>
                <button className="text-red-600 hover:text-red-800">🗑️</button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">05</td>
              <td className="border px-4 py-2">Create Art Piece for Final Project</td>
              <td className="border px-4 py-2">English</td>
              <td className="border px-4 py-2">12 May 2024</td>
              <td className="border px-4 py-2">
                <span className="text-green-600 font-semibold">Completed</span>
              </td>
              <td className="border px-4 py-2">
                <button className="mr-2 text-blue-600 hover:text-blue-800">✏️</button>
                <button className="text-red-600 hover:text-red-800">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AssignmentsSection;
