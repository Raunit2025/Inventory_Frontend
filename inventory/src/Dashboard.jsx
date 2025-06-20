import React from 'react';
import { useState, useEffect } from 'react';
import { FaBox, FaChartBar, FaUserCog, FaCogs, FaTags, FaTshirt, FaShoppingCart, FaBell, FaSearch } from 'react-icons/fa';


const Dashboard = () => {
  const [items, setItems] = useState([
    { name: 'Classic White T-Shirt', sku: 'BW-TS-WHT-M-001', brand: 'BasicWear', size: 'M', color: 'White', qty: 45, price: 19.99, location: 'Rack A1', status: 'Good' },
    { name: 'Denim Jeans Slim Fit', sku: 'DC-JN-BLU-32-002', brand: 'DenimCo', size: '32', color: 'Blue', qty: 8, price: 79.99, location: 'Rack B2', status: 'Low Stock' },
    { name: 'Summer Floral Dress', sku: 'FF-DR-PNK-S-003', brand: 'FloralFashion', size: 'S', color: 'Pink', qty: 0, price: 89.99, location: 'Rack C1', status: 'Out of Stock' },
    { name: 'Winter Wool Sweater', sku: 'WW-SW-GRY-L-004', brand: 'WarmWear', size: 'L', color: 'Gray', qty: 25, price: 129.99, location: 'Rack D1', status: 'Good' },
    { name: 'Athletic Running Shorts', sku: 'SM-SH-BLK-M-005', brand: 'SportMax', size: 'M', color: 'Black', qty: 3, price: 34.99, location: 'Rack E1', status: 'Low Stock' },
  ]);

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

  const handleDelete = (sku) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      setItems(items.filter(item => item.sku !== sku));
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">🛍 ClothingStore</h2>
        <nav className="flex flex-col gap-2">
          <a href="#" className="flex items-center gap-2 p-2 rounded-md text-white bg-emerald-500">
            <FaTshirt /> Inventory
          </a>
          <a href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <FaBox /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <FaTags /> Categories
          </a>
          <a href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <FaUserCog /> Staff Management
          </a>
          <a href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <FaShoppingCart /> Sales
          </a>
          <a href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <FaChartBar /> Reports & Analytics
          </a>
          <a href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <FaCogs /> Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Inventory Management</h1>
            <p className="text-sm text-gray-500">
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
            <div className="relative">
              <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search inventory..."
                className="pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <FaBell className="text-xl" />
            <div className="font-semibold">Store Manager</div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-md shadow text-center">
            <h3 className="text-sm text-gray-500">Total Items</h3>
            <p className="text-2xl font-bold">{totalItems}</p>
            <p className="text-xs text-gray-400">Total items in stock</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow text-center">
            <h3 className="text-sm text-gray-500">Low Stock Items</h3>
            <p className="text-2xl font-bold">{items.filter(item => item.qty <= 5 && item.qty > 0).length}</p>
            <p className="text-xs text-gray-400">Items running low</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow text-center">
            <h3 className="text-sm text-gray-500">Out of Stock</h3>
            <p className="text-2xl font-bold text-red-500">{items.filter(item => item.qty === 0).length}</p>
            <p className="text-xs text-gray-400">Items out of stock</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow text-center">
            <h3 className="text-sm text-gray-500">Total Value</h3>
            <p className="text-2xl font-bold">
              ${items.reduce((sum, item) => sum + item.qty * item.price, 0).toFixed(2)}
            </p>
            <p className="text-xs text-gray-400">Current inventory value</p>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-md shadow overflow-x-auto">
          <div className="flex justify-between items-center p-4 border-b">
            <div>
              <h2 className="font-semibold text-lg">Inventory Overview</h2>
              <p className="text-sm text-gray-500">Manage your clothing inventory</p>
            </div>
            <div className="flex items-center gap-2">
              <select className="border px-3 py-1 rounded-md">
                <option>All Items</option>
              </select>
              <button className="bg-emerald-500 text-white px-4 py-1 rounded-md">+ Add Item</button>
            </div>
          </div>

          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
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
              {items.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.sku}</div>
                  </td>
                  <td className="px-4 py-2">{item.brand}</td>
                  <td className="px-4 py-2">Size: {item.size}<br />{item.color}</td>
                  <td className="px-4 py-2">{item.qty}</td>
                  <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                  <td className="px-4 py-2">{item.location}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.status === 'Good'
                        ? 'bg-green-100 text-green-700'
                        : item.status === 'Low Stock'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(item.sku)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
