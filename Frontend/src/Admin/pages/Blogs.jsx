import React, { useEffect, useState } from "react";
import axios from "../services/axiosInstance";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  // 👉 form state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author_id, setAuthorId] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [image, setImage] = useState(null);

  // 👉 UI state
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  // 👉 search + pagination
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // ✅ GET blogs (paginated)
  const getBlogs = async () => {
    try {
      const res = await axios.get(
        `/blogs/paginated?page=${page}&limit=5`
      );
      setBlogs(res.data.blogs || res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ SEARCH
const searchBlogs = async () => {
  try {
    const res = await axios.get(`/blogs/search?keyword=${search}`);
    setBlogs(res.data);
  } catch (error) {
    console.error(error);
  }
};

  // ✅ ADD / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("author_id", author_id);
      formData.append("category_id", category_id);
      if (image) formData.append("image", image);

      if (editId) {
        await axios.put(`/blogs/update/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Blog updated ✅");
      } else {
        await axios.post("/blogs/add", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Blog added ✅");
      }

      // reset
      setTitle("");
      setContent("");
      setAuthorId("");
      setCategoryId("");
      setImage(null);
      setEditId(null);
      setShowForm(false);

      getBlogs();
    } catch (error) {
      console.error(error);
      alert("Error ❌");
    }
  };

  // ✅ DELETE
  const deleteBlog = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    try {
      await axios.delete(`/blogs/delete/${id}`);
      alert("Deleted 🗑️");
      getBlogs();
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ EDIT
  const editBlog = (b) => {
    setTitle(b.title);
    setContent(b.content);
    setAuthorId(b.author_id);
    setCategoryId(b.category_id);
    setEditId(b.id);
    setShowForm(true);
  };

useEffect(() => {
  const delay = setTimeout(() => {
    if (search.trim()) {
      searchBlogs();
    } else {
      getBlogs();
    }
  }, 300);

  return () => clearTimeout(delay);
}, [search]);

  return (
    <section className="p-6">
      {/* 🔥 Header */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Blogs</h1>

        <button
          onClick={() => {
            setShowForm(true);
            setEditId(null);
            setTitle("");
            setContent("");
            setAuthorId("");
            setCategoryId("");
          }}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Blog
        </button>
      </div>

      {/* 🔍 SEARCH */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search blog..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-1/3"
        />
      <button
  onClick={searchBlogs}
  className="bg-blue-600 text-white px-4 py-2 rounded"
>
  Search
</button>
        <button
          onClick={getBlogs}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>

      {/* ✅ FORM */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-4 rounded mb-6 flex flex-col gap-3"
        >
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <input
            type="number"
            placeholder="Author ID"
            value={author_id}
            onChange={(e) => setAuthorId(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <input
            type="number"
            placeholder="Category ID"
            value={category_id}
            onChange={(e) => setCategoryId(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="border p-2 rounded"
          />

          <div className="flex gap-2">
            <button
              className={`px-4 py-2 text-white rounded ${
                editId ? "bg-yellow-600" : "bg-blue-600"
              }`}
            >
              {editId ? "Update" : "Add"}
            </button>

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* ✅ TABLE */}
      <div className="bg-white shadow rounded">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Content</th>
              <th className="p-3">Author</th>
              <th className="p-3">Category</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((b) => (
              <tr key={b.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{b.id}</td>

                <td className="p-3">
                  {b.image && (
                    <img
                      src={`/uploads/${b.image}`}
                      className="w-80 h-30 object-cover rounded"
                    />
                  )}
                </td>

                <td className="p-3 font-bold text-xl">{b.title}</td>

                <td className="p-3 text-sm text-gray-600 max-w-xs">
                  {b.content
                    ? b.content.replace(/<[^>]+>/g, "").slice(0, 80) + "..."
                    : ""}
                </td>

                <td className="p-3 text-blue-600 font-semibold">
                  {b.author_name || "N/A"}
                </td>

                <td className="p-3">{b.category_id}</td>

                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => editBlog(b)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteBlog(b.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔢 PAGINATION */}
      <div className="flex gap-3 mt-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Prev
        </button>

        <span className="px-3 py-1 bg-gray-200 rounded">
          Page {page}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Blog;