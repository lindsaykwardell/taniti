import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Button } from "reactstrap";
import placeholder from "../../placeholder.jpg";
import faker from "faker";

export default class Transportation extends Component {
  state = {
    openTab: null
  };

  toggleOpenTabHandler = type => {
    let price = "";
    let count = 0;
    const locList = [];

    switch (type) {
      case "Hostel":
        price = "$";
        count = 1;
        break;
      case "B&B":
        price = "$$";
        count = 7;
        break;
      case "Hotel":
        price = "$$$";
        count = 5;
        break;
      case "Resort":
        price = "$$$$";
        count = 1;
        break;
      default:
        price = "$";
        count = 0;
    }

    for (let index = 0; index < count; index++) {
      locList.push({
        name: faker.company.companyName(),
        price,
        address: faker.address.streetAddress(),
        description: faker.lorem.paragraph()
      });
    }

    const openTab = (
      <ul style={{listStyle: "none"}}>
        {locList.map((loc, index) => (
          <li key={index} style={{ clear: "both" }}>
            <img
              src={placeholder}
              alt="Placeholder"
              style={{ width: "125px" }}
              className="float-left mr-2 mt-2"
            />
            <p>
              Name: {loc.name}
              <br />
              Address: {loc.address}
              <br />
              Price: {loc.price}
              <br />
              Description: {loc.description}
            </p>
          </li>
        ))}
      </ul>
    );
    this.setState({ openTab });
  };

  render() {
    return (
      <div>
        <Jumbotron
          style={{ height: "400px", background: `url(${placeholder})` }}
        />
        <Container>
          <h1>Lodging</h1>
          <h5>Select an option to see details</h5>
          <Row>
            <Col>
              <Button
                color="secondary"
                style={{ width: "100%", height: "150px" }}
                onClick={() => this.toggleOpenTabHandler("Hostel")}
              >
                <h2>Hostel</h2>
              </Button>
            </Col>
            <Col>
              <Button
                color="success"
                style={{ width: "100%", height: "150px" }}
                onClick={() => this.toggleOpenTabHandler("B&B")}
              >
                <h2>Bed & Breakfast</h2>
              </Button>
            </Col>
            <Col>
              <Button
                color="primary"
                style={{ width: "100%", height: "150px" }}
                onClick={() => this.toggleOpenTabHandler("Hotel")}
              >
                <h2>Hotel</h2>
              </Button>
            </Col>
            <Col>
              <Button
                color="warning"
                style={{ width: "100%", height: "150px" }}
                onClick={() => this.toggleOpenTabHandler("Resort")}
              >
                <h2>Resort</h2>
              </Button>
            </Col>
          </Row>
          <div className="mt-3">{this.state.openTab}</div>
          <small>All types of lodging on Taniti are strictly enforced</small>
        </Container>
      </div>
    );
  }
}
