import React from 'react'
import './Banner.css';
import hero from '../../../../../src/img/hero.png'; 

function Banner() {
  return (
    <div>
      <section class="banner"
     
      >
          <div class="row">

            <div class="col-md-6">
              <div class="top-left">
                <h1>
                  Enjoy Our
                  Delicious Meal
                </h1>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam  amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <button class="btn btn-warning" type="submit">BOOK A TABLE</button>
            </div>
          </div>
            <div class="col-md-6 sosage">
             <img src={hero} alt="lost"/>

        </div>
        </div>
      </section> 
    </div>
  )
}

export default Banner
