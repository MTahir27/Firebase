import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { InputField } from "../Components/InputField";

export const ForgetPassword = () => {
  return (
    <div className="container">
      <section className="d-flex justify-content-center align-item-center py-5">
        <Col md={9} lg={7} xl={6} className="mx-auto">
          <Form className="border p-4 rounded-3 bg-light">
            <p className="mb-3">Enter Email to get password reset code</p>
            <Row className="g-4">
              <Col xs={12}>
                <InputField
                  label="Email"
                  id="email"
                  placeholder="Email"
                  type="email"
                />
              </Col>

              <Col xs={12}>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2 text-uppercase fw-bold"
                >
                  Send
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </section>
    </div>
  );
};
