import type { ICourse } from "./course.interface.js";
export declare const courseService: {
    createCourseService: (payLoad: ICourse) => Promise<import("mongoose").Document<unknown, {}, ICourse, {}, {}> & ICourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllCourseService: () => Promise<(import("mongoose").Document<unknown, {}, ICourse, {}, {}> & ICourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
};
//# sourceMappingURL=course.service.d.ts.map