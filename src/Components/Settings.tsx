import React, { useState } from "react";
import Toggle from "react-native-toggle-element";
import "./Settings.css"

function Settings(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    return(
        <div className="settings-overlay">
            <div className="settings-container">
                <span className="material-icons settings-cancle-btn">close</span>
                <h2>Settings</h2>

                {/* Theme toggle */}
                <div className="theme-toggle-container">
                    <h4>Theme</h4>
                    <div className={`toggle-switch ${isDarkMode ? "dark" : ""}`} onClick={() => setIsDarkMode(!isDarkMode)}>
                        <div className="toggle-thumb">
                            <span className="material-icons">
                                {isDarkMode ? "dark_mode" : "light_mode"}
                            </span>
                        </div>
                    </div>
                </div>
                
                {/* Notifications toggle */}
                <div className="theme-toggle-container">
                    <h4>Theme</h4>
                    <div className={`toggle-switch ${isDarkMode ? "dark" : ""}`} onClick={() => setIsDarkMode(!isDarkMode)}>
                        <div className="toggle-thumb">
                            <span className="material-icons">
                                {isDarkMode ? "dark_mode" : "light_mode"}
                            </span>
                        </div>
                    </div>
                </div>
                
                {/* Theme toggle */}
                <div className="theme-toggle-container">
                    <h4>Theme</h4>
                    <div className={`toggle-switch ${isDarkMode ? "dark" : ""}`} onClick={() => setIsDarkMode(!isDarkMode)}>
                        <div className="toggle-thumb">
                            <span className="material-icons">
                                {isDarkMode ? "dark_mode" : "light_mode"}
                            </span>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

export default Settings;