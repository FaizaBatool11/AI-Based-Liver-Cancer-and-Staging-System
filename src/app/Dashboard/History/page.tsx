"use client";
import { useState } from "react";
import { AlertCircle, Info, FileText, Activity, Upload, X, Check, Loader2, Download, RotateCcw, User } from "lucide-react";
import axios from "axios";

export default function LiverCancerPredictionForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    gender: "",
    age_at_index: "",
    bmi: "",
    tumor_nodul: "",
    hepatitis: "",
    afp: "",
    afp_group: "",
    alk: "",
    days_to_last_follow_up: "",
    metastasis: "",
    ct: null as File | null,
    mri: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [ctPreview, setCtPreview] = useState<string | null>(null);
  const [mriPreview, setMriPreview] = useState<string | null>(null);

  // Reference ranges for validation
  const ranges = {
    age_at_index: { min: 18, max: 120, unit: "years" },
    bmi: { min: 10, max: 50, unit: "kg/m²", normal: "18.5-24.9" },
    tumor_nodul: { min: 0, max: 20, unit: "count" },
    afp: { min: 0, max: 100000, unit: "ng/mL", normal: "0-20" },
    alk: { min: 0, max: 1000, unit: "U/L", normal: "30-120" },
    days_to_last_follow_up: { min: 0, max: 10000, unit: "days" },
  };

  const validateField = (name: string, value: string) => {
    if (!value && name !== "ct" && name !== "mri" && name !== "days_to_last_follow_up") {
      return "This field is required";
    }

    // Email validation
    if (name === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
    }

    // Contact validation (basic phone number check)
    if (name === "contact" && value) {
      const contactRegex = /^[0-9+\-\s()]{10,}$/;
      if (!contactRegex.test(value)) {
        return "Please enter a valid contact number";
      }
    }

    const numValue = parseFloat(value);
    if (ranges[name as keyof typeof ranges]) {
      const range = ranges[name as keyof typeof ranges];
      if (numValue < range.min || numValue > range.max) {
        return `Value must be between ${range.min} and ${range.max}`;
      }
    }

    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const name = e.target.name;
      
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, [name]: "File size must be less than 10MB" }));
        return;
      }

      setData((prev) => ({ ...prev, [name]: file }));
      setErrors((prev) => ({ ...prev, [name]: "" }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        if (name === "ct") {
          setCtPreview(reader.result as string);
        } else {
          setMriPreview(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeFile = (name: "ct" | "mri") => {
    setData((prev) => ({ ...prev, [name]: null }));
    if (name === "ct") setCtPreview(null);
    else setMriPreview(null);
  };

  const calculateProgress = () => {
    const fields = Object.keys(data);
    const filled = fields.filter((key) => {
      const value = data[key as keyof typeof data];
      return value !== "" && value !== null;
    }).length;
    return Math.round((filled / fields.length) * 100);
  };

  const isFormValid = () => {
    const requiredFields = ["name", "email", "contact", "gender", "age_at_index", "bmi", "tumor_nodul", "hepatitis", "afp", "afp_group", "alk", "metastasis"];
    const hasErrors = Object.values(errors).some((error) => error !== "");
    const allFilled = requiredFields.every((field) => data[field as keyof typeof data] !== "");
    return !hasErrors && allFilled;
  };

  const handlePredict = async () => {
    // Mark all fields as touched
    const allTouched = Object.keys(data).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);

    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(data).forEach((key) => {
      if (key !== "ct" && key !== "mri") {
        const error = validateField(key, data[key as keyof typeof data] as string);
        if (error) newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setShowResult(false);

    try {
      // Send only clinical parameters to FastAPI
      const clinicalData = {
        age_at_index: parseFloat(data.age_at_index),
        bmi: parseFloat(data.bmi),
        tumor_nodul: parseInt(data.tumor_nodul),
        hepatitis: parseInt(data.hepatitis),
        afp: parseFloat(data.afp),
        afp_group: parseInt(data.afp_group),
        alk: parseFloat(data.alk),
        days_to_last_follow_up: data.days_to_last_follow_up ? parseInt(data.days_to_last_follow_up) : 0,
        metastasis: parseInt(data.metastasis),
      };

      const response = await axios.post("http://localhost:8000/predict", clinicalData);
      setResult(response.data);
      setShowResult(true);
    } catch (err: any) {
      console.error(err);
      alert("Prediction failed: " + (err.response?.data?.detail || err.message));
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to clear all form data?")) {
      setData({
        name: "",
        email: "",
        contact: "",
        gender: "",
        age_at_index: "",
        bmi: "",
        tumor_nodul: "",
        hepatitis: "",
        afp: "",
        afp_group: "",
        alk: "",
        days_to_last_follow_up: "",
        metastasis: "",
        ct: null,
        mri: null,
      });
      setErrors({});
      setTouched({});
      setCtPreview(null);
      setMriPreview(null);
      setShowResult(false);
      setResult(null);
    }
  };

  const exportResults = () => {
    const exportData = {
      patient_data: data,
      prediction_result: result,
      date: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `liver-cancer-prediction-${Date.now()}.json`;
    a.click();
  };

  const progress = calculateProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-2 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Liver Cancer Stage Prediction
            </h1>
          </div>
          <p className="text-gray-600">
            Enter patient information, clinical parameters and upload imaging for AI-based prediction and staging.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Form Completion</span>
            <span className="text-sm font-bold text-blue-600">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Patient Basic Information */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <User className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">Patient Basic Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInputField
              label="Full Name"
              name="name"
              value={data.name}
              onChange={handleChange}
              onBlur={() => handleBlur("name")}
              error={touched.name ? errors.name : ""}
              placeholder="Enter patient's full name"
            />

            <TextInputField
              label="Email Address"
              name="email"
              type="email"
              value={data.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              error={touched.email ? errors.email : ""}
              placeholder="patient@example.com"
            />

            <TextInputField
              label="Contact Number"
              name="contact"
              value={data.contact}
              onChange={handleChange}
              onBlur={() => handleBlur("contact")}
              error={touched.contact ? errors.contact : ""}
              placeholder="+1 234 567 8900"
            />

            <SelectField
              label="Gender"
              name="gender"
              value={data.gender}
              onChange={handleChange}
              onBlur={() => handleBlur("gender")}
              error={touched.gender ? errors.gender : ""}
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" },
              ]}
            />
          </div>
        </section>

        {/* Main Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* LEFT – Clinical Parameters */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Clinical Parameters</h2>
            </div>

            <div className="space-y-4">
              <InputField
                label="Age at Index"
                name="age_at_index"
                value={data.age_at_index}
                onChange={handleChange}
                onBlur={() => handleBlur("age_at_index")}
                error={touched.age_at_index ? errors.age_at_index : ""}
                info="Patient's age at diagnosis"
                range={ranges.age_at_index}
              />

              <InputField
                label="BMI (Body Mass Index)"
                name="bmi"
                value={data.bmi}
                onChange={handleChange}
                onBlur={() => handleBlur("bmi")}
                error={touched.bmi ? errors.bmi : ""}
                info="Body Mass Index - weight(kg) / height(m)²"
                range={ranges.bmi}
                step="0.1"
              />

              <InputField
                label="Tumor Nodules"
                name="tumor_nodul"
                value={data.tumor_nodul}
                onChange={handleChange}
                onBlur={() => handleBlur("tumor_nodul")}
                error={touched.tumor_nodul ? errors.tumor_nodul : ""}
                info="Number of tumor nodules detected"
                range={ranges.tumor_nodul}
              />

              <SelectField
                label="Hepatitis Status"
                name="hepatitis"
                value={data.hepatitis}
                onChange={handleChange}
                onBlur={() => handleBlur("hepatitis")}
                error={touched.hepatitis ? errors.hepatitis : ""}
                info="Presence of hepatitis B or C infection"
                options={[
                  { value: "1", label: "Yes - Positive" },
                  { value: "0", label: "No - Negative" },
                ]}
              />

              <InputField
                label="AFP Level (Alpha-Fetoprotein)"
                name="afp"
                value={data.afp}
                onChange={handleChange}
                onBlur={() => handleBlur("afp")}
                error={touched.afp ? errors.afp : ""}
                info="Tumor marker for liver cancer"
                range={ranges.afp}
              />

              <SelectField
                label="AFP Group"
                name="afp_group"
                value={data.afp_group}
                onChange={handleChange}
                onBlur={() => handleBlur("afp_group")}
                error={touched.afp_group ? errors.afp_group : ""}
                info="AFP level classification"
                options={[
                  { value: "0", label: "Low (0-20 ng/mL)" },
                  { value: "1", label: "Medium (20-200 ng/mL)" },
                  { value: "2", label: "High (>200 ng/mL)" },
                ]}
              />

              <InputField
                label="Alkaline Phosphatase (ALK)"
                name="alk"
                value={data.alk}
                onChange={handleChange}
                onBlur={() => handleBlur("alk")}
                error={touched.alk ? errors.alk : ""}
                info="Liver enzyme level"
                range={ranges.alk}
              />

              <InputField
                label="Days to Last Follow-up"
                name="days_to_last_follow_up"
                value={data.days_to_last_follow_up}
                onChange={handleChange}
                onBlur={() => handleBlur("days_to_last_follow_up")}
                error={touched.days_to_last_follow_up ? errors.days_to_last_follow_up : ""}
                info="Days since last clinical follow-up (optional)"
                range={ranges.days_to_last_follow_up}
              />

              <SelectField
                label="Metastasis Status"
                name="metastasis"
                value={data.metastasis}
                onChange={handleChange}
                onBlur={() => handleBlur("metastasis")}
                error={touched.metastasis ? errors.metastasis : ""}
                info="Presence of cancer spread to other organs"
                options={[
                  { value: "1", label: "Yes - Detected" },
                  { value: "0", label: "No - Not Detected" },
                ]}
              />
            </div>
          </section>

          {/* RIGHT – Imaging Upload */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <Upload className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Medical Imaging</h2>
            </div>

            <FileUploadField
              label="CT Scan"
              name="ct"
              onChange={handleFile}
              preview={ctPreview}
              onRemove={() => removeFile("ct")}
              error={errors.ct}
              info="Upload CT scan images (DICOM, PNG, or JPG)"
            />

            <FileUploadField
              label="MRI Scan"
              name="mri"
              onChange={handleFile}
              preview={mriPreview}
              onRemove={() => removeFile("mri")}
              error={errors.mri}
              info="Upload MRI scan images (DICOM, PNG, or JPG)"
            />

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex gap-2">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-medium mb-1">Image Requirements:</p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>Maximum file size: 10MB</li>
                    <li>Accepted formats: DICOM, PNG, JPG</li>
                    <li>Images should be clear and properly oriented</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button
            onClick={handlePredict}
            disabled={!isFormValid() || isLoading}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-lg font-medium transition-all ${
              isFormValid() && !isLoading
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Activity className="w-5 h-5" />
                Predict Cancer Stage
              </>
            )}
          </button>

          <button
            onClick={handleReset}
            disabled={isLoading}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg text-lg font-medium hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Reset Form
          </button>
        </div>

        {/* {showResult && result && (
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-300 animate-fadeIn max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Prediction Result</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-100 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-700 mb-1">Predicted Class</p>
                <p className="text-2xl font-bold text-blue-800">{result.predicted_class}</p>
              </div>

              <div
                className={`rounded-lg p-4 text-center ${
                  result.confidence >= 0.8
                    ? "bg-green-100 text-green-800"
                    : result.confidence >= 0.5
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                <p className="text-sm mb-1">Confidence</p>
                <p className="text-2xl font-bold">{(result.confidence * 100).toFixed(2)}%</p>
              </div>
            </div>

            {result.risk_level && (
              <div
                className={`p-3 rounded-lg text-center font-semibold mb-4 ${
                  result.risk_level === "High"
                    ? "bg-red-200 text-red-800"
                    : result.risk_level === "Moderate"
                    ? "bg-yellow-200 text-yellow-800"
                    : "bg-green-200 text-green-800"
                }`}
              >
                Risk Level: {result.risk_level}
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={exportResults}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                <Download className="w-4 h-4" />
                Export Results
              </button>
            </div>
          </div>
        )} */}
                {showResult && result && (
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl p-8 border border-blue-200 animate-fadeIn max-w-4xl mx-auto">
            {/* Header with Icon */}
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-600 p-4 rounded-full">
                <Activity className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Prediction Results</h2>
            <p className="text-center text-gray-600 mb-8">AI-Based Cancer Stage Analysis</p>

            {/* Main Result Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-2 border-blue-300">
              <div className="text-center mb-4">
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">Cancer Stage</p>
                <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg">
                  <p className="text-4xl font-bold">{result.predicted_class}</p>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Confidence Score */}
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-gray-600 uppercase">Confidence Score</p>
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-2">
                  {(result.confidence * 100).toFixed(1)}%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full transition-all duration-500 ${
                      result.confidence >= 0.8
                        ? "bg-gradient-to-r from-green-400 to-green-600"
                        : result.confidence >= 0.5
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
                        : "bg-gradient-to-r from-red-400 to-red-600"
                    }`}
                    style={{ width: `${result.confidence * 100}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {result.confidence >= 0.8
                    ? "High confidence prediction"
                    : result.confidence >= 0.5
                    ? "Moderate confidence prediction"
                    : "Low confidence - recommend further testing"}
                </p>
              </div>

              {/* Risk Level */}
              {/* <div
                className={`rounded-xl shadow-md p-6 border-l-4 ${
                  result.risk_level === "High"
                    ? "bg-red-50 border-red-500"
                    : result.risk_level === "Moderate"
                    ? "bg-yellow-50 border-yellow-500"
                    : "bg-green-50 border-green-500"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-gray-600 uppercase">Risk Assessment</p>
                  <AlertCircle
                    className={`w-5 h-5 ${
                      result.risk_level === "High"
                        ? "text-red-600"
                        : result.risk_level === "Moderate"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  />
                </div>
                <p
                  className={`text-3xl font-bold mb-2 ${
                    result.risk_level === "High"
                      ? "text-red-700"
                      : result.risk_level === "Moderate"
                      ? "text-yellow-700"
                      : "text-green-700"
                  }`}
                >
                  {result.risk_level || "Low"}
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  {result.risk_level === "High"
                    ? "Immediate medical attention recommended"
                    : result.risk_level === "Moderate"
                    ? "Regular monitoring and follow-up required"
                    : "Maintain routine check-ups"}
                </p>
              </div> */}
            </div>

            {/* Recommendation Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Important Notice</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    This prediction is generated by an AI model and should be used as a screening tool only. 
                    Please consult with a qualified healthcare professional for proper diagnosis and treatment planning. 
                    Clinical judgment and additional tests may be required for accurate assessment.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={exportResults}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download Report
              </button>
              <button
                onClick={() => window.print()}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all shadow-md hover:shadow-lg"
              >
                <FileText className="w-5 h-5" />
                Print Results
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function TextInputField({ label, name, value, onChange, onBlur, error, placeholder, type = "text" }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        placeholder={placeholder}
        className={`w-full border-2 p-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 ${
          error
            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
            : value
            ? "border-blue-400 focus:border-blue-500 focus:ring-blue-200"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
        }`}
      />
      {error && (
        <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}

function Tooltip({ text, children }: any) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
      {show && (
        <div className="absolute z-10 w-64 p-2 text-xs text-white bg-gray-900 rounded-lg shadow-lg -top-2 right-6">
          {text}
          <div className="absolute top-2 -right-1 w-2 h-2 bg-gray-900 transform rotate-45" />
        </div>
      )}
    </div>
  );
}

function InputField({ label, name, value, onChange, onBlur, error, info, range, step = "1" }: any) {
  const numValue = parseFloat(value);
  const isOutOfNormal = range?.normal && value && !isNaN(numValue) && 
    (numValue < parseFloat(range.normal.split("-")[0]) || numValue > parseFloat(range.normal.split("-")[1]));

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        {info && (
          <Tooltip text={info}>
            <Info className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-help" />
          </Tooltip>
        )}
      </div>
      <input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type="number"
        step={step}
        className={`w-full border-2 p-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 ${
          error
            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
            : value
            ? "border-blue-400 focus:border-blue-500 focus:ring-blue-200"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
        }`}
      />
      {range && (
        <p className="text-xs text-gray-500 mt-1">
          Range: {range.min}-{range.max} {range.unit}
          {range.normal && ` (Normal: ${range.normal})`}
        </p>
      )}
      {isOutOfNormal && (
        <p className="text-xs text-orange-600 mt-1 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          Value outside normal range
        </p>
      )}
      {error && (
        <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({ label, name, value, onChange, onBlur, error, info, options }: any) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        {info && (
          <Tooltip text={info}>
            <Info className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-help" />
          </Tooltip>
        )}
      </div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full border-2 p-3 rounded-lg bg-white text-gray-900 transition-all focus:outline-none focus:ring-2 ${
          error
            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
            : value
            ? "border-blue-400 focus:border-blue-500 focus:ring-blue-200"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
        }`}
      >
        <option value="">Select an option</option>
        {options.map((o: any) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}

function FileUploadField({ label, name, onChange, preview, onRemove, error, info }: any) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-1">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        {info && (
          <Tooltip text={info}>
            <Info className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-help" />
          </Tooltip>
        )}
      </div>

      {!preview ? (
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-8 h-8 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-400 mt-1">DICOM, PNG, JPG (MAX. 10MB)</p>
          </div>
          <input name={name} type="file" className="hidden" onChange={onChange} accept=".dcm,.png,.jpg,.jpeg" />
        </label>
      ) : (
        <div className="relative border-2 border-green-300 rounded-lg p-4 bg-green-50">
          <button
            onClick={onRemove}
            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
            type="button"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden flex-shrink-0">
              <img src={preview} alt="Preview" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">File uploaded successfully</p>
              <p className="text-xs text-gray-500 mt-1">Click the X button to remove</p>
            </div>
            <Check className="w-6 h-6 text-green-600" />
          </div>
        </div>
      )}

      {error && (
        <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}