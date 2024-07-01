import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { arrow_back_ios, bank, bank1, home } from "../../assets";
import BottomNavbar from "../dashboard/BottomNavbar";

const Bank_transfer = () => {
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
          <span className="font-montserrat">Bank Transfer</span>
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

      <div className="mt-[20px] bg-white rounded-2xl p-6 m-3 gap-[24px] font-montserrat">
        <div className="flex flex-col justify justify-center items-center mt-[16px] gap-[12px] font-montserrat">
          <p className="font-semibold text-[24px] text-[#000] font-montserrat text-center">
            Bank Transfer
          </p>
          <p className="font-medium text-[14px] text-[#000] text-center font-montserrat">
            To fund your wallet using bank transfer, transfer your specified
            amount to any of the account numbers listed below.
          </p>
        </div>

        <div className="gap-[16px]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col bg-white border rounded-2xl justify-between mt-12 m-3 p-3"
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src={bank1}
                    className="w-16 h-16 bg-red-100 rounded-full"
                    alt="Bank logo"
                  />
                  <div>
                    <p className="text-base text-[14px] font-medium font-montserrat text-black">
                      Bank Transfer:{" "}
                      <span className="font-semibold">Fidelity Bank</span>
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
              <div className="mt-4">
                <button className="bg-red-800 font-montserrat text-[14px] text-white text-center rounded-full w-full h-9">
                  Copy Account No
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col bg-white border rounded-2xl justify-between m-3 p-3"
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src={bank1}
                    className="w-16 h-16 bg-red-100 rounded-full"
                    alt="Bank logo"
                  />
                  <div>
                    <p className="text-base text-[14px] font-medium font-montserrat text-black">
                      Bank Transfer:{" "}
                      <span className="font-semibold">UBA Bank</span>
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
              <div className="mt-4">
                <button className="bg-red-800 font-montserrat text-[14px] text-white text-center rounded-full w-full h-9">
                  Copy Account No
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col bg-white border rounded-2xl justify-between m-3 p-3"
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src={bank1}
                    className="w-16 h-16 bg-red-100 rounded-full"
                    alt="Bank logo"
                  />
                  <div>
                    <p className="text-base text-[14px] font-medium font-montserrat text-black">
                      Bank Transfer:{" "}
                      <span className="font-semibold">Wema Bank</span>
                    </p>
                    <p className="text-base text-[14px] font-medium font-montserrat text-black">
                      Account No:{" "}
                      <span className="font-semibold">3127847232</span>
                    </p>
                  </div>
                </div>
                <p className="text-red-800 text-left text-[12px] font-medium">
                  <span className="font-bold">Note:</span> Automated bank
                  transfer attracts additional charges of ₦50 only.
                </p>
              </div>
              <div className="mt-4">
                <button className="bg-red-800 font-montserrat text-[14px] text-white text-center rounded-full w-full h-9">
                  Copy Account No
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <BottomNavbar />
    </section>
  );
};

export default Bank_transfer;
