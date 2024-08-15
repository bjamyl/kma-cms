import { defineField, defineType } from "sanity";

export const menuCategory = defineType({
  name: "menu",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
  ],
});
