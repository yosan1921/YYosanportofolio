import express from "express";
import Profile from "../models/Profile.js";
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        let profile = await Profile.findOne();
        if (profile) {
            profile = await Profile.findOneAndUpdate({}, req.body, { new: true });
        } else {
            profile = await Profile.create(req.body);
        }
        res.json(profile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const profile = await Profile.findOne();
        res.json(profile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
