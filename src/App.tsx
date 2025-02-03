import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import BG3 from "./BG/BG-3";
import Navigation from "./Components/Navigation";
import L_Navigation from "./Components/L-Navigation";

import _Landing from "./Pages/_Landing/Landing";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Attendence from "./Pages/Attendence/Attendence";
import Calendar from "./Pages/Calendar/Calendar";
import Time_Table from "./Pages/Time_Table/Time_Table";

function Layout() {
  const location = useLocation();
  
  const isLanding = location.pathname === "/";
  const isLogin = location.pathname === "/login";

  return (
    <>
      {/* Show BG3 and Navigation only if NOT on Landing or Login page */}
      {!isLanding && !isLogin && (
        <>
          <BG3 />
          <Navigation />
        </>
      )}

      <Routes>
        {/* Landing page */}
        <Route path="/" element={
          <>
            <L_Navigation />
            <_Landing />
          </>
        } />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Pages with common BG3 & Navigation */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendence" element={<Attendence />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/timetable" element={<Time_Table />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
