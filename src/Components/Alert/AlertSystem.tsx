import { useState, createContext, useEffect, ReactNode } from "react";
import  Alert from "./Alert";
import "./Alert.css";



type AlertType = "info" | "warning" | "error" | "success";

interface AlertProp {
    id: number;
    message: string;
    Type: AlertType;
    TimeOut: number;
}

interface AlertContextType {
    showAlert: (message: string, Type?: AlertType, TimeOut?: number) => void;
}

// Create the context
export const AlertSystemContext = createContext<AlertContextType | undefined>(undefined);

// Provider component
export function AlertSystemProvider({ children }: { children: ReactNode }) {
    const [alerts, setAlerts] = useState<AlertProp[]>([]);
    //let alerts: AlertProp[] = [];

    function showAlert(message: string, Type: AlertType = "info", TimeOut: number = 5) {
        const id = Date.now(); // Unique ID
        setAlerts(prev => [...prev, { id, message, Type, TimeOut }]); // Add new alert
        //alerts.push({ id, message, Type, TimeOut })
        console.log("added", alerts);
    }

    function removeAlert(id: number) {
        setAlerts(prev => prev.filter(alert => alert.id !== id)); // Remove alert by ID
        //alerts = alerts.filter(alert => alert.id !== id);
        console.log("removed", alerts);
    }

    return (
        <AlertSystemContext.Provider value={{ showAlert }}>
            {children}

            {/* Alert Display Container */}
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
        </AlertSystemContext.Provider>
    );
}