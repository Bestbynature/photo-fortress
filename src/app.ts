import express from "express";
import path from "path";
import { connectToDatabase } from "./db/db-connection";
import { imageRoutes } from "./routes/image";

const app = express();

connectToDatabase()
  .then(() => {
    console.log("Connected to database");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to database: ", err);
    process.exit(1);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("", imageRoutes);

export default app;