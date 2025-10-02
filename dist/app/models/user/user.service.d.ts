import mongoose from "mongoose";
import type { IUser } from "./user.interface.js";
export declare const userService: {
    createUserService: (payLoad: IUser) => Promise<mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllUserService: () => Promise<(mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getAUserService: (id: any) => Promise<(mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteAUserService: (id: any) => Promise<(mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateUserService: (id: string, payLoad: Partial<IUser>) => Promise<(mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=user.service.d.ts.map