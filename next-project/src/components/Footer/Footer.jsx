import Image from 'next/image';
import styles from './Footer.module.css';
import { social_media } from './data';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <p>&copy; 2024 ZEZO. All rights reserved.</p>
      </div>
      <div className={styles.social}>
        {social_media.map((media) => (
          <Image
            key={media.id}
            src={`/images/icons/${media.name}.png`}
            width={20}
            height={20}
            className={styles.icon}
            alt="Dish Discoverry Facebook link"
          />
        ))}
      </div>
    </div>
  );
}
