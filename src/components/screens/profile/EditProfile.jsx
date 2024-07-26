import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProfileNav from "./ProfileNav";
import BottomNavbar from "../../dashboard/BottomNavbar";
import {
  person,
  camera_icon,
  account_circle,
  place,
  colored_call,
  colored_email,
  arrow_back_ios,
} from "../../../assets"; // Assuming you have a camera icon asset
import { Link, useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    state: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const [isFieldEnabled, setIsFieldEnabled] = useState({
    email: false,
    phoneNumber: false,
    state: false,
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
      email: !!formData.name,
      phoneNumber: !!formData.name && !!formData.email,
      state: !!formData.name && !!formData.email && !!formData.phoneNumber,
    });

    const allFieldsFilled =
      formData.name && formData.email && formData.phoneNumber && formData.state;

    setIsFormValid(allFieldsFilled);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    navigate("/profile");
  };
  const [loading, setLoading] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);

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
              Edit Profile Details
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
              John Doe
            </p>
          </div>
          <hr className="items-center w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] " />

          <div className="flex flex-col m-3 mt-[32px]">
            <p className="text-[#8E2121] font-normal text-[14px]">
              Account Details
            </p>
            <p className="text-[#141416] font-semibold text-[20px] ">
              Basic Information
            </p>
          </div>

          <div className="flex flex-col gap-8 justify justify-between p-3">
            <form
              className="mt-[10px] flex flex-col gap-[11px] relative"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col relative">
                <span className="text-[#666666] py-1 px-1 text-[10px] absolute top-1/6 transform -translate-y-1/5 ml-5 font-normal mb-4">
                  Name
                </span>
                <div className="flex ">
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`bg-white py-4 px-6 placeholder:text-secondary text-black ${
                      formData.name
                        ? "rounded-lg"
                        : "border-[#EEEFF4] lg:w-full"
                    } rounded-xl outline-none border-[#000000] border-1 lg:w-[408px] w-full text-[12px] h-[52px] font-medium`}
                  />
                  <img
                    src={account_circle}
                    className="absolute mt-4 right-3 w-5 h-5"
                    alt="Person"
                  />
                </div>
              </label>

              <label className="flex flex-col relative">
                <span className="text-[#666666] py-1 px-1 text-[10px] absolute top-1/6 transform -translate-y-1/5 ml-5 font-normal mb-4">
                  E-mail
                </span>
                <div className="flex ">
                  <input
                    type="email"
                    name="email"
                    placeholder="oladapom4@gmail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!isFieldEnabled.email}
                    className={`bg-white py-4 px-6 placeholder:text-secondary text-black ${
                      isFieldEnabled.email
                        ? "rounded-lg"
                        : "border-[#EEEFF4] lg:w-full"
                    } rounded-xl outline-none border-[#000000] border-1 lg:w-[408px] w-full h-[52px] text-[12px] font-medium`}
                  />
                  <img
                    src={colored_email}
                    className="absolute mt-4 right-3 w-5 h-5"
                    alt="Email Icon"
                  />
                </div>
              </label>

              <label className="flex flex-col relative">
                <span className="text-[#666666] py-1 px-1 text-[10px] absolute top-1/6 transform -translate-y-1/5 ml-5 font-normal mb-4">
                  Phone Number
                </span>
                <div className="flex ">
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="2348162275527"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    disabled={!isFieldEnabled.phoneNumber}
                    className={`bg-[#ffff] py-4 px-6 placeholder:text-secondary text-black ${
                      isFieldEnabled.phoneNumber
                        ? "rounded-lg"
                        : "border-[#EEEFF4] lg:w-full"
                    } rounded-xl outline-none border-[#000000] font-medium border-1 h-[52px] text-[12px] lg:w-[408px] w-full`}
                  />
                  <img
                    src={colored_call}
                    className="absolute mt-4 right-3 w-5 h-5"
                    alt="Phone Number"
                  />
                </div>
              </label>

              <label className="flex flex-col relative">
                <span className="text-[#666666] py-1 px-1 text-[10px] absolute top-1/6 transform -translate-y-1/5 ml-5 font-normal mb-4">
                  State
                </span>
                <div className="flex">
                  <input
                    type="text"
                    name="state"
                    placeholder="Oyo"
                    value={formData.state}
                    onChange={handleInputChange}
                    disabled={!isFieldEnabled.state}
                    className={`bg-[#ffff] py-4 px-6 placeholder:text-secondary text-black ${
                      isFieldEnabled.state
                        ? "rounded-lg"
                        : "border-[#EEEFF4] lg:w-full"
                    } rounded-xl outline-none border-[#000000] font-medium border-1 h-[52px] text-[12px] lg:w-[408px] w-full`}
                  />
                </div>
                <img
                  src={place}
                  className="absolute mt-4 right-3 w-5 h-5"
                  alt="state of origin"
                />
              </label>

              <div className="flex flex-auto items-center justify-center mt-[32px] mb-[40px]">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`bg-original py-3 px-20 outline-none uppercase xl sm:w-[406px] lg:w-full text-white font-bold shadow-md rounded-full w-full h-[53px] ${
                    isFormValid ? "" : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  {loading ? "saving..." : "save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>

      <div>
        <BottomNavbar />
      </div>
    </section>
  );
};

export default EditProfile;
