import { model, Schema } from "mongoose";
const studentSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    id: { type: String, required: true },
    name: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    address: { type: String, required: true },
    guardian: { type: String, required: true },
    profileImg: { type: String, required: true },
    courseName: { type: String, required: true },
    cratedAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
});
const studentModel = model('Students', studentSchema);
//# sourceMappingURL=student.model.js.map