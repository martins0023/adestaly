import React, { useState, useEffect, useRef } from "react";
import { filter_alt, glo, mtn, airtel, etisalat, search } from "../../assets"; // Update with actual paths to icons
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "react-modal";

const providerIcons = {
  Glo: glo,
  MTN: mtn,
  Airtel: airtel,
  "9mobile": etisalat,
};

const transactions = [
  {
    id: 1,
    type: "Data Topup",
    amount: "₦1,000",
    status: "Success",
    provider: "Glo",
    initialBalance: "₦4,000",
    finalBalance: "₦3,000",
    mobileNumber: "09056986513",
    message:
      " : Dear customer, you have successfully shared 2GB data to 2348123456789",
  },
  {
    id: 2,
    type: "Airtime Topup",
    amount: "₦1,000",
    status: "Failed",
    provider: "MTN",
    initialBalance: "₦4,000",
    finalBalance: "₦3,000",
    mobileNumber: "09056986513",
    message:
      " : Dear customer, you have successfully shared 2GB data to 2348123456789",
  },
  {
    id: 3,
    type: "Data Topup",
    amount: "₦1,000",
    status: "Pending",
    provider: "Airtel",
    initialBalance: "₦4,000",
    finalBalance: "₦3,000",
    mobileNumber: "09056986513",
    message:
      " : Dear customer, you have successfully shared 2GB data to 2348123456789",
  },
  {
    id: 4,
    type: "Data Topup",
    amount: "₦1,000",
    status: "Success",
    provider: "9mobile",
    initialBalance: "₦4,000",
    finalBalance: "₦3,000",
    mobileNumber: "09056986513",
    message:
      " : Dear customer, you have successfully shared 2GB data to 2348123456789",
  },
];

const TransactionCard = ({ transaction, currentDate, currentTime }) => (
  <Link to="/transactiondetails">
    <div className="flex flex-col bg-white p-5 rounded-2xl  my-2 mb-[12px]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <img
            src={providerIcons[transaction.provider]} // Use dynamic provider icon
            alt={transaction.provider}
            className="w-8 h-8 mr-3 rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-black font-semibold text-[14px]">
              {transaction.type}
            </p>
          </div>
        </div>
        <p className="text-black font-semibold text-[14px]">
          {transaction.amount}
        </p>
      </div>
      <p className="text-[#919191] mt-2 text-[12px]">
        {transaction.provider} {transaction.mobileNumber} {transaction.message}
      </p>
      <div className="flex flex-row justify-between items-center mt-2">
        <div className="flex flex-row text-left gap-4 flex-wrap">
          <p className="text-sm text-[#919191] text-[10px] flex items-center">
            <div className="bg-[#FFC736] shadow-lg h-2 w-2 mr-1" /> Initial bal:{" "}
            <span className="text-[#919191] text-[12px] font-bold">
              {transaction.initialBalance}
            </span>
          </p>
          <p className="text-sm text-[#919191] text-[10px] flex items-center">
            <div className="bg-[#019700] shadow-lg h-2 w-2 mr-1" /> Final bal:{" "}
            <span className="text-[#919191] text-[12px] font-bold">
              {transaction.finalBalance}
            </span>
          </p>
        </div>
        <span
          className={`px-2 py-1 rounded-md font-medium ${
            transaction.status === "Success"
              ? "bg-green-100 text-green-500"
              : transaction.status === "Failed"
              ? "bg-red-100 text-red-500"
              : "bg-yellow-100 text-yellow-500"
          }`}
        >
          {transaction.status}
        </span>
      </div>
      <p className="text-gray-500 mt-2 font-medium text-right text-[10px]">
        {currentDate} • {currentTime}
      </p>
    </div>
  </Link>
);

const HistoryTopup = () => {
  Modal.setAppElement('#root');
  
  const [currentTime, setCurrentTime] = useState("");
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

  //const { setSelectedFilter } = useContext(NetworkContext);

  const [filtermodalIsOpen, setFilterModalIsOpen] = useState(false);

  const filteropenModal = () => {
    setFilterModalIsOpen(true);
  };

  const filtercloseModal = () => {
    setFilterModalIsOpen(false);
  };

  const [selectedFilter, setSelectedFilter] = useState(null);

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

  const filtertransactions = [
    "All Transaction",
    "Transaction Reference",
    "Wallet Transaction",
    "Paystack Transaction",
    "Airtime Transaction",
    "Data Transaction",
    "Cable Tv Transaction",
    "Exam Pin Transaction",
  ];

  return (
    <div className="flex flex-col gap-8 justify-between p-5">
      <div className="flex flex-row gap-4 items-center relative">
        <input
          type="text"
          name="keyword"
          placeholder="Keyword"
          className="bg-white py-4 px-6 pl-12 border text-[12px] border-[#EEEFF4] placeholder:text-black text-black rounded-xl outline-none w-full h-[56px] font-medium"
        />
        <img
          src={search}
          alt="Search"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[17.49] h-[17.49]"
        />
        <div className="bg-white rounded-xl p-3 flex items-center justify-center">
          <img
            className="h-[32px] w-[32px]"
            src={filter_alt}
            alt="Filter"
            onClick={() => setFilterModalIsOpen(true)}
          />
        </div>
      </div>
      <motion.div
        className="dashboard-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div>
          {transactions.map((transaction) => (
            <TransactionCard
              key={transaction.id}
              transaction={transaction}
              currentDate={currentDate}
              currentTime={currentTime}
            />
          ))}
        </div>
      </motion.div>

      <div className="flex items-center justify-center">
        <button
          className={`bg-[#8E1011] text-white py-3 h-[60px] px-12 rounded-full w-[200px] 
           "" : "opacity-50 cursor-not-allowed"
          }`}
        >
          Next 100
        </button>
      </div>

      <div className="flex items-center justify-center">
        <Modal
          isOpen={filtermodalIsOpen}
          onRequestClose={filtercloseModal}
          contentLabel="Social Network"
          className="fixed inset-0 flex items-center justify-center md:mt-auto md:mb-auto mt-0 mb-0 md:bg-opacity-10 bg-opacity-0"
          overlayClassName="fixed inset-0 bg-black bg-opacity-60"
        >
          <div
            onDrag={filtercloseModal}
            onDragOver={filtercloseModal}
            className="bg-white rounded-tr-3xl rounded-tl-3xl md:rounded-3xl shadow-lg w-full max-w-md p-7 md:mt-auto md:mb-auto mt-auto mb-0"
          >
            <div
              className="cursor-pointer w-[32px] h-1 bg-[#5B5B5B] rounded-3xl mx-auto mb-4"
              onClick={filtercloseModal}
              onDrag={filtercloseModal}
              onMouseEnter={filtercloseModal}
            ></div>
            <div className="flex justify-center items-center mb-4">
              <p className="font-semibold text-[18px] text-[#000000]">
                Search for...
              </p>
            </div>

            <div className="flex flex-col">
              {filtertransactions.map((transaction, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-row items-center justify-items-center gap-3 mt-3 no-scrollbar max-h-[60vh] lg:flex lg:items-center lg:justify lg:justify-center">
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        className="hidden-checkbox border-opacity-20"
                        required
                      />
                      <span className="custom-checkbox"></span>
                    </label>
                    <p className="text-black text-[14px] font-semibold">
                      {transaction}
                    </p>
                  </div>
                  {index < filtertransactions.length - 1 && (
                    <hr className="mt-3 mb-1" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default HistoryTopup;
