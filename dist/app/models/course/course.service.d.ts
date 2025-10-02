import mongoose from "mongoose";
import type { ICourse } from "./course.interface.js";
export declare const courseService: {
    createCourseService: (payLoad: ICourse) => Promise<mongoose.Document<unknown, {}, ICourse, {}, {}> & ICourse & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllCourseService: () => Promise<(mongoose.Document<unknown, {}, ICourse, {}, {}> & ICourse & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getACourseService: (id: any) => Promise<(mongoose.Document<unknown, {}, ICourse, {}, {}> & ICourse & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteCourseService: (id: string) => Promise<(mongoose.Document<unknown, {}, ICourse, {}, {}> & ICourse & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateCourseService: (id: string, payLoad: ICourse) => Promise<(mongoose.Document<unknown, {}, ICourse, {}, {}> & ICourse & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=course.service.d.ts.map