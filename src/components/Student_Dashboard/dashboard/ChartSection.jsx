import React, { useEffect, useRef } from 'react';

function ChartSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Sample data points for the chart
    const dataPoints = [
      { x: 50, y: 150 },
      { x: 100, y: 120 },
      { x: 150, y: 140 },
      { x: 200, y: 100 },
      { x: 250, y: 80 },
      { x: 300, y: 60 },
      { x: 350, y: 40 }
    ];

    // Draw the line chart
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.beginPath();

    dataPoints.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });

    ctx.stroke();

    // Draw data points
    ctx.fillStyle = '#f59e0b';
    dataPoints.forEach(point => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
      ctx.fill();
    });

    // Add grid lines
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;

    // Horizontal grid lines
    for (let i = 0; i <= 4; i++) {
      const y = i * 50;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(400, y);
      ctx.stroke();
    }

    // Vertical grid lines
    for (let i = 0; i <= 7; i++) {
      const x = i * 60;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 200);
      ctx.stroke();
    }
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow chart-section">
      <div className="section-header flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Test Score activity</h3>
        <select className="time-filter border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Daily</option>
        </select>
      </div>
      <div className="chart-container">
        <canvas id="scoreChart" width="400" height="200" ref={canvasRef}></canvas>
      </div>
    </div>
  );
}

export default ChartSection;
