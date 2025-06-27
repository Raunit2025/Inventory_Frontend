// components/Header.jsx
import React from 'react';
import { FaSearch, FaBell, FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ darkMode, setDarkMode, searchTerm, setSearchTerm, dateTime }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {dateTime.toLocaleString('en-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          })}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div
          className={`relative w-64 rounded-md shadow transition-colors duration-500 ${
            darkMode ? 'bg-gray-700' : 'bg-white'
          }`}
        >
          <FaSearch className="absolute top-2.5 left-3 text-gray-500 dark:text-gray-300" />
          <input
            type="text"
            placeholder="Search inventory..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`pl-10 pr-3 py-2 w-full rounded-md bg-transparent transition-colors duration-500 
              ${darkMode ? 'text-white placeholder-gray-300' : 'text-gray-900 placeholder-gray-500'} 
              focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className={`p-2 text-xl shadow rounded-full transition-colors duration-500 ${
            darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
          }`}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <div
          className={`p-2 text-xl shadow rounded-full transition-colors duration-500 ${
            darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
          }`}
        >
          <FaBell />
        </div>

        <div
          className={`pl-3 pr-3 py-2 font-semibold shadow rounded-md transition-colors duration-500 ${
            darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
          }`}
        >
          Store Manager
        </div>
      </div>
    </div>
  );
};

export default Header;
