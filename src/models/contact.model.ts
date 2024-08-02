import {z} from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, {message: "Please enter name"}),
    phoneNumber: z.coerce.number().min(1, {message: "Please enter phone number"}),
})

export type Contact = z.infer<typeof contactSchema>;