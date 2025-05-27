import navigationItems from '../../data/navigation.js';
import '../../styles/Sidebar.css'; 

const Sidebar = () => (
  <aside className="sidebar">
    {navigationItems.map((section, sectionIndex) => (
      <div 
        key={sectionIndex} 
        className={`sidebar-section ${section.section === 'Settings' ? 'settings-section' : ''}`}
      >
        
        {section.section !== 'Settings' && (
          <h3 className="sidebar-title">{section.section}</h3>
        )}
        <nav className="sidebar-nav">
          {section.items.map((item, itemIndex) => (
            <div 
              key={itemIndex} 
              className={`nav-item ${item.active ? 'active' : ''}`}
            >
              <item.icon size={20} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    ))}
  </aside>
);

export default Sidebar;