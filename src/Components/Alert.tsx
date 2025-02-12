import React, { useState } from "react";
import "./Alert.css";

interface AlertProps {
    message: string;
    Type: string;
    onClose: () => void;
}

function Alert({ message, Type, onClose }: AlertProps) {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <>
            <div className="alert-overlay">
                <div className="alert-box">
                    <div className="alert-icon-holder">
                        <span className="material-icons alert-icon">warning</span>
                    </div>
                    
                    <p>{message}</p>
                    
                    <span className="material-icons alert-close" onClick={() => {setIsVisible(false); onClose();}}>close</span>
                </div>
            </div>
        </>
    );
}

export default Alert;
