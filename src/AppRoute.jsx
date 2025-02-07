import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SignIn from "./pages/SignIn";

export default function AppRoute() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

      <Footer />
    </>
  );
}
