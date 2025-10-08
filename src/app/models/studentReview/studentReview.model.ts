import { model, Schema } from "mongoose";
import type { IStudentReview } from "./stuentReview.interface.js";


const studentReviewSchema = new Schema <IStudentReview>({
    id:{type:String,required:true,unique:true},
    title:{type:String,required:true},
    studentName:{type:String,required:true},
    studentImg:{type:String,required:true},
    description:{type:String,required:true},
    date:{type:String,required:true},
    videoUrl:{type:String,required:true},
},
{timestamps:true}
)

 export const studentReviewModel = model<IStudentReview>('StudentReviews',studentReviewSchema)