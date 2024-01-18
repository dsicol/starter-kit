import { Routes, Route } from 'react-router-dom';
import CreateLifePage from '../pages/public/CreateLifePage';
import LifeDetailsPage from '../pages/public/LifeDetailsPage';
import ListLivesPage from '../pages/public/ListLivesPage';

const LifeRouter = () => (
    <Routes>
        <Route element={<ListLivesPage />} path="" />
        <Route element={<CreateLifePage />} path="/create" />
        <Route element={<LifeDetailsPage />} path="/:id" />
    </Routes>
);

export default LifeRouter;
