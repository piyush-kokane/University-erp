import { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserData  } from "../../Context/UserDataContext";
import Settings from "../Settings/Settings";
import Notifications from "../Notifications/Notifications";
import Profile from "../Profile/Profile";
import "./Navigation.css";



function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();


  // Check for windows resize and set isSmallScreen accordingly, no practical use, for better performance remove useEffect
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 600);
      console.log(isSmallScreen)
    }

    window.addEventListener("resize", handleResize); // Listen for resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);
  

  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  const userContext = useContext(UserData);
  if (!userContext) throw new Error("useContext(UserData) must be used within a UserContextProvider");
  const { user, updateUserData } = userContext;
  
  const Profilepic = user?.Profile;

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


  const [Searchbar, setSearchbar] = useState(false); // if isSmallScreen hide searchbar by defauly
  const enableSearchbar  = () => setSearchbar(true);
  const disableSearchbar  = () => setSearchbar(false);

  const [profileOpen, setProfileOpen] = useState(false);
  const toggleProfile  = () => setProfileOpen(true);

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const toggleNotifications = () => setNotificationsOpen(true);

  const [settingsOpen, setSettingsOpen] = useState(false);
  const toggleSettings = () => setSettingsOpen(true);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const [searchValue, setSearchValue] = useState("");
  const clearSearch = () => setSearchValue("");

  const [activeMenuItem, setActiveMenuItem] = useState("");


  // if page url changes due to redirect, set actve menue item accordingly to url
  useEffect(() => {
    menuItems.forEach(item => {
      if(location.pathname === item.path)
        setActiveMenuItem(item.name);
    });
  }, [location.pathname]); // Runs only when location.pathname changes


  function handleLogout(){
    console.log("Logging out...");

    // Clear localStorage except "theme"
    const theme = localStorage.getItem("theme");
    localStorage.clear();
    if (theme) localStorage.setItem("theme", theme);

    navigate("/login", { state: { from: location.pathname } }) // navigate to login page & set state.from to url of current page
  }



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
        {(!Searchbar || !isSmallScreen) &&
          <>
            {/* Left container */}
            <div className="navbar-left-container">
              <button className="menu-btn" onClick={toggleSidebar}>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
              </button>
              <h1 className="navbar-title">{activeMenuItem}</h1>
            </div>

            {/* Right container */}
            <div className="navbar-right-container">
              <span className="navbar-link" onClick={() =>navigate("/e-library")}>E-Library</span>
              {isSmallScreen && <span className="material-icons navbar-search-btn" onClick={enableSearchbar}>search</span>}
              <span className="material-icons navbar-btn" onClick={toggleNotifications}>notifications</span>
              <span className="material-icons navbar-btn" onClick={toggleSettings}>settings</span>
              { isLoggedIn 
              ? <img className="navbar-profile-btn" src={Profilepic} onClick={toggleProfile}/>
              : <span className="material-icons navbar-login-btn" onClick={() =>navigate("/login", { state: { from: location.pathname } })}>person</span>
              }
            </div>
          </>
        }

        {/* Search container */}
        {(Searchbar || !isSmallScreen) &&
          <form className="navbar-search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            {searchValue 
              ? <span className="material-icons search-clear-btn" onClick={() => {clearSearch(), disableSearchbar()}}>close</span> // if searchValue = true then show clear button
              : <span className="material-icons search-icon">search</span> // else show search icon
            }
          </form>
        }
      </div>

      {/* Sidebar */}
      <div 
        className={`sidebar scrollbar ${sidebarOpen ? "open" : ""}`}  /* Change class name according to sidebarOpen */
        onMouseEnter={() => setSidebarOpen(true)} 
        onMouseLeave={() => setSidebarOpen(false)}
      >
        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              className={`sidebar-item ${activeMenuItem === item.name ? "active" : ""}`}
              onClick={() => navigate(item.path)}
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
