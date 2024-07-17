import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  arrow_back_ios,
  colored_call,
  paywith,
  colored_contact,
  get_in_touch,
  mail,
  service_hour,
  whatsapp_colored,
  whatsapp_group,
  email,
} from "../../assets";
import { useState, useEffect } from "react";
import BottomNavbar from "./BottomNavbar";

const Contact = () => {
  const navigate = useNavigate();

  const HandleHome = () => {
    //
    navigate("/dashboard");
  };

  const [formData, setFormData] = useState({
    name: "",
    emailaddr: "",
    subject: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const [isFieldEnabled, setIsFieldEnabled] = useState({
    emailaddr: false,
    subject: false,
    message: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setIsFieldEnabled({
      emailaddr: !!formData.name,
      subject: !!formData.name && !!formData.emailaddr,
      message: !!formData.name && !!formData.emailaddr && !!formData.subject,
    });

    const allFieldsFilled =
      formData.name &&
      formData.emailaddr &&
      formData.subject &&
      formData.message;

    setIsFormValid(allFieldsFilled);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    navigate("/dashboard");
  };
  const [loading, setLoading] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  const containerVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, staggerChildren: 0.3 },
    },
    exit: {
      x: "100vw",
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3 },
    },
  };
  return (
    <section className="p-1">
      <motion.div
        className="dashboard-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="max-w-7xl mx-auto p-3">
          <div className="w-full flex justify-between items-center">
            <Link
              to="/"
              className="flex"
              onClick={() => {
                navigate(-1);
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={arrow_back_ios}
                alt="back"
                className="w-[24px] h-[24px] object-contain"
              />
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img
              src={service_hour}
              className="w-[111px] h-[111px] object-contain"
            />
            <p className="font-bold text-[24px] text-black text-center">
              Contact Us
            </p>
          </div>
          {/**hello world */}

          <div className="flex flex-col mt-[24px] gap-[16px]">
            <div className=" bg-white rounded-sm flex flex-row h-[64px] items-center gap-[16px] p-[15px]">
              <img src={colored_contact} className="w-[32px] h-[32px]" />
              <p className="text-black font-normal text-[16px]">Call Us</p>
            </div>

            <div className=" bg-white rounded-sm flex flex-row h-[64px] items-center gap-[16px] p-[15px]">
              <img src={mail} className="w-[32px] h-[32px]" />
              <p className="text-black font-normal text-[16px]">Mail Us</p>
            </div>

            <div className=" bg-white rounded-sm flex flex-row h-[64px] items-center gap-[16px] p-[15px]">
              <img src={whatsapp_colored} className="w-[32px] h-[32px]" />
              <p className="text-black font-normal text-[16px]">
                Message Us on WhatsApp
              </p>
            </div>

            <div className=" bg-white rounded-sm flex flex-row h-[64px] items-center gap-[16px] p-[15px]">
              <img src={whatsapp_group} className="w-[32px] h-[32px]" />
              <p className="text-black font-normal text-[16px]">
                Join our WhatsApp Group
              </p>
            </div>
          </div>

          <form className="mt-[12px] " onSubmit={handleSubmit}>
            <div className=" bg-white rounded-sm mt-[24px] items-center gap-[16px] p-[15px]">
              <div className="flex flex-row gap-[15px] mt-[10px]">
                <img src={get_in_touch} className="w-[60px] h-[60px]" />
                <div className="flex flex-col">
                  <p className="text-black font-normal text-[16px]">
                    Get in Touch With Us
                  </p>
                  <p className="text-black font-bold text-[24px]">
                    Direct Messsage
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-[22px] mt-[22px] relative ">
                <label className="flex flex-col">
                  <span className=""></span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`bg-white py-4 px-6 text-[18px] placeholder:text-secondary text-black ${
                      formData.name ? "rounded-lg" : "border-[#EEEFF4]"
                    } rounded-xl outline-none border-[#000000] border-1 lg:w-[408px] w-full h-[56px] font-normal`}
                  />
                </label>

                <label className="flex flex-col">
                  <span className=""></span>
                  <div className="flex items-center relative">
                    <input
                      type="email"
                      name="emailaddr"
                      placeholder="Email Address"
                      value={formData.emailaddr}
                      onChange={handleInputChange}
                      disabled={!isFieldEnabled.emailaddr}
                      className={`bg-white py-4 px-6 text-[18px] placeholder:text-secondary text-black ${
                        isFieldEnabled.emailaddr
                          ? "rounded-lg"
                          : "border-[#EEEFF4]"
                      } rounded-xl outline-none border-[#000000] border-1 lg:w-[408px] w-full h-[56px] font-normal`}
                    />
                    <img
                      src={email}
                      className="absolute right-3 w-5 h-5"
                      alt="Email Icon"
                    />
                  </div>
                </label>

                <label className="flex flex-col">
                  <span className=""></span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    disabled={!isFieldEnabled.subject}
                    className={`bg-[#ffff] py-4 px-6 text-[18px] placeholder:text-secondary text-black ${
                      isFieldEnabled.subject ? "rounded-lg" : "border-[#EEEFF4]"
                    } rounded-xl outline-none border-[#000000] font-normal border-1 lg:w-[408px] w-full`}
                  />
                </label>

                <label className="flex flex-col">
                  <span className=""></span>
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={!isFieldEnabled.message}
                    className={`bg-[#ffff] py-4 px-6 text-[18px] placeholder:text-secondary text-black ${
                      isFieldEnabled.message ? "rounded-lg" : "border-[#EEEFF4]"
                    } rounded-xl outline-none border-[#000000] h-[153px] font-normal border-1 lg:w-[408px] w-full`}
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-auto items-center justify-center mt-[48px]">
              <button
                type="submit"
                className={`bg-original py-3 px-20 outline-none uppercase h-[60px] xl w-full sm:w-[406px] text-white font-bold rounded-full ${
                  !isFormValid ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!isFormValid}
              >
                {loading ? "sending..." : "SEND MESSAGE"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      <div>
        <BottomNavbar />
      </div>
    </section>
  );
};

export default Contact;
