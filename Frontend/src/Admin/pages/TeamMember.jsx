import React, { useEffect, useState } from "react";
import axios from "../services/axiosInstance";

const TeamMembers = () => {
  const [members, setMembers] = useState([]);

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [image, setImage] = useState(null);
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  // ✅ GET
  const getMembers = async () => {
    try {
      const res = await axios.get("/team-member/all-team-members");
      setMembers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ ADD / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("image", image);
    formData.append("facebook", facebook);
    formData.append("instagram", instagram);
    formData.append("twitter", twitter);
    formData.append("linkedin", linkedin);

    try {
      if (editId) {
        await axios.put(`/team-member/update/${editId}`, formData);
        alert("Updated successfully ✅");
      } else {
        await axios.post("/team-member/add", formData);
        alert("Added successfully ✅");
      }

      setName("");
      setDesignation("");
      setImage(null);
      setFacebook("");
      setInstagram("");
      setTwitter("");
      setLinkedin("");
      setEditId(null);
      setShowForm(false);

      getMembers();
    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    }
  };

  // ✅ DELETE
  const deleteMember = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await axios.delete(`/team-member/delete/${id}`);
      getMembers();
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ EDIT
  const editMember = (m) => {
    setName(m.name);
    setDesignation(m.designation);
    setFacebook(m.facebook);
    setInstagram(m.instagram);
    setTwitter(m.twitter);
    setLinkedin(m.linkedin);
    setEditId(m.id);
    setShowForm(true);
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <section className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Team Members</h1>

        <button
          onClick={() => {
            setShowForm(true);
            setEditId(null);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Member
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
            type="text"
            placeholder="Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="border p-2 rounded"
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

          <input
            type="text"
            placeholder="Facebook"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Instagram"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Twitter"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="LinkedIn"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="border p-2 rounded"
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
              <th className="p-4">Designation</th>
              <th className="p-4">Links</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {members.map((m) => (
              <tr key={m.id} className="border-t hover:bg-gray-50">
                <td className="p-4">{m.id}</td>

                <td className="p-4">
                  <img
                    src={`/uploads/${m.image}`}
                    alt=""
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>

                <td className="p-4">{m.name}</td>
                <td className="p-4">{m.designation}</td>

                {/* 🔥 LINKS FIXED */}
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">

                    {m.facebook && (
                      <a
                        href={m.facebook.startsWith("http") ? m.facebook : `https://${m.facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs"
                      >
                        Facebook
                      </a>
                    )}

                    {m.instagram && (
                      <a
                        href={m.instagram.startsWith("http") ? m.instagram : `https://${m.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs"
                      >
                        Instagram
                      </a>
                    )}

                    {m.twitter && (
                      <a
                        href={m.twitter.startsWith("http") ? m.twitter : `https://${m.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-xs"
                      >
                        Twitter
                      </a>
                    )}

                    {m.linkedin && (
                      <a
                        href={m.linkedin.startsWith("http") ? m.linkedin : `https://${m.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-xs"
                      >
                        LinkedIn
                      </a>
                    )}

                  </div>
                </td>

                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => editMember(m)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteMember(m.id)}
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

export default TeamMembers;