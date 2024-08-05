import React, { ReactNode } from 'react';
import { newsApi } from '../../services/NewsService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { refreshInterfal } from '../../const';
import Loader from '../loader/Loader';
import st from './RefreshData.module.scss';

type metodsType = 'getAllRootComments' | 'useGetAllNewsQuery';

type RefreshDataProps = {
  id?: number | string;
  text: string;
  method: metodsType;
  children: (data: any) => ReactNode;
};

const RefreshData = ({ id, text, method, children }: RefreshDataProps) => {
  const { data, isLoading, error, refetch, isFetching } =
    method === 'getAllRootComments'
      ? newsApi.useGetAllCommentsQuery(id as number, { pollingInterval: refreshInterfal })
      : newsApi.useGetAllNewsQuery(undefined, { pollingInterval: refreshInterfal });
      
  const handleRefresh = async () => {
    await refetch();
  };

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div>
      {!isFetching ? (
        <button onClick={handleRefresh} className={st.refresh}>
          Refresh {text}
        </button>
      ) : (
        <Loader />
      )}
      {!data?.length && !isFetching && <p className={st.bold}>no {text}</p>}
      {!(isFetching || isLoading) && data ? <div className={st.content}>{children(data)}</div> : null}
    </div>
  );
};

export default RefreshData;
