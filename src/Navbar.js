import React from 'react'

export default function Navbar({getSearch,search,updateSearch}) {
    return (
        <nav className='navbar navbar-expand-lg navbar-light mb-5 color-nav' style={{backgroundColor: "#f3f3f3"}}>

            <a href="/" className="navbar-brand">
                <i className='fas fa-utensils'></i>
                <span className="px-2">Keon Roham's Recipe Lookup</span>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <form className='form-inline ml-auto d-inline w-75' onSubmit={getSearch}>
                    <div className="input-group">
                        <input className='form-control' type='search' placeholder='Search Recipe' value={search} onChange={updateSearch} />
                        <div className="input-group-append">
                            <button className='btn border border-left-0 btn-light' type='submit'><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </form>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/favorites" className="nav-link">Favorites</a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
