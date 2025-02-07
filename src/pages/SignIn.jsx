import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

export default function SignIn() {
  return (
    <Container fluid as="section" className="login-page p-0">
      <Row className="">
        <Col xs={12}>
          <div className="login-card">
            <div className="login-main login-tab">
              <Form className="theme-form">
                <h4>Sign In With Harsh Login</h4>
                <p>Enter your email & password to login</p>

                <div className="mb-3"></div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
