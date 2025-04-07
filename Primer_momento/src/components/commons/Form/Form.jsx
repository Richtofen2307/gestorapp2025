import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { zone, date, schedule } = location.state || {};

  const [formData, setFormData] = useState({
    zone: zone || "",
    schedule: schedule || "",
    date: date || "",
    personName: "",
    phone: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { personName, phone, email } = formData;

    if (!personName || !phone || !email) {
      alert("Please fill in all the required fields");
      return;
    }

    const storedReservas = JSON.parse(localStorage.getItem(`reservas_${zone}`)) || [];
    const newReservas = [...storedReservas, { dia: date, horario: schedule }];
    localStorage.setItem(`reservas_${zone}`, JSON.stringify(newReservas));

    alert(`Reservation confirmed for ${personName} in ${formData.zone} on ${formData.date} at ${formData.schedule}`);
    navigate("/calendar", { state: { updated: true } });
  };

  return (
    <div className="container">
      {/* Imagen */}
      <div className="image-section"></div>

      {/* Formulario */}
      <div className="form-section">
        <form onSubmit={handleSubmit} className="reservation-form">
          <h2>Book your Space</h2>

          <div className="form-group">
            <label>Zone:</label>
            <input type="text" name="zone" value={formData.zone} readOnly />
          </div>

          <div className="form-group">
            <label>Schedule:</label>
            <input type="text" name="schedule" value={formData.schedule} readOnly />
          </div>

          <div className="form-group">
            <label>Date:</label>
            <input type="text" name="date" value={formData.date} readOnly />
          </div>

          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="personName"
              value={formData.personName}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <button type="submit" className="submit-button">Reserve</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
