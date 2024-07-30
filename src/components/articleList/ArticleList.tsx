import { useState } from 'react';
import { newsApi } from '../../services/NewsService';
import Article from './article/Article';
import Loader from '../loader/Loader';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { refreshInterfal } from '../../const';
import st from './ArticleList.module.scss';

const ArticleList = () => {
  const [showRefreshMessage, setShowRefreshMessage] = useState(false);
  const { data: news, isLoading, error, refetch } = newsApi.useGetAllNewsQuery(undefined, {
    pollingInterval: refreshInterfal, //автоматическое обновление каждую минуту
  });

  const handleRefresh = async () => {
    setShowRefreshMessage(true);
    await refetch();
    setTimeout(() => setShowRefreshMessage(false), 3000);
  };

  console.log(news);
  if (error) {
    return <ErrorMessage />;
  }

  return (
    <>
      <button onClick={handleRefresh} className={st.refresh}>
        Refresh data
      </button>
      {showRefreshMessage && <p className={st.message}>data refresh</p>}
      {!isLoading ? (
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
