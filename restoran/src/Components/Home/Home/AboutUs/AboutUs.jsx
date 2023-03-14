import React from 'react';
import '../../../Styles/styles.css';
import about1 from '../../../../img/about-1.jpg';
import about2 from '../../../../img/about-2.jpg';
import about3 from '../../../../img/about-3.jpg';
import about4 from '../../../../img/about-4.jpg';

function AboutUs() {
  return (
<section class="about-section">
  <div class="row">
    <div class="col-md-6">
<div>
<img class="about-one" src={about1} alt=""/>
<img class="about-two" src={about2} alt=""/>
</div>
<div>
<img class="about-three" src={about3} alt=""/>
<img class="about-four" src={about4}alt=""/>
</div>
    </div>
    <div class="col-md-6 about-other">
      <h3>About Us</h3>
      <h2>Welcome to <i class="fa-solid fa-utensils"></i> Restoran</h2>
      <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        <br/> <br/> 
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
      </p>
      <div class="fifteen">
        <span>15</span>
        <small>Years of</small>
        <h6>
    EXPERIENCE</h6>
      </div>
      <div class="fifteen">
        <span>50</span>
       <small>Popular</small>
        <h6>
        MASTER CHEFS </h6>
      </div>
      <button class="btn btn-warning" type="submit">READ MORE</button>
    </div>
  </div>
</section>
  )
}

export default AboutUs
