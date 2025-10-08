import type { Request, Response } from "express";
export declare const categoryController: {
    createCategoryController: (req: Request, res: Response) => Promise<void>;
    getAllCategoryController: (req: Request, res: Response) => Promise<void>;
    getACategoryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateACategoryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteACategoryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=category.controller.d.ts.map