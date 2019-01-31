import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import placeholder from "../../placeholder.jpg";
import faker from "faker";

export default class Transportation extends Component {
  render() {
    let count = 11;
    const locList = [];

    for (let index = 0; index < count; index++) {
      locList.push({
        name: `${faker.name.lastName()} ${faker.commerce.productAdjective()}`,
        price: Math.floor(Math.random() * 3 + 1),
        address: faker.address.streetAddress(),
        description: faker.lorem.paragraph()
      });
    }

    const restaurants = (
      <ul style={{ listStyle: "none" }}>
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
              Price: {"$".repeat(loc.price)}
              <br />
              Description: {loc.description}
            </p>
          </li>
        ))}
      </ul>
    );

    return <div>
        <Jumbotron style={{ height: "400px", background: `url(${placeholder})` }} />
        <Container>
          <h1>Food</h1>
          <p>
            Taniti currently has 11 restaurants: five serve mostly local
            fish and rice, three serve American-style meals, and two serve
            Pan-Asian cuisine.
          </p>
          <p>
            Taniti has two supermarkets, two smaller grocery stores, and one
            convenience store that is open 24 hours a day.
          </p>
          <div className="mt-3">{restaurants}</div>
        </Container>
      </div>;
  }
}
