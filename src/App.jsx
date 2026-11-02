
import React, { useState } from "react";
import {
  HashRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <header>
      <h1>Jerone L</h1>
      <p>Computer Science Student | Online Resume</p>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Jerone L | Online Resume</p>
    </footer>
  );
}

function Home() {
  return (
    <section className="card">
      <h2>Welcome to My Online Resume</h2>
      <p>
        Hello! I am Jerone L, a Computer Science and
        Engineering student at Karunya University.
      </p>
      <p>
        Explore my education, technical skills and projects.
        Register to demonstrate the form validation feature.
      </p>
      <Link className="button" to="/about">
        View My Profile
      </Link>
    </section>
  );
}

function About() {
  return (
    <section className="card">
      <h2>About Me</h2>
      <p><b>Name:</b> Jerone L</p>
      <p><b>Department:</b> Computer Science and Engineering</p>
      <p><b>University:</b> Karunya University</p>

      <h3>Technical Skills</h3>
      <ul>
        <li>Java Programming</li>
        <li>HTML, CSS and JavaScript</li>
        <li>ReactJS</li>
        <li>Database Management Systems</li>
      </ul>

      <h3>Project</h3>
      <p>Smart Hostel Room Allocation and Maintenance Management System</p>
    </section>
  );
}

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    mobile: "",
    gender: "",
    state: ""
  });

  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const errors = {
    name: !/^[A-Za-z ]+$/.test(form.name.trim()),
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    password: !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password),
    age: !/^\d+$/.test(form.age) ||
      Number(form.age) < 18 || Number(form.age) > 30,
    mobile: !/^\d{10}$/.test(form.mobile),
    gender: !form.gender,
    state: !form.state
  };

  const valid =
    form.name.trim() !== "" && !errors.name &&
    form.email !== "" && !errors.email &&
    form.password !== "" && !errors.password &&
    form.age !== "" && !errors.age &&
    form.mobile !== "" && !errors.mobile &&
    !errors.gender && !errors.state;

  function updateField(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setSubmitted(false);
  }

  function showError(field, message) {
    if (touched[field] && errors[field]) {
      return <small>{message}</small>;
    }
    return null;
  }

  function handleBlur(e) {
    setTouched({ ...touched, [e.target.name]: true });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (valid) setSubmitted(true);
  }

  return (
    <section className="card">
      <h2>Registration Form</h2>
      <p className="intro">Enter your details to register.</p>

      <form onSubmit={handleSubmit} noValidate>
        <label>Full Name</label>
        <input name="name" value={form.name}
          onChange={updateField} onBlur={handleBlur}
          placeholder="Enter full name" required />
        {showError("name", "Use letters and spaces only.")}

        <label>Email Address</label>
        <input name="email" type="email" value={form.email}
          onChange={updateField} onBlur={handleBlur}
          placeholder="name@example.com" required />
        {showError("email", "Enter a valid email address.")}

        <label>Password</label>
        <input name="password" type="password" value={form.password}
          onChange={updateField} onBlur={handleBlur}
          placeholder="At least 8 characters" required />
        {showError("password", "Use uppercase, lowercase, a number and 8 characters.")}

        <label>Age</label>
        <input name="age" type="number" value={form.age}
          onChange={updateField} onBlur={handleBlur}
          placeholder="Age: 18–30" required />
        {showError("age", "Age must be between 18 and 30.")}

        <label>Mobile Number</label>
        <input name="mobile" type="tel" value={form.mobile}
          onChange={updateField} onBlur={handleBlur}
          placeholder="10-digit mobile number" required />
        {showError("mobile", "Enter exactly 10 digits.")}

        <label>Gender</label>
        <select name="gender" value={form.gender}
          onChange={updateField} onBlur={handleBlur} required>
          <option value="">Select gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        {showError("gender", "Please select a gender.")}

        <label>State</label>
        <select name="state" value={form.state}
          onChange={updateField} onBlur={handleBlur} required>
          <option value="">Select state</option>
          <option>Tamil Nadu</option>
          <option>Kerala</option>
          <option>Karnataka</option>
          <option>Andhra Pradesh</option>
        </select>
        {showError("state", "Please select a state.")}

        <button type="submit" disabled={!valid}>
          Submit Registration
        </button>

        {submitted && (
          <p className="success">
            Registration completed successfully!
          </p>
        )}
      </form>
    </section>
  );
}

function Contact() {
  return (
    <section className="card">
      <h2>Contact Me</h2>
      <p><b>Email:</b> jeronel@karunya.edu.in</p>
      <p><b>Phone:</b> 7548891498</p>
      <p><b>University:</b> Karunya University</p>
    </section>
  );
}

function App() {
  return (
    <HashRouter>
  <Navbar />
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </main>
  <Footer />
</HashRouter>
  );
}

export default App;
