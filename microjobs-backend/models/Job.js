import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  category: String,
  budget: Number,
  description:String
});

export default mongoose.model("Job", jobSchema);

