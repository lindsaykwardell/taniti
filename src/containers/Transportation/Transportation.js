import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Button } from "reactstrap";
import placeholder from "../../placeholder.jpg";

export default class Transportation extends Component {
  state = {
    openTab: null
  };

  toggleOpenTabHandler = openTab => {
    this.setState({ openTab });
  };

  render() {
    const Air = (
      <div>
        <h3>Air</h3>
        <p>
          Almost all visitors arrive to Taniti by air. Taniti is served by a
          small airport that can accommodate small jets and propeller planes.
          Taniti is in the process of expanding the airport so larger jets will
          be able to land on the island within the next few years.
        </p>
      </div>
    );

    const Cruise = (
      <div>
        <h3>Cruise</h3>
        <p>
          While almost all visitors arrive to Taniti by air, some arrive on a
          small cruise ship that docks in Yellow Leaf Bay for one night per
          week.
        </p>
      </div>
    );

    const Ground = (
      <div>
        <h3>Local/Ground</h3>
        <p>
          Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every
          day. Private buses serve the rest of the island. Taxis are available
          in Taniti City, and rental cars can be rented from a local rental
          agency near the airport. Bikes and helmets are available to rent from
          several vendors (helmets are required by law). Taniti City is fairly
          flat and very walkable. Many tourists stay in the area surrounding
          Merriton Landing: this area is easy to explore on foot.
        </p>
      </div>
    );

    return (
      <div>
        <Jumbotron
          style={{ height: "400px", background: `url(${placeholder})` }}
        />
        <Container>
          <h1>Transportation</h1>
          <h5>Select an option to see details</h5>
          <Row>
            <Col>
              <Button
                color="info"
                style={{ width: "100%", height: "150px" }}
                onClick={() => this.toggleOpenTabHandler(Air)}
              >
                <h2>Air</h2>
              </Button>
            </Col>
            <Col>
              <Button
                color="primary"
                style={{ width: "100%", height: "150px" }}
                onClick={() => this.toggleOpenTabHandler(Cruise)}
              >
                <h2>Cruise</h2>
              </Button>
            </Col>
            <Col>
              <Button
                color="secondary"
                style={{ width: "100%", height: "150px" }}
                onClick={() => this.toggleOpenTabHandler(Ground)}
              >
                <h2>Local/Ground</h2>
              </Button>
            </Col>
          </Row>
          <div className="mt-3">{this.state.openTab}</div>
        </Container>
      </div>
    );
  }
}
