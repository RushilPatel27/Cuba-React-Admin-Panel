import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./SideBar";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Dashboard from "../pages/Dashboard";

export default function Layout() {
  return (
    <>
      <div className="" id="pageWrapper">
        <Header />
        <Container fluid className="p-0">
          <Row>
            <Col md={6} lg={2}>
              <SideBar />
            </Col>
            <Col md={6} lg={10}>
              <Dashboard />
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    </>
  );
}
