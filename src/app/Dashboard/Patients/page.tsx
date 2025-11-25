"use client";

import { FC, useState } from "react";
import { Search } from "lucide-react";

interface Patient {
  id: number;
  name: string;
  email: string;
  gender: string;
}

const Patients: FC = () => {
  // ✅ Dummy data
  const [patients] = useState<Patient[]>([
    { id: 1, name: "John Doe", email: "john@example.com", gender: "Male" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", gender: "Female" },
    { id: 3, name: "Ali Khan", email: "ali@example.com", gender: "Male" },
    { id: 4, name: "Sara Ahmed", email: "sara@example.com", gender: "Female" },
  ]);

  const [search, setSearch] = useState("");

  // ✅ Filter patients by search
  const filteredPatients = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase()) ||
      p.gender.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* ✅ Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Patients</h1>
          <p className="text-gray-600">
            Manage your patients’ data and keep track of their medical history.
          </p>
        </div>

        {/* ✅ Search Bar */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search patients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-500 rounded-lg shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
        </div>
      </div>

      {/* ✅ Patients Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-gray-700">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Gender</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr
                key={patient.id}
                className="hover:bg-gray-50 transition-colors text-gray-700"
              >
                <td className="py-3 px-4">{patient.id}</td>
                <td className="py-3 px-4">{patient.name}</td>
                <td className="py-3 px-4">{patient.email}</td>
                <td className="py-3 px-4">{patient.gender}</td>
              </tr>
            ))}
            {filteredPatients.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-6 text-gray-500 italic"
                >
                  No patients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
