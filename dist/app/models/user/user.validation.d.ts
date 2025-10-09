import z from "zod";
export declare const userValidationSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    contactNo: z.ZodOptional<z.ZodString>;
    isPasswordChange: z.ZodOptional<z.ZodBoolean>;
    role: z.ZodEnum<{
        mentor: "mentor";
        student: "student";
        admin: "admin";
    }>;
    status: z.ZodDefault<z.ZodEnum<{
        active: "active";
        blocked: "blocked";
        pending: "pending";
    }>>;
    isDeleted: z.ZodDefault<z.ZodBoolean>;
}, z.z.core.$strip>;
//# sourceMappingURL=user.validation.d.ts.map