import { defineCollection, z } from "astro:content";
const rooms = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      type: z.string(),
      image: image(),
      gallery: z.string(),
      description: z.string(),
      guests: z.string(),
      dormitories: z.string(),
      beds: z.string(),
      prices: z.object({
        peak: z.string(),
        regular: z.string(),
        special: z.string(),
      }),
      amenities: z.object({
        bathrooms: z.boolean(),
        bedrooms: z.boolean(),
        parking: z.boolean(),
        kitchen: z.boolean(),
        wifi: z.boolean(),
        tv: z.boolean(),
        petFriendly: z.boolean(),
        coffe: z.boolean(),
      }),
    }),
});

export const collections = { rooms };
