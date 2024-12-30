"use client";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1); // Tracks the current step
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    info: {
      phoneNumber: "",
      CompanyName: "",
      CompanyWebsite: "",
    },
    message: "",
  });
  const [errors, setErrors] = useState({ info: {} });
  const [isModalOpen, setModalOpen] = useState(false); // Tracks modal state
  const [submissionStatus, setSubmissionStatus] = useState(null); // Tracks submission status

  const validate = () => {
    const newErrors = {};
    if (step === 1 && !formData.email) newErrors.email = "Email is required.";
    if (step === 2 && !formData.name) newErrors.name = "Name is required.";
    if (step === 3) {
      if (!formData.info.phoneNumber)
        newErrors.phoneNumber = "Phone number is required.";
      if (!formData.info.CompanyName)
        newErrors.CompanyName = "Company Name is required.";
      if (!formData.info.CompanyWebsite)
        newErrors.CompanyWebsite = "Company Website is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    if (step === 3) {
      if (!validate()) return;

      try {
        const response = await axios.post("/api/submitForm", formData);
        console.log("Response ", response);
        if (response.status === 200) {
          setSubmissionStatus("success");
          console.log("Form submitted successfully:", formData);
        } else {
          setSubmissionStatus("error");
          console.error("Form submission error:", response.data);
        }
      } catch (error) {
        setSubmissionStatus("error");
        console.error("Network error during form submission:", error);
      } finally {
        setFormData({
          email: "",
          name: "",
          info: {
            phoneNumber: "",
            CompanyName: "",
            CompanyWebsite: "",
          },
          message: "",
        });
        setSubmissionStatus(null);
        setModalOpen(false);
        setStep(1);
      }

      return;
    }

    if (validate()) setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name in formData.info) {
  //     setFormData({
  //       ...formData,
  //       info: {
  //         ...formData.info,
  //         [name]: value,
  //       },
  //     });
  //   } else {
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   }
  //   setErrors({ ...errors, [name]: "" });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.info) {
      setFormData((prev) => ({
        ...prev,
        info: {
          ...prev.info,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setStep(1); // Reset the form to the first step
    setFormData({
      email: "",
      name: "",
      info: {
        phoneNumber: "",
        CompanyName: "",
        CompanyWebsite: "",
      },
      message: "",
    });
    setErrors({});
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <button
        onClick={handleModalOpen}
        className="border-[#3b3b3b] border-2 bg-[#3b3b3b] px-4 py-2 text-white transition-colors hover:bg-white hover:text-[#3b3b3b]"
      >
        Let's Connect
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-[90vw] md:w-[30vw]">
            {/* Close Button */}
            <button
              onClick={handleModalClose}
              className="absolute top-3 right-3 font-extrabold text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            {/* Form Content */}
            {submissionStatus === "success" ? (
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-gray-900">
                  Form Submitted Successfully!
                </h2>
                <p className="text-gray-600 mt-5">
                  Thank you for signing up,{" "}
                  <span className="font-bold">{formData.name}.</span>
                </p>
              </div>
            ) : submissionStatus === "error" ? (
              <div className="text-center text-red-500">
                <h2 className="text-3xl font-semibold">Submission Failed!</h2>
                <p>Please try again later.</p>
              </div>
            ) : (
              <div className="flex flex-col">
                {step === 1 && (
                  <>
                    <label
                      htmlFor="email"
                      className="text-2xl mb-5 text-center font-bold text-black"
                    >
                      Set up your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border p-2 rounded-md mb-2 w-full text-black bg-gray-300 placeholder:text-gray-600"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </>
                )}
                {step === 2 && (
                  <>
                    <label
                      htmlFor="name"
                      className="text-2xl mb-5 text-center font-bold text-black"
                    >
                      Enter your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border p-2 rounded-md mb-2 w-full text-black bg-gray-300 placeholder:text-gray-600"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </>
                )}
                {step === 3 && (
                  <>
                    <label
                      htmlFor="phoneNumber"
                      className="text-2xl mb-2 text-center font-bold text-black"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Enter your phone number"
                      id="phone"
                      value={formData.info.phoneNumber}
                      onChange={handleChange}
                      className="border p-2 rounded-md mb-2 focus:outline-none w-full text-black bg-gray-300 placeholder:text-gray-600"
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm">
                        {errors.phoneNumber}
                      </p>
                    )}
                    <label
                      htmlFor="Company-name"
                      className="text-2xl mb-2 mt-6 text-center font-bold text-black"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="CompanyName"
                      placeholder="Enter your Company name"
                      id="CompanyName"
                      value={formData.info.CompanyName}
                      onChange={handleChange}
                      className="border p-2 rounded-md mb-2 focus:outline-none w-full text-black bg-gray-300 placeholder:text-gray-600"
                    />
                    {errors.CompanyName && (
                      <p className="text-red-500 text-sm">
                        {errors.CompanyName}
                      </p>
                    )}
                    <label
                      htmlFor="CompanyWebsite"
                      className="text-2xl mb-2 mt-6 text-center font-bold text-black"
                    >
                      Company Website
                    </label>

                    <input
                      type="text"
                      name="CompanyWebsite"
                      placeholder="Enter your Company Website"
                      id="CompanyWebsite"
                      value={formData.info.CompanyWebsite}
                      onChange={handleChange}
                      className="border p-2 rounded-md mb-2 focus:outline-none w-full text-black bg-gray-300 placeholder:text-gray-600"
                    />
                    {errors.CompanyWebsite && (
                      <p className="text-red-500 text-sm">
                        {errors.CompanyWebsite}
                      </p>
                    )}
                    <label
                      htmlFor="Message"
                      className="text-2xl mb-2 mt-6 text-center font-bold text-black"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      maxLength="500"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={handleChange}
                      className="border p-2 rounded-md mb-2 focus:outline-none w-full text-black bg-gray-300 placeholder:text-gray-600 max-w-full max-h-[180px] resize"
                    ></textarea>
                  </>
                )}
                {/* {step === 4 && (
                  <>
                    <label
                      htmlFor="password"
                      className="text-2xl mb-5 text-center font-bold text-black"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Create your password"
                      value={formData.password}
                      onChange={handleChange}
                      className="border p-2 rounded-md mb-2 w-full text-black bg-gray-300 placeholder:text-gray-600"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm">{errors.password}</p>
                    )}
                  </>
                )} */}
                <div className="flex justify-between gap-4 mt-4">
                  {step > 1 && (
                    <button
                      onClick={handleBack}
                      className="bg-gray-200 items-center font-semibold text-3xl text-black py-2 px-4 rounded-full w-auto"
                    >
                      ⇤
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    className={`${
                      step === 1
                        ? "bg-black"
                        : step === 3
                        ? "bg-green-500"
                        : "bg-blue-500"
                    } text-white py-3 px-3 rounded-lg ${
                      step === 1 ? "w-full" : "w-auto"
                    }`}
                  >
                    {step === 1 ? "Continue" : step === 3 ? "Submit" : "Next ➤"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
