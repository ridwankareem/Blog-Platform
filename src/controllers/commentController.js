import Comment from '../models/Comment.js';

export const addComment = async (req, res) => {
  const { content } = req.body;
  const comment = await Comment.create({
    content,
    post: req.params.postId,
    author: req.user._id
  });
  res.status(201).json(comment);
};

export const getComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId }).populate('author', 'username');
  res.json(comments);
};