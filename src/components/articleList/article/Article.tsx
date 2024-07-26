import { FC } from 'react';
import { News } from '../../../types/main';
import st from './Article.module.scss';
import { useNavigate } from 'react-router-dom';

type ArticleProps = {
  item: News;
};

const Article: FC<ArticleProps> = ({ item }) => {
  const router = useNavigate();
  const { title, user, points, comments_count, time_ago } = item;

  return (
    <li key={item.id} className={st.article}>
      <div>
        <div className={st.block}>
          <h3 onClick={() => router(`/item/${item.id}`)}>{title}</h3>
          <p className={st.subtitle}>Author: {user}</p>
        </div>
        <div className={st.block}>
          <p>{points} points</p> 
          <span>|</span>
          <p>{comments_count} comments</p>
        </div>
      </div>
      <p>{time_ago}</p>
    </li>
  );
};

export default Article;
