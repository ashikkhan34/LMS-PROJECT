import { categoryModel } from "./category.model.js";
const createCategoryService = async (payLoad) => {
    const category = await categoryModel.create(payLoad);
    return category;
};
const getAllCategoryService = async () => {
    const allCategory = await categoryModel.find();
    return allCategory;
};
const getACategoryService = async (id) => {
    const category = await categoryModel.findById(id);
    return category;
};
const updateCategoryService = async (id, payLoad) => {
    return await categoryModel.findByIdAndUpdate(id, { $set: payLoad }, { new: true, runValidators: true });
};
const deleteCategoryService = async (id) => {
    return await categoryModel.findByIdAndDelete(id);
};
export const categoryService = {
    createCategoryService,
    getAllCategoryService,
    getACategoryService,
    updateCategoryService,
    deleteCategoryService
};
//# sourceMappingURL=category.service.js.map