import { defineType, defineField } from "sanity";

export const imageAsset = defineType({
  name: "imageAsset",
  title: "Image Asset",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "alt",
      title: "Alternative Text",
      type: "string",
    }),
  ],
});
