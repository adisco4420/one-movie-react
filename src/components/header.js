import React from 'react'
import { Link } from 'react-router-dom'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Jumbotron,

  Form,
  Input,
  Button,
  FormGroup

} from 'reactstrap';

export default class Header extends React.Component {
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
        <Navbar className="navbar-inverse" light expand="md">
          <NavbarBrand href="/"><img src="images/cinema.png" height="30" width="41"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="" navbar color="light" style={{color:'white'}}>
              <NavItem>
                <NavLink style={{color:'white'}} href="/">Home <i className="fa fa-home fa-lg"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:'white'}} href="/tv-series">Tv-Series <i className="fa fa-tv fa-lg"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:'white'}} href="/gallery">Gallery <span className="fa fa-list fa-lg"></span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:'white'}} href="/contactus">Contact Us  <span className="fa fa-address-card fa-lg"></span></NavLink>
              </NavItem> 
            </Nav>
            <Nav className="ml-auto">
            <NavItem >
                <Form>
                  <FormGroup>
                  <input type="search" className="" placeholder="Search"/>
                  <Button color="success" size="sm">Submit</Button>
                  </FormGroup>
                 
                  
                </Form>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <header className="jumbotron">
<div className="container">
    <div className="row row-header">
        <div className="col-xs-12 col-sm-6" >
            <h1>One Movie</h1>
            <p >One Movie Limited is a dynamic film exhibition company with a vision to be the no.1 cinema brand in Nigeria. We are currently implementing a strategic development plan to roll-out twenty five (25) cinemas over a six (6) year period that commenced in Decem
               The company management team has over 100 years combined cinema operation and development experience gained in England, Italy, USA, Spain and Nigeria. </p>
        </div>
        <div className="col-xs-12 col-sm-3 align-self-center">
         
        </div>
        <div className="col-xs-12 col-sm-3 align-self-center">
        <span className="navbar-text">
        <a href="#" className="btn nav-link btn-sm btn-secondary btn-block"
        role="button" data-toggle="modal" data-target="#reserves"
        >Reserve A Seat</a>
      </span>

        </div>
    </div>
</div>
</header>
  
      </div>
    );
  }
}



{/* <header className="jumbotron">
<div className="container">
    <div className="row row-header">
        <div className="col-xs-12 col-sm-6" >
            <h1>One Movie</h1>
            <p >One Movie Limited is a dynamic film exhibition company with a vision to be the no.1 cinema brand in Nigeria. We are currently implementing a strategic development plan to roll-out twenty five (25) cinemas over a six (6) year period that commenced in Decem
               The company management team has over 100 years combined cinema operation and development experience gained in England, Italy, USA, Spain and Nigeria. </p>
        </div>
        <div className="col-xs-12 col-sm-3 align-self-center">
         
        </div>
        <div className="col-xs-12 col-sm-3 align-self-center">
        <span className="navbar-text">
        <a href="#" className="btn nav-link btn-sm btn-secondary btn-block"
        role="button" data-toggle="modal" data-target="#reserves"
        >Reserve A Seat</a>
      </span>

        </div>
    </div>
</div>
</header> */}


{/* <div>
<nav className="navbar navbar-expand-lg navbar-inverse fixed-top">
<a className="navbar-brand" href="#"><img src="images/cinema.png" height="30" width="41"/></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

<span className="navbar-toggler-icon"></span>
<i className="fa fa-align-justify"></i>
</button>


<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav mr-auto">
<li className="nav-item active">
 <a className="nav-link" href="/">Home  <i className="fa fa-home fa-lg"></i> <span className="sr-only">(current)</span></a>
</li>
<li className="nav-item">
 <a className="nav-link" href="tv-series.html">Tv-Series <i className="fa fa-tv fa-lg"></i> </a>
</li>

          <li className="nav-item">
 <a className="nav-link" href="gallery.html">Gallery <span className="fa fa-list fa-lg"></span> </a>
</li>
<li className="nav-item">
   <a className="nav-link" href="/contactus">Contact Us  <span className="fa fa-address-card fa-lg"></span>  </a>
 </li>
 <span className="navbar-text">
<a  data-toggle="modal" data-target="#loginModal" href="#" >
<span className="fa fa-sign-in"></span> Login
</a>
</span>

</ul>

<form className="form-inline my-2 my-lg-0">
<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
<button className="btn btn-outline-success btn-sm" type="submit">Search</button>
</form>

</div>
</nav>

</div> */}