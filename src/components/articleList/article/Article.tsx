import { FC } from 'react';
import { News } from '../../../types/main';
import st from './Article.module.scss';
import { useNavigate } from 'react-router-dom';

type ArticleProps = {
  item: News;
};

const Article: FC<ArticleProps> = ({ item }) => {
  const router = useNavigate();
  return (
    <li key={item.id} className={st.article}>
      <div>
        <div className={st.block}>
          <h3 onClick={() => router(`/item/${item.id}`)}>{item.title}</h3>
          <p className={st.subtitle}>{item.user}</p>
        </div>
        <div className={st.block}>
          <p>{item.points} points</p>
          <p>{item.comments_count} comments</p>
        </div>
      </div>
      <p>{item.time_ago}</p>
    </li>
  );
};

export default Article;
