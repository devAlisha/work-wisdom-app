const Post = require("../models/Post");

const updatePostController = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Unauthorized to update this post" });
    }

    post.title = title || post.title;
    post.content = content || post.content;

    await Post.findByIdAndUpdate(postId, post);

    res.json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = updatePostController;
