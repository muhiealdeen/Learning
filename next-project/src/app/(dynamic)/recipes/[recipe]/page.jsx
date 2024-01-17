import Image from 'next/image';
import styles from './page.module.css';
export default function Recipe() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <dev className={styles.info}>
          <h1 className={styles.title}>recipe name</h1>
          <p className={styles.desc}>XXXXXXXXX</p>
        </dev>
        <div className={styles.imageContainer}>
          <Image
            src={
              'https://render.fineartamerica.com/images/rendered/search/print/6.5/8/break/images/artworkimages/medium/1/louisiana-saturday-night-dianne-parks.jpg'
            }
            width={350}
            height={250}
            className={styles.image}
            // alt={`Dish Discoverry ${media.name} link`}
            alt="recipe image"
            fill={false}
          />
        </div>
      </header>

      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          ullam corporis natus voluptas iure possimus doloremque itaque, earum
          amet voluptates maxime eius est distinctio animi at nemo veritatis ea
          consequuntur excepturi. Delectus quo, iure possimus non qui obcaecati
          temporibus dolor distinctio tempore dolorum eaque praesentium vero.
          Sint dicta deleniti ipsam!
        </p>
      </div>
    </div>
  );
}
