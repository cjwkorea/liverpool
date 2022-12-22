import React, { useMemo } from "react";
import { Card, Col, Image, InputGroup, Row } from "react-bootstrap";
import Noimage from "../assets/img/no-image.png";
import { useNavigate } from "react-router-dom";

const MyCard = ({ post }) => {
  const navigate = useNavigate();


  const CardContainer = useMemo(() => {
    return {
      height: "150px",
      overflow: "hidden",
    };
  }, []);

  const CardImg = useMemo(() => {
    return {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
    };
  }, []);

  const CardText = useMemo(() => {
    return {
      display: "-webkit-box",
      wordWrap: "break-word",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
      height: "70px",
    };
  }, []);


  const Title = useMemo(() => {
    return {
      cursor: "pointer",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    };
  }, []);

  return (
    <Col>
      <Card className="m-3">
        <div style={CardContainer}>
          <Card.Img
            variant="top"
            src={post.thumbnail ? post.thumbnail : Noimage}
            style={CardImg}
            alt="..."
          />
        </div>
        <Card.Body>
          <Card.Title
            onClick={() => navigate(`/post/${post.idx}`)}
            style={Title}
          >👍
            {post.title}
          </Card.Title>
          <Card.Text style={CardText}>{post.summary}</Card.Text>
          <small className="text-muted">{post.createDate}</small>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <InputGroup>
                <Image
                  src={post.writer.profileImage}
                  alt="profile"
                  className="ratio ratio-1x1 rounded-circle me-2"
                  style={{ width: "24px", height: "24px" }}
                />
                <strong>{post.writer.id}</strong>
              </InputGroup>
            </Col>
            <Col className="col-auto">
              <InputGroup>
              👍
                <span className="mx-2 fs-6 text-black-50 fw-light">
                  {post.likeCount}
                </span>
              </InputGroup>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default MyCard;
