"use client";

import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import SpkToast from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-toast";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Toast, ToastContainer } from "react-bootstrap";

interface CoverProps {}

const Cover: React.FC<CoverProps> = () => {
  const [values, setValues] = useState<any>({
    email: "",
    password: "",
    showPassword: false,
    rememberMe: true,
  });

  const [errors, setErrors] = useState<any>({});
  const [show1, setShow1] = useState(false);
  const validate = () => {
    const newErrors: any = {};

    // Email validation
    if (!values.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Password validation
    if (!values.password) {
      newErrors.password = "Password is required.";
    } else if (values.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validate()) {
      setShow1(true);
      setTimeout(() => {
        router.push("/dashboards/crm/dashboard");
      }, 2000);
    }
  };

  return (
    <Fragment>
      <Seo title="Signin-Cover" />
      <Row className="authentication authentication-cover-main mx-0">
        <Col xxl={9} xl={9}>
          <Row className="justify-content-center align-items-center h-100">
            <Col xxl={4} xl={5} lg={6} md={6} sm={8} className="col-12">
              <Card className="custom-card border-0 shadow-none my-4">
                <Card.Body className="p-5">
                  <div>
                    <h4 className="mb-1 fw-semibold">Hi,Welcome back!</h4>
                    <p className="mb-4 text-muted fw-normal">
                      Please enter your credentials
                    </p>
                  </div>
                  <Form onSubmit={handleSubmit}>
                    <Row className=" gy-3">
                      <Col xl={12}>
                        <Form.Label
                          htmlFor="signin-email"
                          className="text-default"
                        >
                          Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          className="form-control "
                          id="signup-firstname"
                          placeholder="Enter Email ID"
                          value={values.email}
                          onChange={(e) =>
                            setValues({ ...values, email: e.target.value })
                          }
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Col>
                      <Col xl={12} className="mb-2">
                        <Form.Label
                          htmlFor="signin-password"
                          className="text-default d-block"
                        >
                          Password
                        </Form.Label>
                        <div className="position-relative">
                          <Form.Control
                            type={values.showPassword ? "text" : "password"}
                            className="form-control "
                            id="signup-password"
                            placeholder="Password"
                            value={values.password}
                            onChange={(e) =>
                              setValues({ ...values, password: e.target.value })
                            }
                            isInvalid={!!errors.password}
                          />
                          <Link
                            scroll={false}
                            href="#!"
                            className="show-password-button text-muted"
                            onClick={() =>
                              setValues((prev: any) => ({
                                ...prev,
                                showPassword: !prev.showPassword,
                              }))
                            }
                          >
                            {values.showPassword ? (
                              <i className="ri-eye-line align-middle"></i>
                            ) : (
                              <i className="ri-eye-off-line align-middle"></i>
                            )}
                          </Link>
                          <Form.Control.Feedback type="invalid">
                            {errors.password}
                          </Form.Control.Feedback>
                        </div>
                        <div className="mt-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="defaultCheck1"
                              checked={values.rememberMe}
                              onChange={(e) =>
                                setValues({
                                  ...values,
                                  rememberMe: e.target.checked,
                                })
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="defaultCheck1"
                            >
                              Remember me
                            </label>
                            <Link
                              scroll={false}
                              href="/authentication/reset-password/basic"
                              className="float-end link-danger fw-medium fs-12"
                            >
                              Forget password ?
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="d-grid mt-3">
                      <SpkButton
                        Buttontype="submit"
                        Customclass="btn btn-primary"
                      >
                        Sign In
                      </SpkButton>
                    </div>
                  </Form>
                  <div className="text-center my-3 authentication-barrier">
                    <span className="op-4 fs-13">OR</span>
                  </div>
                  <div className="d-grid mb-3">
                    <SpkButton Customclass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill mb-3">
                      <span className="avatar avatar-xs">
                        <Image
                          fill
                          src="/assets/images/media/apps/google.png"
                          alt=""
                        />
                      </span>
                      <span className="lh-1 ms-2 fs-13 text-default fw-medium">
                        Signup with Google
                      </span>
                    </SpkButton>
                    <SpkButton Customclass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
                      <span className="avatar avatar-xs">
                        <Image
                          fill
                          src="/assets/images/media/apps/facebook.png"
                          alt=""
                        />
                      </span>
                      <span className="lh-1 ms-2 fs-13 text-default fw-medium">
                        Signup with Facebook
                      </span>
                    </SpkButton>
                  </div>
                  <div className="text-center mt-3 fw-medium">
                    Dont have an account?{" "}
                    <Link
                      scroll={false}
                      href="/authentication/sign-up/cover/"
                      className="text-primary"
                    >
                      Sign Up
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xxl={3} xl={3} className="d-xl-block d-none">
          <div className="authentication-cover">
            <div className="aunthentication-cover-content d-flex align-items-center justify-content-center">
              <div>
                <h3 className="text-white mb-1 fw-semibold">Welcome Back !</h3>
                <h6 className="text-white mb-3 fw-normal">
                  Sign In to your account
                </h6>
                <p className="text-white-50 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro rem voluptates distinctio hic quia?
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
        <Toast
          id="liveToast"
          className="toast fade show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          onClose={() => setShow1(false)}
          show={show1}
          delay={3000}
          autohide={true}
        >
          <Toast.Header className="text-white bg-primary">
            <Image
              className="bd-placeholder-img rounded me-2 w-4 h-4"
              src="/assets/images/brand-logos/favicon.ico"
              alt="..."
              width="24"
              height="24"
            />
            <strong className="me-auto">Welcome</strong>{" "}
            {/* <small>11 mins ago</small> */}
          </Toast.Header>
          <Toast.Body className="">Login Successful</Toast.Body>
        </Toast>
      </ToastContainer>
    </Fragment>
  );
};

export default Cover;
