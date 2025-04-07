import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import datosJSON from "../Dashboard/DatosJSON.js";

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleSelectSpace = () => {
    navigate(`/booking`);
  };

  return (
    <div className="dashboard">
      <div className="dashboard__banner">
        <h1>Select a space to book</h1>
      </div>
      <div className="dashboard__cards">
        {datosJSON.map((lugar) => {
          
          if (lugar && lugar.imagen && lugar.imagen.length > 0) {
            return (
              <div
                key={lugar.id}
                className="dashboard__card"
                onClick={() => handleSelectSpace(lugar.id)}
              >
                <img
                  src={lugar.imagen[0]}
                  alt={lugar.nombre}
                  className="dashboard__image"
                />
                <div className="dashboard__info">
                  <h2>{lugar.nombre}</h2>
                  <p>{lugar.descripcion}</p>
                  <p>{lugar.capacidad}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={lugar.id}
                className="dashboard__card"
                onClick={() => handleSelectSpace(lugar.id)}
              >
                <div className="dashboard__image-placeholder">
                  No hay imágenes disponibles
                </div>
                <div className="dashboard__info">
                  <h2>{lugar.nombre}</h2>
                  <p>{lugar.descripcion}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Dashboard;