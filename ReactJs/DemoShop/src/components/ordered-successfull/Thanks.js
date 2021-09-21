import React from "react";
import {} from "react-bootstrap";
import { Link } from "react-router-dom";

function Thanks() {
  return (
    <div>
      <h1>Hola! Your order has been placed and will reach to you soon.</h1>
      <Link to="/orders" className="button btn btn-primary">
        View Orders
      </Link>
    </div>
  );
}

export default Thanks;
