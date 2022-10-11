import React from "react";
import logo from '../../assets/images/logo.png';
import './styles.css'

const NavBarApp = () => {
  return (
    <header id="main-header">
      <div className="header-content">
        <img src={logo} alt="Star games logo" style={{ height:'35%'}}/>
      </div>
    </header>
  );
}

export default NavBarApp;