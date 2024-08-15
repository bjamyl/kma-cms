import { defineField, defineType } from "sanity";
export const mce = defineType({
  name: "mce",
  title: "MCE",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "status",
      title: "Status",
      description: "Select whether acting or past",
      type: "string",
      options: {
        list: [
          { title: "Acting", value: "acting" },
          { title: "Past", value: "past" },
        ],
      },
    }),
  ],
});
