import React, { useState } from "react";
import "./Attendance.css";


function Attendance() {
    const [program, setProgram] = useState('');
    const [term, setTerm] = useState('');
    const [course, setCourse] = React.useState('');
  
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


    return (
        <>
            <div className="page-container">
                <div className="page-main-container">
                    <div className="page-base-container">


                
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
                    
                            <div className="attendance-dropdown">
                                <label>Term: </label>
                                <select
                                value={term}
                                onChange={(e) => setTerm(e.target.value)}
                                >
                                <option value="">Choose...</option>
                                <option value="sem1">Semester 1</option>
                                <option value="sem2">Semester 2</option>
                                <option value="sem3">Semester 3</option>
                                <option value="sem4">Semester 4</option>
                                </select>
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

                            <button>Search</button>
                        </div>

                    </div>

                    <div className="page-base-container summary-container">

                        {/* Credits Earned */}
                        <div className="summary-container-1">
                        <span className="material-icons">paid</span>
                        <h1>{total_present}</h1>
                        <h2>Total Present</h2>
                        </div>

                        {/* Credits Remaining */}
                        <div className="summary-container-1">
                        <span className="material-icons">paid</span>
                        <h1>{total_absent}</h1>
                        <h2>Total Absent</h2>
                        </div>

                        {/* Total Attendance */}
                        <div className="summary-container-1">
                        <span className="material-icons">check_circle</span>
                        <h1>{total_lectures}</h1>
                        <h2>No of Lectures Held</h2>
                        </div>

                        {/* Total Attendance */}
                        <div className="summary-container-1">
                        <span className="material-icons">check_circle</span>
                        <h1>{total_percentage}%</h1>
                        <h2>Total Percentage</h2>
                        </div>


                    </div>

                    <div className="page-base-container">

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