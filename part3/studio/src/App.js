import './App.css';
import BoardAssignment from './components/BoardAssignment';
import StatusChange from './components/StatusChange';
import RecipeDisplay from './components/Recipe'; 
import RecipeDescription from './components/Description';
import RecipeAuthor from './components/Description'; 

function App() {
  return (
    <div className="App">
      <div>
        <RecipeDescription /> 
        <RecipeAuthor />
        <RecipeDisplay /> 
      </div>
      <div className="recipePhotoBlock">
        <BoardAssignment />
        <StatusChange />
      </div>
    </div>
  );
}

export default App;
