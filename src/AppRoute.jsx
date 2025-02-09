import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Layout from "./component/Layout";

export default function AppRoute() {
  return (
    <>
      <Layout>
        {/* <Header /> */}
        <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
        {/* <Footer /> */}
      </Layout>
    </>
  );
}
