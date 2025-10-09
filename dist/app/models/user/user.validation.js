import z from "zod";
export const userValidationSchema = z.object({
    id: z.string().length(5, "User ID must be exactly 5 characters"),
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[a-z]/, "Must contain at least one lowercase letter")
        .regex(/[A-Z]/, "Must contain at least one uppercase letter")
        .regex(/\d/, "Must contain at least one number")
        .regex(/[\W_]/, "Must contain at least one special character"),
    contactNo: z.string().optional(),
    isPasswordChange: z.boolean().optional(),
    role: z.enum(["student", "mentor", "admin"]),
    status: z.enum(["active", "blocked", "pending"]).default("active"),
    isDeleted: z.boolean().default(false),
});
//# sourceMappingURL=user.validation.js.map