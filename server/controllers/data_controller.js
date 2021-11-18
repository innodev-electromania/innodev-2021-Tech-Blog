import Post from "../schema/post_schema.js";

export const CreatePost = async (request, response) => {
  console.log(request.body);
  try {
    const post = await new Post(request.body);
    post.save();
    response.status(200).json("post saved successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const GetAllPosts = async (request, response) => {
  try {
    let posts = await Post.find({});
    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const GetPost = async (request, response) => {
  try {
    let post = await Post.findById(request.params.id);
    response.status(200).json(post);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const UpdatePost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    await Post.findByIdAndUpdate(request.params.id, { $set: request.body });

    response.status(200).json("post updated successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const DeletePost = async (request, response) => {
  try {
    let post = await Post.findById(request.params.id);
    await post.delete();
    response.status(200).json("post deleted successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};
