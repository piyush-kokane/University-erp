import { useState } from "react";
import "./Attendance.css";



function Search_Context(){
    const [date, setDate] = useState("");

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
        <div className="page-base-container attendance-dropdown-base-container">
            
            <h1><span className="material-symbols-outlined">info</span><b>Search Context :</b>  Please fill all the details and click on the Search button to the right..!</h1>
            
            <div className="attendance-dropdown-holder">
                {/* Program Searchable Dropdown */}
                <div className="dropdown">
                    <label>Program:</label>
                    <div className="dropdown-wrapper">
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
                <div className="dropdown">
                    <label>Term:</label>
                    <div className="dropdown-wrapper">
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
                <div className="dropdown">
                    <label>Course:</label>
                    <div className="dropdown-wrapper">
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
                <div className="dropdown">
                    <label>Start Date:</label>
                    <div className="dropdown-wrapper">
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="dropdown-input"
                        />
                    </div>
                </div>


                {/* End Date Select */}
                <div className="dropdown">
                    <label>End Date:</label>
                    <div className="dropdown-wrapper">
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="dropdown-input"
                        />
                    </div>
                </div>


                <button><span className="material-icons">search</span>Search</button>
            </div>
        </div>
    );
}



function Attendance() {
    const [program, setProgram] = useState('');
    const [course, setCourse] = useState('');
  
    const total_present = 8;
    const total_absent = 2;
    const total_lectures = 10;
    const total_percentage = 80;

    const data = [
        { id: 1, name: "Alice", age: 24, city: "New York" },
        { id: 2, name: "Bob", age: 30, city: "Los Angeles" },
        { id: 3, name: "Charlie", age: 28, city: "Chicago" },
        { id: 4, name: "David", age: 26, city: "Houston" },
    ];

    const [date, setDate] = useState("");










    return (
        <>
            <div className="page-container">
                <div className="page-main-container">
                    <Search_Context />

                    <div className="attendance-context-line-1" />

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

                    <div className="page-base-container attendance-base-container">

                    <div className="p-4">
                        <table className="w-full border-collapse border border-gray-300 shadow-md">
                            <thead>
                            <tr className="bg-gray-800 text-white">
                                <th className="p-2 border border-gray-400">ID</th>
                                <th className="p-2 border border-gray-400">Name</th>
                                <th className="p-2 border border-gray-400">Age</th>
                                <th className="p-2 border border-gray-400">City</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((person, index) => (
                                <tr key={person.id} className="odd:bg-gray-100 even:bg-white hover:bg-gray-200">
                                <td className="p-2 border border-gray-300">{person.id}</td>
                                <td className="p-2 border border-gray-300">{person.name}</td>
                                <td className="p-2 border border-gray-300">{person.age}</td>
                                <td className="p-2 border border-gray-300">{person.city}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }

  export default Attendance;