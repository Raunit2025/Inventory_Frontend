// components/StatsCards.jsx
import React from 'react';

const StatsCards = ({ items, darkMode }) => {
  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);
  const lowStock = items.filter(item => item.status === "Low Stock").length;
  const outOfStock = items.filter(item => item.status === "Out of Stock").length;
  const totalValue = `₹${items.reduce((sum, item) => sum + item.qty * item.price, 0).toFixed(2)}`;

  const cards = [
    { label: 'Total Items', value: totalItems, desc: 'Total items in stock' },
    { label: 'Low Stock Items', value: lowStock, desc: 'Items running low' },
    { label: 'Out of Stock', value: outOfStock, desc: 'Items out of stock', color: 'text-red-500' },
    { label: 'Total Value', value: totalValue, desc: 'Current inventory value' }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`p-4 rounded-md shadow text-center transition-colors duration-500 ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}
        >
          <h3 className="text-sm text-gray-500 dark:text-gray-400">{card.label}</h3>
          <p className={`text-2xl font-bold ${card.color || ''}`}>{card.value}</p>
          <p className="text-xs text-gray-400 dark:text-gray-500">{card.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
