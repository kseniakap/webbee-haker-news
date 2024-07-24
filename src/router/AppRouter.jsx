import { Routes, Route } from 'react-router-dom';
import { NewsPage, NewsIdPage, NotFound } from '../pages';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/item/:id" element={<NewsIdPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
