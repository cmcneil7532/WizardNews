const postDetail = (post) => {
  if (!post.id) {
    return `<h1>404 Page not found</h1>`;
  } else {
    return `<!DOCTYPE html>
        <html>
        <head>
          <title>Wizard News</title>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <div class="news-list">
            <header><img src="/logo.png"/>Wizard News</header>
              <h1>${post.title}</h1>
              <p>${post.content}</p>
          </div>
        </body>
      </html>`;
  }
};

module.exports = { postDetail };
