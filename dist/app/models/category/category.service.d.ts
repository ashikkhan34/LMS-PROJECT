import type { ICategory } from "./category.interface.js";
export declare const categoryService: {
    createCategoryService: (payLoad: ICategory) => Promise<import("mongoose").Document<unknown, {}, ICategory, {}, {}> & ICategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllCategoryService: () => Promise<(import("mongoose").Document<unknown, {}, ICategory, {}, {}> & ICategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getACategoryService: (id: any) => Promise<(import("mongoose").Document<unknown, {}, ICategory, {}, {}> & ICategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateCategoryService: (id: any, payLoad: Partial<ICategory>) => Promise<(import("mongoose").Document<unknown, {}, ICategory, {}, {}> & ICategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteCategoryService: (id: any) => Promise<(import("mongoose").Document<unknown, {}, ICategory, {}, {}> & ICategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=category.service.d.ts.map