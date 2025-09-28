import { model, Schema } from "mongoose";
const mentorSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    id: { type: String, required: true },
    name: { type: String, required: true },
    gender: { type: String, required: true, enum: ['male', 'female', 'other'] },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    address: { type: String, required: true },
    profileImg: { type: String, required: true },
    designation: { type: String, required: true },
    departName: { type: String, required: true },
    specialized_area: [{ type: String, required: true }],
    education_qualification: [{ type: String, required: true }],
    workExperience: [{ type: String, required: true }],
    experienceTrainedStudent: { type: String, required: true },
    reviews: { type: Number, required: true },
    bio: { type: String, required: true },
    lifeJourney: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
});
export const mentorModel = model('Mentors', mentorSchema);
//# sourceMappingURL=mentor.model.js.map