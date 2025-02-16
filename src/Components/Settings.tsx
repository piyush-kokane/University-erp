import { useState } from "react";
import "./Settings.css"


interface SettingsProps {
    Close: () => void;
}


function Settings({Close} : SettingsProps){
    const [DarkMode, setDarkMode] = useState(false);
    const [Notification, setNotification] = useState(false);
    const [Email, setEmail] = useState(false);

    return(
        <div className="settings-overlay">
            <div className="settings-container">
                <span className="material-icons settings-cancle-btn" onClick={Close}>close</span>
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