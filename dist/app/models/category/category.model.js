import { model, Schema } from "mongoose";
const categorySchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    slug: { type: String, required: true },
    icon: { type: String, required: true },
});
export const categoryModel = model('category', categorySchema);
//# sourceMappingURL=category.model.js.map