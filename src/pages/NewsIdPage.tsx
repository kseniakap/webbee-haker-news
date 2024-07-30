import { useParams } from 'react-router-dom';
import DataArticle from '../components/articleId/DataArticle';

const NewsIdPage = () => {
  const { id } = useParams();

  return <>{id && <DataArticle articleId={id} />}</>;
};

export default NewsIdPage;
