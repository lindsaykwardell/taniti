import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="#" onClick={() => this.props.link("Home")}>
            Visit Taniti!
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#" onClick={() => this.props.link("Home")}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={() => this.props.link("ToDo")}>To Do</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={() => this.props.link("Transportation")}>Transportation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={() => this.props.link("Lodging")}>Lodging</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={() => this.props.link("Food")}>Food</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={() => this.props.link("About")}>About Taniti</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
