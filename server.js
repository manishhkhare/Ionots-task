const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const projectRoutes = require("./routes/projects");
const progressRoutes = require("./routes/progress");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database Connection
mongoose
  .connect("mongodb://localhost:27017/project-system")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/projects", projectRoutes);
app.use("/progress", progressRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
