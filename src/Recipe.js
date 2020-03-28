import React from 'react';

const Recipe = ({title,calories,image,ingredients}) => {
return(
<div className='card'>
    <h1>{title}</h1>
    <img src={image} alt={title} />
    <div className='recipe-box'>
    <p>Calories: {calories} </p>
    <ul className='ingredients-list'>
        {ingredients.map(ingredient => (
        <li>{ingredient.text}</li>
        ))}
    </ul>
    </div>
</div>
);
};

export default Recipe;