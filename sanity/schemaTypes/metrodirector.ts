import { defineType, defineField } from "sanity";

export const metrodirector = defineType({
  name: "metrodirector",
  title: "Metro Director",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Director Name",
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "reference",
      to: [{ type: "imageAsset" }], // Reference the imageAsset schema
    }),
  ],
});
