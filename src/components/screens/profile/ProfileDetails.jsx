import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import Modal from "react-modal";
import {
  arrow_forward,
  character,
  colored_lock,
  invite,
  security,
  share,
  whatsapp,
  person,
  success,
} from "../../../assets";

const ProfileDetails = () => {
  const [convertmodalIsOpen, setConvertModalIsOpen] = useState(false);

  const convertopenModal = () => {
    setConvertModalIsOpen(true);
  };

  const convertcloseModal = () => {
    setConvertModalIsOpen(false);
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/EditProfile");
  };

  const handleCommission = () => {
    navigate("/referrals");
  };
  const [copyStatus, setCopyStatus] = useState("");

  const copyToClipboard = () => {
    const textToCopy = document.getElementById("referral-link").innerText;
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setCopyStatus("Copied!");
      },
      (err) => {
        setCopyStatus("Failed to copy!");
        console.error("Could not copy text: ", err);
      }
    );
    // Clear the message after 2 seconds
    setTimeout(() => setCopyStatus(""), 2000);
  };

  const handleButtonClick = () => {
    copyToClipboard();
    convertopenModal();
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
    <section>
      <motion.div
        className="dashboard-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="mt-[10px] bg-white rounded-2xl p-6 m-3 gap-[24px] font-montserrat">
          <div className="flex flex-col items-center mt-8">
            <Link to="/editprofile">
              <img
                src={person}
                className="w-[124px] h-[124px] rounded-full"
                alt="person"
              />
            </Link>
            <div className=" flex flex-col items-center gap-[8px]">
              <p className="text-[18px] text-black mt-[16px] font-semibold">
                Miracle Oladapo
              </p>
              <button
                onClick={handleNavigate}
                className="bg-[#ffff] font-semibold text-[12px] border-[1px] border-[#8E1011] rounded-lg w-[95px] h-[31px] text-[#8E1011]"
              >
                Edit Profile
              </button>
            </div>
          </div>

          <Link to="/editlogin">
            <div className="flex flex-auto justify justify-between mt-[46px] m-3">
              <div className="flex fle-row gap-[10px]">
                <motion.img
                  variants={itemVariants}
                  src={colored_lock}
                  className="w-[24px] h-[24px]"
                />
                <p className="justify justify-start flex flex-start font-normal text-[14px] font-montserrat text-[#000000]">
                  Password
                </p>
              </div>
              <p className="justify justify-end flex flex-end font-semibold text-[16px] font-montserrat text-[#000000]">
                <img src={arrow_forward} className="w-[20px] h-[20px]" />
              </p>
            </div>
          </Link>
          <hr className="items-center w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] " />

          <Link to="/edittransactionpin">
            <div className="flex flex-auto justify justify-between mt-[32px] m-3">
              <div className="flex fle-row gap-[10px]">
                <motion.img
                  variants={itemVariants}
                  src={security}
                  className="w-[24px] h-[24px]"
                />
                <p className="justify justify-start flex flex-start font-normal text-[14px] font-montserrat text-[#000000]">
                  Pin
                </p>
              </div>
              <p className="justify justify-end flex flex-end font-semibold text-[16px] font-montserrat text-[#000000]">
                <img src={arrow_forward} className="w-[20px] h-[20px]" />
              </p>
            </div>
          </Link>
          <hr className="items-center w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] " />

          <div className="mt-[20px]">
            <div className="flex flex-col items-center">
              <motion.img
                variants={itemVariants}
                src={invite}
                className="h-[75px] w-[75px]"
                alt="invitation"
              />
              <p className="text-black font-semibold text-[20px]">
                Invite Your Friend
              </p>
              <p className="text-[#8E1011] font-normal text-[14px]">
                Referral Link
              </p>
            </div>
          </div>

          <div className="flex flex-row m-1">
            <div>
              <div className="bg-[#EEEFF4] rounded-lg border-[0px] w-[267px] lg:w-full h-[34px] flex justify-around flex-row">
                <p
                  id="referral-link"
                  className="text-[#8E1011] font-normal text-[12px] p-2 ml-2 mt-1.5 justify-start"
                >
                  https://adestathehfyedych
                </p>
                <button
                  onClick={handleButtonClick}
                  className=" cursor-pointer w-[47px] h-[24px] bg-[#8E1011] rounded-lg uppercase font-semibold text-[12px] mt-1.5 justify-end"
                >
                  copy
                </button>
              </div>
            </div>

            <div className="flex flex-row gap-1 m-1">
              <img src={share} className="w-[22px] h-[22px] mt-[2px]" />
              <img src={whatsapp} className="w-[28px] h-[28px] " />
            </div>
          </div>

          <div className="mb-8">
            <button
              onClick={handleCommission}
              className="mt-6 bg-[#ffff] font-montserrat font-semibold text-[14px]  text-[#8E1011] border-[1.5px] border-[#8E1011] rounded-full w-full h-[36px]"
            >
              View Commission
            </button>
          </div>
        </div>
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
      </motion.div>
    </section>
  );
};

export default ProfileDetails;
