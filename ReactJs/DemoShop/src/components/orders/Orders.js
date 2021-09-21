import React, { Component } from "react";
import RenderOrder from "./RenderOrder";
import fire from "../../firebase-config/fire";
import { Spinner } from "react-bootstrap";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: null,
      loading: true,
    };
  }

  componentDidMount() {
    const userId = fire.auth().currentUser.uid;
    const databaseRef = fire
      .database()
      .ref()
      .child("shop/order/" + userId);
    databaseRef.on("value", (snap) => {
      if (snap.val() !== null) this.setState({ loading: false, orders: snap.val() });
      else this.setState({ loading: false, orders: null });
    });
  }
  render() {
    if (this.state.loading) {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spinner as="span" animation="border" size="lg" role="status" aria-hidden="true" style={{ width: "5rem", height: "5rem" }} />
          <span className="sr-only">Hey there! Wait for a moment.</span>
        </div>
      );
    }
    if (this.state.orders === null && this.state.orders === undefined) {
      return <h1>No Orders placed.</h1>;
    }
    return <RenderOrder data={this.state.orders} />;
  }
}

export default Orders;
