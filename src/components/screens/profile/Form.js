const [passwordVisibility, setPasswordVisibility] = useState("empty");

const togglePasswordVisibility = () => {
  setPasswordVisibility((prevState) =>
    prevState === "visible" ? "hidden" : "visible"
  );
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

//handle form submission
const [formData, setFormData] = useState({
  oldPassword: "",
  newPassword: "",
  confirmNewPassword: "",
});

const [isFormValid, setIsFormValid] = useState(false);

const [isFieldEnabled, setIsFieldEnabled] = useState({
  newPassword: false,
  confirmNewPassword: false,
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
    newPassword: !!formData.oldPassword,
    confirmNewPassword: !!formData.oldPassword && !!formData.newPassword,
  });

  const allFieldsFilled =
    formData.oldPassword && formData.newPassword && formData.confirmNewPassword;

  setIsFormValid(allFieldsFilled);
}, [formData]);

const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission
};
const [loading, setLoading] = useState(false);

const [isEnabled, setIsEnabled] = useState(false);

<form
  className="mt-[10px] flex flex-col gap-[11px] relative"
  onSubmit={handleSubmit}
>
  <label className="flex flex-col relative">
    <span className="text-[#666666] py-1 px-1 text-[12px] absolute top-1/6 transform -translate-y-1/5 ml-5 font-normal mb-4">
      Old Password
    </span>
    <div className="flex ">
      <input
        type={passwordVisibility === "visible" ? "text" : "password"}
        name="oldPassword"
        placeholder="Old Password"
        value={formData.oldPassword}
        onChange={handleInputChange}
        className={`bg-white py-4 px-6 placeholder:text-secondary text-black ${
          formData.oldPassword ? "rounded-lg" : "border-[#EEEFF4] lg:w-full"
        } rounded-xl outline-none border-[#000000] border-1 lg:w-[408px] w-full h-[56px] font-medium`}
      />
      <img
        src={
          passwordVisibility === "visible"
            ? colored_visibility
            : colored_visibility_off
        }
        className="absolute mt-4 right-3 w-[24px] h-[24px]"
        alt="lock"
        onClick={togglePasswordVisibility}
      />
    </div>
  </label>

  <label className="flex flex-col relative">
    <span className="text-[#666666] py-1 px-1 text-[12px] absolute top-1/6 transform -translate-y-1/5 ml-5 font-normal mb-4">
      New Password
    </span>
    <div className="flex ">
      <input
        type={passwordVisibility === "visible" ? "text" : "password"}
        name="newPassword"
        placeholder="New Password"
        value={formData.newPassword}
        onChange={handleInputChange}
        disabled={!isFieldEnabled.newPassword}
        className={`bg-white py-4 px-6 placeholder:text-secondary text-black ${
          isFieldEnabled.newPassword
            ? "rounded-lg"
            : "border-[#EEEFF4] lg:w-full"
        } rounded-xl outline-none border-[#000000] border-1 lg:w-[408px] w-full h-[56px] font-medium`}
      />
      <img
        src={
          passwordVisibility === "visible"
            ? colored_visibility
            : colored_visibility_off
        }
        className="absolute mt-4 right-3 w-[24px] h-[24px]"
        alt="lock"
        onClick={togglePasswordVisibility}
      />
    </div>
  </label>

  <label className="flex flex-col relative">
    <span className="text-[#666666] py-1 px-1 text-[12px] absolute top-1/6 transform -translate-y-1/5 ml-5 font-normal mb-4">
      Retype Password
    </span>
    <div className="flex ">
      <input
        type={passwordVisibility === "visible" ? "text" : "password"}
        name="confirmNewPassword"
        placeholder="Retype Password"
        value={formData.confirmNewPassword}
        onChange={handleInputChange}
        disabled={!isFieldEnabled.confirmNewPassword}
        className={`bg-[#ffff] py-4 px-6 placeholder:text-secondary text-black ${
          isFieldEnabled.confirmNewPassword
            ? "rounded-lg"
            : "border-[#EEEFF4] lg:w-full"
        } rounded-xl outline-none border-[#000000] font-medium border-1 lg:w-[408px] w-full`}
      />
      <img
        src={
          passwordVisibility === "visible"
            ? colored_visibility
            : colored_visibility_off
        }
        className="absolute mt-4 right-3 w-[24px] h-[24px]"
        alt="lock"
        onClick={togglePasswordVisibility}
      />
    </div>
  </label>

  <div className="flex flex-auto items-center justify-center mt-[32px] mb-[40px]">
    <button
      type="submit"
      disabled={!isFormValid}
      className={`bg-original text-[16px] text-center py-3 px-20 outline-none uppercase xl sm:w-[406px] lg:w-full text-white font-bold shadow-md rounded-full w-full h-[60px] ${
        isFormValid ? "" : "opacity-50 cursor-not-allowed"
      }`}
    >
      {loading ? "transferring..." : "update password"}
    </button>
  </div>
</form>;
