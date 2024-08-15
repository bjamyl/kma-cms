import { defineField, defineType } from "sanity";
export const submetro = defineType({
  name: "submetro",
  title: "Submetro",
  type: "document",
  fields: [
    defineField({
      name: "metro",
      title: "Sub-metro name",
      type: "string",
    }),
    defineField({
      name: "director",
      title: "Sub-metro Director",
      type: "reference",
      to: [{ type: "metrodirector" }],
    }),
    defineField({
      name: "map",
      title: "Map",
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
