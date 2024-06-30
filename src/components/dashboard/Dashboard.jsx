import React from "react";
import Navbar from "./Navbar";
import Wallets from "./Wallets";
import BottomNavbar from "./BottomNavbar";

const Dashboard = () => {
  return (
    <section>
      <Navbar />
      <Wallets />
      <BottomNavbar />
    </section>
  );
};

export default Dashboard;
