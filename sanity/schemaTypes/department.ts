import { defineField, defineType } from "sanity";

export const department = defineType({
  name: "department",
  title: "Department",
  type: "document",
  fields: [
    defineField({
      name: "page_id",
      title: "Page ID",
      type: "string",
    }),
    defineField({
      name: "departmentname",
      title: "Department name",
      type: "string",
    }),
    defineField({
      name: "departmenthead",
      title: "Department Head",
      type: "reference",
      to: [{ type: "departmenthead" }],
    }),
  ],
});
