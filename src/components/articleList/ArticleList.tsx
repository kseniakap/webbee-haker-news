import { newsAllApi } from '../../services/NewsServise';
import Article from './article/Article';
import Loader from '../loader/Loader';
import st from './ArticleList.module.scss';
import { useState } from 'react';

const ArticleList = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { data: news, isLoading, error, refetch } = newsAllApi.useGetAllNewsQuery(undefined, {
    pollingInterval: 60000, //автоматическое обновление каждую минуту
  });

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  if (error) {
    return <p>Error while fetching news</p>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <button onClick={handleRefresh} className={st.refresh}>
        Refresh data
      </button>
      {isRefreshing && <Loader />}
      <ul className={st.list}>
        {news?.map((item) => (
          <Article item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};

export default ArticleList;
