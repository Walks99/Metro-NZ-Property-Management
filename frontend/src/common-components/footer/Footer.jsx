import React from "react";
import Styles from "./Footer.module.scss";
import InstagramIcon from "../../assets/icons/Instagram.png";
import TwitterIcon from "../../assets/icons/Twitter.png";
import FacebookIcon from "../../assets/icons/Facebook.png";
import LinkedinIcon from "../../assets/icons/Linkedin.png";

function Footer() {
  return (
    <div className={Styles.footerContainer}>
        <topfootersection className={Styles.topFooterContainer}>
{/* --------------------------------   TITLE OF FOOTER   ------------------------------------- */}
          <footertitle className={Styles.footerTitleContainer}>
            <h2 className={Styles.quicklinks}>Quick Links</h2>
            <h2>Follow Us</h2>
          </footertitle>
{/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
{/* -----------------------   QUICKS LINKS AND ICONS CONTAINER   ----------------------------- */}
          <quicklinksandicons className={Styles.quickLinksAndIconsContainer}>
            <quicklinks>
              <p>Home</p>
              <p>Tenants</p>
              <p>About</p>
              <p>Property Listings</p>
              <p>We're Hiring</p>
              <p>News</p>
              <p>Services</p>
              <p>Contact</p>
              <p>Dispute Process</p>
            </quicklinks>
            <icons>
              <img src={InstagramIcon} alt="Heart Icon" />
              <img src={TwitterIcon} alt="Heart Icon" />
              <img src={FacebookIcon} alt="Heart Icon" />
              <img src={LinkedinIcon} alt="Heart Icon" />
            </icons>
          </quicklinksandicons>
{/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
      </topfootersection>
      
      <bottomfootersection className={Styles.bottomFooterContainer}>
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
