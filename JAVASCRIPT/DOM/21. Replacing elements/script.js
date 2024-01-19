// Function to replace an article

function replaceArticle(articleId, newContent) {
  //find th existing article element by its id

  const existingArticle = document.getElementById(articleId);

  //create a new div element for the updated article

  const newArticleEl = document.createElement("div");

  //add css to it

  newArticleEl.className = "article";

  //keep the id same for the new article

  newArticleEl.id = articleId;
  //create a text node for the new content

  const newTextNode = document.createTextNode(newContent);

  newArticleEl.appendChild(newTextNode);

  //Replacing the existing article with the new one

  existingArticle.parentNode.replaceChild(newArticleEl, existingArticle);
}

replaceArticle("article1", "Some content");
replaceArticle("article2", "Some content 2");
