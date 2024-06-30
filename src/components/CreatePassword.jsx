import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useNavigate } from "react-router-dom";
import { icon, lock } from "../assets";

const CreatePassword = () => {
  const [form, setForm] = useState({
    createpassword: "",
    confirmpassword: "",
    createpin: "",
    confirmpin: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      setLoading(true);
      // Simulate a successful submission
      setTimeout(() => {
        setLoading(false);
        navigate("/login"); // Navigate to the next page
      }, 2000);
    }
  };

  const getPasswordStrength = (password) => {
    if (password.length < 8) return "weak";
    if (password.length < 12) return "medium";
    return "strong";
  };

  const isFormValid = () => {
    return (
      form.createpassword &&
      form.confirmpassword &&
      form.createpin &&
      form.confirmpin &&
      form.createpassword === form.confirmpassword &&
      form.createpin === form.confirmpin &&
      getPasswordStrength(form.createpassword) === "strong" &&
      getPasswordStrength(form.confirmpassword) === "strong" &&
      getPasswordStrength(form.createpin) === "strong" &&
      getPasswordStrength(form.confirmpin) === "strong"
    );
  };

  const getStrengthBarClass = (strength) => {
    switch (strength) {
      case "weak":
        return "bg-[#8E1011] w-1/3";
      case "medium":
        return "bg-[#F2BB2D] w-2/3";
      case "strong":
        return "bg-green-500 w-full";
      default:
        return "";
    }
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
            <span className="text-original">2</span> of 2
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {["createpassword", "confirmpassword", "createpin", "confirmpin"].map(
            (field, idx) => (
              <label key={idx} className="flex flex-col">
                <div className="flex justify-end items-center relative">
                  <input
                    type={field.includes("password") ? "password" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={
                      field === "createpassword"
                        ? "Create Password"
                        : field === "confirmpassword"
                        ? "Confirm Password"
                        : field === "createpin"
                        ? "Create Pin"
                        : "Confirm Pin"
                    }
                    className="bg-[#ffff] text-[18px] py-4 px-6 w-full placeholder:text-secondary text-black rounded-2xl outline-none border-[#A9A9A9] font-regular border-1"
                  />
                  <img src={lock} className="absolute mr-4" alt="lock" />
                </div>
                {[
                  "createpassword",
                  "confirmpassword",
                  "createpin",
                  "confirmpin",
                ].includes(field) && (
                  <div className="mt-2 ml-1">
                    <div
                      className={`h-1.5 rounded-full ${getStrengthBarClass(
                        getPasswordStrength(form[field])
                      )}`}
                    ></div>
                    <span
                      className={`text-sm mt-1 ${
                        getPasswordStrength(form[field]) === "strong"
                          ? "text-green-500"
                          : getPasswordStrength(form[field]) === "medium"
                          ? "text-[#F2BB2D]"
                          : "text-[#8E1011]"
                      }`}
                    >
                      {getPasswordStrength(form[field]) === "strong"
                        ? "Your Password is strong"
                        : getPasswordStrength(form[field]) === "medium"
                        ? "Your Password could be stronger"
                        : "Your Password is too weak"}
                    </span>
                  </div>
                )}
              </label>
            )
          )}

          <input
            type="text"
            name="referral"
            value={form.referral}
            onChange={handleChange}
            placeholder="Referral (Optional)"
            className="bg-[#ffff] py-4 px-6 w-full
              placeholder:text-secondary text-[18px]
              text-black rounded-2xl outline-none
              border-[#A9A9A9] font-medium border-1"
          />

          <div className="flex items-center">
            <input type="checkbox" className="mr-2 border-[#8E1011] bg-[#FFEEEE] rounded-md h-[28px] w-[28px] border-2" required />
            <span className="text-[#667085] font-normal text-[14px]">
              You agree to our friendly{" "}
              <a href="/privacy" className="text-original underline">
                privacy policy
              </a>
              .
            </span>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className={`bg-original py-3 px-20 outline-none uppercase h-[60px] xl w-full sm:w-[406px] text-white font-bold rounded-full ${
                !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!isFormValid()}
            >
              {loading ? "Transferring..." : "Sign Up"}
            </button>
          </div>
        </form>
        <div className="mt-4">
          <p className="text-[#353945] font-normal text-[12px] text-center">
          Already have an account? <span className="text-[#8E1011] font-semibold text-[12px]"> <a href="/login"> Login</a></span>
        </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(CreatePassword, "create password");
