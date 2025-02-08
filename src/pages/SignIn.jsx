import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handelPassword = (event) => {
    setPassword(event.target.value);
  };

  const handelClickShowHide = () => {
    setShowPassword((prev) => !prev);
  };

  const handelBtnClick = () => {
    console.log(email, "\n", password);
  };

  return (
    <Container fluid as="section" className="login-page p-0">
      <Row className="">
        <Col xs={12}>
          <div className="login-card">
            <div className="login-main login-tab">
              <Form className="theme-form">
                <h4>Sign In With Cuba Login</h4>
                <p>Enter your email & password to login</p>

                <div className="mb-3">
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="test@gmail.com"
                      value={email}
                      onChange={handleEmail}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 position-relative">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="****"
                      value={password}
                      onChange={handelPassword}
                      required
                    />
                    <div className="show-hide">
                      <span
                        onClick={handelClickShowHide}
                        className={showPassword ? "" : "show"}
                      ></span>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3 form-check position-relative ps-0">
                    <Form.Check
                      className=""
                      type="checkbox"
                      label="Remember password"
                    />
                    <Link to="" className="fg-link">
                      Forgot password?
                    </Link>
                  </Form.Group>

                  <Form.Group className="mb-30">
                    <Button
                      type="button"
                      className="btn btn-primary btn-block w-100 mt-3"
                      onClick={handelBtnClick}
                    >
                      Sign in
                    </Button>
                  </Form.Group>

                  <div className="login-social-title">
                    <h6 className="text-muted or mt-4">Or Sign up with</h6>
                  </div>

                  <div className="social my-4">
                    <div className="btn-showcase">
                      <Link
                        className="btn btn-light"
                        to="https://www.linkedin.com/login"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="txt-linkedin"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        LinkedIn
                      </Link>
                      <Link
                        className="btn btn-light"
                        to="https://twitter.com/login?lang=en"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="txt-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                        twitter
                      </Link>
                      <Link
                        className="btn btn-light"
                        to="https://www.facebook.com/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="txt-fb"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        facebook
                      </Link>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
