import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { arrow_back_ios, cancel, home } from "../../assets";

const Review = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    // Handle form submission
    navigate("/transactiondetails");
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

  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //set state for time
  const [currentTime, setCurrentTime] = useState("");

  //set state for date
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(formattedTime);
    };

    // Update time immediately when component mounts
    updateTime();

    // Update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const formattedDate = `${String(now.getMonth() + 1).padStart(
        2,
        "0"
      )}/${String(now.getDate()).padStart(2, "0")}/${now.getFullYear()}`;
      setCurrentDate(formattedDate);
    };

    // Set date immediately when component mounts
    updateDate();
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [pin, setPin] = useState(["", "", "", ""]);

  const handleNumberClick = (number) => {
    const newPin = [...pin];
    const emptyIndex = newPin.findIndex((digit) => digit === "");
    if (emptyIndex !== -1) {
      newPin[emptyIndex] = number.toString();
      setPin(newPin);
    }
  };

  const handleClear = () => {
    const newPin = [...pin];
    const lastFilledIndex = newPin
      .slice()
      .reverse()
      .findIndex((digit) => digit !== "");
    if (lastFilledIndex !== -1) {
      newPin[3 - lastFilledIndex] = "";
      setPin(newPin);
    }
  };

  return (
    <section className={`${styles.paddingX} p-1`}>
      <motion.div
        className="dashboard-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-full flex  justify-between items-center max-w-7xl mx-auto p-3">
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

          <p className="flex justify justify-end ml-[100px] flex-end text-black text-[12px] font-semibold cursor-pointer ">
            <span className="">Review</span>
          </p>
          <ul className="flex list-none ml-[109px] sm:flex flex-row">
            <Link
              to="/dashboard"
              className="flex  "
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

        <div className="mt-[54px] bg-white rounded-3xl p-7 m-3 gap-[24px]">
          <div className="flex flex-auto justify justify-between mt-[16px] ">
            <p className="justify justify-start flex flex-start font-normal text-[16px] text-[#6A6A6A]">
              Biller
            </p>
            <p className="justify justify-end flex flex-end font-semibold text-[16px] text-[#000000]">
              MTN
            </p>
          </div>
          <hr className=" w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] " />
          <div className="flex flex-auto justify justify-between mt-[16px] ">
            <p className="justify justify-start flex flex-start font-normal text-[16px] text-[#6A6A6A]">
              Product
            </p>
            <p className="justify justify-end flex flex-end font-semibold text-[16px] text-[#000000]">
              MTNNG
            </p>
          </div>
          <hr className=" w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] mb-[16px]" />
          <div className="flex flex-auto justify justify-between ">
            <p className="justify justify-start flex flex-start font-normal text-[16px] text-[#6A6A6A]">
              Amount
            </p>
            <p className="justify justify-end flex flex-end font-semibold text-[16px] text-[#000000]">
              200.00
            </p>
          </div>
          <hr className=" w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] mb-[16px] " />
          <div className="flex flex-auto justify justify-between ">
            <p className="justify justify-start flex flex-start font-normal text-[16px] text-[#6A6A6A]">
              Time
            </p>
            <p className="justify justify-end flex flex-end font-semibold text-[16px] text-[#000000]">
              {currentTime}
            </p>
          </div>
          <hr className=" w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] mb-[16px] " />
          <div className="flex flex-auto justify justify-between mb-[16px]">
            <p className="justify justify-start flex flex-start font-normal text-[16px] text-[#6A6A6A]">
              Date
            </p>
            <p className="justify justify-end flex flex-end font-semibold text-[16px] text-[#000000]">
              {currentDate}
            </p>
          </div>
        </div>

        <div className="flex flex-auto items-center justify-center mt-[56px] m-2">
          <button
            type="submit"
            className={`bg-original py-3 px-20 outline-none uppercase xl sm:w-[406px] text-white font-bold shadow-md rounded-full w-full h-[60px] `}
            onClick={openModal}
          >
            {loading ? "transferring..." : "Continue"}
          </button>
        </div>
      </motion.div>

      <div className="mt-[170px] py-3 px-20 outline-none uppercase xl sm:w-[406px] text-white font-bold  w-full h-[60px]"></div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Enter PIN Code"
        className="modal mt-14"
        overlayClassName="overlay"
      >
        <div className="flex flex-col justify-center p-4">
          <div className="flex justify-between w-full mb-4">
            <button
              onClick={closeModal}
              className="text-black text-xl font-bold"
            >
              ✕
            </button>
            <p className="flex justify-start font-semibold text-[16px] text-[#000000]">
              Enter your PIN code
            </p>
          </div>
          <p className="flex justify-start flex-start items-start font-semibold text-[16px] text-[#6A6A6A] ml-1">
            Enter Pin
          </p>
          <div className="mt-4 flex justify-center gap-[12px]">
            {pin.map((digit, index) => (
              <input
                key={index}
                type="password"
                maxLength="1"
                value={digit}
                readOnly
                className="w-[56px] h-[56px] text-center border border-gray-400 rounded-lg m-1 font-black text-lg text-[#000000]"
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-[12px] mt-6 ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
              <button
                key={number}
                className="bg-gray-200 text-black text-lg w-[90.33px] h-[62px] gap-[32px] rounded-sm"
                onClick={() => handleNumberClick(number)}
              >
                {number}
              </button>
            ))}
            <div className="w-[90.33px] h-[62px]"></div>
            {/*Empty placeholder*/}
            <button
              className="bg-gray-200 text-black text-lg w-[90.33px] h-[62px] gap-[32px] rounded-sm"
              onClick={() => handleNumberClick(0)}
            >
              0
            </button>
            <button
              className="bg-[#EEEEEE] text-white text-lg w-[90.33px] h-[62px] rounded-sm flex justify-center items-center"
              onClick={handleClear}
            >
              <img src={cancel} className="w-[32px] h-[24px] object-contain" />
            </button>
          </div>
          <button
            onClick={handleNavigation}
            className="mt-6 bg-[#ffff] text-[#8E1011] border-[1.5px] border-[#8E1011] py-3 px-12 rounded-full"
          >
            Pay
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Review;
