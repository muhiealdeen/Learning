import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Recipes() {
  return (
    <div className={styles.container}>
      <Link href="/id" className={styles.recipes}>
        <div className={styles.container}>
          <Image
            // key={media.id}
            // src={`/images/icons/${media.name}.png`}
            src={
              'https://render.fineartamerica.com/images/rendered/search/print/6.5/8/break/images/artworkimages/medium/1/louisiana-saturday-night-dianne-parks.jpg'
            }
            width={350}
            height={250}
            className={styles.icon}
            // alt={`Dish Discoverry ${media.name} link`}
            alt="recipe image"
          />
          <div className={styles.content}>
            <h1 className={styles.title}>recipe name</h1>
            <p>recipe ingredient</p>
          </div>
        </div>
      </Link>
      <Link href="/id" className={styles.recipes}>
        <div className={styles.container}>
          <Image
            // key={media.id}
            // src={`/images/icons/${media.name}.png`}
            src={
              'https://render.fineartamerica.com/images/rendered/search/print/6.5/8/break/images/artworkimages/medium/1/louisiana-saturday-night-dianne-parks.jpg'
            }
            width={350}
            height={250}
            className={styles.icon}
            // alt={`Dish Discoverry ${media.name} link`}
            alt="recipe image"
          />
          <div className={styles.content}>
            <h1 className={styles.title}>recipe name</h1>
            <p>recipe ingredient</p>
          </div>
        </div>
      </Link>
      <Link href="/id" className={styles.recipes}>
        <div className={styles.container}>
          <Image
            // key={media.id}
            // src={`/images/icons/${media.name}.png`}
            src={
              'https://render.fineartamerica.com/images/rendered/search/print/6.5/8/break/images/artworkimages/medium/1/louisiana-saturday-night-dianne-parks.jpg'
            }
            width={350}
            height={250}
            className={styles.icon}
            // alt={`Dish Discoverry ${media.name} link`}
            alt="recipe image"
          />
          <div className={styles.content}>
            <h1 className={styles.title}>recipe name</h1>
            <p>recipe ingredient</p>
          </div>
        </div>
      </Link>
      <Link href="/id" className={styles.recipes}>
        <div className={styles.container}>
          <Image
            // key={media.id}
            // src={`/images/icons/${media.name}.png`}
            src={
              'https://render.fineartamerica.com/images/rendered/search/print/6.5/8/break/images/artworkimages/medium/1/louisiana-saturday-night-dianne-parks.jpg'
            }
            width={350}
            height={250}
            className={styles.icon}
            // alt={`Dish Discoverry ${media.name} link`}
            alt="recipe image"
          />
          <div className={styles.content}>
            <h1 className={styles.title}>recipe name</h1>
            <p>recipe ingredient</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
