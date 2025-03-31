import React, { useState } from "react";
import "./Time_Table.css";



interface ClassEntry {
    subject: string;
    time: string;
}
  
interface DailySchedule {
    [day: string]: ClassEntry[];
}
  
const dailyScheduleData: DailySchedule = {
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


interface ScheduleEntry {
    subject: string;
    time: string;
}
  
interface WeeklySchedule {
    [day: string]: ScheduleEntry[];
}
  
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


interface ProfessorEntry {
    name: string;
    subject: string;
    contact: string;
}
  
const professorData: ProfessorEntry[] = [
    { name: "Dr. Sharma", subject: "Mathematics", contact: "sharma@example.com" },
    { name: "Prof. Mehta", subject: "Physics", contact: "mehta@example.com" },
    { name: "Dr. Rao", subject: "Computer Science", contact: "rao@example.com" },
    { name: "Prof. Kulkarni", subject: "English", contact: "kulkarni@example.com" },
    { name: "Dr. Patil", subject: "Biology", contact: "patil@example.com" },
];

interface CourseEntry {
    courseName: string;
    courseCode: string;
    courseCredit: number;
    courseType: string;
}
  
const courseData: CourseEntry[] = [
    { courseName: "Mathematics", courseCode: "MTH101", courseCredit: 4, courseType: "Theory" },
    { courseName: "Physics", courseCode: "PHY102", courseCredit: 4, courseType: "Theory" },
    { courseName: "Computer Science", courseCode: "CS103", courseCredit: 3, courseType: "Theory" },
    { courseName: "Chemistry Lab", courseCode: "CHE104", courseCredit: 2, courseType: "Practical" },
    { courseName: "English", courseCode: "ENG105", courseCredit: 3, courseType: "Theory" },
];





function Time_Table() {
    function DailyTimeTable(){ 
        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        const currentDay = weekDays[today.getDay()];
        const todaySchedule = dailyScheduleData[currentDay] || [];
    
        return (
            <div>
                <h1>Today's Time Table - {currentDay}</h1>
        
                {todaySchedule.length > 0 ? (
                <table className="timetable-table">
                    <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {todaySchedule.map((cls: ClassEntry, index: number) => (
                        <tr key={index}>
                        <td>{cls.subject}</td>
                        <td>{cls.time}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                ) : (
                <p>No classes scheduled for today.</p>
                )}
            </div>
        );
    }

    function WeeklyTimeTable() {
        return (
          <div>
            <h1>Weekly Time Table</h1>
            <table className="timetable-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Subject</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(sampleWeeklySchedule).map((day) => {
                  const classes = sampleWeeklySchedule[day];
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
        );
    }

    function Professor() {
        return (
            <div className="page-base-container faculty timetablepg-table-2">
                <h1>Professor Details</h1>
    
                <div>
                    <table className="timetable-table">
                    <thead>
                        <tr>
                        <th>Professor Name</th>
                        <th>Subject</th>
                        <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {professorData.map((prof, index) => (
                        <tr key={index}>
                            <td>{prof.name}</td>
                            <td>{prof.subject}</td>
                            <td>{prof.contact}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        );
    }

    function Course() {
        return (
            <div className="page-base-container course timetablepg-table-2">
            <h1>Course Details</h1>

            <div>
                <table className="timetable-table">
                <thead>
                    <tr>
                    <th>Course Name</th>
                    <th>Course Code</th>
                    <th>Course Credit</th>
                    <th>Course Type</th>
                    </tr>
                </thead>
                <tbody>
                    {courseData.map((course, index) => (
                    <tr key={index}>
                        <td>{course.courseName}</td>
                        <td>{course.courseCode}</td>
                        <td>{course.courseCredit}</td>
                        <td>{course.courseType}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
                </div>
            </div>
      
        );
    }


    const [view, setView] = useState<'daily' | 'weekly'>('weekly');  // Default is Weekly
    

    return (
        <div className="page-container">
        <div className="page-main-container">
  
          <div>
            <button className="time-table-button" onClick={() => setView('daily')}>Daily</button>
            <button className="time-table-button" onClick={() => setView('weekly')}>Weekly</button>
          </div>
  
          <div className="page-base-container">
            {view === 'daily' ? <DailyTimeTable /> : <WeeklyTimeTable />}
          </div>
        </div>
  
        {/* Simple side-by-side layout */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '48%' }}>
            <Professor />
          </div>
          <div style={{ width: '48%' }}>
            <Course />
          </div>
        </div>
      </div>
    );
  }

  export default Time_Table;