import type { ILoginData, IRegisterData } from "./auth.interface.js";
export declare const authService: {
    register(payLoad: IRegisterData): Promise<import("mongoose").Document<unknown, {}, import("../user/user.interface.js").IUser, {}, {}> & import("../user/user.interface.js").IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    login(payLoad: ILoginData): Promise<{
        token: string;
        user: import("mongoose").Document<unknown, {}, import("../user/user.interface.js").IUser, {}, {}> & import("../user/user.interface.js").IUser & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map