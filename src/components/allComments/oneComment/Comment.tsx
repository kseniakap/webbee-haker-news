import { FC, useState } from 'react';
import { NewsItem } from '../../../types/main';
import st from './Comment.module.scss';

import DOMPurify from 'dompurify';

type CommentProps = {
  comment: NewsItem;
};

const Comment: FC<CommentProps> = ({ comment }) => {
  const [isOpenComment, setIsOpenComment] = useState(false);
  const { user, content, comments, comments_count, dead, deleted } = comment;
  const treatedContent = DOMPurify.sanitize(content);
  const createMarkup = (htmlString: string) => ({ __html: htmlString });

  if (deleted || dead) {
    return <></>;
  }

  return (
    <div className={st.comment}>
      <p className={st.subtitle}>{user}</p>
      <p dangerouslySetInnerHTML={createMarkup(treatedContent)} />
      {!comment.open && comments_count !== 0 && (
        <p className={st.show} onClick={() => setIsOpenComment(!isOpenComment)}>
          {!isOpenComment ? `Show ${comments_count} comments` : 'Close comments'}
        </p>
      )}
      {isOpenComment && comments?.map((item: NewsItem) => <Comment comment={item} />)}
    </div>
  );
};

export default Comment;
