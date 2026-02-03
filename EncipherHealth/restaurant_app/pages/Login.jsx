import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="first">
      <Link to="/" className="back-home">
        ← Back to Home
      </Link>

      <div className="main">
        <h2>Member Login</h2>
        <p className="head">
          Access your reservations and preferences here
        </p>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />

          <button type="submit">Login</button>
        </form>

        <p className="create">
          New here?{" "}
          <Link to="/create-account">Create an account</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;

