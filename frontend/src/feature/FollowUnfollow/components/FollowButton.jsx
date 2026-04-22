import React from "react";
import { useFollow } from "../hooks/useFollow";
import "./FollowButton.scss"; 

const FollowButton = ({ username, initialIsFollowing }) => {
  
  const { isFollowing, isLoading, toggleFollow } =
    useFollow(initialIsFollowing);

  const handleAction = () => {
    if (!username) return;
    toggleFollow(username);
  };

  return (
    <button
      className={`follow-btn ${isFollowing ? "following" : "not-following"}`}
      onClick={handleAction}
      disabled={isLoading}
    >
      {isLoading ? "Wait..." : isFollowing ? "Following" : "Follow"}
    </button>
  );
};

export default FollowButton;
