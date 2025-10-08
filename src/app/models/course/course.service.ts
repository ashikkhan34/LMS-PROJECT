import mongoose from "mongoose";
import type { ICourse } from "./course.interface.js";
import { courseModel } from "./course.model.js";

const createCourseService = async (payLoad: ICourse) => {
  const course = await courseModel.create(payLoad);
  return course;
};

const getAllCourseService = async () => {
  const allCourse = await courseModel.find();
  return allCourse;
};
const getACourseService = async (id: any) => {
  const aCourse = await courseModel.findById(id)
  .populate('mentor')
  return aCourse;
};

const deleteCourseService = async (id: string) => {
  return await courseModel.findByIdAndDelete(id);
};


const updateCourseService = async (id: string, payLoad:ICourse) => {
  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   throw new Error("Invalid course ID");
  // }

  // if (!payLoad || Object.keys(payLoad).length === 0) {
  //   throw new Error("No update data provided");
  // }

  const updatedCourse = await courseModel.findByIdAndUpdate(
    id,
    { $set: payLoad },
    { new: true, runValidators: true }
  );

  return updatedCourse;
};

export const courseService = {
  createCourseService,
  getAllCourseService,
  getACourseService,
  deleteCourseService,
  updateCourseService,
};
