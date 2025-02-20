import { useState } from "react";
import "./Settings.css"


interface SettingsProps {
    Close: () => void;
}


function Settings({Close} : SettingsProps){
    const [closing, setClosing] = useState(false);

    const [DarkMode, setDarkMode] = useState(false);
    const [Notification, setNotification] = useState(false);
    const [Email, setEmail] = useState(false);

    function handleClose() {
        setClosing(true); // Start fade-out animation
        setTimeout(() => Close(), 300); // delay, Matches animation duration (0.3s) // Call close function after animation
    }

    return(
        <div className={`settings-overlay ${closing ? "fade-out" : "fade-in"}`} onClick={handleClose}>
            <div className={`settings-container ${closing ? "slide-out" : "slide-in"}`} onClick={(e) => e.stopPropagation()}>
                <span className="material-icons settings-cancle-btn" onClick={handleClose}>close</span>
                <h1>Settings</h1>

                {/* Theme toggle */}
                <div className="toggle-container">
                    <h1>Theme</h1>
                    <div className={`theme-toggle-switch ${DarkMode ? "dark" : ""}`} onClick={() => setDarkMode(!DarkMode)}>
                        <div className="theme-toggle-thumb">
                            <span className="material-icons">
                                {DarkMode ? "dark_mode" : "light_mode"}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="settings-container_"/> {/* divider */}

                {/* Notifications toggle */}
                <div className="toggle-container">
                    <h1>Notifications</h1>
                    <div className={`toggle-switch ${Notification ? "dark" : ""}`} onClick={() => setNotification(!Notification)}>
                        <div className="toggle-thumb" />
                    </div>
                </div>

                <div className="settings-container_"/> {/* divider */}
                
                {/* email toggle */}
                <div className="toggle-container">
                    <h1>email</h1>
                    <div className={`toggle-switch ${Email ? "dark" : ""}`} onClick={() => setEmail(!Email)}>
                        <div className="toggle-thumb" />
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

export default Settings;