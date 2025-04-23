import { useState } from "react";
import "./Attendance.css";

function Search_Context() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const programOptions = [
        { key: "bca", label: "B.Ca Computer Science" },
        { key: "bsc", label: "B.Sc Computer Science" },
    ];

    const courseOptions = [
        { key: "pbl", label: "Project Base Learning" },
        { key: "awt", label: "Advanced Web Technology" },
    ];

    const termOptions = [
        { key: "sem1", label: "Semester 1" },
        { key: "sem2", label: "Semester 2" },
        { key: "sem3", label: "Semester 3" },
        { key: "sem4", label: "Semester 4" },
        { key: "sem5", label: "Semester 5" },
        { key: "sem6", label: "Semester 6" },
    ];

    const [program, setProgram] = useState('');
    const [programIsOpen, setProgramIsOpen] = useState(false);

    const programFilteredOptions = programOptions.filter((option) =>
        option.label.toLowerCase().includes(program.toLowerCase())
    );

    const programHandleSelect = (label: string) => {
        setProgram(label);
        setProgramIsOpen(false);
    };

    const [course, setCourse] = useState('');
    const [courseIsOpen, setCourseIsOpen] = useState(false);

    const courseFilteredOptions = courseOptions.filter((option) =>
        option.label.toLowerCase().includes(course.toLowerCase())
    );

    const courseHandleSelect = (label: string) => {
        setCourse(label);
        setCourseIsOpen(false);
    };

    const [term, setTerm] = useState("");
    const [termIsOpen, setTermIsOpen] = useState(false);

    const termFilteredOptions = termOptions.filter((option) =>
        option.label.toLowerCase().includes(term.toLowerCase())
    );

    const termHandleSelect = (label: string) => {
        setTerm(label);
        setTermIsOpen(false);
    };

    return (
        <div className="page-base-container attendancepg-select-base-container">
            <h1><span className="material-symbols-outlined">info</span><b>Search Context:</b> Please fill all the details and click on the Search button to the right..!</h1>

            <div className="attendancepg-select-holder">
                {/* Program Searchable Dropdown */}
                <div className="attendancepg-select">
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
                        <span onClick={() => document.getElementById("program-dropdown-input")?.focus()} className="material-icons">
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
                <div className="attendancepg-select">
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
                        <span onClick={() => document.getElementById("term-dropdown-input")?.focus()} className="material-icons">
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
                <div className="attendancepg-select">
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
                        <span onClick={() => document.getElementById("course-dropdown-input")?.focus()} className="material-icons">
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

                {/* Select Date */}
                <div className="attendancepg-select">
                    <label>Select Date:</label>
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

                {/* Search Button */}
                <div className="w-full flex justify-end">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
                        <span className="material-icons">search</span>Search
                    </button>
                </div>
            </div>
        </div>
    );
}


function Attendance() {
    const [attendanceStatus, setAttendanceStatus] = useState({});

    const sample_attendance = [
        { name: "Piyush Kokane", prn: "1132230781", email: "piyush.kokane@mitwpu.edu.in" },
        { name: "Advait More", prn: "1132230803", email: "advait.more@mitwpu.edu.in" },
        { name: "Onkar Kale", prn: "1132230482", email: "onkar.kale@mitwpu.edu.in" },
        { name: "Narendra Mande", prn: "1132230871", email: "narendra.mande@mitwpu.edu.in" },
    ];

    const toggleAttendance = (index) => {
        setAttendanceStatus((prev) => ({
            ...prev,
            [index]: prev[index] === "Present" ? "Absent" : "Present"
        }));
    };

    return (
        <div className="page-container">
            <div className="page-main-container">
                
                <Search_Context />

                <div className="page-base-container attendancepg-table-base-container">
                    <table className="attendancepg-table">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>PRN</th>
                                <th>Student Email</th>
                                <th><center>Mark Attendance</center></th>
                                <th><center>Attendance Status</center></th>
                            </tr>
                        </thead>
                        <tbody>
                            {sample_attendance.map((session, index) => (
                                <tr key={index}>
                                    <td>{session.name}</td>
                                    <td>{session.prn}</td>
                                    <td>{session.email}</td>
                                    <td>
                                        <center>
                                            <div className={`toggle-switch ${attendanceStatus[index] === "Present" ? "dark" : ""}`}
                                                onClick={() => toggleAttendance(index)}>
                                                <div className="toggle-thumb" />
                                            </div>
                                        </center>
                                    </td>
                                    <td><center>{attendanceStatus[index] || "Not Marked"}</center></td>
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
