import React, { useEffect, useState } from "react";
import axios from "../services/axiosInstance";

const Category = () => {
  const [categories, setcategories] = useState([]);

  // 👉 form state
  const [name, setName] = useState("");
  const [type, setType] = useState("services");

  // 👉 toggle form
  const [showForm, setShowForm] = useState(false);

  // 👉 edit mode
  const [editId, setEditId] = useState(null);

  // ✅ GET categories
  const getCategories = async () => {
    try {
      const res = await axios.get("/category/all-categories");
      setcategories(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ ADD / UPDATE category
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        // 🔥 UPDATE
        await axios.put(`/category/update/${editId}`, {
          name,
          type,
        });
        alert("Category updated successfully ✅");
      } else {
        // 🔥 ADD
        await axios.post("/category/add", {
          name,
          type,
        });
        alert("Category added successfully ✅");
      }

      // reset
      setName("");
      setType("services");
      setEditId(null);
      setShowForm(false);

      getCategories();
    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    }
  };

  // ✅ DELETE category
  const deleteCategory = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?",
    );

    if (!confirmDelete) return; // ❌
    try {
      await axios.delete(`/category/delete/${id}`);
      alert("Category deleted successfully 🗑️");

      getCategories();
    } catch (error) {
      console.error(error);
      alert("Delete failed ❌");
    }
  };

  // ✅ EDIT category (fill form)
  const editCategory = (cat) => {
    setName(cat.name);
    setType(cat.type);
    setEditId(cat.id);
    setShowForm(true);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className="Category p-6">
      {/* 🔥 Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Categories</h1>

        <button
          onClick={() => {
            setShowForm(true);
            setEditId(null);
            setName("");
            setType("services");
          }}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Category
        </button>
      </div>

      {/* ✅ FORM */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-6 flex gap-4 bg-gray-100 p-4 rounded"
        >
          <input
            type="text"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-1/3"
            required
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="services">Services</option>
            <option value="products">Products</option>
          </select>

          <button
            type="submit"
            className={`px-4 py-2 rounded text-white ${
              editId ? "bg-yellow-600" : "bg-blue-600"
            }`}
          >
            {editId ? "Update" : "Add"}
          </button>

          <button
            type="button"
            onClick={() => {
              setShowForm(false);
              setEditId(null);
            }}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </form>
      )}

      {/* ✅ TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Type</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-semibold">{cat.id}</td>
                <td className="p-4 font-semibold">{cat.name}</td>
                <td className="p-4 font-semibold">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      cat.type === "services"
                        ? "bg-blue-600 text-white"
                        : "bg-orange-400 text-white"
                    }`}
                  >
                    {cat.type || "services"}
                  </span>
                </td>

                {/* 🔥 ACTION BUTTONS */}
                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => editCategory(cat)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteCategory(cat.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Category;
