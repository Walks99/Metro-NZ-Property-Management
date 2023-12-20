import React, { useState } from 'react';
import Styles from "./Navbar.module.scss"
import { NavLink } from 'react-router-dom';
import CompanyLogo from "../../assets/Company-logo.png";
import { Icon } from '@iconify/react';
import menuBurgerHorizontalLight from '@iconify/icons-iconamoon/menu-burger-horizontal-light';
import cross1 from '@iconify/icons-radix-icons/cross-1';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={Styles.navBarContainer}>
      <img src={CompanyLogo} alt='Company logo'/>
      <navbarlinks className={Styles.navLinkContainer}>
        <NavLink to=""><span>Services</span></NavLink>
        <NavLink to=""><span>About</span></NavLink>
        <NavLink to=""><span>News</span></NavLink>
        <NavLink to=""><span>Contact</span></NavLink>

        {isDropdownOpen ? (
          <>
            <NavLink to="/dropdown-item-2">Tenants</NavLink>
            <NavLink to="/dropdown-item-1">Property Listings</NavLink>
            <NavLink to="/dropdown-item-2">We're Hiring</NavLink>
            <NavLink to="/dropdown-item-1">Dispute Process</NavLink>
            <NavLink to="/dropdown-item-1">Home</NavLink>

             <Icon 
              icon={cross1} 
              className="md:hidden mr-8 w-7 text-2xl h-auto cursor-pointer"
              color="#616161" 
              style={{ fontSize: "50px", marginRight: "20px" }}
              onClick={toggleDropdown}
              />
          </>
        ) : (
             <Icon 
              icon={menuBurgerHorizontalLight} 
              className="md:hidden mr-8 w-7 text-2xl h-auto cursor-pointer"
              color="#616161" 
              style={{ fontSize: "50px", marginRight: "20px" }}
              onClick={toggleDropdown}
              />
        )}
      </navbarlinks>
    </div>
  );
}

export default Navbar;
