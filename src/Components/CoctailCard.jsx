import React from 'react';
import "./CoctailCard";
const CoctailCard = ({drink}) => {
    return (
        <>
        <div className='Card'>
            <img src={drink.strDrinkThumb} alt="Cocktail Image" />
          <h2>{drink.strDrink}</h2>
          <p>{drink.strInstructions}</p>

        </div>
        </>
    );
};

export default CoctailCard;