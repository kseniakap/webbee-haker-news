import AppRouter from '../src/router/AppRouter';
import { QueryClient, QueryClientProvider } from 'react-query';
import './styles/style.scss';
import PageContainer from './components/pageContainer/PageContainer';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PageContainer>
        <AppRouter />
      </PageContainer>
    </QueryClientProvider>
  );
};

export default App;
