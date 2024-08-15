import { defineType, defineField } from "sanity";
export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Project description",
      type: "string",
    }),
    defineField({
      name: "gallery",
      type: "array",
      description: "Upload all images of the project",
      of: [
        {
          type: "image",
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
