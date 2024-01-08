import z from "zod";

export const createCommentValidation = z.object({
    content: z.string().min(25),
});


export const updateCommentValidation = z.object({
    content: z.string().min(25),
});
