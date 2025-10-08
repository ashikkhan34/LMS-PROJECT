import { model, Schema } from "mongoose";
const userSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contactNo: { type: String },
    isPasswordChange: { type: Boolean, required: true, default: false },
    role: {
        type: String,
        required: true,
        enum: ["student", "mentor", "admin"],
    },
    status: {
        type: String,
        enum: ["active", "blocked", "pending"],
        default: "active",
    },
    isDeleted: { type: Boolean, required: true, default: false },
}, { timestamps: true });
export const userModel = model("Users", userSchema);
//# sourceMappingURL=user.model.js.map