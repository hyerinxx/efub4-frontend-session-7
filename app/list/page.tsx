import type Post from "@/models/post";
import type { WithId } from "mongodb";
import axios from "axios";
import Link from "next/link";

const List = async () => {
  const readPostList = async (): Promise<WithId<Post>[]> => {
    try {
      const response = await axios.get("http://localhost:3000/api/post/readList");
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const posts: WithId<Post>[] = await readPostList();

  return (
    <ul>
      {posts.map((item, index) => (
        <li key={index}>
          <Link href={`/detail/${item._id}`}>
            <h4>{item.title}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
