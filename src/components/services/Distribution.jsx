import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import Switch from "react-switch";
import { arrow_back_ios, dropdown, info, naira } from "../../assets";
import { Link, useNavigate } from "react-router-dom";

const Distribution = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    distribution: "",
    type: "",
    phoneNumber: "",
    meterno: "",
    amount: "",
    pay: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const [isFieldEnabled, setIsFieldEnabled] = useState({
    type: false,
    phoneNumber: false,
    meterno: false,
    amount: false,
    pay: false,
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
      type: !!formData.distribution,
      phoneNumber: !!formData.distribution && !!formData.type,
      meterno:
        !!formData.distribution && !!formData.type && !!formData.phoneNumber,
      amount:
        !!formData.distribution && !!formData.phoneNumber && !!formData.meterno,
      pay:
        !!formData.distribution &&
        !!formData.type &&
        !!formData.phoneNumber &&
        !!formData.meterno &&
        !!formData.amount,
    });

    const allFieldsFilled =
      formData.distribution &&
      formData.type &&
      formData.phoneNumber &&
      formData.meterno &&
      formData.amount &&
      formData.pay;

    setIsFormValid(allFieldsFilled);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    navigate("/review");
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
    <section className={`${styles.paddingX} `}>
      <motion.div
        className="dashboard-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto mb-4">
          <Link
            to="/"
            className="flex m-1"
            onClick={() => {
              navigate(-1);
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={arrow_back_ios}
              alt="back"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="text-black justify-center ml-5 font-semibold text-[14px]">
              Buy Electricity
            </p>
          </Link>
        </div>
        <div className="w-full justify-between items-center max-w-7xl mx-auto ">
          <div className="flex flex-wrap lg:flex-nowrap ">
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-[79px] rounded-xl w-full lg:w-[1254px] p-[20px] m-2 bg-hero-pattern bg-no-repeat bg-cover bg-center">
              <div className="flex justify-between items-center ">
                <div className="row-span-30 gap-4">
                  <p className="text-[#FFFFFF] text-[12px] font-semibold">
                    Balance
                  </p>
                  <div className="flex flex-row">
                    <img src={naira} className="w-[14px] h-[12.3px] mt-1.5" />
                    <p className="font-bold font-montserrat text-[16px] h-10 ml-1">
                      1,000.65
                    </p>
                    <img
                      src={dropdown}
                      className="w-[13.33px] h-[6.67px] ml-[9.33px] mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 justify justify-between p-3">
            <form
              className="mt-[5px] flex flex-col gap-[1px]"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4"></span>
                <select
                  name="distribution"
                  placeholder="Select Distribution"
                  value={formData.distribution}
                  onChange={handleInputChange}
                  className={`bg-white py-4 px-6 placeholder:text-secondary text-black ${
                    formData.distribution ? "rounded-lg" : "border-0"
                  } rounded-xl outline-none border-[#000000] border-1 lg:w-full w-full h-[52px] text-[12px] font-medium`}
                >
                  <option value="" disabled>
                    Select Distribution
                  </option>
                  <option value="eko">EKO ELECTRIC</option>
                  <option value="kaduna">KADUNA ELECTRIC</option>
                  <option value="ikeja">IKEJA ELECTRIC</option>
                  <option value="jos">JOS ELECTRIC</option>
                  <option value="abuja">ABUJA ELECTRIC</option>
                  <option value="kano">KANO ELECTRIC</option>
                  <option value="ph">PORT HARCOURT ELECTRIC</option>
                  <option value="ibadan">IBADAN ELECTRIC</option>
                </select>
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium mb-4"></span>
                <select
                  name="type"
                  placeholder="Select Type"
                  value={formData.type}
                  onChange={handleInputChange}
                  disabled={!isFieldEnabled.type}
                  className={`bg-white py-4 px-6 placeholder:text-secondary text-black ${
                    isFieldEnabled.type ? "rounded-lg" : "border-0"
                  } rounded-xl outline-none border-[#000000] border-1 lg:w-full w-full h-[52px] text-[12px] font-medium`}
                >
                  <option value="" disabled>
                    Select Type
                  </option>
                  <option value="prepaid">Prepaid</option>
                </select>
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium mb-4"></span>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Customer Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  disabled={!isFieldEnabled.phoneNumber}
                  className={`bg-[#ffff] py-4 px-6 placeholder:text-secondary text-black ${
                    isFieldEnabled.phoneNumber ? "rounded-lg" : "border-0"
                  } rounded-xl outline-none border-[#000000] font-medium border-1 h-[52px] text-[12px] lg:w-full w-full`}
                />
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium mb-4"></span>
                <input
                  type="number"
                  name="meterno"
                  placeholder="Meter Number"
                  value={formData.meterno}
                  onChange={handleInputChange}
                  disabled={!isFieldEnabled.meterno}
                  className={`bg-[#ffff] py-4 px-6 placeholder:text-secondary text-black ${
                    isFieldEnabled.meterno ? "rounded-lg" : "border-0"
                  } rounded-xl outline-none border-[#000000] font-medium border-1 h-[52px] text-[12px] lg:w-full w-full`}
                />
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium mb-4"></span>
                <input
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  disabled={!isFieldEnabled.amount}
                  className={`bg-[#ffff] py-4 px-6 placeholder:text-secondary text-black ${
                    isFieldEnabled.amount ? "rounded-lg" : "border-0"
                  } rounded-xl outline-none border-[#000000] font-medium border-1 h-[52px] text-[12px] lg:w-full w-full`}
                />
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium mb-4"></span>
                <input
                  type="number"
                  name="pay"
                  placeholder="Amount to Pay"
                  value={formData.pay}
                  onChange={handleInputChange}
                  disabled={!isFieldEnabled.pay}
                  className={`bg-[#ffff] py-4 px-6 placeholder:text-secondary text-black ${
                    isFieldEnabled.pay ? "rounded-lg" : "border-0"
                  } rounded-xl outline-none border-[#000000] font-medium border-1 h-[52px] text-[12px] lg:w-full w-full`}
                />
              </label>

              <div className="flex flex-col gap-[8px] mt-[16px]">
                <div className="flex flex-row gap-[4px] bg-[#FFE8E8] items-center">
                  <img src={info} className="w-[12px] h-[12px]" />
                  <p className="text-[12px] font-normal text-[#E30613]">
                    Transaction attracts a service charge of -5 only
                  </p>
                </div>
                <div className="flex flex-row gap-[4px] bg-[#FFE8E8] items-center">
                  <img src={info} className="w-[12px] h-[12px]" />
                  <p className="bg-[#FFE8E8] text-[12px] font-normal text-[#E30613]">
                    Minimum until purchase is 1,000
                  </p>
                </div>
              </div>

              <div className="flex flex-auto items-center justify-center mt-[40px]">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`bg-original py-3 px-20 outline-none uppercase xl sm:w-[406px] text-white font-bold shadow-md rounded-full w-full h-[53px] ${
                    isFormValid ? "" : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  {loading ? "transferring..." : "Continue"}
                </button>
              </div>

              <div className=" " />
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Distribution;
