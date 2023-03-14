import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Cards from './Cards/Cards';
import Clients from './Clients/Clients';
import Popular from './Popular/Popular';
import Reservation from './Reservation/Reservation';
import Team from './Team/Team';
function Home() {
  return (
    <div>
        <Banner/>
        <Cards/>
        <AboutUs/>
        <Popular/>
        <Reservation/>
        <Team/>
        <Clients/>
    </div>
  )
}

export default Home
