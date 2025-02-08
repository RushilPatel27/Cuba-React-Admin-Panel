import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

export default function AppRoute() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </>
  );
}
