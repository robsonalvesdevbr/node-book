import bodyparser from "body-parser";
import express from "express";

import index_route from "./routes/index.mjs";
import tasks_route from "./routes/tasks.mjs";

const PORT = process.env.PORT || 3000;
const app = express();

app.set("json spaces", 2);

//app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded());

// parse application/json
app.use(bodyparser.json());

app.use((req, res, next) => {
	console.log(`Path: ${req.path}`);
	next();
});

app.use(index_route);
app.use(tasks_route);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
