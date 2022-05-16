import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { InputField } from "../Components/InputField";

export const Register = () => {
  return (
    <div className="container">
      <section className="d-flex justify-content-center align-item-center py-5">
        <Row>
          <Col md={9} lg={8} xl={7} className="mx-auto">
            <Form className="border p-4 rounded-3 bg-light">
              <h3 className="mb-4 text-dark">Registraion Form</h3>
              <Row className="g-4">
                <Col sm={6}>
                  <InputField
                    label="First Name"
                    id="fname"
                    placeholder="First Name"
                    type="text"
                  />
                </Col>

                <Col sm={6}>
                  <InputField
                    label="Last Name"
                    id="lname"
                    placeholder="Last Name"
                    type="text"
                  />
                </Col>

                <Col xs={12}>
                  <InputField
                    label="Email"
                    id="email"
                    placeholder="Email"
                    type="email"
                  />
                </Col>

                <Col xs={12}>
                  <InputField
                    label="Password"
                    id="password"
                    placeholder="Password"
                    type="password"
                  />
                </Col>

                <Col xs={12}>
                  <InputField
                    label="Confirm Password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                  />
                </Col>

                <Col xs={12}>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 py-2 text-uppercase fw-bold"
                  >
                    Create Account
                  </Button>
                </Col>

                <Col>
                  <div className="d-flex gap-3">
                    <p>Already have an Account ?</p>
                    <a
                      href="#"
                      className="text-uppercase text-decoration-none fw-semibold"
                    >
                      Login Account
                    </a>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </section>
    </div>
  );
};
