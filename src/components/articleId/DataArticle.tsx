import { Link } from 'react-router-dom';
import SanitizedContent from '../sanitizeComponent/SanitizeComponent';
import { newsApi } from '../../services/NewsService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Loader from '../loader/Loader';
import { getRating } from '../../utils/getRating';
import { tranformData } from '../../utils/transformTime';
import RootComments from '../rootComments/RootComments';
import st from './DataArticle.module.scss';

type ArticleIdProps = {
  articleId: number | string;
};

const DataArticle = ({ articleId }: ArticleIdProps) => {
  const { data: dataArticle, isLoading, error } = newsApi.useGetNewByIdQuery(articleId);

  if (isLoading) {
    return <Loader />;
  }

  if (error || !dataArticle) {
    return <ErrorMessage />;
  }

  const { title, user, points, url, time, timeAgo, content, commentsCount } = dataArticle;

  return (
    <div className={st.articleId}>
      <h2>{title}</h2>
      <div>
        <p>
          Author: <span>{user}</span>
        </p>
        {points && <p>Rating: {getRating(points)}</p>}
        <p>Date: {tranformData(time)}</p>
        <p>{commentsCount} comments</p>
        <p>{timeAgo}</p>
      </div>
      <div className={st.btns}>
        <a href={url} target="blank">
          Link to the new
        </a>
        <Link to="/">Go back</Link>
      </div>
      <hr />
      {content && (
        <>
          <h3>Topic</h3>
          <div className={st.content}>
            <SanitizedContent content={content} />
          </div>
        </>
      )}
      <RootComments articleId={articleId} />
    </div>
  );
};

export default DataArticle;
