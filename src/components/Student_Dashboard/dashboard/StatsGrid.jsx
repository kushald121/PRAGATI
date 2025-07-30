import React from 'react';

function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 stats-grid">
      <div className="stat-card p-4 bg-white rounded shadow flex items-center space-x-4">
        <div className="stat-icon blue text-blue-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
        <div className="stat-content">
          <div className="stat-number text-2xl font-bold">80%</div>
          <div className="stat-label text-gray-600">Attendance</div>
        </div>
      </div>

      <div className="stat-card p-4 bg-white rounded shadow flex items-center space-x-4">
        <div className="stat-icon purple text-purple-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H3.5C2.67 2 2 2.67 2 3.5v15C2 19.33 2.67 20 3.5 20h17c.83 0 1.5-.67 1.5-1.5v-15C22 2.67 21.33 2 20.5 2z" />
          </svg>
        </div>
        <div className="stat-content">
          <div className="stat-number text-2xl font-bold">258+</div>
          <div className="stat-label text-gray-600">Task Completed</div>
        </div>
      </div>

      <div className="stat-card p-4 bg-white rounded shadow flex items-center space-x-4">
        <div className="stat-icon yellow text-yellow-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="stat-content">
          <div className="stat-number text-2xl font-bold">64%</div>
          <div className="stat-label text-gray-600">Task in Progress</div>
        </div>
      </div>

      <div className="stat-card p-4 bg-white rounded shadow flex items-center space-x-4">
        <div className="stat-icon pink text-pink-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
          </svg>
        </div>
        <div className="stat-content">
          <div className="stat-number text-2xl font-bold">245</div>
          <div className="stat-label text-gray-600">Reward Points</div>
        </div>
      </div>
    </div>
  );
}

export default StatsGrid;
