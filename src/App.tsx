import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../src/router/AppRouter';
import { QueryClient, QueryClientProvider } from 'react-query';
import "./styles/style.scss"

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
