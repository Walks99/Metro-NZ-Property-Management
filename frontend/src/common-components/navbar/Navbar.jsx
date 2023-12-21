import React, { useState } from 'react';
import Styles from "./Navbar.module.scss"
import { NavLink } from 'react-router-dom';
import CompanyLogo from "../../assets/company-logos/Company-logo-edited.jpg";

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
      <img src={CompanyLogo} alt='Company logo' style={{width: "240px", height: "auto"}}/>
      <navbarlinks className={Styles.navLinkContainer}>
        <NavLink to="/services"><span>Services</span></NavLink>
        <NavLink to="/about"><span>About</span></NavLink>
        <NavLink to="/news"><span>News</span></NavLink>
        <NavLink to="/contact"><span>Contact</span></NavLink>

        {isDropdownOpen ? (
          <>
            <NavLink to="/tenants">Tenants</NavLink>
            <NavLink to="/propertylisting">Property Listings</NavLink>
            <NavLink to="/we-are-hiring">We're Hiring</NavLink>
            <NavLink to="/dispute-process">Dispute Process</NavLink>
            <NavLink to="/">Home</NavLink>

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
