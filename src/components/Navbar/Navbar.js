import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../../Assets/NEWESA.png";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <div className="container-fluid">
    <div className="navbar-brand"><img src={logo} className="logo" alt="NUESA lOGO" /></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          <Link to="/" className="nav-link">Home <span class="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item dropdown">
          <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            About Us
          </div>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/Overview" className="dropdown-item" >Overview</Link>
            <div className="dropdown-divider"></div>
            <Link to="/Constitution" className="dropdown-item">The Constitution</Link>
          </div>
        </li>
        <li className="nav-item">
          <Link to="/News" className="nav-link">News</Link>
        </li>
        <li className="nav-item dropdown">
          <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Alumni
          </div>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/Alumni Registration" className="dropdown-item" >Become a Member</Link>
          </div>
        </li>

        <li className="nav-item dropdown">
          <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Payments
          </div>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/Dues-payment" className="dropdown-item" >Membership Dues</Link>
            <div className="dropdown-divider"></div>
            <Link to="/Make-a-donation" className="dropdown-item">Voluntary Donation</Link>
          </div>
        </li>
        <li className="nav-item">
        <Link to="/Contact" className="nav-link">Contact</Link>
        </li>
      </ul>
      
      <Link to="/Login" className="login-Nav">Login</Link>
      <Link to="/Signup" type="button" className="btn-Signup">Signup</Link>
    </div>
    </div>
  </nav>


  )
}

export default Navbar