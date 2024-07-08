import React, { useRef, useState, useEffect } from "react";
import Draggable from "react-draggable";
import Modal from "react-modal";
import {
  airtime,
  airtimeswap,
  cable,
  convert,
  currency,
  data,
  datapin,
  dropdown,
  electricity,
  exampin,
  history,
  logout,
  naira,
  referrals,
  whatsapp,
  withdraw,
  mtn,
  glo,
  airtel,
  icon,
  menu,
  close,
  etisalat,
  dstv,
  gotv,
  startimes,
  neco,
  waec,
  cashflow,
  ekedc,
  aedc,
  ibedc,
  ie,
  kedc,
  jedc,
  kadedc,
  phedc,
} from "../../assets";
import { styles } from "../../styles";
import ServiceModal from "./ServiceModal";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Wallets = () => {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    // Handle form submission
    navigate("/referrals");
  };
  //make height
  const [isFullHeight, setIsFullHeight] = useState(false);
  const scrollContainerRef = useRef(null);
  const prevScrollY = useRef(0);

  const toggleHeight = () => {
    setIsFullHeight(!isFullHeight);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      const currentScrollY = event.target.scrollTop;

      // Check if the user is scrolling up or down
      if (currentScrollY > prevScrollY.current && isFullHeight) {
        // User is scrolling down
        setIsFullHeight(false);
      } else if (currentScrollY < prevScrollY.current && !isFullHeight) {
        // User is scrolling up
        setIsFullHeight(true);
      }

      prevScrollY.current = currentScrollY;
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isFullHeight]);

  //convert to cash
  const [convertmodalIsOpen, setConvertModalIsOpen] = useState(false);

  const convertopenModal = () => {
    navigate("/airtimetocash");
    //setConvertModalIsOpen(true);
  };

  const convertcloseModal = () => {
    setConvertModalIsOpen(false);
  };

  const [selectedConvert, setSelectedConvert] = useState(null);

  //airtimes
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networks = [
    { id: "mtn", img: mtn, name: "MTN" },
    { id: "airtel", img: airtel, name: "Airtel" },
    { id: "glo", img: glo, name: "Glo" },
    { id: "etisalat", img: etisalat, name: "9mobile" },
  ];

  const handleAirtime = () => {
    if (selectedNetwork) {
      // Handle button submission
      navigate("/airtime");
    }
  };

  //Exam pin
  const [exammodalIsOpen, setExamModalIsOpen] = useState(false);

  const examopenModal = () => {
    setExamModalIsOpen(true);
  };

  const examcloseModal = () => {
    setExamModalIsOpen(false);
  };

  const [selectedExam, setSelectedExam] = useState(null);

  const exams = [
    { id: "waec", img: waec, name: "WAEC" },
    { id: "neco", img: neco, name: "NECO" },
  ];

  const handleExam = () => {
    if (selectedExam) {
      // Handle button submission
      navigate("/exam");
    }
  };

  //Electricity
  const [electricitymodalIsOpen, setElectricityModalIsOpen] = useState(false);

  const electricityopenModal = () => {
    setElectricityModalIsOpen(true);
  };

  const electricitycloseModal = () => {
    setElectricityModalIsOpen(false);
  };

  const [selectedElectricity, setSelectedElectricity] = useState(null);

  const electricities = [
    { id: "ekedc", img: ekedc, name: "EKEDC" },
    { id: "aedc", img: aedc, name: "AEDC" },
    { id: "ibedc", img: ibedc, name: "IBEDC" },
    { id: "ie", img: ie, name: "IE" },
    { id: "kedc", img: kedc, name: "KEDC" },
    { id: "jedc", img: jedc, name: "JEDC" },
    { id: "kadedc", img: kadedc, name: "KADEDC" },
    { id: "phedc", img: phedc, name: "PHEDC" },
  ];

  const handleElectricity = () => {
    if (selectedElectricity) {
      // Handle button submission
      navigate("/electricity");
    }
  };

  //cables
  const cables = [
    { id: "dstv", img: dstv, name: "DSTV" },
    { id: "gotv", img: gotv, name: "GOTV" },
    { id: "startimes", img: startimes, name: "STARTIMES" },
  ];

  const handleCable = () => {
    if (selectedCable) {
      // Handle button submission
      navigate("/cable");
    }
  };

  const [cablemodalIsOpen, setCablemodalIsOpen] = useState(false);

  const cableopenModal = () => {
    setCablemodalIsOpen(true);
  };

  const cablecloseModal = () => {
    setCablemodalIsOpen(false);
  };

  const [selectedCable, setSelectedCable] = useState(null);

  const handleNetworkClick = (networkId) => {
    setSelectedNetwork(networkId);
    navigate("/airtime"); // Navigate to the "airtime" page
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
    <section className={`${styles.paddingX} px-1`}>
      <motion.div
        className="dashboard-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-full max-w-7xl mx-auto px-">
          <div className="flex flex-wrap lg:flex-nowrap ">
            <motion.div
              variants={itemVariants}
              whileHover={cardHoverVariants.hover}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-[167px] rounded-xl w-full lg:w-[full] lg:h-[200px] p-8 pt-5 m-1 bg-hero-pattern bg-no-repeat bg-cover bg-center"
            >
              <div className="flex justify-between items-center ">
                <div className="">
                  <p className="font-semibold text-white text-sm lg:text-base w-[143px]">
                    My Wallet Balance
                  </p>
                  <div className="flex items-center mt-2">
                    <img
                      src={naira}
                      className="w-[30px] h-[28.6px] lg:w-8 lg:h-8 "
                    />
                    <p className="font-bold text-2xl lg:text-3xl ml-2">
                      1,000.65
                    </p>
                    <button
                      type="button"
                      style={{ backgroundColor: "bg-original" }}
                      className="ml-2 text-2xl text-white rounded-full"
                    >
                      <img src={dropdown} className="mb-1" />
                    </button>
                  </div>
                </div>
              </div>

              <div className=" mt-5 lg:mt-6">
                <button
                  type="button"
                  className="bg-[#773333] lg:py-2 lg:px-4 py-2 px-3 outline-none rounded-xl font-semibold shadow-md"
                >
                  Bonus: 0.00
                </button>
              </div>
            </motion.div>
          </div>

          <div className="mt-3">
            <div className="flex flex-wrap justify-between m-1">
              {[
                { img: currency, text: "Add Money", to: "/more" },
                { img: withdraw, text: "Withdraw", to: "/withdrawfunds" },
                { img: convert, text: "Convert" },
              ].map((item, idx) => (
                <motion.div
                  variants={itemVariants}
                  whileHover={cardHoverVariants.hover}
                  key={idx}
                  className=""
                >
                  <Link
                    className="bg-[#8E1011] dark:text-gray-200 dark:bg-secondary-dark-bg h-[72px] w-[106px] lg:w-[264px]  rounded-xl flex flex-col items-center justify-center p-3 lg:p-8"
                    to={item.to}
                  >
                    <img
                      src={item.img}
                      alt={item.text}
                      className="w-6 h-6 lg:w-8 lg:h-8"
                    />
                    <p className="text-white font-semibold text-xs lg:text-sm mt-1">
                      {item.text}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <div className="bg-colorbg dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl ">
              <div className="flex justify-between mb-4 p-4">
                <p className="font-semibold text-black text-base ">
                  My Services
                </p>
              </div>
              <div className="flex flex-wrap justify-around lg:justify-between gap-4 m-1 lg:gap-6">
                {[
                  { img: airtime, text: "Airtime", onClick: openModal },
                  {
                    img: electricity,
                    text: "Electricity",
                    onClick: electricityopenModal,
                  },
                  {
                    img: airtimeswap,
                    text: "Airtime Swap",
                    onClick: convertopenModal,
                  },
                  { img: data, text: "Buy Data", onClick: openModal },
                  { img: exampin, text: "Exam Pin", onClick: examopenModal },
                  {
                    img: referrals,
                    text: "Referrals",
                    onClick: handleNavigate,
                  },
                  { img: cable, text: "Cable TV", onClick: cableopenModal },
                  { img: datapin, text: "Data Pin", onClick: null },
                  { img: logout, text: "Logout", onClick: null },
                ].map((item, idx) => (
                  <motion.button
                    variants={itemVariants}
                    whileHover={cardHoverVariants.hover}
                    key={idx}
                    type="button"
                    className="bg-[#F9F9F9] text-xs lg:text-sm text-[14px] border border-[#D8D8D8] font-medium py-2 px-3 lg:py-2 lg:px-4 h-[91px] w-[102px] lg:w-[383.33px] rounded-xl text-black flex flex-col items-center"
                    onClick={item.onClick}
                  >
                    <img
                      src={item.img}
                      alt={item.text}
                      className="w-8 h-8 lg:w-12 lg:h-12 mb-2"
                    />
                    {item.text}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-px right-0">
            {" "}
            {/* Ensure it has a higher z-index */}
            <img src={whatsapp} className="w-14 h-14" alt="WhatsApp Icon" />
          </div>
        </div>
      </motion.div>

      <div className="flex items-center justify-center ">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Select network"
          className="fixed inset-0 flex items-center justify-center mt-[180px] bg-black bg-opacity-10"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-7">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={closeModal}
                className="text-black text-xl font-bold"
              >
                ✕
              </button>
              <p className="font-semibold text-[16px] text-[#000000]">
                Select Network
              </p>
            </div>
            <div className="grid grid-cols-2 gap-[46px] p-3 mt-9">
              {networks.map((network) => (
                <div
                  key={network.id}
                  className="relative cursor-pointer"
                  onClick={() => handleNetworkClick(network.id)}
                >
                  <img
                    src={network.img}
                    alt={network.name}
                    className="w-full h-auto"
                  />
                  {selectedNetwork === network.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              className="mt-6 bg-[#D3A5A5] text-black py-3 px-12 rounded-full w-full"
              disabled={!selectedNetwork} // Disable if no network is selected
              onClick={() => selectedNetwork && navigate("/airtime")} // Navigate on button click
            >
              Continue
            </button>
          </div>
        </Modal>
      </div>

      <div className="flex items-center justify-center ">
        <Modal
          isOpen={cablemodalIsOpen}
          onRequestClose={cablecloseModal}
          contentLabel="Select Cable"
          className="fixed inset-0 flex items-center justify-center mt-[180px] bg-black bg-opacity-10"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-7 h-full">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={cablecloseModal}
                className="text-black text-xl font-bold"
              >
                ✕
              </button>
              <p className="font-semibold text-[16px] text-[#000000]">
                Select Cable
              </p>
            </div>
            <div className="grid grid-cols-2 gap-[46px] p-3 mt-9">
              {cables.map((cable) => (
                <div
                  key={cable.id}
                  className="relative cursor-pointer"
                  onClick={() => setSelectedCable(cable.id)}
                >
                  <img
                    src={cable.img}
                    alt={cable.name}
                    className="w-full h-auto"
                  />
                  {selectedCable === cable.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={handleCable}
              className={`mt-6 bg-[#8E1011] text-white py-3 px-12 rounded-full w-full ${
                selectedCable ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!selectedCable}
            >
              Continue
            </button>
          </div>
        </Modal>
      </div>

      <div className="flex items-center justify-center ">
        <Modal
          isOpen={exammodalIsOpen}
          onRequestClose={examcloseModal}
          contentLabel="Select Exam"
          className="fixed inset-0 flex items-center justify-center mt-[370px] bg-black bg-opacity-10"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-7 h-full">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={examcloseModal}
                className="text-black text-xl font-bold"
              >
                ✕
              </button>
              <p className="font-semibold text-[16px] text-[#000000]">
                Select Exam
              </p>
            </div>
            <div className="grid grid-cols-2 gap-[46px] p-3 mt-9">
              {exams.map((exam) => (
                <div
                  key={exam.id}
                  className="relative cursor-pointer"
                  onClick={() => setSelectedExam(exam.id)}
                >
                  <img
                    src={exam.img}
                    alt={exam.name}
                    className="w-full h-auto"
                  />
                  {selectedExam === exam.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={handleExam}
              className={`mt-6 bg-[#8E1011] text-white py-3 px-12 rounded-full w-full ${
                selectedExam ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!selectedExam}
            >
              Continue
            </button>
          </div>
        </Modal>
      </div>

      <div className="flex items-center justify-center ">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Select network"
          className="fixed inset-0 flex items-center justify-center mt-[180px] bg-black bg-opacity-10"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-7 h-full">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={closeModal}
                className="text-black text-xl font-bold"
              >
                ✕
              </button>
              <p className="font-semibold text-[16px] text-[#000000]">
                Select Network
              </p>
            </div>
            <div className="grid grid-cols-2 gap-[46px] p-3 mt-9">
              {networks.map((network) => (
                <div
                  key={network.id}
                  className="relative cursor-pointer"
                  onClick={() => setSelectedNetwork(network.id)}
                >
                  <img
                    src={network.img}
                    alt={network.name}
                    className="w-full h-auto"
                  />
                  {selectedNetwork === network.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={handleAirtime}
              className={`mt-6 bg-[#8E1011] text-white py-3 px-12 rounded-full w-full ${
                selectedNetwork ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!selectedNetwork}
            >
              Continue
            </button>
          </div>
        </Modal>
      </div>

      <div className="flex items-center justify-center ">
        <Modal
          isOpen={convertmodalIsOpen}
          onRequestClose={convertcloseModal}
          contentLabel="AIRTIME TO CASH"
          className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-10"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-7 flex flex-col items-center m-3">
            <div className="mb-4">
              <p className="font-semibold text-[16px] text-[#000000]">
                CONVERT AIRTIME TO CASH
              </p>
            </div>
            <div className="p-3 mt-9 flex justify-center items-center">
              <img
                src={cashflow}
                alt="Cashflow"
                className="w-full h-auto items-center"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-normal text-center text-[16px] text-[#000000]">
                Airtime to Cash is not available at the moment , please check
                back later.
              </p>
            </div>
            <button
              onClick={convertcloseModal}
              className="mt-6 bg-[#ffff] font-montserrat py-3 px-20 text-[#8E1011] border-[1.5px] border-[#8E1011] rounded-full uppercase w-full h-[60px]"
            >
              HOME
            </button>
          </div>
        </Modal>
      </div>

      <div className="flex items-center justify-center">
        <Modal
          isOpen={electricitymodalIsOpen}
          onRequestClose={electricitycloseModal}
          contentLabel="Social Network"
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 transition-all duration-300 ${
            isFullHeight ? "h-full" : "h-[1200px]"
          }`}
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-7 relative overflow-hidden">
            <div
              className="cursor-pointer w-[66px] h-1 bg-[#5B5B5B] rounded-full mx-auto mb-4"
              onClick={toggleHeight}
            ></div>
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={electricitycloseModal}
                className="text-black text-xl font-bold"
              >
                ✕
              </button>
              <p className="font-semibold text-[16px] text-[#000000]">
                Select Distribution
              </p>
            </div>

            <div
              ref={scrollContainerRef}
              className="grid grid-cols-2 gap-6 p-3 mt-6 overflow-y-auto no-scrollbar max-h-[70vh]"
            >
              {electricities.map((electricity) => (
                <div
                  key={electricity.id}
                  className="relative cursor-pointer"
                  onClick={() => setSelectedElectricity(electricity.id)}
                >
                  <img
                    src={electricity.img}
                    alt={electricity.name}
                    className="w-full h-auto"
                  />
                  {selectedElectricity === electricity.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={handleElectricity}
              className={`mt-6 bg-[#8E1011] text-white py-3 px-12 rounded-full w-full ${
                selectedElectricity ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!selectedElectricity}
            >
              Continue
            </button>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Wallets;
