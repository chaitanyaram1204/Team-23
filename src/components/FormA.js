import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  gender: yup
    .string()
    .oneOf(["male", "female"], "Gender is required")
    .required("Gender is required"),
  twelthPercentage: yup
    .number()
    .typeError("12th Percentage is required")
    .required("12th Percentage is required")
    .min(0)
    .max(100),
  college: yup.string().required("College is required"),
  stream: yup.string().required("Stream is required"),
  scholarshipYear: yup
    .number()
    .typeError("Scholarship year is required")
    .required("Scholarship Year is required"),
  scholarshipAmount: yup
    .number()
    .typeError("scholarship Amount is required")
    .required("Scholarship Amount is required"),
  graduationYear: yup
    .number()
    .typeError("Graduation Year is required")
    .required("Graduation Year is required"),
  currentOccupation: yup.string().required("Current Occupation is Required"),
  ngoRegion: yup.string().required("NGO Region is required"),
  address: yup.object().shape({
    street: yup.string().required("Street is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    postalCode: yup
      .string()
      .typeError("Postal code is required")
      .required("Postal Code is required"),
    country: yup.string().required("Country is required"),
  }),
});

function FormA() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await fetch("http://localhost:4000/student", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Student created successfully!");
        reset();
      } else {
        alert(
          "Failed to create student: " + (result.message || "Unknown error")
        );
      }
    } catch (error) {
      console.error("Error creating student:", error);
      alert("Failed to create student");
    }
  };
  return (
    <div className="flex justify-center items-center bg-gray-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl shadow-xl w-full my-10 max-w-lg"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Student Form</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-left">Name:</label>
          <input
            type="text"
            {...register("name")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-left">Gender:</label>
          <select
            {...register("gender")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-left text-gray-700">
            12th Percentage:
          </label>
          <input
            type="number"
            {...register("twelthPercentage")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.twelthPercentage && (
            <p className="text-red-500 text-sm mt-1">
              {errors.twelthPercentage.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-left text-gray-700">College:</label>
          <input
            type="text"
            {...register("college")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.college && (
            <p className="text-red-500 text-sm mt-1">
              {errors.college.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-left text-gray-700">Stream:</label>
          <input
            type="text"
            {...register("stream")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.stream && (
            <p className="text-red-500 text-sm mt-1">{errors.stream.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-left text-gray-700">
            Scholarship Year:
          </label>
          <input
            type="number"
            {...register("scholarshipYear")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.scholarshipYear && (
            <p className="text-red-500 text-sm mt-1">
              {errors.scholarshipYear.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-left text-gray-700">
            Scholarship Amount:
          </label>
          <input
            type="number"
            {...register("scholarshipAmount")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.scholarshipAmount && (
            <p className="text-red-500 text-sm mt-1">
              {errors.scholarshipAmount.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-left text-gray-700">
            Graduation Year:
          </label>
          <input
            type="number"
            {...register("graduationYear")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.graduationYear && (
            <p className="text-red-500 text-sm mt-1">
              {errors.graduationYear.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-left text-gray-700">
            Current Occupation:
          </label>
          <input
            type="text"
            {...register("currentOccupation")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-left text-gray-700">NGO Region:</label>
          <input
            type="text"
            {...register("ngoRegion")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.ngoRegion && (
            <p className="text-red-500 text-sm mt-1">
              {errors.ngoRegion.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-left text-gray-700">Address:</label>
          <input
            type="text"
            placeholder="Street"
            {...register("address.street")}
            className="w-full p-2 border border-gray-300 rounded mt-1 mb-2"
          />
          {errors.address?.street && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.street.message}
            </p>
          )}
          <input
            type="text"
            placeholder="City"
            {...register("address.city")}
            className="w-full p-2 border border-gray-300 rounded mt-1 mb-2"
          />
          {errors.address?.city && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.city.message}
            </p>
          )}
          <input
            type="text"
            placeholder="State"
            {...register("address.state")}
            className="w-full p-2 border border-gray-300 rounded mt-1 mb-2"
          />
          {errors.address?.state && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.state.message}
            </p>
          )}
          <input
            type="text"
            placeholder="Postal Code"
            {...register("address.postalCode")}
            className="w-full p-2 border border-gray-300 rounded mt-1 mb-2"
          />
          {errors.address?.postalCode && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.postalCode.message}
            </p>
          )}
          <input
            type="text"
            placeholder="Country"
            {...register("address.country")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.address?.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.country.message}
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
}

export default FormA;
