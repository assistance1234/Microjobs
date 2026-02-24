import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axiosInstance.get(`/jobs/${id}`);
        setJob(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJob();
  }, [id]);

  if (!job) {
    return <div className="pt-28 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-purple-700 mb-4">
          {job.title}
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-purple-50 p-4 rounded-xl">
            <p className="text-sm text-gray-500">Budget</p>
            <p className="text-lg font-semibold">₹{job.budget}</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-xl">
            <p className="text-sm text-gray-500">Category</p>
            <p className="text-lg font-semibold">{job.category}</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-xl">
            <p className="text-sm text-gray-500">Timeline</p>
            <p className="text-lg font-semibold">{job.timeline}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Job Description</h2>
          <p className="text-gray-600">{job.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Requirements</h2>
          <p className="text-gray-600">{job.requirements}</p>
        </div>

        <div className="flex justify-between items-center mt-8">
          <Link
            to="/explore-jobs"
            className="text-purple-700 font-medium hover:underline"
          >
            ← Back
          </Link>

          <Link
            to={`/apply/${job._id}`}
            className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700"
          >
            Apply Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default JobDetails;