import { useParams } from 'react-router-dom';
import DataArticle from '../components/articleId/DataArticle';
import PageContainer from '../components/pageContainer/PageContainer';

const NewsIdPage = () => {
  const { id } = useParams();

  return <PageContainer>{id && <DataArticle articleId={id} />}</PageContainer>;
};

export default NewsIdPage;
