import React, { useState } from "react";
import "./Alert.css";

interface AlertProps {
  message: string;
  onClose: () => void;
}

function Alert({ message, onClose }: AlertProps) {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="alert-overlay">
            <div className="alert-box">
                <h2>Alert</h2>
                <p>{message}</p>
                <button onClick={() => {setIsVisible(false); onClose();}}>OK</button>
            </div>
        </div>
    );
}

export default Alert;
