import { useNavigate } from "react-router-dom";
import "../styles/reservation.css";

const Reservation = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/reservation-confirmed");
  };

  return (
    <section className="form-page">
      <a href="/" className="back-home">← Back to Home</a>

      <div className="form-card">
        <h2>Book a Table</h2>
        <p className="form-sub">
          Reserve your dining experience with us
        </p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="date" required />
          <input type="time" required />
          <input type="number" placeholder="Number of Guests" min="1" required />

          <button type="submit">Reserve Table</button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
