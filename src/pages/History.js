import React from "react";
import { Card, Container, Nav, Navbar } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useNavigate } from "react-router-dom";

const History = () => {
  const Navigate = useNavigate();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
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
            <button onClick={() => Navigate("/History")}>History</button>
          </Nav>
        </Container>
      </Navbar>

      <Carousel fade>
        <Carousel.Item>
          <img className="img" src="./img/1UxSoxd.jpg" alt="Second slide" />

          <Carousel.Caption>
          <Card>
      <Card.Body><h1 style={{color:"#000000"}}><strong> 첫번 째 UEFA 컵 우승 1976-1977 </strong></h1>
            <h2 style={{color:"#000000"}}>
              5월 9일 FC 브뤼헤를 상대로 4-3 승리를 거두어 첫번 째 UEFA 컵
              우승을 차지.
            </h2></Card.Body>
    </Card>
          </Carousel.Caption>
        </Carousel.Item>
       
        <Carousel.Item>
          <img className="img" src="./img/J8U0vXy.jpg" alt="Third slide" />

          <Carousel.Caption>
            
          <Card>
      <Card.Body><h1 style={{color:"#000000"}}><strong> 두번 째 UEFA 컵 우승 1977-1978 </strong></h1>
            <h2 style={{color:"#000000"}}>
            5월 25일 뮌헨글라트바흐를 상대로 3-1 승리를 거두며 두번 째 UEFA 컵 우승을 차지.
            </h2></Card.Body>
    </Card>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src="./img/BXWXybb.jpg" alt="Third slide" />

          <Carousel.Caption>
          <Card>
      <Card.Body><h1 style={{color:"#000000"}}><strong> 세번 째 UEFA 컵 우승 1980-1981 </strong></h1>
            <h2 style={{color:"#000000"}}>
            5월 27일 레알마드리드를 상대로 1-0 승리를 거두어 세번 째 UEFA 컵 우승을 차지.
            </h2></Card.Body>
    </Card>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src="./img/E8QbI2UXsAYIQoF.jpg" alt="Third slide" />

          <Carousel.Caption>
          <Card>
      <Card.Body><h1 style={{color:"#000000"}}><strong> 네번 째 UEFA 컵 우승 1983-1984 </strong></h1>
            <h2 style={{color:"#000000"}}>
            5월 30일 AS로마를 상대로 승부차기 승리를 거두어 네번 째 UEFA 컵 우승을 차지.
            </h2></Card.Body>
    </Card>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src="./img/9982CB425C74424D09.jpg" alt="Third slide" />

          <Carousel.Caption>
          <Card>
      <Card.Body><h1 style={{color:"#000000"}}><strong> 다섯번 째 UEFA 컵 우승 2004-2005 </strong></h1>
            <h2 style={{color:"#000000"}}>
            5월 25일 AS밀란을 상대로 승부차기 승리를 거두어 다섯번 째 UEFA 컵 우승을 차지.
            </h2></Card.Body>
    </Card>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src="./img/9gp34WA.jpg" alt="Third slide" />

          <Carousel.Caption>
          <Card>
      <Card.Body><h1 style={{color:"#000000"}}><strong> 여섯번 째 UEFA 컵 우승 20018-2019 </strong></h1>
            <h2 style={{color:"#000000"}}>
            6월 1일 토트넘을 상대로 2-0 승리를 거두어 여섯번 째 UEFA 컵 우승을 차지.
            </h2></Card.Body>
    </Card>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default History;
