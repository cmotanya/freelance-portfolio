import z from "zod";

export const inputSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .email({ message: "Enter a valid email" })
    .trim()
    .min(1, { message: "Email is required" }),
  message: z.string().min(3, { message: "Please leave a message" }),
});

export type InputFormData = z.infer<typeof inputSchema>;
