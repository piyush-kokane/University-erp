import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css"


interface ProfileProps {
    Close: () => void;
}


function Profile({Close} : ProfileProps){
    const navigate = useNavigate();
    const [closing, setClosing] = useState(false);

    let Profile="/Images/Profile.jpg";
    let Name="Piyush Jayant Kokane";
    let PRN="1132230781";
    let Branch="SY. B.Sc. CS.";
    let Bio="I study at MIT-WPU, and I have technical skills in React, TypeScript, Node.js, PHP, MySQL, MongoDB, Tailwind CSS, HTML, CSS, JavaScript.";

    function handleClose() {
        setClosing(true); // Start fade-out animation
        setTimeout(() => Close(), 300); // delay, Matches animation duration (0.3s) // Call close function after animation
    }

    return(
        <div className={`profile-overlay ${closing ? "fade-out" : "fade-in"}`} onClick={handleClose}>
            <div className={`profile-card ${closing ? "slide-out" : "slide-in"}`} onClick={(e) => e.stopPropagation()}>
                <span className="material-icons profile-arrow">arrow_drop_up</span>
                <span className="material-icons profile-cancle-btn" onClick={handleClose}>close</span>

                <div className="profile-container">
                    <img src={Profile} />
                    <h1>{Name}</h1>
                    <h2>PRN: {PRN}</h2>
                    <h2>{Branch}</h2>
                    <div />
                    <p>{Bio}</p>
                    <a onClick={() => navigate("/profile")}>View Profile</a>
                </div>
                
                
            </div>
        </div>
    );
}

export default Profile;