import React from 'react';

const MyButton = ({ isFormValid, loading, onClick, buttonText }) => {
  return (
    <div className="flex flex-auto items-center justify-center mt-[40px]">
      <button
        type="button"
        disabled={!isFormValid || loading}
        onClick={onClick}
        className={`bg-[#8E1011] py-3 px-20 outline-none uppercase xl text-[12px] sm:w-[406px] text-white font-bold shadow-md rounded-full w-full h-[45px] flex items-center justify-center ${
          isFormValid && !loading ? "" : "opacity-50 cursor-not-allowed"
        }`}
      >
        {loading ? (
          <div className="flex items-center">
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            PROCESSING...
          </div>
        ) : (
          buttonText
        )}
      </button>
    </div>
  );
};

export default MyButton;
