import React from 'react';
import styles from './MenuCard.module.css';

const MenuCard = () => {
  const menuItems = [
    { name: "Caramel Crunch", flavor: "Caramel", price: "Rs.300" },
    { name: "Minty Delight", flavor: "Mint Chocolate Chip", price: "Rs.250" },
    { name: "Berry Blast", flavor: "Mixed Berry", price: "Rs.350" },
    { name: "Chocolate Heaven", flavor: "Rich Chocolate", price: "Rs.300" },
    { name: "Peach Paradise", flavor: "Peach & Cream", price: "Rs.200" },
    { name: "Pistachio Dream", flavor: "Pistachio", price: "Rs.245" },
    { name: "Strawberry Swirl", flavor: "Strawberry", price: "Rs.250" },
    { name: "Vanilla Classic", flavor: "Classic Vanilla", price: "Rs.400" },
    { name: "Mango Tango", flavor: "Mango Sorbet", price: "Rs.340" },
    { name: "Coconut Bliss", flavor: "Coconut", price: "Rs.330" },
    { name: "Rocky Road", flavor: "Chocolate & Nuts", price: "Rs420" },
    { name: "Banana Split", flavor: "Banana & Cream", price: "Rs.280" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Most Tempting IceCreams</h1>
      <div className={styles.grid}>
        {menuItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.itemName}>{item.name}</h2>
            <p className={styles.flavor}>{item.flavor}</p>
            <p className={styles.price}>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
