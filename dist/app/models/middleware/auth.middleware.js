import jwt from 'jsonwebtoken';
// 🔹 Token verify middleware
export const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token)
        return res.status(401).json({ message: 'Unauthorized' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch {
        return res.status(401).json({ message: 'Invalid token' });
    }
};
// 🔹 Role-based authorization (admin/user )
export const authorization = (...roles) => {
    (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Forbidden: You have no access' });
        }
        next();
    };
};
//# sourceMappingURL=auth.middleware.js.map