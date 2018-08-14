import express from "express";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { answer: 42 });
});
const port = process.env.PORT || 5300;
app.listen(port, () => {
  console.log(`Running on port ${port}..`);
});
