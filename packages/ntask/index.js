const express = require("express");
const consign = require("consign");

const PORT = process.env.PORT || 3000;
const app = express();

app.set("json spaces", 2);
app.use(express.json());

consign().include("routes").into(app);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
