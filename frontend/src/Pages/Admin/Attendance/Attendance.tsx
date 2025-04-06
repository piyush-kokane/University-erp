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
        { name: "John Doe", prn: "BCA12345", email: "john.doe@example.com" },
        { name: "Jane Smith", prn: "BCA12346", email: "jane.smith@example.com" },
        { name: "Alex Brown", prn: "BCA12347", email: "alex.brown@example.com" },
        { name: "Emily White", prn: "BCA12348", email: "emily.white@example.com" },
        { name: "Michael Johnson", prn: "BCA12349", email: "michael.johnson@example.com" },
        { name: "Sarah Davis", prn: "BCA12350", email: "sarah.davis@example.com" },
        { name: "David Williams", prn: "BCA12351", email: "david.williams@example.com" },
        { name: "Laura Martinez", prn: "BCA12352", email: "laura.martinez@example.com" },
        { name: "James Garcia", prn: "BCA12353", email: "james.garcia@example.com" },
        { name: "Sophia Wilson", prn: "BCA12354", email: "sophia.wilson@example.com" },
        { name: "Daniel Moore", prn: "BCA12355", email: "daniel.moore@example.com" },
        { name: "Olivia Taylor", prn: "BCA12356", email: "olivia.taylor@example.com" },
        { name: "Lucas Anderson", prn: "BCA12357", email: "lucas.anderson@example.com" },
        { name: "Amelia Thomas", prn: "BCA12358", email: "amelia.thomas@example.com" },
        { name: "Ethan Jackson", prn: "BCA12359", email: "ethan.jackson@example.com" },
        { name: "Isabella White", prn: "BCA12360", email: "isabella.white@example.com" },
        { name: "Mason Harris", prn: "BCA12361", email: "mason.harris@example.com" },
        { name: "Harper Clark", prn: "BCA12362", email: "harper.clark@example.com" },
        { name: "Ella Lewis", prn: "BCA12363", email: "ella.lewis@example.com" },
        { name: "Liam Robinson", prn: "BCA12364", email: "liam.robinson@example.com" },
        { name: "Zoe Walker", prn: "BCA12365", email: "zoe.walker@example.com" },
        { name: "Jackson Young", prn: "BCA12366", email: "jackson.young@example.com" },
        { name: "Grace Hall", prn: "BCA12367", email: "grace.hall@example.com" },
        { name: "Daniel Allen", prn: "BCA12368", email: "daniel.allen@example.com" },
        { name: "Matthew King", prn: "BCA12369", email: "matthew.king@example.com" },
        { name: "Harper Wright", prn: "BCA12370", email: "harper.wright@example.com" },
        { name: "Ella Scott", prn: "BCA12371", email: "ella.scott@example.com" },
        { name: "Benjamin Adams", prn: "BCA12372", email: "benjamin.adams@example.com" },
        { name: "Ava Nelson", prn: "BCA12373", email: "ava.nelson@example.com" },
        { name: "Jacob Carter", prn: "BCA12374", email: "jacob.carter@example.com" },
        { name: "Charlotte Mitchell", prn: "BCA12375", email: "charlotte.mitchell@example.com" },
        { name: "Oliver Perez", prn: "BCA12376", email: "oliver.perez@example.com" },
        { name: "Henry Robinson", prn: "BCA12377", email: "henry.robinson@example.com" },
        { name: "Evelyn Thompson", prn: "BCA12378", email: "evelyn.thompson@example.com" },
        { name: "Nathan Moore", prn: "BCA12379", email: "nathan.moore@example.com" },
        { name: "Addison Harris", prn: "BCA12380", email: "addison.harris@example.com" },
        { name: "Matthew Lewis", prn: "BCA12381", email: "matthew.lewis@example.com" },
        { name: "Ella Martinez", prn: "BCA12382", email: "ella.martinez@example.com" },
        { name: "Sebastian Walker", prn: "BCA12383", email: "sebastian.walker@example.com" },
        { name: "Lily King", prn: "BCA12384", email: "lily.king@example.com" },
        { name: "Jack Nelson", prn: "BCA12385", email: "jack.nelson@example.com" },
        { name: "Chloe Allen", prn: "BCA12386", email: "chloe.allen@example.com" },
        { name: "Owen Davis", prn: "BCA12387", email: "owen.davis@example.com" },
        { name: "Ella White", prn: "BCA12388", email: "ella.white@example.com" },
        { name: "Samuel Clark", prn: "BCA12389", email: "samuel.clark@example.com" },
        { name: "Nora Adams", prn: "BCA12390", email: "nora.adams@example.com" },
        { name: "Lillian Scott", prn: "BCA12391", email: "lillian.scott@example.com" },
        { name: "William Perez", prn: "BCA12392", email: "william.perez@example.com" },
        { name: "Madison Walker", prn: "BCA12393", email: "madison.walker@example.com" },
        { name: "Wyatt Young", prn: "BCA12394", email: "wyatt.young@example.com" },
        { name: "Riley Robinson", prn: "BCA12395", email: "riley.robinson@example.com" },
        { name: "Zara Lewis", prn: "BCA12396", email: "zara.lewis@example.com" },
        { name: "Oliver Johnson", prn: "BCA12397", email: "oliver.johnson@example.com" },
        { name: "Sophie Martinez", prn: "BCA12398", email: "sophie.martinez@example.com" },
        { name: "Henry Garcia", prn: "BCA12399", email: "henry.garcia@example.com" },
        { name: "Aiden White", prn: "BCA12400", email: "aiden.white@example.com" },
        { name: "Charlotte Brown", prn: "BCA12401", email: "charlotte.brown@example.com" },
        { name: "Ella Walker", prn: "BCA12402", email: "ella.walker@example.com" },
        { name: "Jack Harris", prn: "BCA12403", email: "jack.harris@example.com" },
        { name: "Liam Davis", prn: "BCA12404", email: "liam.davis@example.com" },
        { name: "Emily Robinson", prn: "BCA12405", email: "emily.robinson@example.com" },
        { name: "Benjamin Walker", prn: "BCA12406", email: "benjamin.walker@example.com" },
        { name: "Abigail White", prn: "BCA12407", email: "abigail.white@example.com" },
        { name: "Noah Carter", prn: "BCA12408", email: "noah.carter@example.com" },
        { name: "Isla Lewis", prn: "BCA12409", email: "isla.lewis@example.com" },
        { name: "Sebastian Martinez", prn: "BCA12410", email: "sebastian.martinez@example.com" },
        { name: "Liam Allen", prn: "BCA12411", email: "liam.allen@example.com" },
        { name: "Megan Clark", prn: "BCA12412", email: "megan.clark@example.com" },
        { name: "William Scott", prn: "BCA12413", email: "william.scott@example.com" },
        { name: "Ava Robinson", prn: "BCA12414", email: "ava.robinson@example.com" },
        { name: "Benjamin Young", prn: "BCA12415", email: "benjamin.young@example.com" },
        { name: "Lucas Adams", prn: "BCA12416", email: "lucas.adams@example.com" },
        { name: "Charlotte Perez", prn: "BCA12417", email: "charlotte.perez@example.com" },
        { name: "Gabriel Davis", prn: "BCA12418", email: "gabriel.davis@example.com" },
        { name: "Addison Martinez", prn: "BCA12419", email: "addison.martinez@example.com" },
        { name: "Chloe Robinson", prn: "BCA12420", email: "chloe.robinson@example.com" },
        { name: "Lucas White", prn: "BCA12421", email: "lucas.white@example.com" },
        { name: "Matthew Harris", prn: "BCA12422", email: "matthew.harris@example.com" },
        { name: "Henry Walker", prn: "BCA12423", email: "henry.walker@example.com" },
        { name: "Zara Clark", prn: "BCA12424", email: "zara.clark@example.com" }
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
                                <th>Mark Attendance</th>
                                <th>Attendance Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sample_attendance.map((session, index) => (
                                <tr key={index}>
                                    <td>{session.name}</td>
                                    <td>{session.prn}</td>
                                    <td>{session.email}</td>
                                    <td>
                                        <div className={`toggle-switch ${attendanceStatus[index] === "Present" ? "dark" : ""}`}
                                            onClick={() => toggleAttendance(index)}>
                                            <div className="toggle-thumb" />
                                        </div>
                                    </td>
                                    <td>{attendanceStatus[index] || "Not Marked"}</td>
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
