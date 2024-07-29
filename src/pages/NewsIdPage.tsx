import { useParams } from 'react-router-dom';
import DataArticle from '../components/articleId/DataArticle';
import RootComments from '../components/rootComments/RootComments';

const NewsIdPage = () => {
  const { id } = useParams();

  return (
    <>
      {id && (
        <>
          <DataArticle articleId={id} />
          {/* <RootComments articleId={id} /> */}
        </>
      )}
    </>
  );
};

export default NewsIdPage;
