import React from 'react';
import Logo from "../../assets/images/logo.svg";

export default function Navbar() {

  const showMenu = () => {
    let header = document.getElementById("header");
    header.style.backgroundColor = `#000000`;
    header.style.width = `100%`;
    header.style.height = `100%`;
    let close = document.getElementById("close");
    let bars = document.getElementById("bars");

    close.classList.add('d-block');
    close.classList.remove("d-none");
    bars.classList.add('d-none');
    bars.classList.remove("d-block");
    console.log('show');
  }

  const closeMenu = () => {
    let header = document.getElementById("header");
    header.style.backgroundColor = `transparent`;
    let close = document.getElementById("close");
    let bars = document.getElementById("bars");

    close.classList.add('d-none');
    close.classList.remove("d-block");
    bars.classList.add('d-block');
    bars.classList.remove("d-none");
  }

  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('#header');
    const threshold = 100;
  
    if (window.scrollY >= threshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  return (
    <>
      <header id='header' className='fixed-top p-2'>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="Logo" className='w-100'/>
            </a>
            <button id='bars' className="navbar-toggler" onClick={showMenu}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i  className="fa-solid fa-bars text-white"></i>
            </button>
            <button id='close' className="navbar-toggler d-none" onClick={closeMenu}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa-solid fa-xmark text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Careers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Events</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
