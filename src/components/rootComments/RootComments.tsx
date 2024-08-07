import { Comments } from '../../types/main';
import Comment from '../oneComment/Comment';
import RefreshData from '../refreshData/RefreshData';

type RootCommentsProps = {
  articleId: number | string;
};

const RootComments = ({ articleId }: RootCommentsProps) => {
  return (
    <RefreshData<Comments>  id={articleId} text="comments" method="getAllRootComments">
      {(data) => data?.map((item: Comments) => <Comment key={item.id} commentData={item} />)}
    </RefreshData>
  );
};

export default RootComments;
