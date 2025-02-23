import React, {useState} from "react";
import "./Page_Not_Found.css";

interface PNF_Props {
  setonUnknown: (value: boolean) => void;
}

function Page_Not_Found({ setonUnknown }: PNF_Props) {
  const [searchValue, setSearchValue] = useState("");
  const clearSearch = () => setSearchValue("");

  setonUnknown(true);

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
            <a href="/">Home</a>
            <p>|</p>
            <a href="/dashboard">Dashboard</a>
            <p>|</p>
            <a href="">E-Library</a>
          </div>
        </div>
    </div>
  );
}

export default Page_Not_Found;
