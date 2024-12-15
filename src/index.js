import "dotenv/config";
import { connectDB } from "./db/index.js";
import { startApp } from "./app.js";

const initialiseApp = async () => {
	try {
		await connectDB();
		startApp();
	} catch (err) {
		console.log("Error in initialization:", err);
	}
};
initialiseApp();
