import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

import Home from "../pages/Home.jsx";
import ExploreJobs from "../pages/ExploreJobs.jsx";
import JobDetails from "../pages/JobDetails.jsx";
import ApplyJob from "../pages/ApplyJob.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Profile from "../pages/Profile.jsx";
import PostJob from "../pages/PostJob.jsx";
import MyOrder from "../pages/MyOrder.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/explore-jobs" element={<ExploreJobs />} />
      <Route path="/job/:id" element={<JobDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Protected Routes */}
      <Route
        path="/apply/:id"
        element={
          <ProtectedRoute>
            <ApplyJob />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/post-job"
        element={
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-orders"
        element={
          <ProtectedRoute>
            <MyOrder />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;