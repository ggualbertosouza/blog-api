import z from "zod";

// update
export const updateGetSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
    role: z.string().optional(),
});

