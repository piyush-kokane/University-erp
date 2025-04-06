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

const defaultData = {
  FullName: "Loading",
  FirstName: "Loading",
  LastName: "Loading",
  contact: "Loading",
  gmail: "Loading",
  Prn: "Loading",
  Branch: "Loading",
  Term: "Loading",
  Profile: "/Images/profile.png",
  Banner: "/Images/BG.png",
  Biotag: "Loading",
  LongBio: "Loading",
  ShortBio: "Loading",
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

const fetchData = async () => {
  try {
    // Simulate 2-second server delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    const response = await fetch("http://localhost:5000/api/userdata");
    const data = await response.json();
    return data;

    // remove following code once backend is integrated
    // return sampleData;
  }
  catch (error) {
    console.error("Error fetching user data:", error);
    return dataNotLoading; // Fallback in case of errors
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
  // initialise constants for UserDta, get data from localStorage if stored
  const [user, setUser] = useState(
    getParsedLocalStorage("UserData", defaultData)
  );

    // Utility to safely parse JSON from localStorage
    function getParsedLocalStorage(key: string, fallback: any) {
      try {
        const data = localStorage.getItem(key);
        if (data) {
          console.log(localStorage)
          return JSON.parse(data);
        }
        else {
          console.log("defaultData")
          return defaultData;
        }
      }
      catch (err) {
          console.warn(`Error parsing localStorage "${key}":`, err);
          return fallback;
      }
  };

  // Update UserData & localStorage if not set
  useEffect(() => {
    if (!localStorage.getItem("UserData")) {
      //updateUserData();
    }
  }, []);

  // Update UserData & localStorage
  function updateUserData() {
    fetchData().then((data) => {
      localStorage.setItem("UserData", JSON.stringify(data));
      setUser(data);
    });
  }

  return (
    <UserData.Provider value={{ user, updateUserData }}>
      {children}
    </UserData.Provider>
  );
};
