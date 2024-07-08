import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GetStarted, CreatePassword, Signup, Login } from "./components";
import { Dashboard, Menu, Mtn } from "./components/dashboard";
import {
  Airtime,
  AirtimeToCash,
  Cable,
  Data,
  Electricity,
  Exam,
  Review,
  TransactionDetails,
  UserReceipt,
} from "./components/services";
import {
  Bank_transfer,
  Card,
  History,
  Manual,
  More,
  Notifications,
} from "./components/screens";
import { Referrals, WithdrawFunds } from "./components/screens/Referrals";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-colorbg">
        <div className="pb-20">
          <Routes>
            <Route index element={<GetStarted />} />
            <Route path="/getstarted" element={<GetStarted />} />
            <Route path="/CreatePassword" element={<CreatePassword />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Mtn" element={<Mtn />} />
            <Route path="/Airtime" element={<Airtime />} />
            <Route path="/Data" element={<Data />} />
            <Route path="/Review" element={<Review />} />
            <Route
              path="/TransactionDetails"
              element={<TransactionDetails />}
            />
            <Route path="/UserReceipt" element={<UserReceipt />} />
            <Route path="/Cable" element={<Cable />} />
            <Route path="/Exam" element={<Exam />} />
            <Route path="/Electricity" element={<Electricity />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Notifications" element={<Notifications />} />
            <Route path="/More" element={<More />} />
            <Route path="/Bank_transfer" element={<Bank_transfer />} />
            <Route path="/Manual" element={<Manual />} />
            <Route path="/Card" element={<Card />} />
            <Route path="/History" element={<History />} />
            <Route path="/Referrals" element={<Referrals />} />
            <Route path="/WithdrawFunds" element={<WithdrawFunds />} />
            <Route path="/AirtimeToCash" element={<AirtimeToCash />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
