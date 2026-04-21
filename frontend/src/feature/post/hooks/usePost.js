import { useContext } from "react";
import { PostContext } from "../post.context";
import { getFeed } from "../service/post.api";

export function usePost() {
    const context = useContext(PostContext) 

    const {loading,setLoading,post,setPost,feed,setFeed} = context

    const handleGetFeed = async () => {
      setLoading(true);
      try {
        const response = await getFeed(); 
        setFeed(response.feed)
        return response 

      } catch (error) {
        return error.response?.data || error.message

      } finally {
        setLoading(false);
      }
    };

    return {loading,post,feed,handleGetFeed}
}