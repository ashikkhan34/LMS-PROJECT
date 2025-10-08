import { model, Schema } from "mongoose";
const studentSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    gender: { type: String, required: true, enum: ['male', 'female', 'other'] },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    address: { type: String, required: true },
    guardian: { type: String, required: true },
    profileImg: { type: String, required: true },
    courseName: { type: String, required: true },
}, { timestamps: true });
export const studentModel = model('Students', studentSchema);
//# sourceMappingURL=student.model.js.map