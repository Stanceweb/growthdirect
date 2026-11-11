import React, { useEffect, useState } from "react";
import axios from "../services/axiosInstance";

const Inquiries = () => {
  const [inquiries, setInquiries] = useState([]);

  // ✅ GET ALL INQUIRIES
  const getInquiries = async () => {
    try {
      const res = await axios.get("/inquiry/all-inquiries");
      setInquiries(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInquiries();
  }, []);

  return (
    <section className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Inquiries</h1>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Message</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {inquiries.length > 0 ? (
              inquiries.map((inq) => (
                <tr key={inq.id} className="border-t hover:bg-gray-50">
                  <td className="p-4">{inq.id}</td>
                  <td className="p-4">{inq.name}</td>
                  <td className="p-4">{inq.email}</td>
                  <td className="p-4">{inq.phone}</td>

                  {/* MESSAGE SHORT */}
                  <td className="p-4">
                    {inq.message.length > 100
                      ? inq.message.substring(0, 80) + "..."
                      : inq.message}
                  </td>

                  <td className="p-4">
                    {new Date(inq.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-6">
                  No inquiries found 🚫
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Inquiries;