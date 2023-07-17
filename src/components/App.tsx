import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "../pages/MainPage";
import PaymentPage from "../pages/PaymentPage";
import Profile from "../pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<MainPage />} />
          <Route path="offer/buy/:id" element={<PaymentPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="payment" element={<PaymentPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
