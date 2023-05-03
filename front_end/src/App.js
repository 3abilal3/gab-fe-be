import React from "react";
import Home from "./pages/Home";
import DashBoardPage from './dashboard/DashBoardPage'
import Login from "./Form/Login";
import Register from "./Form/Register";
import Forgot from "./Form/Forgot";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import LeadAdd from "./dashboard/Lead/LeadAdd";
// import HotelAdd from "./dashboard/hotel/LeadAdd";
// import DashBoard from './dashboard'
// import HotelAdd from './dashboard/hotel/HotelAdd'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeadList from "./dashboard/leadlist/LeadList";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />




          <Route path="/dashboard" element={<DashBoardPage />}>
            {/* <Route index element={<DashBoard />} /> */}
            <Route path="/dashboard/leadadd" element={<LeadAdd />} />
            <Route path="/dashboard/leadlist" element={<LeadList />} />

            {/* <Route
              path="/dashboard/paymentmethod"
              element={<PaymentMethod />}
            />
            <Route path="/dashboard/roomadd" element={<RoomAdd />} />
            <Route path="/dashboard/hotellist" element={<HotelList />} />
            <Route path="/dashboard/roomlist" element={<RoomList />} />
            <Route path="/dashboard/addresidence" element={<ResidenceAdd />} />
            <Route
              path="/dashboard/residencelist"
              element={<ResidenceList />}
            />
            <Route path="/dashboard/booking" element={<Booking />} />
            <Route path="/dashboard/approved" element={<ApprovedRequest />} /> */}
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;