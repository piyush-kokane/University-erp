import { useState } from "react";
import "./Attendance.css";



function Search_Context(){
    const [date, setDate] = useState("");

    const program_options = [
        { value: "bca", label: "B.Ca Computer Science" },
        { value: "bsc", label: "B.Sc Computer Science" },
    ];
    const term_options = [
        { value: "sem1", label: "Semester 1" },
        { value: "sem2", label: "Semester 2" },
        { value: "sem3", label: "Semester 3" },
        { value: "sem4", label: "Semester 4" },
        { value: "sem4", label: "Semester 4" },
        { value: "sem4", label: "Semester 4" },
    ];
    const course_options = [
        { value: "os", label: "Operating System" },
        { value: "nt", label: "Number Theory" },
        { value: "scn", label: "Data Communication" },
        { value: "awt", label: "Advanced Web Technology" },
    ];

    const [program, setProgram] = useState('');
    const [course, setCourse] = useState('');

    const [term, setTerm] = useState("");
    const [TermIsOpen, setTermIsOpen] = useState(true);

    // Filter options based on user input
    const filteredOptions = term_options.filter((option) =>
        option.label.toLowerCase().includes(term.toLowerCase())
    );

    // Handle option selection
    const handleSelect = (value: string) => {
        setTerm(value);
        setTermIsOpen(false); // Close dropdown after selection
    };

    return(
        <div className="page-base-container attendance-dropdown-base-container">
            <h1><span className="material-symbols-outlined">info</span><b>Search Context :</b>  Please fill all the details and click on the Search button to the right..!</h1>

            <div className="attendance-dropdown-holder">
                <div className="attendance-dropdown">
                    <label>Program: </label>
                    <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    >
                    <option value="">Choose...</option>
                    <option value="bsc">B.Sc Computer Science</option>
                    </select>
                </div>
        
                {/* Term Searchable Dropdown */}
                <div className="dropdown">
                    <label>Term: </label>
                    <div className="dropdown-wrapper">
                        <input
                            type="text"
                            value={term}
                            onChange={(e) => {
                                setTerm(e.target.value);
                                setTermIsOpen(true);
                            }}
                            placeholder="Search term..."
                            onFocus={() => setTermIsOpen(true)}
                            onBlur={() => setTermIsOpen(false)}
                            className="dropdown-input"
                        />
                        {TermIsOpen && filteredOptions.length > 0 && (
                            <ul className="dropdown-list scrollbar">
                                {filteredOptions.map((option) => (
                                    <li key={option.value} onClick={() => handleSelect(option.label)}>
                                        {option.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
        
                <div className="attendance-dropdown">
                    <label>Course: </label>
                    <select
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        >
                        <option value="">Choose...</option>
                        <option value="os">Operating System</option>
                        <option value="nt">Number Theory</option>
                        <option value="dc">Data Communication</option>
                        <option value="awt">Advanced Web Technology</option>
                    </select>
                </div>

                <div className="attendance-dropdown">
                    <label>Start Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border p-2 rounded"
                    />
                </div>

                <div className="attendance-dropdown">
                    <label>Start Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border p-2 rounded"
                    />
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

    const program_options = [
        { value: "bca", label: "B.Ca Computer Science" },
        { value: "bsc", label: "B.Sc Computer Science" },
    ];
    const term_options = [
        { value: "sem1", label: "Semester 1" },
        { value: "sem2", label: "Semester 2" },
        { value: "sem3", label: "Semester 3" },
        { value: "sem4", label: "Semester 4" },
    ];
    const course_options = [
        { value: "os", label: "Operating System" },
        { value: "nt", label: "Number Theory" },
        { value: "scn", label: "Data Communication" },
        { value: "awt", label: "Advanced Web Technology" },
    ];








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