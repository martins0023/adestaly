import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import BottomNavbar from "../../dashboard/BottomNavbar";
import ProfileNav from "./ProfileNav";
import {
  arrow_back_ios,
  camera_icon,
  colored_visibility,
  colored_visibility_off,
  lock,
  person,
  success
} from "../../../assets";

const EditTransactionPin = () => {
  const [convertmodalIsOpen, setConvertModalIsOpen] = useState(false);

  const convertopenModal = () => {
    setConvertModalIsOpen(true);
  };

  const convertcloseModal = () => {
    setConvertModalIsOpen(false);
  };

  const [disablemodalIsOpen, setDisableModalIsOpen] = useState(false);

  const disableopenModal = () => {
    setDisableModalIsOpen(true);
  };

  const disablecloseModal = () => {
    setDisableModalIsOpen(false);
  };


  const [passwordVisibility, setPasswordVisibility] = useState({
    oldpin: "empty",
    newpin: "empty",
    confirmpin: "empty",
  });

  const [pinVisibility, setPinVisibility] = useState({
    pin: "empty",
  });

  //setform
  const [form, setForm] = useState({
    oldpin: "",
    newpin: "",
    confirmpin: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const getPinStrength = (password) => {
    if (password.length < 1) return "required";
    if (password.length < 2) return "weak";
    if (password.length < 4) return "medium";
    return "strong";
  };

  const isFormValid = () => {
    return (
      form.oldpin &&
      form.newpin &&
      form.confirmpin &&
      form.newpin === form.confirmpin &&
      getPinStrength(form.newpin) === "strong" &&
      getPinStrength(form.confirmpin) === "strong"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.newpin !== form.confirmpin) {
      setShowAlert("Passwords do not match");
      return;
    }
    if (!isFormValid()) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      setLoading(true);
      // Simulate a successful submission
      setTimeout(() => {
        setLoading(false);
        convertopenModal();
        //navigate("/dashboard"); // Navigate to the next page
      }, 2000);
    }
  };

  const NavigatePin = () =>{
    navigate("/dashboard"); // Navigate to the next page
  }

  const getStrengthBarClass = (strength) => {
    switch (strength) {
      case "required":
        return "bg-[#ffffff] w-1/6";
      case "weak":
        return "bg-[#8E1011] w-1/3";
      case "medium":
        return "bg-[#F2BB2D] w-2/3";
      case "strong":
        return "bg-green-500 w-full";
      default:
        return "";
    }
  };

  //toggle password visibility
  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: prevState[field] === "visible" ? "hidden" : "visible",
    }));
  };

  //toggle pin visibility
  const togglePinVisibility = (field) => {
    setPinVisibility((prevState) => ({
      ...prevState,
      [field]: prevState[field] === "visible" ? "hidden" : "visible",
    }));
  };

  //profile image upload state
  const [profileImage, setProfileImage] = useState(person);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
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

  //get pin form
  const [formData, setFormData] = useState({
    pin: "",
    action: "",
  });

  //validate pin disabling
  const isPinValid = () => {
    return formData.pin && formData.action;
  };

  const handlePinChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePinDisable = (e) => {
    e.preventDefault();
    //logic

    if (!isPinValid()) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      setLoading(true);
      // Simulate a successful submission
      setTimeout(() => {
        setLoading(false);
        disableopenModal();
        //navigate("/dashboard"); // Navigate to the next page
      }, 2000);
    }
  };

  const DisablePin = () =>{
    navigate("/dashboard"); // Navigate to the next page
  }

  return (
    <section>
      <div>
        <ProfileNav />
      </div>

      <motion.div
        className="dashboard-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto ml-2">
          <Link
            to="/"
            className="flex m-1"
            onClick={() => {
              navigate(-1);
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={arrow_back_ios}
              alt="back"
              className="w-[20px] h-[20px] object-contain"
            />
            <p className="text-black justify-center ml-5 font-semibold text-[14px]">
              Edit Transaction Pin
            </p>
          </Link>
        </div>
        <div className="bg-white rounded-2xl p-6 m-3 gap-[24px]">
          <div className="flex flex-row gap-[15px] m-3 items-center mt-8">
            <div
              className="relative w-[80px] h-[80px] rounded-full overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={profileImage}
                className="w-full h-full object-cover"
                alt="profile"
              />
              {isHovered && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <label className="cursor-pointer">
                    <img
                      src={camera_icon}
                      className="w-[30px] h-[30px]"
                      alt="camera"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
              )}
            </div>
            <p className="text-black font-semibold text-[18px] text-center mt-1">
              Miracle Oladapo
            </p>
          </div>
          <hr className="items-center w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] " />

          <div className="flex flex-col m-3 mt-[32px]">
            <p className="text-[#8E2121] font-normal text-[14px]">
              Update Transaction Pin
            </p>
            <p className="text-[#141416] font-semibold text-[20px] ">
              Transaction Pin
            </p>
            <p className="text-[#8E2121] font-normal text-[12px] mt-[16px]">
              <span className="font-semibold">NOTE:</span>The default
              transaction Pin is ‘1234’. Your transaction pin should be a four
              digit number.
            </p>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-5 flex flex-col gap-5 m-1"
          >
            {["oldpin", "newpin", "confirmpin"].map((field, idx) => (
              <label key={idx} className="flex flex-col relative">
                <span className="text-[#666666] py-1 px-1 text-[10px] -translate-y-1/5 ml-5 font-normal">
                  {field === "newpin"
                    ? "New Pin"
                    : field === "oldpin"
                    ? "Old Pin"
                    : field === "confirmpin"
                    ? "New Pin"
                    : field === "createpin"}
                </span>
                <div className="flex justify-end items-center relative">
                  <input
                    required
                    type={
                      passwordVisibility[field] === "visible"
                        ? "text"
                        : "password"
                    }
                    name={field}
                    value={form[field]}
                    onChange={(e) => {
                      const { value } = e.target;
                      if (/^\d*$/.test(value) && value.length <= 4) {
                        handleChange(e);
                      }
                    }}
                    placeholder={
                      field === "oldpin"
                        ? "Enter Old Pin"
                        : field === "newpin"
                        ? "Enter New Pin"
                        : field === "confirmpin"
                        ? "Retype New Pin"
                        : field === "createpin"
                    }
                    className={`bg-white py-4 px-6 placeholder:text-black text-black ${
                      form[field] ? "rounded-lg" : "border-[#EEEFF4] lg:w-full"
                    } rounded-xl outline-none border-[#000000] text-[12px] border-1 lg:w-[408px] w-full h-[52px] font-medium`}
                  />
                  <img
                    src={
                      passwordVisibility[field] === "visible"
                        ? colored_visibility
                        : colored_visibility_off
                    }
                    className="absolute mr-4 cursor-pointer"
                    alt="lock"
                    onClick={() => togglePasswordVisibility(field)}
                  />
                </div>
                {["newpin", "confirmpin"].includes(field) && (
                  <div className="mt-2 ml-1">
                    <div
                      className={`h-1.5 rounded-full ${getStrengthBarClass(
                        getPinStrength(form[field])
                      )}`}
                    ></div>
                    <span
                      className={`text-sm mt-1 ${
                        getPinStrength(form[field]) === "strong"
                          ? "text-green-500"
                          : getPinStrength(form[field]) === "medium"
                          ? "text-[#F2BB2D]"
                          : "text-[#8E1011]"
                      }`}
                    >
                      {getPinStrength(form[field]) === "strong"
                        ? "Your New Pin is complete"
                        : getPinStrength(form[field]) === "medium"
                        ? "Your Pin could be stronger"
                        : getPinStrength(form[field]) === "required"
                        ? "Your New Pin is required"
                        : "Your New Pin is too weak"}
                    </span>
                  </div>
                )}
              </label>
            ))}

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className={`bg-original py-3 px-20 outline-none uppercase h-[45px] text-[12px] xl w-full sm:w-[406px] text-white font-bold rounded-full ${
                  !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!isFormValid()}
              >
                {loading ? "Updating..." : "Update Pin"}
              </button>
            </div>
          </form>
          <div className="flex flex-col gap-8 justify justify-between p-3"></div>

          <hr className="items-center w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[14px] " />

          <div className="flex flex-col m-3 mt-[32px]">
            <p className="text-[#8E2121] font-normal text-[14px]">
              Disable Transaction Pin
            </p>
            <p className="text-[#141416] font-semibold text-[20px] ">
              Disable Pin
            </p>
            <p className="text-[#8E2121] font-normal text-[12px] mt-[16px]">
              <span className="font-semibold">NOTE:</span>Only disable pin when
              you are sure about the security of your phone and your account is
              secured with a strong password.
            </p>
          </div>

          <form
            className="mt-[10px] flex flex-col gap-[11px] relative m-1"
            onSubmit={handlePinDisable}
          >
            <label className="flex flex-col relative mt-3">
              <span className="text-[#666666] py-1 px-1 text-[10px] absolute top-1/6 transform -translate-y-1/5 ml-5 font-normal mb-4">
                Enter Pin
              </span>
              <div className="flex ">
                <input
                  type="password"
                  name="pin"
                  placeholder="Enter Pin"
                  value={formData.pin}
                  onChange={handlePinChange}
                  className="bg-white py-4 px-6 placeholder:text-black text-[12px] text-black 
                      lg:w-full rounded-xl outline-none border-[#EEEFF4] border-2  w-full h-[52px] font-medium"
                />
                <img
                  src={
                    pinVisibility === "visible"
                      ? colored_visibility
                      : colored_visibility_off
                  }
                  className="absolute mt-4 right-3 w-[24px] h-[24px]"
                  alt="lock"
                  onClick={togglePinVisibility}
                />
              </div>
            </label>

            <label className="flex flex-col relative">
              <select
                type="text"
                name="action"
                value={formData.action}
                onChange={handlePinChange}
                placeholder="Select State"
                className="bg-[#ffff] py-4 px-6 h-[52px]
                placeholder:text-black text-[12px]
                text-black rounded-xl outline-none
                border-[#EEEFF4] font-medium border-2"
              >
                <option value="" disabled>
                  Select Action
                </option>
                <option value="disable">Disable</option>
                <option value="enable">Enable</option>
              </select>
            </label>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className={`bg-original py-3 outline-none uppercase h-[45px] text-[12px] w-full sm:w-[406px] text-white font-bold rounded-full mb-[40px] mt-[32px] ${
                  !isPinValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!isPinValid()}
              >
                {loading ? `${formData.action}ing pin...` : `${formData.action} Pin`}
              </button>
            </div>
          </form>
        </div>
        {/*update pin notification*/}
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
                  Pin Updated Successfully
                </p>
              </div>
              <div className="flex flex-col w-full gap-[1px]">
                <button
                  onClick={NavigatePin}
                  className="mt-6 bg-[#8E1011] font-montserrat py-3 px-20 text-[#FFFF] border-[1.5px] border-[#8E1011] rounded-full uppercase w-full h-[53px]"
                >
                  OK
                </button>
              </div>
            </div>
          </Modal>
        </div>

        {/*disable pin notification */}
        <div className="flex items-center justify-center ">
          <Modal
            isOpen={disablemodalIsOpen}
            onRequestClose={disablecloseModal}
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
                  Pin {formData.action}d Successfully
                </p>
              </div>
              <div className="flex flex-col w-full gap-[1px]">
                <button
                  onClick={DisablePin}
                  className="mt-6 bg-[#8E1011] font-montserrat py-3 px-20 text-[#FFFF] border-[1.5px] border-[#8E1011] rounded-full uppercase w-full h-[53px]"
                >
                  OK
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </motion.div>

      <div>
        <BottomNavbar />
      </div>
    </section>
  );
};

export default EditTransactionPin;
