import { useState, useContext } from "react";
import { UserData  } from "../../Context/UserDataContext";
import "./Profile.css";
import Footer from "../../Components/Footer/Footer";



function Profile() {
    const [panel, setPanel] = useState("about");

    const user = useContext(UserData);

    let Profile = user?.Profile;
    let Banner = user?.Banner;
    let FullName = user?.FullName;
    let LongBio = user?.LongBio;
    let Biotag = user?.Biotag;

    const UserDocuments = user?.UserDocuments || [];

    const StudentInfo = user?.StudentInfo || [];

    const StudentAddress = user?.StudentAddress || [];

    const Parent1Info = user?.Parent1Info || [];
    const Parent2Info = user?.Parent2Info || [];

    const ProgramInfo = [
        { Key: "PRN", value: user?.Prn },
        { Key: "Branch", value: user?.Branch },
        { Key: "Term", value: user?.Term },
    ];



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
                    {StudentInfo.map((item) => (
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
                    {StudentAddress.map((item) => (
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
                    {Parent1Info.map((item) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
    
                    <div className="page-container-line-2"/>
                    {Parent2Info.map((item) => (
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
                    {StudentInfo.map((item) => (
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
                    {StudentAddress.map((item) => (
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
                    {Parent1Info.map((item) => (
                        <div className="profilepg-sub-container">
                            <h1>{item.Key}</h1>
                            <h2>{item.value}</h2>
                            <div />
                        </div>
                    ))}
    
                    <div className="page-container-line-2"/>
                    {Parent2Info.map((item) => (
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
                {UserDocuments.map((item) => (
                    <div className="page-base-container profilepg-container">
                        <h1>{item.Key}</h1>
                        <div className="page-container-line-1"/>

                        {openDocuments[item.Key] && (
                            <>
                              <img src={item.img} alt={item.Key} />
                              <div className="page-container-line-1"/>
                            </>
                        )}
                        
                        <a href={item.img} target="_blank" rel="noopener noreferrer" className="material-icons">open_in_new</a>
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
