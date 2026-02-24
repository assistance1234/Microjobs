import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const ExploreJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axiosInstance.get("/jobs");
        setJobs(res.data);
      } catch (error) {
        console.log("Error fetching jobs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-28 flex justify-center items-center">
        <p className="text-lg font-semibold">Loading jobs...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-purple-700 mb-8">
          Explore Jobs
        </h1>

        {jobs.length === 0 ? (
          <p className="text-gray-500">No jobs available.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {jobs.map((job) => (
              <div
                key={job._id}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 border"
              >
                {/* Title + Budget */}
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-purple-700">
                    {job.title}
                  </h2>

                  <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
                    ₹{job.budget}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mt-3 line-clamp-3">
                  {job.description}
                </p>

                {/* Category + Timeline */}
                <div className="flex justify-between mt-4 text-sm text-gray-500">
                  <span>{job.category}</span>
                  <span>{job.timeline}</span>
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-6">

                  <Link
                    to={`/jobs/${job._id}`}
                    className="text-purple-700 font-medium hover:underline"
                  >
                    View Details →
                  </Link>

                  <Link
                    to={`/apply/${job._id}`}
                    className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    Apply
                  </Link>

                </div>

              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreJobs;