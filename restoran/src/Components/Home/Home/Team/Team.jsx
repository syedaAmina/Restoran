import React from 'react';
import team1 from '../../../../img/team-1.jpg';
import team2 from '../../../../img/team-2.jpg';
import team3 from '../../../../img/team-3.jpg';
import team4 from '../../../../img/team-4.jpg';
import '../../../Styles/styles.css';
style
function Team() {
  return (
 <section>
<div class="team-member text-center">
  <h5>Team Members</h5>
  <h1>Our Master Chefs</h1>
</div>

<div class="container text-center overflow-hidden chef-card">
  <div class="row">

    <div class="col-md-3">
      <div class="chefs">
        <img class="chef-img" src={team1} alt=""/>
      <h5>Full Name</h5>
      <small>Designation</small>
      </div>
    </div>
    <div class="col-md-3">
      <div class="chefs">
        <img class="chef-img" src={team2} alt=""/>
      <h5>Full Name</h5>
      <small>Designation</small>
      </div>
    </div>
    <div class="col-md-3">
      <div class="chefs">
        <img class="chef-img" src={team3} alt=""/>
      <h5>Full Name</h5>
      <small>Designation</small>
      </div>
    </div>
    <div class="col-md-3">
      <div class="chefs">
        <img class="chef-img" src={team4} alt=""/>
      <h5>Full Name</h5>
      <small>Designation</small>
      </div>
    </div>
  </div>
</div>
</section>
  )
}

export default Team
