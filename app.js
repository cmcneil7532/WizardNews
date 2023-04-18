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
app.get("/posts/:id", (req, res, next) => {
  const post = find(req.params.id);
  if (!post.id) {
    res.status(404); //status code 404
    next("<h1>404 page not found</h1>"); //Pass tag to error handler
  } else {
    res.send(postDetail(post));
  }
});

app.use((err, req, res, next) => {
  res.send(err); //send the client a 404 page not found
});
const { PORT = 1337 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
