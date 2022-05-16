import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../Components/InputField";
import { auth } from "../Config/Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="container">
      <section className="d-flex justify-content-center align-item-center py-5">
        <Row>
          <Col md={9} lg={8} xl={7} className="mx-auto">
            <Form
              className="border p-4 rounded-3 bg-light"
              onSubmit={loginUser}
            >
              <h3 className="mb-4 text-dark">Login Form</h3>
              <Row className="g-4">
                <Col xs={12}>
                  <InputField
                    label="Email"
                    id="email"
                    placeholder="Email"
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Col>

                <Col xs={12}>
                  <InputField
                    label="Password"
                    id="password"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Col>

                <Col className="text-end">
                  <Link
                    to="/forgetpassword"
                    className="text-uppercase text-decoration-none fw-semibold"
                  >
                    Forget Password?
                  </Link>
                </Col>

                <Col xs={12}>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 py-2 text-uppercase fw-bold"
                  >
                    Login Account
                  </Button>
                </Col>

                <Col>
                  <div className="d-flex gap-3">
                    <p>Don't have an Account</p>
                    <Link
                      to="/register"
                      className="text-uppercase text-decoration-none fw-semibold"
                    >
                      Create Account
                    </Link>
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
