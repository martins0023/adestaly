import React from 'react';
import Navbar from '../../dashboard/Navbar';
import ComissionRef from './ComissionRef';
import BottomNavbar from '../../dashboard/BottomNavbar';

const Referrals = () => {
  return (
    <section>
      <Navbar />
      <ComissionRef />
      <BottomNavbar />
    </section>
  )
}

export default Referrals