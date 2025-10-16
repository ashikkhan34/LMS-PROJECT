import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./index.js";
const PORT = process.env.PORT || 5000;
async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("✅ MongoDB connected successfully!");
        // Only run listen() locally — not on Vercel
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    }
    catch (err) {
        console.error("❌ Database connection failed:", err);
    }
}
main();
//# sourceMappingURL=server.js.map