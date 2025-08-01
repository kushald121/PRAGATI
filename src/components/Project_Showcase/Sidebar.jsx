import React, { useState } from "react";
import logo from "../assets/uptoskills-logo.png";

function Sidebar({ isSidebarVisible, setIsSidebarVisible }) {
  const [activeItem, setActiveItem] = useState(null);

  const handleNavClick = (item, path) => {
    setActiveItem(item);
    window.location.href = path;
    if (window.innerWidth < 768) {
      setIsSidebarVisible(false); // Auto-close sidebar on mobile after navigation
    }
  };

  const getNavItemStyle = (item) => {
    return item === activeItem
      ? {
          backgroundColor: "#3D566E",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "12px 16px",
          marginBottom: "4px",
          borderRadius: "8px",
          fontWeight: 600,
        }
      : {
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "12px 16px",
          marginBottom: "4px",
          borderRadius: "8px",
          fontWeight: 500,
          color: "#fff",
        };
  };

  if (!isSidebarVisible && window.innerWidth < 768) return null;

  return (
    <div
      className="sidebar expanded fixed md:static z-40"
      style={{
        backgroundColor: "#2E4053",
        color: "#fff",
        width: "240px",
        minHeight: "100vh",
        padding: "16px",
      }}
      tabIndex={0}
    >
      {/* Logo */}
      <div className="logo mb-6 text-center">
        <img src={logo} alt="UpToSkills Logo" className="mx-auto w-44" />
      </div>

      {/* Navigation */}
      <nav className="nav-menu">
        {/* Reusable items below */}
        {[
          { name: "dashboard", label: "Dashboard", path: "/" , icon: <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />},
          { name: "edit-profile", label: "Edit Profile", path: "/edit-profile", icon: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />},
          { name: "my-project", label: "My Project", path: "/my-project", icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />},
          { name: "milestones", label: "Milestones", path: "/milestones", icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />},
          { name: "notifications", label: "Notifications", path: "/notifications", icon: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />},
          { name: "admin-panel", label: "Admin Panel", path: "/admin-panel", icon: <path d="M4 4h16v16H4z" />},
          { name: "logout", label: "Log Out", path: "#", icon: <path d="M16 13v-2H7V8l-5 4 5 4v-3zM20 3h-8v2h8v14h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />, action: () => alert("Logged out") },
        ].map(({ name, label, path, icon, action }) => (
          <div
            key={name}
            className="nav-item hover:bg-[#3D566E]"
            style={getNavItemStyle(name)}
            onClick={() => action ? action() : handleNavClick(name, path)}
          >
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              {icon}
            </svg>
            {label}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
