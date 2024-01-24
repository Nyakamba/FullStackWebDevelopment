const express = require("express");
const Post = require("../models/Post");
const User = require("../models/User");
const postRouter = express.Router();

//POST /posts

postRouter.post("/", async (req, res) => {
  try {
    //1.find the auther
    const author = await User.findById(req.body.author);
    //2.create a new post
    const savedPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    });
    //3.Push the post into the users post
    author.posts.push(savedPost);
    //4.Resave the author
    await author.save();
    //5.send the response
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET /posts
postRouter.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("author");
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = postRouter;
