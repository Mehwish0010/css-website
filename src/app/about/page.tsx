
    import React from 'react';
import styles from './About.module.css';
import Image from 'next/image';
import BannerImage from '@/components/assets/images/icebanner.jpeg';

const About = () => {
  return (
    <div className={styles.container}>
      {/* Banner Section */}
      <div className={styles.banner}>
        <Image src={BannerImage} alt="Ice Cream Banner" layout="responsive" width={1200} height={400} className={styles.bannerImage} />
      </div>
      
      {/* About Text Section */}
      <div className={styles.textSection}>
        <h1 className={styles.title}>About Cream Express</h1>
        <p className={styles.description}>
          At Cream Express, we bring joy with every scoop. Our journey started with a passion for creating delightful, memorable flavors that tantalize your taste buds and warm your heart. We use the finest ingredients to craft each unique ice cream flavor, ensuring quality, freshness, and deliciousness.
        </p>
        <p className={styles.description}>
          From classic favorites to innovative new flavors, our selection is designed to satisfy every ice cream lover. Our cozy shop is a place where families, friends, and ice cream enthusiasts can gather to indulge in a sweet escape. Come visit us and treat yourself to a little scoop of happiness!
        </p>
      </div>
    </div>
  );
};

export default About;

  