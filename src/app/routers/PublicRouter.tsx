import { Routes, Route } from 'react-router-dom';
import DummyErrorPage from '../pages/public/DummyErrorPage';
import ErrorPage from '../pages/public/ErrorPage';
import HomePage from '../pages/public/HomePage';
import NotFoundPage from '../pages/public/NotFoundPage';
import LifeRouter from './LifeRouter';

const PublicRouter = () => (
    <Routes>
        <Route element={<HomePage />} path="" />
        <Route element={<DummyErrorPage />} path="dummyError" />
        <Route element={<ErrorPage />} path="500" />
        <Route element={<LifeRouter />} path="lives/*" />
        <Route element={<NotFoundPage />} path="*" />
    </Routes>
);

export default PublicRouter;
