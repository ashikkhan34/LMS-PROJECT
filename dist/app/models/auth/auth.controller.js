import { authService } from "./auth.service.js";
export const authController = {
    //register controller
    async register(req, res) {
        try {
            const result = await authService.register(req.body);
            res.status(201).json({
                success: true,
                message: 'User register successfully',
                data: result
            });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    },
    //login controller
    async login(req, res) {
        try {
            const result = await authService.login(req.body);
            res.status(200).json({
                success: true,
                message: 'login successful',
                data: result,
            });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
};
//# sourceMappingURL=auth.controller.js.map