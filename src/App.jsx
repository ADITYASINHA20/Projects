import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import QueryInput from "./components/QueryInput";
import QueryResult from "./components/QueryResult";

const App = () => {
  const [queryResult, setQueryResult] = useState("");
  const [darkMode, setDarkMode] = useState(false); // Dark Mode State

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen flex`}>
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="flex flex-col flex-grow items-center justify-center w-full p-6">
        <QueryInput setQueryResult={setQueryResult} darkMode={darkMode} />
        {/* {queryResult && <QueryResult result={queryResult} />} */}
      </div>
    </div>
  );
};

export default App;






