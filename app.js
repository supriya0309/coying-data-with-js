const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

router.get("/", (req, res) => {
  res.render("index");
});



app.use("/", router);
app.listen(process.env.port || 3003);

console.log("Running at Port 3003");