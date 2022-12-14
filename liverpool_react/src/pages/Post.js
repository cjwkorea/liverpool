import { Viewer } from "@toast-ui/react-editor";
import { useEffect, useState } from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Log from "../commons/Log";
import Top from "../commons/Top";
import { useAuthStore } from "../stores/RootStore";
import { customAxios } from "../utils/CustomAxios";
import tag1 from "../assets/img/tag1.PNG";
import tag2 from "../assets/img/tag2.PNG";
import img from "../assets/img/img.png";

const Post = () => {
  const [post, setPost] = useState(null);
  const { postIdx } = useParams();
  const authStore = useAuthStore();

  const getPost = () => {
    customAxios
      .publicAxios({
        method: `get`,
        url: `/api/v1/posts/${postIdx}`,
      })
      .then((response) => {
        if (response.status === 200) {
          setPost(response.data.content);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        if (error?.response?.data?.detail != null) {
          alert(JSON.stringify(error.response.data.detail));
        } else if (error?.response?.data?.message != null) {
          alert(error.response.data.message);
        } else {
          alert("오류가 발생했습니다. 관리자에게 문의하세요.");
        }
      })
      .finally(() => {});
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="bg-white">
    <Top />
      <Container className="ps-5 pe-5 my-5">
        <h1>제목</h1>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span>
              <Image
                src={img}
                className="ratio ratio-1x1 rounded-circle me-2"
                style={{ width: "20px", height: "20px" }}
                alt="profile"
              />
              <strong>{post?.writer.id}</strong>
            </span>
            <span className="text-black-50 fw-light ms-3">
              {post?.createDate}
            </span>
          </div>
          <button id="likeButton" className="btn">
          👍
            <span id="likeCount" className="mx-2 fs-6 text-black-50 fw-light">
              {post?.likeCount}
            </span>
          </button>
          {authStore.loginUser?.idx != null &&
          authStore.loginUser?.idx === post?.writer.idx ? (
            <div>
              <Button variant="outline-success" type="button">
                수정
              </Button>
              <Button variant="outline-danger" className="ms-2" type="button">
                삭제
              </Button>
            </div>
          ) : null}
        </div>
        {post ? <Viewer initialValue={post.content} /> : null}
      </Container>
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

export default Post;
