import { defineType, defineField } from "sanity";
export const metrodirector = defineType({
  name: "metrodirector",
  title: "Metro director",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Director name",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
  ],
});
