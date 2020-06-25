import React from 'react'
import './Home.css';

export default function Home() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 className='display-4'>What's cookin?</h1>
                <p className="lead">Search any keyword to find delicious recipes. Note: the API allows 5 searches/minute max.</p>
            </div>

        </div>
    )
}
