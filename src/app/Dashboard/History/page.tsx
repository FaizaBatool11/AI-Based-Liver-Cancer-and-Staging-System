// "use client";

// import { div } from "framer-motion/client";
// import React, { useState, ChangeEvent } from "react";

// interface HistoryRow {
//   test: string;
//   result: string;
// }

// export default function MedicalHistoryForm() {
//   const [step, setStep] = useState<number>(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     gender: "",
//     age: "",
//     history: [] as HistoryRow[],
//     mri: null as File | null,
//     ct: null as File | null,
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, files } = e.target;
//     if (files && files[0]) {
//       setFormData((prev) => ({ ...prev, [name]: files[0] }));
//     }
//   };

//   const addHistoryRow = () => {
//     setFormData((prev) => ({
//       ...prev,
//       history: [...prev.history, { test: "", result: "" }],
//     }));
//   };

//   const updateHistory = (index: number, field: "test" | "result", value: string) => {
//     const updated = [...formData.history];
//     updated[index][field] = value;
//     setFormData((prev) => ({ ...prev, history: updated }));
//   };

//   const handleSubmit = () => {
//     console.log("Form Data:", formData);
//     alert("Form submitted! Check console.");
//   };

//   return (
//     <div className="p-6 space-y-6">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//       <div>
//           <h1 className="text-3xl font-bold text-gray-800">Add Patient Record</h1>
//           <p className="text-gray-600">
//            Fill in the patient's basic information and upload scans to maintain a complete medical history.
//           </p>
//         </div>

//       {/* --- MULTI-STEP FORM --- */}
//       <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 space-y-4">
//         {/* Step Indicator */}
//         <div className="flex justify-center mb-4 space-x-2 text-gray-600 font-semibold">
//           <span className={step === 1 ? "text-blue-600" : ""}>Step 1</span>
//           <span>→</span>
//           <span className={step === 2 ? "text-blue-600" : ""}>Step 2</span>
//         </div>

//         {/* Step Heading & Statement */}
//         <div className="mb-4">
//           <h2 className="text-2xl font-bold text-gray-800">
//             {step === 1 ? "Basic Information" : "Upload Scans"}
//           </h2>
//           <p className="text-gray-600 text-sm">
//             {step === 1
//               ? "Please enter patient basic details."
//               : "Upload MRI and CT scans for the patient."}
//           </p>
//         </div>

//         {/* Step 1 */}
//         {step === 1 && (
//           <div className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 text-gray-700 p-2 rounded-md"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 text-gray-700 p-2 rounded-md"
//             />
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               className="w-full border border-gray-300 text-gray-700 p-2 rounded-md"
//             >
//               <option value="">Select Gender</option>
//               <option>Male</option>
//               <option>Female</option>
//               <option>Other</option>
//             </select>
//             <input
//               type="number"
//               name="age"
//               placeholder="Age"
//               value={formData.age}
//               onChange={handleChange}
//               className="w-full border border-gray-300 text-gray-700 p-2 rounded-md"
//             />

//             <div>
//               <label className="block mb-1 text-gray-700 font-medium">Test History</label>
//               <table className="w-full border border-gray-300 text-gray-700">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="p-2 border-b border-gray-300">Test</th>
//                     <th className="p-2 border-b border-gray-300">Result</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {formData.history.map((row, idx) => (
//                     <tr key={idx}>
//                       <td className="p-1 border-b border-gray-300">
//                         <input
//                           type="text"
//                           value={row.test}
//                           onChange={(e) => updateHistory(idx, "test", e.target.value)}
//                           className="w-full border border-gray-300 p-1 rounded text-gray-700"
//                         />
//                       </td>
//                       <td className="p-1 border-b border-gray-300">
//                         <input
//                           type="text"
//                           value={row.result}
//                           onChange={(e) => updateHistory(idx, "result", e.target.value)}
//                           className="w-full border border-gray-300 p-1 rounded text-gray-700"
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <button
//                 type="button"
//                 onClick={addHistoryRow}
//                 className="mt-2 px-3 py-1 bg-green-500 text-white rounded-md"
//               >
//                 + Add Test
//               </button>
//             </div>

//             <button
//               type="button"
//               onClick={() => setStep(2)}
//               className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md"
//             >
//               Next ➡️
//             </button>
//           </div>
//         )}

//         {/* Step 2 */}
//         {step === 2 && (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">MRI Scan</label>
//               <input
//                 type="file"
//                 name="mri"
//                 accept="image/*,.pdf"
//                 onChange={handleFileChange}
//                 className="w-full border border-gray-300 text-gray-700 p-2 rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">CT Scan</label>
//               <input
//                 type="file"
//                 name="ct"
//                 accept="image/*,.pdf"
//                 onChange={handleFileChange}
//                 className="w-full border border-gray-300 text-gray-700 p-2 rounded-md"
//               />
//             </div>

//             <div className="flex justify-between mt-4">
//               <button
//                 type="button"
//                 onClick={() => setStep(1)}
//                 className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
//               >
//                 ⬅️ Back
//               </button>
//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 className="px-4 py-2 bg-green-500 text-white rounded-md"
//               >
//                 Submit 
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//     </div>
//   );
// }

"use client";

import React, { useState, ChangeEvent } from "react";

interface HistoryRow {
  test: string;
  result: string;
}

export default function MedicalHistoryForm() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
    history: [] as HistoryRow[],
    mri: null as File | null,
    ct: null as File | null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const addHistoryRow = () => {
    setFormData((prev) => ({
      ...prev,
      history: [...prev.history, { test: "", result: "" }],
    }));
  };

  const updateHistory = (index: number, field: "test" | "result", value: string) => {
    const updated = [...formData.history];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, history: updated }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("Form submitted! Check console.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col px-2">
      {/* --- FULL SCREEN HEADING & STATEMENT --- */}
      <div className="text-black py-4 mb-6">
        <h1 className="text-3xl md:text-3xl font-bold mb-2">Add Patient Record</h1>
        <p className="text-md md:text-md">
          Fill in the patient's basic information and upload scans to maintain a complete medical history.
        </p>
      </div>

      {/* --- MULTI-STEP FORM --- */}
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 space-y-4 text-center">
        {/* Step Indicator */}
        <div className="flex justify-center mb-4 space-x-2 text-gray-600 font-semibold">
          <span className={step === 1 ? "text-blue-600" : ""}>Step 1</span>
          <span>→</span>
          <span className={step === 2 ? "text-blue-600" : ""}>Step 2</span>
        </div>

        {/* Step Heading & Statement */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {step === 1 ? "Basic Information" : "Upload Scans"}
          </h2>
          <p className="text-gray-600 text-sm">
            {step === 1
              ? "Please enter patient basic details."
              : "Upload MRI and CT scans for the patient."}
          </p>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 text-gray-700 p-2 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 text-gray-700 p-2 rounded-md"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 text-gray-700 p-2 rounded-md"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-gray-300 text-gray-700 p-2 rounded-md"
            />

            <div>
              <label className="block mb-1 text-gray-700 font-medium">Test History</label>
              <table className="w-full border border-gray-300 text-gray-700">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border-b border-gray-300">Test</th>
                    <th className="p-2 border-b border-gray-300">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.history.map((row, idx) => (
                    <tr key={idx}>
                      <td className="p-1 border-b border-gray-300">
                        <input
                          type="text"
                          value={row.test}
                          onChange={(e) => updateHistory(idx, "test", e.target.value)}
                          className="w-full border border-gray-300 p-1 rounded text-gray-700"
                        />
                      </td>
                      <td className="p-1 border-b border-gray-300">
                        <input
                          type="text"
                          value={row.result}
                          onChange={(e) => updateHistory(idx, "result", e.target.value)}
                          className="w-full border border-gray-300 p-1 rounded text-gray-700"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                onClick={addHistoryRow}
                className="mt-2 px-3 py-1 bg-green-500 text-white rounded-md"
              >
                + Add Test
              </button>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Next ➡️
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">MRI Scan</label>
              <input
                type="file"
                name="mri"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="w-full border border-gray-300 text-gray-700 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">CT Scan</label>
              <input
                type="file"
                name="ct"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="w-full border border-gray-300 text-gray-700 p-2 rounded-md"
              />
            </div>

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
              >
                ⬅️ Back
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Submit 
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
