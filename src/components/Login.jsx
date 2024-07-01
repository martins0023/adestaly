import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { call, email, icon, lock, visible, visible_off } from "../assets";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState("empty");

  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevState) =>
      prevState === "visible" ? "hidden" : "visible"
    );
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    handleChange(e);
    if (value.length > 0 && passwordVisibility === "empty") {
      setPasswordVisibility("hidden");
    }
  };

  const [form, setForm] = useState({
    phoneNumber: "",
    password: "",
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
      navigate("/dashboard");
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
            className={`${styles.sectionSubText} text-center text-[18px] font-semibold`}
          >
            Continue the <span className="text-original">adestaly</span>{" "}
            experience
          </p>
        </div>
        <h3
          className={`${styles.sectionSubText2} text-center font-normal text-[14px] mt-2`}
        >
          Welcome back
        </h3>
        <div className="flex justify-end">
          <p className={`${styles.sectionSubText} mt-4`}>
            <span className="text-original">2</span> of 2
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"></span>
            <div className=" flex justify-end items-center relative">
              <input
                type="tel"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-[#ffff] py-4 px-6 w-full
                placeholder:text-secondary
                text-black rounded-lg outlined-none
                border-[#A9A9A9] font-normal text-[18px] border-1"
              />
              <img src={call} className="absolute mr-4" />
            </div>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"></span>
            <div className=" flex justify-end items-center relative">
              <input
                type={passwordVisibility === "visible" ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="bg-[#ffff] py-4 px-6 w-full
                placeholder:text-secondary
                text-black rounded-lg outlined-none
                border-[#A9A9A9] font-normal text-[18px] border-1"
              />
              <img
                src={
                  passwordVisibility === "empty"
                    ? lock
                    : passwordVisibility === "visible"
                    ? visible
                    : visible_off
                }
                className="absolute mr-4 cursor-pointer"
                alt="lock"
                onClick={togglePasswordVisibility}
              />
            </div>
          </label>

          <h3
            className={`${styles.sectionSubText2} flex justify-end items-end mt-4 text-original`}
          >
            Forgot Password?
          </h3>

          <label className="flex flex-row">
            <input
              type="checkbox"
              className="mr-2 border-[#8E1011] bg-[#FFEEEE] rounded-md h-[28px] w-[28px] border-2"
              required
            />
            <span className="text-[#667085] font-normal text-[14px]">
              Keep me logged in
            </span>
          </label>

          <div className="flex flex-auto items-center justify-center">
            <button
              type="submit"
              className={`bg-original py-3 px-20 outline-none uppercase h-[60px] xl w-full sm:w-[406px] text-white font-bold rounded-full ${
                !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!isFormValid()}
            >
              {loading ? "Logging In..." : "LOGIN"}
            </button>
          </div>
        </form>
        <div className="mt-4">
          <p className="text-[#353945] font-normal text-[12px] text-center">
            Dont have an account?{" "}
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

export default SectionWrapper(Login, "login");
