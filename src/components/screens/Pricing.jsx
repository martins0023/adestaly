import React, { useState, useEffect } from "react";
//import  axios  from "axios";
import { motion } from "framer-motion";
import Navbar from "../dashboard/Navbar";
import BottomNavbar from "../dashboard/BottomNavbar";
import { pricing } from "../../assets";

const Pricing = () => {
  const [networks, setNetworks] = useState([]);
  const [airtime, setAirtime] = useState([]);
  const [dataPlans, setDataPlans] = useState([]);
  const [cableProviders, setCableProviders] = useState([]);
  const [cablePlans, setCablePlans] = useState([]);
  const [electricityTokens, setElectricityTokens] = useState([]);
  const [examPins, setExamPins] = useState([]);

  useEffect(() => {
    //When backend is ready
    // Fetch data from backend API
    // Replace the URLs with your actual backend endpoints
    const fetchData = async () => {
      try {
        const networksResponse = await axios.get("/api/networks");
        const airtimeResponse = await axios.get("/api/airtime");
        const dataPlansResponse = await axios.get("/api/dataPlans");
        const cableProvidersResponse = await axios.get("/api/cableProviders");
        const cablePlansResponse = await axios.get("/api/cablePlans");
        const electricityTokensResponse = await axios.get("/api/electricityTokens");
        const examPinsResponse = await axios.get("/api/examPins");

        setNetworks(networksResponse.data);
        setAirtime(airtimeResponse.data);
        setDataPlans(dataPlansResponse.data);
        setCableProviders(cableProvidersResponse.data);
        setCablePlans(cablePlansResponse.data);
        setElectricityTokens(electricityTokensResponse.data);
        setExamPins(examPinsResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();

    // Dummy data to be replaced with actual API calls
    const dummyNetworks = [
      { id: 1, name: "MTN" },
      { id: 2, name: "GLO" },
      { id: 3, name: "9MOBILE" },
      { id: 4, name: "AIRTEL" },
    ];

    const dummyAirtime = [
      { network: "MTN", subscriber: 2, agents: 2, vendors: 2 },
      { network: "GLO", subscriber: 6, agents: 6, vendors: 6 },
      { network: "9MOBILE", subscriber: 4, agents: 4, vendors: 4 },
      { network: "AIRTEL", subscriber: 2, agents: 2, vendors: 2 },
    ];

    const dummyDataPlans = [
      { network: "MTN", planId: 9, plan: "500MB (SME) (30 days)", subscriber: "N234", agents: "N540", vendors: "500" },
      { network: "GLO", planId: 10, plan: "1.0 GB (SME) (30 days)", subscriber: "N123", agents: "N120", vendors: "100" },
      { network: "9MOBILE", planId: 11, plan: "2.0 GB (SME) (30 days)", subscriber: "N155", agents: "N230", vendors: "200" },
      { network: "AIRTEL", planId: 12, plan: "3.0 GB (SME) (30 days)", subscriber: "N234", agents: "N220", vendors: "200" },
    ];

    const dummyCableProviders = [
      { id: 1, name: "GOTV" },
      { id: 2, name: "DSTV" },
      { id: 3, name: "STARTIMES" },
    ];

    const dummyCablePlans = [
      { network: "DSTV", planId: 13, plan: "Dstv Padi (30 days)", subscriber: "N2340", agents: "N2340", vendors: "2000" },
      { network: "GOTV", planId: 14, plan: "Gotv Joli (30 days)", subscriber: "N4230", agents: "N4230", vendors: "4000" },
      { network: "NOVA", planId: 15, plan: "Nova - 1 week (7 days)", subscriber: "N3550", agents: "N3550", vendors: "3000" },
      { network: "GOTV", planId: 16, plan: "Gotv Jinja (30 days)", subscriber: "N6300", agents: "N6300", vendors: "6000" },
    ];

    const dummyElectricityTokens = [
      { id: 8, provider: "Abuja Electric" },
      { id: 10, provider: "Benin Electric" },
      { id: 2, provider: "Eko Electric" },
      { id: 9, provider: "Enugu Electric" },
      { id: 6, provider: "Ibadan Electric" },
      { id: 1, provider: "Ikeja Electric" },
      { id: 7, provider: "Kaduna Electric" },
      { id: 3, provider: "Kano Electric" },
      { id: 4, provider: "Port Harcourt Electric" },
      { id: 11, provider: "Yola Electric" },
    ];

    const dummyExamPins = [
      { id: 1, provider: "WAEC", price: 3500 },
      { id: 2, provider: "NECO", price: 1200 },
      { id: 3, provider: "NABTEB", price: 950 },
    ];

    setNetworks(dummyNetworks);
    setAirtime(dummyAirtime);
    setDataPlans(dummyDataPlans);
    setCableProviders(dummyCableProviders);
    setCablePlans(dummyCablePlans);
    setElectricityTokens(dummyElectricityTokens);
    setExamPins(dummyExamPins);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, staggerChildren: 0.3 },
    },
    exit: {
      x: "100vw",
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <section>
      <div>
        <Navbar />
      </div>

      <motion.div
        className="dashboard-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="bg-white rounded-2xl p-6 m-3">
          <div className="flex flex-row justify-center gap-4">
            <h2 className="text-center text-[#8E1011] text-[18px] font-semibold mb-6">
              Our Pricing
            </h2>
            <img src={pricing} className="w-[32px] h-[32px]" />
          </div>

          <section className="mb-6">
            <h3 className="text-[16px] font-semibold text-left mb-2 text-black">Networks</h3>
            <table className="w-full border-collapse">
              <thead className="bg-[#8E1011] text-white">
                <tr>
                  <th className="p-2 border">Id</th>
                  <th className="p-2 border">Networks</th>
                </tr>
              </thead>
              <tbody>
                {networks.map(network => (
                  <tr key={network.id} className="text-[12px]">
                    <td className="p-2 border text-center text-black">{network.id}</td>
                    <td className="p-2 border text-center text-black">{network.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="mb-6">
            <h3 className="text-[16px] font-semibold text-left text-black mb-2">Airtime</h3>
            <table className="w-full border-collapse">
              <thead className="bg-[#8E1011] text-white">
                <tr>
                  <th className="p-2 h-[36px] w-[105px] border">Network</th>
                  <th className="p-2 border">Subscriber</th>
                  <th className="p-2 border">Agents</th>
                  <th className="p-2 border">Vendors</th>
                </tr>
              </thead>
              <tbody>
                {airtime.map(item => (
                  <tr key={item.network} className="text-[12px]">
                    <td className="p-2 border text-center text-black">{item.network}</td>
                    <td className="p-2 border text-center text-black">{item.subscriber}%</td>
                    <td className="p-2 border text-center text-black">{item.agents}%</td>
                    <td className="p-2 border text-center text-black">{item.vendors}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="mb-6 overflow-x-auto">
            <h3 className="text-[16px] font-semibold text-left mb-2 text-black">Data Plan</h3>
            <p className="text-sm text-[#8E1011] mb-2">
              Scroll horizontally to view the entire table
            </p>
            <table className="w-full border-collapsex">
              <thead className="bg-[#8E1011] text-white">
                <tr>
                  <th className="p-2 border">Network</th>
                  <th className="p-2 border">Plan Id</th>
                  <th className="p-2 border">Plan</th>
                  <th className="p-2 border">Subscriber</th>
                  <th className="p-2 border">Agents</th>
                  <th className="p-2 border">Vendors</th>
                </tr>
              </thead>
              <tbody>
                {dataPlans.map(plan => (
                  <tr key={plan.planId} className="text-[12px]">
                    <td className="p-2 border text-center text-black">{plan.network}</td>
                    <td className="p-2 border text-center text-black">{plan.planId}</td>
                    <td className="p-2 border text-center text-black">{plan.plan}</td>
                    <td className="p-2 border text-center text-black">{plan.subscriber}</td>
                    <td className="p-2 border text-center text-black">{plan.agents}</td>
                    <td className="p-2 border text-center text-black">{plan.vendors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="mb-6">
            <h3 className="text-[16px] font-semibold text-left mb-2 text-black">
              Cable TV Provider
            </h3>
            <table className="w-full border-collapse">
              <thead className="bg-[#8E1011] text-white">
                <tr>
                  <th className="p-2 border">Cable Id</th>
                  <th className="p-2 border">Provider</th>
                </tr>
              </thead>
              <tbody>
                {cableProviders.map(provider => (
                  <tr key={provider.id} className="text-[12px]">
                    <td className="p-2 border text-center text-black">{provider.id}</td>
                    <td className="p-2 border text-center text-black">{provider.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="mb-6 overflow-x-auto">
            <h3 className="text-[16px] font-semibold text-left text-black mb-2">Cable Plan</h3>
            <p className="text-sm text-[#8E1011] mb-2">
              Scroll horizontally to view the entire table
            </p>
            <table className="w-full border-collapse">
              <thead className="bg-[#8E1011] text-white">
                <tr>
                  <th className="p-2 border">Network</th>
                  <th className="p-2 border">Plan Id</th>
                  <th className="p-2 border">Plan</th>
                  <th className="p-2 border">Subscriber</th>
                  <th className="p-2 border">Agents</th>
                  <th className="p-2 border">Vendors</th>
                </tr>
              </thead>
              <tbody>
                {cablePlans.map(plan => (
                  <tr key={plan.planId} className="text-[12px]">
                    <td className="p-2 border text-center text-black">{plan.network}</td>
                    <td className="p-2 border text-center text-black">{plan.planId}</td>
                    <td className="p-2 border text-center text-black">{plan.plan}</td>
                    <td className="p-2 border text-center text-black">{plan.subscriber}</td>
                    <td className="p-2 border text-center text-black">{plan.agents}</td>
                    <td className="p-2 border text-center text-black">{plan.vendors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="mb-6">
            <h3 className="text-[16px] text-black font-semibold text-left mb-2">
              Electricity Token
            </h3>
            <table className="w-full border-collapse">
              <thead className="bg-[#8E1011] text-white">
                <tr>
                  <th className="p-2 border">Id</th>
                  <th className="p-2 border">Provider</th>
                </tr>
              </thead>
              <tbody>
                {electricityTokens.map(token => (
                  <tr key={token.id} className="text-[12px]">
                    <td className="p-2 border text-center text-black">{token.id}</td>
                    <td className="p-2 border text-center text-black">{token.provider}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="mb-6">
            <h3 className="text-[16px] text-black font-semibold text-left mb-2">Exam Pin</h3>
            <table className="w-full border-collapse">
              <thead className="bg-[#8E1011] text-white">
                <tr>
                  <th className="p-2 border">Exam Id</th>
                  <th className="p-2 border">Provider</th>
                  <th className="p-2 border">Price</th>
                </tr>
              </thead>
              <tbody>
                {examPins.map(pin => (
                  <tr key={pin.id} className="text-[12px]">
                    <td className="p-2 border text-center text-black">{pin.id}</td>
                    <td className="p-2 border text-center text-black">{pin.provider}</td>
                    <td className="p-2 border text-center text-black">{pin.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </motion.div>

      <div>
        <BottomNavbar />
      </div>
    </section>
  );
};

export default Pricing;
