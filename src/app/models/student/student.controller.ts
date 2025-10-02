import type { Request, Response } from "express";
import { createStudent } from "./student.service.js";

const createStudentController = async (req: Request, res: Response) => {
  try {
    const student = await createStudent.createStudentService(req.body);
    res.status(201).json({
      message: "Data added successfully",
      success: true,
      data: student,
    });
  } catch (err) {
    console.log(err);
    // error হলে response পাঠাও
    res.status(500).json({
      message: "Failed to add student",
      success: false,
      error: err instanceof Error ? err.message : err,
    });
  }
};
const getAllStudentController = async (req: Request, res: Response) => {
  try {
    const student = await createStudent.getAllStudentService();
    res.status(201).json({
      message: "get all student",
      success: true,
      data: student,
    });
  } catch (err) {
    console.log(err);
    // error হলে response পাঠাও
    res.status(500).json({
      message: "Failed to add student",
      success: false,
      error: err instanceof Error ? err.message : err,
    });
  }
};
const getAStudentController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const student = await createStudent.getAStudentService(id);
    res.status(201).json({
      message: "get a student",
      success: true,
      data: student,
    });
  } catch (err) {
    console.log(err);
    // error হলে response পাঠাও
    res.status(500).json({
      message: "Failed to add student",
      success: false,
      error: err instanceof Error ? err.message : err,
    });
  }
};

export const studentController = {
  createStudentController,
  getAllStudentController,
  getAStudentController
};
