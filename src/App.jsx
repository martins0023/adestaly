import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  GetStarted,
  CreatePassword,
  Signup,
  Login,
  ForgetPassword,
} from "./components";
import { Contact, Dashboard, Menu, Mtn } from "./components/dashboard";
//import { NetworkProvider } from "./components/services/NetworkContext";
import {
  Airtime,
  AirtimeToCash,
  Cable,
  Data,
  DataPinScreen,
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
  Pricing,
} from "./components/screens";
import { Referrals, WithdrawFunds } from "./components/screens/Referrals";
import Profile from "./components/screens/profile/Profile";
import {
  EditLogin,
  EditProfile,
  EditTransactionPin,
} from "./components/screens/profile";
import { NetworkProvider } from "./components/services/NetworkContext";

const App = () => {
  return (
    <NetworkProvider>
      <BrowserRouter>
        <div className="relative z-0 bg-colorbg">
          <div className="pb-20">
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="/getstarted" element={<GetStarted />} />
              <Route path="/CreatePassword" element={<CreatePassword />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/forgetpassword" element={<ForgetPassword />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Mtn" element={<Mtn />} />
              <Route path="/Airtime" element={<Airtime />} />
              <Route path="/Data" element={<Data />} />
              <Route path="/DataPin" element={<DataPinScreen />} />
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
              <Route path="/Profile" element={<Profile />} />
              <Route path="/EditProfile" element={<EditProfile />} />
              <Route path="/EditLogin" element={<EditLogin />} />
              <Route
                path="/EditTransactionPin"
                element={<EditTransactionPin />}
              />
              <Route path="/Pricing" element={<Pricing />} />
              <Route path="/Contact-us" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </NetworkProvider>
  );
};

export default App;
