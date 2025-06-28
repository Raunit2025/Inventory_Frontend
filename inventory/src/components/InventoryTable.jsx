// components/InventoryTable.jsx
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const InventoryTable = ({
  items,
  setItems,
  filteredItems,
  editingItem,
  editForm,
  handleEditChange,
  handleEditSave,
  handleEditCancel,
  handleEditClick,
  handleDelete,
  setShowAddModal,
  darkMode,
}) => {
  return (
    <div className={`rounded-md shadow overflow-x-auto transition-colors duration-500 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
        <div>
          <h2 className="font-semibold text-lg">Inventory Overview</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Manage your clothing inventory</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            className={`border px-3 py-1 rounded-md transition-colors duration-500 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
          >
            <option>All Items</option>
          </select>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded-md"
          >
            + Add Item
          </button>
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
                      className={`w-full border px-2 py-1 rounded transition-colors duration-500 bg-transparent ${darkMode ? 'bg-gray-700 text-white placeholder-gray-300' : 'bg-white text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    <div className="text-xs text-gray-500 dark:text-gray-400">{item.sku}</div>
                  </td>
                  <td className="px-4 py-2">
                    <input
                      name="brand"
                      value={editForm.brand}
                      onChange={handleEditChange}
                      className={`w-full border px-2 py-1 rounded transition-colors duration-500 bg-transparent ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      name="size"
                      value={editForm.size}
                      onChange={handleEditChange}
                      className={`w-full border px-2 py-1 rounded transition-colors duration-500 bg-transparent ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    <input
                      name="color"
                      value={editForm.color}
                      onChange={handleEditChange}
                      className={`w-full border px-2 py-1 rounded mt-1 transition-colors duration-500 bg-transparent ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      name="qty"
                      type="number"
                      min="0"
                      value={editForm.qty}
                      onChange={handleEditChange}
                      className={`w-full border px-2 py-1 rounded transition-colors duration-500 bg-transparent ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
                      className={`w-full border px-2 py-1 rounded transition-colors duration-500 bg-transparent ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      name="location"
                      value={editForm.location}
                      onChange={handleEditChange}
                      className={`w-full border px-2 py-1 rounded transition-colors duration-500 bg-transparent ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </td>
                  <td className="px-4 py-2">
                    <select
                      name="status"
                      value={editForm.status}
                      onChange={handleEditChange}
                      className={`w-full border px-3 py-2 rounded transition-colors duration-500 
    ${darkMode ? 'bg-gray-700 text-white border-black-600' : 'bg-white text-gray-900 border-black-600'} 
    focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                      <option className={darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'} value="Good">Good</option>
                      <option className={darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'} value="Low Stock">Low Stock</option>
                      <option className={darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'} value="Out of Stock">Out of Stock</option>
                    </select>

                  </td>
                  <td className="px-4 py-2 space-x-1 whitespace-nowrap">
                    <button
                      onClick={handleEditSave}
                      className="bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 transition-colors duration-300"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleEditCancel}
                      className="bg-gray-400 text-white text-xs px-2 py-1 rounded hover:bg-gray-500 transition-colors duration-300"
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
                  <td className="px-4 py-2">
                    <div className={`flex items-center justify-between w-24 rounded-md overflow-hidden border transition-colors duration-500 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}>
                      <button
                        onClick={() => setItems(prev => prev.map(i => i.sku === item.sku && i.qty > 0 ? { ...i, qty: i.qty - 1 } : i))}
                        className={`w-8 h-8 text-lg font-bold cursor-pointer transition-colors duration-300 ${darkMode ? 'text-white hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`}
                        title="Decrease"
                      >−</button>
                      <span className={`text-sm font-medium px-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.qty}</span>
                      <button
                        onClick={() => setItems(prev => prev.map(i => i.sku === item.sku ? { ...i, qty: i.qty + 1 } : i))}
                        className={`w-8 h-8 text-lg font-bold cursor-pointer transition-colors duration-300 ${darkMode ? 'text-white hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`}
                        title="Increase"
                      >+</button>
                    </div>
                  </td>
                  <td className="px-4 py-2">₹{item.price.toFixed(2)}</td>
                  <td className="px-4 py-2">{item.location}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${item.status === 'Good'
                      ? 'bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-900'
                      : item.status === 'Low Stock'
                        ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-900'
                        : 'bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-900'}`}>{item.status}</span>
                  </td>
                  <td className="px-4 py-2 space-x-3 text-lg">
                    <div className="relative group inline-block">
                      <button
                        onClick={() => handleEditClick(item)}
                        className="text-blue-700 hover:text-blue-800 cursor-pointer"
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
                        className="text-red-300 hover:text-red-800 cursor-pointer"
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
  );
};

export default InventoryTable;
