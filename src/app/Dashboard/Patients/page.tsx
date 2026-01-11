"use client";
import { useState } from "react";
import { Search, Filter, Download, Eye, Trash2, Calendar, Activity, AlertCircle, FileText, Plus, ChevronDown, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface Patient {
  id: number;
  name: string;
  email: string;
  gender: string;
  age: number;
  phone: string;
  dateAdded: string;
  lastVisit: string;
  status: "Active" | "Under Treatment" | "Recovered" | "Critical";
  diagnosis?: string;
  stage?: string;
  clinicalData?: {
    age_at_index: string;
    bmi: string;
    tumor_nodul: string;
    hepatitis: string;
    afp: string;
    afp_group: string;
    alk: string;
    metastasis: string;
  };
}

export default function PatientsPage() {
  const router = useRouter();
  const [patients] = useState<Patient[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      gender: "Male",
      age: 55,
      phone: "+1 234-567-8901",
      dateAdded: "2024-01-15",
      lastVisit: "2024-12-10",
      status: "Under Treatment",
      diagnosis: "Liver Cancer",
      stage: "Stage II",
      clinicalData: {
        age_at_index: "55",
        bmi: "28.5",
        tumor_nodul: "2",
        hepatitis: "1",
        afp: "150",
        afp_group: "1",
        alk: "180",
        metastasis: "0"
      }
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      gender: "Female",
      age: 48,
      phone: "+1 234-567-8902",
      dateAdded: "2024-02-20",
      lastVisit: "2024-12-12",
      status: "Active",
      diagnosis: "Monitoring",
      stage: "Stage I",
      clinicalData: {
        age_at_index: "48",
        bmi: "24.2",
        tumor_nodul: "1",
        hepatitis: "0",
        afp: "45",
        afp_group: "1",
        alk: "95",
        metastasis: "0"
      }
    },
    {
      id: 3,
      name: "Ali Khan",
      email: "ali@example.com",
      gender: "Male",
      age: 62,
      phone: "+1 234-567-8903",
      dateAdded: "2024-03-10",
      lastVisit: "2024-12-14",
      status: "Critical",
      diagnosis: "Liver Cancer",
      stage: "Stage III",
      clinicalData: {
        age_at_index: "62",
        bmi: "31.8",
        tumor_nodul: "4",
        hepatitis: "1",
        afp: "850",
        afp_group: "2",
        alk: "320",
        metastasis: "1"
      }
    },
    {
      id: 4,
      name: "Sara Ahmed",
      email: "sara@example.com",
      gender: "Female",
      age: 41,
      phone: "+1 234-567-8904",
      dateAdded: "2024-04-05",
      lastVisit: "2024-11-28",
      status: "Recovered",
      diagnosis: "Post-treatment",
      stage: "Stage I",
      clinicalData: {
        age_at_index: "40",
        bmi: "22.5",
        tumor_nodul: "1",
        hepatitis: "0",
        afp: "12",
        afp_group: "0",
        alk: "75",
        metastasis: "0"
      }
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [genderFilter, setGenderFilter] = useState<string>("All");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Filter patients
  const filteredPatients = patients.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase()) ||
      p.phone.includes(search);
    
    const matchesStatus = statusFilter === "All" || p.status === statusFilter;
    const matchesGender = genderFilter === "All" || p.gender === genderFilter;

    return matchesSearch && matchesStatus && matchesGender;
  });

  // Statistics
  const stats = {
    total: patients.length,
    active: patients.filter(p => p.status === "Active").length,
    underTreatment: patients.filter(p => p.status === "Under Treatment").length,
    critical: patients.filter(p => p.status === "Critical").length,
    recovered: patients.filter(p => p.status === "Recovered").length,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-200";
      case "Under Treatment":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Critical":
        return "bg-red-100 text-red-800 border-red-200";
      case "Recovered":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const exportData = () => {
    const csvContent = [
      ["ID", "Name", "Email", "Gender", "Age", "Phone", "Status", "Diagnosis", "Stage", "Date Added", "Last Visit"],
      ...filteredPatients.map(p => [
        p.id,
        p.name,
        p.email,
        p.gender,
        p.age,
        p.phone,
        p.status,
        p.diagnosis || "",
        p.stage || "",
        p.dateAdded,
        p.lastVisit
      ])
    ].map(row => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `patients-${Date.now()}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Patient Management</h1>
          </div>
          <p className="text-gray-600">
            Manage patient records, track medical history, and monitor treatment progress.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <StatCard label="Total Patients" value={stats.total} color="blue" />
          <StatCard label="Active" value={stats.active} color="green" />
          <StatCard label="Under Treatment" value={stats.underTreatment} color="blue" />
          <StatCard label="Critical" value={stats.critical} color="red" />
          <StatCard label="Recovered" value={stats.recovered} color="purple" />
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              />
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all"
            >
              <Filter className="w-5 h-5" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>

            {/* Export Button */}
            <button
              onClick={exportData}
              className="flex items-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
            >
              <Download className="w-5 h-5" />
              Export
            </button>

            {/* Add Patient Button - Redirect to Medical History Page */}
            <button
              onClick={() => router.push("/Dashboard/History")} // ✅ Redirect on click
              className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              <Plus className="w-5 h-5" />
              Add Patient
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Under Treatment">Under Treatment</option>
                  <option value="Critical">Critical</option>
                  <option value="Recovered">Recovered</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select
                  value={genderFilter}
                  onChange={(e) => setGenderFilter(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                >
                  <option value="All">All Genders</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Patients Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="py-4 px-4 font-semibold">ID</th>
                  <th className="py-4 px-4 font-semibold">Patient Name</th>
                  <th className="py-4 px-4 font-semibold">Contact</th>
                  <th className="py-4 px-4 font-semibold">Age/Gender</th>
                  <th className="py-4 px-4 font-semibold">Status</th>
                  <th className="py-4 px-4 font-semibold">Diagnosis</th>
                  <th className="py-4 px-4 font-semibold">Last Visit</th>
                  <th className="py-4 px-4 font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPatients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 text-gray-900 font-medium">{patient.id}</td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{patient.name}</p>
                        <p className="text-sm text-gray-500">{patient.email}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700">{patient.phone}</td>
                    <td className="py-4 px-4 text-gray-700">
                      {patient.age} years / {patient.gender}
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(patient.status)}`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-gray-900 font-medium">{patient.diagnosis}</p>
                        {patient.stage && (
                          <p className="text-sm text-gray-500">{patient.stage}</p>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {new Date(patient.lastVisit).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setSelectedPatient(patient)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                          title="View Details"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredPatients.length === 0 && (
                  <tr>
                    <td colSpan={8} className="text-center py-12">
                      <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-500 text-lg">No patients found</p>
                      <p className="text-gray-400 text-sm mt-1">Try adjusting your search or filters</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Patient Details Modal */}
        {selectedPatient && (
          <PatientDetailsModal
            patient={selectedPatient}
            onClose={() => setSelectedPatient(null)}
          />
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
  const colors = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    red: "from-red-500 to-red-600",
    purple: "from-purple-500 to-purple-600",
  };

  return (
    <div className={`bg-gradient-to-br ${colors[color as keyof typeof colors]} rounded-lg p-4 text-white shadow-md`}>
      <p className="text-sm opacity-90 mb-1">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

function PatientDetailsModal({ patient, onClose }: { patient: Patient; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{patient.name}</h2>
            <p className="text-blue-100 mt-1">Patient ID: {patient.id}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Basic Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Basic Information
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-gray-50 rounded-lg p-4">
              <InfoItem label="Email" value={patient.email} />
              <InfoItem label="Phone" value={patient.phone} />
              <InfoItem label="Gender" value={patient.gender} />
              <InfoItem label="Age" value={`${patient.age} years`} />
              <InfoItem label="Status" value={patient.status} />
              <InfoItem label="Date Added" value={new Date(patient.dateAdded).toLocaleDateString()} />
            </div>
          </div>

          {/* Medical Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600" />
              Medical Information
            </h3>
            <div className="grid grid-cols-2 gap-4 bg-blue-50 rounded-lg p-4">
              <InfoItem label="Diagnosis" value={patient.diagnosis || "N/A"} />
              <InfoItem label="Stage" value={patient.stage || "N/A"} />
              <InfoItem label="Last Visit" value={new Date(patient.lastVisit).toLocaleDateString()} />
            </div>
          </div>

          {/* Clinical Data */}
          {patient.clinicalData && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Clinical Parameters
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 rounded-lg p-4">
                <InfoItem label="Age at Index" value={patient.clinicalData.age_at_index} />
                <InfoItem label="BMI" value={patient.clinicalData.bmi} />
                <InfoItem label="Tumor Nodules" value={patient.clinicalData.tumor_nodul} />
                <InfoItem label="Hepatitis" value={patient.clinicalData.hepatitis === "1" ? "Positive" : "Negative"} />
                <InfoItem label="AFP Level" value={`${patient.clinicalData.afp} ng/mL`} />
                <InfoItem label="AFP Group" value={["Low", "Medium", "High"][parseInt(patient.clinicalData.afp_group)]} />
                <InfoItem label="ALK" value={`${patient.clinicalData.alk} U/L`} />
                <InfoItem label="Metastasis" value={patient.clinicalData.metastasis === "1" ? "Detected" : "Not Detected"} />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium">
              Edit Patient Record
            </button>
            <button className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-medium">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className="text-gray-900 font-medium">{value}</p>
    </div>
  );
}