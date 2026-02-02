import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Footer from "./components/Footer";
import ReservationConfirmed from "./pages/ReservationConfirmed";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/reservation-confirmed" element={<ReservationConfirmed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
