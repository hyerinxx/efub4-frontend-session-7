import type Post from "@/models/post";
import { WithId } from "mongodb";
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
        <Link href={`/detail/${item._id}`}>
          <li key={index}>
            <h4>{item.title}</h4>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default List;
