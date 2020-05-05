import React from 'react'
import './Home.css';

export default function Home() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="row">
                <h1 className='display-4'>Whats cooking, good lookin?</h1>
            </div>
            <div className=" row col-6">
                    <p className="lead">Search any keyword in the box above to find delicious recipes. Note the API allows a maximum of 5 searches each minute.</p>
            </div>
        </div>
    )
}
