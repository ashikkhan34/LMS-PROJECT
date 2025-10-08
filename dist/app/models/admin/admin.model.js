import { model, Schema } from "mongoose";
const adminSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    gender: { type: String, required: true, enum: ['male', 'female', 'other'] },
    dateOfBirth: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    address: { type: String, required: true },
    profileImg: { type: String, required: true },
    managementDepartment: { type: String, required: true },
    status: { type: String, required: true, enum: ['active', 'inactive', 'pending'] },
}, { timestamps: true });
export const adminModel = model('Admin', adminSchema);
//# sourceMappingURL=admin.model.js.map