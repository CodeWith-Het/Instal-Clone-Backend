import React from "react";
import Feed from "../../feature/post/pages/Feed";
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="home-layout">

          <Navbar />
          
      <div className="main-content">
        <Feed />
      </div>
    </div>
  );
};

export default Home;
