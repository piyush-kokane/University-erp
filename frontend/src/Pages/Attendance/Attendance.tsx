import React, { useState } from "react";
import "./Attendance.css";


function Attendance() {
    const [selected, setSelected] = useState("");

    return (
        <>
            <div className="page-container">
                <div className="page-main-container">
                    <div className="page-parent-base-container">

                        <label>Select an option:</label>
                        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
                            <option value="">Choose...</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                        </select>
                        <p>Selected: {selected}</p>

                    </div>
                </div>
            </div>
        </>
    );
  }

  export default Attendance;