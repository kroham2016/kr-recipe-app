import React from 'react';

const Recipe = ({title,calories,image,ingredients}) => {

    return(
            <div className="col col-sm-4 my-container">
                <div className='card h-100 my-card'>
                    <img src={image} alt={title} />
                    <div className='card-body'>
                        <h6 className='card-title'>{title}</h6>
                        <ul className='card-text small' style={{listStyleType: "none",width:"100%"}}>
                            {ingredients.map((ingredient,i) => (
                            <li key={i}>{ingredient.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
    );
};
export default Recipe;