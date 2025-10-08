import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../user/user.model.js";
export const authService = {
    //register new user
    async register(payLoad) {
        const { id, name, email, password, role } = payLoad;
        // Security: prevent creating admin from register
        if (role === "admin")
            throw new Error("Cannot create admin via register");
        const existingUser = await userModel.findOne({ email });
        if (existingUser)
            throw new Error("user already exists");
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({
            id,
            name,
            email,
            password: hashedPassword,
            role: role || "customer",
        });
        return newUser;
    },
    //login user
    async login(payLoad) {
        const { email, password } = payLoad;
        const user = await userModel.findOne({ email });
        if (!user)
            throw new Error("user not found");
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid)
            throw new Error("Invalid password");
        const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
        return { token, user };
    },
};
//# sourceMappingURL=auth.service.js.map