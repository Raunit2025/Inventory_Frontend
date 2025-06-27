{/* Stats Cards */}
                    <div className="grid grid-cols-4 gap-4 mb-6">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow text-center">
                            <h3 className="text-sm text-gray-500 dark:text-gray-400">Total Items</h3>
                            <p className="text-2xl font-bold">{totalItems}</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500">Total items in stock</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow text-center">
                            <h3 className="text-sm text-gray-500 dark:text-gray-400">Low Stock Items</h3>
                            <p className="text-2xl font-bold">{items.filter(item => item.status === "Low Stock").length}</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500">Items running low</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow text-center">
                            <h3 className="text-sm text-gray-500 dark:text-gray-400">Out of Stock</h3>
                            <p className="text-2xl font-bold text-red-500">{items.filter(item => item.status === "Out of Stock").length}</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500">Items out of stock</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow text-center">
                            <h3 className="text-sm text-gray-500 dark:text-gray-400">Total Value</h3>
                            <p className="text-2xl font-bold">
                                ₹{items.reduce((sum, item) => sum + item.qty * item.price, 0).toFixed(2)}
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500">Current inventory value</p>
                        </div>
                    </div>

                    {/* Inventory Table */}
                    <div className="bg-white dark:bg-gray-800 rounded-md shadow overflow-x-auto">
                        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                            <div>
                                <h2 className="font-semibold text-lg">Inventory Overview</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Manage your clothing inventory</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <select className="border px-3 py-1 rounded-md dark:bg-gray-700 dark:text-white">
                                    <option>All Items</option>
                                </select>
                                <button className="bg-emerald-500 text-white px-4 py-1 rounded-md">+ Add Item</button>
                            </div>
                        </div>

                        <table className="w-full text-sm">
                            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
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
                                                <td className="px-4 py-2 space-x-2">
                                                    <button
                                                        onClick={() => handleEditClick(item)}
                                                        className="text-blue-600 hover:underline text-sm"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(item.sku)}
                                                        className="text-red-600 hover:underline text-sm"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>