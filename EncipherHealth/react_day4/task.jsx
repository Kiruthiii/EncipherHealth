import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/* 1. Conditional Rendering using Ternary */
function Welcome({ isLoggedIn }) {
  return <h2>{isLoggedIn ? "Welcome User" : "Please Login"}</h2>;
}

/* 2. Toggle Message using && */
function ToggleMessage() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>Show / Hide Message</button>
      {show && <p>Hello React</p>}
    </>
  );
}

/* 3. Login Toggle + Dashboard */
function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <Welcome isLoggedIn={isLoggedIn} />
      {isLoggedIn && <h3>Dashboard</h3>}
    </>
  );
}

/* 4. Fruits List */
function FruitList() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

/* 5. Student List with ID as Key */
function StudentList() {
  const students = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Anita" },
    { id: 3, name: "Kiran" }
  ];

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}

/* 6. Controlled Input */
function ControlledInput() {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </>
  );
}

/* 7. Form Validation */
function UsernameForm() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setError("Username is required");
    } else {
      setError("");
      alert("Form Submitted");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

/* 8. Tailwind Card Component */
function TailwindCard() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        <h2 className="text-xl font-bold mb-2">Card Title</h2>
        <p className="text-gray-600">
          This is a Tailwind CSS card component.
        </p>
      </div>
    </div>
  );
}

/* 9. Pages for React Router */
function Home() {
  return (
    <>
      <h2>Home Page</h2>
      <LoginToggle />
      <ToggleMessage />
      <FruitList />
      <StudentList />
      <ControlledInput />
      <UsernameForm />
    </>
  );
}

function About() {
  return (
    <>
      <h2>About Page</h2>
      <TailwindCard />
    </>
  );
}

/* Main App */
export default function Task() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
