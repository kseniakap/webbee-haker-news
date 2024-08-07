import Article from './article/Article';
import RefreshData from '../refreshData/RefreshData';
import { News } from '../../types/main';

const ArticleList = () => {
  return (
    <RefreshData<News> text="news" method="useGetAllNewsQuery">
      {(data) => data?.map((item: News) => <Article key={item.id} item={item} />)}
    </RefreshData>
  );
};

export default ArticleList;
