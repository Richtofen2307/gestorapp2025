import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Acommodation.css";

const rooms = [
  {
    id: 1,
    name: "Classic Room",
    price: "$150/Night",
    image:
      "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/152363546.jpg?k=46e9bf5e6e1bc4c99a1f67c0d5bc86030a87e8315393be9e60bc45e7f751f565&o=&s=1024x",
  },
  {
    id: 2,
    name: "Grand Deluxe Room",
    price: "$180/Night",
    image:
      "https://hotelmonalisa.com/wp-content/uploads/2024/07/GOR_9993-copy-2.jpg",
  },
  {
    id: 3,
    name: "Ultra Superior Room",
    price: "$200/Night",
    image:
      "https://ak-d.tripcdn.com/images/1mc3a12000cimmvqcEAA5_W_960_540_R5.webp",
  },
];

const Acommodation = () => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const navigate = useNavigate();

  return (
    <div className="acommodation-container">
      <div className="room-list">
        <h3>Discover Our Rooms</h3>
        <h1>Luxury Interior</h1>
        {rooms.map((room) => (
          <div
            key={room.id}
            className={`room-card ${selectedRoom.id === room.id ? "selected" : ""}`}
            onClick={() => setSelectedRoom(room)}
          >
            <img src={room.image} alt={room.name} className="room-image" />
            <div className="room-details">
              <h2>{room.name}</h2>
              <p className="room-price">{room.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="featured-room">
        <img
          src={selectedRoom.image}
          alt={selectedRoom.name}
          className="featured-image"
        />
        <h2 className="featured-title">{selectedRoom.name}</h2>
        <p className="featured-price">{selectedRoom.price}</p>
        <button className="booking-button" onClick={() => navigate("/room")}>
          Reserve
        </button>
      </div>
    </div>
  );
};

export default Acommodation;
