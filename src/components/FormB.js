import React, { useState } from "react";

const Renewal = () => {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    percentage: "",
    stream: "",
    marksPercentage: "",
    attendancePercentage: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.studentId) tempErrors.studentId = "Student ID is required";
    if (!formData.percentage) tempErrors.percentage = "Percentage is required";
    if (!formData.stream) tempErrors.stream = "Stream is required";
    if (!formData.marksPercentage)
      tempErrors.marksPercentage = "Marks Percentage is required";
    if (!formData.attendancePercentage)
      tempErrors.attendancePercentage = "Attendance Percentage is required";
    return tempErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:4000/student", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            studentId: formData.studentId,
            twelthPercentage: formData.marksPercentage,
            attendance: formData.attendancePercentage,
            stream: formData.stream,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          alert(data.message);
          // Reset form data
          setFormData({
            name: "",
            studentId: "",
            percentage: "",
            stream: "",
            marksPercentage: "",
            attendancePercentage: "",
          });
          e.target.reset();
        } else {
          alert("Failed to update student");
        }
      } catch (error) {
        console.error("Error updating student:", error);
        alert("Failed to update student");
      }
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-200 mt-100">
      <form
        className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg h-full my-10"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Renewal Form</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Student ID:</label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.studentId && (
            <p className="text-red-500 text-sm mt-1">{errors.studentId}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Percentage:</label>
          <input
            type="text"
            name="percentage"
            value={formData.percentage}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.percentage && (
            <p className="text-red-500 text-sm mt-1">{errors.percentage}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Stream:</label>
          <input
            type="text"
            name="stream"
            value={formData.stream}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.stream && (
            <p className="text-red-500 text-sm mt-1">{errors.stream}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Marks Percentage:</label>
          <input
            type="text"
            name="marksPercentage"
            value={formData.marksPercentage}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.marksPercentage && (
            <p className="text-red-500 text-sm mt-1">
              {errors.marksPercentage}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Attendance Percentage:</label>
          <input
            type="text"
            name="attendancePercentage"
            value={formData.attendancePercentage}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.attendancePercentage && (
            <p className="text-red-500 text-sm mt-1">
              {errors.attendancePercentage}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Renewal;
