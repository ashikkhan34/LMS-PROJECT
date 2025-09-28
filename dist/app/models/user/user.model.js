import { model, Schema } from "mongoose";
const userSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    id: { type: String, required: true },
    password: { type: String, required: true },
    isPasswordChange: { type: Boolean, required: true },
    role: { type: String, required: true, enum: ['student', 'member', 'admin'] },
    status: { type: String, enum: ['active', 'blocked', 'pending'] },
    isDeleted: { type: Boolean, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
});
const userModel = model('Users', userSchema);
//# sourceMappingURL=user.model.js.map