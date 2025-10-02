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
export const categoryService = {
    createCategoryService,
    getAllCategoryService,
    getACategoryService
};
//# sourceMappingURL=category.service.js.map