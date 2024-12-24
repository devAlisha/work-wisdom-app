const Post = require("../models/Post");

const deletePostController = async (req, res, next) => {
  try {
    const postId = req.params.id;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Unauthorized to delete this post" });
    }

    await Post.findByIdAndDelete(postId);

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = deletePostController;
