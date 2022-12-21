import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import noimg from "../assets/img/no-image.png"

const List = () => {
  return (
    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={noimg}
             style={{ width: "100%", margin: "auto" }}/>
            <Card.Body>
              <Card.Title>글</Card.Title>
              <Card.Text>
               글 작성하면 여기에 올라옴
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default List;
