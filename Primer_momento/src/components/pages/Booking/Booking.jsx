import React, { useState } from "react";
import Calendar from "../../commons/Calendar/Calendar.jsx";
import datosJSON from "../Dashboard/DatosJSON.js";
import { useParams } from "react-router-dom";
import './Booking.css'

const Booking = () => {
  const { id } = useParams();
  const initialPlace = datosJSON.find((lugar) => lugar.id === parseInt(id)) || datosJSON[0];

  const [selectedPlace, setSelectedPlace] = useState(initialPlace);
  const [reservas, setReservas] = useState([]);

  return (
    <div>
      <h1>Manage your space</h1>

      <select
        value={selectedPlace.id}
        onChange={(e) => {
          const newPlace = datosJSON.find(lugar => lugar.id === parseInt(e.target.value));
          setSelectedPlace(newPlace);
        }}
      >
        {datosJSON.map((lugar) => (
          <option key={lugar.id} value={lugar.id}>
            {lugar.nombre}
          </option>
        ))}
      </select>

      <div className="place-info">
        <p>{selectedPlace.descripcion}</p>
        <p><strong>Available Schedules:</strong> {selectedPlace.horarios.join(", ")}</p>
        <img 
          src={Array.isArray(selectedPlace.imagen) ? selectedPlace.imagen[0] : selectedPlace.imagen} 
          alt={selectedPlace.nombre} 
          className="place-image" 
        />
        <p>{selectedPlace.capacidad}</p>
      </div>

      <Calendar reservas={reservas} setReservas={setReservas} lugar={selectedPlace} />
    </div>
  );
};

export default Booking;