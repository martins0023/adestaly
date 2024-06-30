import React from 'react'
import Navbar from '../../dashboard/Navbar'
import BottomNavbar from '../../dashboard/BottomNavbar'
import FundsForm from './FundsForm'

const WithdrawFunds = () => {
  return (
    <section>
      <Navbar />
      <FundsForm />
      <BottomNavbar />
    </section>
  )
}

export default WithdrawFunds