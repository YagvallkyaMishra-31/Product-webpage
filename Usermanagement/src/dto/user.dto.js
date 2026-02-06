import { z } from "zod";

export const createUserDTO = z.object({
    name: z.string().min(2),
    email: z.string().email(),
});

export const updateUserDTO = z.object({
    name: z.string().min(2).optional(),
    email: z.string().email().optional(),
});
