import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const student = {
    name: "Dhanush Kumar",
    rollNo: "2300030001",
    course: "B.Tech - Computer Science",
    year: "3rd Year",
    department: "Computer Science and Engineering",
    email: "student@kluniversity.in",
    phone: "9876543210",
    address: "Vijayawada, Andhra Pradesh",
    cgpa: "8.5"
  };

  function handleLogin(e) {
    e.preventDefault();

    if (
      email === student.email &&
      password === "123456"
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Email or Password!");
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  }

  return (
    <div className="app">

      {!isLoggedIn ? (

        // LOGIN PAGE

        <div className="login-container">

          <div className="login-header">
            <h1>STUDENT PORTAL</h1>
            <p>Welcome Back!</p>
            <p>Login to access your student profile</p>
          </div>

          <form onSubmit={handleLogin}>

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">
              LOGIN
            </button>

          </form>

          <div className="demo">
            <p><strong>Demo Login Details</strong></p>
            <p>Email: student@kluniversity.in</p>
            <p>Password: 123456</p>
          </div>

        </div>

      ) : (

        // STUDENT PROFILE PAGE

        <div className="dashboard">

          <nav className="navbar">
            <h2>STUDENT PORTAL</h2>

            <button onClick={handleLogout}>
              Logout
            </button>
          </nav>

          <div className="profile-container">

            <div className="profile-header">

              <div className="profile-image">
                👨‍🎓
              </div>

              <h1>{student.name}</h1>

              <p>{student.course}</p>

              <span className="status">
                Active Student
              </span>

            </div>

            <div className="profile-details">

              <h2>Personal Information</h2>

              <div className="details-grid">

                <div className="detail">
                  <h4>Student Name</h4>
                  <p>{student.name}</p>
                </div>

                <div className="detail">
                  <h4>Roll Number</h4>
                  <p>{student.rollNo}</p>
                </div>

                <div className="detail">
                  <h4>Email Address</h4>
                  <p>{student.email}</p>
                </div>

                <div className="detail">
                  <h4>Phone Number</h4>
                  <p>{student.phone}</p>
                </div>

                <div className="detail">
                  <h4>Department</h4>
                  <p>{student.department}</p>
                </div>

                <div className="detail">
                  <h4>Academic Year</h4>
                  <p>{student.year}</p>
                </div>

                <div className="detail">
                  <h4>CGPA</h4>
                  <p>{student.cgpa}</p>
                </div>

                <div className="detail">
                  <h4>Address</h4>
                  <p>{student.address}</p>
                </div>

              </div>

            </div>

          </div>

          <footer>
            © 2026 Student Portal | All Rights Reserved
          </footer>

        </div>

      )}

    </div>
  );
}

export default App;
