import { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation  } from "react-router-dom";
import { AlertSystemContext } from "./Components/Alert/AlertSystem";
import "./App.css";

import BG from "./BG/BG";
import Navigation from "./Components/Navigation/Navigation";
import L_Navigation from "./Components/L_Navigation";

import Page_Not_Found from "./Pages/Page_Not_Found/Page_Not_Found";
import _Landing from "./Pages/_Landing/Landing";
import Login from "./Pages/Login/Login";
import Policy from "./Pages/Policy_&_Conditions/Policy_&_Conditions"
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import Attendence from "./Pages/Attendence/Attendence";
import Calendar from "./Pages/Calendar/Calendar";
import Time_Table from "./Pages/Time_Table/Time_Table";





function Layout() {
  const AlertSystem = useContext(AlertSystemContext);

  const location = useLocation();
  const onLanding = location.pathname == "/"; // check if user is on landg page if yes set onLanding to true
  const onLogin = location.pathname == "/login"; // check if user is on landg page if yes set onLogin to true
  const onPolicy = location.pathname == "/privacy-policy" || // check if user is on privacy-policy or terms-&-conditions page if yes set onPolicy to true
                   location.pathname == "/terms-&-conditions";

  const [onUnknown, setonUnknown] = useState(false); // if user is on unknown page set onUnknown to true

  // Check if user is loggedin
  function CheckLogin({ element }: { element: React.ReactElement }) {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true"; // Read from localStorage
  
    if (!isLoggedIn) {
      AlertSystem?.showAlert("Please login first", "warning", 5);
    }

    // If not loggedin redirect to login page and show alert
    if (!isLoggedIn) {
      return <Navigate to="/login" state={{ from: location.pathname }} />;
      // navigate to login & set state.from to the url of page user is trying to access 
      // this state.from variable is used to set fallback after login
      // for eg if user goes to login page from landing page, after login he will come back to landing page
      // similarly if user goes to or is redirected to login page from any protected page after login he will go to the same page he came from
    }
    // else return element
    return element;
  }

  
  return (
    <>
      {/* Show Navigation & BG for Landing Page only */}
      {onLanding && <><L_Navigation /></>}

      {/* Show Navigation & BG for Protected Pages only */}
      {(!onLanding && !onLogin && !onPolicy && !onUnknown) && <><Navigation /><BG /></>}

      <Routes>
        {/* Landing page */}
        <Route path="/" element={<_Landing />} />
        
        {/* Login page */}
        <Route path="/login" element={<Login />} />
                
        {/* privacy-policy & terms-&-conditions */}
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/terms-&-conditions" element={<Policy />} />

        {/* Protected pages */}
        <Route path="/dashboard" element={<CheckLogin element={<Dashboard />} />} />
        <Route path="/profile" element={<CheckLogin element={<Profile />} />} />
        <Route path="/attendance" element={<CheckLogin element={<Attendence />} />} />
        <Route path="/calendar" element={<CheckLogin element={<Calendar />} />} />
        <Route path="/timetable" element={<CheckLogin element={<Time_Table />} />} />

        {/* Unknown  Page */}
        <Route path="*" element={<Page_Not_Found setonUnknown={setonUnknown}/>} />
      </Routes>
    </>
  );
}

// Apply saved theme on page load
window.onload = function() {
  let savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
};


/*/ Force refress tab on back pressed
window.addEventListener("popstate", () => {
  window.location.reload();
});
*/

function App() { 
  return (
    <>
      <Router>
        <Layout />
      </Router>
    </>
  );
}

export default App;
