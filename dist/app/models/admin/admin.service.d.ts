import type { IAdmin } from "./admin.interface.js";
export declare const adminService: {
    createAdminService: (payLoad: IAdmin) => Promise<import("mongoose").Document<unknown, {}, IAdmin, {}, {}> & IAdmin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllAdminService: () => Promise<(import("mongoose").Document<unknown, {}, IAdmin, {}, {}> & IAdmin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getAAdminService: (id: any) => Promise<(import("mongoose").Document<unknown, {}, IAdmin, {}, {}> & IAdmin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=admin.service.d.ts.map