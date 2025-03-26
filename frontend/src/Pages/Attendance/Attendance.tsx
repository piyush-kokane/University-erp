import { useState } from "react";
import "./Attendance.css";



function Search_Context(){
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const programOptions = [
        { key: "bca", label: "B.Ca Computer Science" },
        { key: "bsc", label: "B.Sc Computer Science" },
    ];

    const courseOptions = [
        { key: "os", label: "Operating System" },
        { key: "nt", label: "Number Theory" },
        { key: "scn", label: "Data Communication" },
        { key: "awt", label: "Advanced Web Technology" },
    ];

    const termOptions = [
        { key: "sem1", label: "Semester 1" },
        { key: "sem2", label: "Semester 2" },
        { key: "sem3", label: "Semester 3" },
        { key: "sem4", label: "Semester 4" },
        { key: "sem5", label: "Semester 5" },
        { key: "sem6", label: "Semester 4 semisterfa 5" },
    ];

    // ----------------------------------------------------------------------------------------------------

    const [program, setProgram] = useState('');
    const [programIsOpen, setProgramIsOpen] = useState(false);

    // Filter options based on user input
    const programFilteredOptions = programOptions.filter((option) =>
        option.label.toLowerCase().includes(program.toLowerCase())
    );

    // Handle option selection
    const programHandleSelect = (label: string) => {
        setProgram(label);
        setProgramIsOpen(false);
    };

    // ----------------------------------------------------------------------------------------------------

    const [course, setCourse] = useState('');
    const [courseIsOpen, setCourseIsOpen] = useState(false);

    // Filter options based on user input
    const courseFilteredOptions = courseOptions.filter((option) =>
        option.label.toLowerCase().includes(course.toLowerCase())
    );

    // Handle option selection
    const courseHandleSelect = (label: string) => {
        setCourse(label);
        setCourseIsOpen(false);
    };

    // ----------------------------------------------------------------------------------------------------

    const [term, setTerm] = useState("");
    const [termIsOpen, setTermIsOpen] = useState(false);

    // Filter options based on user input
    const termFilteredOptions = termOptions.filter((option) =>
        option.label.toLowerCase().includes(term.toLowerCase())
    );

    // Handle option selection
    const termHandleSelect = (label: string) => {
        setTerm(label);
        setTermIsOpen(false);
    };

    // ----------------------------------------------------------------------------------------------------

    return(
        <div className="page-base-container attendance-select-base-container">
            
            <h1><span className="material-symbols-outlined">info</span><b>Search Context:</b>Please fill all the details and click on the Search button to the right..!</h1>
            
            <div className="attendance-select-holder">
                {/* Program Searchable Dropdown */}
                <div className="attendance-select">
                    <label>Program:</label>
                    <div className="dropdown">
                        <input
                            type="text"
                            value={program}
                            id="program-dropdown-input"
                            placeholder="Search program..."
                            className="dropdown-input"
                            onFocus={() => setProgramIsOpen(true)}
                            onBlur={() => setTimeout(() => setProgramIsOpen(false), 100)}
                            onChange={(e) => {
                                setProgram(e.target.value);
                                setProgramIsOpen(true);
                            }}
                        />
                        
                        <span
                            onClick={() => document.getElementById("program-dropdown-input")?.focus()}
                            className="material-icons">
                            arrow_drop_down
                        </span>

                        {programIsOpen && programFilteredOptions.length > 0 && (
                            <ul className="dropdown-list scrollbar">
                                {programFilteredOptions.map((option) => (
                                    <li key={option.key} onClick={() => programHandleSelect(option.label)}>
                                        {option.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
        

                {/* Term Searchable Dropdown */}
                <div className="attendance-select">
                    <label>Term:</label>
                    <div className="dropdown">
                        <input
                            type="text"
                            value={term}
                            id="term-dropdown-input"
                            placeholder="Search term..."
                            className="dropdown-input"
                            onFocus={() => setTermIsOpen(true)}
                            onBlur={() => setTimeout(() => setTermIsOpen(false), 100)}
                            onChange={(e) => {
                                setTerm(e.target.value);
                                setTermIsOpen(true);
                            }}
                        />
                        
                        <span
                            onClick={() => document.getElementById("term-dropdown-input")?.focus()}
                            className="material-icons">
                            arrow_drop_down
                        </span>

                        {termIsOpen && termFilteredOptions.length > 0 && (
                            <ul className="dropdown-list scrollbar">
                                {termFilteredOptions.map((option) => (
                                    <li key={option.key} onClick={() => termHandleSelect(option.label)}>
                                        {option.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
        

                {/* Course Searchable Dropdown */}
                <div className="attendance-select">
                    <label>Course:</label>
                    <div className="dropdown">
                        <input
                            type="text"
                            value={course}
                            id="course-dropdown-input"
                            placeholder="Search course..."
                            className="dropdown-input"
                            onFocus={() => setCourseIsOpen(true)}
                            onBlur={() => setTimeout(() => setCourseIsOpen(false), 100)}
                            onChange={(e) => {
                                setCourse(e.target.value);
                                setCourseIsOpen(true);
                            }}
                        />
                        
                        <span
                            onClick={() => document.getElementById("course-dropdown-input")?.focus()}
                            className="material-icons">
                            arrow_drop_down
                        </span>

                        {courseIsOpen && courseFilteredOptions.length > 0 && (
                            <ul className="dropdown-list scrollbar">
                                {courseFilteredOptions.map((option) => (
                                    <li key={option.key} onClick={() => courseHandleSelect(option.label)}>
                                        {option.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>


                {/* Start Date Select */}
                <div className="attendance-select">
                    <label>Start Date:</label>
                    <div className="date-select">
                        <input
                            type="date"
                            value={startDate}
                            id="start-date-select"
                            onChange={(e) => setStartDate(e.target.value)}
                            className="date-select-input"
                        />
                        <span
                            className="material-icons"
                            onClick={() => {
                                const dateInput = document.getElementById("start-date-select") as HTMLInputElement;
                                dateInput.showPicker()
                            }}>
                            calendar_today
                        </span>
                    </div>
                </div>


                {/* End Date Select */}
                <div className="attendance-select">
                    <label>End Date:</label>
                    <div className="date-select">
                        <input
                            type="date"
                            value={endDate}
                            id="end-date-select"
                            onChange={(e) => setEndDate(e.target.value)}
                            className="date-select-input"
                        />
                        <span
                            className="material-icons"
                            onClick={() => {
                                const dateInput = document.getElementById("end-date-select") as HTMLInputElement;
                                dateInput.showPicker()
                            }}>
                            calendar_today
                        </span>
                    </div>
                </div>


                <button><span className="material-icons">search</span>Search</button>
            </div>
        </div>
    );
}


function Summer() {
    const total_present = 8;
    const total_absent = 2;
    const total_lectures = 10;
    const total_percentage = 80;
    

    return(
        <div className="page-base-container attendance-summary-container">
            {/* Credits Earned */}
            <div className="summary-container-1">
            <span className="material-icons">check_circle</span>
            <h1>{total_present}</h1>
            <h2>Total Present</h2>
            </div>

            {/* Credits Remaining */}
            <div className="summary-container-1">
            <span className="material-icons">cancel</span>
            <h1>{total_absent}</h1>
            <h2>Total Absent</h2>
            </div>

            {/* Total Attendance */}
            <div className="summary-container-1">
            <span className="material-icons">school</span>
            <h1>{total_lectures}</h1>
            <h2>Lectures Held</h2>
            </div>

            {/* Total Attendance */}
            <div className="summary-container-1">
            <span className="material-icons">equalizer</span>
            <h1>{total_percentage}%</h1>
            <h2>Subject Attendance</h2>
            </div>
        </div>
    );
}


function Attendance() {
    const sample_attendance = [
        { date: "2025-03-23", time: "10:00 AM - 11:30 AM", faculty: "Dr. John Doe", attendance: "Present" },
        { date: "2025-03-22", time: "2:00 PM - 3:30 PM", faculty: "Prof. Jane Smith", attendance: "Absent" },
        { date: "2025-03-21", time: "9:00 AM - 10:30 AM", faculty: "Mr. Alex Brown", attendance: "Present" },
        { date: "2025-03-20", time: "11:00 AM - 12:30 PM", faculty: "Dr. Emily White", attendance: "Present" },
        { date: "2025-03-19", time: "1:00 PM - 2:30 PM", faculty: "Prof. Mark Green", attendance: "Absent" },
        { date: "2025-03-18", time: "3:00 PM - 4:30 PM", faculty: "Mr. Lucas Carter", attendance: "Present" },
        { date: "2025-03-17", time: "9:30 AM - 11:00 AM", faculty: "Dr. Sophia Black", attendance: "Not Marked" },
        { date: "2025-03-16", time: "10:30 AM - 12:00 PM", faculty: "Prof. Daniel Scott", attendance: "Present" },
        { date: "2025-03-15", time: "2:30 PM - 4:00 PM", faculty: "Mr. Oliver Grey", attendance: "Not Marked" },
        { date: "2025-03-14", time: "8:00 AM - 9:30 AM", faculty: "Dr. Ava Brown", attendance: "Absent" },
    ];
    


    return (
        <div className="page-container">
            <div className="page-main-container">
                <Search_Context />

                <div className="attendance-context-line-1" />

                <Summer />

                <div className="page-base-container attendance-table-base-container">

                    <table className="attendance-table">
                        <thead>
                            <tr>
                                <th>Session Date</th>
                                <th>Session Time</th>
                                <th>Faculty Name</th>
                                <th><center>Attendance</center></th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {sample_attendance.map((session, index) => (
                                <tr key={index}>
                                    <td>{session.date}</td>
                                    <td>{session.time}</td>
                                    <td>{session.faculty}</td>
                                    <td className={`attendance ${session.attendance.toLowerCase()==="present" ?"present" :session.attendance.toLowerCase()==="absent" ?"absent" :"not-marked"}`}><center>{session.attendance}</center></td>
                                    <td><label><span className="material-icons">visibility</span><h2>view</h2></label></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
  }

  export default Attendance;