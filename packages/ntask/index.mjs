import express from "express";
import index_route from "./routes/index.mjs";

const PORT = process.env.PORT || 3000;
const app = express();

app.set("json spaces", 2);
app.use(express.json());

router.use((req, res, next) => {
	console.log("Horário: ", Date.now());
	next();
});

app.use(index_route);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
