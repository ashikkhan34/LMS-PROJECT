import { model, Schema } from "mongoose";
const seminarSchema = new Schema({
    id: { type: Number, required: true },
    speaker: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    image: { type: String, required: true },
});
const seminarModel = model('seminarEvents', seminarSchema);
//# sourceMappingURL=seminar.model.js.map