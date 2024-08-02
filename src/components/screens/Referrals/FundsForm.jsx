import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { report } from "../../../assets";

const FundsForm = () => {
  const navigate = useNavigate();

  const NavigateReview = () => {
    navigate("/review")
  }

  const [convertmodalIsOpen, setConvertModalIsOpen] = useState(false);

  const convertopenModal = () => {
    setConvertModalIsOpen(true);
  };

  const convertcloseModal = () => {
    setConvertModalIsOpen(false);
  };

  const [formData, setFormData] = useState({
    email: "",
    amount: "",
    pay: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const [isFieldEnabled, setIsFieldEnabled] = useState({
    amount: false,
    pay: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setIsFieldEnabled({
      amount: !!formData.email,
      pay: !!formData.email && !!formData.amount,
    });

    const allFieldsFilled = formData.email && formData.amount && formData.pay;

    setIsFormValid(allFieldsFilled);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
  const [loading, setLoading] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
    <div className="mt-[20px] bg-white rounded-2xl p-6 m-3 gap-[24px] font-montserrat">
      <div className="flex flex-col justify justify-center items-center mt-[16px] gap-[2px] font-montserrat">
        <p className="font-normal text-[14px] text-[#8E1011] font-montserrat text-center">
          Transfer Funds
        </p>
        <p className="font-semibold text-[18px] text-[#000] text-center font-montserrat">
          Transfer
        </p>
      </div>

      <div className="flex flex-col gap-8 justify justify-between p-3">
        <form
          className="mt-[8px] flex flex-col gap-[11px] relative"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"></span>
            <select
              name="referral"
              placeholder="Referral to wallet"
              value={formData.referral}
              onChange={handleInputChange}
              className={`bg-white py-4 px-6 placeholder:text-black text-black ${
                formData.referral ? "rounded-lg" : "border-[#EEEFF4]"
              } rounded-xl outline-none border-[#000000] border-1 lg:w-[408px] w-full h-[52px] text-[12px] font-medium`}
            >
              <option value="" className="text-black">
                Referral to wallet
              </option>
              <option value="miracle">MIRACLE</option>
            </select>
          </label>

          <label className="flex flex-col">
            <span className="text-[#666666] py-1 px-1 text-[10px] absolute top-1/6 transform -translate-y-1/5 ml-5 font-normal mb-4">
              Receiver Email
            </span>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              className={`bg-white py-4 px-6 placeholder:text-black text-black ${
                formData.email ? "rounded-lg" : "border-[#EEEFF4]"
              } rounded-xl outline-none border-[#000000] border-1 lg:w-[408px] w-full h-[52px] text-[12px] font-medium`}
            />
          </label>

          <label className="flex flex-col">
            <span className="text-[#666666] py-1 px-1 text-[10px] absolute top-1/6 transform -translate-y-1/5 ml-5 font-normal mb-4">
              Amount
            </span>
            <input
              type="number"
              name="amount"
              placeholder="Enter Amount"
              value={formData.amount}
              onChange={handleInputChange}
              disabled={!isFieldEnabled.amount}
              className={`bg-white py-4 px-6 placeholder:text-black text-black ${
                isFieldEnabled.amount ? "rounded-lg" : "border-[#EEEFF4]"
              } rounded-xl outline-none border-[#000000] border-1 lg:w-[408px] w-full h-[52px] text-[12px] font-medium`}
            />
          </label>

          <label className="flex flex-col">
            <span className="text-[#666666] py-1 px-1 text-[10px] absolute top-1/6 transform -translate-y-1/5 ml-5 font-normal mb-4">
              Amount to pay
            </span>
            <input
              type="number"
              name="pay"
              placeholder="Amount"
              value={formData.pay}
              onChange={handleInputChange}
              disabled={!isFieldEnabled.pay}
              className={`bg-[#ffff] py-4 px-6 placeholder:text-black text-black ${
                isFieldEnabled.pay ? "rounded-lg" : "border-[#EEEFF4]"
              } rounded-xl outline-none border-[#000000] font-medium border-1 h-[52px] text-[12px] lg:w-[408px] w-full`}
            />
          </label>

          <div className="mt-4">
            <p className="text-[#8E1011] font-semibold text-[12px]">
              Note:{" "}
              <span className="text-[#8E1011] font-normal">
                {" "}
                Wallet to Wallet fund transfer attracts a charges of ₦100 only.
              </span>
            </p>
          </div>

          <div className="flex flex-auto items-center justify-center mt-[40px]">
            <button
              onClick={NavigateReview}
              type="submit"
              disabled={!isFormValid}
              className={`bg-original py-3 px-20 outline-none uppercase xl text-[12px] sm:w-[406px] text-white font-bold shadow-md rounded-full w-full h-[45px] ${
                isFormValid ? "" : "opacity-50 cursor-not-allowed"
              }`}
            >
              {loading ? "transferring..." : "continue"}
            </button>
          </div>

          <div className="mb-2 mt-2" />
        </form>
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
            <div className="p-3 flex justify-center items-center">
              <img
                src={report}
                alt="info"
                className="w-full h-auto items-center"
              />
            </div>
            <div className="mb-4">
              <p className="font-semibold text-[24px] text-[#000000] text-center">
                Are You Sure?
              </p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-normal text-center text-[16px] text-[#000000]">
                You are about perform a Referral to Wallet Transfer of ₦5000 to
                your main wallet. Do you wish to continue?
              </p>
            </div>
            <div className="flex flex-col w-full gap-[1px]">
              <button
                onClick={convertcloseModal}
                className="mt-6 bg-[#8E1011] font-montserrat py-3 px-20 text-[#FFFF] border-[1.5px] border-[#8E1011] rounded-full uppercase w-full h-[60px]"
              >
                YES
              </button>
              <button
                onClick={convertcloseModal}
                className="mt-6 bg-[#ffff] font-montserrat py-3 px-20 text-[#8E1011] border-[1.5px] border-[#8E1011] rounded-full uppercase w-full h-[60px]"
              >
                NO
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
    </motion.div>
  );
};

export default FundsForm;
