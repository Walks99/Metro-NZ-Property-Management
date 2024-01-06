import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Styles from "./Footer.module.scss";
import InstagramIcon from "../../assets/icons/Instagram.png";
import TwitterIcon from "../../assets/icons/Twitter.png";
import FacebookIcon from "../../assets/icons/Facebook.png";
import LinkedinIcon from "../../assets/icons/Linkedin.png";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={Styles.footerContainer}
      style={{ height: location.pathname === "/" ? "220px" : null }}
    >
      {location.pathname !== "/" && (
        <topfootersection className={Styles.topFooterSection}>
          <button
            className={Styles.BackToPreviousPageButton}
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </topfootersection>
      )}
      <middlefootersection
        className={Styles.middleFooterContainer}
        style={{ height: location.pathname === "/" ? "80%" : null }}
      >
        {/* --------------------------------   TITLE OF FOOTER   ------------------------------------- */}
        <footertitle className={Styles.footerTitleContainer}>
          <h2>Quick Links</h2>
          <h2>Follow Us</h2>
        </footertitle>
        {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
        {/* -----------------------   QUICKS LINKS AND ICONS CONTAINER   ----------------------------- */}
        <quicklinksandicons className={Styles.quickLinksAndIconsContainer}>
          <quicklinks className={Styles.quickLinks}>
            <NavLink to="/">
              <span>Home</span>
            </NavLink>
            <NavLink to="/tenants">
              <span>Tenants</span>
            </NavLink>
            <NavLink to="/about">
              <span>About</span>
            </NavLink>
            <NavLink to="/propertyListing">
              <span>Property Listings</span>
            </NavLink>
            <NavLink to="/we-are-hiring">
              <span>We're Hiring</span>
            </NavLink>
            <NavLink to="/news">
              <span>News</span>
            </NavLink>
            <NavLink to="/services">
              <span>Services</span>
            </NavLink>
            <NavLink to="/contact">
              <span>Contact</span>
            </NavLink>
            <NavLink to="/dispute-process">
              <span>Dispute Process</span>
            </NavLink>
          </quicklinks>
          <icons className={Styles.icons}>
            <a
              href="https://www.instagram.com/metronzproperty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="Instagram icon" />
            </a>
            <a
              href="https://twitter.com/MetroNz_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TwitterIcon} alt="X (formally Twitter) icon" />
            </a>
            <a
              href="https://www.facebook.com/MetroNZ/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="Facebook icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/metro-nz-property-management-ltd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinIcon} alt="LinkedIn icon" />
            </a>
          </icons>
        </quicklinksandicons>
        {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
      </middlefootersection>
      <bottomfootersection
        className={Styles.bottomFooterContainer}
        style={{ height: location.pathname === "/" ? "20%" : null }}
      >
        {/* -------------------------------   COPY RIGHT NOTICE   ------------------------------------ */}
        <copyrightnotice className={Styles.copyRightNoticeContainer}>
          <p>@Metro NZ Property Management</p>
        </copyrightnotice>
        {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
      </bottomfootersection>
    </div>
  );
}

export default Footer;
