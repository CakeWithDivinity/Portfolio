import { defineCollection, z } from "astro:content";

const workplaceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    jobTitle: z.string(),
    companyName: z.string(),
    companyUrl: z.string(),
    from: z.date(),
    to: z.date().optional(),
  }),
});

export const collections = {
  workplaces: workplaceCollection,
};
