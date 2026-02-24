import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const Apply = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [coverLetter, setCoverLetter] = useState("");
  const [bidAmount, setBidAmount] = useState("");

  const handleApply = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.post("/applications", {
        jobId: id,
        coverLetter,
        bidAmount,
      });

      alert("Application Submitted ✅");
      navigate("/dashboard");

    } catch (error) {
      alert("Failed to apply ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-purple-700 mb-6">
          Apply for this Job
        </h1>

        <form onSubmit={handleApply} className="space-y-4">

          <textarea
            placeholder="Write your cover letter..."
            className="w-full border p-3 rounded-lg"
            rows="4"
            required
            onChange={(e) => setCoverLetter(e.target.value)}
          />

          <input
            type="number"
            placeholder="Your Bid Amount"
            className="w-full border p-3 rounded-lg"
            required
            onChange={(e) => setBidAmount(e.target.value)}
          />

          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
            Submit Application
          </button>

        </form>
      </div>
    </div>
  );
};

export default Apply;






