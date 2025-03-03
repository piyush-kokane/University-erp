import {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Footer from "../../Components/Footer/Footer";

function DashboardPage() {
  const navigate = useNavigate();
  const isSmallScreen = window.innerWidth <= 1024;

  const term_attendance = [
    { subject: "Mathematics", attended: 85, total: 100 },
    { subject: "Physics", attended: 75, total: 100 },
    { subject: "Chemistry", attended: 90, total: 100 },
    { subject: "English", attended: 60, total: 100 },
    { subject: "Computer Science", attended: 95, total: 100 },
  ];
  
  const week_attendance = [
    { subject: "Mathematics", attended: 45, total: 100 },
    { subject: "Physics", attended: 59, total: 100 },
    { subject: "Chemistry", attended: 85, total: 100 },
    { subject: "English", attended: 65, total: 100 },
    { subject: "Computer Science", attended: 80, total: 100 },
  ];

  const creditsEarned = 4;
  const creditsRemaining = 10;
  const TotalAttendancePercentage = 85;

  const circular = [
    {
      title: "Circular/Notice",
      message: "Recruitment Forms For Dhvani, The Official Music Club of MIT World Peace University, are now available! If you have a passion for music and want to be a part of an incredible team, submit your application before the deadline. Auditions will be held next week.",
      date: "17-02-25",
      time: "09:30 PM",
    },
    {
      title: "Exam Schedule",
      message: "The end-semester exams are scheduled to begin from 10th March. Students are advised to check their respective timetables on the university portal and ensure they have completed all necessary pre-exam formalities, including hall ticket downloads and ID verification.",
      date: "02-03-25",
      time: "09:30 PM",
    },
    {
      title: "Holiday Notice",
      message: "The university will remain closed on 26th January in observance of Republic Day. A flag-hoisting ceremony will be held at the main auditorium at 8:30 AM, followed by a cultural program. All students and faculty are encouraged to attend and participate in the celebrations.",
      date: "24-01-25",
      time: "09:30 PM",
    },
    {
      title: "Event Update",
      message: "The highly anticipated MIT-WPU Hackathon is back! Registrations are now open for all students. Gather your team, prepare your ideas, and submit your details before the deadline on 5th March. Winners will receive exciting prizes and internship opportunities!",
      date: "01-03-25",
      time: "09:30 PM",
    },
    {
      title: "Workshop Announcement",
      message: "The Department of Computer Science is organizing an exclusive workshop on Artificial Intelligence & Machine Learning. The workshop will be conducted by industry experts and will cover real-world applications, case studies, and hands-on coding sessions. Seats are limited, so register soon!",
      date: "05-03-25",
      time: "11:00 AM",
    },
    {
      title: "Sports Fest",
      message: "Get ready for the annual Inter-College Sports Fest! This year, we have football, basketball, cricket, and badminton tournaments lined up. The event will take place from 15th to 20th March. All interested participants must register by 7th March. Let's bring out the sports spirit!",
      date: "03-03-25",
      time: "06:00 PM",
    },
    {
      title: "Library Notice",
      message: "A reminder to all students that the deadline for returning borrowed books is 15th March. Any books returned after this date will incur a fine of ₹5 per day. If you need an extension, please visit the library help desk before the due date to request it.",
      date: "10-03-25",
      time: "04:00 PM",
    },
    {
      title: "Cultural Fest",
      message: "MIT-WPU’s biggest cultural extravaganza is here! Auditions for dance, singing, drama, and fashion shows will commence on 5th March. If you want to showcase your talent on the grand stage, sign up now! The final performances will be held on 20th March.",
      date: "04-03-25",
      time: "02:00 PM",
    },
    {
      title: "Internship Opportunity",
      message: "Applications for Google’s Summer Internship Program are now open! This is a golden opportunity for students looking to gain hands-on experience at one of the world's leading tech giants. The last date to apply is 20th March. Apply through the official career portal.",
      date: "06-03-25",
      time: "08:00 AM",
    },
    {
      title: "Faculty Meeting",
      message: "A faculty meeting has been scheduled for 8th March in the Seminar Hall at 10:30 AM. All department heads and faculty members are requested to be present. Important academic planning, upcoming events, and administrative decisions will be discussed in detail.",
      date: "07-03-25",
      time: "10:30 AM",
    },
    {
      title: "Blood Donation Camp",
      message: "A blood donation camp is being organized on 9th March in the Main Auditorium. All students, faculty, and staff members who are willing to donate are encouraged to participate. Your contribution can save lives! Certificates will be provided to all donors.",
      date: "08-03-25",
      time: "12:00 PM",
    },
    {
      title: "Placement Drive",
      message: "Top recruiters including TCS, Infosys, and Wipro will be visiting our campus for placement drives on 15th March. Final-year students must ensure they have updated resumes and completed all placement eligibility requirements. Don’t miss this opportunity!",
      date: "09-03-25",
      time: "03:00 PM",
    },
  ];
  
  // Define types for the schedule entries and weekly schedule
  interface ScheduleEntry {
    subject: string;
    time: string;
  }
  type WeeklySchedule = {
    [day: string]: ScheduleEntry[];
  };
  const weeklySchedule: WeeklySchedule = {
    Monday: [
      { subject: "Mathematics", time: "9:00 AM - 10:00 AM" },
      { subject: "Physics", time: "10:30 AM - 11:30 AM" },
    ],
    Tuesday: [
      { subject: "Chemistry", time: "9:00 AM - 10:00 AM" },
      { subject: "English", time: "10:30 AM - 11:30 AM" },
    ],
    Wednesday: [
      { subject: "Computer Science", time: "9:00 AM - 10:00 AM" },
      { subject: "History", time: "10:30 AM - 11:30 AM" },
    ],
    Thursday: [
      { subject: "Biology", time: "9:00 AM - 10:00 AM" },
      { subject: "Geography", time: "10:30 AM - 11:30 AM" },
    ],
    Friday: [
      { subject: "Economics", time: "9:00 AM - 10:00 AM" },
      { subject: "Physical Education", time: "10:30 AM - 11:30 AM" },
    ],
  };

  function Attendance() {
    const [attendanceType, setAttendanceType] = useState("This Term Attendance");
    const [attendance, setAttendance] = useState(term_attendance);
  
    function handleSwap() {
      if (attendanceType === "This Term Attendance") {
        setAttendanceType("This Week Attendance");
        setAttendance(week_attendance);
      } else {
        setAttendanceType("This Term Attendance");
        setAttendance(term_attendance);
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

        <div className="circular-container">
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

        <div className="timetable-container">
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
