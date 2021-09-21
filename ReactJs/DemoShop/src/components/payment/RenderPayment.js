import React from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import ChooseAddress from "../address/choose-address/ChooseAddress";

function RenderPayment(props) {
  let element = <div></div>;

  const cart = props.cart.cartItem;
  if (cart != null) {
    element = cart.map((e, i) => (
      <ListGroup.Item key={i}>
        <Row>
          <Col>{e.item.name}</Col>
          <Col> {e.quantity} </Col>
          <Col>&#x20B9; {e.item.price * e.quantity} </Col>
        </Row>
      </ListGroup.Item>
    ));
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item>
                <ChooseAddress selectedData={(e) => props.clicks.handleSelectedAddr(e)} />
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <b>Name</b>
                  </Col>
                  <Col>
                    <b>Quantity</b>
                  </Col>
                  <Col>
                    <b>Price</b>
                  </Col>
                </Row>
              </ListGroup.Item>

              {element}
              <ListGroup.Item>
                <Row>
                  <Col></Col>
                  <Col>
                    <b style={{ color: "red" }}>Total</b>
                  </Col>
                  <Col>
                    <b style={{ color: "red" }}>&#x20B9; {props.cart.totalPrice}</b>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col>
            <Button onClick={props.clicks.handlePayNow} size="lg" block variant="outline-success" class="btn btn-primary">
              <h1>Order Now (&#x20B9; {props.cart.totalPrice})</h1>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RenderPayment;
