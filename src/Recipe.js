import React from 'react';

const Recipe = ({title,calories,image,ingredients}) => {
return(
<div>
    <h1>{title}</h1>
    <p>Calories: {calories} </p>
    <img src={image} alt={title} />
    <ul className='ingredients-list'>
        {ingredients.map(ingredient => (
        <li>{ingredient.text}</li>
        ))}
    </ul>
</div>
);
};

export default Recipe;