import { News } from '../../../types/main';
import { Link } from 'react-router-dom';
import { getRating } from '../../../utils/getRating';
import { tranformData } from '../../../utils/transformTime';
import st from './Article.module.scss';

type ArticleProps = {
  item: News;
};

const Article = ({ item }: ArticleProps) => {
  const { title, user, points, commentsCount, timeAgo, time } = item;

  return (
    <li key={item.id} className={st.article}>
      <div>
        <div className={st.block}>
          <Link to={`/item/${item.id}`}>{title}</Link>
          <span>|</span>
          <h4 className={st.subtitle}>{user}</h4>
        </div>
        <div className={st.block}>
          {points && <p>{getRating(points)}</p>}
          <span>|</span>
          <p>{commentsCount} comments</p>
        </div>
      </div>
      <div className={st.time}>
        <p>{tranformData(time)}</p>
        <p>
          <span>(</span>
          {timeAgo}
          <span>)</span>
        </p>
      </div>
    </li>
  );
};

export default Article;
