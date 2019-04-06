import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand text-primary">Oito</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link text-secondary">Rank</Link>
            <Link to="/pageRate" className="nav-item nav-link text-secondary">Avaliar</Link>
            
                {/* <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a> */}
            </div>
        </div>
    </nav>