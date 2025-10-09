import type { Types } from "mongoose";

export interface IMentor {
  id: string;
  name: string;
  gender: "male" | "female" | "others";
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContact: string;
  address: string;
  profileImg: string;
  designation: string;
  departName: string;
  experienceTrainedStudent: string;
  specialized_area: string[];
  education_qualification: string[];
  workExperience: string[];
  experienceYears: string;
  reviews: number;
  bio: string;
  lifeJourney: string;
}
