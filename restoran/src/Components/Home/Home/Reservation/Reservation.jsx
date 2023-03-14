import React from 'react';
import '../../../Styles/styles.css';

function Reservation() {
  return (
    <section> 
  <div class="row">
    <div class="col-md-6 video">
    </div>
  <div class="col-md-6 fillup-form">
    <div class="row g-3">
<div class="text- form-banner">
  <h5>Reservation</h5>
  <h2>Book A Table Online</h2>
</div>
      <div class="col-6 form-box"> 
        <input type="text" class="form-control" placeholder="Your Name" aria-label="Your Name name"/>
      </div>
      <div class="col-6 form-box">
        <input type="email" class="form-control" id="inputEmail4" placeholder="Your Email"/>
      </div>
      <div class="col-6 form-box">
        <input type="datetime" class="form-control" id="datetime" placeholder="Date & Time"/>
      </div>
      <div class="col-6 form-box">
        <label class="visually-hidden" for="autoSizingSelect">Preference</label>
        <select class="form-select" id="autoSizingSelect">
          <option selected>Number Of People</option>
          <option value="1">People 1</option>
          <option value="2">People 2</option>
          <option value="3">People 3</option>
        </select>
      </div>
     
      <div class="form-floating form-requests">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2">Special Requests</label>
      </div>
    </div>

    <div class="col-auto">
      <button type="submit" class="btn btn-primary">BOOK NOW</button>
    </div>
  </div>
  </div>
 </section>  
  )
}

export default Reservation
