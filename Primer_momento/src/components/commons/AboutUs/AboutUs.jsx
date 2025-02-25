import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import'./AboutUs.css'

const AboutUs = () => {
  const images = [
    "https://images.trvl-media.com/lodging/20000000/19390000/19388200/19388188/6f4b23ad.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/bf/04/57/say-hello-to-a-tropical.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/36/44/d7/exterior.jpg?w=1100&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/36/44/e7/property-amenity.jpg?w=1100&h=-1&s=1"
  ];

  return (
    <div className='about_us'>
        <h2 className='about_us__subtitle'> About Us</h2>
        <h1 className='about_us__tittle'>A best place to enjoy 
            <br />
            your life</h1>
        <p className='about_us__text'> Hotel Monalisa offers a serene and homely atmosphere, combining natural grace with comfortable accommodations. 
            Located near the World Heritage Site of Chitwan National Park in Nepal, it features unique pagoda architecture and personalized service, 
            making it an ideal holiday destination. Guests can enjoy a variety of adventurous activities, including Jeep safaris and jungle walks, 
            ensuring a memorable stay.</p>
            <div className='about_us__carousel'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3} // Se muestran 3 imágenes a la vez
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Hotel view ${index + 1}`} className='about-us-image' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
            <button className='about_us__button'>
                View More Photos
            </button>
    </div>

  )
}

export default AboutUs;
