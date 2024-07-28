import React, { useState, useEffect } from 'react';
import { FaHome, FaPlusCircle, FaUser, FaPersonBooth, FaHistory } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const BottomNavbar = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(location.pathname);

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/dashboard', icon: <FaHome /> },
    { name: 'More', path: '/more', icon: <FaPlusCircle /> },
    { name: 'History', path: '/history', icon: <FaHistory /> },
    { name: 'Profile', path: '/profile', icon: <FaPersonBooth /> },
  ];

  const handleNavClick = (path) => {
    setActiveNav(path);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-t-lg py-4 flex justify-around items-center z-50">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          onClick={() => handleNavClick(item.path)}
          className={`flex flex-col items-center gap-1 ${
            activeNav === item.path ? 'text-[#7E0B0B]' : 'text-[#919191] gap-2'
          }`}
        >
          <div className="text-xl">{item.icon}</div>
          <span className="text-[12px]">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavbar;
