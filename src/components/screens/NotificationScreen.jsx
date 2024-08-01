import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import { message } from "../../assets";
import { motion } from "framer-motion";

const NotificationScreen = () => {
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
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const formattedDate = `${now.getDate()} ${
        months[now.getMonth()]
      } ${now.getFullYear()}`;
      setCurrentDate(formattedDate);
    };

    // Set date immediately when component mounts
    updateDate();
  }, []);
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
          <p className="flex flex-col gap-[6px] justify justify-end ml-[100px] text-center flex-end text-black text-[12px] font-semibold cursor-pointer ">
            <span className="text-[#8E1011]">All Notifications</span>
            <span className="font-semibold text-black text-[20px]">
              Notifications
            </span>
          </p>
        </div>

        <motion.div
          variants={itemVariants}
          whileHover={cardHoverVariants.hover}
          className="mt-[18px] bg-white rounded-2xl px-2 py-7 m-3 gap-[18px] font-montserrat"
        >
          <div className="flex flex-row justify justify-around">
            <div className="flex ml-[-11px] justify-start flex-row gap-[16px]">
              <img src={message} className="w-[30px] h-[30px]" />
              <p className="font-semibold text-[20px] text-[#000] font-montserrat">
                Adestaly
              </p>
            </div>

            <div className="flex flex-row mt-3">
              <p className="font-medium text-[10px] text-[#919191]">
                {currentDate} {` . `}
              </p>

              <p className="font-medium text-[10px] text-[#919191]">
                {currentTime}
              </p>
            </div>
          </div>

          <p className="font-medium text-[14px] text-[#000] mt-[16px] m-2">
            We are about to implement some maintenance on the site. this may
            last up to 1hr
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={cardHoverVariants.hover}
          className="mt-[18px] bg-white rounded-2xl px-2 py-7 m-3 gap-[18px] font-montserrat"
        >
          <div className="flex flex-row justify justify-around">
            <div className="flex ml-[-11px] justify-start flex-row gap-[16px]">
              <img src={message} className="w-[30px] h-[30px]" />
              <p className="font-semibold text-[20px] text-[#000] font-montserrat">
                Adestaly
              </p>
            </div>

            <div className="flex flex-row mt-3">
              <p className="font-medium text-[10px] text-[#919191]">
                {currentDate} {` . `}
              </p>

              <p className="font-medium text-[10px] text-[#919191]">
                {currentTime}
              </p>
            </div>
          </div>

          <p className="font-medium text-[14px] text-[#000] mt-[16px] m-2">
            We are about to implement some maintenance on the site. this may
            last up to 1hr
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={cardHoverVariants.hover}
          className="mt-[18px] bg-white rounded-2xl px-2 py-7 m-3 gap-[18px] font-montserrat"
        >
          <div className="flex flex-row justify justify-around">
            <div className="flex ml-[-11px] justify-start flex-row gap-[16px]">
              <img src={message} className="w-[30px] h-[30px]" />
              <p className="font-semibold text-[20px] text-[#000] font-montserrat">
                Adestaly
              </p>
            </div>

            <div className="flex flex-row mt-3">
              <p className="font-medium text-[10px] text-[#919191]">
                {currentDate} {` . `}
              </p>

              <p className="font-medium text-[10px] text-[#919191]">
                {currentTime}
              </p>
            </div>
          </div>

          <p className="font-medium text-[14px] text-[#000] mt-[16px] m-2">
            We are about to implement some maintenance on the site. this may
            last up to 1hr
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NotificationScreen;
