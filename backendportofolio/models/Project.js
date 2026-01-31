import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    technologies: [String],
    image: String,
    githubLink: String,
    liveLink: String
});

export default mongoose.model("Project", projectSchema);
