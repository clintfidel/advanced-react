import express from "express";
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

const app = express();

app.use(express.static("public"));
app.use(webpackMiddleware(webpack(webpackConfig)));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { answer: 42 });
});
const port = process.env.PORT || 5300;
app.listen(port, () => {
  console.log(`Running on port ${port}..`);
});
