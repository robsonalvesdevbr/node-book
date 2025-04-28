import express from "express";
import Tasks from "../models/tasks.mjs";
const router = express.Router();

router.get("/tasks", (req, res) => {
	Tasks.findAll({}, (tasks) => {
		res.json({
			tasks,
		});
	});
});

export default router;
