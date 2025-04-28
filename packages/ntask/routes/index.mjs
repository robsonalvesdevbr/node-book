import express from "express";
const router = express.Router();

router
	.route("/")
	.all((req, res, next) => {
		console.log(`Path: ${req.path}`);
		next();
	})
	.get((req, res) => {
		res.json({ status: "NTask API" });
	})
	.post((req, res) => {
		res.status(405).json({ error: "Method Not Allowed" });
	});

export default router;
