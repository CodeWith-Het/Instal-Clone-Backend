import { useContext } from "react";
import { getFeed } from "../service/post.api";
import { PostContext } from "../post.context";

export const usePost = () => {
    const context = useContext(PostContext) 

    const {loading,setLoading,post,feed,setFeed} = context

    const handleGetFeed = async () => {
      setLoading(true);
      try {
        const response = await getFeed(); 
        setFeed(Array.isArray(response?.feed) ? response.feed : [])
        return response 

      } catch (error) {
        const err = error.response?.data || error.message
        setFeed([])
        return err

      } finally {
        setLoading(false);
      }
    };

    return {loading,post,feed,handleGetFeed}
}