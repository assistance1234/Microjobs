import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExploreJobs from "./pages/ExploreJobs";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ApplyJob from "./pages/ApplyJob";
import JobDetails from "./pages/JobDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/explore-jobs" element={<ExploreJobs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/apply/:id" element={<ApplyJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;