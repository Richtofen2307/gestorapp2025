import React from 'react'
import"./Home.css"
import AboutUs from '../../commons/AboutUs/AboutUs'
import Acommodation from '../../commons/Acommodation/Acommodation'
import Experience from '../../commons/Experience/Experience'
import ContactUs from '../../commons/ContactUs/ContactUs'
import ImageSearch from '../../commons/ImageSearch/ImageSearch';

const Home = () => {
  return (
    <>
    <div className='home'>
      <div className='home__banner'>
        <h2 className='home__banner-subtittle'>Welcome to</h2>
        <h1 className='home__banner-tittle'>Monalisa Hotel</h1>
        <h2 className='home__banner-description'> A place to experience and enjoy the life</h2>
      </div>
    </div>
    <ImageSearch />
    <AboutUs/>
    <Acommodation/>
    <Experience/>
    <ContactUs/>
    </>
  )
}

export default Home

