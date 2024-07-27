import { useParams } from 'react-router-dom';
import Loader from '../components/loader/Loader';
import ArticleId from '../components/articleId/ArticleId';
import { newsApi } from '../services/NewsService';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

const NewsIdPage = () => {
  const { id } = useParams();
  const { data: article, isLoading, error } = newsApi.useGetNewByIdQuery(id || '');

  if (error) {
    return <ErrorMessage />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return <>{article && <ArticleId data={article} />}</>;
};

export default NewsIdPage;
