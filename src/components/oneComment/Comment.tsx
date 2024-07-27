import { FC, useState } from 'react';
import { newsApi } from '../../services/NewsService';
import { NewsItem } from '../../types/main';
import SanitizedContent from '../sanitizeComponent/SanitizeComponent';
import st from './Comment.module.scss';
import Loader from '../loader/Loader';
import ErrorMessage from '../errorMessage/ErrorMessage';

type CommentProps = {
  commentData: NewsItem;
};

const Comment: FC<CommentProps> = ({ commentData }) => {
  const [isOpenComment, setIsOpenComment] = useState(false);

  const { id, user, content, comments_count, dead, deleted } = commentData;

  const [
    fetchChildrenComments,
    { data: childrenComments, isLoading, isError },
  ] = newsApi.useLazyGetAllChildrenCommentsQuery();

  const handleCommentClick = () => {
    if (!isOpenComment) {
      fetchChildrenComments(id);
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
      {/* <p className={st.show}>Обновить</p> */}
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {isOpenComment && childrenComments?.map((item: NewsItem) => <Comment key={item.id} commentData={item} />)}
    </div>
  );
};

export default Comment;
