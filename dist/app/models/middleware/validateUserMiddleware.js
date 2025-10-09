import { userValidationSchema } from "../user/user.validation.js";
export const validatedUserMiddleware = async (req, res, next) => {
    const result = userValidationSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            success: false,
            errors: result.error.format(),
        });
    }
    // validated and sanitized data
    req.body = result.data;
    next();
};
//# sourceMappingURL=validateUserMiddleware.js.map