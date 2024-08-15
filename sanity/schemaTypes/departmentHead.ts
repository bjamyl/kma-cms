import { defineField, defineType } from "sanity";

export const departmentHead = defineType({
  name: "departmenthead",
  title: "Department head",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name of Department Head",
      type: "string",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
    }),
  ],
});
