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

// Default user data for trial
const sampleData: UserContextType = {
  FullName: "Piyush Jayant Kokane",
  FirstName: "Piyush",
  LastName: "Kokane",
  contact: "9487351892",
  gmail: "google@gmail.com",
  Prn: "1132230781",
  Branch: "SY. B.Sc. CS.",
  Term: "Semester 4",
  Profile: "/User_Data/Profile.jpg",
  Banner: "/User_Data/Banner.png",
  Biotag: "I am proficient programmer",
  LongBio:"I am a student at MIT-WPU with a strong technical background in web development and software engineering. My expertise includes React, TypeScript, Node.js, PHP, MySQL, MongoDB, Tailwind CSS, HTML, CSS, JavaScript, WordPress, and Figma. I have experience working on projects like university ERP systems, online shopping platforms, and productivity apps, focusing on creating efficient and user-friendly applications.",
  ShortBio:"I study at MIT-WPU, and I have technical skills in React, TypeScript, Node.js, PHP, MySQL, MongoDB, Tailwind CSS, HTML, CSS, JavaScript.",
};

// Create the context
export const UserData = createContext<UserContextType | null>(null);

// Provider component
export const UserContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // get data from localStorage, if not set fetch from api
  const [user] = useState<UserContextType>(
    JSON.parse(localStorage.getItem("UserData") || JSON.stringify(sampleData))
  );

  // Update localStorage if not set if not set
  useEffect(() => {
    if (!localStorage.getItem("UserData"))
      localStorage.setItem("UserData", JSON.stringify(user));
  }, []);

  return <UserData.Provider value={user}>{children}</UserData.Provider>;
};
