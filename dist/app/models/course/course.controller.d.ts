import type { Request, Response } from "express";
export declare const courseController: {
    createCourseController: (req: Request, res: Response) => Promise<void>;
    getAllCourseController: (req: Request, res: Response) => Promise<void>;
    getACourseController: (req: Request, res: Response) => Promise<void>;
    deleteCourseController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateCourseController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=course.controller.d.ts.map