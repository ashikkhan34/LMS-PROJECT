import type { IStudent } from "./student.interface.js";
export declare const createStudent: {
    createStudentService: (payLoad: IStudent) => Promise<import("mongoose").Document<unknown, {}, IStudent, {}, {}> & IStudent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllStudentService: () => Promise<(import("mongoose").Document<unknown, {}, IStudent, {}, {}> & IStudent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getAStudentService: (id: any) => Promise<(import("mongoose").Document<unknown, {}, IStudent, {}, {}> & IStudent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=student.service.d.ts.map