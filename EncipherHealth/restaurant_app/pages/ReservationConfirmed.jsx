import "../styles/reservationConfirmed.css";

const ReservationConfirmed = () => {
  return (
    <section className="confirmation-page">
      <div className="confirmation-card">
        <h2>Reservation Request Received</h2>

        <p className="confirmation-sub">
          Thank you for choosing The Fine Dine.
        </p>

        <p className="confirmation-text">
          Your reservation request has been received and is currently being reviewed by our team.
          A confirmation will be sent to your email shortly.
        </p>

        <p className="confirmation-note">
          We look forward to welcoming you for an unforgettable dining experience.
        </p>

        <a href="/" className="confirmation-link">
          Return to Home
        </a>
      </div>
    </section>
  );
};

export default ReservationConfirmed;
