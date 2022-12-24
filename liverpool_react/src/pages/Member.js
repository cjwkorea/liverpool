import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card, Image } from "react-bootstrap";
import "../styles/App.css";
import "../styles/Member.css";
import Top from "../commons/Top";
import Roberto from "../assets/img/1.jpg"
import Salah from "../assets/img/2.jpg"
import Diaz from "../assets/img/3.jpg"
import Nunez from "../assets/img/4.jpg"
import img from "../assets/img/img.png"
import tag1 from "../assets/img/tag1.PNG";
import tag2 from "../assets/img/tag2.PNG";
import Log from "../commons/Log";

const Member = () => {
  return (
    <div className="Member">
      <Top />
      <Card className="bg-dark text-white">
        <Card.Img
          variant="top"
          src={img}
          style={{ width: "10rem", margin: "auto" }}
        />
        <Card.Body>
          <Card.Text>
            <h1 style={{ color: "red", textAlign: "center" }}>OUR TEAM</h1>
          </Card.Text>
        </Card.Body>
      </Card>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-3">
          <div
            class="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                      <Image
                        class=" img-fluid"
                        src={Roberto}
                        alt="card image"
                      />
                    </p>
                    <h4 class="card-title">
                      {" "}
                      <strong>호베르투 피르미누</strong>
                    </h4>
                    <p class="card-text">
                      <strong>Roberto Firmino</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div class="backside">
                <div class="card">
                  <div class="card-body text-center mt-4">
                    <h4 class="card-title">
                      <strong>호베르투 피르미누</strong>
                    </h4>
                    <p class="card-text">출생: 1991년 10월 2일</p>
                    <p>국적: 브라질</p>
                    <p>키: 181cm/ 체중: 76kg</p>
                    <p>포지션: 중앙 공격수</p>
                    
                      <a href="https://namu.wiki/w/%ED%98%B8%EB%B2%A0%EB%A5%B4%ED%88%AC%20%ED%94%BC%EB%A5%B4%EB%AF%B8%EB%88%84">
                        📰
                      </a>
                   

                    <ul class="list-inline"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <div
            class="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                      <Image
                        class=" img-fluid"
                        src={Salah}
                        alt="card image"
                      />
                    </p>
                    <h4 class="card-title">
                      <strong>모하메드 살라</strong>
                    </h4>
                    <p class="card-text">
                      <strong>Mohamed Salah</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div class="backside">
                <div class="card">
                  <div class="card-body text-center mt-4">
                    <h4 class="card-title">
                      <strong>모하메드 살라</strong>
                    </h4>
                    <p class="card-text">출생: 1992년 6월 15일</p>
                    <p>국적: 이집트</p>
                    <p>키: 175cm/ 체중: 71kg</p>
                    <p>포지션: 윙어, 중앙 공격수</p>
                   
                      <a href="https://namu.wiki/w/%EB%AA%A8%ED%95%98%EB%A9%94%EB%93%9C%20%EC%82%B4%EB%9D%BC">
                        📰{" "}
                      </a>
                    
                    <ul class="list-inline"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <div
            class="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                      <Image
                        class=" img-fluid"
                        src={Diaz}
                        alt="card image"
                      />
                    </p>
                    <h4 class="card-title">
                      <strong>루이스 디아스</strong>
                    </h4>
                    <p class="card-text">
                      <strong>Luis Diaz</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div class="backside">
                <div class="card">
                  <div class="card-body text-center mt-4">
                    <h4 class="card-title">
                      <strong>루이스 디아스</strong>
                    </h4>
                    <p class="card-text">출생: 1997년 1월 13일</p>
                    <p>국적: 콜롬비아</p>
                    <p>키: 180cm/ 체중: 73kg</p>
                    <p>포지션: 윙어</p>
                 
                      <a href="https://namu.wiki/w/%EB%A3%A8%EC%9D%B4%EC%8A%A4%20%EB%94%94%EC%95%84%EC%8A%A4">
                        📰
                      </a>
                  
                    <ul class="list-inline"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <div
            class="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                      <Image
                        class=" img-fluid"
                        src={Nunez}
                        alt="card image"
                      />
                    </p>
                    <h4 class="card-title">
                      <strong>다르윈 누녜스</strong>
                    </h4>
                    <p class="card-text">
                      <strong>Darwin Núñez</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div class="backside">
                <div class="card">
                  <div class="card-body text-center mt-4">
                    <h4 class="card-title">
                      <strong>다르윈 누녜스</strong>
                    </h4>
                    <p class="card-text">출생: 1999년 6월 24일</p>
                    <p>국적: 우루과이</p>
                    <p>키: 187cm/ 체중: 81kg</p>
                    <p>포지션: 스트라이커, 윙어</p>
                 
                      <a href="https://namu.wiki/w/%EB%8B%A4%EB%A5%B4%EC%9C%88%20%EB%88%84%EB%85%9C%EC%8A%A4">
                        📰{" "}
                      </a>
                    
                    <ul class="list-inline"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
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

export default Member;
