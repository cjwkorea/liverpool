import React from "react";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./App.css";
const Member = () => {
  const [이름, 이름변경] = useState(["피르미누", "살라", "디아즈"]);

  const [age, d] = useState([
    "1991년 10월 2일",
    "1992년 6월 15일",
    "1997년 1월 13일",
  ]);
  const [position, p] = useState(["Right-wing", "False-nine", "Left-wing"]);
  // 이름 = 변수 보관
  // 이름변경 = state 변경도와주는 함수
  // state 사용시 html에  자동 랜더링 가능

  const [좋아요1, 좋아요변경1] = useState(0);
  const [좋아요2, 좋아요변경2] = useState(0);
  const [좋아요3, 좋아요변경3] = useState(0);
  const Navigate = useNavigate();
  return (
    <div className="Member">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h1 onClick={() => Navigate("/")}>LFC</h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            <button
              onClick={() =>
                window.open("https://www.liverpoolfc.com", "_blank")
              }
            >
              Home
            </button>
            <button onClick={() => Navigate("/Member")}>Member</button>
            <Nav.Link href="#pricing">History</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div id="logo">
        <img src="./img/img.png" />
      </div>
      <div className="list">
        <div id="left">
          <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="img/1.jpg" style={{height:"12rem"}} />
            <Card.Body>
              <h4 style={{ color: "" }}>
                {이름[0]}
                <span
                  onClick={() => {
                    좋아요변경1(좋아요1 + 1);
                  }}
                >
                  👍
                </span>{" "}
                {좋아요1}
                <button
                  onClick={() => {
                    const copy = [...이름];
                    copy[0] = "Roberto Firmino";
                    이름변경(copy);
                  }}
                >
                  {" "}
                  영문{" "}
                </button>
              </h4>
              <Card.Text>
                <p>{age[0]}</p>
                <p>{position[1]}</p>
              </Card.Text>
              <button
                onClick={() =>
                  window.open(
                    "https://namu.wiki/w/%ED%98%B8%EB%B2%A0%EB%A5%B4%ED%88%AC%20%ED%94%BC%EB%A5%B4%EB%AF%B8%EB%88%84",
                    "_blank"
                  )
                }
              >
                선수 정보
              </button>
            </Card.Body>
          </Card>
        </div>
        <div id="center">
          <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="img/2.jpg" style={{height:"12rem"}} />
            <Card.Body>
              <h4 style={{ color: "" }}>
                {이름[1]}
                <span
                  onClick={() => {
                    좋아요변경2(좋아요2 + 1);
                  }}
                >
                  👍
                </span>{" "}
                {좋아요2}
                <button
                  onClick={() => {
                    const copy = [...이름];
                    copy[1] = "Mohamed Salah";
                    이름변경(copy);
                  }}
                >
                  {" "}
                  영문{" "}
                </button>
              </h4>
              <Card.Text>
                <p>{age[1]}</p>
                <p>{position[0]}</p>
              </Card.Text>
              <button
                onClick={() =>
                  window.open(
                    "https://namu.wiki/w/%EB%AA%A8%ED%95%98%EB%A9%94%EB%93%9C%20%EC%82%B4%EB%9D%BC",
                    "_blank"
                  )
                }
              >
                선수 정보
              </button>
            </Card.Body>
          </Card>
        </div>
        {/* 디아스 */}
        <div id="right">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="img/3.jpg" style={{height:"12rem"}} />
            <Card.Body>
              <h4 style={{ color: "" }}>
                {이름[2]}
                <span
                  onClick={() => {
                    좋아요변경3(좋아요3 + 1);
                  }}
                >
                  👍
                </span>{" "}
                {좋아요3}
                <button
                  onClick={() => {
                    const copy = [...이름];
                    copy[2] = "Luis Diaz";
                    이름변경(copy);
                  }}
                >
                  {" "}
                  영문{" "}
                </button>
              </h4>
              <Card.Text>
                <p>{age[2]}</p>
                <p>{position[2]}</p>
              </Card.Text>
              <button
                onClick={() =>
                  window.open(
                    "https://namu.wiki/w/%EB%A3%A8%EC%9D%B4%EC%8A%A4%20%EB%94%94%EC%95%84%EC%8A%A4",
                    "_blank"
                  )
                }
              >
                선수 정보
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Member;
