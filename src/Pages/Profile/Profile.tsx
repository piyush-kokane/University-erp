import { useState, useEffect, useContext } from "react";
import { UserData  } from "../../Context/UserDataContext";
import "./Profile.css";
import Footer from "../../Components/Footer/Footer";



// type def for UserData
interface UserDataType {
    Key: string;
    value: string;
}


// Sample UserData
const sampleUserDocuments = [
    { Key: "10th Marksheet", value: "/User_Data/10th_Marlsheet.png" },
    { Key: "12th Marksheet", value: "/User_Data/12th_Marlsheet.png" },
    { Key: "Leaving Certificate", value: "/User_Data/Leaving_Certificate.png" },
    { Key: "Signature", value: "/User_Data/Signature.png" },
];

const sampleStudentInfo = [
    { Key: "Gender", value: "Male" },
    { Key: "Date Of Birth", value: "18/2/2005" },
    { Key: "Blood Group", value: "AB+" },
    { Key: "gmail", value: "google@gmail.com" },
    { Key: "Phone No.", value: "8806808503" },
    { Key: "Emergency No.", value: "8806808503" },
    { Key: "Aadhar No.", value: "8806808503" },
    { Key: "Admission Type", value: "CET" },
    { Key: "Admission Status", value: "Active" },
    { Key: "Admission Date", value: "24/3/2023" },
];

const sampleStudentAddress = [
    { Key: "Permanent Address", value: "Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address Address " },
    { Key: "Current Address", value: "Address" },
    { Key: "Area", value: "Area" },
    { Key: "Land Mark", value: "Land Mark" },
    { Key: "City", value: "Pune" },
    { Key: "Pincode", value: "411038" },
    { Key: "State", value: "Maharashtra" },
    { Key: "Country", value: "India" },
];

const sampleParent1Info = [
    { Key: "Guardian Type", value: "Father" },
    { Key: "Fathers's gmail", value: "google@gmail.com" },
    { Key: "Father's Contact", value: "9875642587" },
    { Key: "Father's Profession", value: "Job" },
];
const sampleParent2Info = [
    { Key: "Guardian Type", value: "Mother" },
    { Key: "Mother's gmail", value: "google@gmail.com" },
    { Key: "Mother's Contact", value: "9875642587" },
    { Key: "Mother's Profession", value: "Housewife" },
];


interface UDTF_Type {
    key: string;
    src: string;
}
const UserData_to_fetch = [
    // key is data stored in localStorage, src is  API endpoint
    {key: "UserDocuments", src: "http://localhost:5000/api/userdocuments"},
    {key: "StudentInfo", src: "http://localhost:5000/api/studentinfo"},
    {key: "StudentAddress", src: "http://localhost:5000/api/studentaddress"},
    {key: "Parent1Info", src: "http://localhost:5000/api/parent1info"},
    {key: "Parent2Info", src: "http://localhost:5000/api/parent2info"},
];
  
  
const fetchData = async (item: UDTF_Type) => {
    try {
        ///const response = await fetch(item.src);
        ///const data = await response.json();
        ///return data;
    

        // remove following code once backend is integrated
        if (item.key === "UserDocuments")  return sampleUserDocuments;
        if (item.key === "StudentInfo")  return sampleStudentInfo;   
        if (item.key === "StudentAddress")  return sampleStudentAddress;   
        if (item.key === "Parent1Info")  return sampleParent1Info;   
        if (item.key === "Parent2Info")  return sampleParent2Info;   
    }
    catch (error) {
        console.error(`Error fetching data for ${item.key}:`, error);
        return []; // Return an empty array in case of error
    }
};


function Profile() {
    const [panel, setPanel] = useState("about");

    const user = useContext(UserData);

    let Profile = user?.Profile;
    let Banner = user?.Banner;
    let FullName = user?.FullName;
    let LongBio = user?.LongBio;
    let Biotag = user?.Biotag;

    const ProgramInfo = [
        { Key: "PRN", value: user?.Prn },
        { Key: "Branch", value: user?.Branch },
        { Key: "Term", value: user?.Term },
    ];


    // initialise constants for UserDta, get data from localStorage if stored
    const [UserDocuments, setUserDocuments] = useState(
        JSON.parse(localStorage.getItem("UserDocuments") || "[]"));
    
    const [StudentInfo, setStudentInfo] = useState(
        JSON.parse(localStorage.getItem("StudentInfo") || "[]"));

    const [StudentAddress, setStudentAddress] = useState(
        JSON.parse(localStorage.getItem("StudentAddress") || "[]"));

    const [Parent1Info, setParent1Info] = useState(
        JSON.parse(localStorage.getItem("Parent1Info") || "[]"));

    const [Parent2Info, setParent2Info] = useState(
        JSON.parse(localStorage.getItem("Parent2Info") || "[]"));


    // Update UserData & localStorage if not set
    useEffect(() => {
      UserData_to_fetch.forEach((item: UDTF_Type) => {
        if (!localStorage.getItem(item.key)) {
          fetchData(item).then((data) => {
            // update localStorage
            localStorage.setItem(item.key, JSON.stringify(data));

            // determine which variable to update
            if (item.key === "UserDocuments") setUserDocuments(data);
            if (item.key === "StudentInfo") setStudentInfo(data);
            if (item.key === "StudentAddress") setStudentAddress(data);
            if (item.key === "Parent1Info") setParent1Info(data);
            if (item.key === "Parent2Info") setParent2Info(data);
          });
        }
      });
    }, []);

    
    function About() {    
        return (
            <>
                {/* Content panel 1 */}
                <div className="page-base-container profilepg-about">
                    <h1>About Me</h1>
                    <h2>{Biotag}</h2>
                    <p>{LongBio}</p>
                    
                    <div className="page-container-line-2"/>
                    {ProgramInfo.map((item) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
                </div>
    
    
                {/* Content panel 2 */}
                <div className="page-base-container profilepg-container">
                    <h1>More Information</h1>
                    <div className="page-container-line-1"/>
                    {StudentInfo.map((item: UserDataType) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
                </div>
    
    
                {/* Content panel 3 */}
                <div className="page-base-container profilepg-container">
                    <h1>Student Address</h1>
                    <div className="page-container-line-1"/>
                    {StudentAddress.map((item: UserDataType) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
                </div>
    
    
                {/* Content panel 4 */}
                <div className="page-base-container profilepg-container">
                    <h1>Parent/Guardian Information</h1>
                    <div className="page-container-line-1"/>
                    {Parent1Info.map((item: UserDataType) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
    
                    <div className="page-container-line-2"/>
                    {Parent2Info.map((item: UserDataType) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
                </div>
            </>
        );
    }    

    function Cource() {    
        return (
            <>
                {/* Content panel 1 */}
                <div className="page-base-container profilepg-about">
                    <h1>Cource</h1>
                    <h2>{Biotag}</h2>
                    <p>{LongBio}</p>
                    
                    <div className="page-container-line-2"/>
                    {ProgramInfo.map((item) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
                </div>
    
    
                {/* Content panel 2 */}
                <div className="page-base-container profilepg-container">
                    <h1>More Information</h1>
                    <div className="page-container-line-1"/>
                    {StudentInfo.map((item: UserDataType) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
                </div>
    
    
                {/* Content panel 3 */}
                <div className="page-base-container profilepg-container">
                    <h1>Student Address</h1>
                    <div className="page-container-line-1"/>
                    {StudentAddress.map((item: UserDataType) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
                </div>
    
    
                {/* Content panel 4 */}
                <div className="page-base-container profilepg-container">
                    <h1>Parent/Guardian Information</h1>
                    <div className="page-container-line-1"/>
                    {Parent1Info.map((item: UserDataType) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
    
                    <div className="page-container-line-2"/>
                    {Parent2Info.map((item: UserDataType) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
                </div>
            </>
        );
    }  

    function Documents() {  
        const [openDocuments, setOpenDocuments] = useState<{ [key: string]: boolean }>({});

        function toggleDocument(key: string) {
            setOpenDocuments(prev => ({
                ...prev,
                [key]: !prev[key] // Toggle the visibility of the clicked document
            }));
        }
        
        
        return (
            <>
                {/* Content panel 2 */}
                {UserDocuments.map((item: UserDataType) => (
                    <div className="page-base-container profilepg-container">
                        <h1>{item.Key}</h1>
                        <div className="page-container-line-1"/>

                        {openDocuments[item.Key] && (
                            <>
                              <img src={item.value} alt={item.Key} />
                              <div className="page-container-line-1"/>
                            </>
                        )}
                        
                        <a href={item.value} target="_blank" rel="noopener noreferrer" className="material-icons">open_in_new</a>
                        <span onClick={() => toggleDocument(item.Key)} >
                            { openDocuments[item.Key]
                            ? "Hide"
                            : "Show"
                        } </span>
                    </div>
                ))}
            </>
        );
    }        



    return (
        <div className="page-container">
            <div className="page-main-container">
                <div className="profilepg-container-0">
                    <img className="profilepg-banner" src={Banner}></img>
                    {/* Profile & navigation panel */}
                    <div className="profilepg-navbar">
                        <img src={Profile} />
                        <h1>{FullName}</h1>
                        <div className="profilepg-navbar-options">
                            <h2 className={panel === "about" ? "active" : ""} onClick={() => setPanel("about")}>About</h2>
                            <h2 className={panel === "cource" ? "active" : ""} onClick={() => setPanel("cource")}>Cource Progress</h2>
                            <h2 className={panel === "documents" ? "active" : ""} onClick={() => setPanel("documents")}>Documents</h2>
                        </div>
                        <span className="material-icons">more_vert</span>
                    </div>
                </div>

                {/* Content panel */}
                <div className="page-parent-base-container">
                    
                    {panel === "about" // if panel = about then render About panel
                    ? <About />

                    : panel === "cource"  // if panel = cource then render Cource panel
                    ? <Cource />

                    // else render Documents panel
                    : <Documents />
                    }

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
