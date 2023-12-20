import React from 'react';
import './Home.css';
const PageWithSidebar = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ width: '20%', background: '#f0f0f0', padding: '20px' }}>
        <h2>Sidebar</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Option 1</li>
          <li>Option 2</li>
        </ul>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Main Content</h2>
        <p>This is the main content area of the page.</p>
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default PageWithSidebar;
