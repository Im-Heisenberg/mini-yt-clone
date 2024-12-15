import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const initializedInstance = await mongoose.connect(
			`${process.env.DB_URI}/${process.env.DB_NAME}`
		);
		mongoose.connection.on("error", (err) => {
			console.error("MongoDB connection error:", err);
			process.exit(1);
		});
		console.log(
			"Database connected successfully, HOST:",
			initializedInstance.connection.host
		);
	} catch (error) {
		console.log("DB connection error: ", error);
		process.exit(1);
	}
};
