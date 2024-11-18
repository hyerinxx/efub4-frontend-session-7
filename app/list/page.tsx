import type Post from "@/models/post";
import axios from "axios";

const List = async () => {
  const readPostList = async (): Promise<Post[]> => {
    try {
      const response = await axios.get("http://localhost:3000/api/post/readList");
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const posts = await readPostList();

  return (
    <ul>
      {posts.map((item, index) => (
        <li key={index}>
          <h4>{item.title}</h4>
        </li>
      ))}
    </ul>
  );
};

export default List;
