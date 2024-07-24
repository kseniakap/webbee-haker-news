import { newsAllApi } from '../../services/NewsServise';
import Article from './article/Article';
import Loader from '../loader/Loader';
import st from './ArticleList.module.scss';

const ArticleList = () => {
  const { data: news, isLoading, error, refetch } = newsAllApi.useGetAllNewsQuery('1', {
    pollingInterval: 60000,
  });

  const handleRefresh = () => {
    refetch();
  };

  if (error) {
    return <p>Error while fetching news</p>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <button onClick={handleRefresh}>Refresh</button>
      <ul className={st.list}>
        {news?.map((item) => (
          <Article item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};

export default ArticleList;
