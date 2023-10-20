import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import Container from './components/container/Container';
import './index.css';
import UserProvider from './lib/context/user';
import router from './routes/Routes';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Container>
          <RouterProvider router={router} />
        </Container>
      </QueryClientProvider>
    </UserProvider>
  </React.StrictMode>
);
