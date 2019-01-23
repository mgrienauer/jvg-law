import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';


export default class Topnav extends React.Component {
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
      <div className="bg-dark sticky-top">
        <Navbar expand="md" className="navbar navbar-dark" style={this.props.appWidth}>
          <NavbarBrand href="/">JVG Law</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Legal Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

