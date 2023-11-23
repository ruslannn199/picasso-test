import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const TestPage = lazy(() => import('@/pages/Home'));

const Routing = () => (
  <Routes>
    <Route path="/" element={<TestPage />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default Routing;
