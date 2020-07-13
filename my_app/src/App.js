import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import logo from './logo.svg';
import './App.css';

function App() {
  const APP_ID = "b1aea078";
  const APP_KEY = "4cda95e2c87cd3a12dba5ad044f8a74f";
  
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe =>(
          <Recipe/>
      ))}
    </div>
  );
};

export default App;
