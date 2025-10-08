import type { Request, Response } from "express";
export declare const studentReviewController: {
    createStudentReviewController: (req: Request, res: Response) => Promise<void>;
    getAllStudentReviewController: (req: Request, res: Response) => Promise<void>;
    getAStudentReviewController: (req: Request, res: Response) => Promise<void>;
    updateStudentReviewController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteStudentReviewController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=studentReview.controller.d.ts.map