import Image from 'next/image';
import styles from './page.module.css';

async function getData(recipe) {
  const res = await fetch(`https://dummyjson.com/recipes/${recipe}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  // read route params
  const id = params.id;

  // fetch data
  const recipe = await getData(params.recipe);

  return {
    title: recipe.name,
    description: recipe.cuisine,
  };
}

export default async function Recipe({ params }) {
  // console.log(params.recipe);
  const recipe = await getData(params.recipe);
  console.log(recipe.name);

  return (
    <div className={styles.recipeContainer}>
      <header className={styles.recipeHeader}>
        <div className={styles.info}>
          <h1 className={styles.title}>{recipe.name}</h1>
          <p className={styles.mealType}>Meal Type: {recipe.mealType}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={recipe.image}
            className={styles.image}
            alt={`Image of ${recipe.name}`}
            fill={true}
          />
          <span className={styles.cuisine}>Cuisine: {recipe.cuisine}</span>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.innerContent}>
          <h2>Instructions</h2>
          <p className={styles.text}>{recipe.instructions}</p>
        </div>
        <div className={styles.innerContent}>
          <h2>Ingredients</h2>
          <p className={styles.text}>{recipe.ingredients}</p>
        </div>
      </div>
    </div>
  );
}
