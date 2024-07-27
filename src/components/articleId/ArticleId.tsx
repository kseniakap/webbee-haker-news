import { FC } from 'react';
import { NewsItem } from '../../types/main';
import { Link } from 'react-router-dom';
import Comment from '../allComments/oneComment/Comment';
import SanitizedContent from '../sanitizeComponent/SanitizeComponent';
import st from './ArticleId.module.scss';

type ArticleIdProps = {
  data: NewsItem | undefined;
};

const ArticleId: FC<ArticleIdProps> = ({ data }) => {
  if (!data) {
    return <p>Data not found</p>;
  }
  const { title, user, url, time_ago, content, comments_count, comments } = data;

  return (
    <div className={st.articleId}>
      <h2>{title}</h2>
      <div>
        <p>
          Athor: <span>{user}</span>
        </p>
        <p>{comments_count} comments</p>
        <p>{time_ago}</p>
      </div>
      <div className={st.btns}>
        <a href={url} target="blank">
          Link to the new
        </a>
        <Link to="/">Go back</Link>
      </div>
      <hr />
      <SanitizedContent content={content} />
      {/* вывод корневых комментариев  */}
      {comments?.map((item: NewsItem) => (
        <>
          <Comment key={item.id} comment={item} />
        </>
      ))}
    </div>
  );
};

export default ArticleId;
