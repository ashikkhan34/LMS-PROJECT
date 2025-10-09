import { model, Schema } from "mongoose";
const certificationSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    studentId: { type: String, required: true },
    courseName: { type: String, required: true },
    batchName: { type: String, required: true },
});
export const certificationModel = model('certification', certificationSchema);
//# sourceMappingURL=certification.model.js.map