import Post from "../components/Post";
import "../style/feed.scss";
import { usePost } from "../hooks/usePost";
import { useEffect } from "react";

const Feed = () => {
 
  const { feed, loading, handleGetFeed } = usePost()
  
  useEffect(() => {
    handleGetFeed()
  }, [])

  if (loading || !feed) {
  return (<main><h1>Loading Feed.....</h1></main>)
  }

  if (feed.length === 0) {
    return (
      <main>
        <h2>No posts available yet.</h2>
      </main>
    );
  }

  return (
    <main>
      <div id="feed">
        {feed.map(post => {
          return <Post key={post._id} post={post} />
        })}
      </div>
    </main>
  );
};

export default Feed;
