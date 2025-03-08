import { useState, useContext } from "react";
import { UserData  } from "../../Context/UserDataContext";
import { AlertSystemContext } from "../Alert/AlertSystem";
import "./Service_Request.css"

interface ServiceRequestProps {
    Close: () => void;
}

function ServiceRequest({Close} : ServiceRequestProps){
    const AlertSystem = useContext(AlertSystemContext);

    const user = useContext(UserData);
    
    const FirstName = user?.FirstName;
    const LastName = user?.LastName;
    const gmail = user?.gmail;

    const [issue, setIssue] = useState("");
    const [files, setFiles] = useState<File[]>([]); // Array of files
    
    const isFormEmpty = (issue.trim().length === 0) && (files.length === 0);
    
    const [closing, setClosing] = useState(false);

    function handleClose() {
        if (isFormEmpty) {
            setClosing(true); // Start fade-out animation
            setTimeout(Close, 300); // delay, Matches animation duration (0.3s) // Call close function after animation
        }
        else {
            AlertSystem?.showAlert("Your Form will close", "warning", 5);
        }
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault(); // prevents refresh of tab

        if (isFormEmpty) {
            AlertSystem?.showAlert("Form cannot be empty", "warning", 5);
        }
        else {
            console.log("Submitting:", { issue, files });
            AlertSystem?.showAlert("Your Response had been submited", "success", 5);
        }
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            setFiles([...files, ...Array.from(e.target.files)]);
            /*
            // The above code can be broken down into simpler steps
            const newFiles = Array.from(e.target.files); // Get the new files selected by the user
            const updatedFiles = [...files, ...newFiles]; // Keep the old files and add the new ones
            setFiles(updatedFiles); // Update the state with the new file list:
            */
        }
    }

    function handleremoveFile(index: number) {
        setFiles(files.filter((_, i) => i !== index));
        /*
        _ → Represents the current item (we don't need it, so we use _)
        i → The index of the current item
        */
    }


    return(
        <>
            <div className={`service-overlay ${closing ? "fade-out" : "fade-in"}`}>
                <div className={`service-container ${closing ? "slide-out" : "slide-in"}`}>
                    <span className="material-icons service-cancle-btn" onClick={handleClose}>close</span>
                    <h1>Service Request</h1>
                    <h3>From: {FirstName} {LastName}, {gmail}</h3>

                    <form className="service-form" onSubmit={handleSubmit}>
                        <textarea
                            placeholder="Describe your issue..."
                            className="scrollbar"
                            onChange={(e) => setIssue(e.target.value)}
                        />

                        <div className="SF-file-upload">
                            {/* Display Uploaded File Names */}
                            <div className="SF-uploaded-files">
                                <p style={{display: files.length == 0 ?"block" :"none"}}>Upload File</p> {/* placeholder */}
                                {files.map((file, index) => (
                                    <div key={index} className="SF-file-item">
                                        <span className="material-icons" onClick={() => handleremoveFile(index)}>close</span>
                                        <p>{file.name}</p>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Upload input & button */}
                            <label htmlFor="file-upload" className="SF-file-upload-btn">+</label>
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleFileChange}
                                style={{display: "none"}}
                            />
                        </div>

                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ServiceRequest;