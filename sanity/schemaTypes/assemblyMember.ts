import { defineField, defineType } from "sanity";

export const assemblyMember = defineType({
  name: "assemblymember",
  title: "Assembly Member",
  type: "document",
  fields: [
    defineField({
      name: "page_id",
      title: "Page ID",
      type: "string",
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "submetro",
      title: "Submetro",
      type: "reference",
      to:[{type: "submetro"}]
    }),
    defineField({
      name: "area",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "reference",
      to: [{ type: "imageAsset" }], 
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
