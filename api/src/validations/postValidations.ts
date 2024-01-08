import z from "zod";

export const createPostValidation = z.object({
    title: z.string().min(8),
    description: z.string().min(8),
    content: z.string().min(25),
});

export const updatePostValidation = z.object({
    title: z.string().min(8),
    description: z.string().min(8),
    content: z.string().min(25),
});
