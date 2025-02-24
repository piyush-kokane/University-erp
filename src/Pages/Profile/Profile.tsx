import "./Profile.css";

function Profile() {
    let Profile="/Images/Profile.jpg";
    let Name="Piyush Jayant Kokane";
    let PRN="1132230781";
    let Branch="SY. B.Sc. CS.";
    let Bio="I study at MIT-WPU, and I have technical skills in React, TypeScript, Node.js, PHP, MySQL, MongoDB, Tailwind CSS, HTML, CSS, JavaScript, WordPress, and Figma.";

    const ProgramInfo = [
        { Key: "Program Name", value: "dashboard" },
        { Key: "Term", value: "dashboard" },
        { Key: "Year", value: "dashboard" },

    ];

    const StudentInfo = [
        { Key: "Name", value: "dashboard" },
        { Key: "PRN", value: "dashboard" },
        { Key: "Gender", value: "dashboard" },
        { Key: "Date Of Birth", value: "dashboard" },
        { Key: "Phone No.", value: "8806808503" },
        { Key: "gmail", value: "8806808503" },
        { Key: "Emergency No.", value: "8806808503" },
        { Key: "Aadhar No.", value: "dashboard" },
        { Key: "Admission Type", value: "dashboard" },
        { Key: "Admission Status", value: "dashboard" },
    ];

    const StudentAddress = [
        { Key: "Dashboard", value: "dashboard" },
        { Key: "Dashboard", value: "dashboard" },
        { Key: "Dashboard", value: "dashboard" },
        { Key: "Dashboard", value: "dashboard" },
        { Key: "Dashboard", value: "dashboard" },
        { Key: "Dashboard", value: "dashboard" },
        { Key: "Dashboard", value: "dashboard" },
        { Key: "Dashboard", value: "dashboard" },
        { Key: "Dashboard", value: "dashboard" },
    ];

    const Parent1Info = [
        { Key: "Dashboard", value: "dashboard" },
        { Key: "Dashboard", value: "dashboard" },
        { Key: "Dashboard", value: "dashboard" },
        { Key: "Dashboard", value: "dashboard" },
        { Key: "Dashboard", value: "dashboard" },
    ];
    
    const Parent2Info = [
        { Key: "Dashboard", value: "dashboard" },
        { Key: "Dashboard", value: "dashboard" },
        { Key: "Dashboard", value: "dashboard" },
        { Key: "Dashboard", value: "dashboard" },
        { Key: "Dashboard", value: "dashboard" },
    ];

  return (
    <div className="profilepg-page">
        <div className="profilepg-container-0">
            {/* Profile & navigation panel */}
            <div className="profilepg-navbar">
                <img src={Profile} />
                <h1>{Name}</h1>
                <div className="profilepg-navbar-options">
                    <h2>About</h2>
                    <h2>Cource Progress</h2>
                    <h2>Documents</h2>
                </div>
                <span className="material-icons">more_vert</span>
            </div>
        </div>

        {/* Content panel */}
        <div className="profilepg-container-1">



            {/* Content panel 2 */}
            <div className="profilepg-container">
                <h1>Student Information</h1>
                <div className="profilepg-container-line"/>
                {StudentInfo.map((item) => (
                    <div className="profilepg-sub-container">
                        <h1>{item.Key}</h1>
                        <h2>{item.value}</h2>
                        <div />
                    </div>
                ))}
            </div>

            {/* Content panel 3 */}
            <div className="profilepg-container">
                <h1>Student Address</h1>
                <div className="profilepg-container-line"/>
                {StudentAddress.map((item) => (
                    <div className="profilepg-sub-container">
                        <h1>{item.Key}</h1>
                        <h2>{item.value}</h2>
                        <div />
                    </div>
                ))}
            </div>


            {/* Content panel 1 */}
            <div className="profilepg-container">
                <h1>Program Details</h1>
                <div className="profilepg-container-line"/>
                {ProgramInfo.map((item) => (
                    <div className="profilepg-sub-container">
                        <h1>{item.Key}</h1>
                        <h2>{item.value}</h2>
                        <div />
                    </div>
                ))}
            </div>
            
            {/* Content panel 4 */}
            <div className="profilepg-container">
                <h1>Guardian-1 Information</h1>
                <div className="profilepg-container-line"/>
                {Parent1Info.map((item) => (
                    <div className="profilepg-sub-container">
                        <h1>{item.Key}</h1>
                        <h2>{item.value}</h2>
                        <div />
                    </div>
                ))}
            </div>

            {/* Content panel 5 */}
            <div className="profilepg-container">
                <h1>Guardian-2 Information</h1>
                <div className="profilepg-container-line"/>
                {Parent2Info.map((item) => (
                    <div className="profilepg-sub-container">
                        <h1>{item.Key}</h1>
                        <h2>{item.value}</h2>
                        <div />
                    </div>
                ))}
            </div>





        </div>
    </div>
  );
}

export default Profile;
