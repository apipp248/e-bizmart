const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDB = require("./config/connectDb");
const path = require("path"); 
const session = require("express-session");

const authRoutes = require("./routes/authRoutes");
const kategoriRoutes = require("./routes/kategoriRoutes");
const port = process.env.PORT || 3000; 

connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(session({
    secret: 'rahasia-anda',
    resave: false,
    saveUnitialized: false,
    cookie: { secure: false}
}));

app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});


app.get("/", (req, res) => {
    res.redirect("/auth/login");
});

app.use("/auth", authRoutes);
app.use("/kategori", kategoriRoutes);

app.listen(port, () => {
    console.log(`Example App Listening at http://localhost:${port}`);
});