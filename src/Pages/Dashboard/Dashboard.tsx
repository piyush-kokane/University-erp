import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserData  } from "../../Context/UserDataContext";
import "./Dashboard.css";
import Footer from "../../Components/Footer/Footer";

function DashboardPage() {
  const navigate = useNavigate();


  // Check for windows resize and set isSmallScreen accordingly, no practical use, for better performance remove useEffect
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);
  useEffect(() => {
    function handleResize() {
        setIsSmallScreen(window.innerWidth <= 1024);
    }

    window.addEventListener("resize", handleResize); // Listen for resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);


  const user = useContext(UserData);

  const creditsEarned = user?.creditsEarned;
  const creditsRemaining = user?.creditsRemaining;

  const TotalAttendancePercentage = user?.TotalAttendancePercentage;
  const termAttendance = user?.termAttendance || [];
  const weekAttendance = user?.weekAttendance || [];
  
  const circular = user?.circular || [];
  
  const weeklySchedule = user?.weeklySchedule || {};

  function Attendance() {
    const [attendanceType, setAttendanceType] = useState("This Term Attendance");
    const [attendance, setAttendance] = useState(termAttendance);
  
    function handleSwap() {
      if (attendanceType === "This Term Attendance") {
        setAttendanceType("This Week Attendance");
        setAttendance(weekAttendance);
      } else {
        setAttendanceType("This Term Attendance");
        setAttendance(termAttendance);
      }
    }

    return (
      <div className="page-base-container">
        <h1 className="attendance-title" onClick={handleSwap}>
          <span className="material-icons">cached</span>
          {attendanceType}
        </h1>
        <div className="page-container-line-2"/>

        <div className="attendance-container">
          
          {/* maped for subject names, seperaet div to make alignment perfect */}
          <div className="attendance-container-left">
            {attendance.map((item) => (
              <h1 className="attendance-subject-name">{item.subject}</h1>
            ))}
          </div>

          {/* maped for subject progress bar */}
          <div className="attendance-container-middle">
            {attendance.map((item) => {
              const attendancePercentage = (item.attended / item.total) * 100;

              return (
                <div className="attendance-progress-bar">
                  <div 
                    className={`attendance-progress-fill ${attendancePercentage >= 80 ? "high" : attendancePercentage >= 60 ? "mid" : "low"}`}
                    style={{ width: `${attendancePercentage}%` }}
                  />
                </div>
              );
            })}
          </div>
          
          {/* maped for subject progress */}
          <div className="attendance-container-right">
            {attendance.map((item) => (
              <h1 className="attendance-subject-attendance">{item.attended}/{item.total}</h1>
            ))}
          </div>

        </div>

        <div className="page-container-line-2"/>
        <a className="dashboard-footer-link" onClick={() => navigate("/attendance")}>View full Attendance ➜</a>
      </div>
    );
  }

  function Summary(){
    return(
      <div className="page-base-container summary-container">

        {/* Credits Earned */}
        <div className="summary-container-1">
          <span className="material-icons">paid</span>
          <h1>{creditsEarned}</h1>
          <h2>Credits Earned</h2>
        </div>

        {/* Credits Remaining */}
        <div className="summary-container-1">
          <span className="material-icons">paid</span>
          <h1>{creditsRemaining}</h1>
          <h2>Credits Remaining</h2>
        </div>

        {/* Total Attendance */}
        <div className="summary-container-1">
          <span className="material-icons">check_circle</span>
          <h1>{TotalAttendancePercentage}%</h1>
          <h2>Total Attendance</h2>
        </div>

      </div>
    );
  }

  function Circular() {
    return (
      <div className="page-base-container">
        <h1 className="attendance-title">Circular</h1>
        <div className="page-container-line-2"/>

        <div className="circular-container scrollbar">
          {circular.map((item) => (
            <div  className={"circular-item"} >
              {/*<h1>{item.title}</h1>*/} {/* Not showing Title */}
              <p>{item.message}</p>
              <h2>{item.date}</h2>
              <h3>{item.time}</h3>
              <div />
            </div>
          ))}
        </div>

        <div className="page-container-line-2"/>
        <a className="dashboard-footer-link" onClick={() => navigate("/circular")}>All Circulars ➜</a>
      </div>
    );
  }

  function Timetable() {
    return (
      <div className="page-base-container">
        <h1 className="attendance-title">Time Table</h1>
        <div className="page-container-line-2"/>

        <div className="timetable-container scrollbar">
          <table className="timetable-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Subject</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(weeklySchedule).map((day) => {
                const classes = weeklySchedule[day];
                return classes.map((cls, index) => (
                  <tr key={day + index}>
                    {index === 0 && <td rowSpan={classes.length}>{day}</td>}
                    <td>{cls.subject}</td>
                    <td>{cls.time}</td>
                  </tr>
                ));
              })}
            </tbody>
          </table>
        </div>

        <div className="page-container-line-2"/>
        <a className="dashboard-footer-link" onClick={() => navigate("/timetable")}>Full Time-Table ➜</a>
      </div>
    );
  }



  return (
    <>
      <div className="page-container">
        <div className="page-main-container">
          <div className="page-parent-base-container">
            { isSmallScreen
            ?
              // if small screen following layout (1-column layout)
              <>
                <Summary />
                <Attendance />
                <Timetable />
                <Circular />
              </>
            : 
              // if large screen following layout (2-column layout)
              <>
                <Attendance />
                <Circular />
                <Summary />
                <Timetable />
              </>
            }
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default DashboardPage;
