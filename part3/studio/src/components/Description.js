import styles from './Description.module.css; 
import React from 'react'; 

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

class RecipeDescription extends React.Component {
    render() {
        return(
            <div>
                <div>
                <h1>Sausage and Sauerkraut</h1>
                <p>This sauerkraut and sausage recipe is from a sweet old German lady I used to attend church with. Allow for plenty of time to prepare and cook this dish. It is definitely worth the time and effort! Serve with hot German potato salad and red cabbage.</p>
            </div>
            <RecipeAuthor/>
            </div> 
        )
    }
}; 

export default RecipeDescription; 

