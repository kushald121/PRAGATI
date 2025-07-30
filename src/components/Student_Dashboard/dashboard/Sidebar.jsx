import React from 'react';

function Sidebar({ isSidebarVisible }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const handleNavClick = (item, path) => {
    setActiveItem(item);
    window.location.href = path;
  };

  const getNavItemStyle = (item) => {
    return item === activeItem
      ? "bg-white/15 cursor-pointer flex items-center gap-3 p-3 mb-1 rounded-md font-medium"
      : "cursor-pointer flex items-center gap-3 p-3 mb-1 rounded-md font-medium";
  };

  if (!isSidebarVisible) {
    return null;
  }

  return (
    <div className="sidebar expanded" tabIndex={0}>
      <div className="logo">
        <img src="public/images/uptoskills_logo.png" alt="UpToSkills Logo" />
      </div>

      <nav className="nav-menu">
        <div
          className={getNavItemStyle('dashboard')}
          onClick={() => handleNavClick('dashboard', '/')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
          </svg>
          {'Dashboard'}
        </div>
        <div
          className={getNavItemStyle('edit-profile')}
          onClick={() => handleNavClick('edit-profile', '/edit-profile')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          {'Edit Profile'}
        </div>
        <div
          className={getNavItemStyle('my-project')}
          onClick={() => handleNavClick('my-project', '/my-project')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
          </svg>
          {'My Project'}
        </div>
        <div
          className={getNavItemStyle('skillbadges')}
          onClick={() => handleNavClick('skillbadges', '/SkillBadges')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          {'Skill Badges'}
        </div>
        <div
          className={getNavItemStyle('message')}
          onClick={() => handleNavClick('message', '/notifications')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
          </svg>
          {'Notifications'}
        </div>
        <div
          className={getNavItemStyle('admin-panel')}
          onClick={() => handleNavClick('admin-panel', '/admin-panel')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4h16v16H4z" />
          </svg>
          {'Admin Panel'}
        </div>
        <div
          className="nav-item logout-item"
          tabIndex={0}
          role="button"
          onClick={() => alert('Logged out')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', marginBottom: '4px', borderRadius: '8px', fontWeight: 500 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 13v-2H7V8l-5 4 5 4v-3zM20 3h-8v2h8v14h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
          </svg>
          {'Log Out'}
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;

