import express from "express";

import middlewares from "./middlewares.mjs";
import index_route from "./routes/index.mjs";
import tasks_route from "./routes/tasks.mjs";

const PORT = process.env.PORT || 3000;
const app = express();

middlewares(app);
app.use(index_route);
app.use(tasks_route);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
