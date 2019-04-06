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
import { Link, animateScroll as scroll } from "react-scroll";



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
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="bg-dark sticky-top">
        <Navbar expand="md" className="navbar navbar-dark" style={this.props.appWidth}>
          <NavbarBrand href="/">JVG Law</NavbarBrand>
          <p className="text-center text-white m-auto pl-3">310-373-5944</p>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="ml-auto">

              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => { this.scrollToTop(); this.toggle(); }}
                  >
                    Home
                  </Link>  
                </NavLink>              
              </NavItem>

              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="intro"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={400}
                    onClick={this.toggle}
                  >
                    About
                  </Link>  
                </NavLink>              
              </NavItem>

              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={400}
                    onClick={this.toggle}
                  >
                    Legal Services
                  </Link>  
                </NavLink>              
              </NavItem>

              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="fees"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={400}
                    onClick={this.toggle}
                  >
                    Fees and Costs
                  </Link>  
                </NavLink>              
              </NavItem>

              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    onClick={this.toggle}
                  >
                    Contact
                  </Link>  
                </NavLink>              
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

