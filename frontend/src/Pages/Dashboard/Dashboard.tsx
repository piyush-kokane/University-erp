import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Footer from "../../Components/Footer/Footer";



// type def for UserData
interface AttendanceType {
  subject: string;
  attended: number;
  total: number;
}

interface CircularsType {
  title: string;
  message: string;
  date: string;
  time: string;
}

interface ScheduleEntry {
  subject: string;
  time: string;
};
type WeeklySchedule = {
  [day: string]: ScheduleEntry[];
};


const sampleCreditsEarned = 4;
const sampleCreditsRemaining = 10;
const sampleTotalAttendancePercentage = 85;

const sampleTermAttendance = [
  { subject: "Mathematics", attended: 85, total: 100 },
  { subject: "Physics", attended: 75, total: 100 },
  { subject: "Chemistry", attended: 90, total: 100 },
  { subject: "English", attended: 60, total: 100 },
  { subject: "Computer Science", attended: 95, total: 100 },
];
const sampleWeekAttendance = [
  { subject: "Mathematics", attended: 45, total: 100 },
  { subject: "Physics", attended: 59, total: 100 },
  { subject: "Chemistry", attended: 85, total: 100 },
  { subject: "English", attended: 65, total: 100 },
  { subject: "Computer Science", attended: 80, total: 100 },
];

const sampleCirculars = [
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

const sampleWeeklySchedule: WeeklySchedule = {
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


interface UDTF_Type {
  key: string;
  src: string;
}
const UserData_to_fetch = [
  // key is data stored in localStorage, src is  API endpoint
  {key: "CreditsEarned", src: "http://localhost:5000/api/termAttendance"},
  {key: "CreditsRemaining", src: "http://localhost:5000/api/termAttendance"},
  {key: "TotalAttendancePercentage", src: "http://localhost:5000/api/termAttendance"},
  {key: "TermAttendance", src: "http://localhost:5000/api/termAttendance"},
  {key: "WeekAttendance", src: "http://localhost:5000/api/weekattendance"},
  {key: "Circulars", src: "http://localhost:5000/api/circulars"},
  {key: "WeeklySchedule", src: "http://localhost:5000/api/weeklyschedule"},
];


const fetchData = async (item: UDTF_Type) => {
  try {
    ///const response = await fetch(item.src);
    ///const data = await response.json();
    ///return data;


    // remove following code once backend is integrated
    if (item.key === "CreditsEarned")  return sampleCreditsEarned;
    if (item.key === "CreditsRemaining")  return sampleCreditsRemaining;
    if (item.key === "TotalAttendancePercentage")  return sampleTotalAttendancePercentage;
    if (item.key === "TermAttendance")  return sampleTermAttendance;
    if (item.key === "WeekAttendance")  return sampleWeekAttendance;   
    if (item.key === "Circulars")  return sampleCirculars;   
    if (item.key === "WeeklySchedule")  return sampleWeeklySchedule;   
  }
  catch (error) {
    console.error(`Error fetching data for ${item.key}:`, error);
    return []; // Return an empty array in case of error
  }
};


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


  // initialise constants for UserDta, get data from localStorage if stored
  const [CreditsEarned, setCreditsEarned] = useState(
    Number(localStorage.getItem("CreditsEarned") || 0));

  const [CreditsRemaining, setCreditsRemaining] = useState(
    Number(localStorage.getItem("CreditsRemaining") || 0));

  const [TotalAttendancePercentage, setTotalAttendancePercentage] = useState(
    Number(localStorage.getItem("TotalAttendancePercentage") || 0));

  const [TermAttendance, setTermAttendance] = useState(
    JSON.parse(localStorage.getItem("TermAttendance") || "[]"));
  
  const [WeekAttendance, setWeekAttendance] = useState(
    JSON.parse(localStorage.getItem("WeekAttendance") || "[]"));

  const [Circulars, setCirculars] = useState(
    JSON.parse(localStorage.getItem("Circulars") || "[]"));

  const [WeeklySchedule, setWeeklySchedule] = useState(
    JSON.parse(localStorage.getItem("WeeklySchedule") || "[]"));


  // Update UserData & localStorage if not set
  useEffect(() => {
    UserData_to_fetch.forEach((item: UDTF_Type) => {
      if (!localStorage.getItem(item.key)) {
        fetchData(item).then((data) => {
          // update localStorage
          localStorage.setItem(item.key, JSON.stringify(data));

          // determine which variable to update
          if (item.key === "CreditsEarned") setCreditsEarned(Number(data));
          if (item.key === "CreditsRemaining") setCreditsRemaining(Number(data));
          if (item.key === "TotalAttendancePercentage") setTotalAttendancePercentage(Number(data));
          if (item.key === "TermAttendance") setTermAttendance(data);
          if (item.key === "WeekAttendance") setWeekAttendance(data);
          if (item.key === "Circulars") setCirculars(data);
          if (item.key === "WeeklySchedule") setWeeklySchedule(data);
        });
      }
    });
  }, []);


  function Attendance() {
    const [attendanceType, setAttendanceType] = useState("This Term Attendance");
    const [attendance, setAttendance] = useState(TermAttendance);
  
    function handleSwap() {
      if (attendanceType === "This Term Attendance") {
        setAttendanceType("This Week Attendance");
        setAttendance(WeekAttendance);
      } else {
        setAttendanceType("This Term Attendance");
        setAttendance(TermAttendance);
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
            {attendance.map((item: AttendanceType) => (
              <h2 key={item.subject} className="attendance-subject-name">{item.subject}</h2>
            ))}
          </div>

          {/* maped for subject progress bar */}
          <div className="attendance-container-middle">
            {attendance.map((item: AttendanceType) => {
              const attendancePercentage = (item.attended / item.total) * 100;

              return (
                <div key={item.subject} className="attendance-progress-bar">
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
            {attendance.map((item: AttendanceType) => (
              <h2 key={item.subject} className="attendance-subject-attendance">{item.attended}/{item.total}</h2>
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
          <h1>{CreditsEarned}</h1>
          <h2>Credits Earned</h2>
        </div>

        {/* Credits Remaining */}
        <div className="summary-container-1">
          <span className="material-icons">paid</span>
          <h1>{CreditsRemaining}</h1>
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
        <h1>Circulars</h1>
        <div className="page-container-line-2"/>

        <div className="circular-container scrollbar">
          {Circulars.map((item: CircularsType, index: number) => (
            <div  key={index} className={"circular-item"} >
              {/*<h1>{item.title}</h1>*/} {/* Not showing Title */}
              <p>{item.message}</p>
              <div>
                <h2>{item.date}</h2>
                <h2>{item.time}</h2>
              </div>
              <div />
            </div>
          ))}
        </div>

        <div className="page-container-line-2"/>
        <a className="dashboard-footer-link" onClick={() => navigate("/circulars")}>All Circulars ➜</a>
      </div>
    );
  }

  function Timetable() {
    return (
      <div className="page-base-container">
        <h1>Time Table</h1>
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
              {Object.keys(WeeklySchedule).map((day) => {
                const classes = WeeklySchedule[day];
                return classes.map((cls: ScheduleEntry, index: number) => (
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
