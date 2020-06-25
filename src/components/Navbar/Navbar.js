import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from './tomatoes.png';

export default function Navbar({getSearch,search,updateSearch}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">                 
                <img src={logo} width='250px' alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0  ml-auto d-inline w-50" onSubmit={getSearch}>
                    <div className="input-group">
                        <input className='form-control' type='search' placeholder='Search Recipe' value={search} onChange={updateSearch} />
                        <div className="input-group-append">
                            <button className='btn border border-left-0 btn-dark' type='submit'>
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/recipes" className="nav-link">Recipes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}

// <nav className='navbar navbar-expand-lg' >
// <a href="/" className="navbar-brand">
//     <img src={logo} width='250px' alt="" />
// </a>

// <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// <span class="navbar-toggler-icon"></span>
// </button>

// <div className="collapse navbar-collapse" id="navbarSupportedContent">

//     <form className='form-inline ml-auto d-inline w-75' onSubmit={getSearch}>
//         <div className="input-group">
//             <input className='form-control' type='search' placeholder='Search Recipe' value={search} onChange={updateSearch} />
//             <div className="input-group-append">
//                 <button className='btn border border-left-0 btn-dark' type='submit'>
//                     <i className="fa fa-search"></i>
//                 </button>
//             </div>
//         </div>
//     </form>

//     <ul className="navbar-nav ml-auto">
//         <li className="nav-item">
//             <Link to="/" className="nav-link">Home</Link>
//         </li>
//         <li className="nav-item">
//             <Link to="/recipes" className="nav-link">Recipes</Link>
//         </li>
//         <li className="nav-item">
//             <Link to="/contact" className="nav-link">Contact</Link>
//         </li>
//     </ul>
// </div>
// </nav>