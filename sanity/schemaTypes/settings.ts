import { defineType, defineField } from "sanity";

export const settings = defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    defineField({
      name: "settingname",
      title: "Setting Name",
      type: "string",
      validation: (Rule) => Rule.required().max(255),
    }),
    defineField({
      name: "settingvalue",
      title: "Setting Value",
      type: "text",
    }),
  ],
});
