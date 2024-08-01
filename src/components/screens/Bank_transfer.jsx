import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { arrow_back_ios, bank, bank1, home, success } from "../../assets";
import BottomNavbar from "../dashboard/BottomNavbar";
import Modal from "react-modal";

const Bank_transfer = () => {
  const [convertmodalIsOpen, setConvertModalIsOpen] = useState(false);

  const convertopenModal = () => {
    setConvertModalIsOpen(true);
  };

  const convertcloseModal = () => {
    setConvertModalIsOpen(false);
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

  const accounts = [
    {
      bank: "Fidelity Bank",
      accountNo: "2123587356",
      image: bank1,
    },
    {
      bank: "UBA Bank",
      accountNo: "2123587356",
      image: bank1,
    },
    {
      bank: "Wema Bank",
      accountNo: "3127847232",
      image: bank1,
    },
  ];

  const copyToClipboard = (accountNo) => {
    navigator.clipboard
      .writeText(accountNo)
      .then(() => {
        
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  const handleButtonClick = (accountNo) => {
    copyToClipboard(accountNo);
    convertopenModal();
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
          <p className="font-semibold text-[20px] text-[#000] font-montserrat text-center">
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
            {accounts.map((account, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col bg-white border rounded-2xl justify-between mt-12 m-3 p-3"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row gap-4 items-center">
                    <img
                      src={account.image}
                      className="w-16 h-16 bg-red-100 rounded-full"
                      alt="Bank logo"
                    />
                    <div>
                      <p className="text-base text-[12px] font-medium font-montserrat text-black">
                        Bank Transfer:{" "}
                        <span className="font-semibold">{account.bank}</span>
                      </p>
                      <p className="text-base text-[12px] font-medium font-montserrat text-black">
                        Account No:{" "}
                        <span className="font-semibold">
                          {account.accountNo}
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-red-800 text-left text-[10px] font-medium">
                    <span className="font-bold">Note:</span> Automated bank
                    transfer attracts additional charges of ₦50 only.
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    className="bg-red-800 font-montserrat text-[12px] text-white text-center rounded-full w-full h-9"
                    onClick={() => handleButtonClick(account.accountNo)}
                  >
                    Copy Account No
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className=""></div>
      <div className="flex items-center justify-center ">
        <Modal
          isOpen={convertmodalIsOpen}
          onRequestClose={convertcloseModal}
          contentLabel="SUCCESS"
          className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-10"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-7 flex flex-col items-center m-3">
            <div className="p-3 flex justify-center items-center">
              <img
                src={success}
                alt="success"
                className="w-full h-auto items-center"
              />
            </div>
            <div className="mb-4">
              <p className="font-semibold text-[20px] text-[#000000] text-center">
                Success
              </p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-normal text-center text-[14px] text-[#000000]">
                Copied To Clipboard Successfully
              </p>
            </div>
            <div className="flex flex-col w-full gap-[1px]">
              <button
                onClick={convertcloseModal}
                className="mt-6 bg-[#8E1011] font-montserrat py-3 px-20 text-[#FFFF] border-[1.5px] border-[#8E1011] rounded-full uppercase w-full h-[53px]"
              >
                OK
              </button>
            </div>
          </div>
        </Modal>
      </div>
      <BottomNavbar />
    </section>
  );
};

export default Bank_transfer;
