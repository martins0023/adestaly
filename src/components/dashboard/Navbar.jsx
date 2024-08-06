import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../styles";
import { icon, menu, close, person, notification, apps } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-1 top-0 z-20 bg-colorbg pr-3`}
    >
      <div className="w-full flex justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={icon} alt="logo" className="w-14 h-14 object-contain" />
          <img
            src={person}
            alt="person"
            className="w-[32px] h-[32px] object-contain border-solid rounded-[70px] border-gray-700"
          />
          <p className="text-black text-[12px] font-semibold cursor-pointer text-center justify justify-start flex flex-auto ml-[6px]">
            Hi, Miracle
          </p>
        </Link>
        <ul className="flex list-none ml-[109px] sm:flex flex-row items-center">
          <Link to="/menu">
            <img src={apps} alt="apps" className="cursor-pointer mr-2" />
          </Link>
          <Link to="/notifications">
            <img
              src={notification}
              alt="notification"
              className="cursor-pointer"
            />
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
