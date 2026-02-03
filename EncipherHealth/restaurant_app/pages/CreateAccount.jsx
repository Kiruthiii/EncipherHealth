import { Link, useNavigate } from "react-router-dom";
import "../styles/createAccount.css";

const CreateAccount = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <section className="form-page">
      <div className="form-card">
        <h2>Create Account</h2>

        <p className="form-sub">
          Enjoy a more personalized dining experience
        </p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit">Create Account</button>
        </form>

        <p className="form-note">
          Creating an account is optional and helps you manage future reservations.
        </p>

        <Link to="/login" className="form-link">
          Already have an account? Sign in
        </Link>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
};

export default CreateAccount;

