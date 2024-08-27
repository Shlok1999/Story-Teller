import React, {useState} from 'react'
import '../../Styles/Homepage.css'
function Navigation() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleMenuClick = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <Header onMenuClick={handleMenuClick} />
            <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="content">
                {/* Main content goes here */}
                <p>Main content area. Click the menu to toggle the sidebar.</p>
            </div>
        </>
    )
}

const Header = ({isOpen, onMenuClick }) => {
    return (
        <header className="header">
            <button className="menu-button" onClick={onMenuClick}>
        {isOpen ? "✖" : "☰"}
      </button>
            <h1 className="header-title">Story Teller</h1>
        </header>
    );
};

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Navigation