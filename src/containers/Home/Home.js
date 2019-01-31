import React from "react";
import { Jumbotron, Container, Card, CardImg, Row, Col } from "reactstrap";
import placeholder from "../../placeholder.jpg";

export default function Home() {
  return (
    <div>
      <Jumbotron
        style={{ height: "400px", background: `url(${placeholder})` }}
      />
      <Container>
        <Row style={{ width: "100%" }}>
          <Col>
            <Card>
              <CardImg src={placeholder} alt="Placeholder" />
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg src={placeholder} alt="Placeholder" />
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg src={placeholder} alt="Placeholder" />
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg src={placeholder} alt="Placeholder" />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
