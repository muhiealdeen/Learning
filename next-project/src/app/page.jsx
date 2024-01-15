import Image from 'next/image';
import styles from './page.module.css';
import breakfast from '/public/images/breakfast.svg';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>
          Navigate the art of cooking with Dish Discovery App.
        </h1>
        <p className={styles.description}>
          Embark on a flavorful journey with DishDiscovery, your passport to a
          world of culinary wonders. Explore a curated collection of exquisite
          dishes and global flavors, designed to inspire both seasoned chefs and
          aspiring cooks. Uncover the art of cooking with our diverse recipes,
          cooking tips, and cultural insights, turning every meal into a
          celebration of international cuisine.
        </p>
        <button className={styles.button}>recipes</button>
      </div>
      <div className={styles.col}>
        <Image src={breakfast} alt="breakfast" />
      </div>
    </div>
  );
}
