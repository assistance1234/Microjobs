import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axiosInstance.post("/auth/login", {
      email,
      password,
    });

    // ✅ STORE TOKEN
    localStorage.setItem("token", res.data.token);

    // ✅ Store user in context (optional but good)
    login(res.data.user);

    alert("Login Successful ✅");
    navigate("/dashboard");

  } catch (error) {
    alert(error.response?.data?.message || "Login Failed ❌");
  }
};
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-purple-600 text-white px-4 py-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;