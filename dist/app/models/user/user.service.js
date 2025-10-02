import mongoose from "mongoose";
import { userModel } from "./user.model.js";
const createUserService = async (payLoad) => {
    const user = await userModel.create(payLoad);
    return user;
};
const getAllUserService = async () => {
    const user = await userModel.find();
    return user;
};
const getAUserService = async (id) => {
    const user = await userModel.findById(id);
    return user;
};
const deleteAUserService = async (id) => {
    return await userModel.findByIdAndDelete(id);
};
const updateUserService = async (id, payLoad) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid user ID");
    }
    const updateUser = await userModel.findByIdAndUpdate(id, { $set: payLoad }, { new: true, runValidators: true });
    return updateUser;
};
export const userService = {
    createUserService,
    getAllUserService,
    getAUserService,
    deleteAUserService,
    updateUserService,
};
//# sourceMappingURL=user.service.js.map