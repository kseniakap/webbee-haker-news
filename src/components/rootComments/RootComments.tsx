import { FC, useState } from 'react';
import { NewsItem } from '../../types/main';
import Comment from '../oneComment/Comment';
import { newsApi } from '../../services/NewsService';
import { refreshInterfal } from '../../const';
import ErrorMessage from '../errorMessage/ErrorMessage';
import st from './RootComments.module.scss';
import Loader from '../loader/Loader';

type RootCommentsProps = {
  articleId: number | string;
};

const RootComments: FC<RootCommentsProps> = ({ articleId }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { data: rootComments, isLoading, error, refetch } = newsApi.useGetAllRootCommentsQuery(articleId, {
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
      <div>
        {!isRefreshing ? (
          <button onClick={handleRefresh} className={st.refresh}>
            Refresh comments
          </button>
        ) : (
          <Loader />
        )}
        {!rootComments?.length && !isRefreshing && <p className={st.bold}>no comments</p>}
      </div>

      {!(isRefreshing || isLoading) ? (
        <>
          {rootComments?.map((item: NewsItem) => (
            <Comment key={item.id} commentData={item} />
          ))}
        </>
      ) : null}
    </>
  );
};

export default RootComments;
