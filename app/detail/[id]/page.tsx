import type Post from "@/models/post";

const Detail = () => {
  const post: Post = { title: "", content: "" };

  return (
    <div>
      <h5>상세 페이지</h5>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default Detail;
