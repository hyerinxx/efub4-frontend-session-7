import { ObjectId } from "mongodb";

interface Post {
  _id?: ObjectId;
  title: string;
  content: string;
}

export default Post;
