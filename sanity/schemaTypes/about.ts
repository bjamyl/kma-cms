import { defineField, defineType } from "sanity";
export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "page_id",
      title: "Page ID",
      type: "string",
    }),
    defineField({
      name: "brief",
      type: "blockContent",
    }),
    defineField({
      name: "presiding",
      title: "Presiding Member",
      description: "Select the current presiding member",
      type: "reference", // Use reference type instead of string
      to: [{ type: "assemblymember" }], // Specify the document type to reference
    }),
    defineField({
      name: "assemblymembers",
      title: "Assembly Members",
      description: "Add all assembly members",
      type: "array",
      of: [{ type: "reference", to: { type: "assemblymember" } }],
    }),
    defineField({
      name: "mission",
      title: "Mission and Vision statement",
      type: "string",
    }),
    defineField({
      name: "function",
      title: "Function",
      type: "string",
    }),
    defineField({
      name: "map",
      title: "Location map",
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
