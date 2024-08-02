import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  agent_icon,
  airtime_icon,
  arrow_back_ios,
  cable_icon,
  cashflow,
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
  transaction,
} from "../../assets";
import Modal from "react-modal";

const Menu = () => {
  const navigate = useNavigate();

  const HandleHome = () => {
    //
    navigate("/dashboard");
  };

  const [convertmodalIsOpen, setConvertModalIsOpen] = useState(false);

  const convertopenModal = () => {
    //navigate("/airtimetocash");
    setConvertModalIsOpen(true);
  };

  const convertcloseModal = () => {
    setConvertModalIsOpen(false);
  };

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    pin: "",
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
    const allFieldsFilled = formData.pin;

    setIsFormValid(allFieldsFilled);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
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
                className="w-[18px] h-[18px] object-contain"
              />
              <p className="text-black justify-center ml-3 font-semibold text-[14px] mb-1">
              Payment Services
            </p>
            </Link>
          </div>

          <div className="m-4">
            
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
              <ServiceItem
                icon={swap_icon}
                label="Swap Airtime"
                to="/airtimetocash"
              />
              <ServiceItem icon={exam_icon} label="Exam Pin" to="/exam" />
              <ServiceItem icon={datapin_icon} label="Data Pin" to="/datapin" />
              <ServiceItem icon={fund_icon} label="Add Fund" to="/more" />
            </motion.div>
          </div>

          <div className="m-4 mt-[30px]">
            <p className="flex text-black text-[14px] font-semibold cursor-pointer">
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
              <ServiceItem
                icon={agent_icon}
                label="Agent"
                onClick={convertopenModal}
              />
              <ServiceItem icon={history_icon} label="History" to="/history" />
              <ServiceItem
                icon={notification_icon}
                label="Notification"
                to="/notifications"
              />
              <ServiceItem
                icon={contact_icon}
                label="Contact"
                to="/contact-us"
              />
              <ServiceItem icon={logout_icon} label="Logout" to="/logout" />
            </div>
          </div>
          <div>
            <button
              onClick={HandleHome}
              className="mt-5 mb-1 bg-[#ffff] font-montserrat py-3 px-20 text-[#8E1011] border-[1.5px] text-[12px] border-[#8E1011] rounded-full uppercase w-full h-[45px]"
            >
              HOME
            </button>
          </div>
        </div>
      </motion.div>
      <div className="mt-10"></div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex items-center justify-center "
      >
        <Modal
          isOpen={convertmodalIsOpen}
          onRequestClose={convertcloseModal}
          contentLabel="AIRTIME TO CASH"
          className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-10"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-7 flex flex-col items-center m-3">
            <div className="flex flex-row justify-between items-center mb-4 w-full">
              <button
                onClick={convertcloseModal}
                className="text-black text-xl font-bold"
              >
                ✕
              </button>
              <p className="font-bold text-[16px] text-[#8E1011]">
                Confirm Transaction Upgrade
              </p>
            </div>
            <div className="p-3 mt-[24px] flex justify-center items-center">
              <img
                src={transaction}
                alt="Become an agaent"
                className="w-full h-auto items-center"
              />
            </div>
            <div className="flex justify-between items-center mb-4 mt-[24px]">
              <p className="font-normal text-justify text-[16px] text-[#8E1011]">
                You are about to upgrade to an Agent Account. You can view our
                pricing page for details about the discounts available for
                Agents. <br />
                You would be charged a total of N1 for this service. To
                continue, enter your transaction pin below.
              </p>
            </div>

            <form
              className="mt-[12px] flex flex-col gap-[11px] relative w-full"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col">
                <span className="text-[#666666] py-1 px-1 text-[12px] absolute top-1/6 transform -translate-y-1/5 ml-5 font-normal mb-4">
                  Transaction Pin
                </span>
                <input
                  type="number"
                  name="pin"
                  value={formData.pin}
                  onChange={handleInputChange}
                  placeholder="1234"
                  className={`bg-white py-4 px-6 placeholder:text-black text-black ${
                    formData.pin ? "rounded-lg" : "border-[#EEEFF4]"
                  } rounded-xl outline-none border-[#000000] border-1 w-full h-[56px] font-medium`}
                />
              </label>

              <div>
                <button
                  onClick={convertcloseModal}
                  disabled={!isFormValid}
                  className={`bg-original py-3 px-20 outline-none uppercase xl text-[12px] sm:w-[406px] text-white font-bold shadow-md rounded-full w-full h-[45px] ${
                    isFormValid ? "" : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  {loading ? "transferring..." : "CONTINUE"}
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </motion.div>
    </section>
  );
};

const ServiceItem = ({ icon, label, to, onClick }) => (
  <Link to={to} onClick={onClick}>
    <div className="flex flex-col justify-between items-center gap-2">
      <img src={icon} className="w-[52px] h-[49px]" />
      <p className="text-[#000000] font-medium text-[12px] text-center">
        {label}
      </p>
    </div>
  </Link>
);

export default Menu;
