import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatsCards from '../components/StatsCards';
import InventoryTable from '../components/InventoryTable';
import AddItemModal from '../components/AddItemModal';
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
    const [showAddModal, setShowAddModal] = useState(false);
    const [newItem, setNewItem] = useState({
        name: '',
        sku: '',
        brand: '',
        size: '',
        color: '',
        qty: 0,
        price: 0,
        location: '',
        status: 'Good',
    });


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
                <Sidebar darkMode={darkMode} />

                <main className="flex-1 p-6">
                    <Header
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        dateTime={dateTime}
                    />


                    <StatsCards items={items} darkMode={darkMode} />


                    <InventoryTable
                        items={items}
                        setItems={setItems}
                        filteredItems={filteredItems}
                        editingItem={editingItem}
                        setEditingItem={setEditingItem}
                        editForm={editForm}
                        setEditForm={setEditForm}
                        handleEditChange={handleEditChange}
                        handleEditSave={handleEditSave}
                        handleEditCancel={handleEditCancel}
                        handleEditClick={handleEditClick}  
                        handleDelete={handleDelete}
                        setShowAddModal={setShowAddModal}
                        darkMode={darkMode}
                    />

                    {showAddModal && (
                        <AddItemModal
                            darkMode={darkMode}
                            newItem={newItem}
                            setNewItem={setNewItem}
                            setItems={setItems}
                            setShowAddModal={setShowAddModal}
                            items={items}
                        />
                    )}

                </main>
            </div>
        </div>
    );
};

export default Dashboard;
