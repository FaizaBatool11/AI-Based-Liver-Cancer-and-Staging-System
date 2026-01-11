"use client";
import { useState } from "react";
import { Bell, Search, User } from "lucide-react";

export default function Topbar() {
const [inputValue, setInputValue] = useState("");
  return (
    <header className="flex items-center justify-between py-4 px-4 md:px-6 bg-transparent">
      <div className="flex items-center gap-4 w-full max-w-2xl">
        <div className="relative flex-1">
          <input
            placeholder="Search patient, scan, id..."
            className="w-full h-11 rounded-xl pl-10 pr-4  border border-gray-500 
            outline-none shadow-sm focus:ring-2 focus:ring-blue-300 text-blue-400 placeholder-gray-400"
            />
          <Search
          className={`
            absolute left-4 top-3.5 w-5 h-5 
            transition-colors duration-200
            ${inputValue ? "text-blue-500" : "text-gray-400"}
          `}
        />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
            <User className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-medium text-gray-800">Dr. Kim</div>
            <div className="text-xs text-gray-500">Radiologist</div>
          </div>
        </div>
      </div>
    </header>
  );
}
