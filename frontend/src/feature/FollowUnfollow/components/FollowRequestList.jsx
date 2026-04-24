import React, { useEffect, useState } from "react";
import { useFollow } from './../hooks/useFollow';
import "../styles/followRequestList.scss"

const FollowRequestList = () => {
  const { fetchPendingRequests, handleAcceptFollowRequest, handleRejectFollowRequest } = useFollow();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRequests = async () => {
      const res = await fetchPendingRequests();
      if (res?.requests) {
        setRequests(res.requests);
      }
      setLoading(false);
    };
    loadRequests();
  }, []);

  const onAccept = async (followerUsername) => {
    await handleAcceptFollowRequest(followerUsername);
    setRequests(requests.filter(req => req.follower !== followerUsername));
  };

  const onReject = async (followerUsername) => {
    await handleRejectFollowRequest(followerUsername);
    setRequests(requests.filter(req => req.follower !== followerUsername));
  };

  if (loading) return <h3 style={{ color: "white", textAlign: "center" }}>Loading requests...</h3>;

  return (
    <div className="follow-requests-container">
      <h2 className="page-title">Follow Requests</h2>
      
      {requests.length === 0 ? (
        <p className="no-requests">No pending requests.</p>
      ) : (
        <div className="requests-list">
          {requests.map((req) => (
            <div key={req._id} className="request-item">
              
              {/* Left Side: User ki detail */}
              <div className="user-info">
                <div className="profile-img-wrapper">

                  {/* Agar profile pic nahi hai toh default dikha do */}
                  <img src={`https://ui-avatars.com/api/?name=${req.follower}&background=random`} alt="profile" />
                </div>
                <div className="user-text">
                  <p className="username">{req.follower}</p>
                  <p className="sub-text">wants to follow you</p>
                </div>
              </div>
              
              {/* Right Side: Tere dono buttons */}
              <div className="action-buttons">
                <button className="accept-btn" onClick={() => onAccept(req.follower)}>
                  Accept
                </button>
                <button className="reject-btn" onClick={() => onReject(req.follower)}>
                  Reject
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FollowRequestList;