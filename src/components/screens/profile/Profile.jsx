import React from 'react'
import ProfileNav from './ProfileNav'
import ProfileDetails from './ProfileDetails'
import BottomNavbar from '../../dashboard/BottomNavbar'

const Profile = () => {
  return (
    <section>
      <ProfileNav />
      <ProfileDetails />
      <BottomNavbar />
    </section>
  )
}

export default Profile