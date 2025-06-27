import React from 'react';

const AddItemModal = ({ darkMode, newItem, setNewItem, setItems, setShowAddModal, items }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`w-full max-w-md p-6 rounded-lg shadow-lg transition-colors duration-500 
        ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>

        <h2 className="text-xl font-bold mb-4">Add New Item</h2>

        <div className="space-y-3">
          {["name", "sku", "brand", "size", "color", "location"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={newItem[field]}
              onChange={(e) => setNewItem({ ...newItem, [field]: e.target.value })}
              className={`w-full px-3 py-2 rounded-md border transition-colors duration-300 
                ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'}`}
            />
          ))}

          <div className="flex gap-2">
            <input
              type="number"
              name="qty"
              placeholder="Quantity"
              min={0}
              value={newItem.qty}
              onChange={(e) => setNewItem({ ...newItem, qty: parseInt(e.target.value) || 0 })}
              className={`w-1/2 px-3 py-2 rounded-md border transition-colors duration-300 
                ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'}`}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              min={0}
              step="0.01"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) || 0 })}
              className={`w-1/2 px-3 py-2 rounded-md border transition-colors duration-300 
                ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'}`}
            />
          </div>

          <select
            name="status"
            value={newItem.status}
            onChange={(e) => setNewItem({ ...newItem, status: e.target.value })}
            className={`w-full px-3 py-2 rounded-md border transition-colors duration-300 
              ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'}`}
          >
            <option>Good</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>

        <div className="flex justify-end mt-4 gap-2">
          <button
            onClick={() => setShowAddModal(false)}
            className="px-4 py-2 rounded-md text-sm font-semibold bg-gray-400 hover:bg-gray-500 text-white"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (!newItem.name || !newItem.sku) {
                alert("Name and SKU are required");
                return;
              }
              setItems([...items, newItem]);
              setShowAddModal(false);
              setNewItem({
                name: '',
                sku: '',
                brand: '',
                size: '',
                color: '',
                qty: 0,
                price: 0,
                location: '',
                status: 'Good'
              });
            }}
            className="px-4 py-2 rounded-md text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
