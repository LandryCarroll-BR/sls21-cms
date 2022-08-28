export default {
  name: "testimonialSection",
  title: "Testimonial Section",
  type: "document",
  fields: [
    {
      name: "column1",
      title: "Column 1",
      type: "array",
      of: [{ type: "reference", to: { type: "testimonal" } }],
    },
    {
      name: "column2",
      title: "Column 2",
      type: "array",
      of: [{ type: "reference", to: { type: "testimonal" } }],
    },
    {
      name: "column3",
      title: "Column 3",
      type: "array",
      of: [{ type: "reference", to: { type: "testimonal" } }],
    },
  ],
};
