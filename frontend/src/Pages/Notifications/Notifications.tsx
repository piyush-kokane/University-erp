import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Notifications.css";
import Footer from "../../Components/Footer/Footer";


interface DataType {
  title: string;
  message: string;
  date: string;
  time: string;
}


const sampleNotifications = [
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


interface UDTF_Type {
  key: string;
  src: string;
}
const UserData_to_fetch = [
  // key is data stored in localStorage, src is  API endpoint
  {key: "Notifications", src: "http://localhost:5000/api/notifications"},
];


const fetchData = async (item: UDTF_Type) => {
  try {
    ///const response = await fetch(item.src);
    ///const data = await response.json();
    ///return data;
    

    // remove following code once backend is integrated
    return sampleNotifications;
  }
  catch (error) {
    console.error(`Error fetching data for ${item.key}:`, error);
    return []; // Return an empty array in case of error
  }
};


function Notifications() {
  const navigate = useNavigate();


  // initialise constants for UserDta, get data from localStorage if stored
  const [Notifications, setNotifications] = useState(
    JSON.parse(localStorage.getItem("Notifications") || "[]"));
  

  // Update UserData & localStorage if not set
  useEffect(() => {
    UserData_to_fetch.forEach((item: UDTF_Type) => {
      if (!localStorage.getItem(item.key)) {
        fetchData(item).then((data) => {
          // update localStorage
          localStorage.setItem(item.key, JSON.stringify(data));

          // determine which variable to update
          if (item.key === "Notifications") setNotifications(data);
        });
      }
    });
  }, []);



  function Notification() {
    return (
      <div className="page-base-container circularpg-page-base-container">
        <h1>Notifications</h1>
        <div className="page-container-line-2"/>

        <div className="circularpg-circular-container">
          {Notifications.map((item: DataType, index: number) => (
            <div  key={index} className={"circularpg-circular-item"} >
              <h1>{item.title}</h1>
              <p>{item.message}</p>
              <div>
                <h2>{item.date}</h2>
                <label><span className="material-icons">visibility</span><h2>view</h2></label>
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


  return (
    <>
      <div className="page-container">
        <div className="page-main-container">
          <div className="circularpg-tabs">
            <a onClick={() => navigate("/circulars")}>Circulars</a>
            <a className={`active`} onClick={() => navigate("/notifications")}>Notifications</a>
          </div>

          <Notification />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Notifications;
