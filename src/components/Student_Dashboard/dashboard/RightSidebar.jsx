import React from 'react';
import CalendarWidget from './CalendarWidget';

function RightSidebar() {
  return (
    <div className="right-sidebar">
      {/* Attendance Chart */}
      <div className="attendance-widget">
        <div className="widget-header">
          <h4>Attendance</h4>
          <button className="widget-menu">⋯</button>
        </div>
        <div className="attendance-chart">
          <div className="circular-progress">
            <svg width="120" height="120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="8" />
              <circle cx="60" cy="60" r="50" fill="none" stroke="#8b5cf6" strokeWidth="8"
                strokeDasharray="251.2" strokeDashoffset="62.8" transform="rotate(-90 60 60)" />
            </svg>
            <div className="progress-text">80%</div>
          </div>
          <div className="attendance-legend">
            <div className="legend-item">
              <span className="legend-dot present"></span>
              <span>Present</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot absent"></span>
              <span>Absent</span>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <CalendarWidget />

      {/* Resources */}
      <div className="resources-widget">
        <div className="widget-header">
          <h4>Resources</h4>
          <button className="view-all">View All</button>
        </div>
        <div className="resources-grid">
          <div className="resource-item">
            <div className="resource-icon">📚</div>
            <span>Books</span>
          </div>
          <div className="resource-item">
            <div className="resource-icon">🎥</div>
            <span>Videos</span>
          </div>
          <div className="resource-item">
            <div className="resource-icon">📄</div>
            <span>Papers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
