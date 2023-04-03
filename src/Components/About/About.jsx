import React from 'react';
import {aboutPic} from "../img";

export default function About() {
  return (
    <>
    <main id="about" className='py-5'>
      <section className="container position-relative d-flex align-items-center flex-lg-row flex-md-row flex-sm-column flex-column">
        <div className="img py-5 mt-5 w-75">
          <img src={aboutPic} alt="" className="w-100" />
        </div>
        <div className="caption p-5 w-50">
          <h2>
            THE LEADER IN <br/>
            INTERACTIVE VR
          </h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class
            virtual reality projects for some of the best componies around the 
            global. Our award-wining creations have transformed 
            businesses through digital experiences that bind to their brand.
          </p>
        </div>
      </section>
    </main>
    </>
  )
}
