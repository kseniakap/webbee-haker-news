import { useParams } from 'react-router-dom';
import Loader from '../components/loader/Loader';
import ArticleId from '../components/articleId/ArticleId';
import { newsAllApi } from '../services/NewsServise';

const NewsIdPage = () => {
  const { id } = useParams();
  const { data: article, isLoading, error } = newsAllApi.useGetNewByIdQuery(id || '');

  if (error) {
    return <p>Error while fetching news</p>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {article && <ArticleId data={article} />}
    </>
  );
};

export default NewsIdPage;
