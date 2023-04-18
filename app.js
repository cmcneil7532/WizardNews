const express = require("express");
const app = express();
const morgan = require("morgan");
const { postList } = require("./postList");
const { postDetail } = require("./postDetail");
const { list, find } = require("./postBank");

//------Middleware
app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(postList(list));
});
app.get("/posts/:id", (req, res) => {
  const post = find(req.params.id);
  res.send(postDetail(post));
});

const { PORT = 1337 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
