export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name (First Last)",
      type: "string",
    },
    {
      name: "location",
      title: "Location (City, State)",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
