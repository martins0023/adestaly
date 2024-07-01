import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { refpayments, refperson } from "../../../assets";
import { useNavigate } from "react-router-dom";

const commissions = [
  {
    id: 1,
    Referrals: 8,
    commision: 10,
  },
];

const CommissionCard = ({ commission }) => (
  <div className="flex flex-row gap-[12px]">
    <div className="bg-white w-full h-[115px] rounded-xl p-3">
      <img src={refperson} className="w-[35px] h-[32px]" />
      <div className="flex flex-col mt-2 gap-[4px]">
        <p className="text-black text-[20px] font-bold">
          {commission.Referrals}
        </p>
        <p className="text-[#616161] font-medium text-[12px]">Referrals</p>
      </div>
    </div>

    <div className="bg-white w-full h-[115px] rounded-xl p-3">
      <img src={refpayments} className="w-[32px] h-[32px]" />
      <div className="flex flex-col mt-2 gap-[4px]">
        <p className="text-black text-[20px] font-bold">
          {commission.commision}
        </p>
        <p className="text-[#616161] font-medium text-[12px]">commission</p>
      </div>
    </div>
  </div>
);

const ComissionRef = () => {
  const navigate = useNavigate();
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
    link: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const allFieldsFilled = formData.link;

    setIsFormValid(allFieldsFilled);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    navigate("/withdrawfunds");
  };

  const [loading, setLoading] = useState(false);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex flex-col justify-between p-5 gap-[32px]">
        <motion.div variants={itemVariants}>
          {commissions.map((commission) => (
            <CommissionCard key={commission.id} commission={commission} />
          ))}
        </motion.div>

        <div className="bg-white p-3 rounded-xl">
          <p className="text-black font-semibold text-[20px]">Referral Link</p>
          <div>
            <form
              className="mt-[12px] flex flex-col gap-[11px] relative"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col">
                <span className="text-[#666666] py-1 text-[12px] absolute top-1/6 transform -translate-y-1/5 px-3 font-normal mb-4">
                  Your Link
                </span>
                <input
                  type="text"
                  name="link"
                  placeholder="https://adestaly.com/miracle"
                  value={formData.link}
                  onChange={handleInputChange}
                  className={`bg-white py-4 px-3 placeholder:text-[#000000] text-black ${
                    formData.link ? "rounded-lg" : "border-[#EEEFF4]"
                  } rounded-xl outline-none border-[#000000] border-1 lg:w-[408px] w-full h-[56px] font-medium`}
                />
              </label>

              <div className="flex flex-col gap-[12px] items-center justify-center mt-2">
                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={!isFormValid}
                  className={`bg-red-800 font-montserrat text-[14px] text-white font-semibold text-center rounded-full w-full h-9 ${
                    isFormValid ? "" : "cursor-not-allowed"
                  }`}
                >
                  {loading ? "transferring..." : "Withdraw"}
                </motion.button>
                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={!isFormValid}
                  className={`bg-[#F7E5E5] font-montserrat text-[14px] text-[#8E1011] font-semibold text-center rounded-full w-full h-9 ${
                    isFormValid ? "" : " cursor-not-allowed"
                  }`}
                >
                  {loading ? "transferring..." : "Copy Link"}
                </motion.button>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-white p-3 rounded-xl">
          <p className="text-black font-semibold text-[20px]">
            Commission List
          </p>
          <div className="border-[#EEEFF4] border rounded-xl mt-4">
            <div className="flex flex-auto justify justify-between mt-[46px] m-3">
              <div className="flex fle-row gap-[10px]">
                <p className="justify justify-start flex flex-start font-semibold text-[16px] font-montserrat text-[#8E1011]">
                  Service
                </p>
              </div>
              <p className="justify justify-end flex flex-end font-semibold text-[16px] font-montserrat text-[#8E1011]">
                Bonus
              </p>
            </div>

            <hr className="items-center w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] " />

            <div className="flex flex-auto justify justify-between  m-3">
              <div className="flex fle-row gap-[10px]">
                <p className="justify justify-start flex flex-start font-medium text-[14px] font-montserrat text-[#000000]">
                  Account Upgrade
                </p>
              </div>
              <p className="justify justify-end flex flex-end font-semibold text-[14px] font-montserrat text-[#000000]">
                NO
              </p>
            </div>

            <hr className="items-center w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] " />

            <div className="flex flex-auto justify justify-between  m-3">
              <div className="flex fle-row gap-[10px]">
                <p className="justify justify-start flex flex-start font-medium text-[14px] font-montserrat text-[#000000]">
                  Airtime Bonus
                </p>
              </div>
              <p className="justify justify-end flex flex-end font-semibold text-[14px] font-montserrat text-[#000000]">
                NO
              </p>
            </div>

            <hr className="items-center w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] " />

            <div className="flex flex-auto justify justify-between m-3">
              <div className="flex fle-row gap-[10px]">
                <p className="justify justify-start flex flex-start font-medium text-[14px] font-montserrat text-[#000000]">
                  Data Bonus
                </p>
              </div>
              <p className="justify justify-end flex flex-end font-semibold text-[14px] font-montserrat text-[#000000]">
                NO
              </p>
            </div>

            <hr className="items-center w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] " />

            <div className="flex flex-auto justify justify-between m-3">
              <div className="flex fle-row gap-[10px]">
                <p className="justify justify-start flex flex-start font-medium text-[14px] font-montserrat text-[#000000]">
                  Cable TV Bonus
                </p>
              </div>
              <p className="justify justify-end flex flex-end font-semibold text-[14px] font-montserrat text-[#000000]">
                NO
              </p>
            </div>

            <hr className="items-center w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] " />

            <div className="flex flex-auto justify justify-between m-3">
              <div className="flex fle-row gap-[10px]">
                <p className="justify justify-start flex flex-start font-medium text-[14px] font-montserrat text-[#000000]">
                  Electricity Bonus
                </p>
              </div>
              <p className="justify justify-end flex flex-end font-semibold text-[14px] font-montserrat text-[#000000]">
                NO
              </p>
            </div>

            <hr className="items-center w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] " />

            <div className="flex flex-auto justify justify-between m-3">
              <div className="flex fle-row gap-[10px]">
                <p className="justify justify-start flex flex-start font-medium text-[14px] font-montserrat text-[#000000]">
                  Exam Bonus
                </p>
              </div>
              <p className="justify justify-end flex flex-end font-semibold text-[14px] font-montserrat text-[#000000]">
                NO
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ComissionRef;
