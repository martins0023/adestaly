import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  agent_icon,
  airtime_icon,
  arrow_back_ios,
  cable_icon,
  contact_icon,
  data_icon,
  datapin_icon,
  electricity_icon,
  exam_icon,
  fund_icon,
  history_icon,
  logout_icon,
  notification_icon,
  pricing_icon,
  profile_icon,
  referrals_icon,
  swap_icon,
} from "../../assets";

const Menu = () => {
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

          <div className="m-4">
            <p className="flex text-black text-[16px] font-semibold cursor-pointer">
              Payment Services
            </p>
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-5"
            >
              <ServiceItem icon={airtime_icon} label="Airtime" to="/airtime" />
              <ServiceItem icon={data_icon} label="Data" to="/data" />
              <ServiceItem
                icon={electricity_icon}
                label="Electricity"
                to="/electricity"
              />
              <ServiceItem icon={cable_icon} label="Cable Tv" to="/cable" />
              <ServiceItem icon={swap_icon} label="Swap Airtime" />
              <ServiceItem icon={exam_icon} label="Exam Pin" to="/exam" />
              <ServiceItem icon={datapin_icon} label="Data Pin" />
              <ServiceItem icon={fund_icon} label="Add Fund" to="/more" />
            </motion.div>
          </div>

          <div className="m-4 mt-[64px]">
            <p className="flex text-black text-[16px] font-semibold cursor-pointer">
              Other
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
              <ServiceItem
                icon={referrals_icon}
                label="Referrals"
                to="/referrals"
              />
              <ServiceItem icon={pricing_icon} label="Pricing" to="/pricing" />
              <ServiceItem icon={profile_icon} label="Profile" to="/profile" />
              <ServiceItem icon={agent_icon} label="Agent" to="/agent" />
              <ServiceItem icon={history_icon} label="History" to="/history" />
              <ServiceItem
                icon={notification_icon}
                label="Notification"
                to="/notifications"
              />
              <ServiceItem icon={contact_icon} label="Contact" to="#" />
              <ServiceItem icon={logout_icon} label="Logout" to="/logout" />
            </div>
          </div>
        </div>
      </motion.div>
      <div className="mt-10"></div>
    </section>
  );
};

const ServiceItem = ({ icon, label, to }) => (
  <Link to={to}>
    <div className="flex flex-col justify-between items-center gap-2">
      <img src={icon} className="w-[62px] h-[59px]" />
      <p className="text-[#000000] font-medium text-[14px] text-center">
        {label}
      </p>
    </div>
  </Link>
);

export default Menu;
