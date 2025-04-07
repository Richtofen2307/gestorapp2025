import React, { useState } from "react";
import "./Room.css";

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

const Room = () => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [guestName, setGuestName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleReserve = () => {
    if (!guestName || !checkInDate || !checkOutDate) {
      alert("Please complete all fields to reserve.");
      return;
    }
    alert(`${guestName} has reserved the room ${selectedRoom.name} del ${checkInDate} al ${checkOutDate}`);
  };

  return (
    <div className="room-container">
  {/* Lista de habitaciones */}
  <div className="room-list">
    <h3>Discover Our Rooms</h3>
    <h1>Luxury Interiors</h1>
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

  {/* Habitación destacada */}
  <div className="featured-room">
    <img
      src={selectedRoom.image}
      alt={selectedRoom.name}
      className="featured-image"
    />
    <h2 className="featured-title">{selectedRoom.name}</h2>
    <p className="featured-price">{selectedRoom.price}</p>
    <div className="reservation-details">
      <label>Guest Name:</label>
      <input
        type="text"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
        placeholder="Enter your name"
      />
      <label>Entry Date:</label>
      <input
        type="date"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
      />
      <label>Exit Date:</label>
      <input
        type="date"
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
      />
    </div>
    <button className="reserve-button" onClick={handleReserve}>
      Reserve
    </button>
  </div>
</div>
  );
};

export default Room;