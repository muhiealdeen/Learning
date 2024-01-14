import Link from 'next/link';
import styles from './Logo.module.css';

import { Montserrat } from 'next/font/google';
const logoFont = Montserrat({
  subsets: ['latin'],
  weight: ['900'],
});

export default function Logo() {
  return (
    <div>
      <Link href="/" className={`${styles.logo} ${logoFont.className}`}>
        Dish Discovery
      </Link>
    </div>
  );
}
