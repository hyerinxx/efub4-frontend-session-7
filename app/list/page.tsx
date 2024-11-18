"use client";

import type Post from "@/models/post";
import { useState } from "react";

const List = () => {
  const [posts, setPosts] = useState<Post[]>([]);

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
