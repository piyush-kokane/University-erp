import React, { useState } from "react";
import { Navbar, Form, FormControl, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navigation.css";
import Settings from "./Settings";

function Navigation() {
  const menuItems = [
    { name: "Dashboard", icon: "dashboard", path: "/dashboard" },
    { name: "Profile", icon: "person", path: "/profile" },
    { name: "Attendance", icon: "check_circle", path: "/attendance" },
    { name: "Calendar", icon: "event", path: "/calendar" },
    { name: "Time Table", icon: "schedule", path: "/timetable" },
    { name: "Course", icon: "menu_book", path: "/course" },
    { name: "Result", icon: "bar_chart", path: "/result" },
    { name: "Circulars", icon: "campaign", path: "/circulars" },
    { name: "Settings", icon: "settings", path: "/settings" },
  ];


  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const [searchValue, setSearchValue] = useState("");
  const clearSearch = () => setSearchValue("");

  const [activeMenuItem, setActiveMenuItem] = useState("Dashboard"); // Default active tab

  const handleLoginClick = () => navigate("/login");

  const navigate = useNavigate();
  const location = useLocation();

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
      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      {/* Navbar */}
      <Navbar variant="dark" expand="lg" className="Nav-Bar px-3">
        <div className="navbar-container">
          {/* Left column (30%) */}
          <div className="navbar-left">
            <button className="menu-btn me-3" onClick={toggleSidebar}>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </button>
            <Navbar.Brand>{activeMenuItem}</Navbar.Brand>
          </div>

          {/* Middle column (40%) */}
          <div className="navbar-middle">
            <Form className="mx-auto search-container w-100">
              <FormControl
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
            </Form>
          </div>

          {/* Right column (30%) */}
          <div className="navbar-right">
            <span className="login-link" onClick={handleLoginClick}>E-Library</span>
            <button className="notification-btn" onClick={handleLoginClick}>
              <span className="material-icons">notifications</span>
            </button>
            <button className="profile-btn" onClick={handleLoginClick}>
              <span className="material-icons">person</span>
            </button>
          </div>
        </div>
      </Navbar>

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
        <div className="logout-container">
          <button className="logout-btn" onClick={handleLogout}>
            <span className="material-icons sidebar-icon">logout</span>
            <span className={`sidebar-text ${sidebarOpen ? "visible" : ""}`}>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navigation;
