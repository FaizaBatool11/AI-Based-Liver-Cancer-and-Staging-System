"use client";

import { FC } from "react";
import { Settings, Bell, User } from "lucide-react";
import { motion } from "framer-motion";

const DashboardPage: FC = () => {
  return (
    <div className="p-2 space-y-6">
      {/* ✅ Top Header */}
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center gap-6">
          <Settings className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition" />
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition" />
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer hover:bg-blue-200 transition">
            <User className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </header>

      {/* ✅ Welcome Box with Gradient & Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg rounded-xl p-8"
      >
        <h2 className="text-2xl font-semibold">Welcome, Dr. Jane Doe 👩‍⚕️</h2>
        <p className="mt-3 text-lg text-white/90">
          With <span className="font-bold">LiverCare AI</span>, you can make
          quicker and smarter medical decisions, ensuring timely and accurate
          treatment for your patients.
        </p>
        <button className="mt-5 px-5 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Explore Dashboard
        </button>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
