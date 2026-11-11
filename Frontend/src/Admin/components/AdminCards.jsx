import React from "react";

const AdminCards = ({ heading, count, icon, bg }) => {
  return (
    <div
      className={`rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ${bg}`}
    >
      {/* Top */}
      <div className="flex justify-between items-center">
        <h2 className="text-gray-600 text-[18px] font-bold">{heading}</h2>
        <div className="text-2xl text-gray-700">{icon}</div>
      </div>

      {/* Count */}
      <h1 className="text-3xl font-bold mt-4 text-gray-900">{count}</h1>
    </div>
  );
};

export default AdminCards;