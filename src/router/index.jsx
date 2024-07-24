import { createBrowserRouter } from 'react-router-dom';
import { MainPage, SearchPage } from '../components/page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchPage />,
  },
  {
    path: '/:gameName/:tagLine',
    element: <MainPage />,
    errorElement: <h1>Error</h1>,
  },
]);
