import React from 'react';
import Navbar from '../dashboard/Navbar';
import NotificationScreen from './NotificationScreen';
import BottomNavbar from '../dashboard/BottomNavbar';

const Notifications = () => {
  return (
    <section>
        <Navbar />
        <NotificationScreen />
        <BottomNavbar />
    </section>
    
  )
}

export default Notifications