import React from "react";
import { ListGroup, Row, Col, Container, Figure } from "react-bootstrap";

function RenderHome(props) {
  const list =
    props.dataOfItem != null ? (
      props.dataOfItem.map((item, i) => (
        <ListGroup.Item action key={item.id} as="li" onClick={() => props.handleItemClick(item)} href={`#${item.id}`} variant ="info">
          <Container>
            <Row>
              <Col>{i + 1}</Col>
              <Col>
                <Figure width="250px" height="300px">
                  <Figure.Image src={item.img}  />
                </Figure>
              </Col>
              <Col>{item.name}</Col>
              <Col>{item.price}</Col>
              <Col>{item.role}</Col>
              <Col>{item.difficulty}</Col>
            </Row>
          </Container>
        </ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item></ListGroup.Item>
    );
  return (
    <ListGroup>
      <ListGroup.Item >
        <Container>
          <Row>
            <Col>ID</Col>
            <Col>Image</Col>
            <Col>Name</Col>
            <Col>Price</Col>
            <Col>Role</Col>
            <Col>Difficulty</Col>  
          </Row>
        </Container>
      </ListGroup.Item>
      {list}
    </ListGroup>
  );
}

export default RenderHome;
