import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navigation.css";
import Settings from "./Settings";
import Notifications from "./Notifications";
import Profile from "./Profile";
import { rectBounce } from "tsparticles-engine";



function Navigation() { // This ensures activemenuItem is "Dashboard" if not provided.
  const menuItems = [
    { name: "Dashboard", icon: "dashboard", path: "/dashboard" },
    { name: "Profile", icon: "person", path: "/profile" },
    { name: "Attendance", icon: "check_circle", path: "/attendance" },
    { name: "Calendar", icon: "event", path: "/calendar" },
    { name: "Time Table", icon: "schedule", path: "/timetable" },
    { name: "Course", icon: "menu_book", path: "/course" },
    { name: "Result", icon: "bar_chart", path: "/result" },
    { name: "Circulars", icon: "campaign", path: "/circulars" },
  ];


  const [profileOpen, setProfileOpen] = useState(false);
  const toggleProfile = () => setProfileOpen(true);

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const toggleNotifications = () => setNotificationsOpen(true);

  const [settingsOpen, setSettingsOpen] = useState(false);
  const toggleSettings = () => setSettingsOpen(true);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const [searchValue, setSearchValue] = useState("");
  const clearSearch = () => setSearchValue("");

  const [activeMenuItem, setActiveMenuItem] = useState("Dashboard"); // Default active tab = dashboard

  const navigate = useNavigate();
  const location = useLocation();


  // if page url changes due to redirect, set actve menue item to accordingly
  useEffect(() => {
    if(location.pathname === "/profile")
      setActiveMenuItem("Profile");
  }, [location.pathname]); // Runs only when location.pathname changes


  function handleLogout(){
    console.log("Logging out...");
    localStorage.setItem("loggedIn", "false"); // Set loggedIn to false
    navigate("/login", { state: { from: location.pathname } }) // navigate to login page & set state.from to url of current page
  }

  
  function handleMenuClick(itemName: string, itemPath: string){
    setActiveMenuItem(itemName); // Update active tab
    navigate(itemPath); // Navigate to the page
  };


  return (
    <>
      {/* Overlay when sidebar is open */}
      {sidebarOpen && <div className="Navbar-overlay" onClick={toggleSidebar}></div>}

      {/* Profile panel */}
      {profileOpen && <Profile Close={() => setProfileOpen(false)}/>}

      {/* Settings panel */}
      {settingsOpen && <Settings Close={() => setSettingsOpen(false)}/>}

      {/* Notification panel */}
      {notificationsOpen && <Notifications Close={() => setNotificationsOpen(false)}/>}

      {/* Navbar */}
      <div className="Nav-Bar">
        <div className="navbar-container">
          {/* Left column (30%) */}
          <div className="navbar-left">
            <button className="menu-btn" onClick={toggleSidebar}>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </button>
            <h1 className="navbar-title">{activeMenuItem}</h1>
          </div>

          {/* Middle column (40%) */}
          <div className="navbar-middle">
            <form className="search-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />

              {searchValue 
                ? <span className="material-icons search-clear-btn" onClick={clearSearch}>close</span> // if searchValue = true then show clear button
                : <span className="material-icons search-icon">search</span> // else show search icon
              }
            </form>
          </div>

          {/* Right column (30%) */}
          <div className="navbar-right">
            <span className="navbar-link" onClick={() =>navigate("/e-library")}>E-Library</span>
            <span className="material-icons navbar-btn" onClick={toggleNotifications}>notifications</span>
            <span className="material-icons navbar-btn" onClick={toggleSettings}>settings</span>
            <span className="material-icons profile-btn" onClick={toggleProfile}>person</span>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div 
        className={`sidebar ${sidebarOpen ? "open" : ""}`}  /* Change class name according to sidebarOpen */
        onMouseEnter={() => setSidebarOpen(true)} 
        onMouseLeave={() => setSidebarOpen(false)}
      >
        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              className={`sidebar-item ${activeMenuItem === item.name ? "active" : ""}`}
              onClick={() => handleMenuClick(item.name, item.path)}
            >
              <span className="material-icons sidebar-icon">{item.icon}</span>
              <span className={`sidebar-text ${sidebarOpen ? "visible" : ""}`}>{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Logout Button at Bottom */}
        <a className="sidebar-item logout-btn" onClick={handleLogout}>
            <span className="material-icons sidebar-icon">logout</span>
            <span className={`sidebar-text ${sidebarOpen ? "visible" : ""}`}>Logout</span>
        </a>
      </div>
    </>
  );
}

export default Navigation;
