import React from 'react';
import Navbar from '../dashboard/Navbar';
import Funds from './Funds';
import BottomNavbar from '../dashboard/BottomNavbar';

const More = () => {
  return (
    <section>
        <Navbar/>
        <Funds />
        <BottomNavbar />
    </section>
  )
}

export default More