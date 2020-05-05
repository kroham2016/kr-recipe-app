import React from 'react'

export default function ShareButtons(props) {

    const myTweet = encodeURI(`Yum! I'm making ${props.title} tonight. I found the recipe on KR Recipe Finder!`);
    const myRecipe = {name: props.title, ingredients: props.ingredients};

    const addToFavorites = (favorite) => {
        console.log(favorite);
    }
    return (
        <div className="btn-group d-flex justify-content-around">
            <button onClick={addToFavorites(myRecipe)}className='btn btn-danger'>
                <i className='far fa-heart' style={{"color":"white"}}></i>
            </button>
            <a role="button" className='btn btn-primary' href={`https://twitter.com/intent/tweet?text=${myTweet}`}target='_blank' rel="noopener noreferrer">
                <i className="fab fa-twitter" style={{"color":"white"}}></i>
            </a>
            <a role="button" className='btn btn-dark'>
                <i className="far fa-envelope" style={{"color":"white"}}></i>
            </a>
        </div>
    )
}