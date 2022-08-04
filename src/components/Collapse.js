import {useState} from 'react'

const Collapse = ({ collapsed, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);
  
    return (
      <>
        <button
          className="collapse-button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? 'Show' : 'Hide'} description
        </button>
        <div
          className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
          aria-expanded={isCollapsed}
        >
          {children}
        </div>
      </>
    );
  };

  export default Collapse