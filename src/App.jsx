import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CoctailCard from "./Components/CoctailCard";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((res) => setDrinks(res.data.drinks));
  }, [name]);
  console.log(drinks);
  const lookupdrink = (e) => {
    e.preventDefault();
    console.log(e);
    setName(e.target[0].value);
  };

  return (
    <div className="App">
      <form className="SearchBar" onSubmit={(e) => lookupdrink(e)}>
        <label htmlFor="Cocktail">Cocktail:</label>
        <input type="text" id="Cocktail" placeholder="Type the Cokctail's Name" />
        <button type="submit">SEARCH</button>
      </form>
      {drinks? (
        <div className="CoctailCard">
          {drinks?.map((drink, index) => (
            <CoctailCard drink={drink} key={index} />
          ))}
        </div>
      ) : (
        <div className="Toast">
          <h1>No Results Found</h1>
          <i className="fa-solid fa-triangle-exclamation fa-2xl	"></i>
        </div>
      )}
    </div>
  );
}

export default App;
