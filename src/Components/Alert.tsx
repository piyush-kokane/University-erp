import { useState, useEffect } from "react";
import "./Alert.css";

interface AlertProps {
    message: string;
    Type?: "info" | "warning" | "error" | "success"; // Only allow these values, default = info
    TimeOut?: number; // Optional timeout in seconds, if set self close when timeout
    Close: () => void;
}

function Alert({ message, Type="info", TimeOut=5, Close }: AlertProps) {


    function addAlert(){
        
    }

    function AlertBox(){
        const [isClosing, setIsClosing] = useState(false);        
    
        // If timeOut is set, timer before self closing
        useEffect(() => {
            if (!TimeOut) return;
            
            const timer = setTimeout(handleClose, TimeOut * 1000); // Auto-close after TimeOut seconds
            return () => clearTimeout(timer); // Cleanup on unmount
        }, [TimeOut]);
    
    
        function handleClose() {
            setIsClosing(true);
            setTimeout(Close, 300); // delay, Matches animation duration (0.3s) // Call close function after animation
            console.log("debug")
        }

        return(
            <div className={`alert-box ${isClosing ? "slide-out" : "slide-in"} ${Type}`}> {/* here type is name of class */}
                <div className="alert-progress-bar" style={{ animation: `progress ${TimeOut}s linear forwards` }}/> {/* progress bar */}
                <div className="alert-progress-bar-overlay" />                                                      {/* Progress bar overlay */}
                <span className="material-icons alert-icon">{Type}</span>                                           {/* icon */}
                <p><b>{Type}:</b> {message}</p>                                                                     {/* message */}
                <span className="material-icons alert-close" onClick={handleClose}>close</span>                     {/* close button */}
            </div>
        );
    }

    return (
        <div className="alert-container">
            <AlertBox />

        </div>
    );
}

export default Alert;
