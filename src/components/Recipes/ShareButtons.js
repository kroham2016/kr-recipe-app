import React from 'react'

export default function ShareButtons(props) {

    const myTweet = encodeURI(`Yum! I'm making ${props.title} tonight. I found the recipe on KR Recipe Finder!`);
    const myRecipe = {name: props.title, ingredients: props.ingredients};
    const recipeName = encodeURI(props.title);

    return (
        <div className="btn-group d-flex justify-content-around">
            <button className='btn btn-danger'>
                <i className='far fa-heart' style={{"color":"white"}}></i>
            </button>
            <a role="button" className='btn btn-primary' href={`https://twitter.com/intent/tweet?text=${myTweet}`}target='_blank' rel="noopener noreferrer">
                <i className="fab fa-twitter" style={{"color":"white"}}></i>
            </a>
            <a role="button" className='btn btn-dark' href={`mailto:friend?subject=I'm%20making%20${recipeName}%20tonight!&body=I%20found%20this%20delicious%20recipe%20on%20KR%20Recipe%20Finder!`} target='_blank' rel='noopener noreferrer'>
                <i className="far fa-envelope" style={{"color":"white"}}></i>
            </a>
        </div>
    )
}