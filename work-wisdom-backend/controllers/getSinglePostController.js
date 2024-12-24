const Post = require("../models/Post");

const getSinglePostController = async (req, res, next) => {
  try {
    const postId = req.params.id;

    const post = await Post.findById(postId).populate("author", "name email");

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = getSinglePostController;
