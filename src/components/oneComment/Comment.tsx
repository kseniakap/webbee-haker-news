import { useState } from 'react';
import { Comments } from '../../types/main';
import { transformTime } from '../../utils/transformTime';
import SanitizedContent from '../sanitizedComponent/SanitizedComponent';
import styles from './Comment.module.scss';
import Loader from '../loader/Loader';

type CommentProps = {
  commentData: Comments;
};
const Comment = ({ commentData }: CommentProps) => {
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user, time, content, dead, deleted, comments, commentsCount } = commentData;

  const handleOpenComments = async () => {
    if (!isOpenComment) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsOpenComment(true);
      }, 800);
    } else {
      setIsOpenComment(false);
    }
  };

  return (
    <div className={styles.comment}>
      {deleted || dead ? (
        <p>comment has been deleted</p>
      ) : (
        <>
          <p className={styles.subtitle}>{user}</p>
          <p>{transformTime(time)}</p>
          <SanitizedContent content={content} />
          {commentsCount > 0 && (
            <p className={styles.show} onClick={handleOpenComments}>
              {isOpenComment ? 'Close comments' : `Show ${commentsCount} comments`}
            </p>
          )}
          {isLoading && !isOpenComment && comments && comments.length > 0 && <Loader />}
          {isOpenComment && comments?.map((item: Comments) => <Comment key={item.id} commentData={item} />)}
        </>
      )}
    </div>
  );
};

export default Comment;
