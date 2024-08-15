import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "event",
      title: "Event title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Event description",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Event date",
      type: "date",
    }),
  ],
});
