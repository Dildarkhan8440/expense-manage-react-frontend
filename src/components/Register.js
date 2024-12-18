import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./css/Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailError == "") {
      setEmailError("Email is Required");
    }
    if (passwordError == "") {
      setPasswordError("Password is required");
    }
    if (nameError == "") {
      setNameError("Name is required");
    }
    if (!email == "" && !password == "" && !name == "") {
      async function login() {
        const response = await axios.post(
          process.env.REACT_APP_API_BASE_URL + "/api/users/register",
          { name: name, email: email, password: password }
        );
        if (response.status == 200) {
          navigate("/", { replace: true });
        }
      }
      login();
    }
  };
  return (
    <Container>
      <div className="register-wrapper">
        <div className="register-form-container">
          <h2 className="register-title">Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <span style={{ color: "red" }}>{nameError}</span>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <span style={{ color: "red" }}>{emailError}</span>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <span style={{ color: "red" }}>{passwordError}</span>
            <Button
              variant="primary"
              type="submit"
              className="Register-button w-100"
            >
              Register
            </Button>
            <br></br>
            <br></br>
            <p>
              Already Register! <Link to={"/"}>Login</Link>
            </p>
          </Form>
        </div>
      </div>
    </Container>
  );
}
