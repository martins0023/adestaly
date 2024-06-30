import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Navigate } from "react-router-dom";
import { icon } from "../assets";

const Signup = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    referral: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ul1snaq",
        "template_px09fyc",
        {
          from_name: form.firstname,
          to_name: "Miracle",
          from_email: form.email,
          to_email: "oladapom4@gmail.com",
          message: form.state,
        },
        "5_DaWBIfSUtw3os8H"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            `Thank you ${form.firstname}. We'll will get back to you as soon as possible.`
          );

          setForm({
            referral: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert(`Hola ${form.firstname}, something went wrong.`);
        }
      );
  };

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10
    overflow-hidden bg-white"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75]  p-8 rounded-2xl"
      >
        <div className="flex justify-center items-center">
          <img
            src={icon}
            className="w-[199px] h-[134px]"
            alt="adestaly"
          />
        </div>
        <div className="flex justify-center items-center">
          <p className={`${styles.sectionSubText}`}>
            Begin the <span className="text-original"> adestaly{` `}</span>{" "}
            experience
          </p>
        </div>

        <h3
          className={`${styles.sectionSubText2} flex justify-center items-center mt-4`}
        >
          Getting started is absolutely free.
        </h3>

        <div className="flex flex-end justify-end">
          <p className={`${styles.sectionSubText} mt-4`}>
            <span className="text-original">3</span> of 3
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"></span>
            <input
              type="text"
              name="Referral (Optional)"
              value={form.referral}
              onChange={handleChange}
              placeholder="Referral (Optional)"
              className="bg-[#ffff] py-4 px-6
            placeholder:text-secondary
            text-white rounded-lg outlined-none
            border-[#E6E6E6] font-medium border-4"
            />
          </label>

          <label className="flex flex-row">
            <input
              type="checkbox"
              name="privacy policy"
              value={form.checkbox}
              onChange={handleChange}
              placeholder="You agree to our friendly privacy policy."
              className="bg-[#9c2a2a] py-4 px-6 w-[28px] h-[28px]
                rounded-lg outlined-none
                border-none font-medium border-[#FFEEEE] border-[2px]"
            />
            <span className="text-[#667085] text-[14px] font-[400px] mt-1 ml-3">
              You agree to our friendly{" "}
              <span className="text-original underline underline-offset-4">
                <a href="">privacy policy.</a>
              </span>{" "}
            </span>
          </label>

          <div className="flex flex-auto items-center justify-center">
            <button
              type="submit"
              className="bg-original py-3 px-20 outline-none uppercase
                xl  sm:w-[406px] text-white font-bold shadow-md shadow-primary
                rounded-full"
            >
              {loading ? "signing up..." : "Sign Up"}
            </button>
          </div>
        </form>
        <div
          className={`${styles.sectionSubText2} flex justify-center items-center mt-5`}
        >
          <span className="text-[#667085] text-[14px] font-[400px] mb-1 ml-3">
            Already have an account?{" "}
            <span className="text-original">
              <a href="./login">Login.</a>
            </span>{" "}
          </span>
        </div>
        <div className="flex mt-[146px]"></div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Signup, "signup");
