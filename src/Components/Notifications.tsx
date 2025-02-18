import { useState } from "react";
import "./Notifications.css"


interface NotificationsProps {
    Close: () => void;
}


function Notifications({Close} : NotificationsProps){
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => Close(), 300); // delay, Matches animation duration (0.3s) // Call close function after animation
    };

    return(
        <>
            {/* Overlay when notifications is open */}
            <div className="notifications-overlay" onClick={handleClose} />

            {/* Notifications Panel */}
            <div className={`notifications-panel ${closing ? "hidden" : ""}`}>
                <div className="notifications-header">
                    <h1>Notifications</h1>
                    <span className="material-icons notifications-cancle-btn" onClick={handleClose}>close</span>
                    <span className="material-icons notifications-refresh-btn" onClick={handleClose}>cached</span>
                </div>
                <div>

                </div>
            </div>
        </>
    );
}

export default Notifications;