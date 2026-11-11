import React, { useEffect, useState } from "react";
import axios from "../services/axiosInstance";


const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const res = await axios.get("/admin/users");

      const filteredUsers = res.data.filter(
        (user) => user.role?.toLowerCase() === "user",
      );

      setUsers(filteredUsers);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // 🔥 Toggle Status
  const toggleStatus = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === "active" ? "inactive" : "active";

      await axios.put(`/admin/user/status/${id}`, {
        status: newStatus,
      });

      setUsers((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, status: newStatus } : user,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="p-4">{user.id}</td>
                <td className="p-4 font-semibold">{user.name}</td>
                <td className="p-4 text-gray-600">{user.email}</td>
                <td className="p-4 text-gray-600">{user.phone || "-"}</td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600">
                    {user.role?.charAt(0).toUpperCase() + user.role?.slice(1)}
                  </span>
                </td>

                {/* 🔥 Status */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === "active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {user.status || "inactive"}
                  </span>
                </td>

                {/* 🔥 Toggle Switch */}
                <td className="p-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={(user.status || "inactive") === "active"}
                      onChange={() => toggleStatus(user.id, user.status)}
                      className="sr-only peer"
                    />

                    {/* Background */}
                    <div className="w-12 h-6 bg-red-400 rounded-full peer-checked:bg-green-500 transition-colors duration-300"></div>

                    {/* Slider */}
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
