// src/pages/PostJob.jsx
import React, { useState } from "react";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    budget: "",
    deadline: "",
    skills: "",
  });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, skills: formData.skills.split(","), postedBy: "client@gmail.com" }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Job posted successfully!");
        setFormData({ title: "", description: "", category: "", budget: "", deadline: "", skills: "" });
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("❌ Server error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 pt-28">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Post a New Job</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input name="title" value={formData.title} onChange={handleChange} placeholder="Job Title" className="w-full border rounded px-4 py-2"/>
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Job Description" rows={4} className="w-full border rounded px-4 py-2"/>
          <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="w-full border rounded px-4 py-2"/>
          <input type="number" name="budget" value={formData.budget} onChange={handleChange} placeholder="Budget (₹)" className="w-full border rounded px-4 py-2"/>
          <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} className="w-full border rounded px-4 py-2"/>
          <input name="skills" value={formData.skills} onChange={handleChange} placeholder="Skills (comma-separated)" className="w-full border rounded px-4 py-2"/>
          <button type="submit" className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800 transition">Post Job</button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;





