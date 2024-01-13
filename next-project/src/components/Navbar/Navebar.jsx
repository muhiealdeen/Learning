import Link from 'next/link';
import styles from './Navbar.module.css';
import { links } from './data';
import { Montserrat } from 'next/font/google';

const logoFont = Montserrat({
  subsets: ['latin'],
  weight: ['900'],
});

export default function Navebar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={`${styles.logo} ${logoFont.className}`}>
        Dish Discovery
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
