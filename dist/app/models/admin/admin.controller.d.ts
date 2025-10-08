import type { Request, Response } from "express";
export declare const adminController: {
    createAdminController: (req: Request, res: Response) => Promise<void>;
    getAllAdminController: (req: Request, res: Response) => Promise<void>;
    getAAdminController: (req: Request, res: Response) => Promise<void>;
    updateAdminController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteAdminController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=admin.controller.d.ts.map