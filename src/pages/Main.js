import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useNavigate } from "react-router-dom"

const Main = () => {
    const Navigate = useNavigate();
  return (
  <div className="App">
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <h1 onClick={() => Navigate("/")}>LFC</h1>
        </Navbar.Brand>
        <Nav className="me-auto">
        <button onClick={() => window.open('https://www.liverpoolfc.com', '_blank')}>Home</button>
          <button onClick={() => Navigate("/Member")}>Member</button>
          <button onClick={() => Navigate("/History")}>History</button>
         
        </Nav>
      </Container>
    </Navbar>
    </div>

  );
};

export default Main;
