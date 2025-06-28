// components/Sidebar.jsx
import React from 'react';
import {
  FaBox,
  FaChartBar,
  FaUserCog,
  FaCogs,
  FaTags,
  FaTshirt,
  FaShoppingCart
} from 'react-icons/fa';

const Sidebar = ({ darkMode }) => {
  return (
    <aside className={`w-64 sm:w-60 p-4 shadow-md space-y-6 transition-colors duration-500 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} hidden md:block`}>
      <h2 className="text-2xl font-bold">🛍 ClothingStore</h2>
      <nav className="flex flex-col gap-2">
        <a href="#" className="flex items-center gap-2 p-2 rounded-md text-white bg-emerald-500">
          <FaTshirt /> Inventory
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
          <FaBox /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
          <FaTags /> Categories
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
          <FaUserCog /> Staff Management
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
          <FaShoppingCart /> Sales
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
          <FaChartBar /> Reports & Analytics
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
          <FaCogs /> Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;