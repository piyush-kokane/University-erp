import { useState, useEffect } from "react";
import "./Alert.css";

interface AlertProps {
    message: string;
    Type: "info" | "warning" | "error" | "success"; // Only allow these values
    TimeOut?: number; // Optional timeout in seconds, if set self close when timeout
    Close: () => void;
}

function Alert({ message, Type, TimeOut, Close }: AlertProps) {
    const [isClosing, setIsClosing] = useState(false);
    const [remainingTime, setRemainingTime] = useState(TimeOut); // Only set if TimeOut exists
    

    // If timeOut is set, timer before self closing
    useEffect(() => {
        if (!TimeOut) return;

        const interval = setInterval(() => {
            setRemainingTime((prev) => {
                if (prev && prev > 1) return prev - 1;
                clearInterval(interval);
                handleClose();
                return 0;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [TimeOut]);


    function handleClose() {
        setIsClosing(true);
        setTimeout(() => Close(), 300); // delay, Matches animation duration (0.3s) // Call close function after animation
    }

    return (
        <div className="alert-overlay">
            <div className={`alert-box ${isClosing ? "slide-out" : "slide-in"} ${
                Type === "info" ? "alert-box-info"
                : Type === "warning" ? "alert-box-warning"
                : Type === "error" ? "alert-box-error"
                : Type === "success" ? "alert-box-success"
                : ""
            }`}>

                <span className="material-icons alert-icon">warning</span>
                
                <p>info:</p>
                <p>{message}</p>
                
                <span className="material-icons alert-close" onClick={handleClose}>close</span>
            </div>
        </div>
    );
}

export default Alert;
