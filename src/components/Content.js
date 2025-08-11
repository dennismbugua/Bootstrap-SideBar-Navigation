import React from 'react';

const Content = ({ activeSection }) => {
  const renderDashboard = () => (
    <div className="content-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard Overview</h1>
        <p className="dashboard-subtitle">Welcome back! Here's what's happening with your business today.</p>
      </div>
      
      <div className="container-fluid">
        <div className="row g-4 mb-4">
          <div className="col-xl-3 col-md-6 col-sm-6 col-12">
            <div className="stat-card stat-card-primary">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-content">
                <h3 className="stat-number">2,847</h3>
                <p className="stat-label">Total Users</p>
                <span className="stat-change positive">+12.5%</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-6 col-12">
            <div className="stat-card stat-card-success">
              <div className="stat-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <div className="stat-content">
                <h3 className="stat-number">$89,247</h3>
                <p className="stat-label">Revenue</p>
                <span className="stat-change positive">+8.2%</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-6 col-12">
            <div className="stat-card stat-card-warning">
              <div className="stat-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div className="stat-content">
                <h3 className="stat-number">1,247</h3>
                <p className="stat-label">Orders</p>
                <span className="stat-change negative">-3.1%</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-6 col-12">
            <div className="stat-card stat-card-info">
              <div className="stat-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="stat-content">
                <h3 className="stat-number">94.5%</h3>
                <p className="stat-label">Performance</p>
                <span className="stat-change positive">+2.4%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-8 col-12">
            <div className="chart-card">
              <h3 className="chart-title">Revenue Analytics</h3>
              <div className="chart-placeholder">
                <i className="fas fa-chart-area"></i>
                <p>Interactive chart would be displayed here</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="activity-card">
              <h3 className="activity-title">Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon bg-primary">
                    <i className="fas fa-user-plus"></i>
                  </div>
                  <div className="activity-content">
                    <p className="activity-text">New user registered</p>
                    <span className="activity-time">2 minutes ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon bg-success">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="activity-content">
                    <p className="activity-text">Order #1234 completed</p>
                    <span className="activity-time">15 minutes ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon bg-warning">
                    <i className="fas fa-exclamation-triangle"></i>
                  </div>
                  <div className="activity-content">
                    <p className="activity-text">Server maintenance scheduled</p>
                    <span className="activity-time">1 hour ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="content-projects">
      <div className="section-header">
        <h1 className="section-title">Projects</h1>
        <button className="btn btn-primary">
          <i className="fas fa-plus me-2"></i>New Project
        </button>
      </div>
      
      <div className="projects-grid">
        {[
          { name: 'E-commerce Platform', status: 'In Progress', progress: 75, team: 5, deadline: '2024-03-15' },
          { name: 'Mobile App Development', status: 'Planning', progress: 25, team: 8, deadline: '2024-04-20' },
          { name: 'Website Redesign', status: 'Completed', progress: 100, team: 3, deadline: '2024-02-28' },
          { name: 'API Integration', status: 'In Progress', progress: 60, team: 4, deadline: '2024-03-10' }
        ].map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-name">{project.name}</h3>
              <span className={`project-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            </div>
            <div className="project-progress">
              <div className="progress-info">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="progress">
                <div 
                  className="progress-bar" 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
            <div className="project-meta">
              <div className="meta-item">
                <i className="fas fa-users"></i>
                <span>{project.team} members</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-calendar"></i>
                <span>{project.deadline}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="content-messages">
      <div className="section-header">
        <h1 className="section-title">Messages</h1>
        <button className="btn btn-primary">
          <i className="fas fa-pen me-2"></i>Compose
        </button>
      </div>
      
      <div className="messages-container">
        <div className="messages-sidebar">
          <div className="message-filters">
            <button className="filter-btn active">All Messages</button>
            <button className="filter-btn">Unread (24)</button>
            <button className="filter-btn">Important</button>
          </div>
        </div>
        
        <div className="messages-list">
          {[
            { sender: 'John Smith', subject: 'Project Update Required', time: '2 minutes ago', unread: true },
            { sender: 'Sarah Wilson', subject: 'Meeting Schedule Confirmation', time: '1 hour ago', unread: true },
            { sender: 'Mike Johnson', subject: 'Budget Approval Request', time: '3 hours ago', unread: false },
            { sender: 'Lisa Brown', subject: 'Client Feedback Report', time: '1 day ago', unread: false }
          ].map((message, index) => (
            <div key={index} className={`message-item ${message.unread ? 'unread' : ''}`}>
              <div className="message-avatar">
                <img 
                  src={`https://ui-avatars.com/api/?name=${message.sender}&background=667eea&color=fff&size=40`}
                  alt={message.sender}
                />
              </div>
              <div className="message-content">
                <div className="message-header">
                  <h4 className="message-sender">{message.sender}</h4>
                  <span className="message-time">{message.time}</span>
                </div>
                <p className="message-subject">{message.subject}</p>
              </div>
              {message.unread && <div className="unread-indicator"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="content-analytics">
      <div className="section-header">
        <h1 className="section-title">Analytics</h1>
        <div className="date-range-picker">
          <button className="btn btn-outline-primary">
            <i className="fas fa-calendar me-2"></i>Last 30 days
          </button>
        </div>
      </div>
      
      <div className="analytics-grid">
        <div className="analytics-card">
          <h3 className="analytics-title">Traffic Sources</h3>
          <div className="traffic-sources">
            {[
              { source: 'Organic Search', percentage: 45, color: '#667eea' },
              { source: 'Direct Traffic', percentage: 30, color: '#764ba2' },
              { source: 'Social Media', percentage: 15, color: '#10b981' },
              { source: 'Email Campaign', percentage: 10, color: '#f59e0b' }
            ].map((item, index) => (
              <div key={index} className="traffic-item">
                <div className="traffic-info">
                  <span className="traffic-label">{item.source}</span>
                  <span className="traffic-percentage">{item.percentage}%</span>
                </div>
                <div className="traffic-bar">
                  <div 
                    className="traffic-fill" 
                    style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="analytics-card">
          <h3 className="analytics-title">Performance Metrics</h3>
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-icon">
                <i className="fas fa-eye"></i>
              </div>
              <div className="metric-content">
                <h4 className="metric-value">45,678</h4>
                <p className="metric-label">Page Views</p>
              </div>
            </div>
            <div className="metric-item">
              <div className="metric-icon">
                <i className="fas fa-mouse-pointer"></i>
              </div>
              <div className="metric-content">
                <h4 className="metric-value">3.2%</h4>
                <p className="metric-label">Click Rate</p>
              </div>
            </div>
            <div className="metric-item">
              <div className="metric-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="metric-content">
                <h4 className="metric-value">2:45</h4>
                <p className="metric-label">Avg. Session</p>
              </div>
            </div>
            <div className="metric-item">
              <div className="metric-icon">
                <i className="fas fa-undo"></i>
              </div>
              <div className="metric-content">
                <h4 className="metric-value">42.8%</h4>
                <p className="metric-label">Bounce Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCustomers = () => (
    <div className="content-customers">
      <div className="section-header">
        <h1 className="section-title">Customers</h1>
        <button className="btn btn-primary">
          <i className="fas fa-user-plus me-2"></i>Add Customer
        </button>
      </div>
      
      <div className="customers-table-container">
        <table className="customers-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Status</th>
              <th>Orders</th>
              <th>Total Spent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Alice Johnson', email: 'alice@example.com', status: 'Active', orders: 12, spent: '$2,450' },
              { name: 'Bob Smith', email: 'bob@example.com', status: 'Inactive', orders: 5, spent: '$890' },
              { name: 'Carol Davis', email: 'carol@example.com', status: 'Active', orders: 8, spent: '$1,670' },
              { name: 'David Wilson', email: 'david@example.com', status: 'Pending', orders: 3, spent: '$520' }
            ].map((customer, index) => (
              <tr key={index}>
                <td>
                  <div className="customer-info">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${customer.name}&background=667eea&color=fff&size=32`}
                      alt={customer.name}
                      className="customer-avatar"
                    />
                    <span className="customer-name">{customer.name}</span>
                  </div>
                </td>
                <td>{customer.email}</td>
                <td>
                  <span className={`status-badge status-${customer.status.toLowerCase()}`}>
                    {customer.status}
                  </span>
                </td>
                <td>{customer.orders}</td>
                <td>{customer.spent}</td>
                <td>
                  <div className="action-buttons">
                    <button className="btn btn-sm btn-outline-primary">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="content-settings">
      <div className="section-header">
        <h1 className="section-title">Settings</h1>
      </div>
      
      <div className="settings-grid">
        <div className="settings-card">
          <h3 className="settings-title">Profile Settings</h3>
          <form className="settings-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="form-control" defaultValue="John Doe" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" className="form-control" defaultValue="john@example.com" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" className="form-control" defaultValue="+1 (555) 123-4567" />
            </div>
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </form>
        </div>
        
        <div className="settings-card">
          <h3 className="settings-title">Preferences</h3>
          <div className="preference-group">
            <div className="preference-item">
              <div className="preference-info">
                <h4>Email Notifications</h4>
                <p>Receive email updates about your account</p>
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" defaultChecked />
              </div>
            </div>
            <div className="preference-item">
              <div className="preference-info">
                <h4>Push Notifications</h4>
                <p>Get notified about important updates</p>
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" />
              </div>
            </div>
            <div className="preference-item">
              <div className="preference-info">
                <h4>Dark Mode</h4>
                <p>Switch to dark theme</p>
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="content-notifications">
      <div className="section-header">
        <h1 className="section-title">Notifications</h1>
        <button className="btn btn-outline-primary">Mark All Read</button>
      </div>
      
      <div className="notifications-list">
        {[
          { type: 'success', icon: 'check-circle', title: 'Payment Received', message: 'Payment of $2,450 has been received from Alice Johnson', time: '2 minutes ago', unread: true },
          { type: 'warning', icon: 'exclamation-triangle', title: 'System Maintenance', message: 'Scheduled maintenance will begin at 2:00 AM EST', time: '1 hour ago', unread: true },
          { type: 'info', icon: 'info-circle', title: 'New Feature Released', message: 'Check out our new analytics dashboard features', time: '3 hours ago', unread: false },
          { type: 'danger', icon: 'times-circle', title: 'Failed Login Attempt', message: 'Someone tried to access your account from an unknown device', time: '1 day ago', unread: false }
        ].map((notification, index) => (
          <div key={index} className={`notification-item ${notification.unread ? 'unread' : ''}`}>
            <div className={`notification-icon ${notification.type}`}>
              <i className={`fas fa-${notification.icon}`}></i>
            </div>
            <div className="notification-content">
              <h4 className="notification-title">{notification.title}</h4>
              <p className="notification-message">{notification.message}</p>
              <span className="notification-time">{notification.time}</span>
            </div>
            {notification.unread && <div className="unread-dot"></div>}
          </div>
        ))}
      </div>
    </div>
  );

  const renderHelp = () => (
    <div className="content-help">
      <div className="section-header">
        <h1 className="section-title">Help & Support</h1>
      </div>
      
      <div className="help-grid">
        <div className="help-section">
          <h3 className="help-section-title">Frequently Asked Questions</h3>
          <div className="faq-list">
            {[
              { question: 'How do I reset my password?', answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page.' },
              { question: 'How do I update my profile information?', answer: 'Go to Settings > Profile Settings to update your personal information.' },
              { question: 'How do I contact support?', answer: 'You can reach our support team through the contact form below or email us at support@example.com.' }
            ].map((faq, index) => (
              <div key={index} className="faq-item">
                <h4 className="faq-question">{faq.question}</h4>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="help-section">
          <h3 className="help-section-title">Contact Support</h3>
          <form className="contact-form">
            <div className="form-group">
              <label>Subject</label>
              <input type="text" className="form-control" placeholder="Brief description of your issue" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea className="form-control" rows="5" placeholder="Please describe your issue in detail"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );

  // Handle submenu items
  const renderSubmenuContent = () => {
    const [parentId, subId] = activeSection.split('-');
    
    return (
      <div className="content-submenu">
        <div className="section-header">
          <h1 className="section-title">{subId.charAt(0).toUpperCase() + subId.slice(1).replace('-', ' ')}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">{parentId.charAt(0).toUpperCase() + parentId.slice(1)}</li>
              <li className="breadcrumb-item active">{subId.charAt(0).toUpperCase() + subId.slice(1).replace('-', ' ')}</li>
            </ol>
          </nav>
        </div>
        <div className="submenu-content">
          <div className="alert alert-info">
            <i className="fas fa-info-circle me-2"></i>
            This is the detailed view for <strong>{subId.replace('-', ' ')}</strong> under <strong>{parentId}</strong> section.
          </div>
          <p>Specific content for {activeSection} would be displayed here with relevant data, forms, and interactive elements.</p>
        </div>
      </div>
    );
  };

  const getContentRenderer = () => {
    if (activeSection.includes('-')) {
      return renderSubmenuContent();
    }
    
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'projects':
        return renderProjects();
      case 'messages':
        return renderMessages();
      case 'analytics':
        return renderAnalytics();
      case 'customers':
        return renderCustomers();
      case 'settings':
        return renderSettings();
      case 'notifications':
        return renderNotifications();
      case 'help':
        return renderHelp();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="dashboard-content" id="content">
      <div className="content-wrapper">
        {getContentRenderer()}
      </div>
    </div>
  );
};

export default Content;