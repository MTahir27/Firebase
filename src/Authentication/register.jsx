import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { InputField } from "../Components/InputField";
import { auth } from "../Config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Register = () => {
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="container">
      <section className="d-flex justify-content-center align-item-center py-5">
        <Row>
          <Col md={9} lg={8} xl={7} className="mx-auto">
            <Form
              className="border p-4 rounded-3 bg-light"
              onSubmit={registerUser}
            >
              <h3 className="mb-4 text-dark">Registraion Form</h3>
              <Row className="g-4">
                {/* <Col sm={6}>
                  <InputField
                    label="First Name"
                    id="fname"
                    placeholder="First Name"
                    type="text"
                    onChange={(e) => {
                      setFName(e.target.value);
                    }}
                  />
                </Col>

                <Col sm={6}>
                  <InputField
                    label="Last Name"
                    id="lname"
                    placeholder="Last Name"
                    type="text"
                    onChange={(e) => {
                      setLName(e.target.value);
                    }}
                  />
                </Col> */}

                <Col xs={12}>
                  <InputField
                    label="Email"
                    id="email"
                    placeholder="Email"
                    type="email"
                    value={email}
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
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Col>

                {/* <Col xs={12}>
                  <InputField
                    label="Confirm Password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                  />
                </Col> */}

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
                    <Link
                      to="/login"
                      className="text-uppercase text-decoration-none fw-semibold"
                    >
                      Login Account
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
