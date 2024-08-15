import { defineField, defineType } from "sanity";

export const assemblyMember = defineType({
  name: "assemblymember",
  title: "Assembly Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "submetro",
      type: "string",
    }),
    defineField({
      name: "area",
      type: "string",
    }),
    defineField({
      name: "image",
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
    defineField({
      name: "startDate",
      type: "datetime",
    }),
    defineField({
      name: "endDate",
      type: "datetime",
    }),
  ],
});
