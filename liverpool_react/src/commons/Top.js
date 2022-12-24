import React from 'react';
import { Anchor, Button, Container, Dropdown, Form, Image, InputGroup, Modal, Nav, Navbar, NavDropdown, Offcanvas, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img from "../assets/img/img.png";
import { useAuthStore } from '../stores/RootStore';

const Top= () => {
  const Navigate = useNavigate();
  const authStore = useAuthStore();
  return (
    <div>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <h1
            type="Button"
            style={{color:"red"}}
            onClick={() => Navigate("/")}>LFC</h1>
          </Navbar.Brand>
          <Nav className="me-auto">
         
            <Button
              className="rounded-pill"
              style={{backgroundColor:"#007B5E"}}
              onClick={() =>
                window.open("https://www.liverpoolfc.com", "_blank")
              }
            >
              Home
            </Button>
            &nbsp;
            <Button
              className="rounded-pill"
              style={{backgroundColor:"#007B5E"}}
              onClick={() => Navigate("/Member")}
            >
              Member
            </Button>
            &nbsp;
            <Button
              className="rounded-pill"
              style={{backgroundColor:"#007B5E"}}
              onClick={() => Navigate("/History")}
            >
              History
            </Button>
           
          </Nav>
            <div>
            <InputGroup>
              <div>
                {authStore.loginUser ? (
                  <Button
                    className="rounded-pill btn-dark px-3"
                    type="Button"
                    onClick={() => Navigate("/Write")}
                  >
                    새 글 작성
                  </Button>
                ) : (
                  <Button
                    className="rounded-pill btn-dark px-3"
                    type="Button"
                    onClick={() => Navigate("/login")}
                  >
                    로그인
                  </Button>
                )}
              </div>
              <Row className="align-content-center ms-3">
                {authStore.loginUser ? (
                  <NavDropdown title={<Image src={img} width="25" />}>
                    <div className="dropdown-item d-md-none">
                      <Form className="d-flex">
                        <Form.Control type="text" placeholder="search" />
                        <Button className="btn" type="Button">
                          <Image src={img} width={"20"} />
                        </Button>
                      </Form>
                    
                    </div>
                    <Dropdown.Divider className="d-md-none" />
                    <Anchor
                      href="#"
                      onClick={() => {
                        authStore.setLoginUser(null);
                        Navigate("/", { replace: true });
                      }}
                      className="dropdown-item"
                    >
                      로그아웃
                    </Anchor>
                  </NavDropdown>
                ) : (
                  ""
                )}
                  
              </Row>
            </InputGroup>
          </div>
        </Container>
      </Navbar>
      </div>
  )
}

export default Top