import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { call, email, icon } from "../assets";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [form, setForm] = useState({
    emailaddr: "",
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
      navigate("/login");
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
            Forget Password
          </p>
        </div>
        <h3
          className={`${styles.sectionSubText2} text-center font-normal text-[14px] mt-2`}
        >
          Enter the email account associated with your account and we’ll send
          you the reset instructions!
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-[32px] flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"></span>
            <div className=" flex justify-end items-center relative">
              <input
                type="email"
                name="emailaddr"
                value={form.emailaddr}
                onChange={handleChange}
                placeholder="Email Address"
                className="bg-[#ffff] py-4 px-6 w-full
                placeholder:text-secondary
                text-black rounded-lg outlined-none
                border-[#A9A9A9] font-normal text-[18px] border-1"
              />
              <img src={email} className="absolute mr-4" />
            </div>
          </label>

          <div className="flex flex-auto items-center justify-center mt-[20px]">
            <button
              type="submit"
              className={`bg-original py-3 px-25 outline-none uppercase h-[60px] xl w-full sm:w-[406px] text-white font-bold rounded-full ${
                !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!isFormValid()}
            >
              {loading ? "Recovering..." : "RECOVER PASSWORD"}
            </button>
          </div>
        </form>
        <div className="mt-[24px]">
          <p className="text-[#353945] font-normal text-[12px] text-center">
            Already have an account?{" "}
            <span className="text-[#8E1011] font-semibold text-[12px]">
              {" "}
              <a href="/login"> Login Now</a>
            </span>
          </p>
        </div>

        <div className="mt-[24px]">
          <p className="text-[#353945] font-normal text-[12px] text-center">
            Don’t have an account?{" "}
            <span className="text-[#8E1011] font-semibold text-[12px]">
              {" "}
              <a href="/getstarted"> Sign Up</a>
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ForgetPassword, "ForgetPassword");
