import AppRouter from '../src/router/AppRouter';
import { QueryClient, QueryClientProvider } from 'react-query';
import './styles/style.scss';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
};

export default App;
