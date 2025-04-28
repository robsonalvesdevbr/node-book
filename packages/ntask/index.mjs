import express from "express";
import index_route from "./routes/index.mjs";
import tasks_route from "./routes/tasks.mjs";

const PORT = process.env.PORT || 3000;
const app = express();

app.set("json spaces", 2);
app.use(express.json());

app.use((req, res, next) => {
	console.log("Horário: ", Date.now());
	next();
});

app.use(index_route);
app.use(tasks_route);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
