import React from "react";
import { Container } from "react-bootstrap";
import "../Uppernav/Uppernav.css";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

export default function UpperNav() {
  return (
<div className="tn-uppernav">
  <Container className="tn-uppernav-wrapper">

    <img 
      src={logo} 
      alt="logo" 
      className="tn-nav-logo"
    />

    <div className="tn-search-box">
      <input 
        type="text" 
        placeholder="البحث عن المنتج" 
      />
      <i className="fa fa-search tn-search-icon"></i>
    </div>

    <div className="tn-left-icons">

      <span className="tn-lang-btn">
        EN <i className="fa fa-exchange"></i>
      </span>

      <i className="fa fa-bell tn-nav-icon"></i>

      <Link to={"/profileaccount"}>
        <i className="fa fa-user tn-nav-icon"></i>
      </Link>

    </div>

  </Container>
</div>

  );
}
