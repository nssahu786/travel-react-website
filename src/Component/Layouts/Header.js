import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <>
      {/* HEADER SECTION START */}
        <header>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Travel & Tourism</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to='/' className="nav-link active home" aria-current="page">HOME</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/rooms' className="nav-link">ROOMS</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/amenities' className="nav-link">AMENITIES</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/contact' className="nav-link" >CONTACT</Link>
                    </li>
                    <li className="nav-item">
                      <button type="button" className="btn nav-link reser ver" data-bs-toggle="modal" data-bs-target="#aa">RESERVATION</button>
                    </li>
                  </ul>
                </div>
            </div>
          </nav>
        </header>
      {/* HEADER SECTION END */}
    </>
  )
}
