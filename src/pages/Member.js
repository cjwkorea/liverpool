import React from "react";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Top from "./Top";
const Member = () => {
  const [이름, 이름변경] = useState(["피르미누", "살라", "디아즈"]);

  const [age, d] = useState([
    "1991년 10월 2일",
    "1992년 6월 15일",
    "1997년 1월 13일",
  ]);
  const [position, p] = useState(["Right-wing", "False-nine", "Left-wing"]);

  return (
    <div className="Member">
      <Top/>
      <Card className="bg-dark text-white">
        <Card.Img
          variant="top"
          src="./img/img.png"
          style={{ width: "10rem", margin: "auto" }}
        />
      </Card>
      <div className="list">
        <div id="left">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="img/1.jpg"
              style={{ height: "12rem" }}
            />
            <Card.Body>
              <h4 style={{ color: "" }}>
                {이름[0]}

                <div
                  onClick={() => {
                    const copy = [...이름];
                    copy[0] = "Roberto Firmino";
                    이름변경(copy);
                  }}
                >🌐
                </div>
              </h4>
              <Card.Text>
                <p>{age[0]}</p>
                <p>{position[1]}</p>
              </Card.Text>
              <div
                onClick={() =>
                  window.open(
                    "https://namu.wiki/w/%ED%98%B8%EB%B2%A0%EB%A5%B4%ED%88%AC%20%ED%94%BC%EB%A5%B4%EB%AF%B8%EB%88%84",
                    "_blank"
                  )
                }
              >
                ℹ
              </div>
            </Card.Body>
          </Card>
        </div>
        <div id="center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="img/2.jpg"
              style={{ height: "12rem" }}
            />
            <Card.Body>
              <h4 style={{ color: "" }}>
                {이름[1]}

                <div
                  onClick={() => {
                    const copy = [...이름];
                    copy[1] = "Mohamed Salah";
                    이름변경(copy);
                  }}
                >
                 🌐
                </div>
              </h4>
              <Card.Text>
                <p>{age[1]}</p>
                <p>{position[0]}</p>
              </Card.Text>
              <div
                onClick={() =>
                  window.open(
                    "https://namu.wiki/w/%EB%AA%A8%ED%95%98%EB%A9%94%EB%93%9C%20%EC%82%B4%EB%9D%BC",
                    "_blank"
                  )
                }
              >ℹ
              </div>
            </Card.Body>
          </Card>
        </div>
        {/* 디아스 */}
        <div id="right">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="img/3.jpg"
              style={{ height: "12rem" }}
            />
            <Card.Body>
              <h4 style={{ color: "" }}>
                {이름[2]}

                <div
                  onClick={() => {
                    const copy = [...이름];
                    copy[2] = "Luis Diaz";
                    이름변경(copy);
                  }}
                >
                 🌐
                </div>
              </h4>
              <Card.Text>
                <p>{age[2]}</p>
                <p>{position[2]}</p>
              </Card.Text>
              <div
                onClick={() =>
                  window.open(
                    "https://namu.wiki/w/%EB%A3%A8%EC%9D%B4%EC%8A%A4%20%EB%94%94%EC%95%84%EC%8A%A4",
                    "_blank"
                  )
                }
              >
                ℹ
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Member;
