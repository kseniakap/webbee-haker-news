import Article from './article/Article';
import PageContainer from '../pageContainer/PageContainer';
import RefreshData from '../refreshData/RefreshData';
import { News } from '../../types/main';

const ArticleList = () => {
  return (
    <PageContainer>
      <RefreshData text="articles" method="useGetAllNewsQuery">
        {(data) => data?.map((item: News) => <Article key={item.id} item={item} />)}
      </RefreshData>
    </PageContainer>
  );
};

export default ArticleList;
