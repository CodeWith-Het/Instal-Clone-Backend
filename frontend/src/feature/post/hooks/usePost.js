import { useContext } from "react";
import { PostContext } from "../post.context";
import { createPost, getFeed, likePost } from "../service/post.api";

export function usePost() {
  const context = useContext(PostContext);
  const { loading, setLoading, feed, setFeed } = context;

  const handleGetFeed = async () => {
    setLoading(true);
    try {
      const response = await getFeed();
      setFeed(response.feed);
      return response;
    } catch (error) {
      return error.response?.data || error.message;
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (postId) => {
    try {
      const response = await likePost(postId);

      if (response && response.likeCounter !== undefined) {
        setFeed((prevFeed) =>
          prevFeed.map((p) =>
            p._id.toString() === postId.toString()
              ? {
                  ...p,
                  likeCounter: response.likeCounter,
                  isLiked: response.isLiked,
                }
              : p,
          ),
        );
      }
    } catch (error) {
      return error.response?.data || error.message;
    }
  };

  const handleCreatePost = async (formData) => {
    setLoading(true);
    try {
      const response = await createPost(formData);

      if (response && response.data) {

        // Nayi post ko feed ke sabse aage (top) laga do
        setFeed((prevFeed) => [response.data, ...prevFeed]);
        return true; 
      }
      return false;
      
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, feed, handleGetFeed, handleLike, handleCreatePost };
}
