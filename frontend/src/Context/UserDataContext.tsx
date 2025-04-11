import { createContext, ReactNode, useEffect, useState } from "react";


// type def for UserData
interface UserContextType {
  FullName: string;
  FirstName: string;
  LastName: string;
  contact: string;
  gmail: string;
  Prn: string;
  Branch: string;
  Term: string;
  Profile: string;
  Banner: string;
  Biotag: string;
  LongBio: string;
  ShortBio: string;
}

const dataLoading = {
  FullName: "Loading...",
  FirstName: "Loading",
  LastName: "Loading",
  contact: "Loading",
  gmail: "Loading",
  Prn: "Loading...",
  Branch: "Loading...",
  Term: "Loading...",
  Profile: "/Images/profile.png",
  Banner: "/Images/BG.png",
  Biotag: "Loading...",
  LongBio: "Loading...",
  ShortBio: "Loading...",
};

const dataNotLoading = {
  FullName: "N/A",
  FirstName: "N/A",
  LastName: "N/A",
  contact: "xxx-xxxx-xxx",
  gmail: "N/A",
  Prn: "N/A",
  Branch: "N/A",
  Term: "N/A",
  Profile: "/Images/profile.png",
  Banner: "/Images/BG.png",
};

const fetchData = async (key: string, src: string) => {
  try {
      console.log("fetching context")
      // Simulate 2-second server delay
      await new Promise(resolve => setTimeout(resolve, 0));

      const response = await fetch(src);
      const data = await response.json();
      
      // update localStorage
      localStorage.setItem(key, JSON.stringify(data));

      return data;  
  }
  catch (error) {
      console.error(`Error fetching data for ${key}:`, error);

      // Fallback in case of errors
      return dataNotLoading;
  }
};


// Define the User Context type
interface UserContextValue {
  user: UserContextType | null;
  updateUserData: () => void;
}

// Create the context
export const UserData = createContext<UserContextValue | null>(null);


// Provider component
export const UserContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // initialise constants for UserDta, ( key: localStorage-key , src: api-endpoint )
  const [user, setUser] = useState(
    getData("UserData", "http://localhost:5000/api/userdata/Piyush")
  );

  // getData from localStorage if stored else fetch from API
  function getData(key: string, src: string) {
    function callFetch() {
      fetchData(key, src).then((data) => {
        // update user
        setUser(data);
      });
    }

    try {
      const data = localStorage.getItem(key);
      if (data) {
        return JSON.parse(data);
      }
      else {
        callFetch();
        return dataLoading;
      }
    }
    catch (error) {
      console.error(`Error parsing localStorage "${key}":`, error);
      return dataNotLoading;
    }
  };

  // replace saved data of previous login if any
  function updateUserData() {
    setUser(dataLoading); // Updating user will cause a reRender
  }

  return (
    <UserData.Provider value={{ user, updateUserData }}>
      {children}
    </UserData.Provider>
  );
};
