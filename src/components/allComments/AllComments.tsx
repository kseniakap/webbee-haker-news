import { FC } from 'react';
import { NewsItem } from '../../types/main';
import Comment from './oneComment/Comment';
import st from './AllComments.module.scss';

type AllCommentsProps = {
  data: NewsItem[] | undefined;
};

const AllComments: FC<AllCommentsProps> = ({ data }) => {
  return (
    <div className={st.comments}>
      {data?.map((item: NewsItem, idx) => (
        <>
          <Comment key={idx} comment={item} />
        </>
      ))}
    </div>
  );
};

export default AllComments;
