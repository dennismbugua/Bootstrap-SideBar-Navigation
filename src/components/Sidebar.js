import React, { useState, useEffect, useRef, useCallback } from "react";

const Sidebar = ({ activeSection, onSectionChange, isOpen, onClose }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [expandedGroups, setExpandedGroups] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [focusedItemIndex, setFocusedItemIndex] = useState(-1);
  const [isClosing, setIsClosing] = useState(false); // Add closing state
  const sidebarRef = useRef(null);
  const navRef = useRef(null);

  // Enhanced menu items with proper structure (keeping your existing menuItems and settingsItems)
  const menuItems = [
    {
      id: "dashboard",
      icon: "fas fa-home",
      label: "Dashboard",
      color: "#667eea",
      description: "Overview & Analytics",
      path: "/dashboard"
    },
    {
      id: "projects",
      icon: "fas fa-folder-open",
      label: "Projects",
      color: "#764ba2",
      description: "Manage your projects",
      path: "/projects",
      submenu: [
        { 
          id: "active-projects", 
          label: "Active Projects", 
          count: 12,
          path: "/projects/active",
          icon: "fas fa-play-circle"
        },
        { 
          id: "completed", 
          label: "Completed", 
          count: 45,
          path: "/projects/completed",
          icon: "fas fa-check-circle"
        },
        { 
          id: "archived", 
          label: "Archived", 
          count: 8,
          path: "/projects/archived",
          icon: "fas fa-archive"
        },
        {
          id: "templates",
          label: "Templates",
          count: 23,
          path: "/projects/templates",
          icon: "fas fa-layer-group"
        }
      ],
    },
    {
      id: "messages",
      icon: "fas fa-comments",
      label: "Messages",
      badge: "24",
      color: "#10b981",
      description: "Team communications",
      path: "/messages",
      submenu: [
        { 
          id: "inbox", 
          label: "Inbox", 
          count: 24,
          path: "/messages/inbox",
          icon: "fas fa-inbox"
        },
        { 
          id: "sent", 
          label: "Sent", 
          count: 156,
          path: "/messages/sent",
          icon: "fas fa-paper-plane"
        },
        { 
          id: "drafts", 
          label: "Drafts", 
          count: 3,
          path: "/messages/drafts",
          icon: "fas fa-edit"
        },
        {
          id: "trash",
          label: "Trash",
          count: 7,
          path: "/messages/trash",
          icon: "fas fa-trash"
        }
      ],
    },
    {
      id: "analytics",
      icon: "fas fa-chart-line",
      label: "Analytics",
      color: "#f59e0b",
      description: "Performance metrics",
      path: "/analytics",
      submenu: [
        { 
          id: "overview", 
          label: "Overview",
          path: "/analytics/overview",
          icon: "fas fa-chart-pie"
        },
        { 
          id: "reports", 
          label: "Reports",
          path: "/analytics/reports",
          icon: "fas fa-file-chart"
        },
        { 
          id: "insights", 
          label: "Insights",
          path: "/analytics/insights",
          icon: "fas fa-lightbulb"
        },
        {
          id: "export",
          label: "Export Data",
          path: "/analytics/export",
          icon: "fas fa-download"
        }
      ],
    },
    {
      id: "customers",
      icon: "fas fa-users",
      label: "Customers",
      color: "#ef4444",
      description: "Client management",
      badge: "new",
      path: "/customers",
      submenu: [
        {
          id: "all-customers",
          label: "All Customers",
          count: 1247,
          path: "/customers/all",
          icon: "fas fa-users"
        },
        {
          id: "active-customers",
          label: "Active",
          count: 892,
          path: "/customers/active",
          icon: "fas fa-user-check"
        },
        {
          id: "inactive-customers",
          label: "Inactive",
          count: 355,
          path: "/customers/inactive",
          icon: "fas fa-user-times"
        }
      ]
    },
    {
      id: "inventory",
      icon: "fas fa-boxes",
      label: "Inventory",
      color: "#8b5cf6",
      description: "Stock management",
      path: "/inventory",
      submenu: [
        {
          id: "products",
          label: "Products",
          count: 567,
          path: "/inventory/products",
          icon: "fas fa-box"
        },
        {
          id: "categories",
          label: "Categories",
          count: 23,
          path: "/inventory/categories",
          icon: "fas fa-tags"
        },
        {
          id: "suppliers",
          label: "Suppliers",
          count: 45,
          path: "/inventory/suppliers",
          icon: "fas fa-truck"
        }
      ]
    }
  ];

  const settingsItems = [
    {
      id: "settings",
      icon: "fas fa-cog",
      label: "Settings",
      color: "#6b7280",
      description: "App preferences",
      path: "/settings",
      submenu: [
        {
          id: "general",
          label: "General",
          path: "/settings/general",
          icon: "fas fa-sliders-h"
        },
        {
          id: "security",
          label: "Security",
          path: "/settings/security",
          icon: "fas fa-shield-alt"
        },
        {
          id: "notifications-settings",
          label: "Notifications",
          path: "/settings/notifications",
          icon: "fas fa-bell"
        },
        {
          id: "appearance",
          label: "Appearance",
          path: "/settings/appearance",
          icon: "fas fa-palette"
        }
      ]
    },
    {
      id: "notifications",
      icon: "fas fa-bell",
      label: "Notifications",
      color: "#8b5cf6",
      description: "Alert preferences",
      badge: "3",
      path: "/notifications"
    },
    {
      id: "help",
      icon: "fas fa-question-circle",
      label: "Help & Support",
      color: "#06b6d4",
      description: "Get assistance",
      path: "/help",
      submenu: [
        {
          id: "documentation",
          label: "Documentation",
          path: "/help/docs",
          icon: "fas fa-book"
        },
        {
          id: "contact",
          label: "Contact Support",
          path: "/help/contact",
          icon: "fas fa-headset"
        },
        {
          id: "faq",
          label: "FAQ",
          path: "/help/faq",
          icon: "fas fa-question"
        },
        {
          id: "tutorials",
          label: "Video Tutorials",
          path: "/help/tutorials",
          icon: "fas fa-play"
        }
      ]
    },
  ];

  // Enhanced mobile close function
  const handleMobileClose = useCallback(() => {
    if (isMobile) {
      setIsClosing(true);
      
      // Add visual feedback with haptic if available
      if (navigator.vibrate) {
        navigator.vibrate(20);
      }
      
      // Close with slight delay for smooth animation
      setTimeout(() => {
        onClose();
        setIsClosing(false);
        
        // Reset any expanded groups when closing on mobile
        setExpandedGroups([]);
        
        // Reset hover states
        setHoveredItem(null);
        
        // Reset focus
        setFocusedItemIndex(-1);
      }, 150); // Reduced delay for faster response
    }
  }, [isMobile, onClose]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991.98);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-expand active item's submenu
  useEffect(() => {
    const findActiveParent = (items) => {
      for (const item of items) {
        if (item.submenu) {
          const hasActiveSubmenu = item.submenu.some(subItem => 
            activeSection === `${item.id}-${subItem.id}`
          );
          if (hasActiveSubmenu && !expandedGroups.includes(item.id)) {
            setExpandedGroups(prev => [...prev, item.id]);
          }
        }
      }
    };

    findActiveParent([...menuItems, ...settingsItems]);
  }, [activeSection, expandedGroups]);

  // Enhanced item click handler with immediate mobile close
  const handleItemClick = useCallback((item, hasSubmenu = false) => {
    if (hasSubmenu) {
      // Toggle submenu with animation
      setExpandedGroups((prev) => {
        const isExpanded = prev.includes(item.id);
        if (isExpanded) {
          return prev.filter((id) => id !== item.id);
        } else {
          return [...prev, item.id];
        }
      });
      
      // Add haptic feedback for dropdown toggle
      if (navigator.vibrate) {
        navigator.vibrate([10, 5, 10]);
      }
    } else {
      // Navigate to item
      onSectionChange(item.id);
      
      // Immediately close sidebar on mobile after navigation
      if (isMobile) {
        handleMobileClose();
      }
      
      // Add haptic feedback
      if (navigator.vibrate) {
        navigator.vibrate(30);
      }
    }
  }, [isMobile, onSectionChange, handleMobileClose]);

  // Enhanced submenu item click handler with immediate mobile close
  const handleSubmenuClick = useCallback((parentItem, submenuItem) => {
    const combinedId = `${parentItem.id}-${submenuItem.id}`;
    onSectionChange(combinedId);
    
    // Immediately close sidebar on mobile after navigation
    if (isMobile) {
      handleMobileClose();
    }
    
    // Add haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(20);
    }
  }, [isMobile, onSectionChange, handleMobileClose]);

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch(e.key) {
        case "Escape":
          if (isMobile) {
            handleMobileClose();
          } else {
            onClose();
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          setFocusedItemIndex(prev => Math.max(0, prev - 1));
          break;
        case "ArrowDown":
          e.preventDefault();
          setFocusedItemIndex(prev => Math.min(menuItems.length + settingsItems.length - 1, prev + 1));
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          // Handle enter/space on focused items
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, menuItems.length, settingsItems.length, isMobile, handleMobileClose]);

  // Enhanced body scroll prevention and cleanup
  useEffect(() => {
    if (isMobile && isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.touchAction = 'none'; // Prevent touch scrolling
      
      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.touchAction = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen, isMobile]);

  // Enhanced outside click handler for immediate close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobile && 
        isOpen && 
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target)
      ) {
        handleMobileClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, isMobile, handleMobileClose]);

  // Smooth scroll to top when sidebar opens
  useEffect(() => {
    if (isOpen && navRef.current) {
      navRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isOpen]);

  // Reset states when sidebar closes
  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
      setHoveredItem(null);
      setFocusedItemIndex(-1);
      
      // Only reset expanded groups on mobile for better UX
      if (isMobile) {
        setExpandedGroups([]);
      }
    }
  }, [isOpen, isMobile]);

  // Check if item or its submenu is active
  const isItemActive = useCallback((item) => {
    if (activeSection === item.id) return true;
    if (item.submenu) {
      return item.submenu.some(subItem => 
        activeSection === `${item.id}-${subItem.id}`
      );
    }
    return false;
  }, [activeSection]);

  // Check if submenu item is active
  const isSubmenuItemActive = useCallback((parentId, submenuId) => {
    return activeSection === `${parentId}-${submenuId}`;
  }, [activeSection]);

  // Enhanced logout handler with mobile close
  const handleLogout = useCallback(() => {
    console.log('Logout');
    
    // Add haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(40);
    }
    
    // Close sidebar on mobile after logout
    if (isMobile) {
      handleMobileClose();
    }
    
    // Here you would typically handle the actual logout logic
    // For example: redirect to login page, clear user session, etc.
  }, [isMobile, handleMobileClose]);

  // Render navigation item with enhanced animations
  const renderNavItem = useCallback((item, index, isSettings = false) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isActive = isItemActive(item);
    const isExpanded = expandedGroups.includes(item.id);
    const submenuHeight = hasSubmenu ? item.submenu.length * 52 : 0;

    return (
      <li
        key={item.id}
        className={`nav-item ${isActive ? "active" : ""} ${isExpanded ? "expanded" : ""} ${hasSubmenu ? "has-submenu" : ""}`}
        style={{ 
          "--item-delay": `${index * 0.08}s`,
          "--item-color": item.color 
        }}
        onMouseEnter={() => setHoveredItem(item.id)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <a
          href="#"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            handleItemClick(item, hasSubmenu);
          }}
          aria-expanded={hasSubmenu ? isExpanded : undefined}
          aria-haspopup={hasSubmenu ? "true" : undefined}
          role="menuitem"
        >
          <div className="link-content">
            <div className="icon-wrapper">
              <i className={item.icon} aria-hidden="true"></i>
              <div className="icon-bg"></div>
              <div className="icon-pulse"></div>
            </div>

            <div className="text-content">
              <span className="link-label">{item.label}</span>
              {!isMobile && item.description && (
                <span className="link-description">
                  {item.description}
                </span>
              )}
            </div>

            <div className="link-extras">
              {item.badge && (
                <span
                  className={`nav-badge ${
                    item.badge === "new" ? "badge-new" : "badge-count"
                  }`}
                  aria-label={`${item.badge} ${item.badge === "new" ? "new items" : "items"}`}
                >
                  {item.badge}
                </span>
              )}
              {hasSubmenu && (
                <div className="submenu-toggle">
                  <i 
                    className={`fas fa-chevron-down submenu-arrow ${isExpanded ? "expanded" : ""}`}
                    aria-hidden="true"
                  ></i>
                </div>
              )}
            </div>
          </div>

          <div className="hover-effect"></div>
          <div className="active-indicator"></div>
          <div className="ripple-effect"></div>
        </a>

        {/* Enhanced Submenu with better animations */}
        {hasSubmenu && (
          <div 
            className={`submenu-container ${isExpanded ? "expanded" : ""}`}
            style={{
              "--submenu-height": `${submenuHeight}px`,
              "--submenu-items": item.submenu.length
            }}
          >
            <ul className="submenu">
              {item.submenu.map((subItem, subIndex) => (
                <li
                  key={subItem.id}
                  className={`submenu-item ${
                    isSubmenuItemActive(item.id, subItem.id) ? "active" : ""
                  }`}
                  style={{ 
                    "--sub-delay": `${subIndex * 0.05}s`,
                    "--sub-index": subIndex
                  }}
                >
                  <a
                    href="#"
                    className="submenu-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuClick(item, subItem);
                    }}
                    role="menuitem"
                  >
                    <div className="submenu-icon">
                      {subItem.icon ? (
                        <i className={subItem.icon} aria-hidden="true"></i>
                      ) : (
                        <span className="submenu-dot"></span>
                      )}
                    </div>
                    <span className="submenu-label">
                      {subItem.label}
                    </span>
                    {subItem.count && (
                      <span 
                        className="submenu-count"
                        aria-label={`${subItem.count} items`}
                      >
                        {subItem.count}
                      </span>
                    )}
                    <div className="submenu-hover-effect"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    );
  }, [expandedGroups, handleItemClick, handleSubmenuClick, hoveredItem, isItemActive, isSubmenuItemActive, isMobile]);

  return (
    <>
      {/* Enhanced Overlay for mobile with immediate close */}
      {isMobile && isOpen && (
        <div 
          className={`sidebar-overlay ${isOpen ? "active" : ""} ${isClosing ? "closing" : ""}`}
          onClick={handleMobileClose}
          onTouchEnd={handleMobileClose}
          aria-hidden="true"
        ></div>
      )}

      <div 
        ref={sidebarRef}
        className={`sidebar-modern ${isOpen ? "active" : ""} ${isClosing ? "closing" : ""}`}
        id="side_nav"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Enhanced Mobile Header with immediate close */}
        <div className="sidebar-header d-lg-none">
          <div className="brand-section">
            <div className="brand-logo">
              <div className="logo-icon">
                <i className="fas fa-rocket" aria-hidden="true"></i>
                <div className="logo-bg"></div>
              </div>
            </div>
            <div className="brand-info">
              <h1 className="brand-title">Dashboard Pro</h1>
              <p className="brand-subtitle">Admin Panel v2.1.0</p>
            </div>
          </div>

          <button
            className="close-btn"
            onClick={handleMobileClose}
            onTouchEnd={handleMobileClose}
            aria-label="Close sidebar"
            type="button"
          >
            <i className="fas fa-times" aria-hidden="true"></i>
            <div className="close-ripple"></div>
          </button>
        </div>

        {/* Enhanced User Profile Section */}
        <div className="user-profile d-none d-lg-flex">
          <div className="user-avatar">
            <img
              src="/images/profile.jpg"
              alt="John Doe profile picture"
              className="user-avatar-img"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=John+Doe&background=667eea&color=fff&size=48`;
              }}
            />
            <div 
              className="status-indicator online"
              aria-label="Online status"
              title="Online"
            ></div>
          </div>
          <div className="user-info">
            <h6 className="user-name">John Doe</h6>
            <small className="user-role">Administrator</small>
            <div className="user-status">
              <span className="status-text">Active now</span>
            </div>
          </div>
        </div>

        {/* Enhanced Scrollable Navigation Section */}
        <nav className="sidebar-nav" ref={navRef}>
          <div className="nav-content">
            {/* Main Navigation Section */}
            <div className="nav-section" role="group" aria-labelledby="main-nav-heading">
              <h4 className="nav-title" id="main-nav-heading">
                <span>Main Navigation</span>
                <div className="title-line"></div>
              </h4>
              <ul className="nav-list" role="menu">
                {menuItems.map((item, index) => renderNavItem(item, index))}
              </ul>
            </div>

            {/* Enhanced Navigation Divider */}
            <div className="nav-divider" role="separator">
              <div className="divider-line"></div>
              <span className="divider-text">System & Tools</span>
              <div className="divider-line"></div>
            </div>

            {/* Settings Section */}
            <div className="nav-section" role="group" aria-labelledby="settings-nav-heading">
              <ul className="nav-list" role="menu">
                {settingsItems.map((item, index) => renderNavItem(item, menuItems.length + index, true))}
              </ul>
            </div>

            {/* Mobile Logout Section with enhanced close */}
            <div className="nav-section d-lg-none">
              <div className="nav-divider" role="separator">
                <div className="divider-line"></div>
              </div>
              <div className="logout-section">
                <button 
                  className="logout-btn mobile-logout" 
                  onClick={handleLogout}
                  onTouchEnd={handleLogout}
                  type="button"
                  aria-label="Logout from application"
                >
                  <i className="fas fa-sign-out-alt" aria-hidden="true"></i>
                  <span>Logout</span>
                  <div className="logout-ripple"></div>
                </button>
              </div>
            </div>

            {/* Extra spacing for mobile scroll */}
            <div className="nav-spacer d-lg-none"></div>
          </div>
        </nav>

        {/* Enhanced Footer */}
        {/* <div className="sidebar-footer d-none d-lg-block">
          <div className="footer-content">
            <button 
              className="logout-btn desktop-logout" 
              onClick={handleLogout}
              type="button"
              aria-label="Logout from application"
            >
              <i className="fas fa-sign-out-alt" aria-hidden="true"></i>
              <span>Logout</span>
              <div className="logout-ripple"></div>
            </button>
            
            <div className="version-info">
              <small className="text-muted">v2.1.0</small>
              <small className="build-info">Build 2024.08</small>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;