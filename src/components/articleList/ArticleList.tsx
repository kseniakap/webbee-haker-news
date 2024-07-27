import { useState } from 'react';
import { newsApi } from '../../services/NewsService';
import Article from './article/Article';
import Loader from '../loader/Loader';
import st from './ArticleList.module.scss';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { refreshInterfal } from '../../const';

const ArticleList = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { data: news, isLoading, error, refetch } = newsApi.useGetAllNewsQuery(undefined, {
    pollingInterval: refreshInterfal, //автоматическое обновление каждую минуту
  });

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <>
      <button onClick={handleRefresh} className={st.refresh}>
        Refresh data
      </button>
      {!(isRefreshing || isLoading) ? (
        <ul className={st.list}>
          {news?.map((item) => (
            <Article item={item} key={item.id} />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ArticleList;
