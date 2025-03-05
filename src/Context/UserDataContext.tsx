import React, { createContext } from "react";



// Interface for Time Table
interface ScheduleEntry {
    subject: string;
    time: string;
}
type WeeklySchedule = {
    [day: string]: ScheduleEntry[];
};



// Interface for context type
interface UserContextType {
    Profile: string;
    Banner: string;

    FullName: string;
    FirstName:string;
    LastName:string;

    Biotag: string;
    LongBio: string;
    ShortBio: string;

    Prn: string;
    Branch: string;
    Term: string;
    
    creditsEarned: number;
    creditsRemaining: number;

    TotalAttendancePercentage: number;
    termAttendance: { subject: string; attended: number; total: number }[];
    weekAttendance: { subject: string; attended: number; total: number }[];

    circular: { title: string; message: string; date: string; time: string }[];
    notifications: { title: string; message: string; date: string; time: string }[];

    weeklySchedule: WeeklySchedule;

    UserDocuments: { Key: string; img: string; }[];

    StudentInfo: { Key: string; value: string; }[];

    StudentAddress: { Key: string; value: string; }[];

    Parent1Info: { Key: string; value: string; }[];
    Parent2Info: { Key: string; value: string; }[];
}

// Create the context
export const UserData = createContext<UserContextType | null>(null);

// Provider component
export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const user = {
        Profile: "/User_Data/Profile.jpg",
        Banner: "/User_Data/Banner.png",

        FullName: "Piyush Jayant Kokane",
        FirstName: "Piyush",
        LastName: "Kokane",
        
        Biotag: "I am proficient programmer",
        LongBio: "I am a student at MIT-WPU with a strong technical background in web development and software engineering. My expertise includes React, TypeScript, Node.js, PHP, MySQL, MongoDB, Tailwind CSS, HTML, CSS, JavaScript, WordPress, and Figma. I have experience working on projects like university ERP systems, online shopping platforms, and productivity apps, focusing on creating efficient and user-friendly applications.",
        ShortBio: "I study at MIT-WPU, and I have technical skills in React, TypeScript, Node.js, PHP, MySQL, MongoDB, Tailwind CSS, HTML, CSS, JavaScript.",

        Prn: "1132230781",
        Branch: "SY. B.Sc. CS.",
        Term: "Semester 4",

        creditsEarned: 4,
        creditsRemaining: 10,
        TotalAttendancePercentage: 85,

        termAttendance: [
            { subject: "Mathematics", attended: 85, total: 100 },
            { subject: "Physics", attended: 75, total: 100 },
            { subject: "Chemistry", attended: 90, total: 100 },
            { subject: "English", attended: 60, total: 100 },
            { subject: "Computer Science", attended: 95, total: 100 },
        ],
  
        weekAttendance: [
            { subject: "Mathematics", attended: 45, total: 100 },
            { subject: "Physics", attended: 59, total: 100 },
            { subject: "Chemistry", attended: 85, total: 100 },
            { subject: "English", attended: 65, total: 100 },
            { subject: "Computer Science", attended: 80, total: 100 },
        ],

        circular: [
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
        ],

        notifications: [
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
        ],

        weeklySchedule: {
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
        },

        UserDocuments: [
            { Key: "10th Marksheet", img: "/User_Data/10th_Marlsheet.png" },
            { Key: "12th Marksheet", img: "/User_Data/12th_Marlsheet.png" },
            { Key: "Leaving Certificate", img: "/User_Data/Leaving_Certificate.png" },
            { Key: "Signature", img: "/User_Data/Signature.png" },
        ],

        StudentInfo: [
            { Key: "Gender", value: "Male" },
            { Key: "Date Of Birth", value: "18/2/2005" },
            { Key: "Blood Group", value: "AB+" },
            { Key: "gmail", value: "google@gmail.com" },
            { Key: "Phone No.", value: "8806808503" },
            { Key: "Emergency No.", value: "8806808503" },
            { Key: "Aadhar No.", value: "8806808503" },
            { Key: "Admission Type", value: "CET" },
            { Key: "Admission Status", value: "Active" },
            { Key: "Admission Date", value: "24/3/2023" },
        ],
    
        StudentAddress: [
            { Key: "Permanent Address", value: "Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address " },
            { Key: "Current Address", value: "Address" },
            { Key: "Area", value: "Area" },
            { Key: "Land Mark", value: "Land Mark" },
            { Key: "City", value: "Pune" },
            { Key: "Pincode", value: "411038" },
            { Key: "State", value: "Maharashtra" },
            { Key: "Country", value: "India" },
        ],
    
        Parent1Info: [
            { Key: "Guardian Type", value: "Father" },
            { Key: "Fathers's gmail", value: "google@gmail.com" },
            { Key: "Father's Contact", value: "9875642587" },
            { Key: "Father's Profession", value: "Job" },
        ],
        Parent2Info: [
            { Key: "Guardian Type", value: "Mother" },
            { Key: "Mother's gmail", value: "google@gmail.com" },
            { Key: "Mother's Contact", value: "9875642587" },
            { Key: "Mother's Profession", value: "Housewife" },
        ],

    };

    return (
        <UserData.Provider value={ user }>
            {children}
        </UserData.Provider>
    );
};
