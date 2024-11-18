"use client";

import type Post from "@/models/post";
import axios from "axios";
import { useState, useEffect } from "react";

const List = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const readPostList = async () => {
    try {
      const response = await axios.get("/api/post/readList");
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    readPostList();
  }, []);

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
