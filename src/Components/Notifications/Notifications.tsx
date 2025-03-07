import { useState, useContext } from "react";
import { UserData  } from "../../Context/UserDataContext";
import "./Notifications.css"


interface NotificationsProps {
    Close: () => void;
}


function Notifications({Close} : NotificationsProps){
    const user = useContext(UserData);

    const notifications = user?.notifications || [];
    const circular = user?.circular || [];

    const allNotifications = notifications.concat(circular);

    const [closing, setClosing] = useState(false);

    function handleClose() {
        setClosing(true); // Start fade-out animation
        setTimeout(() => Close(), 300); // delay, Matches animation duration (0.3s) // Call close function after animation
    }

    return(
        <>
            {/* Overlay when notifications is open */}
            <div className={`notifications-overlay ${closing ? "fade-out" : "fade-in"}`} onClick={handleClose} />

            {/* Notifications Panel */}
            <div className={`notifications-panel ${closing ? "slide-out" : "slide-in"}`}>
                <div className="notifications-header">
                    <h5>Notifications</h5>
                    <span className="material-icons notifications-cancle-btn" onClick={handleClose}>close</span>
                    <span className="material-icons notifications-refresh-btn" onClick={handleClose}>cached</span>
                </div>
                
                <div className="notifications-container scrollbar">
                    {allNotifications.map((item) => (
                        <div  className={"notifications-item"} >
                            <h1>{item.title}</h1>
                            <p>{item.message}</p>
                            <h2>{item.date}</h2>
                            <h3>{item.time}</h3>
                            <div />
                        </div>
                    ))}
                </div>

                <div className="notifications-footer">
                    <h1>See All ➜</h1>
                </div>
            </div>
        </>
    );
}

export default Notifications;