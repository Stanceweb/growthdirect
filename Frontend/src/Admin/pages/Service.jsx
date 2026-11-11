import React, { useEffect, useState } from "react";
import axios from "../services/axiosInstance";

const Service = () => {
  const [services, setServices] = useState([]);

  // 👉 form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category_id, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  // 👉 toggle form
  const [showForm, setShowForm] = useState(false);

  // 👉 edit mode
  const [editId, setEditId] = useState(null);

  // get categories
  const getCategories = async () => {
  try {
    const res = await axios.get("/category/all-categories");
    setCategories(res.data);
  } catch (error) {
    console.error(error);
  }
};

  // ✅ GET services
  const getServices = async () => {
    try {
      const res = await axios.get("/service/all-services");
      setServices(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ ADD / UPDATE service
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category_id", category_id);

      if (image) {
        formData.append("image", image);
      }

      if (editId) {
        // 🔥 UPDATE
        await axios.put(`/service/update/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Service updated successfully ✅");
      } else {
        // 🔥 ADD
        await axios.post("/service/add", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Service added successfully ✅");
      }

      // reset
      setTitle("");
      setDescription("");
      setImage(null);
      setCategoryId("");
      setEditId(null);
      setShowForm(false);

      getServices();
    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    }
  };

  // ✅ DELETE service
  const deleteService = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`/service/delete/${id}`);
      alert("Service deleted successfully 🗑️");

      getServices();
    } catch (error) {
      console.error(error);
      alert("Delete failed ❌");
    }
  };

  // ✅ EDIT service
  const editService = (service) => {
    setTitle(service.title);
    setDescription(service.description);
    setCategoryId(service.category_id);
    setEditId(service.id);
    setShowForm(true);
  };

  useEffect(() => {
    getServices();
    getCategories();
  }, []);

  return (
    <section className="Service p-6">
      {/* 🔥 Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Services</h1>

        <button
          onClick={() => {
            setShowForm(true);
            setEditId(null);
            setTitle("");
            setDescription("");
            setCategoryId("");
          }}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Service
        </button>
      </div>

      {/* ✅ FORM */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-6 flex flex-col gap-4 bg-gray-100 p-4 rounded"
        >
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded"
            required
          />

      <select
  value={category_id}
  onChange={(e) => setCategoryId(e.target.value)}
  className="border p-2 rounded"
  required
>
  <option value="">Select Category</option>

  {categories.map((cat) => (
    <option key={cat.id} value={cat.id}>
      {cat.name}
    </option>
  ))}
</select>

          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="border p-2 rounded"
          />

          <div className="flex gap-3">
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
          </div>
        </form>
      )}

      {/* ✅ TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Title</th>
              <th className="p-4">Description</th>
              <th className="p-4">Image</th>
              <th className="p-4">Category</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-t hover:bg-gray-50">
                <td className="p-4">{service.id}</td>
                

                <td className="p-4">
                  {service.image && (
                    <img
                      src={`/uploads/${service.image}`}
                      alt="service"
                      className="w-100 h-30 object-cover rounded"
                    />
                  )}
                </td>

                <td className="p-4 font-bold text-xl">{service.title}</td>
                <td className="p-4 font-light text-sm">{service.description}</td>

                <td className="p-4">{service.category_id}</td>

                <td className="p-4 flex items-center justify-center gap-2">
                  <button
                    onClick={() => editService(service)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteService(service.id)}
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

export default Service;