import type { Request, Response } from "express";
import { courseService } from "./course.service.js";

const createCourseController = async (req: Request, res: Response) => {
  try {
    const course = await courseService.createCourseService(req.body);
    res.status(201).json({
      message: "data added successfully",
      success: "true",
      data: course,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllCourseController = async (req: Request, res: Response) => {
  try {
    const getCourse = await courseService.getAllCourseService();
    res.status(201).json({
      message: "get all data",
      success: "true",
      data: getCourse,
    });
  } catch (err) {
    console.log(err);
  }
};
const getACourseController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const getCourse = await courseService.getACourseService(id);
    res.status(201).json({
      message: "get a data",
      success: "true",
      data: getCourse,
    });
  } catch (err) {
    console.log(err);
  }
};
const deleteCourseController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if(!id){
      return res.status(404).json({
        success:false,
        message:'course id is required'
      })
    }
    const getCourse = await courseService.getACourseService(id);
    res.status(201).json({
      message: "course is deleted successfully",
      success: "true",
      data: getCourse,
    });
  } catch (err) {
    console.log(err);
  }
};
const updateCourseController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if(!id){
      return res.status(404).json({
        success:false,
        message:'course id is required'
      })
    }
  const updateCourse = await courseService.updateCourseService(id,req.body);
  if(!updateCourse) return res.status(404).json({message:'data not found',success:false})
    res.status(202).json({
      message: "course is update successfully",
      success: "true",
      data: updateCourse,
    });
  } catch (err) {
    console.log(err);
  }
};

export const courseController = {
  createCourseController,
  getAllCourseController,
  getACourseController,
  deleteCourseController,
  updateCourseController
};
