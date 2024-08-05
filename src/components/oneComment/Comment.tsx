import { useState } from 'react';
import { Comments } from '../../types/main';
import SanitizedContent from '../sanitizeComponent/SanitizeComponent';
import st from './Comment.module.scss';

type CommentProps = {
  commentData: Comments;
};

const Comment = ({ commentData }: CommentProps) => {
  const [isOpenComment, setIsOpenComment] = useState(false);
  const { user, content, commentsCount, dead, deleted, comments } = commentData;

  return (
    <div className={st.comment}>
      {deleted || dead ? (
        <p>comment has been deleted</p>
      ) : (
        <>
          <p className={st.subtitle}>{user}</p>
          <SanitizedContent content={content} />
          {commentsCount > 0 && (
            <p className={st.show} onClick={() => setIsOpenComment(!isOpenComment)}>
              {isOpenComment ? 'Close comments' : `Show ${commentsCount} comments`}
            </p>
          )}
          {isOpenComment && comments?.map((item: Comments) => <Comment key={item.id} commentData={item} />)}
        </>
      )}
    </div>
  );
};

export default Comment;
