import mongoose from "mongoose";
import type { IUser } from "./user.interface.js";
import { userModel } from "./user.model.js";
import bcrypt from 'bcrypt'


const createUserService = async (payLoad: IUser):Promise<IUser>=> {
  const hashedPassword = await bcrypt.hash(payLoad.password,10)
  payLoad.password= hashedPassword;
  const user = await userModel.create(payLoad);
  return user;
};

const getAllUserService = async ():Promise<IUser[]> => {
  const user = await userModel.find();
  return user;
};
const getAUserService = async (id: any):Promise<IUser | null>  => {
  const user = await userModel.findById(id);
  return user;
};

const deleteAUserService = async (id: any):Promise<IUser | null> => {
  return await userModel.findByIdAndDelete(id);
};

const updateUserService = async (id: string, payLoad: Partial<IUser>) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid user ID");
  }
  const updateUser = await userModel.findByIdAndUpdate(
    id,
    { $set: payLoad },
    { new: true, runValidators: true }
  );
  return updateUser;
};

export const userService = {
  createUserService,
  getAllUserService,
  getAUserService,
  deleteAUserService,
  updateUserService,
};
