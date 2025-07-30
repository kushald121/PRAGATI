import React from "react";

const DashboardCard = ({ icon, title, description, onClick }) => (
    <div
        onClick={onClick}
        className="bg-white p-10 m-2 rounded-xl shadow-md max-w-sm w-11/12 text-left hover:shadow-lg transition duration-200"
        style={{ cursor: onClick ? "pointer" : "default" }}
    >
        <h3 className="mb-2 text-xl font-semibold flex items-center gap-2">
            {icon} {title}
        </h3>
        <p className="text-l text-gray-600">{description}</p>
    </div>
);

export default DashboardCard;
