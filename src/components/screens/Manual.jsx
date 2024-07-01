import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { arrow_back_ios, bank, bank1, home } from "../../assets";
import BottomNavbar from "../dashboard/BottomNavbar";

const Manual = () => {
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

  const navigate = useNavigate();
  return (
    <section>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto p-3 font-montserrat">
        <Link
          to="#"
          className="flex"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate(-1);
          }}
        >
          <img
            src={arrow_back_ios}
            alt="back"
            className="w-[24px] h-[24px] object-contain"
          />
        </Link>

        <p className="absolute left-1/2 transform -translate-x-1/2 font-montserrat text-center text-black text-[12px] font-semibold cursor-pointer">
          <span className="font-montserrat">Manual</span>
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
            <p className="font-semibold text-[24px] text-[#000] font-montserrat text-center">
              Manual (Bank Transfer)
            </p>
            <p className="font-medium text-[14px] text-[#000] text-center font-montserrat">
              Pay with card, bank transfer, ussd or bank deposit.
            </p>
          </div>

          <div className="gap-[16px]">
            <div className="flex flex-col bg-white border rounded-2xl justify-between mt-10 m-3 p-3">
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src={bank1}
                    className="w-16 h-16 bg-red-100 rounded-full"
                    alt="Bank logo"
                  />
                  <div>
                    <p className="text-base text-[14px] font-medium font-montserrat text-black">
                      Bank Name: <span className="font-semibold">UBA Bank</span>
                    </p>
                    <p className="text-base text-[14px] font-medium font-montserrat text-black">
                      Account Name:{" "}
                      <span className="font-semibold">John Doe</span>
                    </p>
                    <p className="text-base text-[14px] font-medium font-montserrat text-black">
                      Account No:{" "}
                      <span className="font-semibold">2123587356</span>
                    </p>
                  </div>
                </div>
                <p className="text-red-800 text-left text-[12px] font-medium">
                  <span className="font-bold">Note:</span> Automated bank
                  transfer attracts additional charges of ₦50 only.
                </p>
              </div>
              <div className="flex flex-col gap-[16px] mt-4">
                <motion.button
                  variants={itemVariants}
                  className="bg-red-800 font-montserrat text-[14px] text-white font-semibold text-center rounded-full w-full h-9"
                >
                  Copy Account No
                </motion.button>
                <motion.button
                  variants={itemVariants}
                  className="bg-[#F7E5E5] font-montserrat text-[14px] text-[#8E1011] font-semibold text-center rounded-full w-full h-9"
                >
                  Contact Admin
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col items-center justify-center mt-[256px] m-2 mb-8 gap-[16px]"></div>
      <BottomNavbar />
    </section>
  );
};

export default Manual;
