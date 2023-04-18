const html = require("html-template-tag");

const postDetail = (post) => {
  return `<!DOCTYPE html>
      <html>
        <head>
          <title>Wizard News</title>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <div class="news-list">
            <header><img src="/logo.png" />Wizard News</header>
            <h1>${post.title}</h1>
            <p>${post.content}</p>
          </div>
        </body>
      </html>`;
};

module.exports = { postDetail };
