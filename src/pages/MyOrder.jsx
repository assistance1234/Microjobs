// src/pages/MyOrders.jsx
import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

// Dummy orders (Client = posted jobs, Worker = applied jobs)
const dummyOrders = [
  { id: 1, jobTitle: "Design Poster for Tech Fest", status: "In Progress", amount: "₹300", date: "2025-08-26" },
  { id: 2, jobTitle: "React Landing Page", status: "Completed", amount: "₹800", date: "2025-08-10" },
  { id: 3, jobTitle: "Write Blog on React", status: "Pending", amount: "₹250", date: "2025-08-20" },
];

const MyOrders = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-1 pt-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-purple-700 mb-6">My Orders</h1>

          {dummyOrders.length === 0 ? (
            <p className="text-gray-600 text-center mt-10">
              You have no orders yet.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {dummyOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition"
                >
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{order.jobTitle}</h2>
                    <p className="text-gray-500 text-sm mt-1">
                      Ordered on: {order.date}
                    </p>
                    <p className="text-gray-700 mt-2 font-medium">Amount: {order.amount}</p>
                  </div>

                  <div className="mt-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyOrders;

