import bodyparser from "body-parser";
import express from "express";
const app = express();

app.set("json spaces", 2);

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded());

// parse application/json
app.use(bodyparser.json());

app.use((req, res, next) => {
	console.log(`Path: ${req.path}`);
	next();
});

export default app;
