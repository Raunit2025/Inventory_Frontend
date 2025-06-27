import React, { useState, useEffect } from 'react';
import {
    FaBox,
    FaChartBar,
    FaUserCog,
    FaCogs,
    FaTags,
    FaTshirt,
    FaShoppingCart,
    FaBell,
    FaSearch,
    FaMoon,
    FaSun,
    FaEdit,
    FaTrash,
} from 'react-icons/fa';

const Dashboard = () => {
    const [items, setItems] = useState([
        { name: 'Classic White T-Shirt', sku: 'BW-TS-WHT-M-001', brand: 'BasicWear', size: 'M', color: 'White', qty: 45, price: 19.99, location: 'Rack A1', status: 'Good' },
        { name: 'Denim Jeans Slim Fit', sku: 'DC-JN-BLU-32-002', brand: 'DenimCo', size: '32', color: 'Blue', qty: 8, price: 79.99, location: 'Rack B2', status: 'Low Stock' },
        { name: 'Summer Floral Dress', sku: 'FF-DR-PNK-S-003', brand: 'FloralFashion', size: 'S', color: 'Pink', qty: 0, price: 89.99, location: 'Rack C1', status: 'Out of Stock' },
        { name: 'Winter Wool Sweater', sku: 'WW-SW-GRY-L-004', brand: 'WarmWear', size: 'L', color: 'Gray', qty: 25, price: 129.99, location: 'Rack D1', status: 'Good' },
        { name: 'Athletic Running Shorts', sku: 'SM-SH-BLK-M-005', brand: 'SportMax', size: 'M', color: 'Black', qty: 3, price: 34.99, location: 'Rack E1', status: 'Low Stock' },
    ]);

    const [dateTime, setDateTime] = useState(new Date());
    const [searchTerm, setSearchTerm] = useState('');
    const [editingItem, setEditingItem] = useState(null);
    const [editForm, setEditForm] = useState({});
    const [darkMode, setDarkMode] = useState(() => {
        const stored = localStorage.getItem('darkMode');
        return stored ? JSON.parse(stored) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    useEffect(() => {
        const interval = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

    const handleEditClick = (item) => {
        setEditingItem(item.sku);
        setEditForm({ ...item });
    };

    const handleEditChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };

    const handleEditSave = () => {
        if (editForm.qty < 0 || editForm.price < 0) {
            alert("Quantity and price cannot be negative.");
            return;
        }
        setItems(items.map(item =>
            item.sku === editingItem ? { ...editForm, qty: parseInt(editForm.qty), price: parseFloat(editForm.price) } : item
        ));
        setEditingItem(null);
    };

    const handleEditCancel = () => setEditingItem(null);

    const handleDelete = (sku) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (confirmDelete) {
            setItems(items.filter(item => item.sku !== sku));
        }
    };

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <div className="flex">
                <aside className={`w-64 shadow-md p-4 space-y-6 transition-colors duration-500 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
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

                <main className="flex-1 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className="text-2xl font-bold">Inventory Management</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {dateTime.toLocaleString('en-IN', {
                                    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
                                })}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className={`relative w-64 rounded-md shadow transition-colors duration-500 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
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
                                onClick={() => setDarkMode(prev => !prev)}
                                className={`p-2 text-xl shadow rounded-full transition-colors duration-500 
              ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                            >
                                {darkMode ? <FaSun /> : <FaMoon />}
                            </button>

                            <div
                                className={`p-2 text-xl shadow rounded-full transition-colors duration-500 
              ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                            >
                                <FaBell />
                            </div>

                            <div
                                className={`pl-3 pr-3 py-2 font-semibold shadow rounded-md transition-colors duration-500 
              ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                            >
                                Store Manager
                            </div>

                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-4 gap-4 mb-6">
                        {[{
                            label: 'Total Items',
                            value: totalItems,
                            desc: 'Total items in stock'
                        }, {
                            label: 'Low Stock Items',
                            value: items.filter(item => item.status === "Low Stock").length,
                            desc: 'Items running low'
                        }, {
                            label: 'Out of Stock',
                            value: items.filter(item => item.status === "Out of Stock").length,
                            desc: 'Items out of stock',
                            color: 'text-red-500'
                        }, {
                            label: 'Total Value',
                            value: `₹${items.reduce((sum, item) => sum + item.qty * item.price, 0).toFixed(2)}`,
                            desc: 'Current inventory value'
                        }].map((card, i) => (
                            <div
                                key={i}
                                className={`p-4 rounded-md shadow text-center transition-colors duration-500 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
                            >
                                <h3 className="text-sm text-gray-500 dark:text-gray-400">{card.label}</h3>
                                <p className={`text-2xl font-bold ${card.color || ''}`}>{card.value}</p>
                                <p className="text-xs text-gray-400 dark:text-gray-500">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Inventory Table */}
                    <div className={`rounded-md shadow overflow-x-auto transition-colors duration-500 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                            <div>
                                <h2 className="font-semibold text-lg">Inventory Overview</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Manage your clothing inventory</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <select
                                    className={`border px-3 py-1 rounded-md transition-colors duration-500 
              ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                                >
                                    <option>All Items</option>
                                </select>

                                <button className="bg-emerald-500 text-white px-4 py-1 rounded-md">+ Add Item</button>
                            </div>
                        </div>

                        <table className="w-full text-sm">
                            <thead className="rounded-md bg-emerald-500 text-white">
                                <tr>
                                    <th className="text-left px-4 py-2">Item Details</th>
                                    <th className="text-left px-4 py-2">Brand</th>
                                    <th className="text-left px-4 py-2">Size/Color</th>
                                    <th className="text-left px-4 py-2">Quantity</th>
                                    <th className="text-left px-4 py-2">Price</th>
                                    <th className="text-left px-4 py-2">Location</th>
                                    <th className="text-left px-4 py-2">Status</th>
                                    <th className="text-left px-4 py-2">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredItems.map((item, index) => (
                                    <tr key={index} className="border-t dark:border-gray-700">
                                        {editingItem === item.sku ? (
                                            <>
                                                <td className="px-4 py-2">
                                                    <input
                                                        name="name"
                                                        value={editForm.name}
                                                        onChange={handleEditChange}
                                                        className="w-full border px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
                                                    />
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">{item.sku}</div>
                                                </td>
                                                <td className="px-4 py-2">
                                                    <input
                                                        name="brand"
                                                        value={editForm.brand}
                                                        onChange={handleEditChange}
                                                        className="w-full border px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
                                                    />
                                                </td>
                                                <td className="px-4 py-2">
                                                    <input
                                                        name="size"
                                                        value={editForm.size}
                                                        onChange={handleEditChange}
                                                        className="w-full border px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
                                                    />
                                                    <input
                                                        name="color"
                                                        value={editForm.color}
                                                        onChange={handleEditChange}
                                                        className="w-full border px-2 py-1 rounded mt-1 dark:bg-gray-700 dark:text-white"
                                                    />
                                                </td>
                                                <td className="px-4 py-2">
                                                    <input
                                                        name="qty"
                                                        type="number"
                                                        min="0"
                                                        value={editForm.qty}
                                                        onChange={handleEditChange}
                                                        className="w-full border px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
                                                    />
                                                </td>
                                                <td className="px-4 py-2">
                                                    <input
                                                        name="price"
                                                        type="number"
                                                        min="0"
                                                        step="0.01"
                                                        value={editForm.price}
                                                        onChange={handleEditChange}
                                                        className="w-full border px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
                                                    />
                                                </td>
                                                <td className="px-4 py-2">
                                                    <input
                                                        name="location"
                                                        value={editForm.location}
                                                        onChange={handleEditChange}
                                                        className="w-full border px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
                                                    />
                                                </td>
                                                <td className="px-4 py-2">
                                                    <select
                                                        name="status"
                                                        value={editForm.status}
                                                        onChange={handleEditChange}
                                                        className="w-full border px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
                                                    >
                                                        <option value="Good">Good</option>
                                                        <option value="Low Stock">Low Stock</option>
                                                        <option value="Out of Stock">Out of Stock</option>
                                                    </select>
                                                </td>
                                                <td className="px-4 py-2 space-x-2">
                                                    <button
                                                        onClick={handleEditSave}
                                                        className="text-green-600 hover:underline text-sm"
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        onClick={handleEditCancel}
                                                        className="text-gray-600 dark:text-gray-300 hover:underline text-sm"
                                                    >
                                                        Cancel
                                                    </button>
                                                </td>
                                            </>
                                        ) : (
                                            <>
                                                <td className="px-4 py-2">
                                                    <div className="font-medium">{item.name}</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">{item.sku}</div>
                                                </td>
                                                <td className="px-4 py-2">{item.brand}</td>
                                                <td className="px-4 py-2">Size: {item.size}<br />{item.color}</td>
                                                <td className="px-4 py-2">{item.qty}</td>
                                                <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                                                <td className="px-4 py-2">{item.location}</td>
                                                <td className="px-4 py-2">
                                                    <span className={`px-2 py-1 text-xs rounded-full ${item.status === 'Good'
                                                        ? 'bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-900'
                                                        : item.status === 'Low Stock'
                                                            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-900'
                                                            : 'bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-900'
                                                        }`}>
                                                        {item.status}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-2 space-x-3 text-lg">
                                                    <div className="relative group inline-block">
                                                        <button
                                                            onClick={() => handleEditClick(item)}
                                                            className="text-blue-600 hover:text-blue-800 cursor-pointer"
                                                        >
                                                            <FaEdit />
                                                        </button>
                                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition transform bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                                                            Edit
                                                        </div>
                                                    </div>
                                                    <div className="relative group inline-block">
                                                        <button
                                                            onClick={() => handleDelete(item.sku)}
                                                            className="text-red-600 hover:text-red-800 cursor-pointer"
                                                        >
                                                            <FaTrash />
                                                        </button>
                                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition transform bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                                                            Delete
                                                        </div>
                                                    </div>
                                                </td>


                                            </>
                                        )}
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default Dashboard;
