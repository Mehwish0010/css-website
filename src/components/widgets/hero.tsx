import React from 'react';
import styles from './FeatureSection.module.css';
import Image from 'next/image';
import IceCreamImage from "@/components/assets/images/heroice.webp";

const FeatureSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageDiv}>
        <Image src={IceCreamImage} alt="Delicious Ice Cream" layout="responsive" width={500} height={500} className={styles.image} />
      </div>
      <div className={styles.textDiv}>
        <h2 className={styles.title}> Welcome to Cream Express</h2>
        <p className={styles.description}>
          At Cream Express, we believe every scoop brings happiness. Our ice cream is crafted with the finest ingredients for the perfect blend of taste and texture. Explore our unique flavors and treat yourself to a delicious experience!
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default FeatureSection;

