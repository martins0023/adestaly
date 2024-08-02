import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { arrow_back_ios, bank, bank1, home, paywith } from "../../assets";
import BottomNavbar from "../dashboard/BottomNavbar";

const Card = () => {
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

  const [formData, setFormData] = useState({
    amount: "",
    charges: "",
    get: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const [isFieldEnabled, setIsFieldEnabled] = useState({
    charges: false,
    get: false,
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
      charges: !!formData.amount,
      get: !!formData.amount && !!formData.charges,
    });

    const allFieldsFilled = formData.amount && formData.charges && formData.get;

    setIsFormValid(allFieldsFilled);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
  const [loading, setLoading] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  const navigate = useNavigate();
  return (
    <section>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto p-3 font-montserrat">
        <Link
          to="/"
          className="flex  "
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

        <p className="absolute left-1/2 transform -translate-x-1/2 font-montserrat text-center text-black text-[12px] font-semibold cursor-pointer">
          <span className="font-montserrat">Card</span>
        </p>
        <ul className="flex list-none">
          <Link
            to="/dashboard"
            className="flex"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={home}
              alt="home"
              className="cursor-pointer w-[24px] h-[24px]"
            />
          </Link>
        </ul>
      </div>

      <motion.div
        className="dashboard-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="mt-[20px] bg-white rounded-2xl p-6 m-3 gap-[24px] font-montserrat">
          <div className="flex flex-col justify justify-center items-center mt-[16px] gap-[12px] font-montserrat">
            <p className="font-semibold text-[20px] text-[#000] font-montserrat text-center">
              Card
            </p>
            <p className="font-medium text-[14px] text-[#000] text-center font-montserrat">
              Pay with card, bank transfer, ussd or bank deposit.
            </p>
          </div>

          <div className="flex flex-col gap-8 justify justify-between p-3">
            <form
              className="mt-[12px] flex flex-col gap-[11px] relative"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col">
                <span className="text-[#666666] py-1 px-1 text-[10px] absolute top-1/6 transform -translate-y-1/5 ml-5 font-normal mb-4">
                  Amount
                </span>
                <input
                  type="number"
                  name="amount"
                  placeholder="Enter Amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className={`bg-white py-4 px-6 placeholder:text-[12px] text-black ${
                    formData.amount ? "rounded-lg" : "border-[#EEEFF4]"
                  } rounded-xl outline-none border-[#000000] border-1 lg:w-[408px] w-full h-[52px] font-medium`}
                />
              </label>

              <label className="flex flex-col">
                <span className="text-[#666666] py-1 px-1 text-[10px] absolute top-1/6 transform -translate-y-1/5 ml-5 font-normal mb-4">
                  Charges
                </span>
                <input
                  type="number"
                  name="charges"
                  placeholder="Charges"
                  value={formData.charges}
                  onChange={handleInputChange}
                  disabled={!isFieldEnabled.charges}
                  className={`bg-white py-4 px-6 placeholder:text-[12px] text-black ${
                    isFieldEnabled.charges ? "rounded-lg" : "border-[#EEEFF4]"
                  } rounded-xl outline-none border-[#000000] border-1 lg:w-[408px] w-full h-[52px] font-medium`}
                />
              </label>

              <label className="flex flex-col">
                <span className="text-[#666666] py-1 px-1 text-[10px] absolute top-1/6 transform -translate-y-1/5 ml-5 font-normal mb-4">
                  You would get
                </span>
                <input
                  type="number"
                  name="get"
                  placeholder="You would get"
                  value={formData.get}
                  onChange={handleInputChange}
                  disabled={!isFieldEnabled.get}
                  className={`bg-[#ffff] py-4 px-6 placeholder:text-[12px] text-black ${
                    isFieldEnabled.get ? "rounded-lg" : "border-[#EEEFF4]"
                  } rounded-xl outline-none border-[#000000] font-medium border-1 h-[52px] lg:w-[408px] w-full`}
                />
              </label>

              <div className="flex gap-[11px] mt-[32px] justify-center items-center">
                <img
                  src={paywith}
                  className="w-[309.8px] h-[65.16] items-center"
                />
              </div>

              <div className="flex flex-auto items-center justify-center mt-[40px]">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`bg-original py-3 px-20 outline-none uppercase xl text-[12px] sm:w-[406px] text-white font-bold shadow-md rounded-full w-full h-[45px] ${
                    isFormValid ? "" : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  {loading ? "transferring..." : "PAY NOW"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>

      <BottomNavbar />
    </section>
  );
};

export default Card;
