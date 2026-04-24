import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/pages/Home';
import Login from "./feature/auth/components/Login";
import Register from "./feature/auth/components/Register";
import CreatePost from "./feature/post/components/CreatePost";
import FollowRequestList from "./feature/FollowUnfollow/components/FollowRequestList";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/requests" element={<FollowRequestList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;