import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
	res.json({ status: "NTask API" });
});

export default router;
