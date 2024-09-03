import { groq, type QueryParams } from "next-sanity";
import { client } from "./lib/client";

type SanityBase = {
  _createdAt?: string;
  _id?: string;
  _rev?: string;
  _updatedAt?: string;
};

interface Post extends SanityBase {
  _type: "post";
  page_id: string;
  title: string;
  category: string;
  body: string;
}

export async function createContent(content: Post) {
  return client.create(content);
}
