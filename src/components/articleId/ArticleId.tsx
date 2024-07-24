import { FC } from 'react';
import { NewsItem } from '../../types/main';
import { Link } from 'react-router-dom';
import st from './ArticleId.module.scss';
import AllComments from '../allComments/AllComments';

type ArticleIdProps = {
  data: NewsItem | undefined;
};

const ArticleId: FC<ArticleIdProps> = ({ data }) => {
  if (!data) {
    return <p>Data not found</p>;
  }
  const { title, user, url, time_ago, comments_count, comments } = data;

  return (
    <div className={st.articleId}>
      <h2>{title}</h2>
      <div>
        <p>Athor: <span>{user}</span></p>
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
      <AllComments data={comments} />
    </div>
  );
};

export default ArticleId;
