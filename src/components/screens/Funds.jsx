import React from "react";
import { FaBackward, FaStepForward, FaForward } from "react-icons/fa";
import { arrow_forward, bank, credit_card, payments } from "../../assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/motion2";

const Funds = () => {
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
    <section>
      <motion.div
        className="dashboard-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="mt-[20px] bg-white rounded-2xl p-6 m-3 gap-[24px] font-montserrat">
          <div className="flex flex-col justify justify-center items-center mt-[16px] gap-[12px] font-montserrat">
            <p className="font-semibold text-[24px] text-[#000] font-montserrat text-center">
              Add Fund
            </p>
            <motion.p
              variants={itemVariants}
              className="font-medium text-[14px] text-[#000] text-center font-montserrat"
            >
              You can add funds to your account using these methods.
            </motion.p>
          </div>

          <Link to="/bank_transfer">
            <div className="flex flex-auto justify justify-between mt-[46px] m-3">
              <div className="flex fle-row gap-[10px]">
                <motion.img
                  variants={itemVariants}
                  src={bank}
                  className="w-[24px] h-[24px]"
                />
                <p className="justify justify-start flex flex-start font-normal text-[16px] font-montserrat text-[#000000]">
                  Bank Transfer
                </p>
              </div>
              <p className="justify justify-end flex flex-end font-semibold text-[16px] font-montserrat text-[#000000]">
                <img src={arrow_forward} className="w-[20px] h-[20px]" />
              </p>
            </div>
          </Link>
          <hr className="items-center w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] " />

          <Link to="/card">
            <div className="flex flex-auto justify justify-between mt-[16px] m-3">
              <div className="flex fle-row gap-[10px]">
                <motion.img
                  variants={itemVariants}
                  src={credit_card}
                  className="w-[24px] h-[24px]"
                />
                <p className="justify justify-start flex font-montserrat flex-start font-normal text-[16px] text-[#000000]">
                  Card
                </p>
              </div>
              <p className="justify justify-end flex flex-end font-montserrat font-semibold text-[16px] text-[#000000]">
                <img src={arrow_forward} className="w-[20px] h-[20px]" />
              </p>
            </div>
          </Link>
          <hr className="items-center w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] mb-[16px]" />

          <Link to="/manual">
            <div className="flex flex-auto justify justify-between m-3">
              <div className="flex fle-row gap-[10px]">
                <motion.img
                  variants={itemVariants}
                  src={payments}
                  className="w-[24px] h-[24px]"
                />
                <p className="justify justify-start flex flex-start font-montserrat font-normal text-[16px] text-[#000000]">
                  Manual
                </p>
              </div>
              <p className="justify justify-end flex flex-end font-semibold font-montserrat text-[16px] text-[#000000]">
                <img src={arrow_forward} className="w-[20px] h-[20px]" />
              </p>
            </div>
          </Link>
          <hr className="items-center p-3 w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] mb-[16px] " />
        </div>
      </motion.div>
      <div className="flex flex-col items-center justify-center m-2 mb-8 gap-[16px]"></div>
    </section>
  );
};

export default Funds;
