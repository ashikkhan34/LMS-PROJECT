import type { Request, Response } from "express";
import { seminarEventService } from "./seminar.service.js";


const createSeminarEventController = async (req:Request,res:Response) => {
    try{
        const seminarEvent = await seminarEventService.createSeminarEventService(req.body)
        res.status(201).json({
            success:true,
            message:'seminar data create',
            data:seminarEvent
        })
    }catch(err){
        console.log(err)
    }
}



const getAllSeminarEventController = async(req:Request,res:Response) =>{
   try{
     const allEventData = await seminarEventService.getSeminarEventService()
     res.status(201).json({
      message: "get all seminar event",
      success: "true",
      data: allEventData,
    });
  } catch (err) {
    console.log(err);
  }
   }
const getASeminarEventController = async(req:Request,res:Response) =>{
   try{
    const id = req.params.id;
     const allEventData = await seminarEventService.getASeminarEventService(id)
     res.status(201).json({
      message: "get a seminar event",
      success: "true",
      data: allEventData,
    });
  } catch (err) {
    console.log(err);
  }
   }

export const seminarEventController = {
    createSeminarEventController,
    getAllSeminarEventController,
    getASeminarEventController
}
