import React from 'react';
import Styles from "./Navbar.module.scss"
import { NavLink } from 'react-router-dom';
import CompanyLogo from "../../assets/Company-logo.png";
import BurgerIcon from "../../assets/icons/Burger.png"

function Navbar() {
  return (
    <div className={Styles.navBarContainer}>
      <img src={CompanyLogo} alt='Company logo'/>
      <navbarlinks className={Styles.navLinkContainer}>
        <NavLink to=""><span>Services</span></NavLink>
        <NavLink to=""><span>About</span></NavLink>
        <NavLink to=""><span>News</span></NavLink>
        <NavLink to=""><span>Contact</span></NavLink>
        <img src={BurgerIcon} alt='Burger icon'></img>
      </navbarlinks>
    </div>
  )
}

export default Navbar