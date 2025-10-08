import type { IStudentReview } from "./stuentReview.interface.js";
export declare const studentReviewService: {
    createStudentReviewService: (payLoad: IStudentReview) => Promise<import("mongoose").Document<unknown, {}, IStudentReview, {}, {}> & IStudentReview & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllStudentReviewService: () => Promise<(import("mongoose").Document<unknown, {}, IStudentReview, {}, {}> & IStudentReview & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getAStudentReviewService: (id: any) => Promise<(import("mongoose").Document<unknown, {}, IStudentReview, {}, {}> & IStudentReview & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateStudentReviewService: (id: string, payLoad: Partial<IStudentReview>) => Promise<(import("mongoose").Document<unknown, {}, IStudentReview, {}, {}> & IStudentReview & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteStudentReviewService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IStudentReview, {}, {}> & IStudentReview & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=studentReview.service.d.ts.map