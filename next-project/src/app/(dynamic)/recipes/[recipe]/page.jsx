import Image from 'next/image';
import styles from './page.module.css';

async function getData(recipe) {
  const res = await fetch(`https://dummyjson.com/recipes/${recipe}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function Recipe({ params }) {
  // console.log(params.recipe);
  const data = await getData(params.recipe);
  console.log(data.name);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <dev className={styles.info}>
          <h1 className={styles.title}>recipe name</h1>
          <p className={styles.mealType}>Meal Type : XXXXXXXXX</p>
        </dev>
        <div className={styles.imageContainer}>
          <Image
            src={
              'https://render.fineartamerica.com/images/rendered/search/print/6.5/8/break/images/artworkimages/medium/1/louisiana-saturday-night-dianne-parks.jpg'
            }
            // width={350}
            // height={250}
            className={styles.image}
            // alt={`Dish Discoverry ${media.name} link`}
            alt="recipe image"
            fill={true}
          />
          <span className={styles.author}>Zezo</span>
        </div>
      </header>

      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          numquam dolore eos facere. Aliquam quod distinctio ex deserunt dicta
          quos repellat eum, assumenda a ipsa sit nesciunt illo qui itaque
          officiis pariatur veritatis eligendi sapiente reprehenderit dolorum ab
          quaerat perspiciatis non. Accusamus distinctio tempora deserunt.
          Molestiae quas nam error, eos ex est quidem labore cumque explicabo,
          reiciendis sequi eius impedit dicta totam reprehenderit culpa ratione?
          Nam quasi eaque est molestias, tempore aperiam qui cumque, fugiat quia
          consectetur amet aut dicta voluptatem repellat sint sunt incidunt
          aliquam temporibus voluptatum ut numquam similique exercitationem?
          Corporis exercitationem excepturi, error laboriosam corrupti
          provident?
        </p>
      </div>
    </div>
  );
}
