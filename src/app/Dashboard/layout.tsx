"use client";

import React, { useState, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  BookOpenIcon,
  ChartBarIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

// ✅ Define Section type
interface Section {
  href: string;
  label: string;
  icon: React.ElementType;
}

// ✅ Props type for DoctorLayout
interface DoctorLayoutProps {
  children?: ReactNode;
}

export default function DoctorLayout({ children }: DoctorLayoutProps) {
  const pathname = usePathname();
  const [desktopNavOpen, setDesktopNavOpen] = useState<boolean>(true);

  const sections: Section[] = [
    { href: `/Dashboard/Patients`, label: "Patients", icon: UserIcon },
    { href: `/Dashboard/History`, label: "Medical History", icon: BookOpenIcon },
    { href: `/Dashboard/labs`, label: "Lab Results", icon: ChartBarIcon },
    { href: `/Dashboard/logout`, label: "Logout", icon: ArrowRightOnRectangleIcon },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Sidebar Desktop */}
      <nav
        className={`bg-white border-r border-gray-200 shadow-md flex flex-col transition-all duration-300 hidden md:flex
        ${desktopNavOpen ? "w-60" : "w-16"}`}
      >
        {/* Logo + toggle */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          {desktopNavOpen && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <h1 className="text-lg font-extrabold">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                LiverCare
              </span>
              <span className="text-gray-800"> AI</span>
            </h1>
            </div>
          )}
          <button
            onClick={() => setDesktopNavOpen((v) => !v)}
            className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400/50 ml-auto"
          >
            {desktopNavOpen ? (
              <XMarkIcon className="w-6 h-6 text-blue-600" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-blue-600" />
            )}
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-1 px-2 py-3 flex-1">
          {sections.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                title={!desktopNavOpen ? label : undefined}
                className={`group flex items-center gap-3 rounded-md px-3 py-2 transition-colors
                  ${active ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"}`}
              >
                <Icon
                  className={`h-5 w-5 flex-shrink-0 ${active ? "text-blue-700" : "text-blue-600"}`}
                />
                {desktopNavOpen && <span className="font-medium">{label}</span>}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-x-hidden">
        {children || (
          <div className="flex flex-col items-center justify-center h-full text-gray-600">
            <h2 className="text-2xl font-bold mb-2">Welcome, Doctor!</h2>
            <p>Select a section from the sidebar to get started.</p>
          </div>
        )}
      </main>
    </div>
  );
}