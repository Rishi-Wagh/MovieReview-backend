require("express-async-errors");
const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const { errorHandler } = require("./middlewares/error");
const cors = require("cors");

require("./db");
const userRouter = require("./routes/user");
const actorRouter = require("./routes/actor");
const movieRouter = require("./routes/movie");
const reviewRouter = require("./routes/review");
const adminRouter = require("./routes/admin");
const { handleNotFound } = require("./utils/helper");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/user", userRouter);
app.use("/api/actor", actorRouter);
app.use("/api/movie", movieRouter);
app.use("/api/review", reviewRouter);
app.use("/api/admin", adminRouter);
app.use("/*", handleNotFound);

app.use(errorHandler);

// app.post("/sign-in",
//   (req, res, next) => {
//     const { email, password } = req.body
//     if (!email || !password)
//       return res.json({ error: 'email/ password missing!' })
//     next()
//   },
//   (req, res) => {
//     res.send("<h1>Hello I am from your backend about</h1>");
//   });

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("listening on"+PORT+"...");
});
