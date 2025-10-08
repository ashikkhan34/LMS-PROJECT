import type { Request, Response } from "express";
export declare const certificateController: {
    createCertificateController: (req: Request, res: Response) => Promise<void>;
    getAllCertificateController: (req: Request, res: Response) => Promise<void>;
    getACertificateController: (req: Request, res: Response) => Promise<void>;
    updateCertificateController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteCertificateController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=certification.controller.d.ts.map