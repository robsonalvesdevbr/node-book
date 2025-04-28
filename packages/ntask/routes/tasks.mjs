import express from "express";
const router = express.Router();

router.get("/tasks", (req, res) => {
	res.json({
		tasks: [{ title: "Fazer compras" }, { title: "Consertar o pc" }],
	});
});

export default router;
