import type { ICertification } from "./certification.interface.js";
export declare const certificateService: {
    createCertificateService: (payLoad: ICertification) => Promise<import("mongoose").Document<unknown, {}, ICertification, {}, {}> & ICertification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllCertificateService: () => Promise<(import("mongoose").Document<unknown, {}, ICertification, {}, {}> & ICertification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getACertificateService: (id: any) => Promise<(import("mongoose").Document<unknown, {}, ICertification, {}, {}> & ICertification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateCertificateService: (id: any, payLoad: Partial<ICertification>) => Promise<(import("mongoose").Document<unknown, {}, ICertification, {}, {}> & ICertification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteCertificateService: (id: any) => Promise<(import("mongoose").Document<unknown, {}, ICertification, {}, {}> & ICertification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=certification.service.d.ts.map