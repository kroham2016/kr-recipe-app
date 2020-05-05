import React, {useEffect,useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Navbar from './Navbar/Navbar';
import Recipes from './Recipes/Recipes';
import Contact from './Contact/Contact';
import Home from './Home/Home';

const App = () => {

    const APP_ID = 'ac09a00e';
    const APP_KEY = '2f10544080da3fb5ebacbeda331044d0';


    //sets the "recipes" state to an empty array. And gives it the function setRecipes to update the state.
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');


    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        setRecipes([]);
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    useEffect(() => {
        getRecipes();
    //eslint-disable-next-line
    }, [query]);
    
    return (
        <>
        <Router>
            <Navbar getSearch={getSearch} search={search} updateSearch={updateSearch} />
            <Switch>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/recipes'>
                    <Recipes recipes={recipes} />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
        </>
    );

}
export default App;