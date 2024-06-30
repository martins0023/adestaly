import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { styles } from "../../styles";
import { arrow_back_ios, cancel, home, success } from "../../assets";

const TransactionDetails = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //set state for date
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const formattedDate = `${String(now.getMonth() + 1).padStart(
        2,
        "0"
      )}/${String(now.getDate()).padStart(2, "0")}/${now.getFullYear()}`;
      setCurrentDate(formattedDate);
    };

    // Set date immediately when component mounts
    updateDate();
  }, []);
  return (
    <section className={`${styles.paddingX} p-1 font-montserrat`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto p-3 font-montserrat">
        <Link
          to="#"
          className="flex  "
          onClick={() => {
            window.scrollTo(0, 0);
            navigate(-1);
          }}
        >
          <img
            src={arrow_back_ios}
            alt="back"
            className="w-[24px] h-[24px] object-contain"
          />
        </Link>

        <p className="absolute left-1/2 transform -translate-x-1/2 font-montserrat text-center text-black text-[12px] font-semibold cursor-pointer">
          <span className="font-montserrat">Transaction Details</span>
        </p>
        <ul className="flex list-none ml-[109px] sm:flex flex-row">
          <Link
            to="/"
            className="flex  "
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

      <div className="mt-[54px] bg-white rounded-3xl p-7 m-3 gap-[24px] font-montserrat">
        <div className="flex flex-col justify justify-center items-center mt-[16px] gap-[12px] font-montserrat">
          <img src={success} className="w-[60px] h-[60px]" />
          <p className="font-semibold text-[24px] text-[#000] font-montserrat text-center">
            Transaction Successful
          </p>
          <p className="font-medium text-[14px] text-[#000] text-center font-montserrat">
            You have successfully shared 30GB Data to 234902784684.
          </p>
        </div>
        <div className="flex flex-auto justify justify-between mt-[16px] ">
          <p className="justify justify-start flex flex-start font-normal text-[16px] font-montserrat text-[#6A6A6A]">
            Ref No.
          </p>
          <p className="justify justify-end flex flex-end font-semibold text-[16px] font-montserrat text-[#000000]">
            986608468409
          </p>
        </div>
        <hr className=" w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] " />
        <div className="flex flex-auto justify justify-between mt-[16px] ">
          <p className="justify justify-start flex font-montserrat flex-start font-normal text-[16px] text-[#6A6A6A]">
            Biller
          </p>
          <p className="justify justify-end flex flex-end font-montserrat font-semibold text-[16px] text-[#000000]">
            MTNNG
          </p>
        </div>
        <hr className=" w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] mb-[16px]" />
        <div className="flex flex-auto justify justify-between ">
          <p className="justify justify-start flex flex-start font-montserrat font-normal text-[16px] text-[#6A6A6A]">
            Date
          </p>
          <p className="justify justify-end flex flex-end font-semibold font-montserrat text-[16px] text-[#000000]">
            {currentDate}
          </p>
        </div>
        <hr className=" w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] mb-[16px] " />
        <div className="flex flex-auto justify justify-between ">
          <p className="justify justify-start flex flex-start font-normal font-montserrat text-[16px] text-[#6A6A6A]">
            Service
          </p>
          <p className="justify justify-end flex flex-end font-semibold font-montserrat text-[16px] text-[#000000]">
            Data
          </p>
        </div>
        <hr className=" w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] mb-[16px] " />
        <div className="flex flex-auto justify justify-between mb-[16px]">
          <p className="justify justify-start flex flex-start font-normal font-montserrat text-[16px] text-[#6A6A6A]">
            Description
          </p>
          <p className=" font-semibold font-montserrat text-[16px] text-[#000000]">
            Your SME data <br />
            balance is 4384GB <br />
            expires 02/10/2024. <br />
            Thank you{" "}
          </p>
        </div>
        <hr className=" w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] mb-[16px] " />
        <div className="flex flex-auto justify justify-between ">
          <p className="justify justify-start flex font-montserrat flex-start font-normal text-[16px] text-[#6A6A6A]">
            Amount
          </p>
          <p className="justify justify-end flex flex-end font-montserrat font-semibold text-[16px] text-[#000000]">
            N796
          </p>
        </div>
        <hr className=" w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] mb-[16px] " />
        <div className="flex flex-auto justify justify-between ">
          <p className="justify justify-start flex flex-start font-normal font-montserrat text-[16px] text-[#6A6A6A]">
            Old Balance
          </p>
          <p className="justify justify-end flex flex-end font-semibold text-[16px] font-montserrat text-[#000000]">
            N702.4
          </p>
        </div>
        <hr className=" w-full height-[1px]  backgroundColor: '#E2E2E2' mt-[16px] mb-[16px] " />
        <div className="flex flex-auto justify justify-between mb-[16px] ">
          <p className="justify justify-start flex flex-start font-normal font-montserrat text-[16px] text-[#6A6A6A]">
            New Balance
          </p>
          <p className="justify justify-end flex flex-end font-semibold font-montserrat text-[16px] text-[#000000]">
            N843.4
          </p>
        </div>
      </div>

      <div className="flex flex-auto items-center justify-center mt-[56px] m-2 mb-8">
        <Link to="/userreceipt">
          <button
            type="submit"
            className={`bg-original font-montserrat py-3 px-20 outline-none uppercase xl sm:w-[406px] text-white font-bold shadow-md rounded-full w-full h-[60px] `}
          >
            {loading ? "transferring..." : "View user receipt"}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TransactionDetails;
