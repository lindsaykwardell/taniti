import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter
} from "reactstrap";
import placeholder from "../../placeholder.jpg";

const activities = [
  "Beaches",
  "Rainforest",
  "Volcano",
  "History Museum",
  "Fishing",
  "Snorkeling",
  "Zip-Line",
  "Pubs",
  "Dancing",
  "Movie",
  "Helicopter",
  "Arcade",
  "Art Galleries",
  "Bowling",
  "Golf",
  "Tours",
  "Taniti City"
];

export default class Transportation extends Component {
  state = {
    search: "",
    toShow: "",
    modal: false
  };

  toggleModalHandler = toShow => {
    if (toShow) {
      this.setState({ toShow, modal: !this.state.modal });
    } else {
      this.setState({ modal: !this.state.modal });
    }
  };

  inputSearchHandler = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div>
        <Jumbotron
          style={{ height: "400px", background: `url(${placeholder})` }}
        />
        <Container>
          <h1>To Do</h1>
          <h5>Select a category to learn more</h5>
          <Input
            type="text"
            placeholder="What are you interested in?"
            onChange={this.inputSearchHandler}
          />
          <Row>
            {activities.map((activity, index) => {
              if (
                activity.toUpperCase().includes(this.state.search.toUpperCase())
              ) {
                return (
                  <Col key={index} xs="3" className="my-2">
                    <Button
                      outline
                      color="secondary"
                      style={{ width: "100%", height: "175px" }}
                      onClick={() => this.toggleModalHandler(activity)}
                    >
                      <h3>{activity}</h3>
                    </Button>
                  </Col>
                );
              } else return false;
            })}
          </Row>
        </Container>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModalHandler}
          size="lg"
        >
          <Jumbotron
            style={{
              height: "250px",
              background: `url(${placeholder})`,
              backgroundSize: "contain"
            }}
          />
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleModalHandler}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
