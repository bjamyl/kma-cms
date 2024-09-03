"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { content } from "@/data";
import { createContent } from "@/sanity/sanity.query";

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

export default function Create() {
  const handleClick = async () => {
    try {
      // Loop through each item in the content array and send a POST request
      for (const item of content) {
        const newPost: Post = {
          _type: "post",
          body: item.pcontent,
          category: item.categoryid.toString(),
          page_id: item.content_id.toString(),
          title: item.ptitle,
        };
        await createContent(newPost);
        console.log(`Created content with ID: ${item.content_id}`);
      }
      console.log("All content created successfully!");
    } catch (error) {
      console.error("Error creating content:", error);
    }
  };

  return (
    <div>
      <Button onClick={handleClick}>Run Script</Button>
    </div>
  );
}
