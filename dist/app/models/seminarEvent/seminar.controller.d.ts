import type { Request, Response } from "express";
export declare const seminarEventController: {
    createSeminarEventController: (req: Request, res: Response) => Promise<void>;
    getAllSeminarEventController: (req: Request, res: Response) => Promise<void>;
    getASeminarEventController: (req: Request, res: Response) => Promise<void>;
    updateASeminarEventController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteASeminarEventController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=seminar.controller.d.ts.map