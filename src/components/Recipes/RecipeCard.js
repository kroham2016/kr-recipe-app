import React from 'react';
import ShareButtons from './ShareButtons';

const Recipe = ({title,image,ingredients}) => {

    return(
        <div className='card m-2'>
            <img className='card-img-top' height='150px' src={image} alt={title} />
            <div className='card-body'>
                <h6 className='card-title text-center'>{title}</h6>
                <ul className='card-text small' style={{listStyleType: "none"}}>
                    {ingredients.map((ingredient,i) => (
                    <li key={i}>{ingredient.text}</li>
                    ))}
                </ul>
            </div>
            <div className="card-footer">
                    <ShareButtons title={title} ingredients={ingredients}/>
            </div>
        </div>
    );
};

export default Recipe;