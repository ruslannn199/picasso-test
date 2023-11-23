import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));
const Post = lazy(() => import('@/pages/Post'));

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/post/:postId" element={<Post />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default Routing;
