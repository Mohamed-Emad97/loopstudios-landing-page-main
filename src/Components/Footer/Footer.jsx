import React from 'react';
import logo from "../../assets/images/logo.svg"

export default function Footer() {
  return (
    <>
      <footer className='py-5'>
        <div className="container">
          <div className="divider d-flex align-items-center justify-content-between flex-lg-row flex-md-row flex-sm-column flex-column">
            <div className="img">
              <img src={logo} alt="" className="w-100" />
            </div>
            <ul className='list-unstyled d-flex align-items-center gap-3 text-white my-3'>
              <li className='facebook fs-2'><i className="fa-brands fa-facebook"></i></li>
              <li className='twitter fs-2'><i className="fa-brands fa-twitter"></i></li>
              <li className='pinterest fs-2'><i className="fa-brands fa-pinterest"></i></li>
              <li className='instagram fs-2'><i className="fa-brands fa-instagram"></i></li>
            </ul>
          </div>
          <div className="footerLinks d-flex align-items-center justify-content-between flex-lg-row flex-md-row flex-sm-column flex-column">
            <ul className='list-unstyled d-flex align-items-center gap-2 text-white'>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Support</a></li>
            </ul>
            <div className="txt text-lg-start text-md-start text-sm-center text-center">
              <p>2021 Loopstidios. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
