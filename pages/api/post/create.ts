import type { NextApiHandler } from "next";
import type { InsertOneResult } from "mongodb";
import type Post from "@/models/post";
import { postCollection } from "@/utils/database";

const handler: NextApiHandler<InsertOneResult<Post>> = async (req, res) => {
  const result = await postCollection.insertOne(req.body);
  return res.redirect(302, "/list");
};

export default handler;
