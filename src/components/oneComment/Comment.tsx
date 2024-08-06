import { useState } from 'react';
import { Comments } from '../../types/main';
import SanitizedContent from '../sanitizeComponent/SanitizeComponent';
import st from './Comment.module.scss';
import { tranformData } from '../../utils/transformTime';
import { Link } from 'react-router-dom';

type CommentProps = {
  commentData: Comments;
};

const Comment = ({ commentData }: CommentProps) => {
  const [isOpenComment, setIsOpenComment] = useState(false);
  const { user, time, content, dead, deleted, comments, commentsCount } = commentData;

  console.log(commentData);

  return (
    <div className={st.comment}>
      {deleted || dead ? (
        <p>comment has been deleted</p>
      ) : (
        <>
          <p className={st.subtitle}>{user}</p>
          <p>{tranformData(time)}</p>
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
