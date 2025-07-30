import React from 'react';

function NoticeBoard() {
  return (
    <div className="p-4 bg-white rounded shadow notice-board">
      <div className="section-header flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Notice Board</h3>
        <button className="text-blue-600 hover:underline focus:outline-none">View All</button>
      </div>
      <div className="notice-item flex items-center mb-2">
        <div className="notice-icon bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 font-bold">!</div>
        <span>Company Hiring</span>
      </div>
      <div className="notice-item flex items-center">
        <div className="notice-icon bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 font-bold">i</div>
        <span>Active Assessments</span>
      </div>
    </div>
  );
}

export default NoticeBoard;
