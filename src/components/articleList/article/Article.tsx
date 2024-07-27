import { FC } from 'react';
import { News } from '../../../types/main';
import { useNavigate } from 'react-router-dom';
import { getRating } from '../../../utils/getRating';
import st from './Article.module.scss';
import { tranformData } from '../../../utils/transformTime';

type ArticleProps = {
  item: News;
};

const Article: FC<ArticleProps> = ({ item }) => {
  const router = useNavigate();
  const { title, user, points, comments_count, time_ago, time } = item;

  return (
    <li key={item.id} className={st.article}>
      <div>
        <div className={st.block}>
          <h3 onClick={() => router(`/item/${item.id}`)}>{title}</h3>
          <h4 className={st.subtitle}>Author: {user}</h4>
        </div>
        <div className={st.block}>
          {points && <p>{getRating(points)}</p>}
          <span>|</span>
          <p>{comments_count} comments</p>
        </div>
      </div>
      <div className={st.time}>
        <p>{tranformData(time)}</p>
        <p>({time_ago})</p>
      </div>
    </li>
  );
};

export default Article;
