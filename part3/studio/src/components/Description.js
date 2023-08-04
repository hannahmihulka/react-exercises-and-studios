import styles from './Description.module.css; 


RecipeAuthor = () => {

    const authorLink = https://www.allrecipes.com/recipe/216081/sausage-and-sauerkraut/; 
    const authorName = 'DOEMARK';
    const authotPhoto = https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80;
    
    return (
            <div className={styles.recipeAuthorBlock}>
              <img src={authorPhoto} alt="Reasonable alt text" className={styles.imageUpdates} />
              <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name</a>
              </div>
            </div>
          )
        }; 
