import { FC, useEffect, useState } from 'react';
import { newsApi } from '../../../services/NewsService';
import { NewsItem } from '../../../types/main';
import SanitizedContent from '../../sanitizeComponent/SanitizeComponent';
import st from './Comment.module.scss';

type CommentProps = {
  comment: NewsItem;
};

const Comment: FC<CommentProps> = ({ comment }) => {
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [childrenComments, setChildrenComments] = useState<NewsItem[]>([]);

  const { id, user, content, comments_count, dead, deleted } = comment;
  const { data: queryData, isLoading, isError, refetch } = newsApi.useGetAllCommentsQuery(id);

  useEffect(() => {
    if (queryData) {
      setChildrenComments(queryData);
    }
  }, [queryData]);

  const handleCommentClick = () => {
    if (!isOpenComment && !isLoading && !isError) {
      refetch();
    }
    setIsOpenComment(!isOpenComment);
  };

  if (deleted || dead) {
    return <></>;
  }

  return (
    <div className={st.comment}>
      <p className={st.subtitle}>{user}</p>
      <SanitizedContent content={content} />
      {comments_count !== 0 && (
        <p className={st.show} onClick={handleCommentClick}>
          {isOpenComment ? 'Close comments' : `Show ${comments_count} comments`}
        </p>
      )}
      {isOpenComment && childrenComments.map((item: NewsItem) => <Comment key={item.id} comment={item} />)}
    </div>
  );
};

export default Comment;
