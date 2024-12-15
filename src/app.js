import express from "express";
const app = express();
export const startApp = () => {
	try {
		app.listen(process.env.PORT, () =>
			console.log("server started and listening on:", process.env.PORT)
		);
	} catch (err) {
		console.error("Error in starting the app:", err.message);
		process.exit(1);
	}
};

app.get('/', (req, res) => {
    res.send('hi')
})