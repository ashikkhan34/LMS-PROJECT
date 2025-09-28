import type { IMentor } from "./mentor.interface.js";
export declare const mentorService: {
    CreateMentorService: (payLoad: IMentor) => Promise<import("mongoose").Document<unknown, {}, IMentor, {}, {}> & IMentor & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
};
//# sourceMappingURL=mentor.service.d.ts.map