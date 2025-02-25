import React from "react";
import "./Booking.css";

const rooms = [
  {
    id: 1,
    name: "Presidencial Suite",
    price: "$300 / Night",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/e8/d4/a4/ramada-resort-port-douglas.jpg?w=2000&h=-1&s=1",
    description: "A luxury suite with panoramic view and private jacuzzi.",
  },
  {
    id: 2,
    name: "Deluxe Suite",
    price: "$200 / Night",
    image: "https://hotelmonalisa.com/wp-content/uploads/2024/07/GOR_9993-copy-2.jpg",
    description: "Elegant and spacious, ideal for a comfortable stay.",
  },
  {
    id: 3,
    name: "Standard Suite",
    price: "$120 / Night",
    image: "https://ak-d.tripcdn.com/images/1mc3a12000cimmvqcEAA5_W_960_540_R5.webp",
    description: "With all the basic amenities for an excellent stay.",
  },
  {
    id: 4,
    name: "Event Hall",
    price: "$500 / Day",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/36/44/e8/property-amenity.jpg?w=1100&h=-1&s=1",
    description: "Perfect for meetings, weddings or corporate events.",
  },
];

const Booking = () => {
  return (
    <div className="booking">
      <h1 className="booking__title">Book your space at Monalisa Hotel</h1>
      <div className="booking__grid">
        {rooms.map((room) => (
          <div key={room.id} className="booking__card">
            <img src={room.image} alt={room.name} className="booking__image" />
            <h2 className="booking__name">{room.name}</h2>
            <p className="booking__price">{room.price}</p>
            <p className="booking__description">{room.description}</p>
            <button className="booking__button">Reservar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
