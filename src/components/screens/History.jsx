import React from 'react';
import Navbar from '../dashboard/Navbar';
import BottomNavbar from '../dashboard/BottomNavbar';
import HistoryTopup from './HistoryTopup';

const History = () => {
  return (
    <section>
        <Navbar/>
        <HistoryTopup />
        <BottomNavbar />
    </section>
  )
}

export default History