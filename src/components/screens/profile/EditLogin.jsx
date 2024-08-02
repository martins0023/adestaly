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
  success,
} from "../../../assets";

const EditLogin = () => {
  const [convertmodalIsOpen, setConvertModalIsOpen] = useState(false);

  const convertopenModal = () => {
    setConvertModalIsOpen(true);
  };

  const convertcloseModal = () => {
    setConvertModalIsOpen(false);
  };

  //password state
  //password visibility
  const [passwordVisibility, setPasswordVisibility] = useState({
    oldpassword: "empty",
    newpassword: "empty",
    confirmpassword: "empty",
  });

  //setform
  const [form, setForm] = useState({
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const getPasswordStrength = (password) => {
    if (password.length < 1) return "required";
    if (password.length < 8) return "weak";
    if (password.length < 12) return "medium";
    return "strong";
  };

  const isFormValid = () => {
    return (
      form.oldpassword &&
      form.newpassword &&
      form.confirmpassword &&
      form.newpassword === form.confirmpassword &&
      getPasswordStrength(form.newpassword) === "strong" &&
      getPasswordStrength(form.confirmpassword) === "strong"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.newpassword !== form.confirmpassword) {
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
        //navigate("/login"); // Navigate to the next page
      }, 2000);
    }
  };

  const NavigateLogin = () =>{
    navigate("/login")
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
              Edit Login Details
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
              Update Login Details
            </p>
            <p className="text-[#141416] font-semibold text-[20px] ">
              Login Details
            </p>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8 m-1"
          >
            {["oldpassword", "newpassword", "confirmpassword"].map(
              (field, idx) => (
                <label key={idx} className="flex flex-col relative">
                  <span className="text-[#666666] py-1 px-1 text-[10px] -translate-y-1/5 ml-5 font-normal">
                    {field === "newpassword"
                      ? "New Password"
                      : field === "oldpassword"
                      ? "Old Password"
                      : field === "confirmpassword"
                      ? "Retype Password"
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
                        if (
                          /^[a-zA-Z0-9]*$/.test(value) &&
                          value.length <= 14
                        ) {
                          handleChange(e);
                        }
                      }}
                      placeholder={
                        field === "oldpassword"
                          ? "Old Password"
                          : field === "newpassword"
                          ? "New Password"
                          : field === "confirmpassword"
                          ? "Retype Password"
                          : field === "createpin"
                      }
                      className={`bg-white py-4 px-6 placeholder:text-black text-black ${
                        form[field]
                          ? "rounded-lg"
                          : "border-[#EEEFF4] lg:w-full"
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
                  {["newpassword", "confirmpassword"].includes(field) && (
                    <div className="mt-2 ml-1">
                      <div
                        className={`h-1.5 rounded-full ${getStrengthBarClass(
                          getPasswordStrength(form[field])
                        )}`}
                      ></div>
                      <span
                        className={`text-sm mt-1 ${
                          getPasswordStrength(form[field]) === "strong"
                            ? "text-green-500"
                            : getPasswordStrength(form[field]) === "medium"
                            ? "text-[#F2BB2D]"
                            : "text-[#8E1011]"
                        }`}
                      >
                        {getPasswordStrength(form[field]) === "strong"
                          ? "Your New Password is strong"
                          : getPasswordStrength(form[field]) === "medium"
                          ? "Your Password could be stronger"
                          : getPasswordStrength(form[field]) === "required"
                          ? "Your New Password is required"
                          : "Your New Password is too weak"}
                      </span>
                    </div>
                  )}
                </label>
              )
            )}

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className={`bg-original py-3 px-30 outline-none uppercase h-[45px] text-[12px] xl w-full sm:w-[406px] text-white font-bold rounded-full ${
                  !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!isFormValid()}
              >
                {loading ? "Updating..." : "Update Password"}
              </button>
            </div>
          </form>
          <div className="flex flex-col gap-8 justify justify-between p-3"></div>
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
                  Login Details Updated Successfully
                </p>
              </div>
              <div className="flex flex-col w-full gap-[1px]">
                <button
                  onClick={NavigateLogin}
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

export default EditLogin;
