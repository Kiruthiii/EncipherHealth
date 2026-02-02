import "../styles/footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-wrapper">

        <div className="footer-col">
          <h3>THE FINE DINE</h3>
          <p>
            <i className="fa-solid fa-location-dot"></i>
            24 Heritage Lane<br />
            City Centre, India
          </p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            <i className="fa-solid fa-phone"></i>
            +91 9XXXXXXXXX<br />
            <i className="fa-solid fa-envelope"></i>
            reservations@thefinedine.com
          </p>
        </div>

        <div className="footer-col">
          <h4>Hours</h4>
          <p>
            <i className="fa-regular fa-clock"></i>
            Lunch: 12:00 – 3:30 PM<br />
            Dinner: 7:00 – 11:00 PM
          </p>
        </div>

      </div>

      <p className="line">We look forward to welcoming you.</p>

      <p className="copyright">
        © 2025 The Fine Dine. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
