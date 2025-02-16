import "./Alert.css";

interface AlertProps {
    message: string;
    Type: "info" | "warning" | "error" | "success"; // Only allow these values
    onClose: () => void;
}

function Alert({ message, Type, onClose }: AlertProps) {
    return (
        <div className="alert-overlay">
            <div className={`alert-box ${Type=="info"?"alert-box-info"
                                        :Type=="warning"?"alert-box-warning"
                                        :Type=="error"?"alert-box-error"
                                        :Type=="success"?"alert-box-success"
                                        :""}`}>

                <span className="material-icons alert-icon">warning</span>
                
                <p>info:</p>
                <p>{message}</p>
                
                <span className="material-icons alert-close" onClick={onClose}>close</span>
            </div>
        </div>
    );
}

export default Alert;
