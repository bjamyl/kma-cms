import { defineField, defineType } from "sanity";

export const link = defineType({
  name: "link",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "link",
      type: "string",
    }),
    defineField({
        name: 'main',
        type: 'array',
        of: [{type: 'reference', to: {type: 'menu'}}],
      }),
  ],
});
