import {z} from "zod";

export const userSchema = z.object({
    username: z.string().min(1, {
        message: "Please enter username"
    }),
    password: z.string().min(1, {
        message: "Please enter password"
    }),
    role: z.enum(["USER", "ADMIN"], {
        required_error: "You need to select a role.",
    }),
})

export type SignUpFormUser = z.infer<typeof userSchema>;

export type User = Pick<z.infer<typeof userSchema>, "username" | "role">;