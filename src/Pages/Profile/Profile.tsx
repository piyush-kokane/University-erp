import "./Profile.css";

function Profile() {
    let Profile="/Images/Profile.jpg";
    let Name="Piyush Jayant Kokane";
    let PRN="1132230781";
    let Branch="SY. B.Sc. CS.";
    let Bio="I study at MIT-WPU, and I have technical skills in React, TypeScript, Node.js, PHP, MySQL, MongoDB, Tailwind CSS, HTML, CSS, JavaScript, WordPress, and Figma.";


  return (
    <div className="profilepg-page">
        <div className="profilepg-container">
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
            {/* Content panel left */}
            <div className="profilepg-container-left">
            
            </div>

            {/* Content panel right */}
            <div className="profilepg-container-right">
            
            </div>
        </div>
    </div>
  );
}

export default Profile;
