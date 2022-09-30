import './App.css';

import Axios from 'axios';
import { useState } from 'react';
import RecipeTile from './RecipeTile.js';

function App() {

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, setHealthLabels] = useState("vegan")

  const YOUR_APP_ID = "d370134a";
  const YOUR_APP_KEY = "c984840147edfa5d27aef4d405c25f94";	

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipe () {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  }

  const onsubmit = (e) => {
    e.preventDefault();
    getRecipe();
  }

  return (
    <div className="app">
        
        <h1 className='heading'>Recipedia</h1>
      <h1 className='content_name'>Food Gallery 🍔</h1>
      <form className='food_search' onSubmit={onsubmit}>
        <input 
        type= 'text' 
        className='input_form'
        placeholder='enter your ingredient'
        value={query}
        onChange = {(e) => setQuery(e.target.value)} 
          />
          <input 
          type='submit'
          className='app_submit' 
          value = 'search' 
          />
          <select className='app__healthLabels'>
            <option className='label_name' onClick={() => setHealthLabels("vegan")}>Filter</option>
            <option className='label_name' onClick={() => setHealthLabels("vegetarian")}>vegetarian</option>
            <option className='label_name' onClick={() => setHealthLabels("dairy-free")}>dairy-free</option>
            <option className='label_name' onClick={() => setHealthLabels("glutan-free")}>glutan-free</option>
            <option className='label_name' onClick={() => setHealthLabels("wheat-free")}>wheat-free</option>
            <option className='label_name' onClick={() => setHealthLabels("low-sugar")}>low-sugar</option>
            <option className='label_name' onClick={() => setHealthLabels("egg-free")}>egg-free</option>
            <option className='label_name' onClick={() => setHealthLabels("peanut-free")}>peanut-free</option>
            <option className='label_name' onClick={() => setHealthLabels("tree-nut-free")}>tree-nut-free</option>
            <option className='label_name' onClick={() => setHealthLabels("soy-free")}>soy-free</option>
            <option className='label_name' onClick={() => setHealthLabels("fish-free")}>fish-free</option>
            <option className='label_name' onClick={() => setHealthLabels("shelfish-free")}>shelfish-free</option>
          </select>
      </form>
      <div className='app__recipes'>
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
           
        })}
      </div>
    </div>
  );
}

export default App;
