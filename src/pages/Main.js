import React from "react";
import { Card } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import Cup from "./Cup";
import Log from "../commons/Log";
import Top from "../commons/Top";
import List from "./List";
import img from "../assets/img/img.png"
import tag1 from "../assets/img/tag1.PNG"
import tag2 from "../assets/img/tag2.PNG"



const Main = () => {
  return (
    <div className="App">
      <Top />
      <Card className="bg-dark text-white">
        <Card.Img
          variant="top"
          src={img}
          style={{ width: "10rem", margin: "auto" }}
        />
        <Card.Body>
          <Card.Text>
            <h1 style={{ color: "red" }}>Welcome ⚽ LiverPool</h1>
          </Card.Text>
        </Card.Body>
      </Card>
      <List/>
      <Cup />
      <Card.Img
        variant="top"
        src={tag1}
        style={{ width: "120rem", margin: "auto" }}
      />
      <Card.Img
        variant="top"
        src={tag2}
        style={{ width: "120rem", margin: "auto" }}
      />

      <Log />
    </div>
  );
};

export default Main;
