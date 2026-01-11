// "use client";

// import { FC } from "react";
// import { Settings, Bell, User } from "lucide-react";
// import { motion } from "framer-motion";

// const DashboardPage: FC = () => {
//   return (
//     <div className="p-2 space-y-6">
//       {/* ✅ Top Header */}
//       <header className="flex items-center justify-between">
//         <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
//         <div className="flex items-center gap-6">
//           <Settings className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition" />
//           <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition" />
//           <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer hover:bg-blue-200 transition">
//             <User className="w-6 h-6 text-blue-600" />
//           </div>
//         </div>
//       </header>

//       {/* ✅ Welcome Box with Gradient & Animation */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         whileHover={{ scale: 1.02 }}
//         transition={{ duration: 0.5 }}
//         className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg rounded-xl p-8"
//       >
//         <h2 className="text-2xl font-semibold">Welcome, Dr. Jane Doe 👩‍⚕️</h2>
//         <p className="mt-3 text-lg text-white/90">
//           With <span className="font-bold">LiverCare AI</span>, you can make
//           quicker and smarter medical decisions, ensuring timely and accurate
//           treatment for your patients.
//         </p>
//         <button className="mt-5 px-5 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
//           Explore Dashboard
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default DashboardPage;
"use client";

// import Sidebar from "../components/";
import Topbar from "../components/Topbar";
import StageChart from "../components/StageChart";
import TrendChart from "../components/TrendChart";
import { motion } from "framer-motion";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex bg-gray-50">

      <div className="flex-1 overflow-auto">
        <Topbar />

        <main className="p-4 md:p-6 space-y-6">
          {/* Hero / Summary */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold">Good morning, Dr. Kim</h2>
              <p className="mt-2 text-white/90">LiverCare AI — Upload clinical & imaging data for quick staging and explainable outputs.</p>
              <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 rounded-lg bg-white text-indigo-600 font-semibold shadow">Upload Patient</button>
                <button className="px-4 py-2 rounded-lg border border-white/30 text-white/90">View Reports</button>
              </div>
            </div>

            <div className="w-48 h-36 bg-white/10 rounded-lg flex items-center justify-center">
              {/* placeholder illustration */}
              <img src="/FinalLogo.png" alt="liver" className="w-28 h-28 object-contain" />
            </div>
          </motion.div>

          {/* Quick Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Visits card */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.05 }}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Visits Today</div>
                  <div className="text-3xl font-bold text-blue-800">104</div>
                </div>

                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </motion.div>


            {/* Processed scans */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.12 }}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Processed Scans</div>
                  <div className="text-3xl font-bold text-purple-600">12</div>
                </div>

                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" 
                      viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                          d="M15 10l4.553 2.276a1 1 0 010 1.448L15 16m0-6V8a4 4 0 10-8 0v2m8 0H7m0 0v4m0 0h8" />
                  </svg>
                </div>
              </div>
            </motion.div>


            {/* Pending explanations */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.18 }}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Pending Explanations</div>
                  <div className="text-3xl font-bold text-blue-600">3</div>
                </div>

                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" 
                      viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                          d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                  </svg>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-4 text-black">Stage Distribution</h3>
              <StageChart />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-4 text-black">Risk Index Trend</h3>
              <TrendChart />
            </motion.div>
          </div>

          {/* Explainability */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34 }} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4 text-black">Explainable AI (Top features)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "AFP Level", value: 82 },
                { name: "Tumor Size", value: 67 },
                { name: "ALT", value: 44 },
                { name: "Age", value: 32 },
              ].map((f) => (
                <div key={f.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 font-medium">{f.name}</span>
                    <span className="text-sm text-gray-500">{f.value}%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-3 rounded-full">
                    <div className="h-3 rounded-full bg-indigo-600" style={{ width: `${f.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </main>
      </div>
    </div>
  );
}


// "use client";

// import { FC, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FiSettings,
//   FiBell,
//   FiUser,
//   FiUsers,
//   FiActivity,
//   FiCheckCircle,
//   FiClock,
//   FiFileText,
//   FiBarChart2,
//   FiCalendar,
//   FiAlertCircle,
//   FiTrendingUp,
//   FiArrowRight,
// } from "react-icons/fi";

// const DashboardPage: FC = () => {
//   const [notifications] = useState(3);

//   // Sample Data
//   const stats = [
//     {
//       icon: <FiUsers className="w-6 h-6" />,
//       label: "Total Patients",
//       value: "248",
//       change: "+12%",
//       positive: true,
//       color: "from-blue-500 to-cyan-500",
//       bgColor: "bg-blue-100",
//       iconColor: "text-blue-600",
//     },
//     {
//       icon: <FiActivity className="w-6 h-6" />,
//       label: "Active Cases",
//       value: "42",
//       change: "+8%",
//       positive: true,
//       color: "from-indigo-500 to-purple-500",
//       bgColor: "bg-indigo-100",
//       iconColor: "text-indigo-600",
//     },
//     {
//       icon: <FiCheckCircle className="w-6 h-6" />,
//       label: "Completed Today",
//       value: "15",
//       change: "+3",
//       positive: true,
//       color: "from-green-500 to-emerald-500",
//       bgColor: "bg-green-100",
//       iconColor: "text-green-600",
//     },
//     {
//       icon: <FiClock className="w-6 h-6" />,
//       label: "Pending Reviews",
//       value: "8",
//       change: "-2",
//       positive: false,
//       color: "from-orange-500 to-red-500",
//       bgColor: "bg-orange-100",
//       iconColor: "text-orange-600",
//     },
//   ];

//   const recentActivity = [
//     {
//       patient: "Sarah Johnson",
//       action: "CT Scan Analysis Complete",
//       time: "10 mins ago",
//       status: "completed",
//       avatar: "SJ",
//     },
//     {
//       patient: "Michael Chen",
//       action: "Lab Results Uploaded",
//       time: "25 mins ago",
//       status: "pending",
//       avatar: "MC",
//     },
//     {
//       patient: "Emma Wilson",
//       action: "Follow-up Scheduled",
//       time: "1 hour ago",
//       status: "scheduled",
//       avatar: "EW",
//     },
//     {
//       patient: "James Brown",
//       action: "Diagnosis Confirmed",
//       time: "2 hours ago",
//       status: "completed",
//       avatar: "JB",
//     },
//   ];

//   const upcomingAppointments = [
//     {
//       patient: "Robert Taylor",
//       time: "2:00 PM",
//       type: "Consultation",
//       priority: "high",
//       avatar: "RT",
//     },
//     {
//       patient: "Lisa Anderson",
//       time: "3:30 PM",
//       type: "Follow-up",
//       priority: "medium",
//       avatar: "LA",
//     },
//     {
//       patient: "David Martinez",
//       time: "4:45 PM",
//       type: "Review",
//       priority: "low",
//       avatar: "DM",
//     },
//   ];

//   const quickActions = [
//     { icon: <FiUsers className="w-6 h-6" />, label: "Add Patient", color: "from-blue-500 to-cyan-500" },
//     { icon: <FiFileText className="w-6 h-6" />, label: "New Report", color: "from-indigo-500 to-purple-500" },
//     { icon: <FiBarChart2 className="w-6 h-6" />, label: "View Analytics", color: "from-green-500 to-emerald-500" },
//     { icon: <FiActivity className="w-6 h-6" />, label: "Run Diagnosis", color: "from-orange-500 to-red-500" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 p-4 md:p-8">
//       <div className="relative max-w-7xl mx-auto space-y-8">
//         {/* Top Header */}
//         <motion.header
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex flex-col md:flex-row md:items-center justify-between gap-4"
//         >
//           <div>
//             <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
//               <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                 Dashboard
//               </span>
//             </h1>
//             <p className="text-gray-600 text-lg flex items-center gap-2">
//               <span>Welcome back, Dr. Jane Doe</span>
//               <span className="text-2xl">👋</span>
//             </p>
//           </div>

//           <div className="flex items-center gap-3">
//             <motion.button
//               whileHover={{ scale: 1.05, rotate: 15 }}
//               whileTap={{ scale: 0.95 }}
//               className="relative p-3 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all shadow-sm"
//             >
//               <FiSettings className="w-6 h-6 text-gray-600" />
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="relative p-3 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all shadow-sm"
//             >
//               <FiBell className="w-6 h-6 text-gray-600" />
//               {notifications > 0 && (
//                 <motion.span
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg"
//                 >
//                   {notifications}
//                 </motion.span>
//               )}
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <FiUser className="w-6 h-6 text-white" />
//             </motion.button>
//           </div>
//         </motion.header>

//         {/* Welcome Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="relative overflow-hidden group"
//         >
//           {/* Glowing Effect */}
//           <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

//           <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl rounded-3xl p-8 md:p-10">
//             {/* Animated Background Pattern */}
//             <div className="absolute inset-0 opacity-10">
//               {[...Array(5)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute bg-white rounded-full"
//                   style={{
//                     width: Math.random() * 100 + 50,
//                     height: Math.random() * 100 + 50,
//                     left: `${Math.random() * 100}%`,
//                     top: `${Math.random() * 100}%`,
//                   }}
//                   animate={{
//                     scale: [1, 1.3, 1],
//                     opacity: [0.3, 0.5, 0.3],
//                   }}
//                   transition={{
//                     duration: Math.random() * 4 + 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />
//               ))}
//             </div>

//             <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
//               <div className="flex-1">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-2">
//                   Welcome, Dr. Jane Doe
//                   <span className="text-4xl">👩‍⚕️</span>
//                 </h2>
//                 <p className="text-lg text-blue-100 leading-relaxed mb-6 max-w-2xl">
//                   With <span className="font-bold text-white">LiverCare AI</span>, you can make
//                   quicker and smarter medical decisions, ensuring timely and accurate
//                   treatment for your patients.
//                 </p>
//                 <motion.button
//                   whileHover={{ scale: 1.05, x: 5 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 group"
//                 >
//                   Explore Features
//                   <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </motion.button>
//               </div>

//               {/* Decorative Icon */}
//               <div className="hidden lg:block">
//                 <motion.div
//                   animate={{
//                     rotate: [0, 5, -5, 0],
//                     scale: [1, 1.05, 1],
//                   }}
//                   transition={{
//                     duration: 6,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="relative"
//                 >
//                   <div className="w-48 h-48 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/20">
//                     <FiActivity className="w-24 h-24 text-white/90" />
//                   </div>
//                   <div className="absolute -inset-4 bg-white/20 rounded-full blur-2xl"></div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {stats.map((stat, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 + i * 0.1 }}
//               whileHover={{ y: -8, scale: 1.02 }}
//               className="relative group cursor-pointer"
//             >
//               {/* Gradient Background on Hover */}
//               <div className={`absolute -inset-1 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity`}></div>

//               <div className="relative bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-blue-200 transition-all">
//                 <div className="flex items-start justify-between mb-4">
//                   <div className={`w-14 h-14 ${stat.bgColor} rounded-xl flex items-center justify-center shadow-md`}>
//                     <div className={stat.iconColor}>{stat.icon}</div>
//                   </div>
//                   <motion.span
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     className={`text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1 ${
//                       stat.positive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
//                     }`}
//                   >
//                     {stat.positive ? (
//                       <FiTrendingUp className="w-3 h-3" />
//                     ) : (
//                       <FiActivity className="w-3 h-3" />
//                     )}
//                     {stat.change}
//                   </motion.span>
//                 </div>
//                 <p className="text-gray-600 text-sm font-semibold mb-1">{stat.label}</p>
//                 <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-3 gap-6">
//           {/* Recent Activity */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="lg:col-span-2"
//           >
//             <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 hover:shadow-2xl transition-shadow">
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                   <FiActivity className="w-6 h-6 text-blue-600" />
//                   Recent Activity
//                 </h3>
//                 <button className="text-blue-600 text-sm font-bold hover:underline flex items-center gap-1 group">
//                   View All
//                   <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>

//               <div className="space-y-3">
//                 {recentActivity.map((activity, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.7 + i * 0.1 }}
//                     whileHover={{ scale: 1.02, x: 5 }}
//                     className="flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all border border-transparent hover:border-blue-200 cursor-pointer"
//                   >
//                     <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-md ${
//                       activity.status === "completed"
//                         ? "bg-gradient-to-br from-green-500 to-emerald-500"
//                         : activity.status === "pending"
//                         ? "bg-gradient-to-br from-orange-500 to-red-500"
//                         : "bg-gradient-to-br from-blue-500 to-indigo-500"
//                     }`}>
//                       {activity.avatar}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p className="font-bold text-gray-900 truncate">{activity.patient}</p>
//                       <p className="text-sm text-gray-600 truncate">{activity.action}</p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</span>
//                       {activity.status === "completed" ? (
//                         <FiCheckCircle className="w-5 h-5 text-green-500" />
//                       ) : activity.status === "pending" ? (
//                         <FiAlertCircle className="w-5 h-5 text-orange-500" />
//                       ) : (
//                         <FiCalendar className="w-5 h-5 text-blue-500" />
//                       )}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Today's Schedule */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7 }}
//           >
//             <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 hover:shadow-2xl transition-shadow">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-6">
//                 <FiCalendar className="w-6 h-6 text-blue-600" />
//                 Today&apos;s Schedule
//               </h3>

//               <div className="space-y-4">
//                 {upcomingAppointments.map((apt, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.8 + i * 0.1 }}
//                     whileHover={{ scale: 1.02 }}
//                     className="relative p-4 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 hover:border-blue-300 transition-all cursor-pointer"
//                   >
//                     <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl ${
//                       apt.priority === "high"
//                         ? "bg-gradient-to-b from-red-500 to-pink-500"
//                         : apt.priority === "medium"
//                         ? "bg-gradient-to-b from-yellow-500 to-orange-500"
//                         : "bg-gradient-to-b from-green-500 to-emerald-500"
//                     }`}></div>

//                     <div className="flex items-start justify-between mb-2">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md">
//                           {apt.avatar}
//                         </div>
//                         <div>
//                           <p className="font-bold text-gray-900">{apt.patient}</p>
//                           <p className="text-xs text-gray-600">{apt.type}</p>
//                         </div>
//                       </div>
//                       <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
//                         {apt.time}
//                       </span>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
//               >
//                 <FiCalendar className="w-5 h-5" />
//                 View Full Calendar
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>

//         {/* Quick Actions */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 hover:shadow-2xl transition-shadow"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {quickActions.map((action, i) => (
//               <motion.button
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.9 + i * 0.1 }}
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-300 bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-indigo-50 transition-all shadow-sm hover:shadow-lg"
//               >
//                 <div className={`w-14 h-14 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all`}>
//                   {action.icon}
//                 </div>
//                 <span className="font-bold text-gray-900 text-sm text-center">
//                   {action.label}
//                 </span>
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

// "use client";

// import { FC, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FiSettings,
//   FiBell,
//   FiUser,
//   FiUsers,
//   FiActivity,
//   FiCheckCircle,
//   FiClock,
//   FiFileText,
//   FiBarChart2,
//   FiCalendar,
//   FiAlertCircle,
//   FiTrendingUp,
//   FiArrowRight,
// } from "react-icons/fi";

// const DashboardPage: FC = () => {
//   const [notifications] = useState(3);

//   // Sample Data
//   const stats = [
//     {
//       icon: <FiUsers className="w-6 h-6" />,
//       label: "Total Patients",
//       value: "248",
//       change: "+12%",
//       positive: true,
//       color: "from-blue-500 to-cyan-500",
//       bgColor: "bg-blue-100",
//       iconColor: "text-blue-600",
//     },
//     {
//       icon: <FiActivity className="w-6 h-6" />,
//       label: "Active Cases",
//       value: "42",
//       change: "+8%",
//       positive: true,
//       color: "from-indigo-500 to-purple-500",
//       bgColor: "bg-indigo-100",
//       iconColor: "text-indigo-600",
//     },
//     {
//       icon: <FiCheckCircle className="w-6 h-6" />,
//       label: "Completed Today",
//       value: "15",
//       change: "+3",
//       positive: true,
//       color: "from-green-500 to-emerald-500",
//       bgColor: "bg-green-100",
//       iconColor: "text-green-600",
//     },
//     {
//       icon: <FiClock className="w-6 h-6" />,
//       label: "Pending Reviews",
//       value: "8",
//       change: "-2",
//       positive: false,
//       color: "from-orange-500 to-red-500",
//       bgColor: "bg-orange-100",
//       iconColor: "text-orange-600",
//     },
//   ];

//   const recentActivity = [
//     {
//       patient: "Sarah Johnson",
//       action: "CT Scan Analysis Complete",
//       time: "10 mins ago",
//       status: "completed",
//       avatar: "SJ",
//     },
//     {
//       patient: "Michael Chen",
//       action: "Lab Results Uploaded",
//       time: "25 mins ago",
//       status: "pending",
//       avatar: "MC",
//     },
//     {
//       patient: "Emma Wilson",
//       action: "Follow-up Scheduled",
//       time: "1 hour ago",
//       status: "scheduled",
//       avatar: "EW",
//     },
//     {
//       patient: "James Brown",
//       action: "Diagnosis Confirmed",
//       time: "2 hours ago",
//       status: "completed",
//       avatar: "JB",
//     },
//   ];

//   const upcomingAppointments = [
//     {
//       patient: "Robert Taylor",
//       time: "2:00 PM",
//       type: "Consultation",
//       priority: "high",
//       avatar: "RT",
//     },
//     {
//       patient: "Lisa Anderson",
//       time: "3:30 PM",
//       type: "Follow-up",
//       priority: "medium",
//       avatar: "LA",
//     },
//     {
//       patient: "David Martinez",
//       time: "4:45 PM",
//       type: "Review",
//       priority: "low",
//       avatar: "DM",
//     },
//   ];

//   const quickActions = [
//     { icon: <FiUsers className="w-6 h-6" />, label: "Add Patient", color: "from-blue-500 to-cyan-500" },
//     { icon: <FiFileText className="w-6 h-6" />, label: "New Report", color: "from-indigo-500 to-purple-500" },
//     { icon: <FiBarChart2 className="w-6 h-6" />, label: "View Analytics", color: "from-green-500 to-emerald-500" },
//     { icon: <FiActivity className="w-6 h-6" />, label: "Run Diagnosis", color: "from-orange-500 to-red-500" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 p-4 md:p-8">
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20"
//             style={{
//               width: Math.random() * 150 + 100,
//               height: Math.random() * 150 + 100,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               x: [0, 15, 0],
//               scale: [1, 1.1, 1],
//               opacity: [0.1, 0.2, 0.1],
//             }}
//             transition={{
//               duration: Math.random() * 8 + 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative max-w-7xl mx-auto space-y-8">
//         {/* Top Header */}
//         <motion.header
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex flex-col md:flex-row md:items-center justify-between gap-4"
//         >
//           <div>
//             <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
//               <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                 Dashboard
//               </span>
//             </h1>
//             <p className="text-gray-600 text-lg flex items-center gap-2">
//               <span>Welcome back, Dr. Jane Doe</span>
//               <span className="text-2xl">👋</span>
//             </p>
//           </div>

//           <div className="flex items-center gap-3">
//             <motion.button
//               whileHover={{ scale: 1.05, rotate: 15 }}
//               whileTap={{ scale: 0.95 }}
//               className="relative p-3 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all shadow-sm"
//             >
//               <FiSettings className="w-6 h-6 text-gray-600" />
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="relative p-3 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all shadow-sm"
//             >
//               <FiBell className="w-6 h-6 text-gray-600" />
//               {notifications > 0 && (
//                 <motion.span
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg"
//                 >
//                   {notifications}
//                 </motion.span>
//               )}
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <FiUser className="w-6 h-6 text-white" />
//             </motion.button>
//           </div>
//         </motion.header>

//         {/* Welcome Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="relative overflow-hidden group"
//         >
//           {/* Glowing Effect */}
//           <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

//           <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl rounded-3xl p-8 md:p-10">
//             {/* Animated Background Pattern */}
//             <div className="absolute inset-0 opacity-10">
//               {[...Array(5)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute bg-white rounded-full"
//                   style={{
//                     width: Math.random() * 100 + 50,
//                     height: Math.random() * 100 + 50,
//                     left: `${Math.random() * 100}%`,
//                     top: `${Math.random() * 100}%`,
//                   }}
//                   animate={{
//                     scale: [1, 1.3, 1],
//                     opacity: [0.3, 0.5, 0.3],
//                   }}
//                   transition={{
//                     duration: Math.random() * 4 + 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />
//               ))}
//             </div>

//             <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
//               <div className="flex-1">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-2">
//                   Welcome, Dr. Jane Doe
//                   <span className="text-4xl">👩‍⚕️</span>
//                 </h2>
//                 <p className="text-lg text-blue-100 leading-relaxed mb-6 max-w-2xl">
//                   With <span className="font-bold text-white">LiverCare AI</span>, you can make
//                   quicker and smarter medical decisions, ensuring timely and accurate
//                   treatment for your patients.
//                 </p>
//                 <motion.button
//                   whileHover={{ scale: 1.05, x: 5 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 group"
//                 >
//                   Explore Features
//                   <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </motion.button>
//               </div>

//               {/* Decorative Icon */}
//               <div className="hidden lg:block">
//                 <motion.div
//                   animate={{
//                     rotate: [0, 5, -5, 0],
//                     scale: [1, 1.05, 1],
//                   }}
//                   transition={{
//                     duration: 6,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="relative"
//                 >
//                   <div className="w-48 h-48 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/20">
//                     <FiActivity className="w-24 h-24 text-white/90" />
//                   </div>
//                   <div className="absolute -inset-4 bg-white/20 rounded-full blur-2xl"></div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {stats.map((stat, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 + i * 0.1 }}
//               whileHover={{ y: -8, scale: 1.02 }}
//               className="relative group cursor-pointer"
//             >
//               {/* Gradient Background on Hover */}
//               <div className={`absolute -inset-1 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity`}></div>

//               <div className="relative bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-blue-200 transition-all">
//                 <div className="flex items-start justify-between mb-4">
//                   <div className={`w-14 h-14 ${stat.bgColor} rounded-xl flex items-center justify-center shadow-md`}>
//                     <div className={stat.iconColor}>{stat.icon}</div>
//                   </div>
//                   <motion.span
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     className={`text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1 ${
//                       stat.positive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
//                     }`}
//                   >
//                     {stat.positive ? (
//                       <FiTrendingUp className="w-3 h-3" />
//                     ) : (
//                       <FiActivity className="w-3 h-3" />
//                     )}
//                     {stat.change}
//                   </motion.span>
//                 </div>
//                 <p className="text-gray-600 text-sm font-semibold mb-1">{stat.label}</p>
//                 <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-3 gap-6">
//           {/* Recent Activity */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="lg:col-span-2"
//           >
//             <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 hover:shadow-2xl transition-shadow">
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                   <FiActivity className="w-6 h-6 text-blue-600" />
//                   Recent Activity
//                 </h3>
//                 <button className="text-blue-600 text-sm font-bold hover:underline flex items-center gap-1 group">
//                   View All
//                   <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>

//               <div className="space-y-3">
//                 {recentActivity.map((activity, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.7 + i * 0.1 }}
//                     whileHover={{ scale: 1.02, x: 5 }}
//                     className="flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all border border-transparent hover:border-blue-200 cursor-pointer"
//                   >
//                     <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-md ${
//                       activity.status === "completed"
//                         ? "bg-gradient-to-br from-green-500 to-emerald-500"
//                         : activity.status === "pending"
//                         ? "bg-gradient-to-br from-orange-500 to-red-500"
//                         : "bg-gradient-to-br from-blue-500 to-indigo-500"
//                     }`}>
//                       {activity.avatar}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p className="font-bold text-gray-900 truncate">{activity.patient}</p>
//                       <p className="text-sm text-gray-600 truncate">{activity.action}</p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</span>
//                       {activity.status === "completed" ? (
//                         <FiCheckCircle className="w-5 h-5 text-green-500" />
//                       ) : activity.status === "pending" ? (
//                         <FiAlertCircle className="w-5 h-5 text-orange-500" />
//                       ) : (
//                         <FiCalendar className="w-5 h-5 text-blue-500" />
//                       )}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Today's Schedule */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7 }}
//           >
//             <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 hover:shadow-2xl transition-shadow">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-6">
//                 <FiCalendar className="w-6 h-6 text-blue-600" />
//                 Today&apos;s Schedule
//               </h3>

//               <div className="space-y-4">
//                 {upcomingAppointments.map((apt, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.8 + i * 0.1 }}
//                     whileHover={{ scale: 1.02 }}
//                     className="relative p-4 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 hover:border-blue-300 transition-all cursor-pointer"
//                   >
//                     <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl ${
//                       apt.priority === "high"
//                         ? "bg-gradient-to-b from-red-500 to-pink-500"
//                         : apt.priority === "medium"
//                         ? "bg-gradient-to-b from-yellow-500 to-orange-500"
//                         : "bg-gradient-to-b from-green-500 to-emerald-500"
//                     }`}></div>

//                     <div className="flex items-start justify-between mb-2">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md">
//                           {apt.avatar}
//                         </div>
//                         <div>
//                           <p className="font-bold text-gray-900">{apt.patient}</p>
//                           <p className="text-xs text-gray-600">{apt.type}</p>
//                         </div>
//                       </div>
//                       <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
//                         {apt.time}
//                       </span>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
//               >
//                 <FiCalendar className="w-5 h-5" />
//                 View Full Calendar
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>

//         {/* Quick Actions */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 hover:shadow-2xl transition-shadow"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {quickActions.map((action, i) => (
//               <motion.button
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.9 + i * 0.1 }}
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-300 bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-indigo-50 transition-all shadow-sm hover:shadow-lg"
//               >
//                 <div className={`w-14 h-14 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all`}>
//                   {action.icon}
//                 </div>
//                 <span className="font-bold text-gray-900 text-sm text-center">
//                   {action.label}
//                 </span>
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;