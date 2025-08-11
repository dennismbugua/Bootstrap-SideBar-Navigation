import React, { useState, useEffect } from 'react';

const Navbar = ({ onToggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleSidebarToggle = () => {
    onToggleSidebar();
    // Add haptic feedback simulation
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-modern navbar-fixed ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="container-fluid">
        {/* Mobile sidebar toggle and brand */}
        <div className="d-flex align-items-center d-lg-none mobile-brand-section">
          <button 
            className="btn btn-sidebar-toggle"
            onClick={handleSidebarToggle}
            aria-label="Toggle sidebar"
          >
            <div className="hamburger-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <a className="navbar-brand brand-mobile" href="#">
            <div className="brand-container">
              <div className="brand-icon">
                <i className="fas fa-rocket"></i>
                <div className="icon-glow"></div>
              </div>
              <div className="brand-text-container">
                <span className="brand-text">Dashboard</span>
                <span className="brand-subtitle">Pro</span>
              </div>
            </div>
          </a>
        </div>

        {/* Desktop brand with enhanced styling */}
        <a className="navbar-brand brand-desktop d-none d-lg-flex" href="#">
          <div className="brand-container">
            <div className="brand-icon">
              <i className="fas fa-rocket"></i>
              <div className="icon-glow"></div>
              <div className="icon-pulse"></div>
            </div>
            <div className="brand-text-container">
              <span className="brand-text">Dashboard Pro</span>
              <span className="brand-tagline">Admin Panel v2.1</span>
            </div>
          </div>
        </a>

        {/* Enhanced mobile nav toggle */}
        <button
          className={`navbar-toggler custom-toggler ${isNavOpen ? 'active' : ''}`}
          type="button"
          onClick={toggleNav}
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <div className="toggler-container">
            <span className="toggler-line"></span>
            <span className="toggler-line"></span>
            <span className="toggler-line"></span>
          </div>
        </button>

        {/* Navigation items */}
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarContent">
          
          {/* Optimized search bar with proper flex layout */}
          <div className="navbar-search-wrapper d-none d-lg-flex">
            <div className={`search-container ${searchFocused ? 'focused' : ''}`}>
              <div className="search-icon-wrapper">
                <i className="fas fa-search search-icon"></i>
              </div>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search projects, tasks, users..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <div className="search-shortcuts">
                <kbd>Ctrl</kbd>
                <kbd>K</kbd>
              </div>
              {searchFocused && (
                <div className="search-suggestions">
                  <div className="suggestion-category">
                    <div className="category-title">Recent Searches</div>
                    <div className="suggestion-item">
                      <i className="fas fa-clock"></i>
                      <span>Dashboard Analytics</span>
                    </div>
                    <div className="suggestion-item">
                      <i className="fas fa-clock"></i>
                      <span>User Management</span>
                    </div>
                  </div>
                  <div className="suggestion-category">
                    <div className="category-title">Quick Actions</div>
                    <div className="suggestion-item">
                      <i className="fas fa-plus"></i>
                      <span>Create New Project</span>
                    </div>
                    <div className="suggestion-item">
                      <i className="fas fa-users"></i>
                      <span>Add Team Member</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced right side navigation - repositioned for top right */}
          <ul className="navbar-nav navbar-nav-modern ms-auto navbar-nav-top-right">
            {/* Mobile search */}
            <li className="nav-item d-lg-none">
              <a className="nav-link nav-link-modern" href="#">
                <div className="nav-icon-wrapper">
                  <i className="fas fa-search"></i>
                  <div className="icon-ripple"></div>
                </div>
                <span className="nav-label">Search</span>
              </a>
            </li>

            {/* Enhanced messages with clear label - moved before notifications */}
            <li className="nav-item">
              <a className="nav-link nav-link-modern nav-link-messages" href="#">
                <div className="nav-icon-wrapper">
                  <i className="fas fa-envelope"></i>
                  <span className="notification-badge notification-success">2</span>
                  <div className="icon-ripple"></div>
                </div>
                <span className="nav-label d-lg-none d-xl-block">Messages</span>
              </a>
            </li>

            {/* Enhanced notifications with clear label - now at the far right */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link nav-link-modern nav-link-notifications" 
                href="#" 
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="nav-icon-wrapper">
                  <i className="fas fa-bell"></i>
                  {notifications > 0 && (
                    <span className="notification-badge notification-pulse">
                      {notifications}
                    </span>
                  )}
                  <div className="icon-ripple"></div>
                </div>
                <span className="nav-label d-lg-none d-xl-block">Notifications</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end notification-dropdown">
                <li className="dropdown-header">
                  <div className="notification-header">
                    <div className="header-content">
                      <h6 className="header-title">Notifications</h6>
                      <span className="header-count">{notifications} new</span>
                    </div>
                    <button className="btn btn-clear-all">
                      <i className="fas fa-check-double"></i>
                    </button>
                  </div>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li>
                  <a className="dropdown-item notification-item unread" href="#">
                    <div className="notification-icon bg-primary">
                      <i className="fas fa-user-plus"></i>
                    </div>
                    <div className="notification-content">
                      <div className="notification-title">New team member joined</div>
                      <div className="notification-desc">Sarah Wilson joined the development team</div>
                      <div className="notification-time">2 minutes ago</div>
                    </div>
                    <div className="notification-actions">
                      <button className="btn-action">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item notification-item unread" href="#">
                    <div className="notification-icon bg-success">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="notification-content">
                      <div className="notification-title">Task completed</div>
                      <div className="notification-desc">Mobile app design review completed</div>
                      <div className="notification-time">1 hour ago</div>
                    </div>
                    <div className="notification-actions">
                      <button className="btn-action">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item notification-item" href="#">
                    <div className="notification-icon bg-warning">
                      <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <div className="notification-content">
                      <div className="notification-title">Server maintenance</div>
                      <div className="notification-desc">Scheduled maintenance tonight at 2 AM</div>
                      <div className="notification-time">3 hours ago</div>
                    </div>
                    <div className="notification-actions">
                      <button className="btn-action">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li>
                  <a className="dropdown-item view-all-link" href="#">
                    <span>View all notifications</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;