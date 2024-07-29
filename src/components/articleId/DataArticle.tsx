import { FC } from 'react';
import { Link } from 'react-router-dom';
import SanitizedContent from '../sanitizeComponent/SanitizeComponent';
import st from './DataArticle.module.scss';
import { newsApi } from '../../services/NewsService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Loader from '../loader/Loader';
import { getRating } from '../../utils/getRating';
import { tranformData } from '../../utils/transformTime';
import RootComments from '../rootComments/RootComments';

type ArticleIdProps = {
  articleId: number | string;
};

const DataArticle: FC<ArticleIdProps> = ({ articleId }) => {
  const { data: dataArticle, isLoading, error } = newsApi.useGetNewByIdQuery(articleId);
  if (error) {
    return <ErrorMessage />;
  }

  if (isLoading || !dataArticle) {
    return <Loader />;
  }

  const { title, user, points, url, time, time_ago, content, comments_count } = dataArticle;

  return (
    <div className={st.articleId}>
      <h2>{title}</h2>
      <div>
        <p>
          Athor: <span>{user}</span>
        </p>
        {points && <p>Rating: {getRating(points)}</p>}
        <p>Date: {tranformData(time)}</p>
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
      {content !== '' && (
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
