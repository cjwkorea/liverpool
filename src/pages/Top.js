import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Top= () => {
  const Navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <h1 onClick={() => Navigate("/")}>LFC</h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            <button
              className="bg-danger text-white"
              onClick={() =>
                window.open("https://www.liverpoolfc.com", "_blank")
              }
            >
              Home
            </button>
            <button
              className="bg-danger text-white"
              onClick={() => Navigate("/Member")}
            >
              Member
            </button>
            <button
              className="bg-danger text-white"
              onClick={() => Navigate("/History")}
            >
              History
            </button>
            <button
              className="bg-danger text-white"
              onClick={() => Navigate("/Write")}
            >
              글 작성
            </button>
          </Nav>
          <button
              className="bg-danger text-white"
              onClick={() => Navigate("/Login")}
            >
              로그인
            </button>
            <button
              className="bg-danger text-white"
              onClick={() => Navigate("/Register")}
            >
              회원가입
            </button>
        </Container>
      </Navbar>
  )
}

export default Top