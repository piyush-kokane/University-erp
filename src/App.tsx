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


  // all available routes 
  const routes = {
    landing: "/",

    login: "/login",

    policy: "/privacy-policy",
    conditions: "/terms-&-conditions",
    
    dashboard: "/dashboard",
    profile: "/profile",
    attendance: "/attendance",
    calendar: "/calendar",
    timetable: "/timetable",
  };
  
  
  // Convert to a Set for quick lookup
  const knownRoutes = new Set(Object.values(routes));


  // useState to check on which type of page user is
  const [onUnknown, setOnUnknown] = useState(false);
  const [onLanding, setOnLanding] = useState(false);
  const [onLogin, setOnLogin] = useState(false);
  const [onPolicy, setOnPolicy] = useState(false);
  

  // Update states when route changes
  useEffect(() => {
    setOnUnknown(!knownRoutes.has(location.pathname));   // if user is on unknown page set onUnknown to true
    setOnLanding(location.pathname === routes.landing); // check if user is on landg page if yes set onLanding to true
    setOnLogin(location.pathname === routes.login);    // check if user is on landg page if yes set onLogin to true
    setOnPolicy(                                      // check if user is on privacy-policy or terms-&-conditions page if yes set onPolicy to true
      location.pathname === routes.policy || 
      location.pathname === routes.conditions
    );
  }, [location.pathname]);


  // Check if user is loggedin
  function CheckLogin({ element }: { element: React.ReactElement }) {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true"; // Read from localStorage
  
    if (!isLoggedIn) {
      //AlertSystem?.showAlert("Please login first", "warning", 5);
      console.log("Please login first")
    }

    // If not loggedin redirect to login page and show alert
    if (!isLoggedIn) {
      return <Navigate to={routes.login} state={{ from: location.pathname }} />;
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
        <Route path={routes.landing} element={<_Landing />} />
        
        {/* Login page */}
        <Route path={routes.login} element={<Login />} />
                
        {/* privacy-policy & terms-&-conditions */}
        <Route path={routes.policy} element={<Policy />} />
        <Route path={routes.conditions} element={<Policy />} />

        {/* Protected pages */}
        <Route path={routes.dashboard} element={<CheckLogin element={<Dashboard />} />} />
        <Route path={routes.profile} element={<CheckLogin element={<Profile />} />} />
        <Route path={routes.attendance} element={<CheckLogin element={<Attendence />} />} />
        <Route path={routes.calendar} element={<CheckLogin element={<Calendar />} />} />
        <Route path={routes.timetable} element={<CheckLogin element={<Time_Table />} />} />

        {/* Unknown  Page */}
        <Route path="*" element={<Page_Not_Found />} />
      </Routes>
    </>
  );
}



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
