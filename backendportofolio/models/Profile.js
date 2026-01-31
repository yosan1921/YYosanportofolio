import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    fullName: String,
    bio: String,
    skills: [String],
    profileImage: String,
    cv: String
});

export default mongoose.model("Profile", profileSchema);
