import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Page_Not_Found.css";



function Page_Not_Found() {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const clearSearch = () => setSearchValue("");


  return (
    <div className="PNF">
        <form className="PNF-search-container">
          <input
            type="text"
            placeholder="What are you looking for..."
            className="PNF-search-input"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {searchValue 
            ? <span className="material-icons PNF-search-clear-btn" onClick={clearSearch}>close</span> // if searchValue = true then show clear button
            : <span className="material-icons PNF-search-icon">search</span> // else show search icon
          }
        </form>


        <div className="PNF-container">
            <img src="/Images/mit-logo-1.png" alt="MIT WPU" className="PNF-mit-logo" />
            <h1 className="PNF-title">ERROR-404</h1>
            <h1 className="PNF-message">!!ㅤPAGE NOT FOUNDㅤ!!</h1>
        </div>


        <div className="PNF-footer">
          <div className="PNF-footer-line"/>
          <div className="PNF-footer-links">
            <h1>Go to:</h1>
            <a onClick={() => navigate("/")}>Home</a>
            <p>|</p>
            <a onClick={() => navigate("/dashboard")}>Dashboard</a>
            <p>|</p>
            <a onClick={() => navigate("/elibrary")}>E-Library</a>
          </div>
        </div>
    </div>
  );
}

export default Page_Not_Found;
