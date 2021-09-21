import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import fire from "../../firebase-config/fire";
import RenderCart from "./RenderCart";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItem: null,
      totalPrice: null,
      loading: false,
      error: null,
    };
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleIncQty = this.handleIncQty.bind(this);
    this.handleDecQty = this.handleDecQty.bind(this);
  }

  getCartItem() {
    const userId = fire.auth().currentUser.uid;
    const databaseRef = fire
      .database()
      .ref()
      .child("shop/cart/" + userId);

    databaseRef.on("value", (snap) => {
      const value = snap.val();
      let total = 0;
      if (value != null) {
        value.forEach((v) => (total += v.quantity * v.item.price));
        this.setState({ cartItem: value, totalPrice: total });
      }
    });
  }

  componentDidMount() {
    this.getCartItem();
  }
  componentWillUnmount() {
    const userId = fire.auth().currentUser;
    if (userId != null) {
      const databaseRef = fire
        .database()
        .ref()
        .child("shop/cart/" + userId.uid);
      databaseRef.off();
    }
  }
  handleItemClick(item) {
    console.log(item);
  }
  handleIncQty(index) {
    this.setState({ loading: true });
    const userId = fire.auth().currentUser.uid;
    const databaseRef = fire
      .database()
      .ref()
      .child("shop/cart/" + userId);
    const items = this.state.cartItem;
    if (items[index].quantity < 4) {
      items[index].quantity += 1;
      databaseRef
        .update(items, () => this.setState({ loading: false }))
        .catch((err) => {
          this.setState({ loading: false, error: err });
        });
    } else {
      console.log("Cannot exceed more than 4.");
    }
  }

  handleDecQty(index) {
    this.setState({ loading: true });
    const userId = fire.auth().currentUser.uid;
    const databaseRef = fire
      .database()
      .ref()
      .child("shop/cart/" + userId);
    const items = this.state.cartItem;
    if (items[index].quantity - 1 > 0) {
      items[index].quantity -= 1;
      databaseRef
        .update(items, () => this.setState({ loading: false }))
        .catch((err) => {
          this.setState({ loading: false, error: err });
        });
    } else {
      this.handleDeleteItem(index);
    }
  }

  handleDeleteItem(index) {
    this.setState({ loading: true });
    const cart = this.state.cartItem;
    cart.splice(index, 1);
    const userId = fire.auth().currentUser.uid;
    const databaseRef = fire
      .database()
      .ref()
      .child("shop/cart/" + userId);
    databaseRef
      .set(cart, () => this.setState({ loading: false }))
      .catch((err) => {
        this.setState({ loading: false, error: err });
      });
  }

  render() {
    const click = {
      handleItemClick: this.handleItemClick,
      handleDeleteItem: this.handleDeleteItem,
      handleIncrease: this.handleIncQty,
      handleDecrease: this.handleDecQty,
    };
    if (this.state.cartItem == null || this.state.cartItem.length === 0) {
      return (
        <div>
          <Container>
            <img
              src="https://images.unsplash.com/photo-1593100550919-da28468d9899"
              alt="Google Login"
              width="500px"
            />
            <Row className="justify-content-md-center">
              <h2>Oops!! Your cart is empty please add your favorite heroes.. </h2>
            </Row>
          </Container>
        </div>
      );
    }
    return <RenderCart dataOfItem={this.state} clicks={click} />;
  }
}

export default Cart;
