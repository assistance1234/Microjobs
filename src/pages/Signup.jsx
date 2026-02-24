import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/auth/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Signup Successful ✅");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Signup Failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-3"
          onChange={(e) => setName(e.target.value)}
        />

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
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
