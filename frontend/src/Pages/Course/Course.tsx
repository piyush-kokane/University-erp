import { useState } from "react";
import "./Course.css";



function Search_Context(){
    const programOptions = [
        { key: "bca", label: "B.Ca Computer Science" },
        { key: "bsc", label: "B.Sc Computer Science" },
    ];

    const termOptions = [
        { key: "sem1", label: "Semester 1" },
        { key: "sem2", label: "Semester 2" },
        { key: "sem3", label: "Semester 3" },
        { key: "sem4", label: "Semester 4" },
        { key: "sem5", label: "Semester 5" },
        { key: "sem6", label: "Semester 6" },
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
        <div className="page-base-container attendancepg-select-base-container">            
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
        

                <button><span className="material-icons">search</span>Search</button>
            </div>
        </div>
    );
}


function Summery() {
    const theory = 4;
    const lab = 2;
    const elective = 1;
    

    return(
        <div className="page-base-container attendancepg-summary-container">
            {/* Theory */}
            <div className="summary-container-1">
            <span className="material-icons">school</span>
            <h1>{theory}</h1>
            <h2>Theory</h2>
            </div>

            {/* Lab */}
            <div className="summary-container-1">
            <span className="material-icons">science</span>
            <h1>{lab}</h1>
            <h2>Lab</h2>
            </div>

            {/* Elective */}
            <div className="summary-container-1">
            <span className="material-icons">how_to_vote</span>
            <h1>{elective}</h1>
            <h2>Elective</h2>
            </div>
        </div>
    );
}


function Course() {
    const sample_attendance = [
        { name: "Python", code: "CS101", Type: "Theory", faculty: "Dr. Aditi Sharma", credits: "2" },
        { name: "AWT", code: "CS202", Type: "Theory", faculty: "Prof. Rajesh Iyer", credits: "2" },
        { name: "OOP", code: "CS303", Type: "Theory", faculty: "Dr. Neha Kapoor", credits: "2" },
        { name: "DSA", code: "CS404", Type: "Theory", faculty: "Prof. Anil Mehta", credits: "2" },
        { name: "Operating System", code: "EE501", Type: "Lab", faculty: "Dr. Priya Nair", credits: "4" },
        { name: "DCN", code: "CS602", Type: "Lab", faculty: "Prof. Sandeep Verma", credits: "4" },
        { name: "A.I.", code: "CS703", Type: "Elective", faculty: "Dr. Ramesh Patel", credits: "6" },
        { name: "A.I.", code: "CS703", Type: "Elective", faculty: "Dr. Ramesh Patel", credits: "6" },
    ];
    


    return (
        <div className="page-container">
            <div className="page-main-container">
                <Search_Context />

                <div className="attendancepg-context-line-1" />

                <Summery />

                <div className="page-base-container attendancepg-table-base-container">
                    <table className="attendancepg-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Type</th>
                                <th>Faculty</th>
                                <th><center>Credits</center></th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {sample_attendance.map((session, index) => (
                                <tr key={index}>
                                    <td>{session.name}</td>
                                    <td>{session.code}</td>
                                    <td>{session.Type}</td>
                                    <td>{session.faculty}</td>
                                    <td><center>{session.credits}</center></td>
                                    <td><center><label><h2>details</h2></label></center></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
  }

  export default Course;