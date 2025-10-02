import type { ISeminarEvent } from "./seminerEvent.interface.js";
export declare const seminarEventService: {
    createSeminarEventService: (payLoad: ISeminarEvent) => Promise<import("mongoose").Document<unknown, {}, ISeminarEvent, {}, {}> & ISeminarEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getSeminarEventService: () => Promise<(import("mongoose").Document<unknown, {}, ISeminarEvent, {}, {}> & ISeminarEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getASeminarEventService: (id: any) => Promise<(import("mongoose").Document<unknown, {}, ISeminarEvent, {}, {}> & ISeminarEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
};
//# sourceMappingURL=seminar.service.d.ts.map