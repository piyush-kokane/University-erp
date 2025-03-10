import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserData  } from "../../Context/UserDataContext";
import "./Profile.css"


interface ProfileProps {
    Close: () => void;
}


function Profile({Close} : ProfileProps){
    const navigate = useNavigate();
    const [closing, setClosing] = useState(false);

    const userContext = useContext(UserData);
    if (!userContext) throw new Error("useContext(UserData) must be used within a UserContextProvider");
    const { user, updateUserData } = userContext;

    const Profile = user?.Profile;
    const Banner = user?.Banner;
    const FullName = user?.FullName;
    const PRN = user?.Prn;
    const Branch = user?.Branch;
    const ShortBio = user?.ShortBio;

    function handleClose() {
        setClosing(true); // Start fade-out animation
        setTimeout(() => Close(), 300); // delay, Matches animation duration (0.3s) // Call close function after animation
    }

    return(
        <div className={`profile-overlay ${closing ? "fade-out" : "fade-in"}`} onClick={handleClose}>
            <div className={`profile-card ${closing ? "slide-out" : "slide-in"}`} onClick={(e) => e.stopPropagation()}>
                <img className="profile-card-banner" src={Banner}></img>
                
                <span className="material-icons profile-arrow">arrow_drop_up</span>
                <span className="material-icons profile-cancle-btn" onClick={handleClose}>close</span>

                <div className="profile-container">
                    <img src={Profile} />
                    <h1>{FullName}</h1>
                    <h2>PRN: {PRN}</h2>
                    <h2>{Branch}</h2>
                    <div />
                    <p>{ShortBio}</p>
                    <a onClick={() => {navigate("/profile"); handleClose(); }}>View Profile</a>
                </div>

            </div>
        </div>
    );
}

export default Profile;