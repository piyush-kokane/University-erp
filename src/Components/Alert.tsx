import { useState, useEffect } from "react";
import "./Alert.css";

interface AlertProps {
    message: string;
    Type: "info" | "warning" | "error" | "success"; // Only allow these values
    onClose: () => void;
}

function Alert({ message, Type, onClose }: AlertProps) {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => onClose(), 300); // delay, Matches animation duration (0.3s) // Call close function after animation
    };

    return (
        <div className="alert-overlay">
            <div className={`alert-box ${isClosing ? "hidden" : ""} ${
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
