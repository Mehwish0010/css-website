import React from 'react';
import styles from './Contact.module.css';

const branches = [
  {
    name: "Cream Express - Karachi",
    address: "Main BurnsRoad Karachi",
    phone: "021 456-7890",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.091805174361!2d-122.42016848450184!3d37.77928037975716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581a3a7ed63d1%3A0xf8c08b9aefcd16fd!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094123!5e0!3m2!1sen!2sus!4v1616520130405!5m2!1sen!2sus"
  },
  {
    name: "Cream Express - Karachi",
    address: "FiveStar Food Street",
    phone: "021 654-3210",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.091805174361!2d-122.41916858450184!3d37.77988037975716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581a3a7ed63d1%3A0xf8c08b9aefcd16fd!2s456%20Elm%20Avenue%2C%20San%20Francisco%2C%20CA%2094123!5e0!3m2!1sen!2sus!4v1616520130405!5m2!1sen!2sus"
  }
];

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      
      {/* Contact Information */}
      <div className={styles.contactInfo}>
        <h2>Lets Connect to Cream Express </h2>
        <p>Have questions or want to learn more about our flavors? Reach out to us!</p>
        <p>Email: info@creamexpress.com</p>
        <p>Phone: (021) 123-4567</p>
      </div>

    
      <div className={styles.branches}>
        {branches.map((branch, index) => (
          <div key={index} className={styles.branch}>
            <h2 className={styles.branchName}>{branch.name}</h2>
            <p className={styles.address}>{branch.address}</p>
            <p className={styles.phone}>Phone: {branch.phone}</p>
            <div className={styles.mapContainer}>
              <iframe
                src={branch.mapLink}
                className={styles.map}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
