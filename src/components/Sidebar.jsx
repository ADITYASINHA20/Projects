import React, { useState } from "react";
import { Moon, Sun, Menu, X, MessageSquare } from "lucide-react";

const Sidebar = ({ toggleDarkMode, isDarkMode, clearChat }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* ☰ Menu Button (Hidden When Sidebar is Open) */}
      {!isOpen && (
        <button
          className="p-2 m-2 bg-gray-200 dark:bg-gray-700 rounded fixed left-2 top-2 z-50"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} className="text-gray-900 dark:text-gray-100" />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen w-64 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
      >
        {/* Sidebar Header with ✖ Close Button */}
        <div
          className={`flex justify-between items-center p-4 border-b ${
            isDarkMode ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <h3 className="text-lg font-bold">Data Query Dashboard</h3>
          <button
            className="text-xl hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* New Chat Button */}
        <button
          className={`flex items-center gap-2 px-3 py-1 rounded-md mt-4 mx-4 text-xs font-semibold transition ${
            isDarkMode
              ? "bg-green-700 text-white hover:bg-green-800"
              : "bg-green-500 text-black hover:bg-green-600"
          }`}
          onClick={clearChat}
        >
          <MessageSquare size={16} />
          New Chat
        </button>

        {/* Recent Chats Heading */}
        <h4
          className={`text-sm px-4 mt-4 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Recent Chats
        </h4>

        {/* Query History List */}
        <ul className="mt-2">
          <li
            className={`p-2 border-b cursor-pointer hover:bg-opacity-75 ${
              isDarkMode
                ? "border-gray-700 hover:bg-gray-800"
                : "border-gray-300 hover:bg-gray-200"
            }`}
          >
            Query 1
          </li>
          <li
            className={`p-2 border-b cursor-pointer hover:bg-opacity-75 ${
              isDarkMode
                ? "border-gray-700 hover:bg-gray-800"
                : "border-gray-300 hover:bg-gray-200"
            }`}
          >
            Query 2
          </li>
        </ul>

        {/* Dark Mode Toggle */}
        <div className="absolute bottom-4 left-4 flex items-center">
          <button
            className="p-2 rounded-full transition"
            onClick={toggleDarkMode}
            style={{
              backgroundColor: isDarkMode ? "#4a5568" : "#e2e8f0",
              color: isDarkMode ? "#ffffff" : "#000000",
            }}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
