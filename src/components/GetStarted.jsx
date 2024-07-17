import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { email, icon } from "../assets";

const GetStarted = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    state: "",
  });
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // State for alert visibility
  const formRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      setShowAlert(true); // Show alert if form is incomplete
    } else {
      // Handle form submission
      navigate("/createpassword");
    }
  };

  const isFormValid = () => {
    return Object.values(form).every((value) => value.trim() !== "");
  };

  return (
    <div className="flex flex-col mt-12 overflow-hidden">
      {showAlert && (
        <div className="fixed top-0 left-0 right-0 bg-red-500 text-white py-2 text-center">
          Please fill out all fields correctly.
        </div>
      )}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] rounded-2xl"
      >
        <div className="flex justify-center items-center mb-4">
          <img src={icon} className="w-[141px] h-[95px]" alt="adestaly" />
        </div>
        <div className="flex justify-center items-center">
          <p
            className={`${styles.sectionSubText} text-center text-[24px] font-semibold`}
          >
            Begin the <span className="text-original">adestaly</span> experience
          </p>
        </div>
        <h3
          className={`${styles.sectionSubText2} text-center font-normal text-[14px] mt-2`}
        >
          Getting started is absolutely free.
        </h3>
        <div className="flex justify-end">
          <p className={`${styles.sectionSubText} mt-4`}>
            <span className="text-original">1</span> of 2
          </p>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <input
              type="text"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
              placeholder="Enter first name"
              className="bg-[#FFFFFF] py-3 px-4
                placeholder:text-[#A9A9A9]
                text-black rounded-lg outline-none
                border-[#E6E6E6] font-medium border-2"
            />
          </label>
          <label className="flex flex-col">
            <input
              type="text"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
              placeholder="Enter last name"
              className="bg-[#ffff] py-3 px-4
                placeholder:text-secondary
                text-black rounded-lg outline-none
                border-[#E6E6E6] font-medium border-2"
            />
          </label>
          <label className="flex flex-col">
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="bg-[#ffff] py-3 px-4
                placeholder:text-secondary
                text-black rounded-lg outline-none
                border-[#E6E6E6] font-medium border-2"
            />
          </label>
          <label className="flex flex-col">
            <div className="flex items-center relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="bg-[#ffff] py-3 px-4 w-full
                  placeholder:text-secondary
                  text-black rounded-lg outline-none
                  border-[#E6E6E6] font-medium border-2"
              />
              <img
                src={email}
                className="absolute right-3 w-5 h-5"
                alt="Email Icon"
              />
            </div>
          </label>
          <label className="flex flex-col">
            <select
              type="text"
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="Select State"
              className="bg-[#ffff] py-3 px-4
                placeholder:text-secondary
                text-black rounded-lg outline-none
                border-[#E6E6E6] font-medium border-2"
            >
              <option value="" disabled>
                Select State
              </option>
              <option value="abia">ABIA</option>
              <option value="abuja">ABUJA</option>
              <option value="lagos">LAGOS</option>
              <option value="oyo">OYO</option>
              <option value="osun">OSUN</option>
              <option value="kwara">KWARA</option>
              <option value="nassarawa">NASSARAWA</option>
              <option value="niger">NIGER</option>
            </select>
          </label>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className={`bg-original py-3 px-20 outline-none uppercase h-[60px]
                xl w-full sm:w-[406px] text-white font-bold
                rounded-full ${
                  !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
              disabled={!isFormValid()}
            >
              {loading ? "signing up..." : "Continue"}
            </button>
          </div>
        </form>
        <div className="mt-4">
          <p className="text-[#353945] font-normal text-[12px] text-center">
            Already Have an account?{" "}
            <span className="text-[#8E1011] font-semibold text-[12px]">
              {" "}
              <a href="/login"> Sign In</a>
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(GetStarted, "getstarted");
