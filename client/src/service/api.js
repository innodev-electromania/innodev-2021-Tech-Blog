import axios from 'axios';
const URL = "http://localhost:8000";
export const createPost = async(post) => {
        try { 
            await axios.post(`${URL}/create`,post);
    }catch(error){
        console.log("Error while calling createPost Api",error);}
}