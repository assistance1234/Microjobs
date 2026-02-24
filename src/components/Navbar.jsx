import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const linkStyle = (path) =>
    `relative px-3 py-2 transition duration-300 ${
      location.pathname === path
        ? "text-yellow-300"
        : "hover:text-yellow-200"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold cursor-pointer tracking-wide hover:scale-105 transition duration-300"
        >
          MicroJobs 🚀
        </h1>

        {/* Links */}
        <div className="flex items-center space-x-6 font-medium text-white">
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>

          <Link to="/explore-jobs" className={linkStyle("/explore-jobs")}>
            Explore Jobs
          </Link>

          {user ? (
            <>
              <Link to="/dashboard" className={linkStyle("/dashboard")}>
                Dashboard
              </Link>

              <Link to="/my-orders" className={linkStyle("/my-orders")}>
                My Orders
              </Link>

              <button
                onClick={handleLogout}
                className="bg-white text-purple-700 px-4 py-1.5 rounded-full font-semibold hover:bg-yellow-300 hover:text-black transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={linkStyle("/login")}>
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-white text-purple-700 px-4 py-1.5 rounded-full font-semibold hover:bg-yellow-300 hover:text-black transition duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

