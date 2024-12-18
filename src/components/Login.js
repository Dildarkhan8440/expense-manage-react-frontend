import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./css/Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailError == "") {
      setEmailError("Email is Required");
    }
    if (passwordError == "") {
      setPasswordError("Password is required");
    }
    if (!email == "" && !password == "") {
      async function login() {
        const response = await axios.post(
          process.env.REACT_APP_API_BASE_URL + "/api/users/login",
          { email: email, password: password }
        );
        if (response.status == 200) {
          localStorage.setItem("user_data", JSON.stringify(response.data.data));
          navigate("/dashboard", { replace: true });
        }
      }
      login();
    }
  };
  return (
    <Container>
      <div className="login-wrapper">
        <div className="login-form-container">
          <h2 className="login-title">Login</h2>
          <Form onSubmit={handleSubmit}>
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

            <Button variant="primary" type="submit" className="login-button">
              Login
            </Button>
            <br></br>
            <br></br>
            <p>
              don't hava login cred! <Link to={"/register"}>Register</Link>
            </p>
          </Form>
        </div>
      </div>
    </Container>
  );
}
