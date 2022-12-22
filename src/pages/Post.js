import { Viewer } from "@toast-ui/react-editor";
import { useEffect, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../RootStore";
import { customAxios } from "../CustomAxios";

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
      <Container className="ps-5 pe-5 my-5">
        <h1>제목</h1>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span>
              <Image
                src={post?.writer.profileImage}
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
  );
};

export default Post;
