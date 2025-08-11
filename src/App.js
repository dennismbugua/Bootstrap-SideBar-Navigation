import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="main-container d-flex">
      <Sidebar 
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isOpen={sidebarOpen}
        onClose={closeSidebar}
      />
      <div className="content">
        <Navbar onToggleSidebar={toggleSidebar} />
        <Content activeSection={activeSection} />
      </div>
    </div>
  );
}

export default App;
