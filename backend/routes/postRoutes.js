const express = require("express");
const multer = require("multer");
const path = require("path");

const Post = require("../models/Post");

const router = express.Router();

// MULTER CONFIG

const storage = multer.diskStorage({

destination: (req, file, cb) => {


cb(null, "uploads/");


},

filename: (req, file, cb) => {


cb(
  null,
  Date.now() +
  path.extname(file.originalname)
);


},

});

const upload = multer({
storage,
});

// CREATE POST WITH IMAGE

router.post(
"/create",
upload.single("image"),
async (req, res) => {


try {

  const {
    userId,
    username,
    text,
  } = req.body;

  const image = req.file
    ? `/uploads/${req.file.filename}`
    : "";

  const newPost = new Post({
    userId,
    username,
    text,
    image,
  });

  await newPost.save();

  res.status(201).json({
    message:
      "Post Created Successfully",
    post: newPost,
  });

} catch (error) {

  console.log(error);

  res.status(500).json({
    message: "Server Error",
  });

}


}
);

// GET POSTS

router.get("/", async (req, res) => {

try {


const posts = await Post.find()
  .sort({ createdAt: -1 });

res.status(200).json(posts);


} catch (error) {


console.log(error);

res.status(500).json({
  message: "Server Error",
});


}

});

// LIKE

router.put("/like/:id", async (req, res) => {

try {


const { username } = req.body;

const post = await Post.findById(
  req.params.id
);

if (
  !post.likes.includes(username)
) {

  post.likes.push(username);

  await post.save();

}

res.status(200).json(post);


} catch (error) {


console.log(error);

res.status(500).json({
  message: "Server Error",
});


}

});

// COMMENT

router.put(
"/comment/:id",
async (req, res) => {


try {

  const {
    username,
    comment,
  } = req.body;

  const post =
    await Post.findById(
      req.params.id
    );

  post.comments.push({
    username,
    comment,
  });

  await post.save();

  res.status(200).json(post);

} catch (error) {

  console.log(error);

  res.status(500).json({
    message:
      "Server Error",
  });

}


}
);

// EDIT

router.put("/edit/:id", async (req, res) => {

try {


const { text } = req.body;

const updatedPost =
  await Post.findByIdAndUpdate(
    req.params.id,
    { text },
    { new: true }
  );

res.status(200).json({
  message: "Post Updated",
  post: updatedPost,
});


} catch (error) {


console.log(error);

res.status(500).json({
  message: "Server Error",
});


}

});

// DELETE

router.delete(
"/delete/:id",
async (req, res) => {


try {

  await Post.findByIdAndDelete(
    req.params.id
  );

  res.status(200).json({
    message:
      "Post Deleted",
  });

} catch (error) {

  console.log(error);

  res.status(500).json({
    message:
      "Server Error",
  });

}


}
);

module.exports = router;
