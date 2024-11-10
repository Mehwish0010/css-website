"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Pic from "@/components/assets/images/icecreamlogo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Image src={Pic} alt="Logo" className={styles.logo} height={100} width={100} />
        <div className={styles.hamburger} onClick={toggleMenu}>
          &#9776; {/* Hamburger Icon */}
        </div>
        {isOpen && (
          <div className={styles.dropdownMenu}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/menu">Menu List</a>
            <a href="/contact">Contact</a>
          </div>
        )}
      </div>
      <div className={styles.right}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/menu">Menu List</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
