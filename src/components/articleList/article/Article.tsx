import { News } from '../../../types/main';
import { Link } from 'react-router-dom';
import { getRating } from '../../../utils/getRating';
import { transformTime } from '../../../utils/transformTime';
import styles from './Article.module.scss';

type ArticleProps = {
  item: News;
};

const Article = ({ item }: ArticleProps) => {
  const { title, user, points, commentsCount, timeAgo, time } = item;

  return (
    <li className={styles.article}>
      <div>
        <div className={styles.block}>
          <Link to={`/item/${item.id}`} className={styles.link}>
            {title}
          </Link>
          <span>|</span>
          <h4 className={styles.subtitle}>{user}</h4>
        </div>
        <div className={styles.block}>
          {points && (
            <>
              <p>{points} points</p>
              <span>|</span>
              <p>{getRating(points)}</p>
            </>
          )}
          <span>|</span>
          <p>{commentsCount} comments</p>
        </div>
      </div>
      <div className={styles.time}>
        <p>{transformTime(time)}</p>
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
