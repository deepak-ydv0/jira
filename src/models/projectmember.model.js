import mongoose, { Schema } from "mongoose";

const projectMember = new Schema({});

export const ProjectMember = mongoose.model("ProjectMember", projectMember);
