import { useState } from "react";
import { Alert } from "./Alert";
import "./Alert.css";



export default function AlertSystem() {
    const [alerts, setAlerts] = useState<{ id: number; message: string; Type: "info" | "warning" | "error" | "success"; TimeOut: number }[]>([]);

    function showAlert(message: string, Type: "info" | "warning" | "error" | "success" = "info", TimeOut: number = 5) {
        const id = alerts.length + 1; // Unique ID based on current alerts count
        setAlerts(prev => [...prev, { id, message, Type, TimeOut }]); // Add new alert
    }

    function removeAlert(id: number) {
        setAlerts(prev => prev.filter(alert => alert.id !== id)); // Remove alert by ID
    }

    return (
        <div>
            <button onClick={() => showAlert("This is an alert!", "warning", 5)}>Show Alert</button>
            
            <div className="alert-container">
                {alerts.map(alert => (
                    <Alert
                        key={alert.id}
                        message={alert.message}
                        Type={alert.Type}
                        TimeOut={alert.TimeOut}
                        Close={() => removeAlert(alert.id)}
                    />
                ))}
            </div>
        </div>
    );
}
