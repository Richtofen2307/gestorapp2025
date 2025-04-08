import React, { useState, useEffect } from "react";
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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [reservations, setReservations] = useState([]);

  // Load reservations from localStorage on component mount
  useEffect(() => {
    const savedReservations = JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(savedReservations);
  }, []);

  // Save reservations to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }, [reservations]);

  const handleReserve = () => {
    if (!guestName || !phoneNumber || !email || !idNumber || !checkInDate || !checkOutDate) {
      alert("Please complete all fields to reserve.");
      return;
    }

    // Check if the room is already reserved for the selected dates
    const isRoomOccupied = reservations.some(
      (reservation) =>
        reservation.roomId === selectedRoom.id &&
        ((checkInDate >= reservation.checkInDate && checkInDate <= reservation.checkOutDate) ||
          (checkOutDate >= reservation.checkInDate && checkOutDate <= reservation.checkOutDate))
    );

    if (isRoomOccupied) {
      alert("The selected room is already reserved for the chosen dates.");
      return;
    }

    // Save the reservation
    const newReservation = {
      roomId: selectedRoom.id,
      guestName,
      phoneNumber,
      email,
      idNumber,
      paymentMethod,
      checkInDate,
      checkOutDate,
    };

    setReservations([...reservations, newReservation]);
    alert(`Reservation confirmed for ${guestName} in ${selectedRoom.name} from ${checkInDate} to ${checkOutDate}.`);

    // Clear the form
    setGuestName("");
    setPhoneNumber("");
    setEmail("");
    setIdNumber("");
    setPaymentMethod("Cash");
    setCheckInDate("");
    setCheckOutDate("");
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
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <label>ID Number:</label>
          <input
            type="text"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            placeholder="Enter your ID number"
          />
          <label>Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
          </select>
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