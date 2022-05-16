import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Error_404 = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex py-5 align-items-center justify-content-center flex-wrap flex-column gap-3 mh-100">
          <h4>Nothing Found Here</h4>
          <Link to={"/"}>
            <Button variant="primary">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
