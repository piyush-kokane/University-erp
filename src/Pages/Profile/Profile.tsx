import { useState } from "react";
import "./Profile.css";
import Footer from "../../Components/Footer/Footer";



function Profile() {
    const [panel, setPanel] = useState("about");

    let Profile="/User_Data/Profile.jpg";
    let FullName="Piyush Jayant Kokane";
    let LongBio="I am a student at MIT-WPU with a strong technical background in web development and software engineering. My expertise includes React, TypeScript, Node.js, PHP, MySQL, MongoDB, Tailwind CSS, HTML, CSS, JavaScript, WordPress, and Figma. I have experience working on projects like university ERP systems, online shopping platforms, and productivity apps, focusing on creating efficient and user-friendly applications.";
    let Biotag="I am proficient programmer";


    const UserDocuments = [
        { Key: "10th Marksheet", img: "/User_Data/10th_Marlsheet.png" },
        { Key: "12th Marksheet", img: "/User_Data/12th_Marlsheet.png" },
        { Key: "Leaving Certificate", img: "/User_Data/Leaving_Certificate.png" },
        { Key: "Signature", img: "/User_Data/Signature.png" },
    ];

    const ProgramInfo = [
        { Key: "PRN", value: "1132230781" },
        { Key: "Branch", value: "B.Sc. Computer Sci" },
        { Key: "Term", value: "Semester 4" },
    ];

    const StudentInfo = [
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
    ];

    const StudentAddress = [
        { Key: "Permanent Address", value: "Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address " },
        { Key: "Current Address", value: "Address" },
        { Key: "Area", value: "Area" },
        { Key: "Land Mark", value: "Land Mark" },
        { Key: "City", value: "Pune" },
        { Key: "Pincode", value: "411038" },
        { Key: "State", value: "Maharashtra" },
        { Key: "Country", value: "India" },
    ];

    const Parent1Info = [
        { Key: "Guardian Type", value: "Father" },
        { Key: "Fathers's gmail", value: "google@gmail.com" },
        { Key: "Father's Contact", value: "9875642587" },
        { Key: "Father's Profession", value: "Job" },
    ];
    
    const Parent2Info = [
        { Key: "Guardian Type", value: "Mother" },
        { Key: "Mother's gmail", value: "google@gmail.com" },
        { Key: "Mother's Contact", value: "9875642587" },
        { Key: "Mother's Profession", value: "Housewife" },
    ];



    function About() {    
        return (
            <>
                {/* Content panel 1 */}
                <div className="page-base-container profilepg-about">
                    <h1>About Me</h1>
                    <h2>{Biotag}</h2>
                    <p>{LongBio}</p>
                    
                    <div className="page-container-line-2"/>
                    {ProgramInfo.map((item) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
                </div>
    
    
                {/* Content panel 2 */}
                <div className="page-base-container profilepg-container">
                    <h1>More Information</h1>
                    <div className="page-container-line-1"/>
                    {StudentInfo.map((item) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
                </div>
    
    
                {/* Content panel 3 */}
                <div className="page-base-container profilepg-container">
                    <h1>Student Address</h1>
                    <div className="page-container-line-1"/>
                    {StudentAddress.map((item) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
                </div>
    
    
                {/* Content panel 4 */}
                <div className="page-base-container profilepg-container">
                    <h1>Parent/Guardian Information</h1>
                    <div className="page-container-line-1"/>
                    {Parent1Info.map((item) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
    
                    <div className="page-container-line-2"/>
                    {Parent2Info.map((item) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
                </div>
            </>
        );
    }    

    function Cource() {    
        return (
            <>
                {/* Content panel 1 */}
                <div className="page-base-container profilepg-about">
                    <h1>Cource</h1>
                    <h2>{Biotag}</h2>
                    <p>{LongBio}</p>
                    
                    <div className="page-container-line-2"/>
                    {ProgramInfo.map((item) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
                </div>
    
    
                {/* Content panel 2 */}
                <div className="page-base-container profilepg-container">
                    <h1>More Information</h1>
                    <div className="page-container-line-1"/>
                    {StudentInfo.map((item) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
                </div>
    
    
                {/* Content panel 3 */}
                <div className="page-base-container profilepg-container">
                    <h1>Student Address</h1>
                    <div className="page-container-line-1"/>
                    {StudentAddress.map((item) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
                </div>
    
    
                {/* Content panel 4 */}
                <div className="page-base-container profilepg-container">
                    <h1>Parent/Guardian Information</h1>
                    <div className="page-container-line-1"/>
                    {Parent1Info.map((item) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
    
                    <div className="page-container-line-2"/>
                    {Parent2Info.map((item) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
                </div>
            </>
        );
    }  

    function Documents() {  
        const [openDocuments, setOpenDocuments] = useState<{ [key: string]: boolean }>({});

        function toggleDocument(key: string) {
            setOpenDocuments(prev => ({
                ...prev,
                [key]: !prev[key] // Toggle the visibility of the clicked document
            }));
        }
        
        
        return (
            <>
                {/* Content panel 2 */}
                {UserDocuments.map((item) => (
                    <div className="page-base-container profilepg-container">
                        <h1>{item.Key}</h1>
                        <div className="page-container-line-1"/>

                        {openDocuments[item.Key] && (
                            <>
                              <img src={item.img} alt={item.Key} />
                              <div className="page-container-line-1"/>
                            </>
                        )}
                        
                        <a href={item.img} target="_blank" rel="noopener noreferrer" className="material-icons">open_in_new</a>
                        <span onClick={() => toggleDocument(item.Key)} >
                            { openDocuments[item.Key]
                            ? "Hide"
                            : "Show"
                        } </span>
                    </div>
                ))}
            </>
        );
    }        



    return (
        <div className="page-container">
            <div className="page-main-container">
                <div className="profilepg-container-0">
                    {/* Profile & navigation panel */}
                    <div className="profilepg-navbar">
                        <img src={Profile} />
                        <h1>{FullName}</h1>
                        <div className="profilepg-navbar-options">
                            <h2 className={panel === "about" ? "active" : ""} onClick={() => setPanel("about")}>About</h2>
                            <h2 className={panel === "cource" ? "active" : ""} onClick={() => setPanel("cource")}>Cource Progress</h2>
                            <h2 className={panel === "documents" ? "active" : ""} onClick={() => setPanel("documents")}>Documents</h2>
                        </div>
                        <span className="material-icons">more_vert</span>
                    </div>
                </div>

                {/* Content panel */}
                <div className="page-parent-base-container">
                    
                    {panel === "about" // if panel = about then render About panel
                    ? <About />

                    : panel === "cource"  // if panel = cource then render Cource panel
                    ? <Cource />

                    // else render Documents panel
                    : <Documents />
                    }

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
