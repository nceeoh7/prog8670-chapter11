require("dotenv").config();

const express = require("express");
const expressSession = require("express-session");
const fileUpload = require("express-fileupload");
const ejs = require("ejs");
const app = new express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const validation = require("./middlewares/validation");
const homeController = require("./controllers/home");
const newPostController = require("./controllers/newPost");
const storePostController = require("./controllers/storePost");
const getPostController = require("./controllers/getPost");
const newUserController = require("./controllers/newUser");
const storeUserController = require("./controllers/storeUser");
const loginController = require("./controllers/login");
const loginUserController = require("./controllers/loginUser");

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.use(express.static("public"));
app.use(fileUpload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/posts/store", validation.validateMiddleware);

app.set("view engine", "ejs");

app.listen(4000, () => {
  console.log("App listening on port 4000");
});

app.get("/", homeController);

app.get("/posts/new", newPostController);

app.post("/posts/store", storePostController);

app.get("/post/:id", getPostController);

app.get("/auth/register", newUserController);

app.get("/auth/login", loginController);

app.post("/users/register", storeUserController);

app.post("/users/login", loginUserController);
