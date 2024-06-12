import React from "react";
import styles from "./style.module.css";
import { brands, companyLinks, quickLinks, saleHours, socialLinks, vehicleTypes } from "./data";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSection}>
        <h4>Company</h4>
        <ul>
          {companyLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h4>Quick Links</h4>
        <ul>
          {quickLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h4>Our Brands</h4>
        <ul>
          {brands.map((brand, index) => (
            <li key={index}>{brand}</li>
          ))}
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h4>Vehicles Type</h4>
        <ul>
          {vehicleTypes.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h4>Sale Hours</h4>
        <ul>
          {saleHours.map((hours, index) => (
            <li key={index}>{hours}</li>
          ))}
        </ul>
        <h4>Connect With Us</h4>
        <div className={styles.socialLinks}>
          {socialLinks.map(({ platform, icon }, index) => (
            <a key={index} href={`#${platform}`} className={styles[icon]}></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
