import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo and Tagline */}
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>Cream Express</h2>
          <p className={styles.tagline}>Serving smiles, one scoop at a time!</p>
        </div>
        
        {/* Links */}
        <div className={styles.linksSection}>
          <a href="/" className={styles.link}>Home</a>
          <a href="/about" className={styles.link}>About Us</a>
          <a href="/menu" className={styles.link}>Menu</a>
          <a href="/contact" className={styles.link}>Contact</a>
        </div>

        {/* Social Media */}
        <div className={styles.socialSection}>
          <p className={styles.socialText}>Follow us:</p>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Twitter</a>
        </div>

        {/* Contact Info */}
        <div className={styles.contactSection}>
          <p>Email: info@creamexpress.com</p>
          <p>Phone: (021) 123-4567</p>
          <p>Address: Street#32 Burns Road Karachi</p>
        </div>
      </div>
      <p className={styles.copyright}>© 2024 Cream Express. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
