import { categoryService } from "./category.service.js";
const createCategoryController = async (req, res) => {
    try {
        const category = await categoryService.createCategoryService(req.body);
        res.status(201).json({
            success: true,
            message: 'category data add',
            data: category
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getAllCategoryController = async (req, res) => {
    try {
        const allCategory = await categoryService.getAllCategoryService();
        res.status(201).json({
            success: true,
            message: 'get all category data',
            data: allCategory
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getACategoryController = async (req, res) => {
    try {
        const id = req.params.id;
        const aCategory = await categoryService.getACategoryService(id);
        res.status(201).json({
            success: true,
            message: 'get all category data',
            data: aCategory
        });
    }
    catch (err) {
        console.log(err);
    }
};
export const categoryController = {
    createCategoryController,
    getAllCategoryController,
    getACategoryController
};
//# sourceMappingURL=category.controller.js.map