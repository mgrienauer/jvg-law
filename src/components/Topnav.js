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
          <p className="text-center text-white m-auto">310-373-5944</p>
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
                    onClick={this.scrollToTop}
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
                    duration={400}
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

