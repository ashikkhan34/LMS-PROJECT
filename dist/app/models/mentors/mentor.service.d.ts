import type { IMentor } from "./mentor.interface.js";
export declare const mentorService: {
    CreateMentorService: (payLoad: IMentor) => Promise<import("mongoose").Document<unknown, {}, IMentor, {}, {}> & IMentor & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    getAllMentorService: () => Promise<(import("mongoose").Document<unknown, {}, IMentor, {}, {}> & IMentor & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getAMentorService: (id: any) => Promise<(import("mongoose").Document<unknown, {}, IMentor, {}, {}> & IMentor & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    updateMentorService: (id: string, payLoad: IMentor) => Promise<(import("mongoose").Document<unknown, {}, IMentor, {}, {}> & IMentor & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=mentor.service.d.ts.map