import bodyparser from "body-parser";

export default function (app) {
	// import express from "express";
	app.set("json spaces", 2);

	// parse application/x-www-form-urlencoded
	app.use(bodyparser.urlencoded());

	// parse application/json
	app.use(bodyparser.json());

	app.use((req, res, next) => {
		console.log(`Path: ${req.path}`);
		next();
	});
}
