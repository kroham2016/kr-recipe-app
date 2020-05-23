import React from 'react'
import './Home.css';

export default function Home() {
    return (
        <div className="jumbotron jumbotron-fluid" style={{"height":"90vh"}}>
            <div className="row">
                <h1 className='display-4 px-5'>What's cookin?</h1>
            </div>
            <div className="row">
                <div className="col-6">
                    <p className="lead px-5">Search any keyword to find delicious recipes. Note: the API allows 5 searches/minute max.</p>
                </div>
            </div>
        </div>
    )
}
