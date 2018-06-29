import React,{Component,props} from 'react';
import {Link} from 'react-router-dom';
import {Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink} from 'reactstrap';
require('/home/shri/tribble-media/front/images/tribble-media-wit.svg');
import Img from 'react-image';
import {Helmet} from 'react-helmet';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.toggle=this.toggle.bind(this);
    this.state={
      isOpen:false
    };
  }

  toggle(){
    this.setState({
      isOpen:!this.state.isOpen
    });
  }

  render(){
    return(
      <div>

        <Navbar color="primary" light expand="md">

          <NavbarBrand className=" mr-auto">

              <img src="/templates/tribble-media-wit.svg" className="img-responsive " width="265px" height="75px" />

        </NavbarBrand>

        <NavbarToggler onClick={this.toggle} >
        <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen}  navbar>
          <Nav className="ml-auto " navbar>
          <NavItem className="mr-md-5 ">
              <Link to='/'>
                <span className="text-white">Services</span>
              </Link></NavItem>
            <NavItem className="mr-md-5 ">
              <Link to='/register'>
              <span className="text-white">Portfolio</span>
              </Link>
            </NavItem >
            <NavItem className="mr-md-5 ">
              <Link to="#">
              <span className="text-white">About us</span>
              </Link>
            </NavItem>
            <NavItem className="mr-md-5 ">
              <Link to="#">
              <span className="text-white">Vacancies</span>
              </Link>
            </NavItem>
            <NavItem className="mr-md-5 ">
              <Link to="#">
              <span className="text-white">Contact</span>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header
