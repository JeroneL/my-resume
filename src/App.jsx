
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div>
          <p className="tag">MY PERSONAL PORTFOLIO</p>
          <h1>Hi, I'm <span>Jerone L</span></h1>
          <h3>Computer Science Engineering Student</h3>
          <p>
            I am passionate about web development, Java programming,
            and building useful software applications.
          </p>
          <a href="#projects" className="button">View My Projects</a>
          <Link to="/register" className="button outline">
            Register Now
          </Link>
        </div>
        <div className="avatar">J</div>
      </section>

      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
          I am a Computer Science and Engineering student at
          Karunya University. I enjoy learning new technologies,
          solving problems, and developing practical applications.
          My goal is to become a skilled software developer.
        </p>
      </section>

      <section className="section shaded" id="education">
        <h2>Education</h2>
        <div className="item">
          <h3>B.Tech - Computer Science and Engineering</h3>
          <p>Karunya University, Coimbatore</p>
          <p>2024 – 2028</p>
        </div>
      </section>

      <section className="section" id="skills">
        <h2>Technical Skills</h2>
        <div className="skills">
          <div>HTML & CSS</div>
          <div>JavaScript</div>
          <div>ReactJS</div>
          <div>Java</div>
          <div>Python</div>
          <div>PostgreSQL</div>
        </div>
      </section>

      <section className="section shaded" id="projects">
        <h2>My Projects</h2>
        <div className="projects">
          <div className="item">
            <h3>Smart Recipe Manager</h3>
            <p>
              A Java Swing application using PostgreSQL to search
              recipes and manage favorite dishes.
            </p>
            <span>Java · PostgreSQL</span>
          </div>

          <div className="item">
            <h3>FraudGraph AI</h3>
            <p>
              A financial fraud detection project to identify
              suspicious transactions and connected accounts.
            </p>
            <span>Python · Data Analysis</span>
          </div>

          <div className="item">
            <h3>Automatic Railway Gate</h3>
            <p>
              An embedded system that uses sensors and a servo
              motor to automate railway gate operation.
            </p>
            <span>Arduino · Embedded Systems</span>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <h2>Contact Me</h2>
        <p>Email: YOUR_EMAIL@example.com</p>
        <p>Location: Coimbatore, Tamil Nadu</p>
        <Link to="/register" className="button">Register Here</Link>
      </section>
    </>
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

  const [submitted, setSubmitted] = useState(false);
  const [attempted, setAttempted] = useState(false);

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const errors = {
    name: !/^[A-Za-z ]+$/.test(form.name.trim()),
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    password: !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password),
    age: !/^\d+$/.test(form.age) ||
      Number(form.age) < 18 || Number(form.age) > 30,
    mobile: !/^\d{10}$/.test(form.mobile)
  };

  const valid =
    form.name.trim() !== "" && !errors.name &&
    form.email !== "" && !errors.email &&
    !errors.password &&
    form.age !== "" && !errors.age &&
    !errors.mobile && form.gender !== "" && form.state !== "";

  function handleSubmit(e) {
    e.preventDefault();
    setAttempted(true);
    if (valid) setSubmitted(true);
  }

  return (
    <section className="form-section">
      <div className="form-card">
        <h2>Registration Form</h2>
        <p>Enter your details below.</p>

        <form onSubmit={handleSubmit} noValidate>
          <label>Full Name</label>
          <input name="name" value={form.name}
            onChange={updateField} placeholder="Your full name" />
          {((form.name && errors.name) ||
            (attempted && !form.name.trim())) &&
            <small>Enter a valid name using letters and spaces.</small>}

          <label>Email</label>
          <input name="email" type="email" value={form.email}
            onChange={updateField} placeholder="you@example.com" />
          {((form.email && errors.email) ||
            (attempted && !form.email)) &&
            <small>Enter a valid email address.</small>}

          <label>Password</label>
          <input name="password" type="password" value={form.password}
            onChange={updateField} placeholder="Minimum 8 characters" />
          {((form.password && errors.password) ||
            (attempted && !form.password)) &&
            <small>Use uppercase, lowercase, a number and 8 characters.</small>}

          <label>Age</label>
          <input name="age" type="number" value={form.age}
            onChange={updateField} placeholder="Age (18–30)" />
          {((form.age && errors.age) ||
            (attempted && !form.age)) &&
            <small>Age must be between 18 and 30.</small>}

          <label>Mobile Number</label>
          <input name="mobile" type="tel" value={form.mobile}
            onChange={updateField} placeholder="10-digit mobile number" />
          {((form.mobile && errors.mobile) ||
            (attempted && !form.mobile)) &&
            <small>Enter exactly 10 digits.</small>}

          <label>Gender</label>
          <select name="gender" value={form.gender} onChange={updateField}>
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          {attempted && !form.gender && <small>Select your gender.</small>}

          <label>State</label>
          <select name="state" value={form.state} onChange={updateField}>
            <option value="">Select state</option>
            <option>Tamil Nadu</option>
            <option>Kerala</option>
            <option>Karnataka</option>
            <option>Andhra Pradesh</option>
            <option>Other</option>
          </select>
          {attempted && !form.state && <small>Select your state.</small>}

          <button type="submit" disabled={!valid}>
            Submit Registration
          </button>

          {submitted && (
            <p className="success">Registration successful!</p>
          )}
        </form>
      </div>
    </section>
  );
}

function ScrollToHashElement() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

const currentYear = new Date().getFullYear();

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToHashElement />
      <header className="navbar">
        <Link to="/" className="brand">Jerone L</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/#about">About</Link>
          <Link to="/#education">Education</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <footer>
        © {currentYear} Jerone L | Personal Resume
      </footer>
    </BrowserRouter>
  );
}

export default App;
