const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const multer = require("multer");

dotenv.config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const articlesRouter = require("./routes/articles");
const speciesRouter = require("./routes/birdSpecies");
const urlRouter = require("./routes/Url");

const app = express();
const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "public/images"));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: diskStorage });
const notFound = (req, res) => {
  res.status(200).json({ status: "error", message: "Page Not Found" });
};

app.use(cors());
app.use(bodyParser.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/article", upload.single("image"), articlesRouter);
app.use("/birdSpecies", speciesRouter);
app.use("/3d", urlRouter);

app.get("*", notFound);
app.post("*", notFound);
app.delete("*", notFound);
app.put("*", notFound);
module.exports = app;
