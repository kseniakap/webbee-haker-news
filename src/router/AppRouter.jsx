import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NewsIdPage, NotFound } from '../pages';
import ArticleList from '../components/articleList/ArticleList';
import ROUTES from '../const/routes';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <ArticleList />,
  },
  {
    path: ROUTES.ARTICLE,
    element: <NewsIdPage />,
  },
  {
    path: ROUTES.NOTFOUND,
    element: <NotFound />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
