import type { Request, Response } from "express";
import { userService } from "./user.service.js";


const createUserController = async (req: Request, res: Response) => {
  try {
      const { role } = req.body;

    // ❌ Prevent creating admin via register
    if (role === "admin") {
      return res.status(400).json({
        success: false,
        message: "Cannot create admin via register",
      });
    }
    const user = await userService.createUserService(req.body);
    res.status(201).json({
      success: true,
      message: 'user data add',
      data: user
    });
  } catch (err: any) {
    console.error("Error creating user:", err.message);
    res.status(500).json({
      success: false,
      message: 'Failed to add user',
      error: err.message
    });
  }
};
const getAllUserController = async (req: Request, res: Response) => {
  try {
    const user = await userService.getAllUserService();
    res.status(201).json({
      success: true,
      message: 'get all data',
      data: user
    });
  } catch (err: any) {
    console.error("Error creating user:", err.message);
    res.status(500).json({
      success: false,
      message: 'Failed to add user',
      error: err.message
    });
  }
};
const getAUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await userService.getAUserService(id);
    res.status(201).json({
      success: true,
      message: 'get a data',
      data: user
    });
  } catch (err: any) {
    console.error("Error creating user:", err.message);
    res.status(500).json({
      success: false,
      message: 'Failed to add user',
      error: err.message
    });
  }
};
const deleteAUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userDelete = await userService.deleteAUserService(id);
       if (!userDelete) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
    res.status(201).json({
      success: true,
      message: 'delete a user successful',
      data: userDelete
    });
  } catch (err: any) {
    console.error("Error creating user:", err.message);
    res.status(500).json({
      success: false,
      message: 'Failed to add user',
      error: err.message
    });
  }
};
const updateAUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if(!id){
      return res.status(404).json({
        success:false,
        message:'id is required'
      })
    }
    const updateUser = await userService.updateUserService(id,req.body);
    res.status(202).json({
      success: true,
      message: 'update a user successful',
      data: updateUser
    });
  } catch (err: any) {
    console.error("Error creating user:", err.message);
    res.status(500).json({
      success: false,
      message: 'Failed to add user',
      error: err.message
    });
  }
};

export const userController = {
    createUserController,
    getAllUserController,
    getAUserController,
    deleteAUserController,
    updateAUserController
}