import Post from '../schema/post_schema.js';

export const CreatePost = async  (request,response) => {
        console.log(request.body);
        try{
          const post = await new Post(request.body);
          post.save();
          response.status(200).json("post saved successfully");
   
        }
        catch(error){
            request.status(500).json(error);
        }
}