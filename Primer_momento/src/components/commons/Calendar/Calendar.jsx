import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Calendar.css";

const daysOfWeek = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const hours = [
  "10:00 AM", "11:00 AM", "12:00 PM", "13:00 PM", "14:00 PM",
  "15:00 PM", "16:00 PM", "17:00 PM", "18:00 PM"
];

const Calendar = ({ lugar }) => {
  const [reservas, setReservas] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedReservas = JSON.parse(localStorage.getItem(`reservas_${lugar.nombre}`)) || [];
    setReservas(savedReservas);
  }, [lugar.nombre, location.state]);

  const handleDateClick = (day, hour) => {
    const isReserved = reservas.some(r => r.dia === day && r.horario === hour);

    if (isReserved) {
      setError(`El horario ${hour} del ${day} ya está reservado.`);
      setTimeout(() => setError(""), 3000);
    } else {
      navigate("/form", {
        state: { zone: lugar.nombre, date: day, schedule: hour },
      });
    }
  };

  return (
    <div className="calendar">
      {error && <div className="calendar__error">{error}</div>}

      <table className="calendar__table">
        <thead>
          <tr className="calendar__header">
            <th className="calendar__cell calendar__cell--empty"></th>
            {daysOfWeek.map((day, i) => (
              <th key={i} className="calendar__cell">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, i) => (
            <tr key={i} className="calendar__row">
              <td className="calendar__cell calendar__cell--hour">{hour}</td>
              {daysOfWeek.map((day, j) => {
                const isReserved = reservas.some(r => r.dia === day && r.horario === hour);
                return (
                  <td
                    key={j}
                    className={`calendar__cell calendar__cell--event ${isReserved ? "reserved" : ""}`}
                    onClick={() => handleDateClick(day, hour)}
                  >
                    {isReserved ? "⛔ Reserved" : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;

