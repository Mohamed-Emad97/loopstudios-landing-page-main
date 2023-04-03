import React from 'react';
import {galleryData} from "../Data";

export default function Gallery() {
  return (
    <>
      <main id="gallery" className='py-5'>
        <section className="container">
          <div className="title  my-4 d-flex algin-align-items-center justify-content-between">
            <h2>OUR CREATIONS</h2>
            <a href="#" className="btn btnMain px-3 p-3">SEE ALL</a>
          </div>
          <div className="row">
            {galleryData.map((item, i) =>
            <>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="poster p-2 position-relative">
                  <img src={item.img} alt="gallery-pic-1" className="w-100" />
                  <div className="overlay p-4">
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </div>
            </>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
