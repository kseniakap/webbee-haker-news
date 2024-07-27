import { newsApi } from '../../services/NewsService';
import { NewsItem } from '../../types/main';
import Comment from './oneComment/Comment';
import st from './AllComments.module.scss';

const AllComments = () => {
  const { data: comments, isLoading, error } = newsApi.useGetAllCommentsQuery(41081534);
  console.log('comments', comments);
  return (
    <div className={st.comments}>
      {comments?.map((item: NewsItem) => (
        <>
          <Comment key={item.id} comment={item} />
        </>
      ))}
    </div>
  );
};

export default AllComments;
