import React from 'react'
import "./Experience.css"
import { FaStar } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="experience-container">
      <p className="experience-subtitle">TESTIMONIAL</p>
      <h2 className="experience-title">What Client Say</h2>
      <p className="experience-text">
        "The Monalisa Hotel is a fantastic place to stay! The rooms are spacious and clean, the staff is friendly, 
        and the service is excellent. A perfect choice for a comfortable and relaxing experience. Highly recommended!"
      </p>
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="star" />
        ))}
      </div>
      <div className="review-source">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Tripadvisor_Logo_stacked.svg" 
             alt="TripAdvisor Logo" 
             className="tripadvisor-logo" 
        />
        <p className="reviewer">Adam Levine - Review from TripAdvisor</p>
      </div>
    </div>
  )
}

export default Experience
