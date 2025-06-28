import React from 'react';

const AddItemModal = ({ darkMode, newItem, setNewItem, setItems, setShowAddModal, items }) => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto px-2 py-4">
      <div className={`w-full max-w-xs sm:max-w-sm md:max-w-md p-4 sm:p-6 rounded-lg shadow-lg transition-colors duration-500 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>

        <h2 className="text-xl font-bold mb-4">Add New Item</h2>

        <div className="space-y-3">
          {[
            { name: "name", label: "Item Name" },
            { name: "sku", label: "SKU" },
            { name: "brand", label: "Brand" },
            { name: "size", label: "Size" },
            { name: "color", label: "Color" },
            { name: "location", label: "Location" }
          ].map(({ name, label }) => (
            <div key={name}>
              <label htmlFor={name} className="block text-sm font-medium mb-1">{label}</label>
              <input
                id={name}
                type="text"
                name={name}
                value={newItem[name]}
                onChange={(e) => setNewItem({ ...newItem, [name]: e.target.value })}
                className={`w-full px-3 py-2 rounded-md border transition-colors duration-300 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'}`}
              />
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="w-full">
              <label htmlFor="qty" className="block text-sm font-medium mb-1">Quantity</label>
              <input
                type="number"
                id="qty"
                name="qty"
                min={0}
                value={newItem.qty}
                onChange={(e) => setNewItem({ ...newItem, qty: parseInt(e.target.value) || 0 })}
                className={`w-full px-3 py-2 rounded-md border transition-colors duration-300 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'}`}
              />
            </div>

            <div className="w-full">
              <label htmlFor="price" className="block text-sm font-medium mb-1">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                min={0}
                step="0.01"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) || 0 })}
                className={`w-full px-3 py-2 rounded-md border transition-colors duration-300 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'}`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium mb-1">Status</label>
            <select
              id="status"
              name="status"
              value={newItem.status}
              onChange={(e) => setNewItem({ ...newItem, status: e.target.value })}
              className={`w-full px-3 py-2 rounded-md border transition-colors duration-300 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'}`}
            >
              <option value="Good">Good</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
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
