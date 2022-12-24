import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "../styles/App.css";
import Top from "../commons/Top";
import First from "../assets/img/1976.jpg"
import Second from "../assets/img/1977.jpg"
import Third from "../assets/img/1980.jpg"
import Fourth from "../assets/img/1983.jpg"
import Fifth from "../assets/img/2004.jpg"
import Sixth from "../assets/img/2018.jpg"
import tag1 from "../assets/img/tag1.PNG";
import tag2 from "../assets/img/tag2.PNG";
import Log from "../commons/Log";

const History = () => {
  return (
    <div>
      <Top />

      <Carousel fade>
        <Carousel.Item>
          <Image className="img" src={First} alt="Second slide" />

          <Carousel.Caption>
            <Card>
              <Card.Body>
                <h1 style={{ color: "#000000" }}>
                  <strong> 첫번 째 UEFA 컵 🏆 1976-1977 </strong>
                </h1>
                <h2 style={{ color: "#000000" }}>
                  5월 9일 FC 브뤼헤를 상대로 4-3 승리를 거두어 첫번 째 UEFA 컵
                  우승을 차지.
                </h2>
              </Card.Body>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image className="img" src={Second} alt="Third slide" />

          <Carousel.Caption>
            <Card>
              <Card.Body>
                <h1 style={{ color: "#000000" }}>
                  <strong> 두번 째 UEFA 컵 🏆 1977-1978 </strong>
                </h1>
                <h2 style={{ color: "#000000" }}>
                  5월 25일 뮌헨글라트바흐를 상대로 3-1 승리를 거두며 두번 째
                  UEFA 컵 우승을 차지.
                </h2>
              </Card.Body>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="img" src={Third} alt="Third slide" />

          <Carousel.Caption>
            <Card>
              <Card.Body>
                <h1 style={{ color: "#000000" }}>
                  <strong> 세번 째 UEFA 컵 🏆 1980-1981 </strong>
                </h1>
                <h2 style={{ color: "#000000" }}>
                  5월 27일 레알마드리드를 상대로 1-0 승리를 거두어 세번 째 UEFA
                  컵 우승을 차지.
                </h2>
              </Card.Body>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="img"
            src={Fourth}
            alt="Third slide"
          />

          <Carousel.Caption>
            <Card>
              <Card.Body>
                <h1 style={{ color: "#000000" }}>
                  <strong> 네번 째 UEFA 컵 🏆 1983-1984 </strong>
                </h1>
                <h2 style={{ color: "#000000" }}>
                  5월 30일 AS로마를 상대로 승부차기 승리를 거두어 네번 째 UEFA
                  컵 우승을 차지.
                </h2>
              </Card.Body>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="img"
            src={Fifth}
            alt="Third slide"
          />

          <Carousel.Caption>
            <Card>
              <Card.Body>
                <h1 style={{ color: "#000000" }}>
                  <strong> 다섯번 째 UEFA 컵 🏆 2004-2005 </strong>
                </h1>
                <h2 style={{ color: "#000000" }}>
                  5월 25일 AS밀란을 상대로 승부차기 승리를 거두어 다섯번 째 UEFA
                  컵 우승을 차지.
                </h2>
              </Card.Body>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="img" src={Sixth} alt="Third slide" />

          <Carousel.Caption>
            <Card>
              <Card.Body>
                <h1 style={{ color: "#000000" }}>
                  <strong> 여섯번 째 UEFA 컵 🏆 2018-2019 </strong>
                </h1>
                <h2 style={{ color: "#000000" }}>
                  6월 1일 토트넘을 상대로 2-0 승리를 거두어 여섯번 째 UEFA 컵
                  우승을 차지.
                </h2>
              </Card.Body>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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

export default History;
