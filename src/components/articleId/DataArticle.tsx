import { Link, useParams } from 'react-router-dom';
import SanitizedContent from '../sanitizedComponent/SanitizedComponent';
import { newsApi } from '../../services/NewsService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Loader from '../loader/Loader';
import { getRating } from '../../utils/getRating';
import { transformTime } from '../../utils/transformTime';
import RootComments from '../rootComments/RootComments';
import styles from './DataArticle.module.scss';

const DataArticle = () => {
  const { id } = useParams();
  const { data: dataArticle, isLoading, error } = newsApi.useGetNewByIdQuery(id!);

  if (isLoading) {
    return <Loader />;
  }

  if (error || !dataArticle) {
    return <ErrorMessage />;
  }

  const { title, user, points, url, time, timeAgo, content, commentsCount } = dataArticle;

  return (
    <div className={styles.articleId}>
      <h2>{title}</h2>
      <div>
        <p>
          Author: <span>{user}</span>
        </p>
        {points && <p>Rating: {getRating(points)}</p>}
        <p>Date: {transformTime(time)}</p>
        <p>{commentsCount} comments</p>
        <p>{timeAgo}</p>
      </div>
      <div className={styles.btns}>
        {url && (
          <a href={url} target="_blank" rel="noreferrer">
            Link to the new
          </a>
        )}
        <Link to="/">Go back</Link>
      </div>
      <hr />
      {content && (
        <>
          <h3>Topic</h3>
          <div className={styles.content}>
            <SanitizedContent content={content} />
          </div>
        </>
      )}
      <RootComments articleId={id!} />
    </div>
  );
};

export default DataArticle;
