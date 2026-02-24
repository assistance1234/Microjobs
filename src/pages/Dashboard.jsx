import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const Dashboard = () => {
  const [applications, setApplications] = useState([]);

useEffect(() => {
  const fetchApps = async () => {
    try {
      const res = await axiosInstance.get("/applications/my");
      setApplications(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchApps();
}, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">My Applications</h1>

      {applications.map((app) => (
        <div key={app._id} className="border p-4 mb-3 rounded">
          <h2>{app.jobId?.title}</h2>
          <p>Status: {app.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
