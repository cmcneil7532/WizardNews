const express = require("express");
const app = express();
const morgan = require("morgan");
const { list, find } = require("./postBank");

//------Middleware
app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const posts = list();

  const html = `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      ${posts
        .map(
          (post) => `
        <div class='news-item'>
          <p>
            <span class="news-position">${post.id}. ▲</span>
            <a href="posts/${post.id}">${post.title}</a>
            <small>(by ${post.name})</small>
          </p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${post.date}
          </small>
        </div>`
        )
        .join("")}
    </div>
  </body>
</html>`;
  res.send(html).status(200);
});
//Post a single post
app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const post = find(id);
  const html = `

  <html>
    <head>
    <title>Single Post</title>
    <link rel="stylesheet" href="/style.css"/>
    </head>
    <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    </div>
    </body>
  </html>
  `;

  if (!post.id) {
    res.send(`<h1>404 Pgae not found</h1>`).status(404);
  } else {
    res.send(html).status(200);
  }
});

const { PORT = 1337 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
