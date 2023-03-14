import React from 'react';
import menu1 from '../../../../img/menu-1.jpg';
import menu2 from '../../../../img/menu-2.jpg';
import menu3 from '../../../../img/menu-3.jpg';
import menu4 from '../../../../img/menu-4.jpg';
import menu5 from '../../../../img/menu-5.jpg';
import menu6 from '../../../../img/menu-6.jpg';
import menu7 from '../../../../img/menu-7.jpg';
import menu8 from '../../../../img/menu-8.jpg';
import '../../../Styles/styles.css';

function Popular() {
  return (
    <>
<section >
  <div class="popular-item">
<h3>Food Menu</h3>
<h2>Most Popular Items</h2>
<div class="items">
  <i class="fa-solid fa-mug-saucer"></i><h6><small>Popular</small><br/>
    Breakfast</h6>
  <i class="fa-solid fa-burger"></i><h6><small>Special</small><br/>
    Lunch</h6>
  <i class="fa-solid fa-utensils"></i><h6><small>Lovely</small><br/>
    Dinner</h6>
</div>
</div>
</section>

 <section class="menu-section">
  <div class="col-md-6 menu-items">
    <div class="burger">
     <img src={menu1} alt=""/>
    </div>
    <div class="burger">
     <h5>Chicken Burger</h5>
     <span>$115</span>
     <hr/>
     <small><i>
     Ipsum ipsum clita erat amet dolor justo diam</i></small>
     
    </div>
    </div>
    <div class="col-md-6 menu-items">
    <div  class="burger">
     <img src={menu2} alt=""/>
    </div>
    <div  class="burger">
     <h5>Chicken Burger</h5>
     <span>$115</span>
     <hr/>
     <small><i>
     Ipsum ipsum clita erat amet dolor justo diam</i></small>
     
    </div>
    </div>
    <div class="col-md-6 menu-items">
    <div class="burger">
     <img src={menu3} alt=""/>
    </div>
    <div class="burger">
     <h5>Chicken Burger</h5>
     <span>$115</span>
     <hr/>
     <small><i>
    Ipsum ipsum clita erat amet dolor justo diam</i></small>
     
    </div>
    </div>
    <div class="col-md-6 menu-items">
    <div class="burger">
     <img src={menu4} alt=""/>
    </div>
    <div class="burger">
     <h5>Chicken Burger</h5>
     <span>$115</span>
     <hr/>
     <small><i>
    Ipsum ipsum clita erat amet dolor justo diam</i></small>
     
    </div>
    </div>
    <div class="col-md-6 menu-items">
    <div class="burger">
     <img src={menu5} alt=""/>
    </div>
    <div class="burger">
     <h5>Chicken Burger</h5>
     <span>$115</span>
     <hr/>
     <small><i>
   Ipsum ipsum clita erat amet dolor justo diam</i></small>
     
    </div>
    </div>
    <div class="col-md-6 menu-items">
    <div class="burger">
     <img src={menu6} alt=""/>
    </div>
    <div class="burger">
     <h5>Chicken Burger</h5>
     <span>$115</span>
     <hr/>
     <small><i>
    Ipsum ipsum clita erat amet dolor justo diam</i></small>
    
    </div>
    </div>
    <div class="col-md-6 menu-items">
    <div class="burger" >
     <img src={menu7} alt=""/>
    </div>
    <div class="burger" >
     <h5>Chicken Burger</h5>
     <span>$115</span>
     <hr/>
     <small><i>
    Ipsum ipsum clita erat amet dolor justo diam</i></small>
    
    </div>
    </div>
    <div class="col-md-6 menu-items">
    <div class="burger">
     <img src={menu8} alt=""/>
    </div>
    <div class="burger">
     <h5>Chicken Burger</h5>
     <span>$115</span>
     <hr/>
     <small><i>
     Ipsum ipsum clita erat amet dolor justo diam</i></small>
     
    </div>
    </div>
 </section>
 </>
  )
}

export default Popular
