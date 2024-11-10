import React from 'react';
import styles from './NewFlavorsSection.module.css';
import Image from 'next/image';
import IceCreamImage from "@/components/assets/images/featureice.webp";

const NewFlavorsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageDiv}>
        <Image src={IceCreamImage} alt="New Flavors" layout="responsive" width={500} height={500} className={styles.image} />
      </div>
      <div className={styles.flavorsDiv}>
        <h2 className={styles.title}>Discover Our New Flavours</h2>
        <ul className={styles.flavorList}>
            <h2>Our Most Hot Selling Ice-creams</h2>
          <li>Caramel Crunch Delight</li>
          <li>Minty Mango Surprise</li>
          <li>Berry Berry Bliss</li>
          <li>Choco-Lava Swirl</li>
          <li>Peachy Almond Dream</li>
        </ul>
      </div>
    </div>
  );
};

export default NewFlavorsSection;
