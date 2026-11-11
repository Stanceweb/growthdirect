import React, { useEffect, useState } from "react";
import axios from "../services/axiosInstance";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  // ✅ GET
  const getTestimonials = async () => {
    try {
      const res = await axios.get("/testimonial/all-testimonials");
      setTestimonials(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ ADD / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("feedback", feedback);
    formData.append("rating", rating);
    formData.append("image", image);

    try {
      if (editId) {
        await axios.put(`/testimonial/update/${editId}`, formData);
        alert("Updated successfully ✅");
      } else {
        await axios.post("/testimonial/add", formData);
        alert("Added successfully ✅");
      }

      setName("");
      setFeedback("");
      setRating("");
      setImage(null);
      setEditId(null);
      setShowForm(false);

      getTestimonials();
    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    }
  };

  // ✅ DELETE
  const deleteTestimonial = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await axios.delete(`/testimonial/delete/${id}`);
      getTestimonials();
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ EDIT
  const editTestimonial = (t) => {
    setName(t.name);
    setFeedback(t.feedback);
    setRating(t.rating);
    setEditId(t.id);
    setShowForm(true);
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <section className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Testimonials</h1>

        <button
          onClick={() => {
            setShowForm(true);
            setEditId(null);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Testimonial
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-6 grid grid-cols-3 gap-4 bg-gray-100 rounded p-4"
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <input
            type="number"
            placeholder="Rating (1-5)"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="border p-2 rounded"
            min="1"
            max="5"
            required
          />

          {/* IMAGE */}
          <div className="border-2 border-dashed rounded relative cursor-pointer flex flex-col items-center justify-center">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />

            {!image ? (
              <>
                <p className="font-semibold text-gray-600">
                  + Add Profile Photo
                </p>
                <p className="text-xs text-gray-400">Click to upload</p>
              </>
            ) : (
              <>
                <p className="text-green-600 font-semibold">✅ Uploaded</p>
                <p className="text-xs text-gray-500">{image.name}</p>
              </>
            )}
          </div>

          <textarea
            placeholder="Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="border p-2 rounded col-span-3"
            rows="3"
            required
          />

          <div className="col-span-3 flex gap-3">
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
              onClick={() => setShowForm(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Feedback</th>
              <th className="p-4">Rating</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {testimonials.map((t) => (
              <tr key={t.id} className="border-t hover:bg-gray-50">
                <td className="p-4">{t.id}</td>

                <td className="p-4">
                  <img
                    src={`/uploads/${t.image}`}
                    alt=""
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </td>

                <td className="p-4">{t.name}</td>

                <td className="p-4">
                  {t.feedback.length > 60
                    ? t.feedback.substring(0, 60) + "..."
                    : t.feedback}
                </td>

                {/* ⭐ RATING */}
                <td className="p-4 text-yellow-500 text-lg">
                  {"⭐".repeat(t.rating)}
                </td>

                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => editTestimonial(t)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteTestimonial(t.id)}
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

export default Testimonials;