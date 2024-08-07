import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import ArticleList from '../components/articleList/ArticleList';
import ROUTES from '../const/routes';
import DataArticle from '../components/articleId/DataArticle';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <ArticleList />,
  },
  {
    path: ROUTES.ARTICLE,
    element: <DataArticle />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
