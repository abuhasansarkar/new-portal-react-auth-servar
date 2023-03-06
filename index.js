const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const news = require("./data/news.json");
const categories = require("./data/categories.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("News Portal Server API Runing............");
});
app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const category_news = news.filter((n) => n.category_id === id);
    res.send(category_news);
  }
});

app.get("/news/:id", (req, res) => {
  // res.send(news);
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.get("/news", (req, res)=> {
     res.send(news)
})

app.listen(port, () => {
  console.log("server runging on the port", port);
});
