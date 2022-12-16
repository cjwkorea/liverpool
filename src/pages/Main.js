import React from "react";
import { Card,} from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cup from "./Cup";
import Log from "./Log";
import Top from "./Top";
import List from "./List";

const Main = () => {
  return (
    <div className="App">
      <Top/>
      <Card className="bg-dark text-white">
        <Card.Img
          variant="top"
          src="./img/img.png"
          style={{ width: "10rem", margin: "auto" }}
        />
         <Card.Body>
          <Card.Text>
            <h1>Welcome ⚽ LiverPool</h1>
          </Card.Text>
        </Card.Body>
      </Card>
      <List/>
      <Cup/>
      <Card.Img
        variant="top"
        src="./img/캡처1.PNG"
        style={{ width: "120rem", margin: "auto" }}
      />
      <Card.Img
        variant="top"
        src="./img/캡처2.PNG"
        style={{ width: "120rem", margin: "auto" }}
      />

      <Log/>
    </div>
  );
};

export default Main;
