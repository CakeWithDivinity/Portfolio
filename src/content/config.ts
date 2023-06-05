import { defineCollection, z } from "astro:content";

const workplaceCollection = defineCollection({
  type: "content",
  schema: z.object({
    jobTitle: z.string(),
    companyName: z.string(),
    companyUrl: z.string(),
    from: z.date(),
    to: z.date().optional(),
  }),
});

const educationCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    instituteName: z.string(),
    instituteUrl: z.string(),
    from: z.date(),
    to: z.date(),
  }),
});

export const collections = {
  workplaces: workplaceCollection,
  education: educationCollection,
};
