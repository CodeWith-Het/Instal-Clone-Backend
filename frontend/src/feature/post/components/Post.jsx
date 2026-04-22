import React from "react";
import { usePost } from "../hooks/usePost";

const Post = ({ post }) => {
  const { handleLike } = usePost();

  const onLikeClick = () => {
    handleLike(post._id);
  };

  // const defaultProfile = `https://ui-avatars.com/api/?name=${post.user?.username || "User"}&background=random`;

  return (
    <div className="post">
      <div className="username-section">
        <div className="profile-img-wrapper">
          <img src={post.user?.profile_image} alt="profile" />
        </div>
        <p>{post.user?.username || "Unknown User"}</p>
      </div>

      <div className="post-image">
        <img src={post.imgFile} alt="post content" />
      </div>

      <div className="caption-section">
        <div className="caption-icon">
          <div className="like-comment-share">
            <i
              className={post.isLiked ? "ri-heart-3-fill" : "ri-heart-3-line"}
              onClick={onLikeClick}
            ></i>
            <i className="ri-chat-3-line"></i>
            <i className="ri-share-forward-line"></i>
          </div>

          <div className="save">
            <i className="ri-save-fill"></i>
          </div>
        </div>

        <p className="likes-count">{post.likeCounter} likes</p>

        <p className="caption-text">
          <span>{post.user?.username}</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
};

export default Post;
