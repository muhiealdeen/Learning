import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

async function getData() {
  const res = await fetch('https://dummyjson.com/recipes');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Recipes() {
  const data = await getData();
  const recipes = data.recipes;

  // console.log(racipes);
  return (
    <div className={styles.mainContainer}>
      {recipes.map((recipe) => (
        <Link href="/recipes/id" className={styles.recipes} key={recipe.id}>
          <div className={styles.imageContainer}>
            <Image
              // key={media.id}
              // src={`/images/icons/${media.name}.png`}
              src={recipe.image}
              width={350}
              height={250}
              className={styles.image}
              // alt={`Dish Discoverry ${media.name} link`}
              alt="recipe image"
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              <span>recipe name: </span> {recipe.name}
            </h1>
            <p className={styles.text}>
              recipe ingredient: {recipe.ingredients}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
