import React from 'react'
import './Home.css';

export default function Home() {
    return (
        <div className="jumbotron jumbotron-fluid" style={{"height":"90vh"}}>
            <div className="row">
                <h1 className='display-4 px-5'>Whats cooking, good lookin?</h1>
            </div>
            <div className="row">
                <div className="col-6">
                    <p className="lead px-5">Search any keyword in the box above to find delicious recipes to make. Please note the API allows a maximum of 5 searches each minute.</p>
                </div>
            </div>
        </div>
    )
}
