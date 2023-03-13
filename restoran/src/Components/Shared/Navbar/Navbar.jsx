import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
        {/* Navbar */}

<nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand logo" href="#"> <i class="fa-solid fa-utensils"></i><h4>Restoran</h4></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav margin-left-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active nav-home" aria-current="page" href="index.html">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="service.html">SERVICE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="menu.html">MENU</a>
          </li>
         
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PAGES
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="booking.html">Booking</a></li>
              <li><a class="dropdown-item" href="our-team.html">Our Team</a></li>
              <li><a class="dropdown-item" href="testimonial.html">Testimonial</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">CONTACT</a>
          </li>
         
        </ul>
        <form class="d-flex book" role="search">
          
          <a href="contact.html"  class="btn btn-warning book-table">BOOK A TABLE</a>
        </form>
      </div>
    </div>
  </nav>
 {/* end */}

    </div>
  )
}
export default Navbar
