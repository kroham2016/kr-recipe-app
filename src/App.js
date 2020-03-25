import React, {
useEffect,
useState
} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

const APP_ID = 'ac09a00e';
const APP_KEY = '2f10544080da3fb5ebacbeda331044d0';


//sets the "recipes" state to an empty array. And gives it the function setRecipes to update the state.
const [recipes, setRecipes] = useState([]);
const [search,setSearch] = useState('');
const [query,setQuery] = useState('chicken');


const getRecipes = async () => {
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
const data = await response.json();
console.log(data.hits);
setRecipes(data.hits);
}

const updateSearch = e => {
setSearch(e.target.value);
}

const getSearch = e => {
e.preventDefault();
setQuery(search);
setSearch('');
}

useEffect(() => {
getRecipes();
// eslint-disable-next-line
},[query]);

return (
<div className="App">
  <form className='search-form' Submit={getSearch}>
    <label>
      <input className='search-bar' type="text" value={search} onChange={updateSearch} />
    </label>
    <input className='search-button' type='submit' />
  </form>

  <div className='recipes'>
    {recipes.map(recipe=> (
    <Recipe title={recipe.recipe.label} calories={Math.round(recipe.recipe.calories)} image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients} />
    ))}
  </div>

</div> );
}
export default App;