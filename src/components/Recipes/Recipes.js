import React from 'react'
import RecipeCard from './RecipeCard';
import './Recipes.css'

export default function Recipes({recipes}) {
    return (
        <div className="container-fluid d-flex justify-content-center" id="recipes">
            <div className="row justify-content-center">
                {recipes.map((recipe,i) => (
                    <RecipeCard 
                        title={recipe.recipe.label} 
                        calories={Math.round(recipe.recipe.calories)} 
                        image={recipe.recipe.image} 
                        ingredients={ recipe.recipe.ingredients} 
                        key={i}
                    />
                    ))
                }
            </div>
        </div>
    )
}
