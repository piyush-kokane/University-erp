import { useState } from "react";
import "./Footer.css";
import ServiceRequest from "../Service_Request/Service_Request";

function Footer(){
    const [ServiceRequestOpen, setServiceRequestOpen] = useState(false);

    return(
        <div className="footer">
            <h1>© 2025 All Rights Reservedㅤ-ㅤWebsite Design and Development by MIT-WPU</h1>
            <h2 onClick={() => setServiceRequestOpen(true)}>Service Request<span className="material-icons">construction</span></h2>
            {ServiceRequestOpen && <ServiceRequest Close={() => setServiceRequestOpen(false)}/>}
        </div>
    );
}

export default Footer;