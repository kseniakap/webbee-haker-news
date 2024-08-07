import { ReactNode } from 'react';
import { newsApi } from '../../services/NewsService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { refreshInterfal } from '../../const';
import Loader from '../loader/Loader';
import { Comments, News } from '../../types/main';
import styles from './RefreshData.module.scss';

type metodsType = 'getAllRootComments' | 'useGetAllNewsQuery';

type RefreshDataProps<T> = {
  id?: number | string;
  text: string;
  method: metodsType;
  children: (data: T[]) => ReactNode;
};

const RefreshData = <T extends News | Comments>({ id, text, method, children }: RefreshDataProps<T>) => {
  const { data, isLoading, error, refetch, isFetching } =
    method === 'getAllRootComments'
      ? newsApi.useGetAllCommentsQuery(id!, { pollingInterval: refreshInterfal })
      : newsApi.useGetAllNewsQuery(undefined, { pollingInterval: refreshInterfal });

  const handleRefresh = () => {
    refetch();
  };

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div>
      {!isFetching ? (
        <button onClick={handleRefresh} className={styles.refresh}>
          Refresh {text}
        </button>
      ) : (
        <Loader />
      )}
      {!data?.length && !isFetching && <p className={styles.bold}>no {text}</p>}
      {!(isFetching || isLoading) && data ? <div className={styles.content}>{children(data as T[])}</div> : null}
    </div>
  );
};

export default RefreshData;
